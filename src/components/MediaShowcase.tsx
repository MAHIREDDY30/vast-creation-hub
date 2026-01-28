import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";
import vastraHappyShowcase from "@/assets/vastra-happy-showcase.mp4";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.volume = 1;

    const p = audio.play();
    if (p && typeof (p as Promise<void>).then === "function") {
      (p as Promise<void>)
        .then(() => {
          setMusicOn(true);
          setNeedsGesture(false);
        })
        .catch(() => {
          setNeedsGesture(true);
          setMusicOn(false);
        });
    } else {
      setMusicOn(true);
      setNeedsGesture(false);
    }
  }, []);

  const stopMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setMusicOn(false);
  }, []);

  const toggleMusic = useCallback(() => {
    if (musicOn) stopMusic();
    else playMusic();
  }, [musicOn, playMusic, stopMusic]);

  return (
    <section
      id="media-gallery"
      className="py-20 bg-card/50"
      onPointerDown={needsGesture ? playMusic : undefined}
    >
      <div className="container mx-auto px-6">
        {/* Hidden background music */}
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
            <div className="relative aspect-video bg-background">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                onPlay={playMusic}
                onPause={stopMusic}
                poster="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80"
              >
                <source
                  src={vastraHappyShowcase}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-x-4 bottom-4">
                <button
                  type="button"
                  onClick={toggleMusic}
                  className="w-full glass rounded-xl px-4 py-3 text-sm font-medium"
                >
                  {needsGesture
                    ? "Tap to enable music"
                    : musicOn
                      ? "Music: On (tap to turn off)"
                      : "Music: Off (tap to turn on)"}
                </button>
              </div>
            </div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">
                VASTRA - Indian Fashion Showcase 2025
              </h3>
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
