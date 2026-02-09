import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEvasiveNoButton } from './hooks/useEvasiveNoButton';
import { PasswordGate } from './components/PasswordGate';
import { RomanticSceneLayout } from './components/RomanticSceneLayout';
import { YesTapSequence } from './components/YesTapSequence';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const { position, handlePointerEnter, handleTouchStart } = useEvasiveNoButton();

  const handleYesClick = () => {
    setAccepted(true);
  };

  // Password gate - show before anything else
  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  // Success view after accepting - now shows tap-through sequence
  if (accepted) {
    return (
      <RomanticSceneLayout>
        <YesTapSequence />
      </RomanticSceneLayout>
    );
  }

  // Main proposal view
  return (
    <RomanticSceneLayout>
      <div className="max-w-3xl w-full text-center space-y-12 z-10">
        <div className="space-y-6">
          <Heart className="w-24 h-24 mx-auto text-romantic-primary fill-romantic-primary animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-romantic-primary leading-tight drop-shadow-lg">
            Aqsa Kousar,
          </h1>
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold text-romantic-dark drop-shadow-md">
            Will you be my Valentine? 💝
          </p>
        </div>

        <div className="relative h-32 md:h-40">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-2xl md:text-3xl px-12 md:px-16 py-8 md:py-10 rounded-full bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold shadow-2xl hover:shadow-romantic-primary/50 border-4 border-white active:scale-95 transition-all duration-200 button-press-animation"
            >
              Yes! 💕
            </Button>

            <Button
              onPointerEnter={handlePointerEnter}
              onTouchStart={handleTouchStart}
              size="lg"
              variant="outline"
              className="text-2xl md:text-3xl px-12 md:px-16 py-8 md:py-10 rounded-full border-4 border-romantic-secondary text-romantic-secondary hover:bg-romantic-secondary/10 font-bold shadow-xl evasive-button-transition"
              style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: 50,
              }}
            >
              No 😢
            </Button>
          </div>
        </div>

        <p className="text-lg md:text-xl text-romantic-muted italic drop-shadow-sm">
          Choose wisely... 😉
        </p>
      </div>

      <footer className="absolute bottom-4 text-center text-sm text-romantic-muted">
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
    </RomanticSceneLayout>
  );
}
