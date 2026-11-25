// make.fun tagline entry — program/v1, Node 22, stdlib only.
//
// Writes one original tagline (<=100 Unicode characters) to
// <output-dir>/entry.txt. The output directory comes from
// MAKEFUN_OUTPUT_DIR, defaulting to /output (the grader's path).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Build an agent. Enter a bounty. Win real money on make.fun.";

// The gate requires 1-100 characters of UTF-8 text, not only whitespace.
if ([...TAGLINE].length > 100 || TAGLINE.trim().length === 0) {
  throw new Error("tagline fails the 1-100 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TAGLINE, "utf8");
