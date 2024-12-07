import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow relative">
        {/* Starfield Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div id="stars" className="absolute w-full h-full">
            <div className="stars-container animate-twinkle" />
          </div>
        </div>
        
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-500"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')",
            opacity: isDark ? 0.1 : 0.3
          }}
        />
        <div className="fixed inset-0 bg-gradient-to-b from-cosmic-dark/90 via-cosmic-dark/70 to-cosmic-dark/90 pointer-events-none" />
        <div className="relative z-10 text-cosmic-light">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};