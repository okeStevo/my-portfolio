import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sleek Cryptocurrency Analytics Platform",
    description:
      "A visually stunning and highly interactive cryptocurrency analytics dashboard. Built with a modern front-end stack, it features smooth animations with Framer Motion and a clean, user-friendly interface using Aceternity UI and Radix UI components.",
    image: "/crypto-dashboard.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Aceternity UI",
      "Radix UI",
    ],
    liveUrl: "https://next-crypto-template.vercel.app/",
    githubUrl: "https://github.com/okeStevo/next-crypto-template",
    aiHint: "crypto dashboard interface",
  },
  {
    title: "Real-time Project Location Map",
    description:
      "A single-page application displaying project locations on a real-time map. Coordinates are loaded from the server, and clicking a point on the map reveals the projects associated with that area.",
    image: "/map.png",
    tags: ["Next.js", "React", "Leaflet.js", "nest.js", "Tailwind CSS", "Real-time Data"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: "real-time map interface",
  },
  // {
  //   title: 'Trello-Style Project Management App',
  //   description: 'A collaborative project management tool with boards, lists, and draggable cards. Implements real-time updates using WebSockets, allowing teams to seamlessly track progress and manage tasks together.',
  //   image: 'https://placehold.co/600x400.png',
  //   tags: ['React', 'Node.js', 'Express', 'WebSockets', 'MongoDB', 'Tailwind CSS'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   aiHint: 'project management board'
  // },
  {
    title: "Headless CMS-Powered Blog",
    description:
      "A dynamic blog platform built with a headless CMS (Strapi) for content management. The front-end is a fast, server-rendered Next.js application, optimized for SEO and performance.",
    image: "/aiblog.png",
    tags: ["Next.js", "Strapi", "GraphQL", "Markdown", "TypeScript", "SEO"],
    liveUrl: "https://strapi-blog-site.vercel.app/",
    githubUrl: "https://github.com/okeStevo/strapi-blog-site",
    aiHint: "blog website",
  },
   {
    title: "Comprehensive E-commerce Platform",
    description:
      "A fully-featured e-commerce platform built with Next.js and a headless CMS (Strapi) for product management. The application includes a shopping cart, user authentication, and a sleek, responsive design.",
    image: "/ecommerce.png",
    tags: ["Next.js", "Stripe", "postgresql", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ecommerce-sanity-stripe.vercel.app/",
    githubUrl: "https://github.com",
    aiHint: "e-commerce website",
  },
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            My Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            I've built a variety of full-stack applications. Here are a few
            highlights.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-2 border-primary/20 shadow-lg shadow-primary/10 flex flex-col overflow-hidden group transition-all duration-300 transform-style-3d hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <CardDescription className="flex-1 mb-4 text-foreground/80">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardFooter className="p-0 flex justify-end items-center">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-accent"
                    >
                      <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-accent"
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
