export type SupportedLanguage = 'en' | 'zh-TW' | 'zh-CN';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  shortLabel: string;
  flag: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    overview: string;
    howItWorks: string;
    solutions: string;
    technology: string;
    deepTechBadge: string;
    techSpec: string;
    bookDemo: string;
    readWhitepaperPdf: string;
    language: string;
    selectLanguage: string;
  };
  hero: {
    badgePre: string;
    badgePost: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bookDemoBtn: string;
    seeHowItWorksBtn: string;
    checks: {
      zeroPlaintext: string;
      actionFirewall: string;
      preservePrivilege: string;
      subSecondSpeed: string;
    };
    vaultLabel: string;
    metrics: {
      confidentiality: { label: string; value: string; desc: string };
      speedOverhead: { label: string; value: string; desc: string };
      toolSafety: { label: string; value: string; desc: string };
      enterpriseScale: { label: string; value: string; desc: string };
    };
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      stepNumber: string;
      title: string;
      tag: string;
      description: string;
      benefit: string;
    }>;
    visualProof: {
      eyebrow: string;
      title: string;
      toggleProtected: string;
      toggleExposed: string;
      cloudGpuTitle: string;
      cloakedTensors: string;
      plaintextLeak: string;
      cloakedComment: string;
      cloakedPassed: string;
      exposedComment: string;
      exposedWarn: string;
      enterpriseOutputTitle: string;
      decryptedBadge: string;
      auditPassed: string;
      latency: string;
      sampleOutput: string;
    };
  };
  problemAbyss: {
    eyebrow: string;
    title: string;
    subtitle: string;
    horsemen: Array<{
      horseman: string;
      title: string;
      description: string;
      riskBadge: string;
    }>;
    threatSim: {
      eyebrow: string;
      title: string;
      toggleStandard: string;
      toggleSafeCompute: string;
      step1Title: string;
      step1Badge: string;
      step1Payload: string;
      step1Comment: string;
      step2Title: string;
      step2RawBadge: string;
      step2RawDesc: string;
      step2SafeBadge: string;
      step2SafeDesc: string;
      step3Title: string;
      step3LeakTitle: string;
      step3LeakDesc: string;
      step3SafeTitle: string;
      step3SafeDesc: string;
    };
  };
  sovereigntyLayer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    clickToInspect: string;
    tiers: {
      app: {
        tag: string;
        title: string;
        badge: string;
        desc: string;
        inspect: string;
      };
      safecompute: {
        banner: string;
        tag: string;
        title: string;
        desc: string;
        invariants: [string, string, string];
        inspect: string;
      };
      infra: {
        tag: string;
        title: string;
        badge: string;
        desc: string;
        inspect: string;
      };
    };
    thesis: {
      badge: string;
      quote: string;
      lead: string;
      boldLead: string;
      point1: string;
      point2: string;
      conclusion: string;
    };
  };
  solutions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: {
      legal: string;
      finance: string;
      healthcare: string;
    };
    legal: {
      statusQuoEyebrow: string;
      statusQuoTitle: string;
      statusQuoBadge: string;
      statusQuoDesc: string;
      statusQuoPoints: string[];
      solutionEyebrow: string;
      solutionTitle: string;
      solutionBadge: string;
      solutionDesc: string;
      solutionPoints: string[];
    };
    finance: {
      eyebrow: string;
      title: string;
      desc: string;
      points: string[];
      spotlightEyebrow: string;
      spotlightTitle: string;
      spotlightDesc: string;
      firewallStatus: string;
    };
    healthcare: {
      eyebrow: string;
      title: string;
      desc: string;
      points: string[];
      spotlightEyebrow: string;
      spotlightTitle: string;
      spotlightDesc: string;
      dataStatus: string;
    };
    complianceBriefing: {
      eyebrow: string;
      title: string;
      desc: string;
      btn: string;
    };
  };
  technologyHub: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    readSpecBtn: string;
    tabs: {
      all: string;
      onion: string;
      matrix: string;
      benchmarks: string;
      sdk: string;
    };
  };
  onion: {
    eyebrow: string;
    title: string;
    subtitle: string;
    radarHint: string;
    pillars: {
      trustgate: {
        ringTitle: string;
        tabTitle: string;
        tag: string;
        desc: string;
        specTitle: string;
        specs: Array<{ label: string; value: string }>;
      };
      enclavex: {
        ringTitle: string;
        tabTitle: string;
        tag: string;
        desc: string;
        specTitle: string;
        specs: Array<{ label: string; value: string }>;
      };
      covarpri: {
        ringTitle: string;
        tabTitle: string;
        tag: string;
        desc: string;
        specTitle: string;
        specs: Array<{ label: string; value: string }>;
      };
    };
    interactiveSim: {
      title: string;
      subtitle: string;
      promptInputLabel: string;
      sendBtn: string;
      resetBtn: string;
      testingScenarios: string;
      scenarioBenign: string;
      scenarioMalicious: string;
      scenarioPromptInjection: string;
      logTitle: string;
      gate1: string;
      gate2: string;
      gate3: string;
      verdictPass: string;
      verdictBlock: string;
    };
  };
  comparisonMatrix: {
    eyebrow: string;
    title: string;
    subtitle: string;
    columns: {
      architecture: string;
      privacy: string;
      latency: string;
      accuracy: string;
      firewall: string;
    };
    rows: Array<{
      architecture: string;
      badge: string;
      privacyText: string;
      privacyDetails: string;
      latencyText: string;
      latencyDetails: string;
      accuracyText: string;
      accuracyDetails: string;
      firewallText: string;
      firewallDetails: string;
    }>;
    callout: {
      title: string;
      desc: string;
    };
  };
  benchmarks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    gauge1: { title: string; range: string; unit: string; desc: string };
    gauge2: { title: string; value: string; unit: string; desc: string };
    gauge3: { title: string; value: string; unit: string; desc: string };
    modelSelectorLabel: string;
    parameters: string;
    accuracyLoss: string;
    recoveryRisk: string;
    latencyChartTitle: string;
    ttftLabel: string;
    tpotLabel: string;
    baselineCloud: string;
    datasetsEvaluated: string;
  };
  developerExperience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    deliveryModes: {
      saas: { title: string; desc: string; badge: string };
      appliance: { title: string; desc: string; badge: string };
    };
    copyCode: string;
    copied: string;
    activeModeDetails: {
      saasTitle: string;
      saasDesc: string;
      saasPoints: string[];
      applianceTitle: string;
      applianceDesc: string;
      appliancePoints: string[];
    };
  };
  roadmap: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phases: Array<{
      phase: string;
      date: string;
      title: string;
      desc: string;
      goal: string;
    }>;
  };
  ctaBanner: {
    badge: string;
    titleTrust: string;
    titleMath: string;
    titleNot: string;
    titleCloud: string;
    desc: string;
    emailPlaceholder: string;
    buttonText: string;
    successMessage: string;
    resetText: string;
    guarantees: {
      soc2: string;
      cryptoCore: string;
      nda: string;
    };
  };
  footer: {
    tagline: string;
    cities: string[];
    productCol: string;
    techCol: string;
    enterpriseCol: string;
    links: {
      overview: string;
      howItWorks: string;
      sovereigntyLayer: string;
      lawFirms: string;
      financialServices: string;
      onionDefense: string;
      actionFirewall: string;
      productMatrix: string;
      universalBenchmarks: string;
      sdk: string;
      whitepaperPdf: string;
      scheduleDemo: string;
      soc2Audit: string;
      securityArchitecture: string;
    };
    rights: string;
    privacyPolicy: string;
    termsOfService: string;
    securityDisclosures: string;
  };
  leadModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    deploymentLabel: string;
    deploymentSaas: string;
    deploymentAppliance: string;
    useCaseLabel: string;
    useCaseLegalFinance: string;
    useCaseHealthcare: string;
    useCaseGeneral: string;
    commentsLabel: string;
    commentsPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    doneBtn: string;
  };
  whitepaperModal: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    downloadedBtn: string;
    tabs: {
      abstract: string;
      covarpri: string;
      attestation: string;
      trustgate: string;
    };
    abstractContent: {
      title: string;
      p1: string;
      p2: string;
    };
  };
  homeBridge: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    pill1: string;
    pill2: string;
    pill3: string;
    pill4: string;
  };
  technologyPage: {
    backToHome: string;
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    whitepaperBtn: string;
    talkToArchitectBtn: string;
    pills: {
      monitor: string;
      onion: string;
      matrix: string;
      benchmarks: string;
      sdk: string;
    };
  };
}
