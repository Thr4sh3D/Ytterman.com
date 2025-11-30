import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ytterman - Kontrollansvarig & BAS i Västernorrland</title>
        <meta name="description" content="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare i Västernorrland" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <header className="bg-stone-800 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Ytterman</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-4">Kontrollansvarig & BAS i Västernorrland</h2>
          <p className="text-xl mb-8">Certifierad expert med över 20 års erfarenhet</p>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Tjänster</h3>
            <ul className="space-y-2">
              <li>✓ Kontrollansvarig (KA)</li>
              <li>✓ BAS-P (Projektering)</li>
              <li>✓ BAS-U (Utförande)</li>
              <li>✓ Energideklaration</li>
            </ul>
          </div>
        </main>
        
        <footer className="bg-stone-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Ytterman. Kontakt: 076-111 84 47</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;