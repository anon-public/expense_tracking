<div align="center">

<p align="center">
  <img src="./public/Expent_logo.png" width="250">
</p>

# Expent

### *Expense Tracking And Budegetting Systerm*

**Finally,Expenses that track themselves.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-Active%20Development-orange?style=for-the-badge)]()

---


> *"Finally, an expense tracker that doesn't feel like filling out a tax form."*
</div>
---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🔐 Authentication](#-authentication)
- [🖥️ Pages & Components](#️-pages--components)
- [🤖 AI-Powered Features (Coming Soon)](#-ai-powered-features-coming-soon)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Overview

**Expent** is a modern, full-stack SaaS expense tracking web application designed to give individuals and teams complete clarity over their finances — without the friction.

Built on a **React + Next.js** foundation with **Clerk** for seamless authentication, Expent currently delivers a clean, fast, and intuitive expense management experience. But we're not stopping there.

We're actively engineering a powerful **AI layer** that will transform Expent from a great tracker into a *proactive financial co-pilot* — one that surfaces insights, flags anomalies, forecasts trends, and speaks your financial language.


---

## 🚀 Features

### ✅ Currently Available

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Polished, conversion-optimized marketing page with clear CTAs |
| 🔐 **Secure Auth** | One-click sign-up/sign-in via Clerk (Google, GitHub, Email) |
| 📊 **Expense Dashboard** | Clean overview of your spending at a glance |
| ➕ **Add & Manage Expenses** | Quickly log expenses with categories, dates, and description |
| 🏷️ **Category Management** | Organize spending into custom categories |
| 📱 **Responsive Design** | Fully functional across desktop, tablet, and mobile |
| ⚡ **Fast Performance** | Next.js App Router with optimized rendering |

---

<img width="1341" height="382" alt="image" src="https://github.com/user-attachments/assets/7a775958-bae3-4166-b1b2-bed2f5c6c618" />


---

## 🛠️ Tech Stack

### Frontend

```
React 19          — UI library powering every interaction
Next.js 15        — Full-stack framework with App Router
Tailwind CSS      — Utility-first styling for rapid UI development
Clerk             — Authentication & user management
```

### 🤖 Incoming: AI Layer *(in active development)*

```
Anthropic Claude  — Conversational AI & financial insights engine
Vercel AI SDK     — Streaming AI responses in the UI
Vector Database   — Semantic search over expense history
```

---

## 📁 Project Structure

```
expense_tracking/
│
├── 📂 app/
│   ├── 📂 (auth)/
│   │   ├── 📂 sign-in/
│   │   │   └── 📂 [[...sign-in]]/
│   │   │       └── page.tsx
│   │   └── 📂 sign-up/
│   │       └── 📂 [[...sign-up]]/
│   │           └── page.tsx
│   ├── 📂 (dashboard)/
│   │   ├── 📂 dashboard/
│   │   │   └── page.tsx
│   │   ├── 📂 expenses/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── 📂 components/
│   ├── 📂 ui/
│   │   ├── Addexpense.tsx
│   │   ├── ExpenseCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Navbarhandler.tsx
│   │   ├── Searchbar.tsx
│   │   └── Searchbarreset.tsx
│   ├── 📂 dashboard/
│   │   ├── page.tsx
│
├── 📂 lib/
│   ├── auth-config.ts
│
├── 📂 public/
│   └── 📂 favicon/
│
├── 📂 types/
│   └── index.ts
│
├── .gitignore
├── eslint.config.mjs
├── middleware.ts                  ← Clerk auth middleware
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 19.8`
- **npm**, **yarn**, or **pnpm**
- A [Clerk](https://clerk.com/) account (free tier works great)

### 1. Clone the Repository

```bash
git clone https://github.com/anon-public/expense_tracking.git
cd Expent
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# ─── Clerk Authentication ───────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxx

# ─── Clerk Redirect URLs ────────────────────────────────────
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# ─── App Config ─────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000

# ─── AI Layer (Coming Soon) ─────────────────────────────────
# ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the SpendSense landing page. 🎉

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 🔐 Authentication

Expent uses **[Clerk](https://clerk.com/)** for all authentication — a best-in-class auth solution that handles everything from social logins to session management.




### Supported Auth Methods

- 📧 Email + Password
- 🔗 Google OAuth
- 🐙 GitHub OAuth
- *More providers coming soon*

### Route Protection

All dashboard routes are protected via Clerk middleware. Unauthenticated users are automatically redirected to `/sign-in`.

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/expenses(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});
```

---

## 🖥️ Pages & Components

### 🏠 Landing Page (`/`)

The first impression that converts visitors into users. Built to be fast, beautiful, and clear.

**Sections included:**

| Section | Description |
|---|---|
| **Hero** | Bold headline, sub-copy, CTA buttons, and product mockup |
| **Features** | Three-column grid highlighting core capabilities |
| **How It Works** | Simple 3-step visual explainer |
| **CTA Banner** | Final conversion push before footer |
| **Footer** | Links, socials, and legal |

<img width="1342" height="566" alt="image" src="https://github.com/user-attachments/assets/66efb75a-a837-41c3-89ac-608b69b3bcd2" />




---

### 📊 Dashboard (`/dashboard`)

Your financial command center. At a glance, see exactly where your money is going.

**Components:**

- **`SummaryStats`** — Total spent this month, vs. last month, and top category
- **`RecentExpenses`** — Last 5–10 expense entries with quick-edit
- **`SpendingChart`** — Visual breakdown by category *(chart component)*
- **`QuickAddExpense`** — One-click expense entry modal

<img width="1342" height="577" alt="image" src="https://github.com/user-attachments/assets/6b39a6e0-227e-428b-a34b-5e7eed09257b" />


---

### 📋 Expenses Page (`/expenses`)

The complete, filterable, sortable ledger of every expense you've ever logged.

**Features:**
- Filter by date range, category, and amount
- Sort by newest, oldest, highest, lowest
- Inline editing and deletion
- Pagination for large expense histories

<img width="1177" height="322" alt="image" src="https://github.com/user-attachments/assets/82f1e0c8-68eb-4dde-b9e8-81dda2f4c2ff" />

---

### 🏷️ Categories Page (`/categories`)

Create and manage the taxonomy of your spending life — from *🍕 Food* to *✈️ Travel* to *📦 Subscriptions*.

---

### 🔑 Shared UI Components

| Component | Description |
|---|---|
| `Navbar` | Top navigation with user avatar, links, and mobile menu |
| `Button` | Reusable button with variant support (primary, ghost, destructive) |
| `Modal` | Accessible dialog for forms and confirmations |
| `Input` | Styled input with label, error state, and helper text |
| `CategoryBadge` | Color-coded pill showing expense category |
| `ExpenseCard` | Single expense entry display card |


<img width="1252" height="228" alt="image" src="https://github.com/user-attachments/assets/1e75db45-31de-4030-ab65-a7350d6923e4" />

---

## 🤖 AI-Powered Features (Coming Soon)

> *This is where SpendSense goes from a good tool to an indispensable one.*

We are actively building an intelligent AI layer on top of SpendSense's core functionality. Here's a preview of what's coming:

<img width="1177" height="322" alt="image" src="https://github.com/user-attachments/assets/82f1e0c8-68eb-4dde-b9e8-81dda2f4c2ff" />

### 🧠 Planned AI Capabilities

#### 💬 Conversational Expense Assistant
Ask questions in plain English — *"How much did I spend on food last month?"* or *"Show me my subscriptions I haven't used in 60 days."* Get instant, accurate answers without touching a filter.

#### 📈 Spending Insights & Anomaly Detection
SpendSense will proactively surface patterns and flag unusual charges before you even notice them. Think of it as having a personal CFO who never sleeps.

#### 🔮 Monthly Budget Forecasting
Based on your historical spending patterns, the AI will predict where you'll land at month's end — and suggest adjustments to hit your goals.

#### 🏷️ Automatic Categorization
Stop manually tagging every expense. The AI will intelligently categorize transactions based on merchant name, amount, and context — and learn from your corrections.

#### 📝 Natural Language Expense Logging
Just type *"spent $14 on coffee this morning"* and SpendSense handles the rest. No forms, no dropdowns, no friction.

#### 📊 Weekly AI Summary Report
A beautifully formatted digest landing in your inbox every Monday — your spending week in review, written by AI, personalized for you.

---

### 🏗️ AI Architecture (Planned)

```
User Input (Chat / Voice)
        │
        ▼
  Next.js API Route
        │
        ▼
  Anthropic Claude API
  (claude-sonnet-4)
        │
        ├──→ Tool: query_expenses()
        ├──→ Tool: get_categories()
        ├──→ Tool: calculate_budget()
        └──→ Tool: create_expense()
        │
        ▼
  Streamed Response → UI
```

---

## 🗺️ Roadmap

### Phase 1 — Foundation ✅ *(Current)*
- [x] Landing page
- [x] Clerk authentication
- [x] Core dashboard UI
- [x] Expense CRUD operations
- [x] Category management
- [x] Responsive design

### Phase 2 — Data & Backend 🔄 *(In Progress)*
- [ ] Database integration (PostgreSQL / Supabase)
- [ ] API routes for expense operations
- [ ] User settings & profile page
- [ ] Data export (CSV / PDF)

### Phase 3 — AI Integration 🤖 *(Planned)*
- [ ] Conversational AI assistant
- [ ] Auto-categorization engine
- [ ] Spending forecasting
- [ ] Anomaly detection & alerts
- [ ] Natural language expense logging

### Phase 4 — Growth 🚀 *(Future)*
- [ ] Team/shared expense tracking
- [ ] Bank account integrations (Plaid)
- [ ] Mobile app (React Native)
- [ ] Multi-currency support
- [ ] Public API for developers

---

## 🤝 Contributing

We'd love your help making SpendSense even better. Here's how to get involved:

### Getting Started

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/anon-public/expense_tracking.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and commit
git commit -m "feat: add your feature description"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

### Contribution Guidelines

- Follow the existing code style (ESLint + Prettier configured)
- Write descriptive commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Open an issue before starting work on large features
- Add relevant comments for complex logic
- Test your changes before submitting a PR

### 🐛 Found a Bug?

[Open an issue](https://github.com/anon-public/expense_tracking/issues/new?template=bug_report.md) with steps to reproduce, expected behavior, and screenshots if possible.

### 💡 Have an Idea?

[Start a discussion](https://github.com/anon-public/expense_tracking/discussions) or [open a feature request](https://github.com/anon-public/expense_tracking/issues/new?template=feature_request.md). We read everything.

---

## 🌐 Deployment

SpendSense is optimized for deployment on **[Vercel](https://vercel.com/)** — the makers of Next.js.

### Deploy in One Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anon-public/expense_tracking/)

### Manual Deployment

```bash
npm install -g vercel
vercel --prod
```

Remember to add all environment variables from `.env.local` to your Vercel project settings.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---


<div align="center">

---

<img width="1295" height="517" alt="image" src="https://github.com/user-attachments/assets/c788de7d-7630-4ea4-a572-8aca711a5372" />>

**Expent** — *Expenses That Track Themselves*

Built using Next.js, React & Clerk · Supercharged by AI *(soon)*

⭐ **Star this repo** if used Expent.

</div>
