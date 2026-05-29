"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PinLock from "./components/PinLock";
import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import ALL from "./components/ALL";
import Quiz from "./components/Quiz";
import Goals from "./components/Goals";


export default function Home() {
  
  const [unlocked, setUnlocked] = useState(false);
  const [page, setPage] = useState<"home" | "all" | "letter" | "gallery" | "timeline" | "quiz" | "goal">("home");
  const audioRef = useRef<HTMLAudioElement | null>(null);


  // Play music after first click anywhere
  useEffect(() => {
    const startMusic = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
        } catch (err) {
          console.log("Autoplay blocked");
        }
      }

      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Music */}
      <audio ref={audioRef} loop hidden>
        <source src="/soi.mp3" type="audio/mpeg" />
      </audio>

      {/* Animated Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] bg-animate"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[120px] bg-animate"></div>

        {/* Sparkles */}
        <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-white rounded-full sparkle shadow-[0_0_20px_white]"></div>

        <div className="absolute top-[40%] right-[20%] w-4 h-4 bg-pink-300 rounded-full sparkle shadow-[0_0_25px_#f9a8d4] [animation-delay:1s]"></div>

        <div className="absolute bottom-[25%] left-[15%] w-3 h-3 bg-pink-200 rounded-full sparkle shadow-[0_0_20px_#fbcfe8] [animation-delay:2s]"></div>

        <div className="absolute top-[70%] right-[40%] w-2 h-2 bg-white rounded-full sparkle shadow-[0_0_15px_white] [animation-delay:3s]"></div>

        <div className="absolute top-[15%] right-[10%] text-pink-200 text-xl sparkle [animation-delay:1.5s]">
          ✨
        </div>

        <div className="absolute bottom-[30%] left-[20%] text-pink-300 text-2xl sparkle [animation-delay:2.5s]">
          💖
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">

        <AnimatePresence mode="wait">
          {!unlocked && (
            <PinLock onUnlock={() => setUnlocked(true)} />
          )}
        </AnimatePresence>

        {unlocked && (
          <main>
             {page === "home" && <Hero onNavigate={setPage} />}
    {page === "all" && <ALL onNavigate={setPage} />}
    {page === "letter" && <LoveLetter onNavigate={setPage} />}
    {page === "gallery" && <Gallery onNavigate={setPage} />}
    {page === "quiz" && <Quiz onNavigate={setPage} />}
    {page === "goal" && <Goals onNavigate={setPage} />}
            
            
          </main>
        )}

      </div>
    </div>
  );
}