import React from 'react';
import { MapPin, Navigation, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  companyName?: string;
  address?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  companyName = "MR DGN Construction & Developers Ltd",
  address = "Lagos, Nigeria"
}) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.${Math.random().toString().slice(2, 8)}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMDMuMiJOIDazNsKwMzgnMDIuNiJF!5e0!3m2!1sen!2sng!4v${Date.now()}!5m2!1sen!2sng`;

  const handleOpenInMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border">
      {/* Map Container */}
      <div className="relative w-full h-full">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MR DGN Construction Location"
          className="w-full h-full"
        />
        
        {/* Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button
            onClick={handleOpenInMaps}
            size="sm"
            variant="secondary"
            className="shadow-lg backdrop-blur-sm bg-background/80 hover:bg-background/90"
          >
            <Maximize2 className="h-4 w-4 mr-2" />
            View Larger
          </Button>
          <Button
            onClick={handleGetDirections}
            size="sm"
            variant="default"
            className="shadow-lg"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Directions
          </Button>
        </div>

        {/* Company Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {companyName}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {address}
                </p>
                <div className="mt-2 text-xs text-muted-foreground">
                  <span className="font-mono">
                    {latitude.toFixed(6)}, {longitude.toFixed(6)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Pin Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="absolute -top-8 -left-3 text-red-500 animate-bounce">
              <MapPin className="h-8 w-8 fill-current drop-shadow-lg" />
            </div>
            <div className="absolute -top-2 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Map Attribution */}
      <div className="absolute bottom-1 left-1 text-xs text-muted-foreground/60 bg-background/50 px-2 py-1 rounded">
        © Google Maps
      </div>
    </div>
  );
};

export default MapComponent;