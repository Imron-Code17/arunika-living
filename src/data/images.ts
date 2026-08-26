/**
 * Centralized Image Configuration for Arunika Living
 * 
 * IMPORTANT: All image URLs for the website are defined here.
 * To replace dummy photos with real client project photos, simply update
 * the URLs in this file. No component or page changes are required.
 */

export const IMAGES = {
  // Hero Section Primary Image
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80", // Warm modern luxury minimalist living room

  // About Section Studio / Detail Image
  about: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", // Elegant warm neutral interior with wooden textures

  // Services Section Images
  services: {
    interior: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", // Desain Interior Rumah
    furniture: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80", // Furniture Custom & Kitchen Set
  },

  // Portfolio Gallery Images
  portfolio: {
    interior1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Modern Luxury Living Room
    interior2: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", // Minimalist Dining & Living Area
    kitchen1: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80", // Custom Kitchen Set with Warm Wood
    kitchen2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80", // Modern Island Kitchen Cabinetry
    furniture1: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80", // Custom Wooden Cabinet & Shelving
    furniture2: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80", // Custom Wardrobe & Storage Console
    bedroom1: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", // Modern Warm Minimalist Bedroom
    bedroom2: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80", // Japandi Aesthetic Master Suite
    livingSpace: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", // Warm Architectural Lounge & Custom Paneling
  },

  // Promo Banner / Aesthetic Background Accent
  promoBanner: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80",
} as const;

export type ImagesConfig = typeof IMAGES;
