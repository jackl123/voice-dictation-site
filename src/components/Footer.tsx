import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            Built by{" "}
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:text-neutral-300 dark:decoration-neutral-600"
            >
              {siteConfig.author}
            </a>
          </div>

          <nav className="flex gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <Link href="/privacy" className="transition-colors hover:text-neutral-900 dark:hover:text-white">
              Privacy
            </Link>
            <Link href="/faq" className="transition-colors hover:text-neutral-900 dark:hover:text-white">
              FAQ
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Source
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
