import Header from '@/components/header';
import HeroAboutSection from '@/components/sections/hero-about-section';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';
import CvItem from '@/components/cv-item';
import { educationData, experienceData, skillsData, projectData, publicationData } from '@/data/cv';
import type { Skill } from '@/data/cv';
import { skillBrandIcons } from '@/data/skill-brands';
import Reveal from '@/components/reveal';
import SkillsMap from '@/components/skills-map';

// Shows the brand logo when one exists, otherwise the generic icon from cv.ts.
function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const brand = skillBrandIcons[skill.id];
  const Fallback = skill.icon;

  return (
    <li
      style={{ animationDelay: `${(index % 5) * 0.5}s`, animationDuration: `${3.5 + (index % 3) * 0.6}s` }}
      className="animate-float inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/90 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent active:scale-95 active:border-accent active:text-accent motion-reduce:active:scale-100"
    >
      {brand ? (
        <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
          <path d={brand.path} />
        </svg>
      ) : (
        Fallback && <Fallback className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
      {skill.name}
    </li>
  );
}

export default function HomePage() {
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroAboutSection />

        <SectionWrapper
          id="experience"
          title="Experience"
        >
          <div>
            {experienceData.map((item) => (
              <CvItem key={item.id} item={item} type="experience" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="education"title="Education">
          <div>
            {educationData.map((item) => (
              <CvItem key={item.id} item={item} type="education" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills"title="Skills" className="bg-card">
          <SkillsMap skills={skillsData.filter((skill) => skill.id !== 'sk18' && skill.id !== 'sk19')} />
        </SectionWrapper>

        <SectionWrapper id="projects" title="Publications">
          <div>
            {publicationData.length > 0 && (
              <div>
                {publicationData.map((item) => (
                  <CvItem key={item.id} item={item} type="publication" />
                ))}
              </div>
            )}
          </div>
        </SectionWrapper>

      </main>
      <Footer />
    </>
  );
}
