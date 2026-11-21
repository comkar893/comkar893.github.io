import Header from '@/components/header';
import HeroAboutSection from '@/components/sections/hero-about-section';
import ContactSection from '@/components/sections/contact-section';
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
          eyebrow="01"
          title="Experience"
        >
          <div>
            {experienceData.map((item) => (
              <CvItem key={item.id} item={item} type="experience" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="education" eyebrow="02" title="Education">
          <div>
            {educationData.map((item) => (
              <CvItem key={item.id} item={item} type="education" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills" eyebrow="03" title="Skills" className="bg-card">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="mb-4 border-b border-border pb-3 text-sm font-medium text-muted-foreground">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillChip key={skill.id} skill={skill} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects" eyebrow="04" title="Projects & Publications">
          <div className="space-y-16">
            <div>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Projects</h3>
              {projectData.map((item) => (
                <CvItem key={item.id} item={item} type="project" />
              ))}
            </div>

            {publicationData.length > 0 && (
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Publications</h3>
                {publicationData.map((item) => (
                  <CvItem key={item.id} item={item} type="publication" />
                ))}
              </div>
            )}
          </div>
        </SectionWrapper>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
