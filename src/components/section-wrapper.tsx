import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  contentClassName,
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 scroll-mt-16', className)} // scroll-mt matches header height
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {title && (
          <div className="mb-12 text-center">
            <h2
              className={cn(
                'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent',
                titleClassName
              )}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(contentClassName)}>{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
