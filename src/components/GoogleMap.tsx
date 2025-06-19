import { useEffect, useRef, useState } from 'react';
import { MapPin, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapError, setMapError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cities = [
    { name: 'Sundsvall', lat: 62.3908, lng: 17.3069 },
    { name: 'Härnösand', lat: 62.6320, lng: 17.9378 },
    { name: 'Sollefteå', lat: 63.1697, lng: 17.2695 },
    { name: 'Kramfors', lat: 62.9342, lng: 17.7887 },
    { name: 'Timrå', lat: 62.4881, lng: 17.3256 },
    { name: 'Viksjö (Hem)', lat: 62.5167, lng: 17.4833 }
  ];

  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Check if script is already loading
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        return;
      }

      window.initMap = initializeMap;
      
      const script = document.createElement('script');
      // Using a public demo key - in production you'd want your own API key
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BcqzKg0VNhE&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      script.onerror = () => {
        console.error('Failed to load Google Maps');
        setMapError(true);
        setIsLoading(false);
      };
      
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      try {
        if (!mapRef.current) return;

        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 8,
          center: { lat: 62.6, lng: 17.5 }, // Center on Västernorrland
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry.fill',
              stylers: [{ color: '#f5f2ed' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{ color: '#c9d6df' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#8b7355' }, { weight: 1 }]
            }
          ]
        });

        mapInstanceRef.current = map;
        setIsLoading(false);

        // Add markers for each city
        cities.forEach((city) => {
          const marker = new window.google.maps.Marker({
            position: { lat: city.lat, lng: city.lng },
            map: map,
            title: city.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: city.name === 'Viksjö (Hem)' ? 8 : 6,
              fillColor: city.name === 'Viksjö (Hem)' ? '#8B7355' : '#A0956B',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2
            }
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; font-family: Inter, sans-serif;">
                <h3 style="margin: 0 0 4px 0; color: #8B7355; font-size: 16px; font-weight: 600;">
                  ${city.name}
                </h3>
                <p style="margin: 0; color: #666; font-size: 14px;">
                  ${city.name === 'Viksjö (Hem)' ? 'Hemort' : 'Verksamhetsområde'}
                </p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        // Add a polygon to highlight the general service area
        const serviceAreaCoords = [
          { lat: 63.5, lng: 16.5 },
          { lat: 63.5, lng: 18.5 },
          { lat: 61.8, lng: 18.5 },
          { lat: 61.8, lng: 16.5 }
        ];

        new window.google.maps.Polygon({
          paths: serviceAreaCoords,
          strokeColor: '#8B7355',
          strokeOpacity: 0.3,
          strokeWeight: 2,
          fillColor: '#A0956B',
          fillOpacity: 0.1,
          map: map
        });
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError(true);
        setIsLoading(false);
      }
    };

    loadGoogleMaps();

    return () => {
      // Cleanup
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  // Fallback content if map fails to load
  if (mapError) {
    return (
      <div className="w-full h-80 rounded-lg overflow-hidden shadow-earth bg-secondary/20 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Verksamhetsområde</h3>
          <p className="text-muted-foreground mb-4">
            Jag arbetar i hela Västernorrland med bas i Viksjö
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Huvudorter:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Sundsvall</li>
                <li>• Härnösand</li>
                <li>• Sollefteå</li>
                <li>• Kramfors</li>
                <li>• Timrå</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Hemort:</h4>
              <p className="text-muted-foreground">Viksjö</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-earth relative">
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-2 animate-pulse" />
            <p className="text-muted-foreground">Laddar karta...</p>
          </div>
        </div>
      )}
      
      {/* Legend - only show when map is loaded */}
      {!isLoading && !mapError && (
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <h4 className="font-medium text-sm mb-2">Verksamhetsområde</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#8B7355]"></div>
              <span>Hemort (Viksjö)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#A0956B]"></div>
              <span>Verksamhetsorter</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};