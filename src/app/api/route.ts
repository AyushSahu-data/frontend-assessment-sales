import { NextResponse } from 'next/server';

// Mock data representing sales from Kaggle for 2022-2024
const salesData = [
  { year: '2022', sales: 45000, profit: 12000 },
  { year: '2023', sales: 52000, profit: 18000 },
  { year: '2024', sales: 61000, profit: 24000 },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json(salesData);
}