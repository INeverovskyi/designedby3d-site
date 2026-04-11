"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/shared/glow-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WORK_STEPS } from "@/lib/data";
import {
  Sword,
  Shield,
  Sparkles,
  Lightbulb,
  Volume2,
  HelpCircle,
} from "lucide-react";

const capabilities = [
  { icon: Sword, label: "High-tech style cosplay weapons" },
  { icon: Shield, label: "Fantasy-style costumes & armor" },
  { icon: Sparkles, label: "Helmets, masks, capes & accessories" },
  { icon: Lightbulb, label: "Full-face & silicone masks" },
  { icon: Volume2, label: "Moving parts, sounds & lights" },
  { icon: HelpCircle, label: "Any custom request" },
];

export function CommissionsContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Stand Out with Custom
            <br />
            Cosplay Commissions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Get your real-life costume or prop from any movie, game, book, etc!
            We do props and cosplay costumes according to your wishes,
            measurements, and demands.
          </p>
          <p className="text-sm text-primary font-medium">
            High quality, worth every penny you spend!
          </p>
        </div>

        {/* 5 Steps */}
        <div className="mb-20">
          <SectionHeading
            title="5 Easy Steps to Your Commission"
            subtitle="There is nothing easier than placing an order with us!"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold gradient-text">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-6 rounded-2xl bg-card border border-primary/20"
        >
          <h3 className="text-lg font-semibold text-primary mb-3">
            PLEASE READ CAREFULLY
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We are a professional cosplay studio creating unique, high-quality
            custom costumes and props with great attention to detail. Our prices
            are fair and reasonable for the craftsmanship and materials we use.
            Each project is made to order, and production with shipping takes at
            least 4-5 weeks for the smallest piece.
          </p>
        </motion.div>

        {/* What we can do */}
        <div className="mb-20">
          <SectionHeading
            title="What Our Studio Can Do"
            gradient
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">{cap.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Commission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <SectionHeading
            title="Start Your Commission"
            subtitle="Fill out the form and we'll get back to you as soon as possible."
          />
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:designedby3d@gmail.com";
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  placeholder="Your name"
                  className="bg-card border-border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-card border-border"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tell us about your project *
              </label>
              <Textarea
                placeholder="Describe the costume or prop you'd like us to create. Include references, character details, and any specific requirements."
                rows={6}
                className="bg-card border-border"
                required
              />
            </div>
            <div className="text-center">
              <GlowButton type="submit" size="lg" glowColor="pink">
                Send Request
              </GlowButton>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
