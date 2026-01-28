import { useCallback, useRef } from "react";

import runwayVideo from "@/assets/vastra-fashion-showcase.mp4";
import happyMusic from "@/assets/happy-upbeat-music.mp3";

const MediaShowcase = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Desktop + mobile-safe: starts music when the user presses Play on the video.
  // If the browser still blocks it, the user can press play on the audio controls below.
  const startMusic = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = false;
    a.volume = 1;
    const p = a.play();
    if (p && typeof (p as Promise<void>).catch === "function") {
      (p as Promise<void>).catch(() => {
        // blocked - user can use audio controls
      });
    }
  }, []);

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
                onPlay={startMusic}
              >
                <source src={runwayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Guaranteed sound control (in case autoplay is blocked or the MP4 is silent) */}
          <div className="mt-4">
            <audio ref={audioRef} controls preload="auto" className="w-full">
              <source src={happyMusic} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
