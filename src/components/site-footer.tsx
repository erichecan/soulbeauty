import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.7C3.44 9.06 3.43 9.4 3.43 12s0 2.94.07 4.18c.04.9.19 1.38.31 1.7.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.7.31 1.24.06 1.6.07 4.75.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.7.06-1.24.07-1.6.07-4.18s0-2.94-.07-4.18c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.14 4 12 4Zm0 3.16a4.84 4.84 0 1 1 0 9.68 4.84 4.84 0 0 1 0-9.68Zm0 1.8a3.04 3.04 0 1 0 0 6.08 3.04 3.04 0 0 0 0-6.08Zm5.05-3.07a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-lavender-line bg-surface">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 py-2.5 lg:px-8 lg:flex-row lg:justify-between">
        <BrandLogo />

        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] text-ink-soft">
          {footerLinks.map((item, index) => (
            <span key={item.href} className="flex items-center gap-3">
              {index > 0 && <span className="text-lavender-line">|</span>}
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <p className="text-[13px] text-ink-soft">
            © 2024 Soul Beauty Healing Center. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5 text-brand">
            <InstagramIcon className="h-5 w-5" />
            <FacebookIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
