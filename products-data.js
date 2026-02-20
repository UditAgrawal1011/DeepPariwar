const products = [

/* =======================
   WHOLE WHEAT ATTA
======================= */
{
  slug: "chakki-atta",
  title: "Whole Wheat Atta",
  description: "Chakki fresh atta made from premium whole wheat grains for soft, fluffy rotis every time.",
  image: "images/aata_bgremover.png",

  packs: ["1 kg ", "5 kg ", "10 kg"],

  nutrition: [
    { label: "Energy", value: "340 kcal" },
    { label: "Protein", value: "10.5 g" },
    { label: "Carbohydrate", value: "76.8 g" },
    { label: "Dietary Fiber", value: "10.8 g" },
    { label: "Total Sugars", value: "4.8 g" },
    { label: "Added Sugars", value: "0 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Chakki Atta?",
    image: "images/aata_bgremover.png",
    points: [
      "0% Maida, 100% Atta",
      "Traditional Chakki Grinding",
      "Soft & fluffy rotis every time",
      "Sourced from trusted Indian farms"
    ]
  },

  advantages: [
    "Sourced from selected wheat belts",
    "Multi-stage grain cleaning",
    "Traditional chakki-style grinding",
    "Hygienic & moisture-proof packaging"
  ],

  recipes: [
    {
      title: "Mini Farmhouse Pizza",
      image: "images/mini_pizza.png",
      time: "45 mins",
      level: "Moderate"
    },
    {
      title: "Veg Pizza",
      image: "images/veg_pizza.png",
      time: "40 mins",
      level: "Easy"
    }
  ],

  videos: [
    "https://www.youtube.com/embed/VIDEO_ID_1",
    "https://www.youtube.com/embed/VIDEO_ID_2"
  ]
},

/* =======================
   BESAN
======================= */
{
  slug: "besan",
  title: "Besan",
  description: "Finely ground besan made from high-quality chana dal, rich in taste and nutrition.",
  image: "images/BESAN GPT.png",

  packs: ["500 g"],

  nutrition: [
    { label: "Energy", value: "387 kcal" },
    { label: "Protein", value: "22 g" },
    { label: "Carbohydrate", value: "58 g" },
    { label: "Dietary Fiber", value: "10 g" },
    { label: "Total Sugars", value: "11 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Besan?",
    image: "images/BESAN GPT.png",
    points: [
      "Made from premium chana dal",
      "Smooth texture & rich taste",
      "Perfect for snacks & sweets",
      "No added preservatives"
    ]
  },

  advantages: [
    "Carefully selected pulses",
    "Fine grinding process",
    "Consistent texture",
    "Hygienic packaging"
  ],

  recipes: [
    {
      title: "Shakarpara",
      image: "images/recipe2.jpg",
      time: "35 mins",
      level: "Easy"
    }
  ],

  videos: []
},

/* =======================
   SOOJI
======================= */
{
  slug: "sooji",
  title: "Sooji",
  description: "Premium quality sooji with perfect grain size for delicious dishes.",
  image: "images/Deep Pariwar Sooji.png",

  packs: ["500 g"],

  nutrition: [
    { label: "Energy", value: "360 kcal" },
    { label: "Protein", value: "12 g" },
    { label: "Carbohydrate", value: "72 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Sooji?",
    image: "images/Deep Pariwar Sooji.png",
    points: [
      "Uniform grain size",
      "Light & easy to digest",
      "Perfect texture",
      "Consistent quality"
    ]
  },

  advantages: [
    "Premium wheat selection",
    "Advanced milling",
    "No impurities",
    "Sealed freshness"
  ],

  recipes: [],

  videos: []
},

/* =======================
   POHA
======================= */
{
  slug: "poha",
  title: "Poha",
  description: "Light, clean and easy-to-cook poha for wholesome meals.",
  image: "images/poha_bg.png",

  packs: ["500 g"],

  nutrition: [
    { label: "Energy", value: "350 kcal" },
    { label: "Carbohydrate", value: "76 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Poha?",
    image: "images/poha_bg.png",
    points: [
      "Thin & evenly flattened",
      "Quick cooking",
      "Light on stomach",
      "Clean & dust-free"
    ]
  },

  advantages: [
    "Carefully processed rice",
    "No broken flakes",
    "Uniform thickness",
    "Fresh packaging"
  ],

  recipes: [],

  videos: []
},

/* =======================
   DALIA
======================= */
{
  slug: "dalia",
  title: "Dalia",
  description: "Nutritious broken wheat ideal for healthy meals.",
  image: "images/dalia-removebg-preview.png",

  packs: ["500 g"],

  nutrition: [
    { label: "Energy", value: "342 kcal" },
    { label: "Protein", value: "12 g" },
    { label: "Dietary Fiber", value: "18 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Dalia?",
    image: "images/dalia-removebg-preview.png",
    points: [
      "High in fiber",
      "Supports digestion",
      "Wholesome nutrition",
      "Ideal for daily meals"
    ]
  },

  advantages: [
    "Premium wheat selection",
    "Coarse broken grains",
    "Natural processing",
    "Clean packaging"
  ],

  recipes: [],

  videos: []
},

/* =======================
   MAKKI ATTA
======================= */
{
  slug: "makki-atta",
  title: "Makki Atta",
  description: "Stone-ground makki atta for authentic taste and aroma.",
  image: "images/makki-removebg-preview.png",

  packs: ["500 g"],

  nutrition: [
    { label: "Energy", value: "365 kcal" },
    { label: "Carbohydrate", value: "79 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Makki Atta?",
    image: "images/makki-removebg-preview.png",
    points: [
      "Traditional stone grinding",
      "Rich yellow color",
      "Authentic desi taste",
      "No additives"
    ]
  },

  advantages: [
    "Selected maize grains",
    "Stone grinding process",
    "Fresh aroma",
    "Moisture-proof packaging"
  ],

  recipes: [],

  videos: []
},

/* =======================
   MAIDA
======================= */
{
  slug: "maida",
  title: "Maida",
  description: "Finely ground maida made from high-quality chana dal, rich in taste and nutrition.",
  image: "images/Screenshot_2025-08-02_203916-removebg-preview.png",

  packs: ["500 g"],

  nutrition: [
    { label: "Energy", value: "387 kcal" },
    { label: "Protein", value: "22 g" },
    { label: "Carbohydrate", value: "58 g" },
    { label: "Dietary Fiber", value: "10 g" },
    { label: "Total Sugars", value: "11 g" }
  ],

  why: {
    title: "Why Choose Deep Pariwar Maida?",
    image: "images/Screenshot_2025-08-02_203916-removebg-preview.png",
    points: [
      "Made from premium chana dal",
      "Smooth texture & rich taste",
      "Perfect for snacks & sweets",
      "No added preservatives"
    ]
  },

  advantages: [
    "Carefully selected pulses",
    "Fine grinding process",
    "Consistent texture",
    "Hygienic packaging"
  ],

  recipes: [
    {
      title: "Shakarpara",
      image: "images/recipe2.jpg",
      time: "35 mins",
      level: "Easy"
    }
  ],

  videos: []
}

];
