import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${siteConfig.name} handles your data. No backend, no accounts, no analytics.`,
};

export default function Privacy() {
  return (
    <div className="px-6 py-24">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
          Privacy
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-warm-500 dark:text-warm-400">
          {siteConfig.name} is designed to minimise data exposure. Here&rsquo;s
          what happens with your data and what doesn&rsquo;t.
        </p>

        <Section title="Architecture">
          <p>
            {siteConfig.name} is a native macOS application. It has no backend
            servers, no database, no user accounts, and no cloud infrastructure.
            The app runs entirely on your Mac.
          </p>
          <p>
            When you dictate, audio is sent directly from your device to
            OpenAI&rsquo;s API over HTTPS. The response comes back to your
            device. No third-party server sits in between.
          </p>
        </Section>

        <Section title="What we collect">
          <p>
            Nothing. No analytics, no telemetry, no crash reports, no usage
            tracking, no cookies, no identifiers. We have no mechanism to
            collect data because there is no server to send it to.
          </p>
        </Section>

        <Section title="Your API key">
          <p>
            Your OpenAI API key is stored locally in the app&rsquo;s user
            defaults on your Mac. It is only ever transmitted to OpenAI&rsquo;s
            API endpoints as an authorization header over HTTPS. It is never
            sent anywhere else.
          </p>
        </Section>

        <Section title="Your audio">
          <p>
            When you press and hold your hotkey, audio is captured from your
            microphone and held in memory. When you release the key, the audio
            is sent directly to OpenAI&rsquo;s transcription API. After the
            response is received, the audio data is discarded from memory. No
            audio is written to disk.
          </p>
        </Section>

        <Section title={"OpenAI\u2019s data handling"}>
          <p>
            Audio is processed by OpenAI&rsquo;s Whisper API. According to{" "}
            <a
              href="https://openai.com/policies/api-data-usage-policies"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-warm-300 underline-offset-4 transition-opacity hover:opacity-70 dark:decoration-warm-600"
            >
              their API data usage policy
            </a>
            , data submitted through the API is not used to train their models
            by default. OpenAI may retain API inputs for up to 30 days for
            abuse monitoring, after which they are deleted.
          </p>
          <p>
            We encourage you to review OpenAI&rsquo;s policies directly, as
            they may change over time.
          </p>
        </Section>

        <Section title="Text formatting">
          <p>
            If you enable AI formatting, the transcribed text (not the audio)
            is sent to OpenAI&rsquo;s GPT&#8209;4o&#8209;mini model for
            punctuation and capitalisation cleanup. This uses the same API key
            and the same direct connection. No text is stored after formatting.
          </p>
        </Section>

        <Section title="Source code">
          <p>
            {siteConfig.name} is open source. Every claim on this page can be
            verified by reading the code on{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-warm-300 underline-offset-4 transition-opacity hover:opacity-70 dark:decoration-warm-600"
            >
              GitHub
            </a>
            .
          </p>
        </Section>

        <Section title="What we do not claim">
          <div className="space-y-3">
            <p>
              We do not claim your data never leaves your device. Audio is sent
              to OpenAI for transcription.
            </p>
            <p>
              We do not claim total privacy. You are using a third-party API.
            </p>
            <p>
              We do not claim control over OpenAI&rsquo;s data handling
              practices.
            </p>
          </div>
          <p className="mt-5">
            What we do guarantee: there is no intermediary between you and
            OpenAI, and we never see, store, or process your data.
          </p>
        </Section>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-serif text-lg">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-warm-500 dark:text-warm-400">
        {children}
      </div>
    </section>
  );
}
