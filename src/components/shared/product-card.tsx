"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { ProductItem } from "@/lib/data";

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.a
      href={product.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
        {/* Image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-card to-muted relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {product.salePrice && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold">
              SALE
            </Badge>
          )}
        </div>
        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="text-sm font-bold text-primary">
                  {product.salePrice}
                </span>
                <span className="text-xs text-muted-foreground line-through">
                  {product.price}
                </span>
              </>
            ) : (
              <span className="text-sm font-bold text-foreground">
                {product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
