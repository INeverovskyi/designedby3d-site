"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpliteScene } from "@/components/spline/splite-scene";
import { GlowButton } from "@/components/shared/glow-button";
import { SPLINE_SCENE_URL } from "@/lib/constants";
import { HERO_SLIDES } from "@/lib/data";
import Link from "next/link";

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    },
    []
  );

  const slide = HERO_SLIDES[current];
  const isInternal = slide.ctaLink.startsWith("/");

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <SpliteScene sceneUrl={SPLINE_SCENE_URL} />
      </div>

      {/* Spotlight effect */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(230,0,230,0.04), transparent 40%)`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-background via-transparent to-background/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                DesignedBy Studio
              </motion.p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="gradient-text">{slide.heading}</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-lg leading-relaxed">
                {slide.subheading}
              </p>
              <div className="mt-8 flex items-center gap-4">
                {isInternal ? (
                  <Link href={slide.ctaLink}>
                    <GlowButton size="lg" glowColor="pink">
                      {slide.cta}
                    </GlowButton>
                  </Link>
                ) : (
                  <a href={slide.ctaLink}>
                    <GlowButton size="lg" glowColor="pink">
                      {slide.cta}
                    </GlowButton>
                  </a>
                )}
                <a href="https://designedby3d.com/shop/">
                  <GlowButton variant="outline" size="lg" glowColor="purple" className="bg-transparent border border-border text-foreground hover:text-white">
                    Browse Shop
                  </GlowButton>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-3 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </section>
  );
}
