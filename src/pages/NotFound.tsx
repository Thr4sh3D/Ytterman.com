import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Sidan kunde inte hittas</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Sidan du letar efter finns inte eller har flyttats.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Tillbaka till startsidan
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}