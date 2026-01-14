# Continuous Memory Protocol (CMP) v3

## Quick Start
1. Read `handoff.md` first when resuming work
2. Check `context.md` for project intent
3. Review `todos.md` for remaining tasks
4. Check `issues.md` for known problems

## File Purposes

| File | Updates | Purpose |
|------|---------|---------|
| `context.md` | Rarely | Project intent, rules, success criteria |
| `todos.md` | Per item | Track progress, what's done/remaining |
| `insights.md` | Per item | Accumulated findings (append-only) |
| `issues.md` | As needed | Problems + solutions, open blockers |
| `approved-commands.md` | After verification | Recurring commands user approved once |
| `handoff.md` | End of session | Current state, next action, blockers |

## Workflow

```
┌─────────────────────────────────────┐
│         SESSION START               │
├─────────────────────────────────────┤
│ 1. Read handoff.md (where we left)  │
│ 2. Read context.md (why we're here) │
│ 3. Read todos.md (what's remaining) │
│ 4. Check issues.md (known problems) │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│         WORK LOOP                   │
├─────────────────────────────────────┤
│ 1. Pick next item from todos.md    │
│ 2. Execute (check approved-commands │
│    for recurring actions)           │
│ 3. Update:                          │
│    - todos.md (mark progress)       │
│    - insights.md (new learnings)    │
│    - issues.md (if problems)        │
│ 4. New recurring command?           │
│    → Verify once → add to approved  │
│ 5. Repeat                           │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│         SESSION END                 │
├─────────────────────────────────────┤
│ 1. Update handoff.md with:          │
│    - Current state                  │
│    - Exact next action              │
│    - Any blockers                   │
│ 2. Commit all .cmp/ files           │
└─────────────────────────────────────┘
```

## Key Rules

1. **Always read handoff.md first** when starting a session
2. **Append to insights.md** - never overwrite
3. **Update todos.md immediately** after completing tasks
4. **Log issues immediately** - don't rely on memory
5. **Verify commands once** then add to approved list
6. **Update handoff.md last** before ending session

## Memory Compaction Recovery

If context is lost mid-session:
1. Read all 6 files in order: handoff → context → todos → issues → approved-commands → insights
2. Resume from state described in handoff.md

## Git Integration

Commit CMP state for team/session continuity:
```bash
git add .cmp/
git commit -m "Update CMP state"
```
