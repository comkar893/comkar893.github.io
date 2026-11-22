import type { FC } from 'react';
import { impactHighlights } from '@/data/cv';

// One row of key results directly under the hero. Figures come from impactHighlights in cv.ts.
const ImpactStrip: FC = () => {
  return (
    <section aria-label="Key results" className="border-y border-border bg-card">
      <ul
        className={`container mx-auto grid max-w-screen-xl grid-cols-1 divide-y divide-border px-4 sm:px-6 md:divide-x md:divide-y-0 lg:px-8 ${
          impactHighlights.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
        }`}
      >
        {impactHighlights.map((item) => (
          <li key={item.label} className="py-8 text-center md:px-8 md:py-10 md:text-left md:first:pl-0 md:last:pr-0">
            <p className="text-4xl font-semibold tabular-nums tracking-tight text-accent md:text-5xl">{item.value}</p>
            <p className="mt-2 text-base text-muted-foreground">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImpactStrip;
