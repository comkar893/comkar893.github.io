import Header from '@/components/header';
import HeroAboutSection from '@/components/sections/hero-about-section';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';
import CvItem from '@/components/cv-item';
import { educationData, experienceData, skillsData, projectData, publicationData } from '@/data/cv';
import type { Skill } from '@/data/cv';
import SkillsMap from '@/components/skills-map';
import ImpactStrip from '@/components/impact-strip';

export default function HomePage() {
  // IDEs are left off the site; they still appear in the CV.
  const siteSkills = skillsData.filter((skill) => skill.id !== 'sk18' && skill.id !== 'sk19');
  const groupedSkills = siteSkills.reduce((acc, skill) => {
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

        <ImpactStrip />

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
          <SkillsMap groups={groupedSkills} />
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
