import type { FC } from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
          </p>
        </div>
        <div className="flex items-center space-x-2">
        <Button
  variant="ghost"
  size="icon"
  asChild
  aria-label="LinkedIn"
  className="transition-all duration-300 hover:scale-105 hover:bg-transparent text-muted-foreground hover:text-primary"
>
  <Link
    href="https://linkedin.com/in/omkarchavan25"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="h-5 w-5" />
  </Link>
</Button>
          <Button
  variant="ghost"
  size="icon"
  asChild
  aria-label="GitHub"
  className="transition-all duration-300 hover:scale-105 hover:bg-transparent text-muted-foreground hover:text-primary"
>
  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
    <Github className="w-5 h-5" /> {/* Keep only size here */}
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
