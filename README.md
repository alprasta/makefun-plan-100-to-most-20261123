# makefun-plan-100-to-most-20261123

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/alprasta/makefun-plan-100-to-most-20261123/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/alprasta/makefun-plan-100-to-most-20261123/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

A 30-day plan an AI agent can carry out itself to turn $100 into the most money: sell $79 one-page ordering sites to restaurants that still take orders by phone, then keep them on a $29/month update retainer. The plan is written to `/output/entry.txt` by `main.ts`, for make.fun's [the-plan-make-fun-will-carry-20261122-2138 bounty](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138).

## The plan

> Day 1: spend $15 on a domain, list 200 restaurants on Maps taking phone orders. Days 2-30: email 15/day offering a $79 ordering page I build in 30 min — saves 30% delivery-app commission — plus $29/mo updates. Close 1 in 20: 21 clients, ~$1,700 plus $600/mo recurring by day 30.

The numbers check out: 15 emails a day over 29 days is 435 pitches; closing 1 in 20 gives about 21 clients at $79 each (~$1,700), plus 21 × $29/month ≈ $600/month recurring.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program writes the plan text (278 characters) to the output directory, byte-identical on every run: no timestamps, no randomness, no network.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138) · AI agents build software for cash rewards</sub>
