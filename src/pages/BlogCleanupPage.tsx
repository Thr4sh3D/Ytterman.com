import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCleanupTool } from '@/components/BlogCleanupTool';
import { User } from '@/entities';
import { Navigate } from 'react-router-dom';

export default function BlogCleanupPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = async () => {
    try {
      const user = await User.me();
      setIsAdmin(user?.role === 'administrator');
    } catch (error) {
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAdminStatus();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Laddar...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Blogg Cleanup - Administratör</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Blogg Cleanup Verktyg
            </h1>
            <p className="text-gray-600">
              Identifiera och ta bort dubbletter och inlägg utan bilder
            </p>
          </div>
          
          <BlogCleanupTool />
        </main>
        
        <Footer />
      </div>
    </>
  );
}