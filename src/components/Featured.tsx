import { motion } from "framer-motion";
import { Crown, Leaf, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Crown,
    title: "Premium Quality",
    description: "Only the finest materials and fabrics make it into our collections",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Ethically sourced materials with carbon-neutral production",
  },
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Each piece is carefully crafted by skilled artisans",
  },
];

const Featured = () => {
  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-heading uppercase tracking-widest">
              Crafted with Passion
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
              The Art of Fashion
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Where tradition meets innovation. Our master craftsmen blend
              centuries-old techniques with cutting-edge design to create pieces
              that transcend time and trends. VASTRA brings global fashion on
              your fingertips. Based in India, we provide a perfect combination
              of traditional and global fashion.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="xl">
              Discover Our Craft
            </Button>
          </motion.div>

          {/* Right Content - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 aspect-[16/10] rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"
                  alt="Fashion Collection Showcase"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Images */}
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&auto=format&fit=crop&q=80"
                  alt="Luxury Fashion Details"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80"
                  alt="Artisan Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
