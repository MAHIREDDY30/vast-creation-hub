import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "All",
  "Women",
  "Men",
  "Accessories",
  "Limited Edition",
  "Ethnic",
  "Footwear",
];

const products = [
  {
    id: 1,
    name: "Urban Edge Dress",
    category: "Women",
    price: 2999,
    badge: "New Arrival",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Midnight Luxe Gown",
    category: "Limited Edition",
    price: 8999,
    badge: "Limited",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Neo Classic Blazer",
    category: "Men",
    price: 3999,
    badge: "Bestseller",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    category: "Accessories",
    price: 1499,
    badge: "Trending",
    badgeColor: "bg-sky-500",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Spring Bloom Top",
    category: "Women",
    price: 2499,
    badge: "Pre-Order",
    badgeColor: "bg-pink-400",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Street Rebel Jacket",
    category: "Men",
    price: 1999,
    badge: "Hot",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Silk Saree Collection",
    category: "Ethnic",
    price: 5999,
    badge: "Traditional",
    badgeColor: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Embroidered Kurta Set",
    category: "Ethnic",
    price: 3499,
    badge: "Festive",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Premium Leather Belt",
    category: "Accessories",
    price: 999,
    badge: "Classic",
    badgeColor: "bg-zinc-500",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2799,
    badge: "Comfort",
    badgeColor: "bg-teal-500",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Formal Oxford Shoes",
    category: "Footwear",
    price: 4499,
    badge: "Premium",
    badgeColor: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Designer Handbag",
    category: "Accessories",
    price: 3299,
    badge: "Luxury",
    badgeColor: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 13,
    name: "Floral Maxi Dress",
    category: "Women",
    price: 2799,
    badge: "Summer",
    badgeColor: "bg-yellow-500",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 14,
    name: "Denim Jeans",
    category: "Men",
    price: 1799,
    badge: "Essential",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 15,
    name: "Lehenga Choli",
    category: "Ethnic",
    price: 12999,
    badge: "Bridal",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop&q=80",
  },
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="collections" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-heading uppercase tracking-widest">
            Shop Now
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4">
            Latest Collections
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover our curated selection of premium fashion pieces
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                    {/* Badge */}
                    <span
                      className={`absolute top-4 left-4 ${product.badgeColor} text-foreground text-[10px] font-heading uppercase tracking-wider px-3 py-1 rounded-full`}
                    >
                      {product.badge}
                    </span>

                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
                      <Heart size={18} />
                    </button>

                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <Button
                        variant="hero"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        Buy Now
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-background/80 backdrop-blur-sm border-border/50"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingBag size={18} />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {product.category}
                    </p>
                    <p className="text-primary font-heading text-lg font-bold">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Collections;
