import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 earth-gradient rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-white font-bold text-3xl">404</span>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Sidan hittades inte
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Tyvärr kunde vi inte hitta sidan du letar efter. 
          Den kanske har flyttats eller så finns den inte längre.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/')}
            className="earth-gradient text-white hover:opacity-90"
          >
            <Home className="w-5 h-5 mr-2" />
            Tillbaka till startsidan
          </Button>
          
          <Button 
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Gå tillbaka
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;