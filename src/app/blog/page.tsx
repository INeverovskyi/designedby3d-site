import type { Metadata } from "next";
import Link from "next/link";
import { GlowButton } from "@/components/shared/glow-button";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, tips, and behind-the-scenes content from DesignedBy Props & Cosplay Studio.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          We&apos;re working on exciting new content for you!
        </p>
        <p className="text-muted-foreground mb-8">
          Stay tuned for behind-the-scenes looks at our crafting process,
          cosplay tips, convention guides, and more.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <GlowButton glowColor="pink">Back to Home</GlowButton>
          </Link>
          <a href={`https://www.instagram.com/designedby_cosplay_studio/`} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="outline" glowColor="purple" className="bg-transparent border border-border text-foreground hover:text-white">
              Follow on Instagram
            </GlowButton>
          </a>
        </div>
      </div>
    </div>
  );
}
