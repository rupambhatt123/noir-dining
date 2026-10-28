import data from "./restaurantData.json";

const restaurantSections = (data as any)?.categories?.Restaurant?.sections;
const commonData = (data as any)?.common;

// 1. Header & Logo Data
export function getHeaderData() {
  const header = restaurantSections?.Header?.variants?.NoirHeader1;
  return {
    logoImage: header?.logoImage || "/logo.png",
    logoText: header?.logoText || "NOIR",
    tagline: header?.tagline || "DINING",
    navLinks: header?.navLinks || [],
    ctaButton: header?.ctaButton || {
      text: "BOOK A TABLE",
      path: "/contact",
    },
  };
}

// 2. PageBanner Data (Sub-pages ke liye: /p.jpg)
export function getBannerData() {
  const pageBanner =
    restaurantSections?.PageBanner?.variants?.NoirPageBanner1 ||
    restaurantSections?.Banner?.variants?.NoirBanner1;

  return {
    backgroundImage: pageBanner?.backgroundImage || "/p.jpg",
  };
}

// 3. Home Hero Banner Data (Home page ke liye: /hero.png)
export function getHeroData() {
  const hero = restaurantSections?.Banner?.variants?.NoirBanner1;
  const header = restaurantSections?.Header?.variants?.NoirHeader1;

  return {
    logoImage: hero?.logoImage || header?.logoImage || "/logo.png",
    logoText: hero?.logoText || header?.logoText || "NOIR",
    tagline: hero?.tagline || header?.tagline || "DINING",
    backgroundImage: hero?.backgroundImage || "/hero.png",
    ctaButton: hero?.ctaButton || header?.ctaButton || {
      text: "BOOK A TABLE",
      path: "/contact",
    },
  };
}

// 4. About / Story Section Data
export function getAboutData() {
  const about = restaurantSections?.About?.variants?.NoirAbout1;
  return {
    badge: about?.badge || "REFRESH YOUR TASTE BUDS",
    titleLine1: about?.titleLine1 || "Enjoy An",
    titleHighlight: about?.titleHighlight || "Exceptional",
    titleLine2: about?.titleLine2 || "Journey of Taste",
    description: about?.description || "",
    ctaText: about?.ctaText || "DISCOVER MORE",
    ctaLink: about?.ctaLink || "/about",
    imagePrimary: about?.imagePrimary || "/s2.png",
    imageSecondary: about?.imageSecondary || "/s1.png",
  };
}

// 5. Culinary Stats Section Data
export function getCulinaryStatsData() {
  const stats = restaurantSections?.CulinaryStats?.variants?.NoirCulinaryStats1;
  return {
    badge: stats?.badge || "CULINARY EXCELLENCE",
    title: stats?.title || "Passion in",
    titleHighlight: stats?.titleHighlight || "Every Plate",
    description: stats?.description || "",
    image: stats?.image || "/s4.avif",
    counters: stats?.counters || [],
  };
}

// 6. Ambience Section Data
export function getAmbienceData() {
  const ambience = restaurantSections?.Ambience?.variants?.NoirAmbience1;
  return {
    badge: ambience?.badge || "OUR AMBIENCE",
    title: ambience?.title || "A Perfect Setting for Every Occasion",
    description: ambience?.description || "",
    image: ambience?.image || "/s5.avif",
  };
}

// 7. Testimonials Section Data
export function getTestimonialsData() {
  const testimonials = restaurantSections?.Testimonials?.variants?.NoirTestimonials1;
  return {
    badge: testimonials?.badge || "WHAT OUR GUESTS SAY",
    title: testimonials?.title || "TESTIMONIALS",
    items: testimonials?.items || [],
  };
}

// 8. Testimonials Page Data
export function getTestimonialsPageData() {
  const testPage = restaurantSections?.TestimonialsPage?.variants?.NoirTestimonialsPage1;
  return {
    badge: testPage?.badge || "CUSTOMER TESTIMONIALS",
    title: testPage?.title || "WHAT OUR",
    titleHighlight: testPage?.titleHighlight || "GUESTS SAY",
    description: testPage?.description || "",
    items: testPage?.items || [],
  };
}

// 9. Team Section Data
export function getTeamData() {
  const team = restaurantSections?.Team?.variants?.NoirTeam1;
  return {
    bannerImage: team?.bannerImage || "/c.png",
    members: team?.members || [],
  };
}

// 10. Menu Section Data
export function getMenuData() {
  const menu = restaurantSections?.Menu?.variants?.NoirMenu1;
  return {
    categories: menu?.categories || [],
  };
}

// 11. Philosophy Section Data
export function getPhilosophyData() {
  const phil = restaurantSections?.Philosophy?.variants?.NoirPhilosophy1;
  return {
    badge: phil?.badge || "QUALITY & BALANCE",
    title: phil?.title || "OUR FOOD",
    titleHighlight: phil?.titleHighlight || "PHILOSOPHY",
    description: phil?.description || "",
    imagePrimary: phil?.imagePrimary || "",
    imageSecondary: phil?.imageSecondary || "",
  };
}

// 12. Gallery Section Data
export function getGalleryData() {
  const gallery = restaurantSections?.Gallery?.variants?.NoirGallery1;
  return {
    items: gallery?.items || [],
  };
}

// 13. Blog Section Data
export function getBlogData() {
  const blog = restaurantSections?.Blog?.variants?.NoirBlog1;
  return {
    badge: blog?.badge || "OUR BLOG",
    title: blog?.title || "LATEST FROM",
    titleHighlight: blog?.titleHighlight || "OUR KITCHEN",
    description: blog?.description || "",
    posts: blog?.posts || [],
  };
}

// 14. Blog Detail Data
export function getBlogDetailData() {
  const detail = restaurantSections?.BlogDetail?.variants?.NoirBlogDetail1;
  return detail || null;
}

// 15. Contact Section Data
export function getContactData() {
  const contact = restaurantSections?.Contact?.variants?.NoirContact1;
  return {
    badge: contact?.badge || "CONTACT US",
    title: contact?.title || "GET IN",
    titleHighlight: contact?.titleHighlight || "TOUCH",
    description: contact?.description || "",
    responseNote: contact?.responseNote || "We usually respond within 24 hours.",
    image: contact?.image || "/s5.avif",
    phone: commonData?.phone || "+33 123 456 789",
    email: commonData?.email || "info@noirdining.com",
    address: contact?.locationSection?.address || commonData?.address || "",
    locationSection: contact?.locationSection || null,
  };
}

// 16. Footer Section Data
export function getFooterData() {
  const footer = restaurantSections?.Footer?.variants?.NoirFooter1;
  return {
    brandName: footer?.brandName || "NOIR",
    tagline: footer?.tagline || "DINING",
    address: footer?.address || commonData?.address || "Noir Dining Restaurant & Fine Dining, Bordeaux, France",
    phone: footer?.phone || commonData?.phone || "+33 123 456 789",
    email: footer?.email || commonData?.email || "info@noirdining.com",
    navLinks: footer?.navLinks || [],
    socials: footer?.socials || [],
  };
}