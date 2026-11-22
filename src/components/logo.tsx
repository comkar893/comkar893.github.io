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
      <span className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111827] text-sm font-bold text-[#FB7185]"
        >
          OC
        </span>
        Omkar Chavan
      </span>
    </Link>
  );
};

export default Logo;
