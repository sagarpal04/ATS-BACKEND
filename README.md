# ATS Backend

A robust Node.js and Express-based backend for an **Applicant Tracking System (ATS)**. This service handles high-performance PDF parsing and web scraping to extract meaningful textual data from resumes and job descriptions.

## 🚀 Features

- **Resume Parsing**: Seamlessly extract text from PDF files via a dedicated API endpoint.
- **Web Scraping**: Integrated with Puppeteer and Cheerio for advanced job description extraction (as indicated by dependencies).
- **Serverless Ready**: Optimized for deployment as Vercel Serverless Functions.
- **Cross-Origin Capability**: Pre-configured CORS support for easy frontend integration.

## 🛠️ Technology Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **PDF Engine**: `pdf-parse`
- **Automation**: `puppeteer`, `@sparticuz/chromium`
- **Parsing**: `cheerio`, `axios`
- **Deployment**: Vercel

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: v18 or higher recommended.
- **npm** or **yarn**.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ATS-BACKEND-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server with hot-reloading:

```bash
npm run dev
```

The server will be available at `http://localhost:5000`.

## 📡 API Reference

### Parse PDF

Extract text contents from a publicly accessible PDF URL.

- **URL**: `/api/parse`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "url": "https://example.com/resume.pdf"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "text": "Extracted text content..."
  }
  ```

## 🌍 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
```

## ☁️ Deployment

This project is configured for one-click deployment to **Vercel**.

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

The `vercel.json` file handles the mapping of the Express server to Vercel's serverless environment.

## 📄 License

This project is licensed under the ISC License.
