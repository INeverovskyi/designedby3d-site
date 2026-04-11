"use client";

import { Suspense, lazy, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-secondary/20 border-b-secondary animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
      </div>
    </div>
  );
}

interface SpliteSceneProps {
  sceneUrl: string;
  className?: string;
}

export function SpliteScene({ sceneUrl, className }: SpliteSceneProps) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <Suspense fallback={<SplineFallback />}>
        <Spline
          scene={sceneUrl}
          onLoad={onLoad}
          className={cn(
            "w-full h-full transition-opacity duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      </Suspense>
      {!loaded && <SplineFallback />}
    </div>
  );
}
