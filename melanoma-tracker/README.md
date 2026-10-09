# Melanoma Phase 3 Readout & FDA Approval Tracker

An interactive, curated competitive-intelligence tool that tracks **Phase 3 melanoma
trial readouts** and follows the positive ones through their **FDA regulatory journey**
(filing → PDUFA → decision).

**Live:** https://suruchisethi6.github.io/melanoma-tracker

Built by Suruchi Sethi, PhD — after Merck & Moderna's INTerpath-001 positive Phase 3
readout (19 Aug 2026) — to capture events like it as structured signals rather than
reacting to news one at a time.

---

## The idea: two linked layers

| Layer | Role | What it holds |
|-------|------|----------------|
| **Readout tracker** | *Leading* indicator | Phase 3 melanoma trials and their data readouts (positive / negative / mixed / expected) |
| **FDA tracker** | *Lagging* indicator | For drugs that read out positive — filing status, PDUFA date, designations, AdCom, outcome |

The two connect through the drug: a positive readout predicts a future filing. Each
entry is **one drug-program** carrying its readout facts plus an optional `regulatory`
sub-object, so the pipeline visual falls out for free and nothing drifts out of sync.

## Methodology (important)

Readout timing and outcomes are **not** reliably held in ClinicalTrials.gov — companies
announce them via press releases, earnings calls, and medical meetings. So this is a
**curated** tracker: each entry is captured from a public announcement and enriched with
structured trial data (NCT ID, design, endpoint) from ClinicalTrials.gov.

- Every entry **cites its source**.
- Nothing is invented — no hazard ratios or dates are guessed. Unverifiable fields are
  **flagged**, not filled in. Entries carry a `verified` badge and an "as of" date.

## What's in it

- Header explaining the tracker and its INTerpath-001 origin, with a "data current as of" date
- Summary stats (total, positive / negative / expected, in-FDA-pipeline) + modality breakdown
- Two views over the same data: **Readout tracker** and **FDA pipeline**
- Filter by modality / setting / status; search by drug or sponsor
- Expandable cards with every field, typed source links, and flag notes
- A per-drug **pipeline visual**: Readout → Filed → PDUFA → Decision

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole app — structure, styling, and logic. You rarely touch this. |
| `data.js` | The tracked readouts (a `READOUTS` array). **The only file you edit to add entries.** |
| `ADD-READOUT.md` | Step-by-step workflow + reusable prompt for adding a new readout. |
| `.nojekyll` | Tells GitHub Pages to serve the folder as-is. |

## Tech

Plain HTML + CSS + vanilla JavaScript. No framework, no build step, no dependencies
(fonts load from Google Fonts). It deploys straight to GitHub Pages.

## Add a new readout

See [`ADD-READOUT.md`](ADD-READOUT.md). In short: paste a press-release link to Claude
Code, which extracts the fields, confirms the NCT record, appends one entry to `data.js`,
and gives you the redeploy commands.

## Run it locally

Because `index.html` loads `data.js`, open it through a tiny local server rather than
double-clicking the file (a `file://` page can be blocked from loading the script):

```bash
py -m http.server 8765
```

Then open http://localhost:8765 in your browser. (Use `python` instead of `py` on macOS/Linux.)

## Deploy / redeploy

From the repository root (`Website/`):

```bash
git add melanoma-tracker
git commit -m "Update melanoma tracker"
git push
```

GitHub Pages republishes automatically in about a minute.

---

*Independent competitive-intelligence project for informational purposes only — not
investment or medical advice. Readouts sourced from public company announcements; trial
data from ClinicalTrials.gov.*
