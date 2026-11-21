'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import type { CvEntry, CourseDetail } from '@/data/cv';
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

// One entry: period on the left, role and achievements on the right.
const CvItem: FC<CvItemProps> = ({ item, type }) => {
  const descriptions = Array.isArray(item.description) ? item.description : [item.description];
  const [showCourses, setShowCourses] = useState(false);
  const isList = descriptions.length > 1;

  return (
    <article className="border-b border-border py-8 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">{item.title}</h3>
          {item.subtitle && (
            <p className="mt-1 text-base text-muted-foreground">
              {item.subtitle}
              {item.location && <span>{`, ${item.location}`}</span>}
            </p>
          )}
        </div>
        <p className="shrink-0 font-mono text-sm text-muted-foreground">{item.period}</p>
      </div>

      <div className="min-w-0">


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

        {item.tags && item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
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
              <ul id={`courses-${item.id}`} className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {item.courses.map((course: CourseDetail, index: number) => (
                  <li key={index} className="text-sm text-foreground/85">
                    {course.name}
                    {course.description && <span className="block text-xs text-muted-foreground">{course.description}</span>}
                  </li>
                ))}
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
