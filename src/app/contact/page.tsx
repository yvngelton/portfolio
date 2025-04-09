"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: t.contact.form.success,
      });
    } catch (error) {
      toast({
        title: t.contact.form.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t.contact.backToHome}
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.contact.description}
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/yvngelton" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/eltonbakia/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:eltonbakia@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t.contact.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t.contact.form.name}
                </label>
                <Input id="name" placeholder={t.contact.form.name} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.contact.form.email}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.form.message}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="outline"
                className="w-full"
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.send}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
