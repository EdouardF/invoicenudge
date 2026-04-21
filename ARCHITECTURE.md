## Architecture InvoiceNudge

### Stack
- **Frontend**: React + Vite + TypeScript + TailwindCSS
- **Backend**: Node.js + Express + SQLite

### Architecture

#### Frontend
- **Components**: UserCard, InvoiceList, ClientDashboard, ReminderForm, TemplateEditor
- **State Management**: Context API for user authentication and invoice state
- **Routing**: React Router for navigation between pages
- **Styling**: TailwindCSS for responsive, modern UI

#### Backend
- **API Endpoints**: RESTful API for invoice management, client data, reminders, and templates
- **Database**: SQLite for storing invoices, clients, reminders, and templates
- **Authentication**: JWT for secure user authentication
- **Error Handling**: Centralized error handling for API requests

### Schéma SQLite

```sql
CREATE TABLE invoices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER,
  amount REAL,
  due_date DATE,
  status TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  phone TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reminders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoice_id INTEGER,
  message TEXT,
  sent_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE templates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  subject TEXT,
  body TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### API REST Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/invoices | Get all invoices |
| GET | /api/invoices/:id | Get invoice by ID |
| POST | /api/invoices | Create a new invoice |
| PUT | /api/invoices/:id | Update an invoice |
| DELETE | /api/invoices/:id | Delete an invoice |
| GET | /api/clients | Get all clients |
| GET | /api/clients/:id | Get client by ID |
| POST | /api/clients | Create a new client |
| PUT | /api/clients/:id | Update a client |
| DELETE | /api/clients/:id | Delete a client |
| GET | /api/reminders | Get all reminders |
| GET | /api/reminders/:id | Get reminder by ID |
| POST | /api/reminders | Create a new reminder |
| PUT | /api/reminders/:id | Update a reminder |
| DELETE | /api/reminders/:id | Delete a reminder |
| GET | /api/templates | Get all templates |
| GET | /api/templates/:id | Get template by ID |
| POST | /api/templates | Create a new template |
| PUT | /api/templates/:id | Update a template |
| DELETE | /api/templates/:id | Delete a template |

### Composants React

1. **UserCard**: Displays user information and authentication status
2. **InvoiceList**: Displays a list of invoices with filters and sorting options
3. **ClientDashboard**: Displays client information and invoice history
4. **ReminderForm**: Form for creating and editing reminders
5. **TemplateEditor**: Form for creating and editing email templates

### Design System

- **Couleurs**: 
  - Primary: #4F46E5 (violet)
  - Secondary: #6366F1 (bleu)
  - Background: #F9FAFB (gris clair)
  - Text: #111827 (noir)
- **Typographie**: 
  - Headings: Inter SemiBold
  - Body: Inter Regular
  - Code: Monospace

### Plan de sous-tâches pour Gustave

1. Implémenter le composant UserCard
2. Implémenter le composant InvoiceList
3. Implémenter le composant ClientDashboard
4. Implémenter le composant ReminderForm
5. Implémenter le composant TemplateEditor
6. Implémenter les endpoints REST pour les factures
7. Implémenter les endpoints REST pour les clients
8. Implémenter les endpoints REST pour les rappels
9. Implémenter les endpoints REST pour les modèles
10. Intégrer Stripe pour importer les factures
11. Intégrer Twilio pour envoyer des rappels SMS
12. Intégrer Resend pour envoyer des rappels email

### Intégrations

- **Stripe**: Importer les factures depuis l'API Stripe
- **Twilio**: Envoyer des rappels SMS via Twilio
- **Resend**: Envoyer des rappels email via Resend

Co-authored-by: Léonard <leonard@vanlife.dev>