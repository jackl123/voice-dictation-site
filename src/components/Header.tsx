"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/privacy", label: "Privacy" },
    { href: "/faq", label: "FAQ" },
    { href: siteConfig.github, label: "Source", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-warm-50/80 backdrop-blur-md dark:bg-warm-900/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-warm-800 dark:text-warm-100"
        >
          {siteConfig.name}
          <span className="text-accent-500">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-500 transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-warm-500 transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-warm-400 transition-opacity hover:opacity-70"
          >
            {dark ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-warm-500 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="bg-warm-50 px-6 pb-6 dark:bg-warm-900 md:hidden">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-sm text-warm-600 dark:text-warm-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm text-warm-600 dark:text-warm-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-4 pt-3">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="text-sm text-warm-400"
            >
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
