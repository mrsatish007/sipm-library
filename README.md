# SIPM Library Management Portal

A modern, AI-powered library management system designed for Sanjeev Institute of Planning and Management. This web application provides comprehensive book management, borrowing/returning capabilities, AI-powered search, and role-based dashboards for students, librarians, and administrators.

## 🎯 Features

### Core Features
- 📚 **Books Catalogue** - Search and filter through a comprehensive collection of books
- 🤖 **AI Assistant** - Interactive chatbot for book recommendations and queries
- 📅 **Borrow/Return System** - Track books, fines, and due dates
- 📊 **Role-Based Dashboards** - Different views for Students, Librarians, and Admins
- 📧 **Contact/About Page** - Complete information about the library

### Design Highlights
- Modern UI with Navy Blue (#002B5B) and Gold (#FFC107) color scheme
- Poppins font family for clean, readable typography
- Responsive design that works on all devices
- Smooth animations and hover effects
- Professional academic aesthetic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd library_management
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages & Routes

### Main Pages
- **`/`** - Homepage with hero section, AI recommendations, and announcements
- **`/catalogue`** - Books catalogue with search and filtering
- **`/ai-assistant`** - Interactive AI chat interface
- **`/borrow`** - Borrow/Return system with student and librarian views
- **`/dashboard`** - Role-based dashboards (Student/Librarian/Admin)
- **`/about`** - About page and contact form

### Components
- **`Header.tsx`** - Navigation header with responsive menu
- **`Footer.tsx`** - Footer with links and contact information

## 🎨 Design System

### Colors
- **Primary**: Navy Blue `#002B5B`
- **Accent**: Gold `#FFC107`
- **Background**: Light Gray `#F8F9FA`
- **Text**: Dark Gray `#333333`

### Typography
- **Font Family**: Poppins
- **Weights**: 300, 400, 500, 600, 700

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom CSS
- **Font**: Poppins (Google Fonts)

## 📦 Project Structure

```
library_management/
├── app/
│   ├── about/          # About & Contact page
│   ├── ai-assistant/   # AI chat interface
│   ├── borrow/         # Borrow/Return page
│   ├── catalogue/       # Books catalogue
│   ├── dashboard/      # Role-based dashboards
│   ├── components/     # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── public/             # Static assets
└── package.json
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌟 Key Features

### Student View
- View currently borrowed books
- Check fines and due dates
- Get personalized book recommendations
- Return books with one click

### Librarian View
- Manage pending borrow requests
- Track overdue books and fines
- View library statistics
- Approve/decline book requests

### Admin View
- System-wide overview
- Broadcast announcements
- View system logs
- Monitor active sessions

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📝 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Real AI integration for recommendations
- [ ] Payment gateway for fine payments
- [ ] Email notifications
- [ ] Book reviews and ratings
- [ ] Dark mode toggle
- [ ] Mobile app version

## 📄 License

This project is created for Sanjeev Institute of Planning and Management.

## 👥 Contact

For questions or support, please contact: library@sipm.edu
