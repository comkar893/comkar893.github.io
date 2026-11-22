import Header from '@/components/header';
import HeroAboutSection from '@/components/sections/hero-about-section';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';
import CvItem from '@/components/cv-item';
import { educationData, experienceData, skillsData, projectData, publicationData } from '@/data/cv';
import type { Skill } from '@/data/cv';
import { skillBrandIcons } from '@/data/skill-brands';
import Reveal from '@/components/reveal';

// Shows the brand logo when one exists, otherwise the generic icon from cv.ts.
function SkillChip({ skill }: { skill: Skill }) {
  const brand = skillBrandIcons[skill.id];
  const Fallback = skill.icon;

  return (
    <li className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/90 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent motion-reduce:transform-none">
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="flex flex-col rounded-lg border border-border bg-background p-5">
                <h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillChip key={skill.id} skill={skill} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
