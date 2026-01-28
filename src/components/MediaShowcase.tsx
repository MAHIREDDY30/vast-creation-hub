import { useCallback, useRef, useState } from "react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";
import vastraHappyShowcase from "@/assets/vastra-happy-showcase.mp4";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.volume = 1;
    audio.currentTime = 0;

    try {
      audio.load();
    } catch {
      // ignore
    }

    const p = audio.play();
    if (p && typeof (p as Promise<void>).then === "function") {
      (p as Promise<void>)
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false));
    }
  }, []);

  const stopMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setMusicPlaying(false);
  }, []);

  return (
    <section
      id="media-gallery"
      className="py-20 bg-card/50"
      onPointerDown={startMusic}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-8">
          Fashion Runway
        </h2>

        <div className="max-w-4xl mx-auto">
          <audio ref={audioRef} preload="auto" loop>
            <source src={happyMusic} type="audio/mpeg" />
          </audio>

          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <div className="relative aspect-video bg-black">
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

              <div className="absolute bottom-4 left-4 right-4">
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (musicPlaying) stopMusic();
                    else startMusic();
                  }}
                  className="w-full bg-background/80 backdrop-blur-sm text-foreground rounded-xl px-4 py-3 text-sm font-medium border border-border/40"
                >
                  {musicPlaying ? "🔊 Music On - Tap to Stop" : "🔇 Tap to Play Music"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
