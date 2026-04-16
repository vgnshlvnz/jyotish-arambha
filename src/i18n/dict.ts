// Translation dictionary. Keep all language-dependent strings here.
// Large course content (lesson key_points, flashcards, quiz questions) stays in English
// with a graceful "translation coming" note shown on Tamil pages.

export type Lang = "en" | "ta";
export const LANGS: Lang[] = ["en", "ta"];
export const DEFAULT_LANG: Lang = "en";

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  ta: "தமிழ்",
};

type Dict = {
  nav: {
    home: string;
    learn: string;
    flashcards: string;
    quiz: string;
    fundamentals: string;
    glossary: string;
  };
  common: {
    level: string;
    lessons: string;
    minutes: string;
    min: string;
    source: string;
    back: string;
    locked: string;
    unlocked: string;
    notTaken: string;
    best: string;
    unseen: string;
    learning: string;
    mastered: string;
    dueNow: string;
    of: string;
    more: string;
    comingSoon: string;
    contentInEnglishNote: string;
  };
  home: {
    title: string;
    tagline: string;
    startLearning: string;
    reviewFlashcards: string;
    whatYouWillLearn: string;
    knowledgeBase: string;
    grahas: string;
    rasis: string;
    bhavas: string;
    nakshatras: string;
    principles: string;
    glossaryCount: string;
    flashcardsCount: string;
    quizItems: string;
  };
  learn: {
    title: string;
    description: string;
    sevenDayCrash: string;
    sevenDayDescription: string;
    day: string;
    takeQuiz: string;
    reviewCards: string;
    curriculum: string;
  };
  flashcards: {
    title: string;
    description: string;
    allDecks: string;
    cards: string;
    clickToFlip: string;
    gotItRight: string;
    gotItWrong: string;
    sessionComplete: string;
    correctOutOf: string;
    masteredOf: string;
    reviewAllAgain: string;
    cardOf: string;
    correct: string;
    loading: string;
    noCards: string;
  };
  quiz: {
    title: string;
    description: string;
    passWith: string;
    allQuizzes: string;
    mcq: string;
    matchSet: string;
    scenario: string;
    levelQuiz: string;
    multipleChoice: string;
    match: string;
    scenarioPractice: string;
    scenarioNote: string;
    submitQuiz: string;
    retake: string;
    passed: string;
    needMore: string;
    correct: string;
    selectOption: string;
  };
  fundamentals: {
    title: string;
    description: string;
    whyItMatters: string;
    appearsIn: string;
  };
  glossary: {
    title: string;
    description: string;
  };
  reference: {
    grahasTitle: string;
    grahasDescription: string;
    rasisTitle: string;
    rasisDescription: string;
    bhavasTitle: string;
    bhavasDescription: string;
    nakshatrasTitle: string;
    nakshatrasDescription: string;
    lord: string;
    exaltation: string;
    debilitation: string;
    moolatrikona: string;
    digBala: string;
    karakatwas: string;
    signLordship: string;
    significations: string;
    body: string;
    naturalKaraka: string;
    houseClassifications: string;
    vimshottariCycle: string;
    vimshottariDescription: string;
    pada: string;
    rasi: string;
    d9Lord: string;
    purushartha: string;
    keywords: string;
    natural: string;
  };
  footer: string;
  langSwitch: string;
};

export const dict: Record<Lang, Dict> = {
  en: {
    nav: {
      home: "Home",
      learn: "Learn",
      flashcards: "Flashcards",
      quiz: "Quiz",
      fundamentals: "Fundamentals",
      glossary: "Glossary",
    },
    common: {
      level: "Level",
      lessons: "lessons",
      minutes: "minutes",
      min: "min",
      source: "Source",
      back: "Back",
      locked: "🔒 Locked",
      unlocked: "Unlocked",
      notTaken: "Not taken",
      best: "Best",
      unseen: "Unseen",
      learning: "Learning",
      mastered: "Mastered",
      dueNow: "due now",
      of: "of",
      more: "more",
      comingSoon: "Translation coming soon",
      contentInEnglishNote: "",
    },
    home: {
      title: "Jyotish Ārambha",
      tagline: "Beginner → Navamsa, faithful to classical Jyotisha",
      startLearning: "Start Learning →",
      reviewFlashcards: "Review Flashcards",
      whatYouWillLearn: "What you will learn",
      knowledgeBase: "Knowledge Base",
      grahas: "Grahas",
      rasis: "Rasis",
      bhavas: "Bhavas",
      nakshatras: "Nakshatras",
      principles: "Principles",
      glossaryCount: "Glossary",
      flashcardsCount: "Flashcards",
      quizItems: "Quiz items",
    },
    learn: {
      title: "Curriculum",
      description: "Seven levels. Pass each level's quiz with ≥ 70% to unlock the next.",
      sevenDayCrash: "7-Day Crash Course",
      sevenDayDescription: "Fast-track path through all levels.",
      day: "Day",
      takeQuiz: "Take Level {n} Quiz →",
      reviewCards: "Review Flashcards",
      curriculum: "Curriculum",
    },
    flashcards: {
      title: "Flashcards",
      description: "Spaced-repetition review. Leitner boxes: review what you got wrong more often.",
      allDecks: "All decks",
      cards: "cards",
      clickToFlip: "Click card to flip",
      gotItRight: "✓ Got it right",
      gotItWrong: "✗ Got it wrong",
      sessionComplete: "Session Complete",
      correctOutOf: "correct",
      masteredOf: "Mastered {n} of {total} cards",
      reviewAllAgain: "Review all again",
      cardOf: "Card {i} of {n}",
      correct: "correct",
      loading: "Loading…",
      noCards: "No cards to review.",
    },
    quiz: {
      title: "Quizzes",
      description: "Pass with ≥ 70% to unlock the next level.",
      passWith: "Pass with ≥ 70% to unlock the next level.",
      allQuizzes: "All quizzes",
      mcq: "MCQ",
      matchSet: "match",
      scenario: "scenario",
      levelQuiz: "Level {n} Quiz",
      multipleChoice: "Multiple Choice",
      match: "Match",
      scenarioPractice: "Scenario Practice",
      scenarioNote: "Self-graded. Read each prompt, think through it, then reveal the answer.",
      submitQuiz: "Submit Quiz",
      retake: "Retake",
      passed: "Passed",
      needMore: "Need ≥ 70% to pass",
      correct: "correct",
      selectOption: "—",
    },
    fundamentals: {
      title: "Core Principles",
      description: "20 rules that repeat across signs, houses, planets and nakshatras. Learn these first.",
      whyItMatters: "Why it matters:",
      appearsIn: "Appears in:",
    },
    glossary: {
      title: "Glossary",
      description: "{n} canonical Jyotish terms.",
    },
    reference: {
      grahasTitle: "The 9 Grahas",
      grahasDescription: "Navagrahas — planets, luminaries and lunar nodes used in Jyotish.",
      rasisTitle: "The 12 Rasis",
      rasisDescription: "Zodiac signs — elements, modalities, and Kalapurusha body mapping.",
      bhavasTitle: "The 12 Bhavas",
      bhavasDescription: "Houses — the life-domains calculated from the Ascendant.",
      nakshatrasTitle: "The 27 Nakshatras",
      nakshatrasDescription: "Lunar mansions. 108 padas map 1:1 to the Navamsa (D9) divisions.",
      lord: "Lord",
      exaltation: "Exaltation",
      debilitation: "Debilitation",
      moolatrikona: "Moolatrikona",
      digBala: "Dig Bala",
      karakatwas: "Karakatwas",
      signLordship: "Sign Lordship",
      significations: "Significations",
      body: "Body",
      naturalKaraka: "Karaka",
      houseClassifications: "House Classifications",
      vimshottariCycle: "Vimshottari Lord Cycle",
      vimshottariDescription: "Repeats 3 times across the 27 nakshatras. Same order governs the 120-year Dasha system.",
      pada: "Pada",
      rasi: "Rasi",
      d9Lord: "D9 Lord",
      purushartha: "Purushartha",
      keywords: "Keywords",
      natural: "Natural",
    },
    footer: "Jyotish Ārambha · Content derived from Bavani Shanmugam / Malaysian Astrological Society course notes",
    langSwitch: "Language",
  },

  ta: {
    nav: {
      home: "முகப்பு",
      learn: "கற்க",
      flashcards: "நினைவு அட்டைகள்",
      quiz: "வினா",
      fundamentals: "அடிப்படைகள்",
      glossary: "சொல்லகராதி",
    },
    common: {
      level: "நிலை",
      lessons: "பாடங்கள்",
      minutes: "நிமிடங்கள்",
      min: "நிமி",
      source: "ஆதாரம்",
      back: "பின்",
      locked: "🔒 பூட்டப்பட்டது",
      unlocked: "திறக்கப்பட்டது",
      notTaken: "எடுக்கப்படவில்லை",
      best: "சிறந்தது",
      unseen: "பார்க்கப்படாதது",
      learning: "கற்கிறது",
      mastered: "தேர்ச்சி",
      dueNow: "இப்போது மதிப்பீடு",
      of: "/",
      more: "மேலும்",
      comingSoon: "மொழிபெயர்ப்பு விரைவில்",
      contentInEnglishNote: "பாடத்தின் உள்ளடக்கம் தற்போது ஆங்கிலத்தில் உள்ளது. தமிழ் மொழிபெயர்ப்பு விரைவில் சேர்க்கப்படும்.",
    },
    home: {
      title: "ஜோதிட ஆரம்பம்",
      tagline: "ஆரம்பநிலை → நவாம்சம், பாரம்பரிய ஜோதிடத்திற்கு உண்மையாக",
      startLearning: "கற்கத் தொடங்கு →",
      reviewFlashcards: "நினைவு அட்டைகளை மீள்பார்",
      whatYouWillLearn: "நீங்கள் கற்பவை",
      knowledgeBase: "அறிவுத் தளம்",
      grahas: "கிரகங்கள்",
      rasis: "ராசிகள்",
      bhavas: "பாவங்கள்",
      nakshatras: "நட்சத்திரங்கள்",
      principles: "கோட்பாடுகள்",
      glossaryCount: "சொல்லகராதி",
      flashcardsCount: "அட்டைகள்",
      quizItems: "வினா உருப்படிகள்",
    },
    learn: {
      title: "பாடத்திட்டம்",
      description: "ஏழு நிலைகள். ஒவ்வொரு நிலையின் வினாவிலும் ≥ 70% பெற்று அடுத்த நிலையைத் திறக்கவும்.",
      sevenDayCrash: "7-நாள் விரைவு பாடநெறி",
      sevenDayDescription: "அனைத்து நிலைகளுக்கும் விரைவான வழி.",
      day: "நாள்",
      takeQuiz: "நிலை {n} வினா எடு →",
      reviewCards: "நினைவு அட்டைகளை மீள்பார்",
      curriculum: "பாடத்திட்டம்",
    },
    flashcards: {
      title: "நினைவு அட்டைகள்",
      description: "இடைவெளி மீளமைப்பு மதிப்பீடு. தவறு செய்ததை அதிகம் மீள்பார்.",
      allDecks: "அனைத்து அட்டைத் தொகுப்புகள்",
      cards: "அட்டைகள்",
      clickToFlip: "அட்டையைக் கிளிக் செய்து திருப்பு",
      gotItRight: "✓ சரியாக பதிலளித்தேன்",
      gotItWrong: "✗ தவறாக பதிலளித்தேன்",
      sessionComplete: "அமர்வு முடிந்தது",
      correctOutOf: "சரியானவை",
      masteredOf: "{total} அட்டைகளில் {n} தேர்ச்சி பெற்றுள்ளீர்கள்",
      reviewAllAgain: "அனைத்தையும் மீண்டும் மீள்பார்",
      cardOf: "{i} / {n} அட்டை",
      correct: "சரி",
      loading: "ஏற்றுகிறது…",
      noCards: "மீள்பார்க்க அட்டைகள் எதுவும் இல்லை.",
    },
    quiz: {
      title: "வினாக்கள்",
      description: "அடுத்த நிலையைத் திறக்க ≥ 70% பெறவும்.",
      passWith: "அடுத்த நிலையைத் திறக்க ≥ 70% பெறவும்.",
      allQuizzes: "அனைத்து வினாக்கள்",
      mcq: "பலவிதக் கேள்விகள்",
      matchSet: "பொருத்துக",
      scenario: "சூழல்",
      levelQuiz: "நிலை {n} வினா",
      multipleChoice: "பலவிதக் கேள்விகள்",
      match: "பொருத்துக",
      scenarioPractice: "சூழல் பயிற்சி",
      scenarioNote: "சுய மதிப்பீடு. ஒவ்வொரு கேள்வியையும் படித்து, சிந்தித்து, பின்பு பதிலை வெளிப்படுத்தவும்.",
      submitQuiz: "வினாவைச் சமர்ப்பி",
      retake: "மீண்டும் எடு",
      passed: "தேர்ச்சி",
      needMore: "தேர்ச்சி பெற ≥ 70% தேவை",
      correct: "சரி",
      selectOption: "—",
    },
    fundamentals: {
      title: "அடிப்படைக் கோட்பாடுகள்",
      description: "ராசிகள், பாவங்கள், கிரகங்கள் மற்றும் நட்சத்திரங்களில் மீண்டும் வரும் 20 கோட்பாடுகள். முதலில் இவற்றைக் கற்றுக்கொள்ளுங்கள்.",
      whyItMatters: "ஏன் முக்கியம்:",
      appearsIn: "இடம்பெறும் இடம்:",
    },
    glossary: {
      title: "சொல்லகராதி",
      description: "{n} பாரம்பரிய ஜோதிடச் சொற்கள்.",
    },
    reference: {
      grahasTitle: "நவக்கிரகங்கள் (9)",
      grahasDescription: "நவக்கிரகங்கள் — ஜோதிடத்தில் பயன்படும் கிரகங்கள், சூரியன், சந்திரன் மற்றும் சந்திர முனைகள்.",
      rasisTitle: "12 ராசிகள்",
      rasisDescription: "ராசிகள் — பஞ்ச பூதங்கள், குணங்கள், மற்றும் காலபுருஷ அங்க பாகுபாடு.",
      bhavasTitle: "12 பாவங்கள்",
      bhavasDescription: "பாவங்கள் (வீடுகள்) — லக்னத்திலிருந்து கணக்கிடப்படும் வாழ்க்கைத் துறைகள்.",
      nakshatrasTitle: "27 நட்சத்திரங்கள்",
      nakshatrasDescription: "சந்திர மாளிகைகள். 108 பாதங்கள் நவாம்ச (D9) பிரிவுகளுடன் 1:1 பொருந்துகின்றன.",
      lord: "அதிபதி",
      exaltation: "உச்சம்",
      debilitation: "நீசம்",
      moolatrikona: "மூலத்திரிகோணம்",
      digBala: "திக் பலம்",
      karakatwas: "காரகத்துவங்கள்",
      signLordship: "ராசி ஆதிபத்யம்",
      significations: "குறிப்புகள்",
      body: "உடல் பாகம்",
      naturalKaraka: "காரகன்",
      houseClassifications: "பாவ வகைப்பாடுகள்",
      vimshottariCycle: "விம்சோத்தரி அதிபதி சுழற்சி",
      vimshottariDescription: "27 நட்சத்திரங்களில் 3 முறை மீண்டும் வருகிறது. 120-ஆண்டு தசா முறையையும் இந்த வரிசையே நிர்வகிக்கிறது.",
      pada: "பாதம்",
      rasi: "ராசி",
      d9Lord: "D9 அதிபதி",
      purushartha: "புருஷார்த்தம்",
      keywords: "முக்கியச் சொற்கள்",
      natural: "இயற்கை",
    },
    footer: "ஜோதிட ஆரம்பம் · பவானி சண்முகம் / மலேசிய ஜோதிட சங்கத்தின் பாடக் குறிப்புகளிலிருந்து உருவாக்கப்பட்டது",
    langSwitch: "மொழி",
  },
};

// Entity names in Tamil script. Reference pages use these in ta mode.
export const names = {
  grahas: {
    Sun: { en: "Sun", ta: "சூரியன்" },
    Moon: { en: "Moon", ta: "சந்திரன்" },
    Mars: { en: "Mars", ta: "செவ்வாய்" },
    Mercury: { en: "Mercury", ta: "புதன்" },
    Jupiter: { en: "Jupiter", ta: "குரு" },
    Venus: { en: "Venus", ta: "சுக்கிரன்" },
    Saturn: { en: "Saturn", ta: "சனி" },
    Rahu: { en: "Rahu", ta: "ராகு" },
    Ketu: { en: "Ketu", ta: "கேது" },
  } as Record<string, { en: string; ta: string }>,
  rasis: {
    Aries: { en: "Aries", ta: "மேஷம்" },
    Taurus: { en: "Taurus", ta: "ரிஷபம்" },
    Gemini: { en: "Gemini", ta: "மிதுனம்" },
    Cancer: { en: "Cancer", ta: "கடகம்" },
    Leo: { en: "Leo", ta: "சிம்மம்" },
    Virgo: { en: "Virgo", ta: "கன்னி" },
    Libra: { en: "Libra", ta: "துலாம்" },
    Scorpio: { en: "Scorpio", ta: "விருச்சிகம்" },
    Sagittarius: { en: "Sagittarius", ta: "தனுசு" },
    Capricorn: { en: "Capricorn", ta: "மகரம்" },
    Aquarius: { en: "Aquarius", ta: "கும்பம்" },
    Pisces: { en: "Pisces", ta: "மீனம்" },
  } as Record<string, { en: string; ta: string }>,
  nakshatras: {
    Ashwini: { en: "Ashwini", ta: "அஸ்வினி" },
    Bharani: { en: "Bharani", ta: "பரணி" },
    Krittika: { en: "Krittika", ta: "கார்த்திகை" },
    Rohini: { en: "Rohini", ta: "ரோகிணி" },
    Mrigashira: { en: "Mrigashira", ta: "மிருகசீரிடம்" },
    Ardra: { en: "Ardra", ta: "திருவாதிரை" },
    Punarvasu: { en: "Punarvasu", ta: "புனர்பூசம்" },
    Pushya: { en: "Pushya", ta: "பூசம்" },
    Ashlesha: { en: "Ashlesha", ta: "ஆயில்யம்" },
    Magha: { en: "Magha", ta: "மகம்" },
    "Purva Phalguni": { en: "Purva Phalguni", ta: "பூரம்" },
    "Uttara Phalguni": { en: "Uttara Phalguni", ta: "உத்திரம்" },
    Hasta: { en: "Hasta", ta: "ஹஸ்தம்" },
    Chitra: { en: "Chitra", ta: "சித்திரை" },
    Swati: { en: "Swati", ta: "சுவாதி" },
    Visakha: { en: "Visakha", ta: "விசாகம்" },
    Anuradha: { en: "Anuradha", ta: "அனுஷம்" },
    Jyeshtha: { en: "Jyeshtha", ta: "கேட்டை" },
    Moola: { en: "Moola", ta: "மூலம்" },
    "Purva Ashada": { en: "Purva Ashada", ta: "பூராடம்" },
    "Uttara Ashada": { en: "Uttara Ashada", ta: "உத்திராடம்" },
    Shravana: { en: "Shravana", ta: "திருவோணம்" },
    Dhanishtha: { en: "Dhanishtha", ta: "அவிட்டம்" },
    Shatabisha: { en: "Shatabisha", ta: "சதயம்" },
    "Purva Bhadrapada": { en: "Purva Bhadrapada", ta: "பூரட்டாதி" },
    "Uttara Bhadrapada": { en: "Uttara Bhadrapada", ta: "உத்திரட்டாதி" },
    Revati: { en: "Revati", ta: "ரேவதி" },
  } as Record<string, { en: string; ta: string }>,
  bhavas: {
    "1": { en: "Tanu Bhava", ta: "தனு பாவம் (லக்னம்)" },
    "2": { en: "Dhana Bhava", ta: "தன பாவம்" },
    "3": { en: "Sahaja Bhava", ta: "சகஜ பாவம்" },
    "4": { en: "Bandhu Bhava", ta: "பந்து பாவம்" },
    "5": { en: "Putra Bhava", ta: "புத்ர பாவம்" },
    "6": { en: "Ari Bhava", ta: "ரிபு / ரோக பாவம்" },
    "7": { en: "Yuvati Bhava", ta: "களத்ர பாவம்" },
    "8": { en: "Randhra Bhava", ta: "ரந்த்ர பாவம்" },
    "9": { en: "Dharma Bhava", ta: "தர்ம பாவம்" },
    "10": { en: "Karma Bhava", ta: "கர்ம பாவம்" },
    "11": { en: "Labha Bhava", ta: "லாப பாவம்" },
    "12": { en: "Vyaya Bhava", ta: "வ்யய பாவம்" },
  } as Record<string, { en: string; ta: string }>,
};

export function pickName(
  kind: keyof typeof names,
  key: string,
  lang: Lang,
): string {
  const entry = (names[kind] as Record<string, { en: string; ta: string }>)[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}

export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}
