import Header from '@/components/header';
import Dashboard from '@/components/dashboard';
import Features from '@/components/features';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full">
        <Dashboard />
        <Features />
      </div>
    </main>
  );
}