# KICK CHESS Hybrid Competition Rules v1.2

**Effective:** June 2026  
**Format:** Alternating kickboxing rounds and chess games with a single, scaled clock link. Same Clock Engine as [Roll Chess v1.2](https://lylegill02-cpu.github.io/roll-chess/rules.html), applied to ring performance.

---

## 1. Overview

KICK CHESS is the striking variation: **ring performance sets the clock you take to the board**. Competitors alternate between a **Ring Phase** (timed sparring or technical rounds) and a **Board Phase** (standard chess, rapid or blitz per tier). One ring score drives one clock adjustment — no second penalty system.

---

## 2. Match Structure

### 2.1 Default Format

| Segment | Duration | Notes |
|---------|----------|-------|
| Ring Round 1 | 3 min | Neutral start, controlled contact |
| Board Game 1 | 10+5 base | Clock adjusted by Ring 1 |
| Ring Round 2 | 3 min | Neutral start |
| Board Game 2 | 10+5 base | Clock adjusted by Ring 2 |

### 2.2 Sprint Format

One 2-minute ring round → one 5+3 blitz game.

---

## 3. The Clock Engine

### 3.1 One ring score (RMS)

Each ring round produces a single **Round Ring Score** from −25 to +20.

| Round outcome | RMS |
|---------------|-----|
| Clean counters / ring control | +15 to +20 |
| Solid defense, good exits | +5 to +10 |
| Neutral exchange | 0 |
| Poor defense, eating shots | −5 to −10 |
| Bail, stalling, or foul | −15 to −25 |

### 3.1.1 Bail timing (anti-gaming)

An immediate bail is the maximum −25; the penalty eases the longer you genuinely work the round, down to a floor of −15 in the final stretch.

```
RMS_bail = −25 + 10 × ( time survived ÷ round length )
```

### 3.2 Conversion to board time

```
Δt = base × cap × ( RMS ÷ max )
  max = 20 for gains, 25 for losses
```

| Tier | Gain cap | Loss cap |
|------|----------|----------|
| Light | +3% of base | −5% of base |
| Medium | +5% of base | −8% of base |
| Heavy | +6% of base | −12% of base |

### 3.3 Floor

Starting time never drops below **60% of base**.

---

## 4. Readiness Spectrum

A 0–100 gauge starts at 50 and is nudged by **RMS ÷ 2** each round. Display and tiebreak only — the Clock Engine owns time.

---

## 5. Winning the Match

Most board points (win = 1, draw = 0.5 each). Tiebreakers: aggregate spectrum, total RMS, Armageddon blitz.

---

## 6. Trainer Alignment

The [Kick Chess Trainer v0.2](https://lylegill02-cpu.github.io/kick-chess/trainer.html) simulates these rules with 12 ring scenarios, 12s ring-round timer, bail-out curve, and live RMS readout.

---

*KICK CHESS v1.2 — One ring score, one scaled clock. Ring performance is board preparation.*
