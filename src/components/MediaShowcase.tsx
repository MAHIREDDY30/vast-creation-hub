import { useCallback, useRef, useState } from "react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";
import vastraShowcase from "@/assets/vastra-showcase.mp4";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicBlocked, setMusicBlocked] = useState(false);

  // Keep non-async for better iOS gesture compatibility
  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.volume = 1;
    audio.currentTime = 0;
    const p = audio.play();
    if (p && typeof (p as Promise<void>).catch === "function") {
      (p as Promise<void>)
        .then(() => setMusicBlocked(false))
        .catch(() => setMusicBlocked(true));
    }
  }, []);

  const stopMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }, []);

  return (
    <section
      id="media-gallery"
      className="py-20 bg-card/50"
      onPointerDown={startMusic}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <audio ref={audioRef} preload="auto" loop>
            <source src={happyMusic} type="audio/mpeg" />
          </audio>

          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <div className="relative aspect-video bg-background">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                onPlay={startMusic}
                onPause={stopMusic}
                onEnded={stopMusic}
              >
                <source src={vastraShowcase} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {musicBlocked && (
                <div className="absolute inset-x-4 bottom-4">
                  <button
                    type="button"
                    onClick={startMusic}
                    className="w-full glass rounded-xl px-4 py-3 text-sm font-medium"
                  >
                    Tap to enable music
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
