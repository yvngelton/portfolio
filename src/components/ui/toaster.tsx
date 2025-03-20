"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="bg-background/100 border-border shadow-md backdrop-blur-sm"
          >
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="text-foreground font-medium">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-foreground">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport className="gap-2" />
    </ToastProvider>
  );
}
