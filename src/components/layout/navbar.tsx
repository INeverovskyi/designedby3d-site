"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ShoppingCart, Search } from "lucide-react";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);

  const shopLink = NAV_LINKS.find((l) => l.label === "Shop");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl lg:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
              {SITE_NAME}
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground">
              {SITE_TAGLINE}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" style={{ fontFamily: 'var(--font-heading)' }}>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      "text-foreground/80 hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        shopOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {shopOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]">
                      <div className="rounded-xl p-4 grid grid-cols-2 gap-1" style={{ background: 'oklch(0.12 0.02 270 / 0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="group/item relative px-3 py-2 rounded-lg text-sm text-foreground/90 hover:text-foreground transition-colors overflow-hidden"
                          >
                            {child.label}
                            <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan scale-x-0 origin-left transition-transform duration-300 group-hover/item:scale-x-100" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://designedby3d.com/shop/"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <Search className="h-4 w-4" />
            </a>
            <a
              href="https://designedby3d.com/cart/"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
            </a>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-background/95 backdrop-blur-xl border-border"
              >
                <div className="flex flex-col gap-1 mt-8">
                  {NAV_LINKS.map((link) =>
                    link.children ? (
                      <div key={link.label}>
                        <p className="px-3 py-2 text-sm font-semibold text-foreground">
                          {link.label}
                        </p>
                        <div className="pl-4 flex flex-col gap-0.5">
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="px-3 py-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
