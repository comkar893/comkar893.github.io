import Link from 'next/link';
import type { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`rounded-sm text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ''}`}
    >
      Omkar Chavan
    </Link>
  );
};

export default Logo;
