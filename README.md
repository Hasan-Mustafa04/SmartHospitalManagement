# Hospital Management System - Weeks 9-13

## Overview
Weeks 9-13 focus on comprehensive appointment scheduling and management system.

## Features Implemented
- ✅ **Weeks 1-8 Features** (Basic setup, auth, patient management)
- ✅ **Appointment Scheduling**: Book, reschedule, cancel appointments
- ✅ **Doctor Availability**: Set and manage doctor schedules
- ✅ **Appointment Management**: View, update, and manage all appointments
- ✅ **Calendar Integration**: Date/time slot management
- ✅ **Appointment Status Tracking**: Scheduled, completed, cancelled
- ✅ **Doctor-Patient Assignment**: Link appointments to specific doctors
- ✅ **Appointment History**: Track all appointment records

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, Shadcn/ui
- **Backend**: Node.js, Express.js, MySQL
- **Authentication**: JWT, bcrypt

## New Endpoints (Weeks 9-13)
### Appointment Management
- `GET /api/appointments` - List all appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments/:id` - Get appointment details
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment
- `PATCH /api/appointments/:id/status` - Update appointment status

### Doctor Availability
- `GET /api/doctors/:id/availability` - Get doctor availability
- `POST /api/doctors/:id/availability` - Set doctor availability
- `PUT /api/doctors/:id/availability` - Update availability

### Patient Appointments
- `GET /api/patient/appointments` - Patient's appointments
- `POST /api/patient/appointments` - Book appointment
- `PUT /api/patient/appointments/:id` - Reschedule appointment
- `PATCH /api/patient/appointments/:id/cancel` - Cancel appointment

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
│   └── admin/             # Admin pages (user management)
├── backend/               # Express.js backend
│   ├── controllers/      # Route controllers (auth, patient, appointment)
│   ├── middleware/       # Authentication middleware
│   ├── routes/          # API routes (auth, patients, appointments)
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

## Contributing
This is Week 1 of a 4-week project development series.