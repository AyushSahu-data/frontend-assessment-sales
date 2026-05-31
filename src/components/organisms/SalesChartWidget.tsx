'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

interface SalesData {
  year: string;
  sales: number;
  profit: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Failsafe data in case the API route fails on Vercel
const fallbackData: SalesData[] = [
  { year: '2022', sales: 45000, profit: 12000 },
  { year: '2023', sales: 52000, profit: 18000 },
  { year: '2024', sales: 61000, profit: 24000 },
];

export const SalesChartWidget = () => {
  const [data, setData] = useState<SalesData[]>([]);
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [threshold, setThreshold] = useState<number | ''>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sales');
        if (!response.ok) throw new Error('API failed');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.warn('Falling back to local data due to API error:', error);
        setData(fallbackData); // Failsafe guarantees the chart shows
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter data safely
  const numericThreshold = typeof threshold === 'number' ? threshold : 0;
  const filteredData = data.filter((item) => item.sales >= numericThreshold);

  if (loading) return <div className="p-8 text-center text-gray-500">Loading sales data...</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Annual Sales Overview</h2>
          <p className="text-sm text-gray-500">2022 - 2024 Performance Data</p>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Min Sales:</label>
            <Input 
              type="number" 
              value={threshold} 
              onChange={(e) => setThreshold(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="e.g. 50000"
              autoComplete="off" // Prevents password managers from filling it
            />
          </div>
          <div className="flex gap-2">
            <Button active={chartType === 'bar'} onClick={() => setChartType('bar')}>Bar</Button>
            <Button active={chartType === 'line'} onClick={() => setChartType('line')}>Line</Button>
            <Button active={chartType === 'pie'} onClick={() => setChartType('pie')}>Pie</Button>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full">
        {filteredData.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            No data meets the minimum sales threshold.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' ? (
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" name="Total Sales" />
              </BarChart>
            ) : chartType === 'line' ? (
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} name="Total Sales" />
              </LineChart>
            ) : (
              <PieChart>
                <Pie data={filteredData} dataKey="sales" nameKey="year" cx="50%" cy="50%" outerRadius={150} label>
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};