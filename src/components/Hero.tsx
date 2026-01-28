import { motion } from "framer-motion";
import { Button } from "./ui/button";

const stats = [
  { value: "500+", label: "Exclusive Pieces" },
  { value: "48H", label: "Fast Delivery" },
  { value: "100%", label: "Sustainable" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 border border-primary/50 text-primary text-xs font-heading uppercase tracking-widest">
                New Collection 2025
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Redefine
              <br />
              Your{" "}
              <span className="text-gradient italic font-light">Style</span>
              <br />
              Revolution
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              Discover our avant-garde collection where high fashion meets
              street culture. Each piece tells a story of rebellion, elegance,
              and innovation.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-3xl font-heading font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Collection
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={() => document.getElementById('media-gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Runway
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80"
                  alt="Fashion Model"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>

              {/* Floating Tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full"
              >
                <span className="text-xs font-heading uppercase tracking-widest text-foreground">
                  Limited Edition
                </span>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-primary/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
