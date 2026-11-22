'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import TypedTitle from '@/components/typed-title';
import { skillsData } from '@/data/cv';
import type { CvEntry, CourseDetail } from '@/data/cv';
import { skillBrandIcons } from '@/data/skill-brands';
import { cn } from '@/lib/utils';

interface CvItemProps {
  item: CvEntry;
  type: 'education' | 'experience' | 'project' | 'publication';
}

const linkLabel: Record<CvItemProps['type'], string> = {
  education: 'View details',
  experience: 'View details',
  project: 'View project',
  publication: 'Read publication',
};

// Logo for a tag, when the same technology appears in the Skills section.
const brandByName = new Map(skillsData.map((skill) => [skill.name, skillBrandIcons[skill.id]]));

// Two columns: context on the left (period, company, domains, tech stack), the work itself on the right.
const CvItem: FC<CvItemProps> = ({ item, type }) => {
  const descriptions = Array.isArray(item.description) ? item.description : [item.description];
  const isList = descriptions.length > 1;
  const [showCourses, setShowCourses] = useState(false);

  return (
    <article className="grid grid-cols-1 gap-6 border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-12 md:gap-10">
      <aside className="md:col-span-4">
        <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
        {item.subtitle && (
          <p className="mt-1 text-base text-foreground/90">
            {item.subtitle}
            {item.location && <span className="text-muted-foreground">{`, ${item.location}`}</span>}
          </p>
        )}

        {item.domains && item.domains.length > 0 && (
          <ul className="mt-5 space-y-2">
            {item.domains.map((domain) => (
              <li key={domain.name} className="rounded-md border-l-2 border-accent bg-card px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-semibold text-foreground">{domain.name}</p>
                  {domain.icons && (
                    <span className="flex shrink-0 items-center gap-1.5 text-foreground/80">
                      {domain.icons.map((icon) => (
                        <svg key={icon.slug} role="img" aria-label={icon.title} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                          <path d={icon.path} />
                        </svg>
                      ))}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{domain.detail}</p>
              </li>
            ))}
          </ul>
        )}

        {item.tags && item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
            {item.tags.map((tag) => {
              const brand = brandByName.get(tag);
              return (
                <li
                  key={tag}
                  className={cn(
                    'inline-flex items-center gap-2',
                    type === 'publication'
                      ? 'rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/90 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent motion-reduce:transform-none'
                      : 'gap-1.5 font-mono text-xs text-muted-foreground'
                  )}
                >
                  {brand && (
                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                      <path d={brand.path} />
                    </svg>
                  )}
                  {tag}
                </li>
              );
            })}
          </ul>
        )}
        {item.practices && item.practices.length > 0 && (
          <div className="mt-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Focus Areas</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.practices.join(' · ')}</p>
          </div>
        )}
      </aside>

      <div className="min-w-0 md:col-span-8">
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
          {item.typedTitle ? <TypedTitle text={item.title} className="font-mono" /> : item.title}
        </h3>
        {item.highlight && (
          <p className="mt-3 inline-flex items-center rounded-md border border-accent px-2.5 py-1 font-mono text-sm font-semibold text-accent">
            {item.highlight}
          </p>
        )}

        {isList ? (
          <ul className="mt-4 space-y-3">
            {descriptions.map((desc, index) => (
              <li
                key={index}
                className="relative pl-5 text-justify leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-accent"
              >
                {desc}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-justify leading-relaxed text-foreground/85">{descriptions[0]}</p>
        )}

        {item.responsibilities && (
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Current responsibilities</h4>
            <p className="mt-3 text-justify leading-relaxed text-foreground/85">{item.responsibilities}</p>
          </div>
        )}

        {type === 'education' && item.courses && item.courses.length > 0 && (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setShowCourses(!showCourses)}
              className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={showCourses}
              aria-controls={`courses-${item.id}`}
            >
              Relevant coursework ({item.courses.length})
              <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', showCourses && 'rotate-180')} aria-hidden="true" />
            </button>
            {showCourses && (
            <ul id={`courses-${item.id}`} className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {item.courses.map((course: CourseDetail, index: number) => {
                const [code, ...rest] = course.name.split(' - ');
                const title = rest.length > 0 ? rest.join(' - ') : code;
                return (
                  <li key={index} className="flex flex-col gap-0.5 text-sm leading-snug text-foreground/85">
                    <span className="font-mono text-xs text-muted-foreground">{rest.length > 0 ? code : ''}</span>
                    <span>
                      {title}
                      {course.description && <span className="block text-xs text-muted-foreground">{course.description}</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
            )}
          </div>
        )}

        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {linkLabel[type]}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
};

export default CvItem;
