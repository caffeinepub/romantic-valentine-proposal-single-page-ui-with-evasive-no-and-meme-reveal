import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function YesTapSequence() {
  const [step, setStep] = useState(1);

  // Preload images for instant transitions
  useEffect(() => {
    const imagesToPreload = [
      '/assets/IMG-20260210-WA0002.jpg',
      '/assets/IMG-20260210-WA0000.jpg'
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleTap = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Loop back to step 1 when tapping on the final message
      setStep(1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTap();
    }
  };

  return (
    <div className="max-w-4xl w-full text-center space-y-8 z-10 px-4">
      {step === 1 && (
        <div
          onClick={handleTap}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Tap to continue"
          className="cursor-pointer animate-fade-scale-in focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 rounded-3xl"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-8 border-4 border-romantic-primary hover:shadow-romantic-primary/30 transition-shadow duration-300">
            <img
              src="/assets/IMG-20260210-WA0002.jpg"
              alt="First moment"
              className="w-full h-auto rounded-2xl object-contain max-h-[70vh]"
            />
          </div>
          <p className="mt-6 text-lg md:text-xl text-romantic-muted italic">
            Tap to continue... 💕
          </p>
        </div>
      )}

      {step === 2 && (
        <div
          onClick={handleTap}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Tap to see the message"
          className="cursor-pointer animate-fade-scale-in focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 rounded-3xl"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-8 border-4 border-romantic-primary hover:shadow-romantic-primary/30 transition-shadow duration-300">
            <img
              src="/assets/IMG-20260210-WA0000.jpg"
              alt="Second moment"
              className="w-full h-auto rounded-2xl object-contain max-h-[70vh]"
            />
          </div>
          <p className="mt-6 text-lg md:text-xl text-romantic-muted italic">
            Tap to see the message... 💖
          </p>
        </div>
      )}

      {step === 3 && (
        <div
          onClick={handleTap}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Tap again to love you more"
          className="space-y-8 animate-fade-scale-in cursor-pointer focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 rounded-3xl"
        >
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-romantic-primary fill-romantic-primary animate-bounce" />
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-romantic-primary hover:shadow-romantic-primary/30 transition-shadow duration-300">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-romantic-primary leading-relaxed">
              I love you soooooo much meri cutiee🫂🌹🫀💍
            </p>
          </div>

          <div className="flex justify-center gap-3 text-4xl md:text-5xl animate-pulse">
            <span>💕</span>
            <span>✨</span>
            <span>💖</span>
            <span>✨</span>
            <span>💕</span>
          </div>

          <p className="mt-6 text-lg md:text-xl text-romantic-muted italic">
            Tap again to love you more 💖
          </p>
        </div>
      )}

      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-romantic-muted px-4">
        <p>
          © {new Date().getFullYear()} · Built with <Heart className="inline w-4 h-4 text-romantic-primary fill-romantic-primary" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-romantic-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
