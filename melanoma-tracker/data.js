/* =====================================================================
   Melanoma Phase 3 Readout & FDA Approval Tracker — DATA
   ---------------------------------------------------------------------
   This is the ONLY file you edit to add or update readouts.
   See ADD-READOUT.md for the step-by-step workflow and field rules.

   Rules of the road:
   - Every entry MUST cite at least one real source URL.
   - NEVER invent hazard ratios, dates, endpoints, or NCT IDs.
     Unknown -> null or a clear "not disclosed" string, and set verified:false.
   - Use the exact modality / setting / tumourType / status strings from the
     lists below (the filters key off them).

   MODALITIES:   mRNA/neoantigen vaccine | TIL cell therapy | Checkpoint inhibitor
                 | Oncolytic virus | Targeted therapy | Other
                 -> "Other" is a deliberate catch-all. Name the actual agent class
                    in `drug`, e.g. "HBI-8000 (tucidinostat, HDAC inhibitor)".
                    Do not add a new modality for a single entry.
   SETTINGS:     Adjuvant | Neoadjuvant | 1L metastatic | 2L+ metastatic
                 -> line of therapy ONLY. Tumour type goes in tumourType.
   TUMOUR TYPES: Cutaneous | Uveal | Acral | Mucosal
                 -> use Cutaneous for trials in cutaneous or unspecified
                    "unresectable / metastatic melanoma", which is the standard
                    population in this disease. Uveal, acral and mucosal trials
                    always say so explicitly.
   STATUS:       Reported Positive | Reported Negative | Mixed | Expected | Discontinued
                 -> Discontinued = closed without reading out (operational or
                    strategic), which is neither a result nor an expectation.
                    Set isExpected:false and put the closure date in readoutDate;
                    the page labels it "Closed", not "Readout date".

   Schema note (11 Nov 2026): setting and tumourType were one field until this
   date, with "Uveal" sitting in the settings list. tumourType on every entry was
   derived from that entry's own recorded population, not from fresh research, so
   the split did not change any entry's asOf date.
   ===================================================================== */

const DATA_AS_OF = "2026-11-11";

const READOUTS = [

  /* ---------------------------------------------------------------- */
  {
    id: "interpath-001",
    drug: "Intismeran autogene (V940 / mRNA-4157) + pembrolizumab (Keytruda)",
    sponsors: ["Moderna", "Merck"],
    trialName: "INTerpath-001",
    nctId: "NCT05933577",
    modality: "mRNA/neoantigen vaccine",
    setting: "Adjuvant",
    tumourType: "Cutaneous",
    status: "Reported Positive",
    readoutDate: "2026-08-19",
    isExpected: false,
    primaryEndpoint: "Recurrence-free survival (RFS)",
    endpointMet: "Yes",
    keyData: "Full data presented at ESMO 2026 (Presidential Symposium I, late-breaker LBA1, 24 Oct 2026, Georgina Long). RFS (primary, ITT): HR 0.58 (95% CI 0.45–0.75), two-sided p<0.001; 2-year RFS 82.2% vs 70.0%. DMFS (key secondary): HR 0.62 (95% CI 0.45–0.85), p=0.002; 2-year DMFS 88.5% vs 80.2%. Median follow-up 24.6 months; data cutoff 30 June 2026. Overall survival still immature. First positive Phase 3 for an mRNA individualised neoantigen therapy. (~1,137 patients randomised 2:1.) Safety deliberately not recorded here — see flags.",
    regulatoryNextStep: "BLA not yet submitted. Moderna CEO Stéphane Bancel, speaking to STAT at ESMO (published around 27 Oct 2026), said work on the filing with the Merck team began in mid-August and gave no update on when submission would complete; the company expects approval in 2027. No FDA acceptance, priority review or PDUFA date announced.",
    sources: [
      { type: "Press release", url: "https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/", label: "Merck / Moderna joint release, 19 Aug 2026" },
      { type: "Press release", url: "https://news.modernatx.com/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-plus-keytruda-met-endpoints-of-rfs-and-dmfs-in-melanoma", label: "Moderna newsroom" },
      { type: "Medical meeting", url: "https://ascopost.com/news/august-2026/interpath-001-trial-of-mrna-based-individualized-neoantigen-therapy-meets-primary-and-key-secondary-endpoints-in-patients-with-high-risk-resected-melanoma/", label: "The ASCO Post" },
      { type: "Trade press", url: "https://www.onclive.com/view/adjuvant-intismeran-autogene-plus-pembrolizumab-improves-rfs-and-dmfs-in-melanoma", label: "OncLive, ESMO 2026 report, 24 Oct 2026" },
      { type: "Trade press", url: "https://www.cancernetwork.com/view/interpath-001-data-detail-survival-subgroup-and-safety-findings-in-melanoma", label: "CancerNetwork, ESMO 2026 report, 24 Oct 2026" }
    ],
    asOf: "2026-11-11",
    verified: false,
    flags: "ESMO efficacy figures come from trade coverage only — no company-primary source has been read, because Merck and Moderna both block automated access. Hence verified:false. SAFETY IS DELIBERATELY NOT FILLED. The two trade reports looked contradictory and are not: OncLive gives fatal AEs in 1.1% (n=8) of the combination arm with none related to intismeran, which is an all-cause count; CancerNetwork gives 2 treatment-related deaths (0.3%), both attributed to pembrolizumab. Same pattern for grade 3+ AEs, 23.6% all-cause vs 14.2% treatment-related. They reconcile, but the two articles use different denominators (755 as-treated vs 757) and neither is primary, so the numbers stay out until a primary source is read. NEJM publication was reported as due 11 Nov 2026; checked that day and no NEJM article, DOI or title could be found, and nejm.org blocks automated access. Any HR ~0.51 that circulates refers to the earlier Phase 2b KEYNOTE-942, not this trial. Enrolment reported as ~1,137 randomised vs 1,089 in the ClinicalTrials.gov registry.",
    regulatory: {
      filingStatus: "Not yet filed",
      pdufaDate: null,
      designations: ["Breakthrough Therapy (Feb 2023)"],
      adcom: null,
      outcome: "Pending"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "optimum-02",
    drug: "Darovasertib (IDE196) + crizotinib vs investigator's choice",
    sponsors: ["IDEAYA Biosciences", "Servier"],
    trialName: "OptimUM-02",
    nctId: "NCT05987332",
    modality: "Targeted therapy",
    setting: "1L metastatic",
    tumourType: "Uveal",
    status: "Reported Positive",
    readoutDate: "2026-04-13",
    isExpected: false,
    primaryEndpoint: "Progression-free survival (PFS) by BICR",
    endpointMet: "Yes",
    keyData: "Median PFS 6.9 vs 3.1 months; HR 0.42 (95% CI 0.30–0.59; p<0.0001). ORR 37.1% vs 5.8% (p<0.0001), including 5 complete responses. Early positive OS trend. First-in-class PKC-inhibitor combination in 1L HLA-A*02:01-negative metastatic uveal melanoma (Phase 2/3, n≈313).",
    regulatoryNextStep: "NDA submission completed in Q3 2026 to support potential US approval, filed under the FDA Oncology Center of Excellence RTOR programme (IDEAYA Q3 2026 business update, 3 Nov 2026). FDA acceptance, priority review and a PDUFA date have not been announced and are deliberately left empty.",
    sources: [
      { type: "Press release", url: "https://ir.ideayabio.com/2026-04-13-IDEAYA-Biosciences-and-Servier-Announce-Positive-Topline-Results-from-Phase-2-3-Registrational-Trial-OptimUM-02-of-Darovasertib-in-Combination-with-Crizotinib-in-First-line-HLA-A-02-01-Negative-Metastatic-Uveal-Melanoma", label: "IDEAYA / Servier topline, 13 Apr 2026" },
      { type: "Trade press", url: "https://www.ophthalmologytimes.com/view/darovasertib-combination-progression-free-survival-benefit-uveal-melanoma", label: "Ophthalmology Times" },
      { type: "Earnings", url: "https://ir.ideayabio.com/2026-11-03-IDEAYA-Biosciences-Reports-Financial-Results-for-the-Third-Quarter-2026-and-Provides-a-Business-Update", label: "IDEAYA Q3 2026 business update, 3 Nov 2026 (issuer IR page)" }
    ],
    asOf: "2026-11-11",
    verified: false,
    flags: "The April 2026 efficacy data is well sourced and unchanged. verified:false applies to the filing line only, and stands until an FDA acceptance is announced. One thing to check: IDEAYA's ESMO release of 19 Oct 2026 still said it expected to complete the NDA submission in the second half of 2026, which sits oddly with a Q3 completion announced on 3 Nov — read the 3 Nov release directly before this goes live.",
    regulatory: {
      filingStatus: "Filed (NDA submitted Q3 2026, under RTOR)",
      pdufaDate: null,
      designations: [],
      adcom: null,
      outcome: "Pending"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "imcgp100-202",
    drug: "Tebentafusp-tebn (Kimmtrak, gp100xCD3 ImmTAC T-cell engager) vs investigator's choice",
    sponsors: ["Immunocore"],
    trialName: "IMCgp100-202",
    nctId: "NCT03070392",
    modality: "Other",
    setting: "1L metastatic",
    tumourType: "Uveal",
    status: "Reported Positive",
    readoutDate: "2026-01-01",
    isExpected: false,
    primaryEndpoint: "Overall survival (OS)",
    endpointMet: "Yes",
    keyData: "The first (and so far only) therapy to improve OS in metastatic uveal melanoma. Primary analysis (2021) OS HR 0.51. 5-year OS update (2026): 16% vs 8% — the longest randomised OS follow-up in this disease. HLA-A*02:01-positive patients only.",
    regulatoryNextStep: "Already approved — FDA full approval Jan 2022, the first therapy for metastatic uveal melanoma and the first approved TCR (ImmTAC) therapeutic. Mature data reinforce label / guideline positioning.",
    sources: [
      { type: "Journal", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2103485", label: "NEJM — primary OS (2021)" },
      { type: "Journal", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2304753", label: "NEJM — 3-year OS (2023)" },
      { type: "Trade press", url: "https://www.targetedonc.com/view/tebentafusp-tebn-doubles-5-year-survival-in-metastatic-uveal-melanoma", label: "Targeted Oncology — 5-year OS (2026)" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Approved since 2022; included for its recent 5-year OS update (exact 2026 update date approximate). Setting recorded as 1L metastatic because IMCgp100-202 enrolled previously untreated patients; that reading comes from the trial description already held here, not from a fresh check of the registry eligibility criteria.",
    regulatory: {
      filingStatus: "Approved",
      pdufaDate: null,
      designations: [],
      adcom: null,
      outcome: "Approved"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "checkmate-238",
    drug: "Nivolumab (Opdivo) vs ipilimumab (Yervoy)",
    sponsors: ["Bristol Myers Squibb"],
    trialName: "CheckMate 238",
    nctId: "NCT02388906",
    modality: "Checkpoint inhibitor",
    setting: "Adjuvant",
    tumourType: "Cutaneous",
    status: "Reported Positive",
    readoutDate: "2025-10-01",
    isExpected: false,
    primaryEndpoint: "Recurrence-free survival (RFS)",
    endpointMet: "Yes",
    keyData: "9-year final analysis: median RFS 61.1 vs 24.2 months; HR 0.76 (95% CI 0.63–0.90); 9-year RFS 44% vs 37%. Mature confirmatory follow-up of an already-approved adjuvant regimen. Presented at ESMO 2025 and published in NEJM.",
    regulatoryNextStep: "No new filing — adjuvant nivolumab already approved in this setting. Long-term data reinforce the label and guidelines.",
    sources: [
      { type: "Journal", url: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2504966", label: "NEJM — 9-year follow-up" },
      { type: "Medical meeting", url: "https://ascopost.com/news/october-2025/nivolumab-vs-ipilimumab-in-resected-stage-iii-or-iv-melanoma-9-year-follow-up-of-checkmate-238/", label: "The ASCO Post, Oct 2025" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Mature confirmatory follow-up of an approved regimen, not a new primary readout. NCT ID from publications (not tool-verified this pass).",
    regulatory: {
      filingStatus: "Approved",
      pdufaDate: null,
      designations: [],
      adcom: null,
      outcome: "Approved"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "ignyte-rp1",
    drug: "Vusolimogene oderparepvec (Tudriqev / RP1) + nivolumab",
    sponsors: ["Replimune"],
    trialName: "IGNYTE",
    nctId: "NCT03767348",
    modality: "Oncolytic virus",
    setting: "2L+ metastatic",
    tumourType: "Cutaneous",
    status: "Reported Positive",
    readoutDate: "2025-06-01",
    isExpected: false,
    primaryEndpoint: "Objective response rate (ORR) by independent review",
    endpointMet: "Yes",
    keyData: "Anti-PD-1-failed melanoma cohort: ORR ~33% (CR ~15%), median DOR ~33.7 months (JCO 2025). FDA label (efficacy-evaluable population): ORR 24.2%, median DOR 14.1 months. Basis for accelerated approval.",
    regulatoryNextStep: "FDA accelerated approval granted 6 Aug 2026 (Tudriqev + nivolumab) after a contentious path — two Complete Response Letters (Jul 2025, Apr 2026) and a favourable advisory-committee vote (30 Jul 2026). Continued approval is contingent on the confirmatory IGNYTE-3 trial.",
    sources: [
      { type: "FDA", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-vusolimogene-oderparepvec-wtpg-combination-nivolumab-melanoma", label: "FDA approval notice, Aug 2026" },
      { type: "Press release", url: "https://ir.replimune.com/news-releases/news-release-details/replimune-announces-fda-accelerated-approval-tudriqevtm", label: "Replimune approval release" },
      { type: "Journal", url: "https://ascopubs.org/doi/10.1200/JCO-25-01346", label: "IGNYTE, JCO 2025" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Two ORR figures circulate: 24.2% (FDA label population) vs ~33% (JCO cohort) — different denominators; do not blend. Exact original readout date approximate (JCO 2025).",
    regulatory: {
      filingStatus: "Approved (accelerated)",
      pdufaDate: "2026-04-10",
      designations: ["Breakthrough Therapy", "Accelerated Approval"],
      adcom: "CTGT AdCom voted in favour, 30 Jul 2026",
      outcome: "Approved"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "nadina",
    drug: "Neoadjuvant ipilimumab (Yervoy) + nivolumab (Opdivo) vs adjuvant nivolumab",
    sponsors: ["Netherlands Cancer Institute", "Melanoma Institute Australia", "Bristol Myers Squibb"],
    trialName: "NADINA",
    nctId: "NCT04949113",
    modality: "Checkpoint inhibitor",
    setting: "Neoadjuvant",
    tumourType: "Cutaneous",
    status: "Reported Positive",
    readoutDate: "2024-11-07",
    isExpected: false,
    primaryEndpoint: "Event-free survival (EFS)",
    endpointMet: "Yes",
    keyData: "12-month EFS 83.7% (neoadjuvant ipi+nivo) vs 57.2% (adjuvant nivo); HR 0.32 (99.9% CI 0.15–0.66). Major pathologic response 59%. Grade ≥3 treatment-related AEs 29.7% vs 14.7%. Practice-changing. Presented at ASCO 2024; published NEJM Nov 2024.",
    regulatoryNextStep: "Uses already-approved agents, so no new drug approval — but the data are reshaping guidelines toward a neoadjuvant standard of care in resectable stage III melanoma.",
    sources: [
      { type: "Journal", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2402604", label: "NEJM" },
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT04949113", label: "ClinicalTrials.gov — NADINA" },
      { type: "Trade press", url: "https://www.onclive.com/view/neoadjuvant-nivolumab-ipilimumab-new-standard-of-care-for-stage-iii-melanoma", label: "OncLive" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Readout (ASCO 2024 / NEJM Nov 2024) predates the tracker's 12-month window but is included as the landmark neoadjuvant Phase 3."
  },

  /* ---------------------------------------------------------------- */
  {
    id: "relativity-098",
    drug: "Nivolumab (Opdivo) + relatlimab vs nivolumab",
    sponsors: ["Bristol Myers Squibb"],
    trialName: "RELATIVITY-098",
    nctId: "NCT05002569",
    modality: "Checkpoint inhibitor",
    setting: "Adjuvant",
    tumourType: "Cutaneous",
    status: "Reported Negative",
    readoutDate: "2025-06-01",
    isExpected: false,
    primaryEndpoint: "Recurrence-free survival (RFS)",
    endpointMet: "No",
    keyData: "Primary endpoint missed. RFS HR 1.01 (95% CI 0.83–1.22; P=0.928) — no benefit from adding relatlimab in the adjuvant setting. Median RFS not reached (combo) vs 33.1 months (nivolumab). n≈547 vs 546. Presented at ASCO 2025; published in Nature Medicine.",
    regulatoryNextStep: "No filing in this setting — trial failed its primary endpoint. (Opdualag remains approved in 1L metastatic melanoma via the separate RELATIVITY-047 trial.)",
    sources: [
      { type: "Journal", url: "https://www.nature.com/articles/s41591-025-04032-8", label: "Nature Medicine (2025)" },
      { type: "Medical meeting", url: "https://dailynews.ascopubs.org/do/nivolumab-relatlimab-fails-improve-rfs-resectable-stage-iii-iv-melanoma-phase-3", label: "ASCO Daily News, 2025" },
      { type: "Trade press", url: "https://www.onclive.com/view/adjuvant-nivolumab-plus-relatlimab-misses-the-mark-in-resected-stage-iii-to-iv-melanoma", label: "OncLive" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: ""
  },

  /* ---------------------------------------------------------------- */
  {
    id: "tilvance-301",
    drug: "Lifileucel (Amtagvi) + pembrolizumab",
    sponsors: ["Iovance Biotherapeutics"],
    trialName: "TILVANCE-301",
    nctId: "NCT05727904",
    modality: "TIL cell therapy",
    setting: "1L metastatic",
    tumourType: "Cutaneous",
    status: "Expected",
    readoutDate: "2028-03-01",
    isExpected: true,
    primaryEndpoint: "Objective response rate (ORR) and progression-free survival (PFS), co-primary",
    endpointMet: "Pending",
    keyData: "Confirmatory Phase 3 of lifileucel + pembrolizumab vs pembrolizumab in untreated advanced melanoma (target n≈670). No efficacy data yet. An early ORR interim is built into the design, but Iovance has not committed to a specific interim readout date. Q3 2026 update (5 Nov 2026): enrolment accelerating at more than 80 sites across the US, Canada, Europe and Asia-Pacific; the interim ORR analysis for a potential first-line sBLA is confirmed as a plan with no timing given. Registry primary completion Mar 2028.",
    regulatoryNextStep: "Serves as the confirmatory trial for Amtagvi's accelerated approval and could support a 1L label expansion (sBLA) via the ORR interim. Amtagvi received FDA accelerated approval (Feb 2024) for advanced melanoma after anti-PD-1 (and BRAF/MEK if BRAF-mutant).",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT05727904", label: "ClinicalTrials.gov — TILVANCE-301" },
      { type: "Earnings", url: "https://www.globenewswire.com/news-release/2026/08/06/3340124/0/en/Iovance-Biotherapeutics-Reports-Record-Second-Quarter-2026-Revenue-of-99M-Business-Achievements-and-Corporate-Updates.html", label: "Iovance Q2 2026 update" },
      { type: "Trade press", url: "https://www.targetedonc.com/view/phase-3-trial-of-lifileucel-pembrolizumab-in-frontline-advanced-melanoma-begins", label: "Targeted Oncology" },
      { type: "Earnings", url: "https://finviz.com/news/416728/iovance-biotherapeutics-reports-record-third-quarter-2026-revenue-of-122m-business-achievements-and-corporate-updates", label: "Iovance Q3 2026 update, 5 Nov 2026 (syndicated copy — issuer IR page not reached)" }
    ],
    asOf: "2026-11-11",
    verified: true,
    flags: "Readout timing is company-guided / registry-based; Iovance has not committed to a firm interim date. Note what the Q3 2026 release did NOT repeat: earlier guidance about completing enrolment in 2026, and a possible H2 2027 approval, were both absent. Treat the absence as a signal to watch, not as a change of plan. The Q3 source cited here is a syndicated copy; swap it for the Iovance IR URL when you have it.",
    regulatory: {
      filingStatus: "Approved (2L+)",
      pdufaDate: null,
      designations: ["Accelerated Approval", "RMAT", "Fast Track", "Priority Review", "Orphan Drug"],
      adcom: null,
      outcome: "Approved"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "starboard",
    drug: "Encorafenib (Braftovi) + binimetinib (Mektovi) + pembrolizumab (Keytruda) vs placebo + pembrolizumab",
    sponsors: ["Pfizer", "Merck"],
    trialName: "STARBOARD",
    nctId: "NCT04657991",
    modality: "Targeted therapy",
    setting: "1L metastatic",
    tumourType: "Cutaneous",
    status: "Reported Positive",
    readoutDate: "2026-10-23",
    isExpected: false,
    primaryEndpoint: "Objective response by BICR (per current registry; earlier design was PFS-based)",
    endpointMet: "Yes",
    keyData: "Final analysis presented at ESMO 2026 (abstract 2071O, 23 Oct 2026, Schadendorf). Confirmed ORR by BICR 70.0% (95% CI 60.9–77.8) vs 32.7%; odds ratio 4.903; CR 10.9% vs 4.5%. Median PFS by BICR 33.0 months (95% CI 20.0–NE) vs 3.4 months (2.2–8.3); HR 0.33 (90% CI 0.24–0.46), one-sided p<0.0001. Overall survival immature and not statistically significant: HR 0.71 (90% CI 0.48–1.05), medians not reached. BRAF/MEK/PD-1 triplet in 1L BRAF V600E/K-mutant melanoma.",
    regulatoryNextStep: "No filing expected from this trial. Pfizer's own ESMO communication describes STARBOARD as a \"non-registrational Phase 3 trial\" of an \"investigational triplet combination regimen\". No FDA or EMA submission found. A positive Phase 3 that is not intended to support registration.",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT04657991", label: "ClinicalTrials.gov — STARBOARD" },
      { type: "Journal", url: "https://www.ejcancer.com/article/S0959-8049(24)01201-2/fulltext", label: "Safety lead-in, EJC 2024" },
      { type: "Trade press", url: "https://www.cancernetwork.com/view/encorafenib-binimetinib-plus-pembrolizumab-extends-pfs-in-braf-v600-melanoma", label: "CancerNetwork, 27 Oct 2026" },
      { type: "Press release", url: "https://www.pfizer.com/news/press-release/press-release-detail/pfizer-advances-todays-cancer-care-and-tomorrows-potential", label: "Pfizer ESMO 2026 preview release, 28 Sep 2026 (non-registrational wording)" }
    ],
    asOf: "2026-11-11",
    verified: false,
    flags: "Efficacy comes from a single trade outlet (CancerNetwork, 27 Oct 2026); the ESMO abstract 2071O page could not be reached, so nothing here is confirmed against the abstract or a Pfizer data release. Hence verified:false. The 23 Oct 2026 presentation date and the presenter come from desk research, not from a fetched primary page. One other outlet reportedly gave the PFS hazard ratio as 0.38 rather than 0.33 — unverified, but do not treat 0.33 as settled. Enrolment reported as 220 randomised in trade press vs 257 in the ClinicalTrials.gov registry, and both are well below the ~600 originally planned. Registry still reads ACTIVE_NOT_RECRUITING with primary completion 2026-10-30 and no results posted. The previous readoutDate of 31 Aug 2026 could not be traced to any source and has been replaced — worth knowing where it came from, as it was the only unsourced date in this file."
  },

  /* ---------------------------------------------------------------- */
  {
    id: "ignyte-3",
    drug: "Vusolimogene oderparepvec (Tudriqev / RP1) + nivolumab",
    sponsors: ["Replimune"],
    trialName: "IGNYTE-3",
    nctId: "NCT06264180",
    modality: "Oncolytic virus",
    setting: "2L+ metastatic",
    tumourType: "Cutaneous",
    status: "Expected",
    readoutDate: "2030-09-30",
    isExpected: true,
    primaryEndpoint: "Overall survival (OS)",
    endpointMet: "Pending",
    keyData: "Confirmatory Phase 3: RP1 + nivolumab vs physician's choice in advanced melanoma progressing after anti-PD-1 (±anti-CTLA-4); ~400 patients. No data yet. OS assessed to ~2029; registry primary completion Sep 2030.",
    regulatoryNextStep: "This is the confirmatory trial required to convert RP1 / Tudriqev's Aug 2026 accelerated approval to full approval.",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT06264180", label: "ClinicalTrials.gov — IGNYTE-3" },
      { type: "Trade press", url: "https://www.fiercepharma.com/pharma/replimune-secures-fda-approval-melanoma-therapy-tudriqev-after-long-regulatory-battle", label: "Fierce Pharma" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Readout year is registry / company-guided (framed 2029–2030)."
  },

  /* ---------------------------------------------------------------- */
  {
    id: "optimum-10",
    drug: "Neoadjuvant darovasertib (IDE196) vs immediate local therapy",
    sponsors: ["IDEAYA Biosciences", "Servier"],
    trialName: "OptimUM-10",
    nctId: "NCT07015190",
    modality: "Targeted therapy",
    setting: "Neoadjuvant",
    tumourType: "Uveal",
    status: "Discontinued",
    readoutDate: "2026-11-03",
    isExpected: false,
    primaryEndpoint: "Eye / vision-preservation and tumour-response endpoints (exact primary endpoint not verified)",
    endpointMet: "Not reported",
    keyData: "Closed without reading out. IDEAYA's Q3 2026 business update (3 Nov 2026) says the company \"has decided to stop enrollment and close the Phase 3 OptimUM-010 trial\", citing site activation and enrolment problems. Design as planned: neoadjuvant darovasertib vs immediate local therapy (plaque brachytherapy / enucleation) in primary non-metastatic uveal melanoma, ~520 patients, 2:1, enrolling from Jan 2026, registry primary completion ~Oct 2030. No efficacy data will come from this trial. The supporting Phase 2 interim (Sept 2025), which showed tumour shrinkage and vision preservation, is unaffected and stands.",
    regulatoryNextStep: "Nothing further from this trial. The neoadjuvant programme is not dead — IDEAYA's separate adjuvant Phase 3 in primary uveal melanoma, OptimUM-11, dosed its first patient in Sept 2026 and is tracked here as its own entry.",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT07015190", label: "ClinicalTrials.gov — OptimUM-10 (still reads RECRUITING; registry lags the closure)" },
      { type: "Press release", url: "https://ir.ideayabio.com/2025-09-08-IDEAYA-Biosciences-Announces-Positive-Interim-Phase-2-Data-for-Darovasertib-in-the-Neoadjuvant-Setting-of-Primary-Uveal-Melanoma", label: "IDEAYA Phase 2 interim, Sept 2025" },
      { type: "Earnings", url: "https://ir.ideayabio.com/2026-11-03-IDEAYA-Biosciences-Reports-Financial-Results-for-the-Third-Quarter-2026-and-Provides-a-Business-Update", label: "IDEAYA Q3 2026 business update, 3 Nov 2026 — the closure announcement (issuer IR page)" }
    ],
    asOf: "2026-11-11",
    verified: false,
    flags: "The closure rests on a single sentence in one release, and that page was reached through automated summarisation rather than read word for word — hence verified:false. The ClinicalTrials.gov record still reads RECRUITING (last updated 6 May 2026), so do not treat the registry as confirmation either way; expect it to move to WITHDRAWN or TERMINATED in due course. readoutDate holds the date the closure was announced, not a readout. Exact primary endpoint wording was never verified from the registry outcomes section and now never will be from this trial.",
    regulatory: null
  },

  /* ---------------------------------------------------------------- */
  {
    id: "reveal-rp2",
    drug: "RP2 (anti-CTLA-4-armed oncolytic) + nivolumab vs ipilimumab + nivolumab",
    sponsors: ["Replimune"],
    trialName: "REVEAL (RP2-202)",
    nctId: "NCT06581406",
    modality: "Oncolytic virus",
    setting: "1L metastatic",
    tumourType: "Uveal",
    status: "Expected",
    readoutDate: "TBD",
    isExpected: true,
    primaryEndpoint: "Overall survival (OS) and progression-free survival (PFS)",
    endpointMet: "Pending",
    keyData: "Registration-directed Phase 2/3 of RP2 + nivolumab vs ipilimumab + nivolumab in checkpoint-naïve metastatic uveal melanoma (~280 patients). First patients enrolled Jan 2025; no efficacy data yet. (Phase 1 context only: RP2 ± nivolumab early ORR ~19–29% across solid tumours.)",
    regulatoryNextStep: "Registration-directed; no FDA filing or designation milestones confirmed for RP2 in uveal melanoma yet.",
    sources: [
      { type: "Press release", url: "https://www.globenewswire.com/news-release/2025/01/08/3006234/0/en/Replimune-Announces-RP2-Development-Program-Advances-with-First-Patients-Enrolled-in-Metastatic-Uveal-Melanoma-and-Hepatocellular-Carcinoma-Clinical-Trials.html", label: "Replimune, Jan 2025" },
      { type: "Medical meeting", url: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.TPS9597", label: "ASCO 2025 trial-in-progress" }
    ],
    asOf: "2026-08-27",
    verified: false,
    flags: "NCT ID and design from an ASCO abstract / company page (not independently registry-verified this pass). RP2 mechanism/INN and any FDA designations unverified. No readout date guided."
  },

  /* ---------------------------------------------------------------- */
  {
    id: "optimum-11",
    drug: "Adjuvant darovasertib (IDE196) + crizotinib vs observation",
    sponsors: ["IDEAYA Biosciences", "Servier"],
    trialName: "OptimUM-11",
    nctId: "NCT07804186",
    modality: "Targeted therapy",
    setting: "Adjuvant",
    tumourType: "Uveal",
    status: "Expected",
    readoutDate: "TBD",
    isExpected: true,
    primaryEndpoint: "Relapse-free survival (RFS)",
    endpointMet: "Pending",
    keyData: "Global Phase 3 registrational trial. First patient dosed 9 Sep 2026. Patients who have completed primary local therapy and are at increased risk of metastasis are randomised 1:1 to darovasertib + crizotinib for 12 months or to observation; approximately 450 patients. No efficacy data yet, and none expected for years — the registry follows both arms for about five years. This is the adjuvant companion to OptimUM-02 (metastatic, positive) and is now the live half of the primary-uveal-melanoma programme, since the neoadjuvant OptimUM-10 was closed in Nov 2026.",
    regulatoryNextStep: "Registrational. No filing possible until RFS reads out. Darovasertib + crizotinib is separately under FDA review in metastatic uveal melanoma via the OptimUM-02 NDA, so a positive OptimUM-11 would be a label expansion into the adjuvant setting rather than a first approval.",
    sources: [
      { type: "Press release", url: "https://ir.ideayabio.com/2026-09-09-IDEAYA-Biosciences-and-Servier-Announce-First-Patient-Dosed-in-OptimUM-11-Global-Phase-3-Registrational-Trial-of-Darovasertib-and-Crizotinib-as-Adjuvant-Therapy-for-Subjects-with-Uveal-Melanoma", label: "IDEAYA / Servier, first patient dosed, 9 Sep 2026 (issuer IR page)" },
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT07804186", label: "ClinicalTrials.gov — OptimUM-11" }
    ],
    asOf: "2026-11-11",
    verified: true,
    flags: "No readout date is guided and none is recorded, rather than guessing one — the registry gives an approximately five-year follow-up from a Sep 2026 start, which implies the early 2030s, but that is a follow-up period, not a readout date. One mismatch worth knowing: the 12-month treatment duration comes from the press release only; the registry describes up to five years of follow-up on both arms and does not state a treatment duration. Registry status RECRUITING, enrolment 450 and the Sep 2026 start are all marked estimated.",
    regulatory: null
  },

  /* ---------------------------------------------------------------- */
  {
    id: "hbi-8000-303",
    drug: "HBI-8000 (tucidinostat, oral HDAC inhibitor) + nivolumab vs placebo + nivolumab",
    sponsors: ["HUYABIO International"],
    trialName: "HBI-8000-303",
    nctId: "NCT04674683",
    modality: "Other",
    setting: "1L metastatic",
    tumourType: "Cutaneous",
    status: "Reported Positive",
    readoutDate: "2026-07-14",
    isExpected: false,
    primaryEndpoint: "Progression-free survival (PFS)",
    endpointMet: "Yes",
    keyData: "Topline announced 14 Jul 2026; full data presented at ESMO 2026 as late-breaker LBA54 (oral proffered paper, 23 Oct 2026, Nikhil Khushalani, Moffitt). Median PFS 11.7 vs 7.4 months. The hazard ratio was not in the July release and came only with the company's release of 22 Oct 2026: HR 0.73 (CI 0.56-0.95), p=0.014 — a 27% reduction in the risk of progression. ORR was not reported. Overall survival is immature with follow-up ongoing. 404 patients randomised across 15 countries. An epigenetic agent added to a checkpoint inhibitor in PD-1/PD-L1-naive advanced melanoma — a mechanism no other trial in this tracker tests.",
    regulatoryNextStep: "No US filing announced. The 22 Oct 2026 release says the company plans to share the data with the FDA, which is not the same as a submission. HBI-8000 is already approved for lymphoma in China and Japan, so a US melanoma filing would be a new indication in a new territory. Nothing to track in the FDA pipeline until a submission is confirmed.",
    sources: [
      { type: "Press release", url: "https://huyabio.com/huyabio-international-delivers-significant-landmark-phase-3-results-in-advanced-melanoma/", label: "HUYABIO topline, 14 Jul 2026 (company site)" },
      { type: "Press release", url: "https://www.prnewswire.com/news-releases/huyabio-international-announces-hbi-8000-and-nivolumab-combination-reduces-the-risk-of-disease-progression-by-27-in-patients-with-advanced-melanoma-in-phase-3-trial-302917490.html", label: "HUYABIO, hazard ratio and ESMO data, 22 Oct 2026" },
      { type: "Press release", url: "https://www.prnewswire.com/news-releases/huyabio-international-announces-pivotal-data-for-hbi-8000-in-advanced-melanoma-selected-for-late-breaking-presentation-at-esmo-congress-2026-302892293.html", label: "HUYABIO, LBA54 selection, 29 Sep 2026" },
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT04674683", label: "ClinicalTrials.gov — HBI-8000-303" }
    ],
    asOf: "2026-11-11",
    verified: false,
    flags: "This readout was missed at build time, not in a refresh window — it was announced 14 Jul 2026, six weeks before the tracker's original as-of date of 27 Aug 2026. Two things to check before quoting these figures publicly. First, the confidence interval on the hazard ratio was reported as a 96% interval, not the usual 95%; that is unusual enough that it may be a transcription error in the release or in the reading of it, so read the 22 Oct page directly before using it. Second, the company's own pages were reached through automated summarisation rather than read word for word, so the numbers are company-sourced but not verbatim-checked — hence verified:false. Registry enrolment reads 450 against 404 randomised in the releases; the releases are the better number for who was actually treated. The July release also claimed 'a statistically significant improvement in progression-free survival of 58%' without defining it; 11.7/7.4 = 1.58, so it most likely means the median PFS was 58% longer, which is not a risk reduction and should not be confused with the 27% from the hazard ratio [LOW - this is my reading, not the company's wording]. No ESMO-hosted abstract page for LBA54 could be found.",
    regulatory: null
  }

];
