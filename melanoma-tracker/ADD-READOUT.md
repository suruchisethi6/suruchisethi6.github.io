# How to add a new readout entry

This is the "capture a signal systematically" loop — the whole point of the tracker.
When a new melanoma Phase 3 readout (or an FDA milestone on a drug you already track)
is announced, you add one structured entry to `data.js` and redeploy. You never touch
`index.html` — all the app logic lives there and stays untouched.

There are two ways to do it: **the Claude way** (recommended — paste a link, Claude does
the rest) and **the manual way** (if you ever want to edit by hand).

---

## The Claude way (recommended)

Open Claude Code in this project folder and paste the prompt below, replacing the link
(and adding any context you have). Claude will read the announcement, pull the matching
ClinicalTrials.gov record, draft one entry in the exact `data.js` format, add it, and
tell you the redeploy commands.

### Reusable prompt — copy everything between the lines

```
Add a new entry to melanoma-tracker/data.js for this melanoma Phase 3 readout.

Source link(s): <PASTE PRESS RELEASE / MEDICAL MEETING / FDA URL HERE>
Anything I already know (optional): <e.g. "negative trial, presented at ESMO 2026">

Please:
1. Read the announcement and extract every field in the data.js schema.
2. Look up the trial on ClinicalTrials.gov (use the c-trials MCP if available) to
   confirm the NCT ID, official trial name, sponsor(s), setting, and primary endpoint.
3. If a drug already in the tracker has a NEW regulatory milestone (filing, PDUFA,
   AdCom, approval, CRL), UPDATE that drug's existing `regulatory` object instead of
   adding a duplicate entry.
4. NEVER invent hazard ratios, dates, endpoints, or NCT IDs. If a field can't be
   verified, set it to null or a clear "not disclosed" string and set the relevant
   verification flag to false. Cite every source with a real, working URL.
5. Update the `asOf` date on the entry and the global "Data current as of" date.
6. Show me the new/updated entry, then give me the exact git commands to redeploy.
```

That's it. Review what Claude drafted, then run the redeploy commands it gives you.

---

## The entry format (data.js schema)

Each entry in the `READOUTS` array is one **drug-program**. It carries the readout facts
plus an optional `regulatory` object for the FDA journey. Fields:

```js
{
  id: "unique-slug",                  // short unique id, e.g. "interpath-001"
  drug: "Intismeran autogene (V940) + pembrolizumab (Keytruda)",
  sponsors: ["Moderna", "Merck"],
  trialName: "INTerpath-001",
  nctId: "NCT05933577",               // used to build the ClinicalTrials.gov link
  modality: "mRNA/neoantigen vaccine",// see MODALITIES list at top of data.js
  setting: "Adjuvant",                // see SETTINGS list at top of data.js
  status: "Reported Positive",        // Reported Positive | Reported Negative | Mixed | Expected
  readoutDate: "2026-08-19",          // ISO date; for Expected, the guided window
  isExpected: false,                  // true if the date is a future/guided window
  primaryEndpoint: "Recurrence-free survival (RFS)",
  endpointMet: "Yes",                 // Yes | No | Partial | Pending
  keyData: "Topline only; RFS and DMFS met. (Phase 2b KEYNOTE-942 RFS HR ~0.51.)",
  regulatoryNextStep: "Companies to engage regulators on filing. Not yet filed.",
  sources: [
    { type: "Press release", url: "https://www.merck.com/news/...", label: "Merck/Moderna, 19 Aug 2026" }
  ],
  asOf: "2026-08-27",                 // date this entry was last verified
  verified: true,                     // false if any core field is unverified/flagged
  flags: "",                          // short note on anything shaky; "" if clean

  // Optional — include only for drugs moving toward/through the FDA:
  regulatory: {
    filingStatus: "Not yet filed",    // Not yet filed | Filed | Under review | —
    pdufaDate: null,                  // ISO date or null
    designations: ["Breakthrough Therapy"], // Breakthrough | Fast Track | Priority Review | Orphan | Accelerated Approval
    adcom: null,                      // date/string or null
    outcome: "Pending"                // Approved | CRL | Pending | —
  }
}
```

### Field rules
- **Every entry must have at least one real source URL.** No source, no entry.
- **Never fabricate** hazard ratios, dates, endpoints, or NCT IDs. Unknown → `null` or
  `"not disclosed"`, and set `verified: false` with a note in `flags`.
- Use the exact `modality` and `setting` strings from the lists at the top of `data.js`
  (that's what the filters key off).
- One drug-program = one entry. New regulatory news updates the existing `regulatory`
  object; it does not create a second entry.

---

## Redeploy after adding an entry

From the repository root (`Website/`):

```bash
git add "melanoma-tracker/data.js"
git commit -m "Add readout: <trial name>"
git push
```

GitHub Pages republishes automatically in ~1 minute at
`https://suruchisethi6.github.io/melanoma-tracker`.
