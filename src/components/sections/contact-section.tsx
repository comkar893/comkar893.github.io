import type { FC } from 'react';
import SectionWrapper from '@/components/section-wrapper';

// The contact form is disabled until a form service is chosen (static hosting cannot run server actions).
// Direct links are the reliable option for now.
const ContactSection: FC = () => {
  return (
    <SectionWrapper id="contact" eyebrow="05" title="Contact">
      <div className="max-w-2xl">
        <p className="text-justify text-lg leading-relaxed text-foreground/85 md:text-xl">
          The fastest way to reach me is email. I'm happy to talk about engineering roles, collaboration, or anything on this site.
        </p>

        <ul className="mt-10 space-y-4">
          <li>
            <a
              href="mailto:comkar893@gmail.com"
              className="inline-flex text-2xl font-semibold tracking-tight text-foreground underline decoration-border underline-offset-8 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm md:text-3xl"
            >
              comkar893@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/omkarchavan25"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-base font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              LinkedIn →
            </a>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
