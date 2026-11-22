import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Reveal from '@/components/reveal';

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

// Full-width layout: heading row on top (title left, short subtitle right on desktop), content below.
const SectionWrapper: FC<SectionWrapperProps> = ({ id, eyebrow, title, subtitle, children, className }) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={cn('scroll-mt-20 border-t border-border py-16 md:py-24', className)}>
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Reveal>
        <header className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="text-center md:text-left">
            <span className="mx-auto mb-4 block h-1 w-24 rounded-full bg-accent md:mx-0" aria-hidden="true" />
            <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          </div>
          {subtitle && <p className="mx-auto max-w-md text-center text-base leading-relaxed text-muted-foreground md:mx-0 md:text-right">{subtitle}</p>}
        </header>
        </Reveal>
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
};

export default SectionWrapper;
