'use client';

import { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

const GESTURES = [
  { emoji: '✋', title: 'Hello', desc: 'Open Hand' },
  { emoji: '👊', title: 'Yes', desc: 'Fist' },
  { emoji: '👍 / 👎', title: 'Good / No', desc: 'Thumb Up / Down' },
  { emoji: '☝️', title: 'Wait', desc: 'Index Finger Up' },
  { emoji: '✌️', title: 'Help', desc: 'V Sign' },
  { emoji: '🤟', title: 'Assistance', desc: 'ILY Sign (Thumb, Index, Pinky)' },
  { emoji: '🤚', title: 'Thank You', desc: 'Four Fingers Open (No Thumb)' },
  { emoji: '👋', title: 'Goodbye', desc: 'Wave Open Hand' },
  { emoji: '🙏', title: 'Please', desc: 'Hands together open palms' },
  { emoji: '✋', title: 'Stop', desc: 'Open hand held still upper-middle' },
  { emoji: '💧', title: 'Water', desc: 'W Shape (Index, Middle, Ring)' },
  { emoji: '🚻', title: 'Restroom', desc: 'Two fists low' },
];

export default function GestureGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground hover:bg-white/60 transition-colors"
      >
        <HelpCircle className="h-4 w-4" /> Gesture Guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-white/20 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-foreground">Hand Gesture Guide</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GESTURES.map((g, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-4 text-center transition-transform hover:scale-105">
                  <span className="text-4xl mb-2">{g.emoji}</span>
                  <p className="font-bold text-foreground text-sm">{g.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{g.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-foreground px-6 py-2 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
