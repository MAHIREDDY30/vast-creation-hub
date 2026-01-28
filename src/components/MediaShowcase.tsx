import runwayVideo from "@/assets/vastra-fashion-showcase.mp4";

const MediaShowcase = () => {
  return (
    <section id="media-gallery" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-8">
          Fashion Runway
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
              >
                <source src={runwayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
