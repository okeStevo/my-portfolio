"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatedBorderCard } from '@/components/ui/animated-border-card';

const technologies = [
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
];

const TechCard = ({ tech }: { tech: { name: string; iconUrl: string } }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y - height / 2) / (height / 2) * -15;
    const rotateY = (x - width / 2) / (width / 2) * 15;

    setStyle({
      '--rotate-x': `${rotateX}deg`,
      '--rotate-y': `${rotateY}deg`,
    } as React.CSSProperties);
  };

  const onMouseLeave = () => {
    setStyle({
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
    });
  };

  return (
    <AnimatedBorderCard triggerOnScroll>
        <div
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={style}
          className="tech-card group relative flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-zinc-900/80 transition-transform duration-300 ease-out transform-style-3d h-full"
        >
          <div className="card-content flex flex-col items-center justify-center gap-4">
            <div className="relative h-16 w-16">
              <Image
                src={tech.iconUrl}
                alt={`${tech.name} logo`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="font-semibold text-zinc-100 text-center">{tech.name}</p>
          </div>
        </div>
    </AnimatedBorderCard>
  );
};


export function TechStack() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient">My Tech Stack</h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            I work with a modern suite of tools and technologies to build, test, and deploy applications.
          </p>
        </div>
        <div className="max-w-6xl mx-auto perspective">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {technologies.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
