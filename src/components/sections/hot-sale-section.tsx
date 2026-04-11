"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/shared/glow-button";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";

export function HotSaleSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Image placeholder */}
            <div className="w-full lg:w-1/2 aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <Flame className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Featured Product</p>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                <Flame className="h-3 w-3 mr-1" />
                HOT ON SALE!
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Best Discount Offers
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wanna be cool, but have a small budget? These offers are just
                for you! Pay less — get awesome items.
              </p>
              <a href="https://designedby3d.com/product-category/sale/">
                <GlowButton size="lg" glowColor="pink">
                  View Sale Items
                </GlowButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
