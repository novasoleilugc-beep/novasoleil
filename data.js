// ================================================================
//  NOVA SOLEIL — CAMPAIGN DATA
//  ✅ Edit ONLY this file to update the entire website
//  ✅ After editing: save → re-upload nova-v3 folder to Netlify
// ================================================================
const NOVA = {

  contact: { email: "hello@novasoleil.com" },

  social: {
    instagram: "https://www.instagram.com/novasoleil",
    tiktok:    "https://www.tiktok.com/@novasoleil",
    youtube:   "https://www.youtube.com/@NovaSoleilOfficial",
    fiverr:    "https://www.fiverr.com/novasoleil"
  },

  // ── HOME PAGE HERO ──────────────────────────────────────────
  hero: {
    image:   "images/hero-face.jpg",
    tagline: "One face. Infinite campaigns.",
    sub:     "AI fashion model available for global brand collaboration — fashion, bags, jewelry, makeup and shoes."
  },

  // ── ADMIN PASSWORD (change this to something only you know) ──
  adminPassword: "nova2026",

  // ================================================================
  //  CAPSULES — one per category page
  //  page:  which HTML file this capsule links to
  //  color: accent colour for that category
  // ================================================================
  capsules: [
    {
      id: "fashion", page: "fashion.html",
      label: "Capsule 01", title: "Fashion & Clothing",
      icon: "👗",
      description: "Editorial and campaign content for clothing brands — luxury leather, structured denim, ready-to-wear.",
      color: "#C4956A",
      campaigns: [
        {
          id: "croc-cape", brand: "Luxury Leather Editorial", type: "Editorial",
          cover: "images/edit-4.jpg",
          images: ["images/edit-1.jpg","images/edit-2.jpg","images/edit-3.jpg","images/edit-4.jpg"],
          videos: [],
          description: "Brown croc-embossed cape jacket with ivory ballgown skirt. Shot at Roman marble colonnades. 4 campaign angles including overhead drone perspective."
        },
        {
          id: "denim-moto", brand: "Denim Moto Dress", type: "Campaign",
          cover: "images/denim-1.jpg",
          images: ["images/denim-1.jpg","images/edit-2.jpg"],
          videos: [],
          description: "Structured denim moto mini dress with gold zipper hardware. Power low-angle shot between marble columns. Street and studio angles."
        }
        // ADD NEW FASHION CAMPAIGN:
        // ,{ id:"id", brand:"Brand", type:"Editorial", cover:"images/x.jpg",
        //    images:["images/x.jpg"], videos:[], description:"Description." }
      ]
    },
    {
      id: "bags", page: "bags.html",
      label: "Capsule 02", title: "Bags & Accessories",
      icon: "👜",
      description: "Luxury handbag campaign photography. Product in sharp focus, Nova as the aspirational context.",
      color: "#8B6F47",
      campaigns: [
        {
          id: "denim-bag", brand: "Denim Tote Campaign", type: "Campaign",
          cover: "images/bag-1.jpg",
          images: ["images/bag-1.jpg","images/edit-3.jpg"],
          videos: [],
          description: "Structured denim tote with gold hardware. Product in sharp focus, model softly behind. Eyes-over-bag viral close-up included."
        }
      ]
    },
    {
      id: "jewelry", page: "jewelry.html",
      label: "Capsule 03", title: "Fine Jewelry",
      icon: "💛",
      description: "Macro-focus product photography for rings, necklaces, bracelets and earrings.",
      color: "#D4AF7A",
      campaigns: [
        {
          id: "gold-stack", brand: "Gold Jewelry Stack", type: "Macro",
          cover: "images/jewel-1.jpg",
          images: ["images/jewel-1.jpg","images/jewel-2.jpg","images/edit-2.jpg"],
          videos: [],
          description: "Layered gold rings, signet rings and chain bracelets. Three macro angles — hand on chest, shoulder grip, zip pull detail."
        }
      ]
    },
    {
      id: "beauty", page: "beauty.html",
      label: "Capsule 04", title: "Makeup & Beauty",
      icon: "💄",
      description: "Close-up beauty content for skincare and makeup brands. Nova's glowing skin speaks for the product.",
      color: "#C47A8A",
      campaigns: []   // ADD BEAUTY CAMPAIGNS HERE
    },
    {
      id: "shoes", page: "shoes.html",
      label: "Capsule 05", title: "Shoes & Heels",
      icon: "👠",
      description: "Low-angle and full-body shots that put footwear in context. Strappy stilettos to structured heels.",
      color: "#7A9E8A",
      campaigns: []   // ADD SHOE CAMPAIGNS HERE
    }
  ]
};
