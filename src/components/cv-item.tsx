
'use client';

import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin, BookText, ChevronDown, ChevronUp } from 'lucide-react';
import type { CvEntry, CourseDetail } from '@/data/cv';

interface CvItemProps {
  item: CvEntry;
  type: 'education' | 'experience' | 'project' | 'publication';
}

const CvItem: FC<CvItemProps> = ({ item, type }) => {
  const descriptions = Array.isArray(item.description) ? item.description : [item.description];
  const [showCourses, setShowCourses] = useState(false);

  return (
    <Card className="w-full overflow-hidden shadow-xl hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
      {type === 'project' && item.logoUrl && (
         <div className="aspect-video overflow-hidden">
          <Image
            src={item.logoUrl}
            alt={`${item.title} preview`}
            width={400}
            height={250}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            {...(item.logoAiHint && {'data-ai-hint': item.logoAiHint})}
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          {type !== 'project' && item.logoUrl && (
            <Image 
              src={item.logoUrl} 
              alt={`${item.subtitle || item.title} logo`} 
              width={40} 
              height={40} 
              className="rounded-md mr-3 hidden sm:block"
              {...(item.logoAiHint && {'data-ai-hint': item.logoAiHint})}
            />
          )}
          <div className="flex-grow">
            <CardTitle className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{item.title}</CardTitle>
            {item.subtitle && (
              <CardDescription className="text-md text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {item.subtitle}{item.location && `, ${item.location}`}
              </CardDescription>
            )}
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap pt-1 sm:pt-0">{item.period}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 flex-grow">
        {descriptions.map((desc, index) => (
          <p key={index} className="text-foreground/90 leading-relaxed">
            {type === 'experience' && descriptions.length > 1 ? `• ${desc}` : desc}
          </p>
        ))}

        {type === 'education' && item.courses && item.courses.length > 0 && (
          <div className="mt-4 pt-3 border-t border-border/50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="flex items-center text-sm font-semibold text-foreground">
                <BookText className="mr-2 h-4 w-4 text-primary" />
                Relevant Coursework:
              </h4>
              <button
                onClick={() => setShowCourses(!showCourses)}
                className="flex items-center text-xs text-accent hover:text-primary focus:outline-none"
                aria-expanded={showCourses}
                aria-controls={`courses-${item.id}`}
              >
                {showCourses ? 'Hide Courses' : 'Show Courses'}
                {showCourses ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
              </button>
            </div>
            {showCourses && (
              <div 
                id={`courses-${item.id}`} 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 animate-accordion-down mt-2 justify-center"
              >
                {item.courses.map((course: CourseDetail, index: number) => (
                  <Card key={index} className="bg-card border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-3">
                      <p className="font-medium text-foreground/90 text-sm">{course.name}</p>
                      {course.description && (
                        <p className="text-xs text-muted-foreground mt-1">{course.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
        
        {(item.location || item.url) && type !== 'education' && !item.subtitle?.includes(item.location || '') && ( // Conditionally render this block
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
            {item.location && (
              <span className="flex items-center">
                <MapPin className="mr-1.5 h-4 w-4 text-accent" /> {item.location}
              </span>
            )}
            {item.url && (
              <Link href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-accent hover:text-primary transition-colors">
                <ExternalLink className="mr-1.5 h-4 w-4" /> View {type === 'project' ? 'Project' : (type === 'publication' ? 'Publication' : 'Details')}
              </Link>
            )}
          </div>
        )}
         {/* Special handling for education items if location was already displayed with subtitle */}
         {type === 'education' && item.url && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
            <Link href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-accent hover:text-primary transition-colors">
                <ExternalLink className="mr-1.5 h-4 w-4" /> View Details
            </Link>
          </div>
        )}
         {/* Handling for project/publication URL when location might not be present but URL is */}
         {(type === 'project' || type === 'publication') && item.url && !item.location && (
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
                 <Link href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-accent hover:text-primary transition-colors">
                    <ExternalLink className="mr-1.5 h-4 w-4" /> View {type === 'project' ? 'Project' : 'Publication'}
                </Link>
            </div>
         )}
      </CardContent>
      {item.tags && item.tags.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2 pt-4">
          {item.tags.map((tag) => (
            <Badge 
              key={tag}
              variant="outline" 
              className="font-normal flex items-center rounded-md px-3 py-1.5 text-sm border border-primary bg-primary/10 text-primary transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5 cursor-default"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default CvItem;
