import { describe, it, expect } from 'vitest';
import { INVOICE_STATUSES } from '../types';

describe('InvoiceNudge types', () => {
  it('should have all required invoice statuses', () => {
    expect(INVOICE_STATUSES.draft.label).toBe('Draft');
    expect(INVOICE_STATUSES.sent.label).toBe('Sent');
    expect(INVOICE_STATUSES.paid.label).toBe('Paid');
    expect(INVOICE_STATUSES.overdue.label).toBe('Overdue');
    expect(INVOICE_STATUSES.viewed.label).toBe('Viewed');
    expect(INVOICE_STATUSES.cancelled.label).toBe('Cancelled');
  });

  it('should have colors for all statuses', () => {
    Object.values(INVOICE_STATUSES).forEach((status) => {
      expect(status.color).toBeDefined();
      expect(typeof status.color).toBe('string');
    });
  });
});