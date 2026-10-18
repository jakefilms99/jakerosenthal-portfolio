"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset } from "@/lib/assets";
import { socialLinks } from "@/lib/site";

const sections = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const onHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header" data-home={onHome || undefined}>
      <div className="container site-header__bar">
        <Link
          href="/"
          className="brand"
          aria-label="Jake Rosenthal — home"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={close}
        >
          <img src={asset.logo} width={36} height={40} alt="" />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {sections.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
              <span className="arrow" aria-hidden>
                ↗︎
              </span>
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav id="mobile-menu" className="mobile-menu" data-open={open} aria-label="Mobile">
        <ul>
          {sections.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={close}>
                {item.label}
              </Link>
            </li>
          ))}
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer" onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
