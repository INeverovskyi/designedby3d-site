"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { ABOUT_POINTS } from "@/lib/data";
import { Shield, Palette, Wrench, Award } from "lucide-react";

const icons = [Shield, Palette, Wrench, Award];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Us"
          subtitle="DesignedBy Cosplay Prop Store. High-quality cosplay props made of human-friendly materials specially for you."
          gradient
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ABOUT_POINTS.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground/80 leading-relaxed">{point}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our main specialization is making Star Wars Props, Destiny Props, and
            Overwatch props, but we can create any kind of custom order from your
            favorite game or movies. We combine traditional crafting with 3D
            printing technology for precise, authentic results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
