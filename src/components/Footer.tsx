import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative py-32">
      <div className="mx-auto max-w-2xl px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            className="text-palette-400 dark:text-palette-500"
          >
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

          {/* Attribution */}
          <p className="text-sm text-palette-400 dark:text-palette-500">
            Made by{" "}
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-palette-500 transition-colors hover:text-palette-600 dark:text-palette-400 dark:hover:text-palette-300"
            >
              {siteConfig.author}
            </a>
          </p>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-palette-400 dark:text-palette-500">
            <a
              href={siteConfig.download}
              className="transition-colors hover:text-palette-600 dark:hover:text-palette-300"
            >
              Download
            </a>
            <Link
              href="/how-it-works"
              className="transition-colors hover:text-palette-600 dark:hover:text-palette-300"
            >
              How It Works
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-palette-600 dark:hover:text-palette-300"
            >
              Privacy
            </Link>
            <Link
              href="/faq"
              className="transition-colors hover:text-palette-600 dark:hover:text-palette-300"
            >
              FAQ
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-palette-600 dark:hover:text-palette-300"
            >
              Source
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
