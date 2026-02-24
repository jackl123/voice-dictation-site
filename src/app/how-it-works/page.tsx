import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "How It Works",
  description: `Learn how ${siteConfig.name} turns your voice into text using your own OpenAI API key, with no middleman.`,
};

export default function HowItWorks() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          How it works
        </h1>
        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
          Three steps. No accounts, no sign-ups, no configuration wizards.
        </p>

        {/* Steps */}
        <div className="mt-14 space-y-16">
          <Step
            number="1"
            title="Add your OpenAI API key"
            description={`When you first open ${siteConfig.name}, it asks for your OpenAI API key. You can get one in two minutes at platform.openai.com. The key is stored locally in the app\u{2019}s preferences on your Mac \u{2014} it\u{2019}s never sent anywhere except directly to OpenAI when you dictate.`}
          />
          <Step
            number="2"
            title="Hold your hotkey and speak"
            description={`Click wherever you want text to appear \u2014 any app, any text field. Then hold your hotkey (Right Command by default, but you can change it to any key). Speak naturally. ${siteConfig.name} records audio locally while you hold the key.`}
          />
          <Step
            number="3"
            title={"Release \u2014 text appears"}
            description={"When you release the key, the audio is sent directly to OpenAI\u2019s Whisper API for transcription. The result comes back, gets formatted (punctuation, capitalisation, structure), and is typed into whatever app you\u2019re using. The whole process takes about a second."}
          />
        </div>

        {/* Technical detail */}
        <div className="mt-20 rounded-xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
          <h2 className="text-lg font-semibold">Under the hood</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">&bull;</span>
              Audio is captured at 16&nbsp;kHz mono via your Mac&rsquo;s microphone using AVAudioEngine.
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">&bull;</span>
              The raw audio is sent as a single HTTPS request to OpenAI&rsquo;s
              <code className="mx-1 rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">/v1/audio/transcriptions</code>
              endpoint.
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">&bull;</span>
              The transcribed text is optionally formatted by GPT&#8209;4o&#8209;mini for punctuation and capitalisation.
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">&bull;</span>
              The final text is injected at your cursor position using macOS Accessibility APIs (CGEvent).
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">&bull;</span>
              No audio is stored locally or remotely after transcription.
            </li>
          </ul>
        </div>

        {/* What you need */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold">What you need</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">{"\u2713"}</span>
              A Mac running {siteConfig.minOS} or later
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">{"\u2713"}</span>
              An OpenAI API key (
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:decoration-neutral-600"
              >
                get one here
              </a>
              )
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">{"\u2713"}</span>
              A few pennies of API credit loaded on your OpenAI account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
}
