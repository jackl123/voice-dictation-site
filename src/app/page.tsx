import Link from "next/link";
import { siteConfig } from "@/lib/config";

/* ─── Hero ──────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="px-6 pb-24 pt-28 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="animate-fade-in font-serif text-4xl leading-snug tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.15]">
          Speak naturally.
          <br />
          <span className="text-warm-400 dark:text-warm-500">
            Write beautifully.
          </span>
        </h1>
        <p className="animate-fade-in delay-150 mt-8 max-w-lg text-lg leading-relaxed text-warm-500 dark:text-warm-400">
          A quiet macOS app that turns your voice into clean, formatted text.
          Powered by your own OpenAI key.
        </p>
        <div className="animate-fade-in delay-300 mt-10">
          <a
            href={siteConfig.download}
            className="inline-block rounded-full border border-warm-800 px-7 py-3 text-sm font-medium text-warm-800 transition-opacity hover:opacity-60 dark:border-warm-300 dark:text-warm-300"
          >
            Download for macOS
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ────────────────────────────────────────────── */

function Experience() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-lg leading-loose text-warm-600 dark:text-warm-400">
          Hold a key, say what you{"\u2019"}re thinking, let go. Your words
          appear wherever your cursor is{" \u2014 "}any app, any text field.
          Punctuation, capitalisation, and structure are handled for you. It
          feels like thinking out loud.
        </p>
      </div>
    </section>
  );
}

/* ─── How It Works ──────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    {
      label: "Paste your OpenAI key",
      detail:
        "Stored locally on your Mac. Never sent anywhere except directly to OpenAI when you dictate.",
    },
    {
      label: "Hold your hotkey and speak",
      detail:
        "Right Command by default, but you can change it. Speak naturally \u2014 the way you\u2019d talk to a friend.",
    },
    {
      label: "Release \u2014 your words appear",
      detail:
        "Transcribed, formatted, and typed into whatever app you\u2019re using. The whole thing takes about a second.",
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
          How it works
        </h2>
        <div className="mt-14 space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <span className="mt-1 shrink-0 text-sm text-warm-300 dark:text-warm-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium text-warm-700 dark:text-warm-200">
                  {step.label}
                </p>
                <p className="mt-2 leading-relaxed text-warm-500 dark:text-warm-400">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Your Key ──────────────────────────────────────────────── */

function YourKey() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
          Your key, your data
        </h2>
        <div className="mt-8 space-y-5 leading-relaxed text-warm-500 dark:text-warm-400">
          <p>
            Already have an OpenAI key? Paste it in and you{"\u2019"}re ready.
            Don{"\u2019"}t have one? It takes two minutes at{" "}
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 underline decoration-warm-300 underline-offset-4 transition-opacity hover:opacity-70 dark:text-warm-300 dark:decoration-warm-600"
            >
              platform.openai.com
            </a>
            .
          </p>
          <p>
            Your voice goes straight from your Mac to OpenAI. Nothing passes
            through us. There are no accounts, no servers in between, no data we
            could collect even if we wanted to.
          </p>
          <p>
            {siteConfig.name} is open source. Every claim on this page can be
            verified by reading{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 underline decoration-warm-300 underline-offset-4 transition-opacity hover:opacity-70 dark:text-warm-300 dark:decoration-warm-600"
            >
              the code
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Cost ──────────────────────────────────────────────────── */

function Cost() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
          What it costs
        </h2>
        <div className="mt-8 space-y-5 leading-relaxed text-warm-500 dark:text-warm-400">
          <p>
            You pay OpenAI directly{" \u2014 "}about a penny for every few
            minutes of dictation. Most people spend less than 50p a month. The
            app itself is free.
          </p>
          <p>
            No subscription. No trial. No credit card required. Just a few
            pounds of API credit that lasts months.
          </p>
          <p className="text-sm text-warm-400 dark:text-warm-500">
            Based on OpenAI Whisper API pricing of $0.006 per minute. The app
            tracks the cost of each dictation so there are no surprises.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Download ──────────────────────────────────────────────── */

function Download() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Try {siteConfig.name}.
        </h2>
        <p className="mt-5 text-warm-500 dark:text-warm-400">
          Free, open source, and built by one person.
          <br className="hidden sm:block" />
          If you find it useful, donations are welcome but never expected.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={siteConfig.download}
            className="inline-block rounded-full border border-warm-800 px-8 py-3.5 text-sm font-medium text-warm-800 transition-opacity hover:opacity-60 dark:border-warm-300 dark:text-warm-300"
          >
            Download for macOS
          </a>
          <span className="text-sm text-warm-400 dark:text-warm-500">
            v{siteConfig.version} &middot; {siteConfig.minOS}
          </span>
        </div>

        <p className="mt-16 text-sm text-warm-400 dark:text-warm-500">
          <a
            href={siteConfig.donate}
            className="underline decoration-warm-300 underline-offset-4 transition-opacity hover:opacity-70 dark:decoration-warm-600"
          >
            Support development
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <HowItWorks />
      <YourKey />
      <Cost />
      <Download />
    </>
  );
}
