
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'simple';
  withText?: boolean;
}

export const Logo = ({
  className,
  size = 'md',
  variant = 'default',
  withText = true,
}: LogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <Link
      to="/"
      className={cn(
        'flex items-center gap-2 transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          'relative flex items-center justify-center transition-all duration-300',
          sizeClasses[size],
          isHovered ? 'scale-105' : 'scale-100'
        )}
      >
        {/* Logo SVG */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'w-full h-full transition-all duration-500',
            isHovered ? 'rotate-[360deg]' : 'rotate-0'
          )}
        >
          {/* Main Circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            className={cn(
              'origin-center',
              {
                'animate-path-draw': variant === 'default',
              }
            )}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="100"
            strokeDashoffset={variant === 'simple' ? "0" : "100"}
          />
          
          {/* Inner Node Connection Lines */}
          <path
            d="M20 10L20 30M10 20L30 20"
            stroke="url(#logoGradient2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="100"
            strokeDashoffset={variant === 'simple' ? "0" : "100"}
            className={cn(
              'origin-center transition-all duration-500',
              {
                'animate-path-draw animation-delay-300': variant === 'default',
              },
              isHovered ? 'opacity-100' : 'opacity-80'
            )}
          />

          {/* Connection Nodes */}
          <circle
            cx="20"
            cy="20"
            r="4"
            fill="url(#logoGradientFill3)"
            className={cn(
              'origin-center transition-all duration-300',
              isHovered ? 'opacity-100 scale-110' : 'opacity-90 scale-100'
            )}
          />
          <circle
            cx="20"
            cy="10"
            r="2"
            fill="url(#logoGradientFill)"
            className={cn(
              'origin-center transition-all duration-300',
              isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
            )}
          />
          <circle
            cx="20"
            cy="30"
            r="2"
            fill="url(#logoGradientFill)"
            className={cn(
              'origin-center transition-all duration-300',
              isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
            )}
          />
          <circle
            cx="10"
            cy="20"
            r="2"
            fill="url(#logoGradientFill2)"
            className={cn(
              'origin-center transition-all duration-300',
              isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
            )}
          />
          <circle
            cx="30"
            cy="20"
            r="2"
            fill="url(#logoGradientFill2)"
            className={cn(
              'origin-center transition-all duration-300',
              isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
            )}
          />
          
          {/* Gradients - 3 distinct colors: red, blue, black */}
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E40AF" />
              <stop offset="1" stopColor="#0A2463" />
            </linearGradient>
            <linearGradient id="logoGradient2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA384C" />
              <stop offset="1" stopColor="#C81D35" />
            </linearGradient>
            <linearGradient id="logoGradientFill" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E40AF" />
              <stop offset="1" stopColor="#0A2463" />
            </linearGradient>
            <linearGradient id="logoGradientFill2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA384C" />
              <stop offset="1" stopColor="#C81D35" />
            </linearGradient>
            <linearGradient id="logoGradientFill3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#000000" />
              <stop offset="1" stopColor="#222222" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {withText && (
        <span className={cn(
          'font-display font-semibold tracking-tight transition-all duration-300',
          textSizeClasses[size],
          isHovered ? 'text-nexus-blue' : 'text-nexus-darkGray'
        )}>
          <span className="text-nexus-blue">Nexus</span>
          <span className={cn(
            'transition-all duration-300',
            isHovered ? 'text-[#EA384C]' : 'text-nexus-black'
          )}>Nao</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
