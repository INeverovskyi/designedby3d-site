"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowButton } from "@/components/shared/glow-button";
import {
  Clock,
  Globe,
  Heart,
  Layers,
  Palette,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Clock,
    title: "6+ Years Experience",
    description: "Professional cosplay crafting since 2015.",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "We deliver to any country with tracking.",
  },
  {
    icon: Layers,
    title: "3D Printing Technology",
    description: "Precise shapes and details with modern tech.",
  },
  {
    icon: Palette,
    title: "Hand Painting",
    description: "Every piece is finished by skilled artists.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    description: "Human-friendly plastic, EVA, leather, and cloth.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "We craft items as if we were making them for ourselves.",
  },
];

export function AboutContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            About DesignedBy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team is a team of experienced people who really love their work.
            That is why we do our items with imagination, as we would do it for
            ourselves. We are professionals in our field with 6+ years of
            experience.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <SectionHeading title="Our Story" gradient />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DesignedBy Cosplay Prop Store is where you can find high-quality
              cosplay props made of human-friendly materials specially for you.
            </p>
            <p>
              Our main specialization is making Star Wars Props, Destiny Props,
              and Overwatch props, but we can create any kind of custom order
              from your favorite game or movies.
            </p>
            <p>
              We use high quality materials: human-friendly plastic, cloth, EVA
              foam, leather, paint, and 3D printing technology. We can produce
              for you a product of almost any complexity.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to bring your cosplay vision to life?
          </p>
          <Link href="/commissions">
            <GlowButton size="lg" glowColor="pink">
              Start a Commission
            </GlowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
