import { useCallback, useRef, useState } from "react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.volume = 1;
    audio.currentTime = 0;
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
                  onClick={musicPlaying ? stopMusic : startMusic}
                  className="w-full bg-black/70 backdrop-blur-sm text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
                >
                  {musicPlaying ? "🔊 Music Playing - Tap to Stop" : "🔇 Tap to Play Music"}
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
