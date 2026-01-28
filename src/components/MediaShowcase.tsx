import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import vastraHappyShowcase from "@/assets/vastra-happy-showcase.mp4";
import happyMusic from "@/assets/happy-upbeat-music.mp3";

const MediaShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [needsGesture, setNeedsGesture] = useState(false);

  const tryPlayAudio = useMemo(
    () => async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        await audio.play();
        setNeedsGesture(false);
      } catch {
        // Autoplay can be blocked until user interacts.
        setNeedsGesture(true);
      }
    },
    []
  );

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const syncAudio = () => {
      try {
        audio.currentTime = video.currentTime;
      } catch {
        // ignore
      }
    };

    const handlePlay = () => {
      syncAudio();
      void tryPlayAudio();
    };

    const handlePause = () => {
      audio.pause();
    };

    const handleSeeked = () => {
      syncAudio();
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [tryPlayAudio]);

  return (
    <section id="media-gallery" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Hidden Audio (separate from video track for consistent music) */}
        <audio ref={audioRef} preload="auto" loop>
          <source src={happyMusic} type="audio/mpeg" />
        </audio>

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
            Immerse yourself in our world of Indian fashion through video experiences
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
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80"
              >
                <source src={vastraHappyShowcase} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {needsGesture && (
                <div className="absolute inset-x-4 bottom-4">
                  <button
                    type="button"
                    onClick={() => void tryPlayAudio()}
                    className="w-full glass rounded-xl px-4 py-3 text-sm font-medium"
                  >
                    Tap to enable music
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">VASTRA - Indian Fashion Showcase 2025</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Experience traditional elegance meets modern fashion 🇮🇳
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
