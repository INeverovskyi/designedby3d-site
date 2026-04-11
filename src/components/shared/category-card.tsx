"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { CategoryItem } from "@/lib/data";

interface CategoryCardProps {
  category: CategoryItem;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.a
      href={category.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative block overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-card to-muted border border-border hover:border-primary/30 transition-all duration-500"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Browse collection
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <ArrowRight className="h-4 w-4 text-foreground/60 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </motion.a>
  );
}
