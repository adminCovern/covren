# Covren Firm - AI Sovereignty for SMBs

<div align="center">
  <img src="/public/logo.png" alt="Covren Firm Logo" width="200" />
  
  ### Stop Renting AI. Start Owning It.
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 🚀 Overview

Covren Firm empowers Small and Medium Businesses (SMBs) to achieve complete AI sovereignty. We provide enterprise-grade AI infrastructure that businesses own completely, eliminating dependency on expensive API rentals and vendor lock-in.

### 🎯 Key Features

- **SovrenAI Platform** - Complete AI infrastructure with models, training, and deployment tools
- **100% Ownership** - Your infrastructure, your data, your models
- **No Usage Limits** - Unlimited API requests, no throttling
- **Enterprise Security** - Bank-grade security and compliance built-in
- **Expert Support** - 24/7 managed services and consulting

## 💻 Tech Stack

- **Framework:** Next.js 15.3.4 (with Turbopack)
- **Frontend:** React 19.0.0
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.18.1
- **Icons:** Lucide React 0.522.0
- **Language:** TypeScript 5
- **State Management:** React Hooks
- **Deployment:** Vercel/AWS

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/covrenfirm/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NEXT_PUBLIC_CONTACT_EMAIL=info@covrenfirm.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
covren-firm/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   ├── products/            # Products pages
│   │   ├── page.tsx         # Products overview
│   │   └── sovren-ai/       # SovrenAI product page
│   ├── pricing/             # Pricing page
│   ├── use-cases/           # Use cases & success stories
│   ├── resources/           # Documentation & resources
│   ├── contact/             # Contact page
│   ├── get-started/         # Onboarding flow
│   └── api/                 # API routes
│       └── contact-form/    # Contact form handler
├── components/              # React components
│   ├── layout/              # Layout components
│   │   ├── MainLayout.tsx   # Main layout with navigation
│   │   └── Footer.tsx       # Footer component
│   └── sections/            # Page sections
│       ├── hero-section-sovereign.tsx
│       ├── technology-arsenal.tsx
│       └── [other sections...]
├── public/                  # Static assets
├── styles/                  # Additional styles
└── lib/                     # Utility functions
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run dev:webpack  # Start development server with Webpack

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🎨 Design System

### Colors
- **Primary:** Green (#10b981) - Represents growth and sovereignty
- **Secondary:** Emerald (#34d399) - Accent color
- **Background:** Black/Gray - Professional dark theme
- **Text:** White/Gray shades

### Typography
- **Headings:** System font stack with bold weights
- **Body:** Inter or system sans-serif
- **Code:** Monospace for technical content

### Components
- Custom button variants with hover animations
- Responsive navigation with dropdown menus
- Interactive pricing cards
- Animated sections using Framer Motion

## 🌐 Pages Overview

- **Homepage** (`/`) - Main landing page with value proposition
- **About** (`/about`) - Company information and values
- **Products** (`/products`) - Overview of all offerings
  - **SovrenAI** (`/products/sovren-ai`) - Platform details
- **Pricing** (`/pricing`) - Subscription plans ($297-$797/mo)
- **Use Cases** (`/use-cases`) - Industry success stories
- **Resources** (`/resources`) - Documentation and guides
- **Contact** (`/contact`) - Contact form and information
- **Get Started** (`/get-started`) - Onboarding flow

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#34d399',
      },
    },
  },
}
```

### Next.js Configuration
Custom Next.js settings in `next.config.js`:

```javascript
module.exports = {
  experimental: {
    turbo: {},
  },
  images: {
    domains: ['covrenfirm.com'],
  },
}
```

## 📦 Deployment

### Render (Primary)
1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Configure the following:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node
   - **Node Version:** 18.x
5. Add environment variables in Render dashboard
6. Deploy

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables
Set these in your Render dashboard:
- `NODE_ENV=production`
- `NEXT_PUBLIC_API_URL=https://your-domain.com`
- `NEXT_PUBLIC_CONTACT_EMAIL=info@covrenfirm.com`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features

## 📈 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Bundle Size:** Optimized with dynamic imports
- **SEO:** Full metadata and structured data

## 🔒 Security

- All dependencies regularly updated
- Security headers configured
- Input validation on all forms
- HTTPS enforced in production
- Content Security Policy implemented

## 📞 Support

- **Email:** info@covrenfirm.com
- **Phone:** (888) 326-4568
- **Documentation:** [/resources](/
