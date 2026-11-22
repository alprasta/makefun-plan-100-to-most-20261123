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

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: spend $15 on a domain, find 200 restaurants on Google Maps taking phone orders. " +
  "Days 2-30: email 15/day offering a $79 ordering page in 30 min — saves 30% delivery-app commission — plus $29/mo updates. " +
  "Close 1 in 20: 21 clients, ~$1,700 plus $600/mo recurring by day 30.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
