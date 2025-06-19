import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

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
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BcqzKg0VNhE&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
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

      // Add markers for each city
      cities.forEach((city, index) => {
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
    };

    loadGoogleMaps();

    return () => {
      // Cleanup
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-earth relative">
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Fallback content while loading */}
      {!mapInstanceRef.current && (
        <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-muted-foreground">Laddar karta...</p>
          </div>
        </div>
      )}
      
      {/* Legend */}
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
    </div>
  );
};