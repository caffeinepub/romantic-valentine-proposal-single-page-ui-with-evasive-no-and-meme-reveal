import { Heart } from 'lucide-react';
import { ReactNode } from 'react';

interface RomanticSceneLayoutProps {
  children: ReactNode;
}

export function RomanticSceneLayout({ children }: RomanticSceneLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden romantic-background">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 via-transparent to-pink-200/30" />
      
      {/* Subtle decorative overlay */}
      <div className="absolute inset-0 romantic-overlay" />
      
      {/* Floating hearts background - always visible, no hover required */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[10%] left-[15%] w-8 h-8 text-pink-300/60 animate-float-slow" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-[20%] right-[20%] w-6 h-6 text-rose-300/50 animate-float-medium" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-[15%] left-[25%] w-7 h-7 text-pink-400/60 animate-float-slow" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-[25%] right-[15%] w-5 h-5 text-rose-400/50 animate-float-fast" style={{ animationDelay: '1.5s' }} />
        <Heart className="absolute top-[40%] left-[10%] w-6 h-6 text-pink-300/50 animate-float-medium" style={{ animationDelay: '2s' }} />
        <Heart className="absolute top-[60%] right-[10%] w-8 h-8 text-rose-300/60 animate-float-slow" style={{ animationDelay: '2.5s' }} />
        <Heart className="absolute top-[50%] left-[40%] w-5 h-5 text-pink-400/40 animate-float-fast" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-[40%] right-[35%] w-6 h-6 text-rose-400/50 animate-float-medium" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen p-6">
        {children}
      </div>
    </div>
  );
}
