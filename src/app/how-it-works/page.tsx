import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "How It Works",
  description: `Learn how ${siteConfig.name} turns your voice into text using your own OpenAI API key.`,
};

export default function HowItWorks() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
          How it works
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-warm-500 dark:text-warm-400">
          Three steps. No accounts, no sign-ups, no configuration wizards.
        </p>

        {/* Steps */}
        <div className="mt-16 space-y-16">
          <Step
            number="01"
            title="Add your OpenAI API key"
            description={`When you first open ${siteConfig.name}, it asks for your OpenAI API key. You can get one in two minutes at platform.openai.com. The key is stored locally in the app\u2019s preferences on your Mac \u2014 it\u2019s never sent anywhere except directly to OpenAI when you dictate.`}
          />
          <Step
            number="02"
            title="Hold your hotkey and speak"
            description={`Click wherever you want text to appear \u2014 any app, any text field. Then hold your hotkey (Right Command by default, but you can change it). Speak naturally. ${siteConfig.name} records audio locally while you hold the key.`}
          />
          <Step
            number="03"
            title={"Release \u2014 text appears"}
            description={"When you release the key, the audio is sent directly to OpenAI\u2019s Whisper API for transcription. The result comes back, gets formatted (punctuation, capitalisation, structure), and is typed into whatever app you\u2019re using. The whole process takes about a second."}
          />
        </div>

        {/* Under the hood */}
        <div className="mt-24">
          <h2 className="font-serif text-xl tracking-tight">Under the hood</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-warm-500 dark:text-warm-400">
            <p>
              Audio is captured at 16&nbsp;kHz mono via your Mac&rsquo;s
              microphone using AVAudioEngine. The raw audio is sent as a single
              HTTPS request to OpenAI&rsquo;s transcription endpoint.
            </p>
            <p>
              The transcribed text is optionally formatted by
              GPT&#8209;4o&#8209;mini for punctuation and capitalisation. The
              final text is injected at your cursor position using macOS
              Accessibility APIs.
            </p>
            <p>
              No audio is stored locally or remotely after transcription.
            </p>
          </div>
        </div>

        {/* What you need */}
        <div className="mt-24">
          <h2 className="font-serif text-xl tracking-tight">What you need</h2>
          <ul className="mt-6 space-y-3 text-sm text-warm-500 dark:text-warm-400">
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
                className="underline decoration-warm-300 underline-offset-4 transition-opacity hover:opacity-70 dark:decoration-warm-600"
              >
                get one here
              </a>
              )
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-accent-500">{"\u2713"}</span>
              A few pounds of API credit loaded on your OpenAI account
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
      <span className="mt-1 shrink-0 text-sm text-warm-300 dark:text-warm-600">
        {number}
      </span>
      <div>
        <h3 className="font-serif text-xl">{title}</h3>
        <p className="mt-3 leading-relaxed text-warm-500 dark:text-warm-400">
          {description}
        </p>
      </div>
    </div>
  );
}
