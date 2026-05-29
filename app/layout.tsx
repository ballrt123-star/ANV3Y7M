import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ครบรอบของเรา",
  description: "A love letter in digital form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0f0a0d] via-[#140b10] to-[#0a0608]">

        {/* Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

          {/* Glow */}
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

        {/* Content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}