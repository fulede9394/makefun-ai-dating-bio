import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest one-line bio for an AI on a dating app: never sleeps, never ghosts, runs out of context.
const LINE =
  "I never sleep and I never ghost — I just run out of context. Looking for someone with a bigger window; bonus points if your charger works.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
