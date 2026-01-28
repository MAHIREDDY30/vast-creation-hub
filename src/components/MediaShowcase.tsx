import { motion } from "framer-motion";

const MediaShowcase = () => {
  return (
    <section id="media-gallery" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-heading uppercase tracking-widest">
            Experience VASTRA
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Media <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Immerse yourself in our world of fashion through video experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <div className="aspect-video bg-background">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">Fashion Runway 2025</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Explore our latest collection on the runway
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
