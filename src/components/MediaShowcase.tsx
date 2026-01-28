import { useCallback, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

import happyMusic from "@/assets/happy-upbeat-music.mp3";
import vastraHappyShowcase from "@/assets/vastra-happy-showcase.mp4";

const MediaShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playBoth = useCallback(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    // Play both in the same gesture
    video.play().catch(() => {});
    audio.muted = false;
    audio.volume = 1;
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const pauseBoth = useCallback(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    video.pause();
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseBoth();
    } else {
      playBoth();
    }
  }, [isPlaying, playBoth, pauseBoth]);

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
            <div 
              className="relative aspect-video bg-black cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                loop
                poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
              >
                <source src={vastraHappyShowcase} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Big play/pause button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-black" />
                  ) : (
                    <Play className="w-10 h-10 text-black ml-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
