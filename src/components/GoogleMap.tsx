import { MapPin, Home, Building } from 'lucide-react';

export const GoogleMap = () => {
  const cities = [
    { name: 'Sundsvall', description: 'Huvudort - Verksamhetsområde' },
    { name: 'Härnösand', description: 'Verksamhetsområde' },
    { name: 'Sollefteå', description: 'Verksamhetsområde' },
    { name: 'Kramfors', description: 'Verksamhetsområde' },
    { name: 'Timrå', description: 'Verksamhetsområde' },
    { name: 'Viksjö', description: 'Hemort' }
  ];

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-earth bg-gradient-to-br from-blue-50 to-green-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 320">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#8B7355" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative h-full p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Verksamhetsområde Västernorrland</h3>
          <p className="text-muted-foreground">Jag arbetar i hela Västernorrland med bas i Viksjö</p>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {cities.map((city, index) => (
            <div 
              key={city.name}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-white/50"
            >
              <div className="flex items-center space-x-2 mb-1">
                {city.name === 'Viksjö' ? (
                  <Home className="w-4 h-4 text-accent" />
                ) : (
                  <Building className="w-4 h-4 text-primary" />
                )}
                <span className="font-medium text-sm">{city.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{city.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-medium">Täcker hela Västernorrland</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Hemort</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Verksamhetsområde</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <MapPin className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-15">
        <Building className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
};