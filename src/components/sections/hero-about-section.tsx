import type { FC } from 'react';
import { Linkedin } from 'lucide-react';
import { siGithub } from 'simple-icons';
import { brandFill } from '@/lib/brand';

// Placeholder for a headshot: a code editor window with a blinking cursor.
const CodeWindow: FC = () => (
  <div
    className="rise relative w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
    style={{ animationDelay: '360ms' }}
    role="img"
    aria-label="Placeholder graphic for a software developer"
  >
    <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
    </div>
    <div className="space-y-3 p-6 font-mono text-sm text-muted-foreground">
      <p>
        <span className="text-accent">const</span> developer = {'{'}
      </p>
      <p className="pl-4">
        role: <span className="text-foreground">&quot;Software Engineer III&quot;</span>,
      </p>
      <p className="pl-4">
        focus: [<span className="text-foreground">&quot;finance&quot;</span>, <span className="text-foreground">&quot;payments&quot;</span>],
      </p>
      <p>{'}'};</p>
      <p className="flex items-center">
        <span className="inline-block h-4 w-[0.5ch] bg-accent" />
      </p>
    </div>
  </div>
);

const HeroAboutSection: FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 pb-16 pt-20 md:pb-24 md:pt-32">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Software Engineer III · Foundry Digital LLC
          </p>

          <h1
            id="about-heading"
            style={{ animationDelay: '120ms' }}
            className="rise mt-6 text-6xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
          >
            Omkar Chavan
          </h1>

          <p style={{ animationDelay: '180ms' }} className="rise mt-5 max-w-2xl text-lg font-medium text-foreground md:text-xl">
            Building reliable payment systems.
          </p>

          <p style={{ animationDelay: '240ms' }} className="rise mt-6 max-w-2xl text-justify text-lg leading-relaxed text-foreground/80 md:text-xl">
            Hi, I&apos;m Omkar. I&apos;m a{' '}
            <span className="font-semibold text-accent">Software Engineer III</span> at Foundry Digital LLC with close to 5 years of
            experience building backend systems and cloud infrastructure. I own on-time client payouts, keep the payout workflow robust and
            failure-proof, and build the infrastructure and test environments that help our team ship with confidence. I hold a Data Science
            degree from{' '}
            <a
              href="https://www.rit.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Rochester Institute of Technology
            </a>{' '}
            and am particularly interested in fintech, where reliable payment systems matter most.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:comkar893@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Email me
            </a>
            <a
              href="/omkar-chavan.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Download CV
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <li>
              <a
                href="https://linkedin.com/in/omkarchavan25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" style={{ color: '#0A66C2' }} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/comkar893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true" style={{ fill: brandFill(siGithub.hex) }}>
                  <path d={siGithub.path} />
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
