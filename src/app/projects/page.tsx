import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
    ],
    image: "/projects/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/projects/task-manager.png",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and shadcn/ui components.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <h1 className="mb-12 text-4xl font-bold tracking-tight">My Projects</h1>

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
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.demo} target="_blank">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
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
