import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="aspect-video">
          {/* Video placeholder - In a real implementation, you would embed your video here */}
          <div className="w-full h-full bg-construction-dark flex flex-col items-center justify-center text-white">
            <div className="text-center space-y-4">
              <div className="text-6xl">🏗️</div>
              <h3 className="text-2xl font-bold">MrDGN Constructions Story</h3>
              <p className="text-white/80 max-w-md">
                Watch how we've been building the future with precision, safety, and innovation for over 25 years.
              </p>
              <div className="text-sm text-white/60">
                Video content would be embedded here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;