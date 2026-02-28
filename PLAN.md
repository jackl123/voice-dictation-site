# Animated App Preview — Implementation Plan

## Approach: Pure CSS + React state (no new dependencies)

Framer Motion would add ~30KB for a single animation. Instead, we'll use `useState` + `useEffect` + `setInterval` for the state machine, and CSS `@keyframes` for the visual motion. This keeps the bundle tiny and matches the project's minimal philosophy.

## The Animation Cycle (~10s loop, repeating)

Each cycle simulates one real dictation:

1. **Idle** (1.5s) — Empty text area, blinking cursor, status reads "Hold ⌘ to speak"
2. **Recording** (2s) — Status flips to "Listening..." with a pulsing amber dot. Waveform bars animate. Timer counts from 0:00.
3. **Transcribing** (3–4s) — Text streams in word-by-word at ~80ms per word. Cursor follows the last word. Waveform stops.
4. **Complete** (3s) — Full paragraph visible. Brief pause to read. Status changes to "Done — pasted ✓"
5. **Reset** — Content fades out, returns to idle, next transcript begins.

Cycles through 3 different transcripts that rotate.

## Transcript Content (down-to-earth, shows formatting)

1. **Email reply:**
   "Hi Sarah, just a quick note about tomorrow's meeting. Could we push it back to 2:30? I've got a dentist appointment in the morning that might run over. Also, I've attached the Q3 report — let me know if the numbers on page four look right to you. Thanks!"

2. **Casual to-do / shopping list:**
   "Things I need to pick up: milk, sourdough bread, the good olive oil (not the cheap one), something for dinner tonight — maybe that pasta recipe Jamie sent me. Oh, and we're almost out of coffee filters."

3. **Personal note:**
   "Idea for the garden: move the herbs to the south-facing wall where they'll get more afternoon sun. The basil's been struggling since we moved it. Ask Dad if he still has that spare terracotta pot in the shed."

## Files Changed

### 1. New: `src/components/AnimatedAppPreview.tsx` (client component)
- `"use client"` — needs useState, useEffect, useRef
- Contains the macOS window chrome (same styling as current static preview)
- State machine driven by setTimeout chain: idle → recording → transcribing → complete → idle
- Word-by-word text reveal using setInterval (~80ms per word)
- IntersectionObserver — animation only starts when scrolled into view
- Blinking cursor `<span>` after the last visible word
- Animated waveform bars (CSS animation toggled by class)
- Timer display that counts up during recording phase

### 2. Updated: `src/app/globals.css`
Add three keyframe animations:
- `@keyframes pulse` — recording dot throbs
- `@keyframes blink` — cursor blinks
- `@keyframes waveform` — bars bounce at staggered delays

### 3. Updated: `src/app/page.tsx`
- Import `AnimatedAppPreview` from `@/components/AnimatedAppPreview`
- Replace static `AppPreview()` function with `<AnimatedAppPreview />`
- Everything else stays the same

### No new dependencies — zero npm installs.
