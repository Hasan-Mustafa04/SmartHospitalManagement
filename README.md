# Smart Hospital Management System

A comprehensive hospital management system built with modern web technologies, developed over 17 weeks with progressive feature implementation.

## 📋 Development Timeline

### Weeks 1-4: Foundation & Authentication
- ✅ Project setup (Frontend + Backend)
- ✅ User authentication system
- ✅ JWT-based authorization
- ✅ Role-based access control
- ✅ Database design and setup
- ✅ Basic UI components

**Branch**: `main` or `week1`

### Weeks 4-8: Patient Management System
- ✅ Patient CRUD operations
- ✅ Patient portal dashboard
- ✅ Patient registration & profiles
- ✅ Medical history tracking
- ✅ Patient search & filtering
- ✅ Patient appointment history

**Branch**: `week2`

### Weeks 9-13: Appointment Scheduling
- ✅ Appointment booking system
- ✅ Doctor availability management
- ✅ Calendar integration
- ✅ Appointment status tracking
- ✅ Doctor-patient assignments
- ✅ Rescheduling & cancellation

**Branch**: `week3`

### Weeks 14-17: Complete System Integration
- ✅ Billing & payment processing
- ✅ Pharmacy management
- ✅ Lab test & report management
- ✅ Administrative reporting
- ✅ System analytics dashboard
- ✅ Complete feature integration

**Branch**: `week4`

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, MySQL 8.0
- **Authentication**: JWT, bcrypt
- **UI Components**: Shadcn/ui, Radix UI
- **Database**: MySQL with connection pooling

## 📁 Project Structure

```
├── app/                    # Next.js app directory (pages)
├── backend/               # Express.js API server
│   ├── controllers/      # Business logic controllers
│   ├── routes/          # API route definitions
│   ├── middleware/      # Authentication & error handling
│   ├── config/          # Database configuration
│   └── scripts/         # Database setup scripts
├── components/           # Reusable React components
├── lib/                  # Utility functions
├── src/                  # Additional source files
└── public/              # Static assets
```

## 🗄️ Database Schema

- **Users**: Authentication and role management
- **Patients**: Patient information and medical history
- **Doctors**: Doctor profiles and specializations
- **Appointments**: Scheduling and appointment management
- **Medicines**: Pharmacy inventory and prescriptions
- **Invoices**: Billing and payment tracking
- **Lab Reports**: Test results and medical reports

## 🔐 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@hospital.com | password123 |
| Doctor | dr.cardiology@hospital.com | password123 |
| Patient | jane.doe@hospital.com | password123 |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hasan-Mustafa04/SmartHospitalManagement.git
   cd SmartHospitalManagement
   ```

2. **Choose development phase**
   ```bash
   # For Weeks 1-4 (Foundation)
   git checkout main

   # For Weeks 4-8 (Patient Management)
   git checkout week2

   # For Weeks 9-13 (Appointments)
   git checkout week3

   # For Weeks 14-17 (Complete System)
   git checkout week4
   ```

3. **Install dependencies**
   ```bash
   npm install
   cd backend && npm install && cd ..
   ```

4. **Database setup**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your MySQL credentials
   npm run setup-db
   cd ..
   ```

5. **Start development servers**
   ```bash
   # Terminal 1: Backend
   cd backend && npm run dev

   # Terminal 2: Frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Patient Management
- `GET /api/patients` - List patients
- `POST /api/patients` - Create patient
- `GET /api/patients/:id` - Get patient details

### Appointments
- `GET /api/appointments` - List appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment

### And many more endpoints for billing, pharmacy, lab management...

## 🎯 Key Features

- **Multi-role System**: Admin, Doctor, Patient, Pharmacist, Lab Technician
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Live data synchronization
- **Secure Authentication**: JWT tokens with role-based permissions
- **Comprehensive Reporting**: Analytics and system insights
- **Modern UI/UX**: Clean, intuitive interface

## 🤝 Contributing

This project was developed progressively over 17 weeks. Each branch represents a development milestone:

1. Start with `main` branch for basic setup
2. Progress through `week2`, `week3`, `week4` for incremental features
3. Each branch builds upon the previous one

## 📝 License

This project is for educational purposes.

---

**Developed by**: Hasan Mustafa
**Repository**: https://github.com/Hasan-Mustafa04/SmartHospitalManagement