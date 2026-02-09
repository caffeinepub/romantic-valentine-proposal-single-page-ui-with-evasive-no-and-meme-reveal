import { useState } from 'react';
import { Heart, Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RomanticSceneLayout } from './RomanticSceneLayout';

interface PasswordGateProps {
  onUnlock: () => void;
}

const CORRECT_PASSWORD = '9102008';
const HINT = 'Most happiest day of the life for me';

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleUnlockClick = () => {
    setShowPrompt(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsChecking(true);

    // Add a small delay for better UX
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        onUnlock();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsChecking(false);
    }, 300);
  };

  return (
    <RomanticSceneLayout>
      <div className="max-w-2xl w-full text-center space-y-8 z-10 px-4">
        {!showPrompt ? (
          // Welcome screen with tappable link
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Sparkles className="w-20 h-20 mx-auto text-romantic-primary animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold text-romantic-primary leading-tight drop-shadow-lg">
                Something Special Awaits... 💝
              </h1>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-romantic-primary space-y-6">
              <Lock className="w-16 h-16 mx-auto text-romantic-primary" />
              <p className="text-xl md:text-2xl text-romantic-dark font-medium">
                A special message is waiting for you
              </p>
              <Button
                onClick={handleUnlockClick}
                size="lg"
                className="text-xl md:text-2xl px-12 py-8 rounded-full bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold shadow-2xl hover:shadow-romantic-primary/50 border-4 border-white active:scale-95 transition-all duration-200 button-press-animation min-h-[80px] min-w-[200px]"
              >
                Tap to Unlock 🔓
              </Button>
            </div>
          </div>
        ) : (
          // Password prompt
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <Heart className="w-20 h-20 mx-auto text-romantic-primary fill-romantic-primary animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-romantic-primary drop-shadow-lg">
                Enter the Password
              </h2>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-romantic-primary">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3 text-left">
                  <Label htmlFor="password" className="text-lg font-semibold text-romantic-dark">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter password"
                    className="text-xl py-6 px-4 border-2 border-romantic-primary/30 focus:border-romantic-primary rounded-xl"
                    autoFocus
                    disabled={isChecking}
                  />
                  <p className="text-sm md:text-base text-romantic-muted italic">
                    <span className="font-semibold">Hint:</span> {HINT}
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                )}

                <div className="flex gap-4 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setShowPrompt(false);
                      setPassword('');
                      setError('');
                    }}
                    className="flex-1 text-lg py-6 rounded-xl border-2 border-romantic-secondary text-romantic-secondary hover:bg-romantic-secondary/10"
                    disabled={isChecking}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 text-lg py-6 rounded-xl bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold shadow-xl active:scale-95 transition-all duration-200 button-press-animation"
                    disabled={isChecking || !password}
                  >
                    {isChecking ? 'Checking...' : 'Unlock 💕'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
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
