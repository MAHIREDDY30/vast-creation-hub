import { useCallback, useRef, useState } from "react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState<string | null>(null);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setMusicError(null);
    audio.muted = false;
    audio.volume = 1;
    audio.currentTime = 0;

    // Some mobile browsers require load() to be called after a gesture.
    try {
      audio.load();
    } catch {
      // ignore
    }

    const p = audio.play();
    if (p && typeof (p as Promise<void>).then === "function") {
      (p as Promise<void>)
        .then(() => {
          console.log("[MediaShowcase] music started");
          setMusicPlaying(true);
          setMusicError(null);
        })
        .catch((err) => {
          console.warn("[MediaShowcase] music blocked", err);
          setMusicPlaying(false);
          setMusicError("Music blocked by browser. Tap the video area once, then tap Play Music again.");
        });
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
              {/* Using a reliable Pexels fashion video */}
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                autoPlay
                muted
                loop
                onPlay={startMusic}
                onPause={stopMusic}
                onEnded={stopMusic}
              >
                <source
                  src="https://videos.pexels.com/video-files/3753716/3753716-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Music toggle button */}
              <div className="absolute bottom-4 left-4 right-4">
                <button
                  type="button"
                  onPointerDown={(e) => {
                    // Keep the gesture in the same call stack for mobile browsers.
                    e.preventDefault();
                    if (musicPlaying) stopMusic();
                    else startMusic();
                  }}
                  className="w-full bg-background/80 backdrop-blur-sm text-foreground rounded-xl px-4 py-3 text-sm font-medium border border-border/40"
                >
                  {musicPlaying ? "Music: On (tap to stop)" : "Tap to play music"}
                </button>

                {musicError && (
                  <p className="mt-2 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/40">
                    {musicError}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
