# Seaker

A modern job application tracking and analytics web application.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Runtime**: Node.js

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL (or use Docker)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/VincentWang2961/Seaker.git
   cd Seaker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and update the `DATABASE_URL` to point to your PostgreSQL instance.

4. **Run database migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running with Docker

1. **Start all services**

   ```bash
   docker-compose up --build
   ```

   This starts:
   - The Next.js application on port `3000`
   - A PostgreSQL database on port `5432`

2. **Run migrations (first time only)**

   ```bash
   docker-compose exec app npx prisma migrate deploy
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Stop services**

   ```bash
   docker-compose down
   ```

### Database Migration with Prisma

| Command | Description |
|---------|-------------|
| `npx prisma migrate dev --name <name>` | Create and apply a new migration |
| `npx prisma migrate deploy` | Apply pending migrations (production) |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma db push` | Push schema changes without migration |
| `npx prisma generate` | Regenerate Prisma Client |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── applications/   # Job applications API
│   │   └── health/         # Health check endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
└── lib/
    ├── prisma.ts           # Prisma client singleton
    └── utils.ts            # Utility functions
prisma/
└── schema.prisma           # Database schema
```

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/applications` | List all applications |
| `POST` | `/api/applications` | Create an application |

## Environment Variables

See [`.env.example`](.env.example) for all available environment variables.

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | — |
| `NODE_ENV` | Environment | `development` |
| `NEXT_PUBLIC_APP_URL` | Public app URL | `http://localhost:3000` |

## License

MIT
