# Hospital Management System - Week 2

## Overview
Week 2 builds upon Week 1 by adding comprehensive patient management features.

## Features Implemented
- ✅ **Week 1 Features** (Basic setup and authentication)
- ✅ **Patient Management**: CRUD operations for patient records
- ✅ **Patient Portal**: Dashboard, appointments, prescriptions
- ✅ **Patient Registration**: New patient onboarding
- ✅ **Patient Search & Filtering**: Find patients by various criteria
- ✅ **Patient History**: Medical history tracking
- ✅ **Patient Forms**: Registration and profile update forms

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, Shadcn/ui
- **Backend**: Node.js, Express.js, MySQL
- **Authentication**: JWT, bcrypt

## New Endpoints (Week 2)
### Patient Management
- `GET /api/patients` - List all patients
- `POST /api/patients` - Create new patient
- `GET /api/patients/:id` - Get patient details
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Patient Portal
- `GET /api/patient/dashboard` - Patient dashboard data
- `GET /api/patient/appointments` - Patient's appointments
- `POST /api/patient/appointments` - Book appointment
- `GET /api/patient/prescriptions` - Patient prescriptions
- `GET /api/patient/lab-reports` - Lab reports
- `GET /api/patient/invoices` - Billing invoices

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
│   └── patient/           # Patient portal pages
├── backend/               # Express.js backend
│   ├── controllers/      # Route controllers (auth, patient)
│   ├── middleware/       # Authentication middleware
│   ├── routes/          # API routes (auth, patients, patient-portal)
│   └── scripts/         # Database setup scripts
├── components/           # Reusable UI components
├── lib/                  # Utility functions
├── src/                  # Additional source files
│   ├── services/        # API service functions
│   └── components/      # React components
└── public/              # Static assets
```

## Next Weeks
- **Week 3**: Appointment scheduling and management
- **Week 4**: Billing, pharmacy, and lab management

## Contributing
This is Week 1 of a 4-week project development series.