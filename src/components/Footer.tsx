import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <nav className="flex gap-8 text-sm text-warm-400">
            <Link
              href="/privacy"
              className="transition-opacity hover:opacity-70"
            >
              Privacy
            </Link>
            <Link href="/faq" className="transition-opacity hover:opacity-70">
              FAQ
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              Source
            </a>
          </nav>
          <p className="text-sm text-warm-400">
            Made by{" "}
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-500 transition-opacity hover:opacity-70 dark:text-warm-300"
            >
              {siteConfig.author}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
