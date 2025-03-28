import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-16 sm:pt-24 pb-16 sm:pb-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hi, I'm Your Name
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm a passionate full-stack developer with a keen eye for
                  design and a love for creating seamless user experiences. With
                  expertise in modern web technologies, I build scalable and
                  maintainable applications that solve real-world problems.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Frontend</h3>
                      <ul className="text-sm text-gray-500 dark:text-gray-400">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Backend</h3>
                      <ul className="text-sm text-gray-500 dark:text-gray-400">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Check out some of my recent work
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A brief description of the project and its key features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A brief description of the project and its key features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A brief description of the project and its key features.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Let's work together on your next project
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/yourusername" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
