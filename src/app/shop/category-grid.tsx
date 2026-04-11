"use client";

import { CategoryCard } from "@/components/shared/category-card";
import type { CategoryItem } from "@/lib/data";

const ALL_CATEGORIES: CategoryItem[] = [
  { name: "Helldivers 2", href: "https://designedby3d.com/product-category/helldivers-2/", image: "" },
  { name: "Valorant", href: "https://designedby3d.com/product-category/valorant/", image: "" },
  { name: "Destiny", href: "https://designedby3d.com/product-category/destiny/", image: "" },
  { name: "Star Wars", href: "https://designedby3d.com/product-category/star-wars/", image: "" },
  { name: "Genshin Impact", href: "https://designedby3d.com/product-category/genshin-impact/", image: "" },
  { name: "World of Warcraft", href: "https://designedby3d.com/product-category/world-of-warcraft/", image: "" },
  { name: "Overwatch", href: "https://designedby3d.com/product-category/overwatch/", image: "" },
  { name: "Marvel", href: "https://designedby3d.com/product-category/marvel/", image: "" },
  { name: "Apex Legends", href: "https://designedby3d.com/product-category/apex-legends/", image: "" },
  { name: "Cosplay Costumes", href: "https://designedby3d.com/product-category/full-costumes/", image: "" },
  { name: "3D Models", href: "https://designedby3d.com/product-category/3d-models-for-3d-printing/", image: "" },
  { name: "KIT DIY", href: "https://designedby3d.com/product-category/other/diy-kit/", image: "" },
  { name: "Titanfall", href: "https://designedby3d.com/product-category/titanfall-2/", image: "" },
  { name: "Borderlands", href: "https://designedby3d.com/product-category/borderlands/", image: "" },
  { name: "SALE!", href: "https://designedby3d.com/product-category/sale/", image: "" },
  { name: "Other", href: "https://designedby3d.com/product-category/other/", image: "" },
];

export function CategoryShowcaseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {ALL_CATEGORIES.map((cat, i) => (
        <CategoryCard key={cat.name} category={cat} index={i} />
      ))}
    </div>
  );
}
