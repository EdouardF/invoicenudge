# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-04-22

### Added
- Invoice creation with amount validation and due dates
- Client management with email validation
- Smart reminder tracking system
- Dark mode support
- Error boundary for graceful crash recovery
- Accessible labels, ARIA attributes, and keyboard navigation
- Delete confirmation pattern (click once to show, again to confirm)
- Data persistence via localStorage (invoices, clients, reminders, templates, dark mode)
- Comprehensive test suite (12 tests across 2 files)
- NaN guard on invoice amounts

### Changed
- Extracted `getClientName` as shared utility (DRY)
- Removed unused `react-router-dom` dependency