import { useCallback, useRef } from "react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";
import vastraHappyShowcase from "@/assets/vastra-happy-showcase.mp4";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.volume = 1;
    audio.play().catch(() => {});
  }, []);

  const stopMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }, []);

  return (
    <section id="media-gallery" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-8">
          Fashion Runway
        </h2>

        <div className="max-w-4xl mx-auto">
          <audio ref={audioRef} preload="auto" loop>
            <source src={happyMusic} type="audio/mpeg" />
          </audio>

          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                onPlay={startMusic}
                onPause={stopMusic}
                onEnded={stopMusic}
                poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
              >
                <source src={vastraHappyShowcase} type="video/mp4" />
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
