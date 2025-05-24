import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-[#88E8FF] to-white py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="font-bold text-lg italic">
            ExamGo
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium hover:text-sky-800 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/latihan" 
            className="text-sm font-medium hover:text-sky-800 transition-colors"
          >
            Latihan
          </Link>
          <Link 
            href="/simulasi" 
            className="text-sm font-medium hover:text-sky-800 transition-colors"
          >
            Simulasi
          </Link>
        </nav>
      </div>
    </header>
  );
}