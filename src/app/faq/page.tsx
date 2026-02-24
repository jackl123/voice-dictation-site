import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${siteConfig.name} — API keys, privacy, cost, and more.`,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Why do I need my own OpenAI API key?",
    a: `${siteConfig.name} sends your audio directly to OpenAI for transcription. Your API key authenticates these requests. This means there\u2019s no middleman \u2014 you pay OpenAI directly at their published rates, and your data never passes through a third-party server.`,
  },
  {
    q: "Is my data private?",
    a: `${siteConfig.name} has no backend servers and collects no data. Audio is sent directly from your Mac to OpenAI\u2019s API over HTTPS. We never see, store, or process your audio or transcriptions. That said, OpenAI does process your audio on their servers \u2014 review their API data usage policy for details.`,
  },
  {
    q: "Do you store my audio?",
    a: "No. Audio is held in memory while you\u2019re recording, sent to OpenAI when you release the hotkey, and then discarded. Nothing is written to disk.",
  },
  {
    q: "How much does it cost to use?",
    a: "OpenAI\u2019s Whisper API costs $0.006 per minute of audio. In practice, most users spend a few pennies per day. If you dictate for 5 minutes a day, that\u2019s roughly 50p per month. The app shows you the cost of each dictation so there are no surprises.",
  },
  {
    q: "Why is this free?",
    a: "It started as a personal project. I built it for myself, and it turned out to be genuinely useful. Charging a subscription for what is essentially a UI wrapper around an API felt wrong, so it\u2019s free. If you find it valuable, donations are welcome but never expected.",
  },
  {
    q: "Is this affiliated with OpenAI?",
    a: `No. ${siteConfig.name} is an independent, open-source project. It uses OpenAI\u2019s public API, which is available to anyone with an API key. We have no affiliation, partnership, or endorsement from OpenAI.`,
  },
  {
    q: "How do I get an OpenAI API key?",
    a: "Go to platform.openai.com, create an account (or sign in), navigate to API Keys, and create a new key. You\u2019ll need to add a small amount of credit (\u00A35 is more than enough to last months). The app walks you through this during setup.",
  },
  {
    q: "Does it work offline?",
    a: `${siteConfig.name} includes a local transcription model (Whisper tiny) that works without an internet connection. The quality is noticeably lower than the API, but it works in a pinch. The API mode requires an internet connection.`,
  },
  {
    q: "Which apps does it work with?",
    a: "Any app that accepts keyboard input. Email, Slack, Notes, VS Code, your browser, Google Docs, Terminal \u2014 if you can type there, you can dictate there. It uses macOS Accessibility APIs to inject text at your cursor position.",
  },
  {
    q: "Can I change the hotkey?",
    a: "Yes. The default is Right Command (hold to record, release to transcribe), but you can change it to any key or key combination in the app\u2019s settings.",
  },
  {
    q: "Is it open source?",
    a: "Yes. The full source code is on GitHub. You can read every line, build it yourself, or fork it.",
  },
  {
    q: "Does it work on Apple Silicon and Intel Macs?",
    a: `Yes. ${siteConfig.name} runs natively on both Apple Silicon and Intel Macs. It requires macOS 13 (Ventura) or later.`,
  },
];

export default function FAQ() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
          Straightforward answers. No marketing spin.
        </p>

        <div className="mt-14 divide-y divide-neutral-100 dark:divide-neutral-800">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-8">
              <h2 className="text-lg font-semibold">{faq.q}</h2>
              <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
