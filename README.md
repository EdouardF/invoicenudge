# InvoiceNudge

> Automated invoice reminders for freelancers — never chase payments again.

[![CI](https://github.com/EdouardF/invoicenudge/actions/workflows/ci.yml/badge.svg)](https://github.com/EdouardF/invoicenudge/actions/workflows/ci.yml)
[![SonarCloud](https://github.com/EdouardF/invoicenudge/actions/workflows/sonar.yml/badge.svg)](https://github.com/EdouardF/invoicenudge/actions/workflows/sonar.yml)
[![Vitest](https://img.shields.io/badge/tested_with-vitest-6da13f)](https://vitest.dev/)

## Features

- 💰 Invoice CRUD with status tracking (draft → sent → viewed → paid/overdue)
- 👥 Client dashboard with contact management
- 🔔 Reminder tracking (email & SMS ready)
- 📊 Dashboard stats (revenue, overdue count, client count)
- 🌙 Dark mode
- 🔗 Stripe invoice import (planned)
- 📱 Twilio SMS reminders (planned)
- 📧 Resend email reminders (planned)

## Quick Start

```bash
git clone https://github.com/EdouardF/invoicenudge.git
cd invoicenudge
npm install
npm run dev
```

## Architecture

```
src/
├── components/
│   ├── Header.tsx
│   ├── InvoiceList.tsx
│   ├── InvoiceForm.tsx
│   ├── ClientDashboard.tsx
│   ├── ReminderForm.tsx
│   └── Footer.tsx
├── store/
│   └── useAppStore.ts
├── types/
│   └── index.ts
└── test/
    ├── setup.ts
    └── types.test.ts
```

**Planned backend:** Node.js + Express + SQLite with Stripe API, Twilio, Resend integrations.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + Vite |
| Language | TypeScript (strict) |
| Styling | TailwindCSS v4 |
| State | Zustand |
| Routing | React Router |
| Tests | Vitest + @testing-library/react |
| CI | GitHub Actions |
| Quality | SonarCloud |

## Pricing

| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | 5 invoices/mo, email reminders |
| Pro | $29/mo | Unlimited + SMS + Stripe + Templates |

## Testing

```bash
npx vitest run
npx vitest run --coverage
```

See [TESTING.md](./TESTING.md).

## License

MIT