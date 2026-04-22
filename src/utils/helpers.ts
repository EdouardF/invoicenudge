import type { Client } from '../types';

/**
 * Look up a client name by ID. Uses a simple find for small lists.
 * For larger datasets, consider pre-building a Map<id, name>.
 * @param clients - Array of client objects
 * @param clientId - Client ID to look up
 * @returns Client name or "Unknown" if not found
 */
export function getClientName(clients: Client[], clientId: string): string {
  return clients.find((c) => c.id === clientId)?.name || 'Unknown';
}

/**
 * Format a date string for display using locale formatting.
 * @param dateStr - ISO date string (e.g., "2026-05-01")
 * @returns Locale-formatted date string
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

/**
 * Validate an email address format.
 * @param email - Email string to validate
 * @returns True if email matches basic format
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Map invoice status to display label.
 */
export const STATUS_LABELS: Record<string, string> = {
  draft: 'Draft',
  sent: 'Sent',
  viewed: 'Viewed',
  paid: 'Paid',
  overdue: 'Overdue',
  cancelled: 'Cancelled',
};

/**
 * Map invoice status to Tailwind CSS color classes.
 * Includes both background and text colors for light/dark mode.
 */
export const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  sent: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  viewed: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  paid: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  cancelled: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
};

/**
 * Status icons for accessibility (colorblind-friendly).
 */
export const STATUS_ICONS: Record<string, string> = {
  draft: '📝',
  sent: '📤',
  viewed: '👀',
  paid: '✅',
  overdue: '⚠️',
  cancelled: '❌',
};