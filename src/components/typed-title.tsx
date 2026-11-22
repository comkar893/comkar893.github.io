'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

interface TypedTitleProps {
  text: string;
  className?: string;
}

// Types the text out once it scrolls into view, with a blinking cursor.
// The full text is always present for screen readers and crawlers, and is shown
// immediately when the visitor prefers reduced motion.
const TypedTitle: FC<TypedTitleProps> = ({ text, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const timer = setTimeout(() => setCount((c) => c + 1), 70);
    return () => clearTimeout(timer);
  }, [started, count, text.length]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="caret-blink ml-0.5 inline-block h-[1em] w-[0.1em] translate-y-[0.15em] bg-accent" />
      </span>
    </span>
  );
};

export default TypedTitle;
