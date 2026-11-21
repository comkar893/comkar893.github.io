import type { FC } from 'react';
import SectionWrapper from '@/components/section-wrapper';

// The contact form is disabled until a form service is chosen (static hosting cannot run server actions).
// The email link is the only contact method for now.
const ContactSection: FC = () => {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="max-w-2xl">
        <p className="text-justify text-lg leading-relaxed text-foreground/85 md:text-xl">The fastest way to reach me is email.</p>
        <a
          href="mailto:comkar893@gmail.com"
          className="mt-8 inline-flex text-2xl font-semibold tracking-tight text-foreground underline decoration-border underline-offset-8 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm md:text-3xl"
        >
          comkar893@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/omkarchavan25"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-sm text-base font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          LinkedIn →
        </a>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
