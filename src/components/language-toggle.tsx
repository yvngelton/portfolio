"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "it" : "en")}
      className="text-xl"
    >
      {language === "en" ? "🇬🇧" : "🇮🇹"}
    </Button>
  );
}
