import type { FC } from 'react';
import type { Skill } from '@/data/cv';
import { skillBrandIcons } from '@/data/skill-brands';

// Brand colors are used as-is. Very dark logos switch to the text color so they stay visible on a dark background.
function brandFill(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.2 ? 'currentColor' : `#${hex}`;
}

interface SkillsMapProps {
  skills: Skill[];
}

// All skills in one centered cluster, without category labels. Each chip floats gently, out of step with the others.
const SkillsMap: FC<SkillsMapProps> = ({ skills }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-3 rounded-2xl border border-border bg-card p-6 md:gap-4 md:p-10">
      {skills.map((skill, index) => {
        const brand = skillBrandIcons[skill.id];
        const Fallback = skill.icon;
        return (
          <li
            key={skill.id}
            style={{ animationDelay: `${(index % 6) * 0.4}s`, animationDuration: `${3.5 + (index % 4) * 0.5}s` }}
            className="animate-float inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/90 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent active:scale-95 motion-reduce:active:scale-100"
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
  );
};

export default SkillsMap;
