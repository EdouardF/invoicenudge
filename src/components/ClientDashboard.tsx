import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import type { Client } from '../types';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ClientDashboard() {
  const { clients, addClient, deleteClient } = useAppStore();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !isValidEmail(email)) return;
    const client: Client = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      company: company.trim() || undefined,
      createdAt: new Date().toISOString(),
      invoiceCount: 0,
      totalRevenue: 0,
    };
    addClient(client);
    setName(''); setEmail(''); setPhone(''); setCompany('');
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    if (confirmDeleteId === id) {
      deleteClient(id);
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
      setTimeout(() => setConfirmDeleteId(null), 3000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Clients ({clients.length})
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Client'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="p-4 border-b border-gray-200 dark:border-gray-700 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="client-name" className="sr-only">Name *</label>
              <input id="client-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name *" required
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="client-email" className="sr-only">Email *</label>
              <input id="client-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" type="email" required
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="client-phone" className="sr-only">Phone</label>
              <input id="client-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone"
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="client-company" className="sr-only">Company</label>
              <input id="client-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company"
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
            </div>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
            Add Client
          </button>
        </form>
      )}

      {clients.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <p className="text-4xl mb-3">👥</p>
          <p>No clients yet. Add your first client to get started.</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {clients.map((client) => (
            <div key={client.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{client.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{client.email}{client.company ? ` · ${client.company}` : ''}</p>
              </div>
              <button
                onClick={() => handleDelete(client.id)}
                className={`text-sm px-2 py-1 rounded transition-colors ${
                  confirmDeleteId === client.id
                    ? 'bg-red-600 text-white'
                    : 'text-red-400 hover:text-red-600'
                }`}
                aria-label={`Delete client ${client.name}`}
              >
                {confirmDeleteId === client.id ? 'Confirm?' : '✕'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}