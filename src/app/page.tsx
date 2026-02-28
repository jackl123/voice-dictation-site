import { siteConfig } from "@/lib/config";

/* ─── Hero ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="px-4 pb-8 pt-24 sm:pb-12 sm:pt-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Logo */}
        <div className="animate-fade-in">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            className="text-palette-950 dark:text-palette-100"
          >
            <rect
              width="44"
              height="44"
              rx="11"
              fill="currentColor"
              fillOpacity="0.06"
            />
            <path
              d="M22 11a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0v-5a5 5 0 0 0-5-5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 20v1a8 8 0 0 0 16 0v-1M22 29v2M19 31h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Dual-color heading */}
        <h1 className="animate-fade-in delay-150 mt-6 max-w-xl text-3xl font-medium tracking-[-0.2px]">
          <span className="text-palette-950 dark:text-palette-100">
            {siteConfig.name}.
          </span>{" "}
          <span className="text-palette-500 dark:text-palette-400">
            A beautifully simple dictation app for macOS.
          </span>
        </h1>

        {/* CTA */}
        <div className="animate-fade-in delay-300 mt-8">
          <a
            href={siteConfig.download}
            className="inline-flex items-center gap-2 rounded-full bg-palette-800 px-5 py-2.5 text-[15px] font-medium text-palette-50 shadow-lg transition-colors hover:bg-palette-700 dark:bg-palette-200 dark:text-palette-900 dark:hover:bg-palette-300"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── App Preview ────────────────────────────────────────────── */

function AppPreview() {
  return (
    <section className="animate-fade-in delay-450 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        {/* macOS window chrome */}
        <div className="overflow-hidden rounded-t-xl bg-palette-50 shadow-[0_4px_24px_rgba(212,201,184,0.4)] ring-[0.5px] ring-palette-200 dark:bg-palette-900 dark:shadow-[0_4px_24px_rgba(31,27,22,0.6)] dark:ring-palette-800">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-palette-200 px-4 py-3 dark:border-palette-800">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-palette-200 dark:bg-palette-700" />
              <div className="h-3 w-3 rounded-full bg-palette-200 dark:bg-palette-700" />
              <div className="h-3 w-3 rounded-full bg-palette-200 dark:bg-palette-700" />
            </div>
            <span className="ml-2 text-xs font-medium text-palette-400 dark:text-palette-500">
              SpeakEasy
            </span>
          </div>

          {/* Content area */}
          <div className="h-[320px] p-6">
            {/* Status indicator */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full bg-palette-100 px-3 py-1 dark:bg-palette-800">
                <div className="h-2 w-2 rounded-full bg-tint" />
                <span className="text-[13px] font-medium text-palette-500 dark:text-palette-400">
                  Listening...
                </span>
              </div>
              <span className="text-xs text-palette-400 dark:text-palette-500">
                0:03
              </span>
            </div>

            {/* Transcribed text */}
            <div className="space-y-4 text-[15px] leading-relaxed text-palette-600 dark:text-palette-300">
              <p>
                The quarterly results exceeded expectations across all regions.
                Revenue grew 12% year over year, driven primarily by expansion
                in the enterprise segment.
              </p>
              <p className="text-palette-400 dark:text-palette-500">
                We should highlight the customer retention improvements in the
                next board presentation...
              </p>
            </div>

            {/* Waveform visualization */}
            <div className="mt-8 flex items-end justify-center gap-[3px]">
              {[3, 8, 14, 20, 16, 24, 18, 12, 22, 14, 8, 18, 26, 20, 10, 6, 14, 22, 16, 8, 12, 18, 10, 6, 4].map(
                (h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-full bg-tint/40"
                    style={{ height: `${h}px` }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Gradient divider below preview */}
        <div className="divider-gradient" />
      </div>
    </section>
  );
}

/* ─── Features ───────────────────────────────────────────────── */

const features = [
  {
    title: "Global hotkey",
    description:
      "Hold Right Command and speak. Release to transcribe. Works in any app, any text field.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h8M6 16h.01M18 16h.01" />
      </svg>
    ),
  },
  {
    title: "OpenAI Whisper",
    description:
      "Powered by the best speech-to-text model available. Accurate, fast, and multilingual.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
      </svg>
    ),
  },
  {
    title: "Your key, your data",
    description:
      "Bring your own OpenAI API key. Audio goes directly from your Mac to OpenAI. Nothing passes through us.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    title: "Works everywhere",
    description:
      "Type into any app — emails, documents, Slack, your IDE. Wherever your cursor is, your words appear.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Pennies per use",
    description:
      "About $0.006 per minute of dictation. Most people spend less than $1 a month. The app itself is free.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
      </svg>
    ),
  },
  {
    title: "Smart formatting",
    description:
      "Punctuation, capitalisation, and structure handled automatically. Your speech becomes clean, polished text.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Lives in your menu bar",
    description:
      "A tiny icon in your menu bar. Configure settings, check usage, or quit. Stays out of your way.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Open source",
    description:
      "Every claim on this page can be verified. Read the code, build it yourself, or contribute.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    tinted: true,
  },
];

function Features() {
  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        {/* Section header — dual color */}
        <h2 className="text-3xl font-medium tracking-[-0.2px]">
          <span className="text-palette-950 dark:text-palette-100">
            Supercharged dictation.
          </span>{" "}
          <span className="text-palette-400 dark:text-palette-500">
            Everything you need to speak and write effortlessly.
          </span>
        </h2>

        {/* Feature grid */}
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-16">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-4">
              <div className={`${feature.tinted ? "text-tint" : "text-palette-600 dark:text-palette-400"}`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-palette-950 dark:text-palette-100">
                  {feature.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-palette-500 dark:text-palette-400" style={{ textWrap: "pretty" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────── */

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
        "Right Command by default. Speak naturally \u2014 the way you\u2019d talk to a friend.",
    },
    {
      label: "Release \u2014 words appear",
      detail:
        "Transcribed, formatted, and typed into whatever app you\u2019re using. Takes about a second.",
    },
  ];

  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.2px]">
          <span className="text-palette-950 dark:text-palette-100">
            Three steps.
          </span>{" "}
          <span className="text-palette-400 dark:text-palette-500">
            That{"\u2019"}s it.
          </span>
        </h2>
        <div className="mt-10 space-y-8 sm:mt-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <span className="mt-0.5 shrink-0 text-sm font-medium text-palette-300 dark:text-palette-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium text-palette-950 dark:text-palette-100">
                  {step.label}
                </p>
                <p className="mt-2 text-palette-500 dark:text-palette-400">
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

/* ─── API Key Explainer ──────────────────────────────────────── */

function ApiKeyExplainer() {
  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl bg-palette-100 p-6 dark:bg-palette-900">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 shrink-0 text-tint">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-palette-950 dark:text-palette-100">
                New to API keys?
              </p>
              <p className="mt-2 leading-relaxed text-palette-500 dark:text-palette-400">
                An API key is simply a private code that lets SpeakEasy access
                OpenAI&rsquo;s transcription service on your behalf — like a
                password for apps, but one you can cancel or delete at any time.
              </p>
              <p className="mt-3 leading-relaxed text-palette-500 dark:text-palette-400">
                Getting one takes about two minutes. Create a free account at{" "}
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-palette-700 underline decoration-palette-300 underline-offset-4 transition-colors hover:text-palette-950 dark:text-palette-300 dark:decoration-palette-600 dark:hover:text-palette-100"
                >
                  platform.openai.com
                </a>
                , add a small amount of credit (a few pounds lasts months), and
                you&rsquo;ll receive a key to paste into SpeakEasy. That&rsquo;s genuinely
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Download CTA ───────────────────────────────────────────── */

function Download() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-medium tracking-[-0.2px]">
          <span className="text-palette-950 dark:text-palette-100">
            Try {siteConfig.name}.
          </span>{" "}
          <span className="text-palette-400 dark:text-palette-500">
            Free, open source, and built by one person.
          </span>
        </h2>
        <div className="mt-8">
          <a
            href={siteConfig.download}
            className="inline-flex items-center gap-2 rounded-full bg-palette-800 px-5 py-2.5 text-[15px] font-medium text-palette-50 shadow-lg transition-colors hover:bg-palette-700 dark:bg-palette-200 dark:text-palette-900 dark:hover:bg-palette-300"
          >
            Download for macOS
          </a>
        </div>
        <p className="mt-4 text-sm text-palette-400 dark:text-palette-500">
          v{siteConfig.version} &middot; {siteConfig.minOS}
        </p>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      <div>
        <Hero />
        <AppPreview />
      </div>
      <Features />
      <HowItWorks />
      <ApiKeyExplainer />
      <Download />
    </div>
  );
}
