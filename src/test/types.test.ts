import { describe, it, expect } from 'vitest';
import { STATUS_LABELS, STATUS_COLORS, STATUS_ICONS, getClientName, formatDate, isValidEmail } from '../utils/helpers';

describe('helpers', () => {
  describe('STATUS_LABELS', () => {
    it('should have labels for all invoice statuses', () => {
      expect(STATUS_LABELS.draft).toBe('Draft');
      expect(STATUS_LABELS.sent).toBe('Sent');
      expect(STATUS_LABELS.paid).toBe('Paid');
      expect(STATUS_LABELS.overdue).toBe('Overdue');
      expect(STATUS_LABELS.viewed).toBe('Viewed');
      expect(STATUS_LABELS.cancelled).toBe('Cancelled');
    });
  });

  describe('STATUS_COLORS', () => {
    it('should have CSS classes for all statuses', () => {
      Object.entries(STATUS_COLORS).forEach(([key, classes]) => {
        expect(classes).toBeDefined();
        expect(typeof classes).toBe('string');
        expect(classes.length).toBeGreaterThan(0);
      });
    });
  });

  describe('STATUS_ICONS', () => {
    it('should have icons for all statuses', () => {
      expect(STATUS_ICONS.draft).toBe('📝');
      expect(STATUS_ICONS.paid).toBe('✅');
      expect(STATUS_ICONS.overdue).toBe('⚠️');
    });
  });

  describe('getClientName', () => {
    const clients = [
      { id: '1', name: 'Alice', email: 'alice@test.com', createdAt: '', invoiceCount: 0, totalRevenue: 0 },
      { id: '2', name: 'Bob', email: 'bob@test.com', createdAt: '', invoiceCount: 0, totalRevenue: 0 },
    ];

    it('should return client name when found', () => {
      expect(getClientName(clients, '1')).toBe('Alice');
      expect(getClientName(clients, '2')).toBe('Bob');
    });

    it('should return Unknown when client not found', () => {
      expect(getClientName(clients, '999')).toBe('Unknown');
    });
  });

  describe('formatDate', () => {
    it('should format valid ISO date', () => {
      const result = formatDate('2026-01-15');
      expect(result).toContain('2026');
    });

    it('should return input for invalid date', () => {
      expect(formatDate('not-a-date')).toBe('not-a-date');
    });
  });

  describe('isValidEmail', () => {
    it('should accept valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('no-at-sign')).toBe(false);
      expect(isValidEmail('missing@domain')).toBe(false);
    });
  });
});