# Contributing to InvoiceNudge

Thanks for your interest in contributing! Here's how to get started.

## Development Setup

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

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes with tests
3. Ensure all tests pass: `npm run test`
4. Ensure build passes: `npm run build`
5. Open a PR with a clear description

## Code Style

- TypeScript strict mode
- React functional components with hooks
- Tailwind CSS for styling
- JSDoc on all exported functions
- Tests required for new features

## Reporting Issues

Open a GitHub issue with:
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information