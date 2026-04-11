"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/shared/glow-button";
import Link from "next/link";

export function SeoContent() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-text">
            Your Trusted Cosplay Store for Props & Costumes
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              If you&apos;re looking for a place where you can get high-quality
              cosplay props and costumes from your favorite games, movies, and
              anime — you&apos;re in the right spot. At DesignedBy, we create and
              sell everything from Marvel costumes, Destiny guns to Star Wars
              blasters, Overwatch props, anime outfits, and much more.
            </p>

            <p>
              Whether you need a full armored costume, a single prop, or a
              detailed piece of armor, our team can bring your idea to life. We
              combine traditional tailoring and crafting with 3D printing, hand
              painting, and custom finishing to make sure every piece looks
              authentic and feels great to use.
            </p>

            <h3 className="text-xl font-semibold text-foreground pt-4">
              What Makes Our Cosplay Store Stand Out
            </h3>
            <p>
              We don&apos;t just resell cheap low-quality products — we design
              and craft custom props, armor, and costumes from scratch. This
              means you get something unique, built to your measurements, and
              styled exactly like the original character design.
            </p>

            <p>
              We work with a wide range of genres: anime, video games like
              Destiny, Overwatch, Diablo, Genshin Impact and Final Fantasy,
              movies and series including Marvel, DC Universe, Star Wars, and
              more. We do both male and female cosplay costumes.
            </p>

            <h3 className="text-xl font-semibold text-foreground pt-4">
              Built for Cosplayers, by Cosplayers
            </h3>
            <p>
              We understand cosplay because we&apos;ve been in the community for
              years. We know the importance of comfort, accuracy, and durability.
              That&apos;s why we choose the best materials for each project,
              whether it&apos;s EVA foam for flexible armor, plastic for rigid
              weapons, or fabric for costumes.
            </p>

            <p>
              Every prop and costume is tested before shipping, so you can be
              sure it will survive a full day at a con, stage performance, or
              photoshoot.
            </p>
          </div>

          <div className="text-center pt-4">
            <a href="https://designedby3d.com/shop/">
              <GlowButton size="lg" glowColor="pink">
                Browse Our Shop
              </GlowButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
