import { create } from 'zustand';
import type { Invoice, Client, Reminder, Template } from '../types';

interface AppState {
  invoices: Invoice[];
  clients: Client[];
  reminders: Reminder[];
  templates: Template[];
  selectedInvoice: Invoice | null;
  selectedClient: Client | null;
  darkMode: boolean;
  isLoading: boolean;

  setInvoices: (invoices: Invoice[]) => void;
  setClients: (clients: Client[]) => void;
  setReminders: (reminders: Reminder[]) => void;
  setTemplates: (templates: Template[]) => void;
  addInvoice: (invoice: Invoice) => void;
  updateInvoice: (id: string, updates: Partial<Invoice>) => void;
  deleteInvoice: (id: string) => void;
  addClient: (client: Client) => void;
  updateClient: (id: string, updates: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  setSelectedInvoice: (invoice: Invoice | null) => void;
  setSelectedClient: (client: Client | null) => void;
  toggleDarkMode: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  invoices: [],
  clients: [],
  reminders: [],
  templates: [],
  selectedInvoice: null,
  selectedClient: null,
  darkMode: false,
  isLoading: false,

  setInvoices: (invoices) => set({ invoices }),
  setClients: (clients) => set({ clients }),
  setReminders: (reminders) => set({ reminders }),
  setTemplates: (templates) => set({ templates }),

  addInvoice: (invoice) => set((s) => ({ invoices: [...s.invoices, invoice] })),
  updateInvoice: (id, updates) =>
    set((s) => ({
      invoices: s.invoices.map((i) => (i.id === id ? { ...i, ...updates } : i)),
    })),
  deleteInvoice: (id) => set((s) => ({ invoices: s.invoices.filter((i) => i.id !== id) })),

  addClient: (client) => set((s) => ({ clients: [...s.clients, client] })),
  updateClient: (id, updates) =>
    set((s) => ({
      clients: s.clients.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    })),
  deleteClient: (id) => set((s) => ({ clients: s.clients.filter((c) => c.id !== id) })),

  setSelectedInvoice: (invoice) => set({ selectedInvoice: invoice }),
  setSelectedClient: (client) => set({ selectedClient: client }),
  toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
  setLoading: (isLoading) => set({ isLoading }),
}));