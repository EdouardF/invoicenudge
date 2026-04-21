import { useMemo } from 'react';
import { useAppStore } from './store/useAppStore';
import Header from './components/Header';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import ClientDashboard from './components/ClientDashboard';
import ReminderForm from './components/ReminderForm';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const { darkMode, invoices, clients } = useAppStore();

  const totalRevenue = useMemo(() => invoices.reduce((sum, i) => sum + i.amount, 0), [invoices]);
  const overdueCount = useMemo(() => invoices.filter((i) => i.status === 'overdue').length, [invoices]);
  const paidCount = useMemo(() => invoices.filter((i) => i.status === 'paid').length, [invoices]);

  return (
    <ErrorBoundary>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
          <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">${totalRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Invoices</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{invoices.length}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Overdue</p>
              <p className="text-2xl font-bold text-red-500">{overdueCount}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Clients</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{clients.length}</p>
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <InvoiceList />
              <InvoiceForm />
            </div>
            <div className="space-y-6">
              <ClientDashboard />
              <ReminderForm />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
    </ErrorBoundary>
  );
}