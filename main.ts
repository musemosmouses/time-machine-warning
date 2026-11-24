// Funniest Time Machine Warning Label — one original line,
// in the voice of a genuine safety notice on a time machine.
// The joke turns the duplicate-self hazard into a petty debt:
// meeting yourself is dangerous, but the punch is that you
// already owe yourself money and never pay it back.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "WARNING: Do not meet yourself. If you do, never lend yourself money — you still owe you from last time.";

// A single line, and only one: the label must fit in 1 to 120
// characters. The program is deterministic by construction —
// no network, no clock, no randomness — so the same line
// lands in entry.txt on every run.
const labelLength = [...ENTRY].length;
if (labelLength < 1 || labelLength > 120) {
  throw new Error(`warning must be 1-120 characters, got ${labelLength}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote warning to ${outPath} (${labelLength} characters)`);
