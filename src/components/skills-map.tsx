import type { FC } from 'react';
import type { Skill } from '@/data/cv';
import { skillBrandIcons } from '@/data/skill-brands';
import { brandFill } from '@/lib/brand';

interface SkillsMapProps {
  groups: Record<string, Skill[]>;
}

// Skills in rows: a small category label on the left, its skills as colored chips on the right.
const SkillsMap: FC<SkillsMapProps> = ({ groups }) => {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-10">
      {Object.entries(groups).map(([category, skills]) => (
        <div key={category} className="grid gap-4 py-6 sm:grid-cols-[10rem_1fr] sm:items-start sm:gap-8">
          <p className="text-sm font-medium text-muted-foreground">{category}</p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const brand = skillBrandIcons[skill.id];
              const Fallback = skill.icon;
              return (
                <li
                  key={skill.id}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/90 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
                >
                  {brand ? (
                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" style={{ fill: brandFill(brand.hex) }}>
                      <path d={brand.path} />
                    </svg>
                  ) : (
                    Fallback && <Fallback className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  )}
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsMap;
