import type { FC } from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          <p>&copy; {currentYear} Omkar Sandip Chavan. All rights reserved.</p>
          <p>
            <Link href="mailto:comkar893@gmail.com" className="hover:text-accent transition-colors">
              comkar893@gmail.com
            </Link>
             {' | '}
            <Link href="tel:+15854108375" className="hover:text-accent transition-colors">
              (585)-410-8375
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <Link href="https://linkedin.com/in/omkarchavan25" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <Link href="https://github.com/comkar893" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </Button>
          {/* <Button variant="ghost" size="icon" asChild aria-label="Twitter">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </Button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
