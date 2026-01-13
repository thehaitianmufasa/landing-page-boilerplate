import { createClient } from "@supabase/supabase-js";

/**
 * Supabase Client
 * ===============
 * Initialize with your project credentials.
 *
 * Setup:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Get your project URL and anon key from Settings > API
 * 3. Add to your .env.local file
 *
 * Required table (run in Supabase SQL Editor):
 *
 * CREATE TABLE leads (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   email TEXT NOT NULL UNIQUE,
 *   phone TEXT,
 *   source TEXT DEFAULT 'landing-page',
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 *
 * -- Enable RLS (Row Level Security)
 * ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
 *
 * -- Create policy for inserting (anyone can submit a lead)
 * CREATE POLICY "Anyone can submit leads" ON leads
 *   FOR INSERT WITH CHECK (true);
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local"
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);

// Type for lead data
export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  source?: string;
  created_at?: string;
}
