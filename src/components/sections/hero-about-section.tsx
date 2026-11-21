import type { FC } from 'react';


const textLinkClass =
  'text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm';

const HeroAboutSection: FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 pb-16 pt-20 md:pb-24 md:pt-32">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="rise inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Software Engineer III · Foundry Digital LLC
        </p>

        <h1
          id="about-heading"
          style={{ animationDelay: '120ms' }}
          className="rise mt-6text-6xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          Omkar Chavan
        </h1>

        <p style={{ animationDelay: '240ms' }} className="rise mt-6 max-w-2xl text-justify text-lg leading-relaxed text-foreground/80 md:text-xl">
          Software Engineer with close to 5 years of experience building backend systems and cloud infrastructure. I am currently a{' '}
          <span className="font-semibold text-accent">Software Engineer III at Foundry Digital LLC</span>, where I own on-time client payouts,
          keep the payout workflow robust and failure-proof, and build the infrastructure and test environments that let our team ship with
          confidence. I hold a Data Science degree from{' '}
          <a
            href="https://www.rit.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Rochester Institute of Technology
          </a>{' '}
          and am particularly interested in the finance and crypto domain, where reliable payment systems matter most.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:comkar893@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Email me
          </a>
          <a
            href="/omkar-cv.pdf"
            download
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://linkedin.com/in/omkarchavan25" target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            LinkedIn
          </a>
          <a href="https://github.com/comkar893" target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
