<div align="center">

  <img src="./public/images/logo-brand.png" width="100" height="100" style="border-radius: 50%; border: 3px solid #FF007A; box-shadow: 0 0 25px rgba(255, 0, 122, 0.4);" alt="GlobeRate Logo" />

  # 🌐 GlobeRate
  ### ⚡ The Intelligent Travel Finance & ATM Scam Defense Platform

  <p align="center">
    <a href="https://globe-rate.vercel.app">
      <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=800&size=22&duration=2800&pause=1000&color=FF007A&center=true&vCenter=true&multiline=true&width=620&height=75&lines=Travel+Smarter.+Protect+Your+Money.;Expose+Airport+ATM+Scams+in+Real-Time.;Point+Your+Camera.+Know+The+Truth.;Your+Trip+Budget+as+a+Flowing+River." alt="Typing Motion Header" />
    </a>
  </p>

  <p align="center">
    <a href="https://globe-rate.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Live_Deployment-globe--rate.vercel.app-FF007A?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <img src="https://img.shields.io/badge/Next.js_15-Turbopack-black?style=for-the-badge&logo=next.js" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Prisma_ORM-PostgreSQL%20%7C%20SQLite-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  </p>

</div>

---

## 📸 Visual Showcase & Platform Tour

<table>
  <tr>
    <td width="50%" align="center">
      <h3>🚀 1. Travel Smarter Hero Showcase</h3>
      <img src="./public/images/hero.jpg" width="100%" style="border-radius: 16px;" alt="GlobeRate Hero" />
      <p><i>Real-time scam protection benchmarks & travel superpower onboarding.</i></p>
    </td>
    <td width="50%" align="center">
      <h3>📸 2. Nova AI Vision Lens</h3>
      <img src="./public/images/nova_ai.jpg" width="100%" style="border-radius: 16px;" alt="Nova AI Menu Scanner" />
      <p><i>Point your camera at foreign menus and receipts for live ₹ INR conversion.</i></p>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <h3>🛡️ 3. Airport ATM Scam Exposer</h3>
      <img src="./public/images/atm.jpg" width="100%" style="border-radius: 16px;" alt="Scam Protection ATM" />
      <p><i>Unmasking 8%–14% hidden DCC markups and guiding users to zero-fee bank ATMs.</i></p>
    </td>
    <td width="50%" align="center">
      <h3>🌊 4. The Flowing Budget River</h3>
      <img src="./public/images/budget.jpg" width="100%" style="border-radius: 16px;" alt="Budget River Couple" />
      <p><i>Fluid, visual multi-currency burn rate tracking across European and Asian trips.</i></p>
    </td>
  </tr>
</table>

<div align="center">
  <h3>🌟 5. Loved by Global Travelers</h3>
  <img src="./public/images/testimonial.jpg" width="85%" style="border-radius: 20px;" alt="Aditi Sharma Solo Traveler" />
  <p><i>"The Scam Detector literally saved me ₹12,000 at Bangkok airport on my first day."</i></p>
</div>

---

## ⚡ Core Engineering Capabilities

* **🛡️ Dynamic Currency Conversion (DCC) Engine**: Algorithmic detector comparing foreign booth rate offers against true mid-market benchmarks to expose hidden 8% to 14% fees.
* **📸 Nova AI Optical Vision**: Automated optical parser reading foreign currencies (JPY, EUR, THB, USD) and instantly converting totals to home currency.
* **🌊 The Budget River**: High-impact visual telemetry calculating daily burn rates and issuing warnings before travelers overspend.
* **⚡ Live Institutional Forex API**: Built-in backend route with an in-memory 10-minute cache to stream real-time rates for 160+ countries without rate-limit lag.
* **📴 Zero-Roaming Offline Vault**: Cached top 50 global forex rates and embassy helplines accessible without an international roaming SIM card.

---

## 🏗️ Full-Stack System Architecture

```mermaid
flowchart TD
    Client["🌐 Next.js 15 Client (Turbopack + Tailwind + Framer Motion)"]
    
    subgraph ServerBackend ["🖥️ Next.js Backend Layer (/api)"]
        ForexEngine["/api/forex/rates (Live FX Engine)"]
        ScamScorer["/api/scam/analyze (DCC Markup Calculator)"]
        Cache["Server-Side In-Memory Cache (TTL: 10m)"]
        ForexEngine --> Cache
    end

    subgraph DataLayer ["🗄️ Database & Models (Prisma ORM)"]
        UserTable["User (Auth, Currency, Settings)"]
        TripTable["Trip (Budgets, Multi-Currency Ledger)"]
        ExpenseTable["Expense (Foreign Amount, Converted Home Value)"]
        ScamReports["ScamReport (Community ATM Radar)"]
    end

    Client -->|HTTP GET| ForexEngine
    Client -->|HTTP POST| ScamScorer
    Client -->|CRUD| DataLayer
    ForexEngine -->|Live Feeds| GlobalForexAPI["🏦 Open Institutional Forex Engine"]
```

---

## 🔌 Live Backend API Endpoints

### 1. Live Forex Engine
* **Endpoint**: `GET /api/forex/rates?base=USD`
* **Response**:
```json
{
  "success": true,
  "source": "live_forex_engine",
  "base": "USD",
  "rates": {
    "INR": 95.90,
    "EUR": 0.895,
    "JPY": 158.54,
    "GBP": 0.756,
    "THB": 33.61
  }
}
```

### 2. Algorithmic Scam Risk Analyzer
* **Endpoint**: `POST /api/scam/analyze`
* **Payload**:
```json
{
  "fromCurrency": "EUR",
  "toCurrency": "INR",
  "amountOffered": 100,
  "amountToPay": 8200
}
```
* **Response**:
```json
{
  "success": true,
  "analysis": {
    "realMidMarketRate": 95.90,
    "hiddenMarkupPercent": 14.49,
    "lossInHomeCurrency": 1390,
    "riskTier": "PREDATORY_SCAM",
    "recommendation": "Severe markup detected! Airport booth is hiding large fees."
  }
}
```

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Snehachoudhary26/Globe_-Rate.git
   cd Globe_-Rate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize Prisma Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

<div align="center">
  <p>Built with ❤️ for global travelers worldwide.</p>
  <p><b><a href="https://globe-rate.vercel.app">Visit Live Website →</a></b></p>
</div>
