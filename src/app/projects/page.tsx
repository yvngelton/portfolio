"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft, Github, LinkIcon, Construction } from "lucide-react";
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t.projects.backToHome}
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Construction className="h-6 w-6" />
              {t.projects.workInProgress}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              {t.projects.workInProgressDescription}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
