
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

const bioPart1 = "a Data Science graduate from Rochester Institute of Technology and currently a ";
const highlightedDesignation = "Software Engineer II";
const bioPart2 = " at Foundry Digital LLC. I'm passionate about building robust backend solutions, optimizing system performance, and leveraging data to drive insights. With a strong foundation in software engineering and a keen interest in cloud technologies and distributed systems, I enjoy tackling complex challenges and contributing to innovative projects. Explore my journey and connect with me to discuss technology or potential collaborations!";

const HeroAboutSection: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-background to-card scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary transform transition-all duration-500 hover:scale-105">
              <Image
                src="https://placehold.co/300x300.png"
                alt="My Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
                data-ai-hint="profile photo"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Hello! I'm Omkar
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-justify">
              {bioPart1}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {highlightedDesignation}
              </span>
              {bioPart2}
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                asChild 
                className="bg-transparent border border-primary text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-transparent flex items-center gap-2"
              >
                <Link href="/omkar-cv.pdf" download target="_blank">
                  <Download className="h-5 w-5" /> Download CV
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
