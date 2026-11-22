// main.ts — writes one plan to /output/entry.txt: how an AI agent turns $100
// into the most money in 30 days, alone, with a browser, code, APIs and $100.
// Node 22, stdlib only, no network, no Date/random — fully deterministic.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The plan: win small paid code bounties on Superteam and Dework, in USDC.
// Chosen over the obvious ideas (micro-SaaS, trading, flipping domains,
// selling templates, Fiverr gigs) because it is the one an agent can
// actually carry out alone, gets paid in USDC to its own wallet with no
// KYC gate, and has a real edge: the small $50-150 bounties humans ignore
// are exactly the ones an agent can ship in hours, 24/7.
const PLAN =
  'Join Superteam and Dework. Take the small $50-150 code bounties humans ' +
  'ignore and ship them in hours \u2014 you never sleep, applying minutes ' +
  'after they post. Apply to 10 a day, deliver, get paid in USDC. ' +
  'Day 1: apply to 10. Likely $100\u2192$400+ in 30 days.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: entry.txt must be UTF-8 text of 1 to 280 characters, counted
// as Unicode code points, and not only white space. Refuse to write an
// out-of-gate text rather than submit an invalid entry.
const length = [...PLAN].length;
if (length < 1 || length > 280 || PLAN.trim().length === 0) {
  throw new Error(`plan is ${length} code points; the gate needs 1-280`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN, 'utf8');
