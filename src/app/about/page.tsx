"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t.about.backToHome}
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">{t.about.title}</h1>
          <p className="text-lg text-muted-foreground">{t.about.description}</p>
          <p className="text-lg text-muted-foreground">{t.about.journey}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t.about.experience.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">
                {t.about.experience.internship.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.about.experience.internship.company} •{" "}
                {t.about.experience.internship.duration}
              </p>
              <p className="mt-2 text-sm">
                {t.about.experience.internship.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">{t.about.education.title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t.about.education.degree.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t.about.education.degree.school} •{" "}
                {t.about.education.degree.duration}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
