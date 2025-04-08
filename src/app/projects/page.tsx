"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft, Github, LinkIcon } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  {
    title: "Project 2",
    description: "A brief description of the project and its key features.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
  },
  {
    title: "Project 3",
    description: "A brief description of the project and its key features.",
    technologies: ["Angular", "Firebase", "Material UI"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
  },
];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t.projects.backToHome}
          </Button>
        </Link>
      </div>

      <h1 className="mb-12 text-4xl font-bold tracking-tight">
        {t.projects.title}
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="group overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <div className="h-full w-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    {t.projects.github}
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.demo} target="_blank">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    {t.projects.liveDemo}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
