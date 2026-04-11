"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

interface GlowButtonProps extends ComponentProps<typeof Button> {
  glowColor?: "pink" | "purple" | "cyan";
}

export function GlowButton({
  children,
  className,
  glowColor = "pink",
  ...props
}: GlowButtonProps) {
  const glowClasses = {
    pink: "hover:shadow-[0_0_25px_rgba(230,0,230,0.4)] bg-gradient-to-r from-[oklch(0.65_0.3_330)] to-[oklch(0.55_0.25_290)]",
    purple: "hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] bg-gradient-to-r from-[oklch(0.55_0.25_290)] to-[oklch(0.65_0.3_330)]",
    cyan: "hover:shadow-[0_0_25px_rgba(0,230,230,0.4)] bg-gradient-to-r from-[oklch(0.75_0.15_190)] to-[oklch(0.55_0.25_290)]",
  };

  return (
    <Button
      className={cn(
        "relative text-white font-semibold px-6 py-3 rounded-xl border-0 transition-all duration-300",
        glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
