export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  badge: string;
  badgeColor: string;
  image: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
  material?: string;
  rating?: number;
  reviews?: number;
}

export const categories = [
  "All",
  "Women",
  "Men",
  "Accessories",
  "Limited Edition",
  "Ethnic",
  "Footwear",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Edge Dress",
    category: "Women",
    price: 2999,
    badge: "New Arrival",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
    description: "A stunning urban-inspired dress that blends contemporary style with everyday comfort. Perfect for both casual outings and semi-formal occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    material: "Premium Cotton Blend",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Midnight Luxe Gown",
    category: "Limited Edition",
    price: 8999,
    badge: "Limited",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
    description: "An exquisite limited edition gown crafted for those special moments. Features intricate detailing and premium fabric.",
    sizes: ["S", "M", "L"],
    colors: ["Midnight Blue", "Black"],
    material: "Silk with Lace Detailing",
    rating: 4.9,
    reviews: 45,
  },
  {
    id: 3,
    name: "Neo Classic Blazer",
    category: "Men",
    price: 3999,
    badge: "Bestseller",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
    description: "A modern take on the classic blazer. Tailored fit with contemporary styling for the discerning gentleman.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy", "Black"],
    material: "Wool Blend",
    rating: 4.7,
    reviews: 234,
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    category: "Accessories",
    price: 1499,
    badge: "Trending",
    badgeColor: "bg-sky-500",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    description: "Premium designer sunglasses with UV protection. Lightweight titanium frame with polarized lenses.",
    colors: ["Gold/Brown", "Silver/Black", "Rose Gold"],
    material: "Titanium Frame, Polarized Glass",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 5,
    name: "Spring Bloom Top",
    category: "Women",
    price: 2499,
    badge: "Pre-Order",
    badgeColor: "bg-pink-400",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    description: "A fresh and vibrant top inspired by spring florals. Light, breathable, and perfect for warm days.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Pink", "White", "Peach"],
    material: "100% Organic Cotton",
    rating: 4.4,
    reviews: 67,
  },
  {
    id: 6,
    name: "Street Rebel Jacket",
    category: "Men",
    price: 1999,
    badge: "Hot",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
    description: "Bold streetwear-inspired jacket for those who dare to stand out. Features urban detailing and premium construction.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Red"],
    material: "Premium Denim with Cotton Lining",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 7,
    name: "Silk Saree Collection",
    category: "Ethnic",
    price: 5999,
    badge: "Traditional",
    badgeColor: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    description: "Exquisite handwoven silk saree with traditional motifs. A timeless piece for special occasions.",
    colors: ["Royal Purple", "Emerald Green", "Maroon"],
    material: "Pure Kanchipuram Silk",
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 8,
    name: "Embroidered Kurta Set",
    category: "Ethnic",
    price: 3499,
    badge: "Festive",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    description: "Elegant kurta set with intricate embroidery. Perfect for festivals and celebrations.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Ivory", "Beige", "Sky Blue"],
    material: "Cotton Silk",
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 9,
    name: "Premium Leather Belt",
    category: "Accessories",
    price: 999,
    badge: "Classic",
    badgeColor: "bg-zinc-500",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    description: "Handcrafted genuine leather belt with brushed metal buckle. A wardrobe essential.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Tan", "Black", "Brown"],
    material: "Full Grain Leather",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 10,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2799,
    badge: "Comfort",
    badgeColor: "bg-teal-500",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    description: "Ultra-comfortable sneakers with memory foam insoles. Perfect for all-day wear.",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White/Red", "Black/White", "Navy"],
    material: "Mesh Upper, Rubber Sole",
    rating: 4.5,
    reviews: 289,
  },
  {
    id: 11,
    name: "Formal Oxford Shoes",
    category: "Footwear",
    price: 4499,
    badge: "Premium",
    badgeColor: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&auto=format&fit=crop&q=80",
    description: "Classic Oxford shoes crafted from premium leather. Perfect for formal occasions.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Black", "Brown", "Burgundy"],
    material: "Full Grain Leather",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 12,
    name: "Designer Handbag",
    category: "Accessories",
    price: 3299,
    badge: "Luxury",
    badgeColor: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    description: "Elegant designer handbag with multiple compartments. Crafted from premium vegan leather.",
    colors: ["Nude", "Black", "Tan", "Red"],
    material: "Premium Vegan Leather",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 13,
    name: "Floral Maxi Dress",
    category: "Women",
    price: 2799,
    badge: "Summer",
    badgeColor: "bg-yellow-500",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    description: "Flowing maxi dress with beautiful floral prints. Light and breezy for summer days.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue Floral", "Pink Floral", "White Floral"],
    material: "Chiffon",
    rating: 4.4,
    reviews: 92,
  },
  {
    id: 14,
    name: "Denim Jeans",
    category: "Men",
    price: 1799,
    badge: "Essential",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=80",
    description: "Classic fit denim jeans with comfort stretch. A wardrobe essential for every man.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    material: "Premium Stretch Denim",
    rating: 4.5,
    reviews: 321,
  },
  {
    id: 15,
    name: "Lehenga Choli",
    category: "Ethnic",
    price: 12999,
    badge: "Bridal",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop&q=80",
    description: "Stunning bridal lehenga with heavy embroidery and stonework. Perfect for weddings and grand celebrations.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Maroon", "Pink"],
    material: "Velvet with Zari Work",
    rating: 4.9,
    reviews: 56,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const filterProducts = (
  category: string,
  searchQuery: string,
  priceRange: [number, number]
): Product[] => {
  return products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });
};
