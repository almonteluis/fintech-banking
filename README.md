# FinTech Bank Application Tutorial

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Additional Resources](#additional-resources)

## 🚀 Introduction

Welcome to the FinTech Bank Application tutorial! This project is a comprehensive financial SaaS platform built with Next.js. It allows users to connect multiple bank accounts, view real-time transactions, transfer money between users, and manage their finances all in one place.

This README provides an overview of the project and instructions for setting it up locally. The full step-by-step tutorial is available on the JavaScript Mastery YouTube channel.

## 🔋 Features

- Secure SSR authentication
- Multiple bank account integration via Plaid
- Home page with financial overview and recent transactions
- Connected banks list with account details
- Transaction history with pagination and filtering
- Real-time updates across the application
- Funds transfer between users using Dwolla
- Responsive design for all devices

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## 🤸 Getting Started

### Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```
   npm install
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
NEXT_PUBLIC_SITE_URL=

# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# Plaid
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# Dwolla
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual credentials from Appwrite, Plaid, and Dwolla.

## 🏃‍♂️ Running the Project

To start the development server:

```
npm run dev
```

Open `http://localhost:3000` in your browser to view the project.

## 📚 Additional Resources

- Full tutorial: [JavaScript Mastery YouTube Channel](https://www.youtube.com/c/JavaScriptMastery)
- Assets: [Project Assets](link-to-assets)
- Community Support: Join our [Discord](link-to-discord) for help and discussions

Happy coding! 🎉
