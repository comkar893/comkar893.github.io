import type { FC } from 'react';
import { Github, Linkedin } from 'lucide-react';

const linkClass =
  'inline-flex items-center gap-2.5 rounded-sm text-base font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

// Contact lives here, with the copyright line underneath.
const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block h-1 w-24 rounded-full bg-accent" aria-hidden="true" />
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Contact</h2>
            <a
              href="mailto:comkar893@gmail.com"
              className="mt-4 inline-flex rounded-sm text-2xl font-semibold tracking-tight text-foreground underline decoration-border underline-offset-8 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-3xl"
            >
              comkar893@gmail.com
            </a>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="https://linkedin.com/in/omkarchavan25" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/comkar893" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Github className="h-5 w-5" aria-hidden="true" />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {currentYear} Omkar Sandip Chavan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
