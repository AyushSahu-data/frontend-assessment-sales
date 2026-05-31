This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Project Overview
This project is a web application built with Next.js 15, TypeScript, and Tailwind CSS. It demonstrates an interactive sales dashboard displaying historical data (2022-2024) utilizing the Atomic Design structural principle.

## Features Implemented
* **Atomic Design Structure:** Components are organized into Atoms (Button, Input) and Organisms (SalesChartWidget).
* **Mock API Integration:** Uses Next.js App Router API routes (`/api/sales`) to asynchronously fetch mock Kaggle sales data rather than hardcoding it in the UI.
* **Multiple Chart Types:** Utilizes `recharts` to seamlessly toggle between Bar, Line, and Pie charts.
* **Custom Filter Input:** Includes a dynamic threshold input that instantly filters out years where sales fall below the user's specified amount.

## Tech Stack
* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Recharts

## Setup Instructions
1. Clone the repository: `git clone <your-github-repo-link>`
2. Navigate to the directory: `cd sales-dashboard`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser.