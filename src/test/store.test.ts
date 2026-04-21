import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '../store/useAppStore';
import type { Invoice, Client } from '../types';

describe('useAppStore', () => {
  beforeEach(() => {
    useAppStore.setState({
      invoices: [],
      clients: [],
      reminders: [],
      templates: [],
      selectedInvoice: null,
      selectedClient: null,
      darkMode: false,
      isLoading: false,
    });
  });

  it('should add an invoice', () => {
    const invoice: Invoice = {
      id: '1', clientId: 'c1', amount: 500, dueDate: '2026-05-01',
      status: 'draft', description: 'Web dev', createdAt: '2026-04-21', updatedAt: '2026-04-21', reminderCount: 0,
    };
    useAppStore.getState().addInvoice(invoice);
    expect(useAppStore.getState().invoices).toHaveLength(1);
    expect(useAppStore.getState().invoices[0].amount).toBe(500);
  });

  it('should update an invoice', () => {
    const invoice: Invoice = {
      id: '1', clientId: 'c1', amount: 500, dueDate: '2026-05-01',
      status: 'draft', description: 'Web dev', createdAt: '2026-04-21', updatedAt: '2026-04-21', reminderCount: 0,
    };
    useAppStore.getState().addInvoice(invoice);
    useAppStore.getState().updateInvoice('1', { status: 'paid', amount: 450 });
    const updated = useAppStore.getState().invoices[0];
    expect(updated.status).toBe('paid');
    expect(updated.amount).toBe(450);
  });

  it('should delete an invoice', () => {
    const invoice: Invoice = {
      id: '1', clientId: 'c1', amount: 500, dueDate: '2026-05-01',
      status: 'draft', description: 'Web dev', createdAt: '2026-04-21', updatedAt: '2026-04-21', reminderCount: 0,
    };
    useAppStore.getState().addInvoice(invoice);
    useAppStore.getState().deleteInvoice('1');
    expect(useAppStore.getState().invoices).toHaveLength(0);
  });

  it('should add a client', () => {
    const client: Client = {
      id: 'c1', name: 'Acme', email: 'acme@test.com', createdAt: '2026-04-21', invoiceCount: 0, totalRevenue: 0,
    };
    useAppStore.getState().addClient(client);
    expect(useAppStore.getState().clients).toHaveLength(1);
    expect(useAppStore.getState().clients[0].name).toBe('Acme');
  });

  it('should update a client', () => {
    const client: Client = {
      id: 'c1', name: 'Acme', email: 'acme@test.com', createdAt: '2026-04-21', invoiceCount: 0, totalRevenue: 0,
    };
    useAppStore.getState().addClient(client);
    useAppStore.getState().updateClient('c1', { name: 'Acme Corp' });
    expect(useAppStore.getState().clients[0].name).toBe('Acme Corp');
  });

  it('should delete a client', () => {
    const client: Client = {
      id: 'c1', name: 'Acme', email: 'acme@test.com', createdAt: '2026-04-21', invoiceCount: 0, totalRevenue: 0,
    };
    useAppStore.getState().addClient(client);
    useAppStore.getState().deleteClient('c1');
    expect(useAppStore.getState().clients).toHaveLength(0);
  });

  it('should toggle dark mode', () => {
    expect(useAppStore.getState().darkMode).toBe(false);
    useAppStore.getState().toggleDarkMode();
    expect(useAppStore.getState().darkMode).toBe(true);
    useAppStore.getState().toggleDarkMode();
    expect(useAppStore.getState().darkMode).toBe(false);
  });

  it('should set selected invoice', () => {
    const invoice: Invoice = {
      id: '1', clientId: 'c1', amount: 500, dueDate: '2026-05-01',
      status: 'draft', description: 'Web dev', createdAt: '2026-04-21', updatedAt: '2026-04-21', reminderCount: 0,
    };
    useAppStore.getState().setSelectedInvoice(invoice);
    expect(useAppStore.getState().selectedInvoice?.id).toBe('1');
    useAppStore.getState().setSelectedInvoice(null);
    expect(useAppStore.getState().selectedInvoice).toBeNull();
  });

  it('should set loading state', () => {
    useAppStore.getState().setLoading(true);
    expect(useAppStore.getState().isLoading).toBe(true);
  });
});