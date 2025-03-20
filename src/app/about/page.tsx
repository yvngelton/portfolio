import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-lg text-muted-foreground">
            I'm a passionate full-stack developer with a keen eye for design and
            a love for creating seamless user experiences. With expertise in
            modern web technologies, I build scalable and maintainable
            applications that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground">
            My journey in software development began with a curiosity about how
            things work on the internet. This curiosity led me to explore
            various programming languages and frameworks, ultimately
            specializing in web development.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Senior Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">
                Company Name • 2020 - Present
              </p>
              <p className="mt-2 text-sm">
                Led development of multiple web applications using React,
                Node.js, and cloud technologies. Implemented best practices and
                mentored junior developers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">
                Company Name • 2018 - 2020
              </p>
              <p className="mt-2 text-sm">
                Developed and maintained web applications using modern
                JavaScript frameworks and RESTful APIs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Science in Computer Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                University Name • 2014 - 2018
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
