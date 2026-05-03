# Hospital Management System - Week 1

## Overview
Week 1 focuses on the basic setup and authentication system for the Hospital Management System.

## Features Implemented
- ✅ Project structure setup (Frontend + Backend)
- ✅ User authentication (Login/Register)
- ✅ JWT token-based authorization
- ✅ Role-based access control (Admin, Doctor, Patient, etc.)
- ✅ Database setup with user management
- ✅ Basic UI components and styling

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, Shadcn/ui
- **Backend**: Node.js, Express.js, MySQL
- **Authentication**: JWT, bcrypt

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
├── backend/               # Express.js backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Authentication middleware
│   ├── routes/          # API routes
│   └── scripts/         # Database setup scripts
├── components/           # Reusable UI components
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Next Weeks
- **Week 2**: Patient management system
- **Week 3**: Appointment scheduling
- **Week 4**: Billing and reporting

## Contributing
This is Week 1 of a 4-week project development series.