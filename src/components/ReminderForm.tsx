import { useAppStore } from '../store/useAppStore';
import { getClientName } from './InvoiceList';

export default function ReminderForm() {
  const { invoices, clients, selectedInvoice, reminders } = useAppStore();
  const overdueInvoices = invoices.filter((i) => i.status === 'overdue' || i.status === 'sent');

  const invoiceReminders = selectedInvoice
    ? reminders.filter((r) => r.invoiceId === selectedInvoice.id)
    : [];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        🔔 Reminders
      </h3>

      {selectedInvoice ? (
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Reminders for invoice to {getClientName(clients, selectedInvoice.clientId)} — ${selectedInvoice.amount.toFixed(2)}
          </p>
          {invoiceReminders.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500">No reminders sent yet.</p>
          ) : (
            <div className="space-y-2">
              {invoiceReminders.map((r) => (
                <div key={r.id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{r.type.toUpperCase()}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      r.status === 'sent' ? 'bg-green-100 text-green-800' : r.status === 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>{r.status}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{r.sentAt || 'Pending'}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : overdueInvoices.length > 0 ? (
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {overdueInvoices.length} invoice(s) may need reminders
          </p>
          <div className="space-y-2">
            {overdueInvoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <span className="text-sm text-gray-900 dark:text-white">{getClientName(clients, inv.clientId)} — ${inv.amount.toFixed(2)}</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-400">{inv.status}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">All invoices are up to date. No reminders needed.</p>
      )}
    </div>
  );
}