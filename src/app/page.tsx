import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { TechStack } from '@/components/sections/tech-stack';
import { Contact } from '@/components/sections/contact';
import { AboutMe } from '@/components/sections/about-me';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectShowcase />
        <TechStack />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
