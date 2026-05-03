# Hospital Management System - Weeks 14-17

## Overview
Weeks 14-17 complete the hospital management system with billing, pharmacy, and lab management features.

## Features Implemented
- ✅ **Weeks 1-13 Features** (Setup, auth, patients, appointments)
- ✅ **Billing System**: Invoice generation, payment processing, billing history
- ✅ **Pharmacy Management**: Medicine inventory, prescription dispensing, stock management
- ✅ **Lab Management**: Test requests, lab reports, technician workflows
- ✅ **Reporting Dashboard**: Analytics, financial reports, system statistics
- ✅ **Payment Integration**: Payment tracking and status management
- ✅ **Inventory Management**: Medicine stock levels and alerts
- ✅ **Lab Result Management**: Test result storage and retrieval

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, Shadcn/ui
- **Backend**: Node.js, Express.js, MySQL
- **Authentication**: JWT, bcrypt

## New Endpoints (Weeks 14-17)
### Billing System
- `GET /api/billing/invoices` - List all invoices
- `POST /api/billing/invoices` - Create invoice
- `GET /api/billing/invoices/:id` - Get invoice details
- `PUT /api/billing/invoices/:id` - Update invoice
- `POST /api/billing/payments` - Process payments

### Pharmacy Management
- `GET /api/pharmacy/medicines` - List medicines
- `POST /api/pharmacy/medicines` - Add medicine
- `PUT /api/pharmacy/medicines/:id` - Update medicine stock
- `POST /api/pharmacy/dispensing` - Dispense prescription
- `GET /api/pharmacy/prescriptions` - Get prescriptions

### Lab Management
- `GET /api/lab/tests` - List lab tests
- `POST /api/lab/tests` - Request lab test
- `PUT /api/lab/tests/:id` - Update test status
- `POST /api/lab/reports` - Upload lab report
- `GET /api/lab/reports` - Get lab reports

### Reporting
- `GET /api/admin/reports` - System reports
- `GET /api/admin/analytics` - Dashboard analytics
- `GET /api/admin/financial` - Financial reports

## Getting Started

### Prerequisites
- Node.js (v18+)
- MySQL Server
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hospital-management-week1.git
   cd hospital-management-week1
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   npm install

   # Backend
   cd backend
   npm install
   cd ..
   ```

3. **Database Setup**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your MySQL credentials
   npm run setup-db
   ```

4. **Start the application**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm run dev

   # Terminal 2: Frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Demo Credentials
- **Admin**: admin@hospital.com / password123
- **Doctor**: dr.cardiology@hospital.com / password123
- **Patient**: jane.doe@hospital.com / password123

## Project Structure
```
├── app/                    # Next.js app directory
│   ├── patient/           # Patient portal pages
│   ├── doctor/            # Doctor pages (appointments, availability)
│   ├── admin/             # Admin pages (user management, reports)
│   ├── billing/           # Billing and payment pages
│   ├── pharmacy/          # Pharmacy management pages
│   └── lab/               # Lab management pages
├── backend/               # Express.js backend
│   ├── controllers/      # All route controllers
│   ├── middleware/       # Authentication middleware
│   ├── routes/          # All API routes
│   └── scripts/         # Database setup scripts
├── components/           # Reusable UI components
├── lib/                  # Utility functions
├── src/                  # Additional source files
│   ├── services/        # API service functions
│   └── components/      # React components
└── public/              # Static assets
```

## Development Phases
- **Weeks 1-4**: Basic setup and authentication system
- **Weeks 4-8**: Patient management system
- **Weeks 9-13**: Appointment scheduling and management
- **Weeks 14-17**: Billing, pharmacy, and lab management

## Complete Feature Set
✅ User Authentication & Authorization
✅ Role-based Access Control (Admin, Doctor, Patient, Staff)
✅ Patient Management & Portal
✅ Appointment Scheduling & Management
✅ Billing & Payment Processing
✅ Pharmacy & Medicine Management
✅ Lab Test & Report Management
✅ Administrative Dashboard & Reports
✅ Responsive UI with Modern Design

## Contributing
This is Week 1 of a 4-week project development series.