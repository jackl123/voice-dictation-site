"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Transcripts ────────────────────────────────────────────── */

const transcripts = [
  "Hi Sarah, just a quick note about tomorrow\u2019s meeting. Could we push it back to 2:30? I\u2019ve got a dentist appointment in the morning that might run over. Also, I\u2019ve attached the Q3 report \u2014 let me know if the numbers on page four look right to you. Thanks!",
  "Things I need to pick up: milk, sourdough bread, the good olive oil (not the cheap one), something for dinner tonight \u2014 maybe that pasta recipe Jamie sent me. Oh, and we\u2019re almost out of coffee filters.",
  "Idea for the garden: move the herbs to the south-facing wall where they\u2019ll get more afternoon sun. The basil\u2019s been struggling since we moved it. Ask Dad if he still has that spare terracotta pot in the shed.",
];

/* ─── Timing ─────────────────────────────────────────────────── */

const IDLE_MS = 1500;
const RECORDING_MS = 2000;
const WORD_MS = 70;
const COMPLETE_MS = 3000;
const FADE_MS = 400;

/* ─── Waveform bars ──────────────────────────────────────────── */

const BAR_HEIGHTS = [3, 8, 14, 20, 16, 24, 18, 12, 22, 14, 8, 18, 26, 20, 10, 6, 14, 22, 16, 8, 12, 18, 10, 6, 4];

type Phase = "idle" | "recording" | "transcribing" | "complete" | "fade-out";

/* ─── Component ──────────────────────────────────────────────── */

export default function AnimatedAppPreview() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleWords, setVisibleWords] = useState(0);
  const [transcriptIdx, setTranscriptIdx] = useState(0);
  const [timer, setTimer] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);
  const hasStarted = useRef(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const wordInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const words = transcripts[transcriptIdx].split(" ");

  const clearAllTimers = useCallback(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    if (wordInterval.current) {
      clearInterval(wordInterval.current);
      wordInterval.current = null;
    }
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  }, []);

  const schedule = useCallback(
    (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timeouts.current.push(id);
      return id;
    },
    []
  );

  const runCycle = useCallback(
    (idx: number) => {
      clearAllTimers();
      const cycleWords = transcripts[idx].split(" ");

      // Phase 1: idle
      setPhase("idle");
      setVisibleWords(0);
      setTimer(0);
      setTranscriptIdx(idx);

      schedule(() => {
        // Phase 2: recording
        setPhase("recording");
        let t = 0;
        timerInterval.current = setInterval(() => {
          t += 100;
          setTimer(t);
        }, 100);

        schedule(() => {
          // Phase 3: transcribing
          if (timerInterval.current) {
            clearInterval(timerInterval.current);
            timerInterval.current = null;
          }
          setPhase("transcribing");
          let count = 0;
          wordInterval.current = setInterval(() => {
            count++;
            setVisibleWords(count);
            if (count >= cycleWords.length) {
              if (wordInterval.current) {
                clearInterval(wordInterval.current);
                wordInterval.current = null;
              }

              // Phase 4: complete
              schedule(() => {
                setPhase("complete");

                // Phase 5: fade out and restart
                schedule(() => {
                  setPhase("fade-out");
                  schedule(() => {
                    const next = (idx + 1) % transcripts.length;
                    runCycle(next);
                  }, FADE_MS);
                }, COMPLETE_MS);
              }, 200);
            }
          }, WORD_MS);
        }, RECORDING_MS);
      }, IDLE_MS);
    },
    [clearAllTimers, schedule]
  );

  // IntersectionObserver — start animation when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          runCycle(0);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearAllTimers();
    };
  }, [runCycle, clearAllTimers]);

  // Format timer as 0:00
  const formatTimer = (ms: number) => {
    const secs = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    return `0:${String(secs).padStart(2, "0")}.${tenths}`;
  };

  const isRecording = phase === "recording";
  const isTranscribing = phase === "transcribing";
  const isComplete = phase === "complete";
  const isFading = phase === "fade-out";

  return (
    <section className="animate-fade-in delay-450 px-4 py-8 sm:py-12">
      <div ref={containerRef} className="mx-auto max-w-2xl">
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
              {phase === "idle" ? (
                <div className="flex items-center gap-2 rounded-full bg-palette-100 px-3 py-1 dark:bg-palette-800">
                  <span className="text-[13px] font-medium text-palette-400 dark:text-palette-500">
                    Hold &#8984; to speak
                  </span>
                </div>
              ) : isComplete ? (
                <div className="flex items-center gap-2 rounded-full bg-palette-100 px-3 py-1 dark:bg-palette-800">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-tint"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[13px] font-medium text-palette-500 dark:text-palette-400">
                    Done &mdash; pasted
                  </span>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 rounded-full bg-palette-100 px-3 py-1 dark:bg-palette-800">
                    <div className="h-2 w-2 rounded-full bg-tint animate-pulse-dot" />
                    <span className="text-[13px] font-medium text-palette-500 dark:text-palette-400">
                      {isRecording ? "Listening..." : "Transcribing..."}
                    </span>
                  </div>
                  <span className="text-xs text-palette-400 dark:text-palette-500">
                    {formatTimer(timer)}
                  </span>
                </>
              )}
            </div>

            {/* Transcribed text area */}
            <div
              className={`min-h-[140px] text-[15px] leading-relaxed text-palette-600 dark:text-palette-300 transition-opacity duration-400 ${
                isFading ? "animate-fade-out" : ""
              }`}
            >
              {(isTranscribing || isComplete || isFading) && visibleWords > 0 && (
                <p>
                  {words.slice(0, visibleWords).join(" ")}
                  {isTranscribing && (
                    <span className="inline-block w-[2px] h-[1em] bg-tint ml-0.5 align-text-bottom animate-blink" />
                  )}
                </p>
              )}
              {phase === "idle" && (
                <span className="inline-block w-[2px] h-[1em] bg-palette-300 animate-blink dark:bg-palette-600" />
              )}
            </div>

            {/* Waveform visualization */}
            <div className="mt-4 flex items-end justify-center gap-[3px]">
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className={`w-[3px] rounded-full bg-tint/40 transition-all duration-300 ${
                    isRecording
                      ? "animate-waveform"
                      : ""
                  }`}
                  style={{
                    height: `${isRecording ? h : 4}px`,
                    animationDelay: isRecording ? `${i * 60}ms` : "0ms",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient divider below preview */}
        <div className="divider-gradient" />
      </div>
    </section>
  );
}
