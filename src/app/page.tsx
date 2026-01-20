
import Header from '@/components/header';
import HeroAboutSection from '@/components/sections/hero-about-section';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';
import CvItem from '@/components/cv-item';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { educationData, experienceData, skillsData, projectData, publicationData } from '@/data/cv';
import { Lightbulb, BookOpen } from 'lucide-react';
import type { Skill } from '@/data/cv';

export default function () {
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
          id="education" 
          title="Education"
          subtitle="My academic qualifications and relevant coursework."
          className="bg-card/30"
        >
          <div className="grid grid-cols-1 gap-6">
            {educationData.map(item => (
              <CvItem key={item.id} item={item} type="education" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper 
          id="experience" 
          title="Work Experience"
          subtitle="My professional journey."
        >
          <div className="space-y-8">
            {experienceData.map(item => (
              <CvItem key={item.id} item={item} type="experience" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="skills"
          title="Skills & Expertise"
          subtitle="My technical proficiency."
          className="bg-card/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <Card key={category} className="flex flex-col overflow-hidden shadow-xl hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-primary">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <div className="flex flex-row flex-wrap gap-2 items-center">
                    {skills.map(skill => {
                      const IconComponent = skill.icon;
                      return (
                        <Badge 
                          key={skill.id}
                          variant="outline" 
                          className="font-normal flex items-center rounded-md px-3 py-1.5 text-sm border border-primary bg-primary/10 text-foreground transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5 cursor-default"
                        >
                          {IconComponent && <IconComponent className="mr-2 h-4 w-4 shrink-0 text-foreground" />}
                          {skill.name}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper 
          id="projects"
          title="Projects & Publications"
          subtitle="Creations I'm proud of and my research contributions."
        >
          <div className="mb-16">
            <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <Lightbulb className="mr-3 h-7 w-7 text-primary" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map(item => (
                <CvItem key={item.id} item={item} type="project" />
              ))}
            </div>
          </div>

          {publicationData.length > 0 && (
            <div>
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                <BookOpen className="mr-3 h-7 w-7 text-primary" />
                Publications
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {publicationData.map(item => (
                  <CvItem key={item.id} item={item} type="publication" />
                ))}
              </div>
            </div>
          )}
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
