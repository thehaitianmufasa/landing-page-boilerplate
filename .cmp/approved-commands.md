# Pre-Approved Commands

## Rules
1. Must be verified with user FIRST time
2. Only recurring, non-destructive operations
3. Auto-execute thereafter without asking
4. User can revoke anytime
5. Document context so future sessions understand

## Approved Commands

| Command | Context | Approved | Safe Because |
|---------|---------|----------|--------------|
| `bun run dev` | Start dev server | Always | Read-only, local server |
| `bun run build` | Production build | Always | No side effects |
| `bun run typecheck` | Type validation | Always | Read-only analysis |
| `bun run lint` | Code linting | Always | Read-only analysis |
| `bun run format` | Code formatting | Always | Reversible, style only |
| `bun install` | Install deps | Always | Package management |
| `git status` | Check repo state | Always | Read-only |
| `git diff` | View changes | Always | Read-only |
| `git add .cmp/` | Stage CMP files | Always | Only affects CMP tracking |

## Pending Verification
*Commands seen multiple times, awaiting user approval*

| Command | Times Seen | Context |
|---------|------------|---------|
| | | |

## Revoked Commands

| Command | Reason | Date Revoked |
|---------|--------|--------------|
| | | |

---
*Only add to Approved after explicit user confirmation*
