"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export const AnimatedBorderCard = ({
  children,
  className,
  triggerOnScroll = false,
}: {
  children: React.ReactNode;
  className?: string;
  triggerOnScroll?: boolean;
}) => {
  const [isIntersecting, setIntersecting] = useState(!triggerOnScroll);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnScroll]);

  return (
    <div
      ref={ref}
      className={cn(
        'relative rounded-lg p-[2px] transition-opacity duration-1000',
        isIntersecting ? 'opacity-100' : 'opacity-0',
        'before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:content-[""]',
        'before:bg-gradient-to-t before:from-zinc-900 before:to-zinc-900',
        'before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        'before:[mask-composite:exclude]',
        'after:absolute after:inset-0 after:-z-10 after:rounded-lg after:content-[""]',
        'after:bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)]',
        'after:opacity-50',
        className
      )}
    >
      <div className={cn('h-full w-full rounded-[6px] overflow-hidden bg-zinc-900')}>
        {children}
      </div>
    </div>
  );
};
