/* =====================================================================
   Melanoma Phase 3 Readout & FDA Approval Tracker — DATA
   ---------------------------------------------------------------------
   This is the ONLY file you edit to add or update readouts.
   See ADD-READOUT.md for the step-by-step workflow and field rules.

   Rules of the road:
   - Every entry MUST cite at least one real source URL.
   - NEVER invent hazard ratios, dates, endpoints, or NCT IDs.
     Unknown -> null or a clear "not disclosed" string, and set verified:false.
   - Use the exact modality / setting / status strings from the lists below
     (the filters key off them).

   MODALITIES: mRNA/neoantigen vaccine | TIL cell therapy | Checkpoint inhibitor
               | Oncolytic virus | Targeted therapy | Other (T-cell engager)
   SETTINGS:   Adjuvant | Neoadjuvant | 1L metastatic | 2L+ metastatic | Uveal
   STATUS:     Reported Positive | Reported Negative | Mixed | Expected
   ===================================================================== */

const DATA_AS_OF = "2026-08-27";

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
    status: "Reported Positive",
    readoutDate: "2026-08-19",
    isExpected: false,
    primaryEndpoint: "Recurrence-free survival (RFS)",
    endpointMet: "Yes",
    keyData: "Topline only: RFS (primary) and DMFS (key secondary) both statistically significant and clinically meaningful vs pembrolizumab alone. Hazard ratios not yet disclosed — full data due at an upcoming medical meeting. First positive Phase 3 for an mRNA individualised neoantigen therapy. (~1,137 patients randomised 2:1.)",
    regulatoryNextStep: "Companies will present full data at an international medical meeting and engage regulators on filing submissions. Not yet filed.",
    sources: [
      { type: "Press release", url: "https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/", label: "Merck / Moderna joint release, 19 Aug 2026" },
      { type: "Press release", url: "https://news.modernatx.com/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-plus-keytruda-met-endpoints-of-rfs-and-dmfs-in-melanoma", label: "Moderna newsroom" },
      { type: "Medical meeting", url: "https://ascopost.com/news/august-2026/interpath-001-trial-of-mrna-based-individualized-neoantigen-therapy-meets-primary-and-key-secondary-endpoints-in-patients-with-high-risk-resected-melanoma/", label: "The ASCO Post" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Hazard ratios not disclosed at topline — any HR ~0.51 that circulates refers to the earlier Phase 2b KEYNOTE-942, not this trial. Enrolment reported as ~1,137 randomised vs 1,089 in the ClinicalTrials.gov registry.",
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
    setting: "Uveal",
    status: "Reported Positive",
    readoutDate: "2026-04-13",
    isExpected: false,
    primaryEndpoint: "Progression-free survival (PFS) by BICR",
    endpointMet: "Yes",
    keyData: "Median PFS 6.9 vs 3.1 months; HR 0.42 (95% CI 0.30–0.59; p<0.0001). ORR 37.1% vs 5.8% (p<0.0001), including 5 complete responses. Early positive OS trend. First-in-class PKC-inhibitor combination in 1L HLA-A*02:01-negative metastatic uveal melanoma (Phase 2/3, n≈313).",
    regulatoryNextStep: "NDA submission planned for H2 2026 to support US accelerated approval; FDA endorsed the Phase 3 design. Not yet filed.",
    sources: [
      { type: "Press release", url: "https://ir.ideayabio.com/2026-04-13-IDEAYA-Biosciences-and-Servier-Announce-Positive-Topline-Results-from-Phase-2-3-Registrational-Trial-OptimUM-02-of-Darovasertib-in-Combination-with-Crizotinib-in-First-line-HLA-A-02-01-Negative-Metastatic-Uveal-Melanoma", label: "IDEAYA / Servier topline, 13 Apr 2026" },
      { type: "Trade press", url: "https://www.ophthalmologytimes.com/view/darovasertib-combination-progression-free-survival-benefit-uveal-melanoma", label: "Ophthalmology Times" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "",
    regulatory: {
      filingStatus: "Filing planned (H2 2026)",
      pdufaDate: null,
      designations: [],
      adcom: null,
      outcome: "Pending"
    }
  },

  /* ---------------------------------------------------------------- */
  {
    id: "imcgp100-202",
    drug: "Tebentafusp-tebn (Kimmtrak) vs investigator's choice",
    sponsors: ["Immunocore"],
    trialName: "IMCgp100-202",
    nctId: "NCT03070392",
    modality: "Other (T-cell engager)",
    setting: "Uveal",
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
    flags: "Approved since 2022; included for its recent 5-year OS update (exact 2026 update date approximate).",
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
    status: "Expected",
    readoutDate: "2028-03-01",
    isExpected: true,
    primaryEndpoint: "Objective response rate (ORR) and progression-free survival (PFS), co-primary",
    endpointMet: "Pending",
    keyData: "Confirmatory Phase 3 of lifileucel + pembrolizumab vs pembrolizumab in untreated advanced melanoma (target n≈670). No efficacy data yet. An early ORR interim is built into the design, but Iovance has not committed to a specific interim readout date (as of Q2 2026). Registry primary completion Mar 2028.",
    regulatoryNextStep: "Serves as the confirmatory trial for Amtagvi's accelerated approval and could support a 1L label expansion (sBLA) via the ORR interim. Amtagvi received FDA accelerated approval (Feb 2024) for advanced melanoma after anti-PD-1 (and BRAF/MEK if BRAF-mutant).",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT05727904", label: "ClinicalTrials.gov — TILVANCE-301" },
      { type: "Earnings", url: "https://www.globenewswire.com/news-release/2026/08/06/3340124/0/en/Iovance-Biotherapeutics-Reports-Record-Second-Quarter-2026-Revenue-of-99M-Business-Achievements-and-Corporate-Updates.html", label: "Iovance Q2 2026 update" },
      { type: "Trade press", url: "https://www.targetedonc.com/view/phase-3-trial-of-lifileucel-pembrolizumab-in-frontline-advanced-melanoma-begins", label: "Targeted Oncology" }
    ],
    asOf: "2026-08-27",
    verified: true,
    flags: "Readout timing is company-guided / registry-based; Iovance has not committed to a firm interim date.",
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
    status: "Expected",
    readoutDate: "2026-08-31",
    isExpected: true,
    primaryEndpoint: "Objective response by BICR (per current registry; earlier design was PFS-based)",
    endpointMet: "Pending",
    keyData: "BRAF/MEK/PD-1 triplet in 1L BRAF V600E/K-mutant melanoma (n≈257). No efficacy readout yet — only a safety lead-in has been published (EJC 2024). Registry primary completion Jan 2026, study completion Aug 2026.",
    regulatoryNextStep: "None yet — awaiting topline.",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT04657991", label: "ClinicalTrials.gov — STARBOARD" },
      { type: "Journal", url: "https://www.ejcancer.com/article/S0959-8049(24)01201-2/fulltext", label: "Safety lead-in, EJC 2024" }
    ],
    asOf: "2026-08-27",
    verified: false,
    flags: "No company-confirmed topline date — registry dates (primary completion Jan 2026) have passed, but one third-party tracker cited Mar 2027. Registered enrolment (~257) is well below the ~600 originally planned, and the registered primary endpoint is now ORR by BICR (earlier design was PFS). Verify current status with Pfizer."
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
    status: "Expected",
    readoutDate: "2030-10-01",
    isExpected: true,
    primaryEndpoint: "Eye / vision-preservation and tumour-response endpoints (exact primary endpoint not verified)",
    endpointMet: "Pending",
    keyData: "Phase 3 of neoadjuvant darovasertib vs immediate local therapy (plaque brachytherapy / enucleation) in primary non-metastatic uveal melanoma (~520 patients, 2:1). Started enrolling Jan 2026. Long-horizon: registry primary completion ~Oct 2030. Supporting Phase 2 interim (Sept 2025) showed tumour shrinkage and vision preservation.",
    regulatoryNextStep: "Registration-enabling; a separate global adjuvant primary-uveal-melanoma Phase 3 is also company-guided to launch in 2026.",
    sources: [
      { type: "Trial registry", url: "https://clinicaltrials.gov/study/NCT07015190", label: "ClinicalTrials.gov — OptimUM-10" },
      { type: "Press release", url: "https://ir.ideayabio.com/2025-09-08-IDEAYA-Biosciences-Announces-Positive-Interim-Phase-2-Data-for-Darovasertib-in-the-Neoadjuvant-Setting-of-Primary-Uveal-Melanoma", label: "IDEAYA Phase 2 interim, Sept 2025" }
    ],
    asOf: "2026-08-27",
    verified: false,
    flags: "Exact primary endpoint wording not verified from the registry outcomes section. Long-horizon readout (~2030)."
  },

  /* ---------------------------------------------------------------- */
  {
    id: "reveal-rp2",
    drug: "RP2 (anti-CTLA-4-armed oncolytic) + nivolumab vs ipilimumab + nivolumab",
    sponsors: ["Replimune"],
    trialName: "REVEAL (RP2-202)",
    nctId: "NCT06581406",
    modality: "Oncolytic virus",
    setting: "Uveal",
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
  }

];
