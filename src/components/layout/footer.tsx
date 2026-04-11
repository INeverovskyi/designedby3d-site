import Link from "next/link";
import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT,
  SOCIAL_LINKS,
  FOOTER_CATEGORIES,
} from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-xl font-bold gradient-text">
                {SITE_NAME}
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                {SITE_TAGLINE}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              High-quality cosplay props and costumes made of human-friendly
              materials. 6+ years of experience. Worldwide shipping.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-white/10 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-white/10 transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-white/10 transition-colors"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-white/10 transition-colors"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              {FOOTER_CATEGORIES.slice(0, 8).map((cat) => (
                <li key={cat.label}>
                  <a
                    href={cat.href}
                    className="group/link relative inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat.label}
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Commissions", href: "/commissions", internal: true },
                { label: "FAQ", href: "/faq", internal: true },
                { label: "About Us", href: "/about", internal: true },
                { label: "Contact Us", href: "/contact", internal: true },
                { label: "Blog", href: "/blog", internal: true },
                { label: "Full Shop", href: "https://designedby3d.com/shop/", internal: false },
              ].map((item) => (
                <li key={item.label}>
                  {item.internal ? (
                    <Link href={item.href} className="group/link relative inline-block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100" />
                    </Link>
                  ) : (
                    <a href={item.href} className="group/link relative inline-block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">
                  {CONTACT.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://designedby3d.com/policies/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Policies
            </a>
            <a
              href="https://designedby3d.com/tracking/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Order Tracking
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
