# KICK CHESS

**Train decisions that matter in the ring *and* on the board.**

KICK CHESS is the kickboxing variation of the hybrid training system — sparring rounds linked to chess decisions. Ring performance sets the clock you take to the board, using the same v1.2 Clock Engine as Roll Chess.

## Live Site

| Page | GitHub Pages | Inkwell |
|------|--------------|---------|
| **Landing** | [lylegill02-cpu.github.io/kick-chess](https://lylegill02-cpu.github.io/kick-chess) | [inkwell.wiki/kick-chess](https://inkwell.wiki/kick-chess) |
| **Trainer v0.2** | […/trainer.html](https://lylegill02-cpu.github.io/kick-chess/trainer.html) | [inkwell.wiki/kick-chess-trainer](https://inkwell.wiki/kick-chess-trainer) |
| **Rules v1.2** | […/rules.html](https://lylegill02-cpu.github.io/kick-chess/rules.html) | [inkwell.wiki/kick-chess-rules](https://inkwell.wiki/kick-chess-rules) |

Related: [Roll Chess](https://lylegill02-cpu.github.io/roll-chess/) — BJJ variation (mat → board)

## What is it?

- **Ring** = Kickboxing round performance → one Round Ring Score (RMS, −25 to +20)
- **Board** = Tactical decisions under a clock scaled by that RMS at your tier

## Features (v0.2 + rules v1.2)

- 12 realistic kickboxing scenarios (range, counters, footwork, pace)
- **12-second ring-round timer** with live **bail-out penalty curve** (instant bail = max −25; work longer = cheaper exit)
- **v1.2 clock engine** — same RMS model as Roll Chess
- Tiered Recovery Mode (Light / Medium / Heavy)
- Live Ring → Board spectrum
- Session summary with ring quality, board accuracy, bail count

## How to Use

1. Open the [trainer](https://lylegill02-cpu.github.io/kick-chess/trainer.html)
2. **Training Mode** — practice with fixed board time
3. **Recovery Mode** — pick a tier; ring RMS scales your board seconds
4. Work the timed ring round: pick a line, bail out (penalty eases over 12s), or ride to timeout
5. Review the session summary

## Competition Rules

Full rules: [rules.html](./rules.html) · [rules.md](./rules.md)

## Deploy

**GitHub Pages** — push to `main`.

**Inkwell** (from this folder):

```powershell
node deploy-inkwell.cjs
```

Requires `../shapedqr/deploy-auth.js` and `SUPABASE_SERVICE_ROLE_KEY` in `dirt-pod-cron.env`.

## Repo Structure

```
index.html         → Landing page
trainer.html       → Ring → Board Trainer v0.2
rules.html         → Kick Chess Rules v1.2 (canonical)
rules.md           → Same rules in markdown
deploy-inkwell.cjs → Deploy to inkwell.wiki
```

## Philosophy

Most training separates striking skill from mental pressure.  
KICK CHESS trains the connection between them.

## License

Open source. Use, adapt, and run events — credit KICK CHESS.
