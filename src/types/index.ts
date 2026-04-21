export interface Invoice {
  id: string;
  clientId: string;
  amount: number;
  dueDate: string;
  status: 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'cancelled';
  description: string;
  createdAt: string;
  updatedAt: string;
  stripeInvoiceId?: string;
  reminderCount: number;
  lastReminderAt?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  createdAt: string;
  invoiceCount: number;
  totalRevenue: number;
}

export interface Reminder {
  id: string;
  invoiceId: string;
  type: 'email' | 'sms';
  status: 'pending' | 'sent' | 'failed';
  message: string;
  sentAt?: string;
  createdAt: string;
}

export interface Template {
  id: string;
  name: string;
  subject: string;
  body: string;
  type: 'email' | 'sms';
  triggerDays: number;
  isDefault: boolean;
  createdAt: string;
}

export const INVOICE_STATUSES = {
  draft: { label: 'Draft', color: 'gray' },
  sent: { label: 'Sent', color: 'blue' },
  viewed: { label: 'Viewed', color: 'yellow' },
  paid: { label: 'Paid', color: 'green' },
  overdue: { label: 'Overdue', color: 'red' },
  cancelled: { label: 'Cancelled', color: 'gray' },
} as const;