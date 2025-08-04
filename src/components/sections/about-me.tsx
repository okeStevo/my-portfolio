import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const skills = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "Databases (SQL & NoSQL)",
    "Cloud & DevOps",
    "AI Integration"
];

export function AboutMe() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/oke.jpg"
              alt="Oke Stephen"
              fill
              className="rounded-xl object-cover shadow-2xl"
              data-ai-hint="professional nigerian man"
            />
             <div className="absolute -bottom-4 -right-4 bg-primary/10 backdrop-blur-sm p-4 rounded-xl border border-border">
                <p className="text-sm text-foreground/80">Available for freelance projects</p>
                <p className="font-bold text-foreground">Open to Work</p>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
            <p className="text-muted-foreground text-lg">
                I'm a passionate Full-Stack Developer from Nigeria with a knack for building beautiful, functional, and user-centric web applications. I turn complex problems into elegant solutions, leveraging a modern and robust tech stack.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {skills.map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-foreground/90">{skill}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
