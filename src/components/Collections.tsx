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
];

const products = [
  {
    id: 1,
    name: "Urban Edge",
    category: "Women",
    price: 299,
    badge: "New Arrival",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Midnight Luxe",
    category: "Limited Edition",
    price: 899,
    badge: "Limited",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Neo Classic",
    category: "Men",
    price: 399,
    badge: "Bestseller",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Accent Pieces",
    category: "Accessories",
    price: 149,
    badge: "Trending",
    badgeColor: "bg-sky-500",
    image: "https://images.unsplash.com/photo-1611923134239-b9be5816e8c2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Spring Bloom",
    category: "Women",
    price: 249,
    badge: "Pre-Order",
    badgeColor: "bg-pink-400",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Street Rebel",
    category: "Men",
    price: 199,
    badge: "Hot",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
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
                      From ${product.price}
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
