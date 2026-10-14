const fs = require('fs');
const { execSync } = require('child_process');

console.log("📦 Installing Prisma & Prisma Client...");
execSync("npm install @prisma/client && npm install -D prisma", { stdio: 'inherit' });

// 1. Ensure directories exist
fs.mkdirSync('prisma', { recursive: true });
fs.mkdirSync('src/lib', { recursive: true });

// 2. Create prisma/schema.prisma
const schemaCode = `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id           String    @id @default(cuid())
  email        String    @unique
  name         String?
  passwordHash String
  homeCurrency String    @default("INR")
  trips        Trip[]
  createdAt    DateTime  @default(now())
}

model Trip {
  id           String    @id @default(cuid())
  title        String
  destination  String
  totalBudget  Float
  currency     String    @default("INR")
  userId       String?
  user         User?     @relation(fields: [userId], references: [id])
  expenses     Expense[]
  createdAt    DateTime  @default(now())
}

model Expense {
  id              String   @id @default(cuid())
  title           String
  category        String   // Food, Transport, Stay, ATM Fee
  amountForeign   Float
  currencyForeign String   // JPY, EUR, THB, USD
  amountHome      Float    // Converted to home currency (e.g. INR)
  tripId          String
  trip            Trip     @relation(fields: [tripId], references: [id], onDelete: Cascade)
  createdAt       DateTime @default(now())
}

model ScamReport {
  id              String   @id @default(cuid())
  city            String
  locationName    String
  reportedMarkup  Float
  fairRate        Float
  offeredRate     Float
  verified        Boolean  @default(false)
  createdAt       DateTime @default(now())
}
`;
fs.writeFileSync('prisma/schema.prisma', schemaCode);

// 3. Create .env with database connection string
if (!fs.existsSync('.env')) {
  fs.writeFileSync('.env', 'DATABASE_URL="file:./dev.db"\n');
} else {
  const envContent = fs.readFileSync('.env', 'utf8');
  if (!envContent.includes('DATABASE_URL')) {
    fs.appendFileSync('.env', '\nDATABASE_URL="file:./dev.db"\n');
  }
}

// 4. Create src/lib/prisma.ts (Database Client Singleton)
const prismaClientCode = `import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
`;
fs.writeFileSync('src/lib/prisma.ts', prismaClientCode);

// 5. Update package.json to include postinstall: prisma generate
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts = pkg.scripts || {};
pkg.scripts.postinstall = "prisma generate";
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

console.log("⚡ Generating Prisma Client & Syncing Database schema...");
execSync("npx prisma generate", { stdio: 'inherit' });
execSync("npx prisma db push", { stdio: 'inherit' });

console.log("✅ Database initialized successfully! Table models created.");
