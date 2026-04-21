# Testing — InvoiceNudge

## Strategy

| Type | Tool | Target |
|------|------|--------|
| Unit | Vitest | Types, store, utils |
| Component | @testing-library/react | UI components |
| Integration | Vitest | Invoice → Reminder flow |

## Run Tests

```bash
npx vitest run              # All tests
npx vitest run --coverage   # With coverage
npx vitest                  # Watch mode
```

## Coverage Target

≥ 80% line coverage (Rule 17)

## CI

Tests run on push/PR via `ci.yml`.