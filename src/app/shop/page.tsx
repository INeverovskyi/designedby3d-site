import type { Metadata } from "next";
import { CategoryShowcaseGrid } from "./category-grid";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse our collection of cosplay props, costumes, helmets, and more from your favorite games and movies.",
};

export default function ShopPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Shop by Category
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of high-quality cosplay props and costumes.
            Click any category to explore our full catalog.
          </p>
        </div>
        <CategoryShowcaseGrid />
      </div>
    </div>
  );
}
