import Link from "next/link";
import { siteConfig } from "@/lib/config";

/* ─── Hero ──────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="px-6 pb-20 pt-24 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Voice Dictation.{" "}
          <span className="text-neutral-400 dark:text-neutral-500">
            Powered by Your Own AI&nbsp;Key.
          </span>
        </h1>
        <p className="animate-fade-up delay-100 mx-auto mt-6 max-w-xl text-lg text-neutral-500 dark:text-neutral-400">
          A fast, private macOS dictation app that uses your OpenAI API key
          &mdash; so you only pay for what you use. No subscriptions. No
          tracking. No lock&#8209;in.
        </p>
        <div className="animate-fade-up delay-200 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.download}
            className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Download for macOS
          </a>
          <Link
            href="/how-it-works"
            className="rounded-xl border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-600 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── The Problem ───────────────────────────────────────────── */

function Problem() {
  return (
    <section className="border-t border-neutral-100 bg-neutral-50 px-6 py-20 dark:border-neutral-900 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          The problem with dictation apps
        </h2>
        <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400">
          <p>
            Most AI dictation tools charge between &pound;10 and &pound;20 per
            month. Under the hood, many of them are calling the same OpenAI
            Whisper API that anyone can access directly.
          </p>
          <p>
            You&rsquo;re paying a subscription for a wrapper. Your audio is
            routed through their servers. Your data lives on infrastructure you
            don&rsquo;t control.
          </p>
          <p>
            There&rsquo;s a simpler way.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── The Solution ──────────────────────────────────────────── */

function Solution() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Bring your own key
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          {siteConfig.name} connects directly to OpenAI using your own API key.
          No middleman. No markup. No backend.
        </p>

        {/* Diagram */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Typical app */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Typical dictation app
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="rounded-md bg-neutral-200 px-3 py-1.5 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                You
              </span>
              <span>&rarr;</span>
              <span className="rounded-md bg-red-100 px-3 py-1.5 font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                Their server
              </span>
              <span>&rarr;</span>
              <span className="rounded-md bg-neutral-200 px-3 py-1.5 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                OpenAI
              </span>
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              Your audio passes through a third party.
            </p>
          </div>

          {/* This app */}
          <div className="rounded-xl border border-accent-200 bg-accent-50 p-6 dark:border-accent-900 dark:bg-accent-950/30">
            <p className="text-xs font-medium uppercase tracking-wider text-accent-500">
              {siteConfig.name}
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="rounded-md bg-accent-100 px-3 py-1.5 font-medium text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                You
              </span>
              <span>&rarr;</span>
              <span className="rounded-md bg-accent-100 px-3 py-1.5 font-medium text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                OpenAI
              </span>
            </div>
            <p className="mt-3 text-xs text-accent-500 dark:text-accent-400">
              Direct connection. No intermediary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Privacy & Architecture ────────────────────────────────── */

function PrivacySection() {
  const facts = [
    "No backend servers. Requests go from your Mac directly to OpenAI.",
    "No accounts. You never sign up or log in.",
    "No analytics. No tracking pixels, no telemetry, no usage data.",
    "No data collection. We never see your audio or transcriptions.",
    "Your API key is stored locally on your machine in app preferences.",
    "Audio is sent to OpenAI\u2019s API for transcription, then discarded.",
    "OpenAI\u2019s API data is not used for model training by default.",
    "The app is open source. You can verify every claim yourself.",
  ];

  return (
    <section className="border-t border-neutral-100 bg-neutral-50 px-6 py-20 dark:border-neutral-900 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Privacy &amp; architecture
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          {siteConfig.name} has no backend. There is no server between you and
          OpenAI. Here is exactly what happens with your data:
        </p>
        <ul className="mt-8 space-y-3">
          {facts.map((fact, i) => (
            <li key={i} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="mt-0.5 shrink-0 text-accent-500">&bull;</span>
              {fact}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
          Read the full{" "}
          <Link href="/privacy" className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:decoration-neutral-600">
            privacy page
          </Link>{" "}
          for more detail.
        </p>
      </div>
    </section>
  );
}

/* ─── Cost Transparency ─────────────────────────────────────── */

function CostSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Cost transparency
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          You pay OpenAI directly for what you use. No markup, no minimum, no
          commitment.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { amount: "~2p", label: "per 10 minutes of dictation" },
            { amount: "~50p", label: "per month, typical daily use" },
            { amount: "~\u00A36", label: "per year, heavy use" },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-neutral-200 p-6 text-center dark:border-neutral-800"
            >
              <p className="text-3xl font-bold tracking-tight text-accent-600 dark:text-accent-400">
                {card.amount}
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
          Based on OpenAI Whisper API pricing of $0.006&nbsp;/&nbsp;minute.
          Actual cost depends on your usage and any future pricing changes by
          OpenAI. The app tracks costs per dictation so you always know what
          you&rsquo;re spending.
        </p>
      </div>
    </section>
  );
}

/* ─── Who It's For ──────────────────────────────────────────── */

function AudienceSection() {
  return (
    <section className="border-t border-neutral-100 bg-neutral-50 px-6 py-20 dark:border-neutral-900 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Who it&rsquo;s for
        </h2>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
              Great fit
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {[
                "Developers who prefer transparent tools",
                "Writers who dictate drafts and notes",
                "AI power users who already have an OpenAI key",
                "Privacy-conscious users who want to know where data goes",
                "Indie hackers who appreciate open source",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-500">{"\u2713"}</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
              Probably not for you if
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {[
                "You don\u2019t want to manage an API key",
                "You prefer an all-in-one subscription service",
                "You need Windows or Linux support",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-neutral-300 dark:text-neutral-600">&mdash;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Download & Donate ─────────────────────────────────────── */

function DownloadSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Download {siteConfig.name}
        </h2>
        <p className="mt-3 text-neutral-500 dark:text-neutral-400">
          Free, open source, and always will be.
        </p>

        <div className="mt-8 inline-flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-8 py-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-medium text-neutral-900 dark:text-white">
              v{siteConfig.version}
            </span>{" "}
            &middot; {siteConfig.minOS}
          </div>
          <a
            href={siteConfig.download}
            className="rounded-xl bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Download .dmg
          </a>
        </div>

        <p className="mt-10 text-sm text-neutral-400 dark:text-neutral-500">
          This app is free. If it saves you money or you find it useful, you can{" "}
          <a
            href={siteConfig.donate}
            className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:decoration-neutral-600"
          >
            support development
          </a>
          . Donations are appreciated but never required.
        </p>
      </div>
    </section>
  );
}

/* ─── Home Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <PrivacySection />
      <CostSection />
      <AudienceSection />
      <DownloadSection />
    </>
  );
}
