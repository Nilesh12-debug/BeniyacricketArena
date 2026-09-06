/**
 * Centralized Configuration for Beniya Cricket Arena
 * Real Local Business - Beniya Bagh, Varanasi, Uttar Pradesh, India
 */

export const contactConfig = {
  name: "Beniya Cricket Arena",
  shortName: "BENIYA",
  subtitle: "CRICKET ARENA",
  tagline: "A cricket turf built for the game.",
  city: "Varanasi",
  area: "Beniya Bagh",
  state: "Uttar Pradesh",
  country: "India",
  pincode: "221001",
  fullAddress: "Beniya Bagh, Varanasi, Uttar Pradesh 221001",
  
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "+91 98765 43210",
  whatsappUrl: "https://wa.me/919876543210?text=Hi%20Beniya%20Cricket%20Arena,%20I%20would%20like%20to%20book%20a%20cricket%20turf%20slot.",
  mapsUrl: "https://maps.app.goo.gl/eaxvGbwLLHBnNHzs6",
  
  operatingHours: "Open 24/7",
  operatingStatus: "24/7 OPEN",
  
  specs: {
    dimensions: "60 × 120 FT",
    enclosureHeight: "35 FT",
    lighting: "Floodlit Night Cricket",
    availability: "Open 24/7"
  }
};

export const seoConfig = {
  siteUrl: "https://beniyacricketarena.com",
  author: "Beniya Cricket Arena",
  ogImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
  geo: {
    latitude: "25.3145897",
    longitude: "83.0042436",
    region: "IN-UP",
    placename: "Varanasi"
  },
  pages: {
    home: {
      title: "Cricket Turf in Varanasi | Beniya Cricket Arena",
      description: "Beniya Cricket Arena is a cricket turf in Beniya Bagh, Varanasi. View facilities, pricing, location and book your cricket turf slot online.",
      keywords: [
        "cricket turf in Varanasi",
        "cricket turf Varanasi",
        "cricket turf in Beniya Bagh",
        "cricket turf booking Varanasi",
        "cricket turf price in Varanasi",
        "cricket practice turf in Varanasi",
        "night cricket in Varanasi",
        "cricket ground in Varanasi",
        "turf near me Varanasi"
      ]
    },
    arena: {
      title: "Cricket Turf in Varanasi | Explore the Arena | Beniya Cricket Arena",
      description: "Explore Beniya Cricket Arena in Beniya Bagh, Varanasi. 60x120 ft playing surface, 35 ft high enclosure netting, and floodlighting.",
      keywords: ["cricket turf in Varanasi", "turf ground in Varanasi", "Beniya Bagh cricket arena"]
    },
    experience: {
      title: "Cricket Turf Experience in Varanasi | Beniya Cricket Arena",
      description: "Experience night cricket under floodlights at Beniya Cricket Arena, Varanasi.",
      keywords: ["night cricket Varanasi", "floodlit cricket turf Varanasi"]
    },
    pricing: {
      title: "Cricket Turf Price in Varanasi | Slot Rates | Beniya Cricket Arena",
      description: "Check turf rates at Beniya Cricket Arena in Varanasi. Transparent hourly pricing for morning, evening, and night cricket sessions.",
      keywords: ["turf in Varanasi price", "cricket turf rates Varanasi"]
    },
    location: {
      title: "Beniya Bagh, Varanasi Location | Beniya Cricket Arena",
      description: "Find Beniya Cricket Arena in Beniya Bagh, Varanasi. Centrally located with easy access.",
      keywords: ["turf in Varanasi", "Beniya Bagh Varanasi turf"]
    },
    gallery: {
      title: "Turf & Cricket Gallery in Varanasi | Beniya Cricket Arena",
      description: "Visual tour of Beniya Cricket Arena in Varanasi. View our floodlit playing surface and nets.",
      keywords: ["cricket turf gallery", "Beniya Cricket Arena photos"]
    },
    contact: {
      title: "Contact & Book Turf in Varanasi | Beniya Cricket Arena",
      description: "Contact Beniya Cricket Arena at Beniya Bagh, Varanasi. Direct WhatsApp and phone booking.",
      keywords: ["contact Beniya cricket arena", "book turf Varanasi"]
    }
  }
};

/**
 * Curated authentic sports photography representing realistic local cricket turf conditions:
 * artificial grass pitch, nets enclosure, batsman/bowler action, evening floodlights.
 */
export const siteImages = {
  // Hero: Split-screen high-res action image on turf pitch
  hero: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop",
  
  // About section turf photo
  about: "https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?q=80&w=1400&auto=format&fit=crop",
  
  // Dark section night play photo
  nightPlay: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop",
  
  // Gallery set
  gallery: [
    {
      id: "full-turf",
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
      title: "Full Turf & Pitch View",
      description: "60 × 120 ft artificial playing surface with clear markings",
      category: "TURF"
    },
    {
      id: "batsman",
      url: "https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?q=80&w=1200&auto=format&fit=crop",
      title: "Batsman at the Crease",
      description: "True bounce allowing full range of strokes",
      category: "ACTION"
    },
    {
      id: "bowler",
      url: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=1200&auto=format&fit=crop",
      title: "Bowler Run-Up & Delivery",
      description: "Non-slip bowler approach area for pace and spin",
      category: "ACTION"
    },
    {
      id: "enclosure",
      url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop",
      title: "35 FT High Enclosure Netting",
      description: "Keeps shots inside the arena safely",
      category: "FACILITY"
    },
    {
      id: "night-lighting",
      url: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop",
      title: "Floodlit Night Cricket",
      description: "High-power glare-free illumination for evening games",
      category: "NIGHT"
    },
    {
      id: "turf-closeup",
      url: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1200&auto=format&fit=crop",
      title: "Turf Surface Close-Up",
      description: "High-density synthetic grass with cushioned underlay",
      category: "SURFACE"
    }
  ]
};

export const keyInfoStats = [
  {
    title: "60 × 120 FT",
    subtitle: "Spacious playing area",
    description: "Ample room for batsmen, bowlers and fielders"
  },
  {
    title: "35 FT",
    subtitle: "High enclosure",
    description: "High-grade netting keeps the ball inside the arena"
  },
  {
    title: "24 / 7",
    subtitle: "Open every day",
    description: "Choose any playing time that suits your group"
  },
  {
    title: "FLOODLIT",
    subtitle: "Night cricket",
    description: "Evenly distributed LED lighting for crisp tracking"
  }
];

export const facilitiesList = [
  {
    title: "PREMIUM CRICKET TURF",
    description: "A dedicated artificial cricket playing surface engineered for true ball bounce and safe traction.",
    icon: "cricket-pitch"
  },
  {
    title: "HIGH ENCLOSURE",
    description: "35 ft netting helps keep the ball inside the arena, so you spend more time playing and less retrieving.",
    icon: "net"
  },
  {
    title: "NIGHT CRICKET",
    description: "Floodlit facility with balanced overhead lighting designed specifically for evening and late-night games.",
    icon: "floodlights"
  },
  {
    title: "SPACIOUS ARENA",
    description: "60 × 120 ft playing area giving comfortable space for complete team matches and batting practice.",
    icon: "arena"
  },
  {
    title: "OPEN 24/7",
    description: "Choose a playing time that suits your group. Early morning fitness sessions or late-night cricket clashes.",
    icon: "clock"
  },
  {
    title: "EASY TO REACH",
    description: "Convenient location in Beniya Bagh, Varanasi with easy connectivity from Sigra, Godowlia, and Lahurabir.",
    icon: "location"
  }
];

export const bookingSlots = [
  {
    id: "slot-0600",
    time: "06:00 AM - 07:00 AM",
    timeDisplay: "06:00 AM",
    price: 600,
    priceFormatted: "₹600",
    period: "Morning Slot",
    status: "AVAILABLE"
  },
  {
    id: "slot-0700",
    time: "07:00 AM - 08:00 AM",
    timeDisplay: "07:00 AM",
    price: 600,
    priceFormatted: "₹600",
    period: "Morning Slot",
    status: "AVAILABLE"
  },
  {
    id: "slot-1600",
    time: "04:00 PM - 05:00 PM",
    timeDisplay: "04:00 PM",
    price: 800,
    priceFormatted: "₹800",
    period: "Day Slot",
    status: "AVAILABLE"
  },
  {
    id: "slot-1800",
    time: "06:00 PM - 07:00 PM",
    timeDisplay: "06:00 PM",
    price: 800,
    priceFormatted: "₹800",
    period: "Evening Slot",
    status: "AVAILABLE"
  },
  {
    id: "slot-1900",
    time: "07:00 PM - 08:00 PM",
    timeDisplay: "07:00 PM",
    price: 1200,
    priceFormatted: "₹1,200",
    period: "Prime Evening (Floodlit)",
    status: "AVAILABLE"
  },
  {
    id: "slot-2000",
    time: "08:00 PM - 09:00 PM",
    timeDisplay: "08:00 PM",
    price: 1200,
    priceFormatted: "₹1,200",
    period: "Prime Evening (Floodlit)",
    status: "BOOKED"
  },
  {
    id: "slot-2100",
    time: "09:00 PM - 10:00 PM",
    timeDisplay: "09:00 PM",
    price: 1400,
    priceFormatted: "₹1,400",
    period: "Night Slot (Floodlit)",
    status: "AVAILABLE"
  },
  {
    id: "slot-2200",
    time: "10:00 PM - 11:00 PM",
    timeDisplay: "10:00 PM",
    price: 1400,
    priceFormatted: "₹1,400",
    period: "Late Night Slot (Floodlit)",
    status: "AVAILABLE"
  }
];

export const reviews = [
  {
    quote: "One of the best places to play cricket in Varanasi. The turf quality and bounce are genuine, and the 35 ft netting makes aggressive hitting fun without losing balls.",
    author: "Rahul Sharma",
    role: "Regular Weekend Player",
    rating: 5
  },
  {
    quote: "Night cricket with the floodlights is an amazing experience. Clean facility, well-maintained artificial turf, and booking via WhatsApp was seamless.",
    author: "Amit Patel",
    role: "Corporate League Captain",
    rating: 5
  },
  {
    quote: "Central location in Beniya Bagh. Great space for 6v6 or 8v8 box cricket matches. The pricing is completely transparent and fair for the quality provided.",
    author: "Vikas Jaiswal",
    role: "Local Cricket Enthusiast",
    rating: 5
  }
];

export const faqs = [
  {
    question: "Where is Beniya Cricket Arena located?",
    answer: "Beniya Cricket Arena is located in Beniya Bagh, Varanasi, Uttar Pradesh. It is centrally situated with convenient road access and nearby parking."
  },
  {
    question: "Is Beniya Cricket Arena open at night?",
    answer: "Yes, the arena is open 24/7 and is equipped with powerful overhead floodlights specifically calibrated for evening and late-night cricket matches."
  },
  {
    question: "How much does cricket turf booking cost?",
    answer: "Hourly rates start from ₹600/hr during morning hours, ₹800/hr in early evenings, and ₹1,200 to ₹1,400/hr during prime floodlit evening and night slots. You can check all available slots in the pricing section above."
  },
  {
    question: "Can I book the cricket turf online?",
    answer: "Yes, visitors can select their preferred available time slot directly on this page and confirm the booking instantly via WhatsApp or phone call."
  },
  {
    question: "Is the turf suitable for cricket practice?",
    answer: "Yes, the facility is designed for both competitive team matches (box cricket / gully cricket format) and individual batting/bowling practice with consistent turf bounce."
  },
  {
    question: "Can I play cricket at night?",
    answer: "Yes! Night cricket is one of our most popular features. Our anti-glare LED floodlight system provides bright, even illumination across the entire 60 × 120 ft arena."
  }
];

export const arenaSpecs = [
  {
    number: "60 × 120 FT",
    subtitle: "SPACE TO PLAY YOUR GAME",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "35 FT",
    subtitle: "HIGH ENCLOSURE",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "24 / 7",
    subtitle: "OPEN WHEN YOU ARE",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "FLOODLIT",
    subtitle: "BUILT FOR NIGHT CRICKET",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1000&auto=format&fit=crop"
  }
];

export const experienceStories = [
  {
    tag: "LIGHTS.",
    title: "LIGHTS.",
    description: "Anti-glare floodlights engineered for crisp ball tracking all night.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop"
  },
  {
    tag: "SPACE.",
    title: "SPACE.",
    description: "35 ft high ceiling enclosure for unrestricted aerial strokeplay.",
    image: "https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?q=80&w=1400&auto=format&fit=crop"
  },
  {
    tag: "ENERGY.",
    title: "ENERGY.",
    description: "Electric match atmosphere built for intense competitive play.",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=1400&auto=format&fit=crop"
  },
  {
    tag: "THE GAME.",
    title: "THE GAME.",
    description: "True-bounce pitch crafted for authentic batting and bowling.",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1400&auto=format&fit=crop"
  }
];

export const pricingTiers = [
  {
    id: "morning",
    title: "MORNING",
    price: "600",
    priceUnit: "HOUR",
    isPopular: false
  },
  {
    id: "day",
    title: "DAY",
    price: "800",
    priceUnit: "HOUR",
    isPopular: false
  },
  {
    id: "evening",
    title: "EVENING",
    price: "1,200",
    priceUnit: "HOUR",
    isPopular: true
  },
  {
    id: "night",
    title: "NIGHT",
    price: "1,400",
    priceUnit: "HOUR",
    isPopular: false
  }
];

