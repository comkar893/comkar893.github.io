import Link from 'next/link';
import type { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 group ${className}`}>
      <span className="text-foreground group-hover:text-primary transition-colors duration-300">Omkar</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:opacity-80 transition-opacity duration-300"> Chavan</span>
    </Link>
  );
};

export default Logo;
