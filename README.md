# InvoiceNudge

> Smart invoice reminder tool for freelancers and small businesses.

## Features

- **Client Management** — Add, update, and delete clients with email validation
- **Invoice Creation** — Create invoices with amount validation, due dates, and status tracking
- **Smart Reminders** — Track overdue invoices and reminder status
- **Dark Mode** — Full dark mode support
- **Data Persistence** — All data saved to localStorage automatically
- **Accessible** — Full keyboard navigation, ARIA labels, screen reader support
- **Error Boundary** — Graceful error handling with recovery UI

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Zustand** for state management
- **Vitest** for testing

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run test` | Run tests |
| `npm run test:coverage` | Tests with coverage |
| `npm run lint` | Lint with ESLint |

## Architecture

```
src/
├── components/        # React components
│   ├── ClientDashboard.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── InvoiceForm.tsx
│   ├── InvoiceList.tsx
│   └── ReminderForm.tsx
├── store/            # Zustand state management
│   └── useAppStore.ts
├── types/            # TypeScript type definitions
│   └── index.ts
└── test/             # Test files
    ├── store.test.ts
    └── types.test.ts
```

## License

MIT