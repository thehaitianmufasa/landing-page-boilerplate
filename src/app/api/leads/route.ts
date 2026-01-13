import { NextRequest, NextResponse } from "next/server";
import { supabase, Lead } from "@/lib/supabase";
import { z } from "zod";

// Validation schema
const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  source: z.string().optional().default("landing-page"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      // Log to console in development if Supabase isn't configured
      console.log("📧 New lead (Supabase not configured):", validatedData);

      return NextResponse.json(
        {
          success: true,
          message: "Lead received (demo mode)",
          data: validatedData
        },
        { status: 200 }
      );
    }

    // Insert lead into Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert([validatedData as Lead])
      .select()
      .single();

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return NextResponse.json(
          { success: false, message: "This email is already registered." },
          { status: 409 }
        );
      }

      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to save lead" },
        { status: 500 }
      );
    }

    // Success
    console.log("✅ New lead saved:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Lead saved successfully",
        data
      },
      { status: 201 }
    );
  } catch (error) {
    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid data",
          errors: error.errors
        },
        { status: 400 }
      );
    }

    // Generic error
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to verify API is working
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "/api/leads",
    methods: ["POST"],
    fields: {
      required: ["name", "email"],
      optional: ["phone", "source"],
    },
  });
}
