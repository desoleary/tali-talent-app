# Tali Talent Analytics Platform

A modern **AI-powered Private Equity portfolio analytics platform**, built to demonstrate **clean, scalable, observable** engineering patterns—fully compatible with AI/Codex pairing workflows.

---

## 🚀 Tech Stack

**Backend**
- **NestJS + TypeORM** — API, service layer, and database access
- **MySQL** — primary datastore
- **Vitest** — unit/integration testing
- **TypeORM migrations** — versioned, rollbackable schema changes

**Frontend**
- **React (Vite) + Ant Design** — responsive dashboard and data visualisation
- **TypeScript** — end-to-end type safety

**Infrastructure**
- **Turborepo + pnpm** — fast monorepo builds & dev
- **Infrastructure-as-Code** placeholders under `/infra`
- Ready for containerisation & CI/CD integration

---

## 📂 Folder Structure

```
tali-talent-app/
├── apps/
│   ├── api/                  # NestJS backend
│   │   ├── src/
│   │   │   ├── companies/    # Company entity, service, controller & tests
│   │   │   ├── migrations/   # TypeORM migration scripts
│   │   │   ├── app.module.ts
│   │   │   ├── main.ts       # App bootstrap
│   │   │   └── vitest.setup.ts
│   │   ├── tsconfig.json
│   │   └── vitest.config.ts
│   └── web/                  # React frontend
│       ├── src/
│       │   ├── components/   # UI components (tables, charts, forms)
│       │   ├── pages/        # Page-level containers
│       │   ├── App.tsx
│       │   └── main.tsx
│       └── tsconfig.json
├── packages/
│   └── core/                 # Shared logic, DTOs, and utilities
├── infra/                    # Infra-as-code, deployment, DB seeders
├── pnpm-workspace.yaml       # Monorepo config
├── turbo.json                # Turborepo pipelines
├── package.json              # Root scripts
└── tsconfig.base.json        # Base TypeScript config
```

---

## 🛠 Features

- **Codex/AI-friendly structure** — every layer designed for iterative, testable improvements
- **Company Management** — CRUD endpoints with repository pattern
- **ETL & Analytics Hooks** — scaffolding for portfolio health score calculation
- **Frontend Dashboard** — companies table, analytics charts, and trigger controls
- **Observability-ready** — health check endpoint, NestJS Logger, OpenTelemetry-ready

---

## ⚙️ Setup & Development

### 1. Install dependencies
```bash
pnpm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and set MySQL connection variables.  
Check `apps/api/src/data-source.ts` for variable names.

### 3. Run database migrations
```bash
pnpm run migration:run
```

### 4. Start dev servers
```bash
pnpm dev
```
Runs:
- API on `http://localhost:3001`
- Web on `http://localhost:3000`

### 5. Run tests
```bash
pnpm test
```

---

## 📡 API Overview

**Base URL**: `http://localhost:3001`

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| GET    | `/companies`         | List all companies               |
| GET    | `/companies/:id`     | Get company by ID                |
| POST   | `/companies`         | Create new company               |
| PATCH  | `/companies/:id`     | Update company                   |
| DELETE | `/companies/:id`     | Remove company                   |
| POST   | `/etl/health-scores` | Trigger portfolio health ETL job |

---

## 📊 Frontend Overview

- **Dashboard** — table of companies with filters & actions
- **Analytics** — health score visualisation
- **ETL Trigger** — run data refresh from UI

---

## 🔍 Observability

- Health endpoint: `GET /health`
- Structured logging via NestJS Logger
- Hooks ready for metrics/tracing integration

---

## 🧑‍💻 Developer Notes

- Entities now use **explicit column types** to work with Vitest & esbuild without requiring decorator metadata.
- `vitest.setup.ts` ensures required runtime imports (e.g., `reflect-metadata`) are loaded.
- Repository mocks are provided in unit tests to isolate service logic from the DB.

---

## ✅ Onboarding Checklist

- Install **pnpm** (`>=8.x`)
- Install **Node.js** (`>=20.x`)
- Clone the repo
- Configure `.env`
- Run migrations
- Start dev mode

---

## 📌 Summary

This project is a **turnkey, AI-powered analytics scaffold** ready for:
- Private Equity portfolio tracking
- AI-driven workflow demos
- Expansion into production-grade, observable, scalable applications

