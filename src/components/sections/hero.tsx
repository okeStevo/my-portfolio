"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Users, Calendar } from 'lucide-react';
import { CodeBlock } from '@/components/layout/code-block';
import { AnimatedBorderCard } from '@/components/ui/animated-border-card';

const roles = [
    "Next.js",
    "Node.js",
    "React.js",
    "Javascript",
    "Nest.js"
];

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[roleIndex];

            if (isDeleting) {
                setCurrentText(prev => prev.substring(0, prev.length - 1));
            } else {
                setCurrentText(prev => fullText.substring(0, prev.length + 1));
            }

            if (!isDeleting && currentText === fullText) {
                // Pause at the end of typing
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setRoleIndex(prev => (prev + 1) % roles.length);
            }
        };

        const typingSpeed = isDeleting ? 100 : 200;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex]);


    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-zinc-800" style={{ maskImage: 'radial-gradient(ellipse at center, white, transparent 70%)' }}></div>
            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start space-y-6 text-left">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Oke Stephen
                            </h1>
                            <p className="mt-4 text-2xl md:text-3xl text-zinc-300">
                                I'm a <span className="text-white font-bold">{currentText}</span><span className="blinking-cursor">|</span> Developer
                            </p>
                            <p className="mt-4 text-lg text-zinc-400 max-w-xl">
                                I specialize in building exceptional, high-performance web applications and have a passion for teaching others how to do the same.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-white font-bold shadow-lg">
                                <a href="#contact">Get In Touch</a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white backdrop-blur-sm">
                                <a href="#projects">Explore My Work</a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-6">
                            <div className="flex items-center gap-2">
                                <Users className="h-6 w-6 text-primary" />
                                <div className="text-left">
                                    <p className="font-bold text-xl text-white">200+</p>
                                    <p className="text-sm text-zinc-400">Students Trained</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-primary" />
                                <div className="text-left">
                                    <p className="font-bold text-xl text-white">3+</p>
                                    <p className="text-sm text-zinc-400">Years of Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-2">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-7 w-7 text-zinc-400 hover:text-white transition-colors" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-7 w-7 text-zinc-400 hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full hidden md:block">
                       <AnimatedBorderCard>
                         <CodeBlock />
                       </AnimatedBorderCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
