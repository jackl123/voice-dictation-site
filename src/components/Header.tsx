"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <>
      {/* Gradient fade overlay */}
      <div className="pointer-events-none fixed top-0 z-40 h-[90px] w-full bg-gradient-to-b from-palette-50 to-transparent dark:from-palette-950" />

      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-palette-950 dark:text-palette-100"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <path
                d="M16 8a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0-4-4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 15v1a6 6 0 0 0 12 0v-1M16 22v2M13 24h6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Single CTA */}
          <a
            href={siteConfig.download}
            className="rounded-full bg-palette-800 px-4 py-2 text-sm font-medium text-palette-50 shadow-sm transition-colors hover:bg-palette-700 dark:bg-palette-200 dark:text-palette-900 dark:hover:bg-palette-300"
          >
            Get started
          </a>
        </div>
      </header>
    </>
  );
}
