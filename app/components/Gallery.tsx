"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface GalleryProps {
  onNavigate: (page: "home" | "all" | "letter" | "gallery" | "timeline" | "quiz" | "goal") => void;
}

const PHOTOS = [
  { src: "/pic/seeu.jpg", alt: "ความทรงจำที่ 1", caption: "วันที่อ้วนกับเค้าเจอกันครั้งแรก ตอนนั้นเค้าเขินมากก" },
  { src: "/pic/F.jpg", alt: "ความทรงจำที่ 2", caption: "นี้คือวันที่เราคบกันไง น่ารักเนอะสมัยผอมๆ" },
  { src: "/pic/kaset.jpg", alt: "ความทรงจำที่ 3", caption: "ไปเที่ยวด้วยกัน ปาเป้าครั้งแรกในชีวิตก็ได้เลย เป็นเพราะมีเธอแน่ๆ เค้าถึงได้มา" },
  { src: "/pic/kachat.jpg", alt: "ความทรงจำที่ 4", caption: "ส่วนนี้งานกาชาด ตอนนั้นหู้วววไปไกลมาก เราไปเที่ยวด้วยกันบ่อยมาก ตอนนั้นเค้างอนเธอด้วยไม่ยอมให้เค้าแท็ก" },
  { src: "/pic/WAT.jpg", alt: "ความทรงจำที่ 5", caption: "นี้~~ ไปวัดด้วยกันครั้งแรก ที่เกาะเกร็ด เช้ามาก ไม่เคยทำบุญแล้วสนุกแบบนี้เลย" },
  { src: "/pic/SK.PNG", alt: "ความทรงจำที่ 6", caption: "สวนงู!!! น่ากลัวว ตอนนี้สีผมเธอสวยมากเค้าชอบมากเลย" },
  { src: "/pic/ROI.jpg", alt: "ความทรงจำที่ 7", caption: "ลอยกระทง กับ ผญ ครั้งแรกว้าาาเค้าอะ จำได้เลยตอนนั้นทำมือถือตกน้ำ ตลกมาก5555" },
  { src: "/pic/CDT.jpg", alt: "ความทรงจำที่ 8", caption: "พาแฟนขึ้นรถไฟ ครั้งแรกที่รู้ว่าแฟนไม่เคยขึ้นแบบตกใจนะ ไปเที่ยวต่างจังหวัดด้วยกันครั้งแรกด้วย" },
  { src: "/pic/CD.jpg", alt: "ความทรงจำที่ 9", caption: "ติดต่อกันเลย เค้าดาว ด้วยกันปีแรก น่ารักมากกก ดูคอนฟรีด้วยกันอีก น่ารักแบบ มุมิ มุมิ อยากไปกับเบบี๋ทุกปีเลย" },
  { src: "/pic/ART.PNG", alt: "ความทรงจำที่ 10", caption: "ไประบายด้วยกัน อันนี้เค้าชอบมาก ถึงเค้าจะไม่เก่งก็เถอะ แต่ชอบทำอะไรด้วยกันแบบนี้มาก" },
  { src: "/pic/CAT.jpg", alt: "ความทรงจำที่ 11", caption: "ส่วนนี้หน้าตา ลูกของพวกเรา รวมถึงเด็กๆที่บ้านเธอด้วย มูมู้ โมโม่ มาม่า โชคดี " },
];

const GRADIENTS = [
  "linear-gradient(135deg, #2a0d1a 0%, #1a0d20 100%)",
  "linear-gradient(135deg, #1a0d20 0%, #0d1a2a 100%)",
  "linear-gradient(135deg, #0d1a2a 0%, #2a0d1a 100%)",
  "linear-gradient(135deg, #200d1a 0%, #1a200d 100%)",
  "linear-gradient(135deg, #1a0d1a 0%, #0d1a1a 100%)",
  "linear-gradient(135deg, #2a1a0d 0%, #1a0d2a 100%)",
];

export default function Gallery({ onNavigate }: GalleryProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + PHOTOS.length) % PHOTOS.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      position: "relative",
    }}>
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Top divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginBottom: "2rem",
        }} />

        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.6rem",
          letterSpacing: "0.5em",
          color: "var(--gold)",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "2rem",
        }}>
          — แกลเลอรี่ความทรงจำ —
        </p>

        {/* Phone frame with AnimatePresence inside */}
        <div style={{
          background: "#0f0a0d",
          borderRadius: "40px",
          border: "2px solid #2e1f28",
          boxShadow: "0 0 0 6px #110c0f, 0 30px 80px rgba(0,0,0,0.6)",
          overflow: "hidden",
          position: "relative",
          width: "320px",
        }}>

          {/* Notch */}
          <div style={{
            background: "#0a0608",
            padding: "14px 20px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
            }}>
              {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, "0")}
            </span>
            <div style={{
              width: "80px", height: "20px",
              background: "#0a0608",
              borderRadius: "0 0 14px 14px",
              border: "1px solid #1a1118",
              borderTop: "none",
            }} />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.55rem",
              color: "var(--text-muted)",
            }}>
              ●●●
            </span>
          </div>

          {/* Sliding image inside frame */}
          <div style={{ overflow: "hidden", position: "relative" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {PHOTOS[current].src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={PHOTOS[current].src}
                    alt={PHOTOS[current].alt}
                    style={{
                      width: "100%",
                      maxHeight: "55vh",
                      objectFit: "contain",
                      display: "block",
                      background: "#0a0608",
                    }}
                  />
                ) : (
                  <div style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    background: GRADIENTS[current % GRADIENTS.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}>
                    <div style={{ fontSize: "3rem", opacity: 0.2 }}>📷</div>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: "var(--text-muted)",
                    }}>
                      เพิ่มรูปภาพ
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Home bar */}
          <div style={{
            padding: "0.75rem",
            display: "flex",
            justifyContent: "center",
            background: "#0a0608",
          }}>
            <div style={{
              width: "100px", height: "4px",
              background: "#2e1f28",
              borderRadius: "2px",
            }} />
          </div>
        </div>

        {/* Caption */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          textAlign: "center",
          marginTop: "1rem",
          minHeight: "3rem",
          maxWidth: "320px",
        }}>
          {PHOTOS[current].caption}
        </p>

        {/* Controls */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}>
          <button
            onClick={() => go(-1)}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              color: "var(--gold)",
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              padding: "0.6rem 1.2rem",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            ←
          </button>

          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
            }}>
              {current + 1} / {PHOTOS.length}
            </p>
            <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
              {PHOTOS.map((_, i) => (
                <div
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  style={{
                    width: i === current ? "16px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === current ? "var(--gold)" : "var(--border)",
                    cursor: "pointer",
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => go(1)}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              color: "var(--gold)",
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              padding: "0.6rem 1.2rem",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            →
          </button>
        </div>

        {/* Bottom divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          margin: "2rem 0 0",
        }} />

        {/* Back button */}
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={() => onNavigate("all")}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              color: "var(--text-muted)",
              fontFamily: "var(--font-display)",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              padding: "0.7rem 2rem",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            ← BACK
          </button>
        </div>
      </div>
    </section>
  );
}