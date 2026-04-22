import { useAppStore } from '../store/useAppStore';
import { getClientName, STATUS_COLORS, STATUS_ICONS } from '../utils/helpers';

export default function InvoiceList() {
  const { invoices, clients, setSelectedInvoice } = useAppStore();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Invoices ({invoices.length})
        </h3>
      </div>
      {invoices.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <p className="text-4xl mb-3">📄</p>
          <p>No invoices yet. Create your first invoice to get started.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">Invoice list with client, amount, due date, status and reminders</caption>
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Client</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Amount</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Due Date</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Reminders</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  onClick={() => setSelectedInvoice(invoice)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedInvoice(invoice); } }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Invoice for ${getClientName(clients, invoice.clientId)}, $${invoice.amount.toFixed(2)}, ${invoice.status}`}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-white">{getClientName(clients, invoice.clientId)}</td>
                  <td className="px-4 py-3 font-mono text-gray-900 dark:text-white">${invoice.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{invoice.dueDate}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[invoice.status] || ''}`}>
                      {STATUS_ICONS[invoice.status] || ''} {invoice.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{invoice.reminderCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}