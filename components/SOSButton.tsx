'use client';

import { useState, useCallback } from 'react';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function SOSButton() {
  const [isFlashing, setIsFlashing] = useState(false);

  const triggerSOS = useCallback(() => {
    // Check if speechSynthesis is available
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Emergency. I need help immediately. SOS.');
      utterance.volume = 1;
      utterance.pitch = 1.2;
      utterance.rate = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
    
    // Vibrate device if supported
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500]);
    }
    
    // Visual flash
    setIsFlashing(true);
    toast.error('SOS Triggered!', { description: 'Emergency alarm activated.' });
    
    setTimeout(() => {
      setIsFlashing(false);
    }, 3000);
  }, []);

  return (
    <>
      <button
        onClick={triggerSOS}
        className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 font-bold text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-700 active:scale-95 ${
          isFlashing ? 'animate-ping' : ''
        }`}
        title="SOS Emergency"
      >
        <AlertCircle className="h-8 w-8" />
      </button>
      
      {/* Screen flash effect */}
      {isFlashing && (
        <div className="pointer-events-none fixed inset-0 z-40 animate-pulse bg-red-600/30" />
      )}
    </>
  );
}
