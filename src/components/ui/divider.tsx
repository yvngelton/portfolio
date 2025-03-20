"use client";

import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("relative py-16", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-muted-foreground/20" />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background px-4">
          <div className="h-1 w-20 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" />
        </div>
      </div>
    </div>
  );
}
