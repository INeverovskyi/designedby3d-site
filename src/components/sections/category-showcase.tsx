"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { CategoryCard } from "@/components/shared/category-card";
import { FEATURED_CATEGORIES } from "@/lib/data";

export function CategoryShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Looking for Trendy Stuff?"
          subtitle="Be outstanding at your convention! We do popular cosplay items from everywhere. Haven't found what you need? Message us!"
          gradient
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {FEATURED_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
