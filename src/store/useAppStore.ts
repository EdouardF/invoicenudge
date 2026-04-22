import { create } from 'zustand';
import type { Invoice, Client, Reminder, Template } from '../types';

const STORAGE_KEY = 'invoicenudge-state';

function loadState(): Partial<Pick<AppState, 'invoices' | 'clients' | 'reminders' | 'templates' | 'darkMode'>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveState(state: Pick<AppState, 'invoices' | 'clients' | 'reminders' | 'templates' | 'darkMode'>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      invoices: state.invoices,
      clients: state.clients,
      reminders: state.reminders,
      templates: state.templates,
      darkMode: state.darkMode,
    }));
  } catch {
    // Storage full or unavailable — fail silently
  }
}

interface AppState {
  invoices: Invoice[];
  clients: Client[];
  reminders: Reminder[];
  templates: Template[];
  selectedInvoice: Invoice | null;
  selectedClient: Client | null;
  darkMode: boolean;
  isLoading: boolean;
  error: string | null;

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
  addReminder: (reminder: Reminder) => void;
  updateReminder: (id: string, updates: Partial<Reminder>) => void;
  deleteReminder: (id: string) => void;
  setSelectedInvoice: (invoice: Invoice | null) => void;
  setSelectedClient: (client: Client | null) => void;
  toggleDarkMode: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const saved = loadState();

export const useAppStore = create<AppState>((set) => ({
  invoices: saved.invoices ?? [],
  clients: saved.clients ?? [],
  reminders: saved.reminders ?? [],
  templates: saved.templates ?? [],
  selectedInvoice: null,
  selectedClient: null,
  darkMode: saved.darkMode ?? false,
  isLoading: false,
  error: null,

  setInvoices: (invoices) => set({ invoices }),
  setClients: (clients) => set({ clients }),
  setReminders: (reminders) => set({ reminders }),
  setTemplates: (templates) => set({ templates }),

  addInvoice: (invoice) => set((s) => {
    const next = { ...s, invoices: [...s.invoices, invoice] };
    saveState(next);
    return { invoices: next.invoices };
  }),
  updateInvoice: (id, updates) =>
    set((s) => {
      const invoices = s.invoices.map((i) => (i.id === id ? { ...i, ...updates } : i));
      const next = { ...s, invoices };
      saveState(next);
      return { invoices };
    }),
  deleteInvoice: (id) => set((s) => {
    const next = { ...s, invoices: s.invoices.filter((i) => i.id !== id) };
    saveState(next);
    return { invoices: next.invoices };
  }),

  addClient: (client) => set((s) => {
    const next = { ...s, clients: [...s.clients, client] };
    saveState(next);
    return { clients: next.clients };
  }),
  updateClient: (id, updates) =>
    set((s) => {
      const clients = s.clients.map((c) => (c.id === id ? { ...c, ...updates } : c));
      const next = { ...s, clients };
      saveState(next);
      return { clients };
    }),
  deleteClient: (id) => set((s) => {
    const next = { ...s, clients: s.clients.filter((c) => c.id !== id) };
    saveState(next);
    return { clients: next.clients };
  }),

  addReminder: (reminder) => set((s) => {
    const next = { ...s, reminders: [...s.reminders, reminder] };
    saveState(next);
    return { reminders: next.reminders };
  }),
  updateReminder: (id, updates) => set((s) => {
    const reminders = s.reminders.map((r) => (r.id === id ? { ...r, ...updates } : r));
    const next = { ...s, reminders };
    saveState(next);
    return { reminders };
  }),
  deleteReminder: (id) => set((s) => {
    const next = { ...s, reminders: s.reminders.filter((r) => r.id !== id) };
    saveState(next);
    return { reminders: next.reminders };
  }),

  setSelectedInvoice: (invoice) => set({ selectedInvoice: invoice }),
  setSelectedClient: (client) => set({ selectedClient: client }),
  toggleDarkMode: () => set((s) => {
    const darkMode = !s.darkMode;
    const next = { ...s, darkMode };
    saveState(next);
    return { darkMode };
  }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));