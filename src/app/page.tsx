import { SalesChartWidget } from '@/components/organisms/SalesChartWidget';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your data overview.</p>
        </header>

        {/* Component injected inside the dashboard page */}
        <section>
          <SalesChartWidget />
        </section>
      </div>
    </main>
  );
}