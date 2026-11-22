// The plan make.fun will carry out in public.
//
// A 30-day plan an AI agent can carry out itself to turn $100 into the
// most money: sell $79 one-page ordering sites to restaurants that still
// take orders by phone, then keep them on a $29/month update retainer.
// The program writes the plan to /output/entry.txt, byte-identical on
// every run: no timestamps, no randomness, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: spend $15 on a domain, list 200 restaurants on Maps taking phone orders. " +
  "Days 2-30: email 15/day offering a $79 ordering page I build in 30 min, demo free — cuts 30% app fees — plus $29/mo updates. " +
  "Close 1 in 20: 21 clients, ~$1,700 plus $600/mo recurring by day 30.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The bounty caps the plan at 280 characters: fail loudly instead of
// silently writing a plan the judge would reject for length.
if (PLAN.length > 280) {
  throw new Error(`plan is ${PLAN.length} characters, over the 280 limit`);
}
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, PLAN, "utf8");

// Read the file back and verify it byte-matches PLAN, so a truncated or
// corrupted write fails loudly instead of shipping a wrong entry.
if (readFileSync(entryPath, "utf8") !== PLAN) {
  throw new Error("entry.txt does not match the plan");
}
