"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

// ✏️ แก้รหัสผ่านตรงนี้ได้เลยครับ (ตัวเลข 4 หลัก)
const CORRECT_PIN = "281065";

interface PinLockProps {
  onUnlock: () => void;
}

export default function PinLock({ onUnlock }: PinLockProps) {
  const [entered, setEntered] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [open, setOpen] = useState(false);
  const pressKey = (k: string) => {
    if (entered.length >= 6 || status === "error" || status === "success") return;
    const next = entered + k;
    setEntered(next);
    if (next.length === 6) {
      setTimeout(() => checkPin(next), 200);
    }
  };

  const deleteLast = () => {
    if (status === "error" || status === "success") return;
    setEntered((prev) => prev.slice(0, -1));
  };

  const checkPin = (pin: string) => {
    if (pin === CORRECT_PIN) {
      setStatus("success");
      setTimeout(() => onUnlock(), 800);
    } else {


setStatus("error");

const random =
  randomAlerts[Math.floor(Math.random() * randomAlerts.length)];

alert(random);
      setTimeout(() => {
        setEntered("");
        setStatus("idle");
      }, 1000);
    }
  };
  
  const [errorMessage, setErrorMessage] = useState("");
  const randomAlerts = [
  "เอ้าแค่นี้ก็ลืม เส้าวะบี๋",
  "จำได้ป่าวเอาดีๆ",
  "ลืม อ่อ?!!?!? ",
  "อย่าให้มีครั้งต่อไป",
  "ผิดอีกแล้วว",
  "งอนจริง แค่นี้ก็ลืม",
  "อะๆ ให้คิดอีกที",

];

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") pressKey(e.key);
      if (e.key === "Backspace") deleteLast();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const dots = Array.from({ length: 6 }, (_, i) => {
    if (status === "error") return "error";
    if (status === "success") return "success";
    return i < entered.length ? "filled" : "empty";
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "2rem",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, #1a0d14 0%, var(--bg) 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%", maxWidth: "300px" }}>

        {/* Top divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginBottom: "2rem",
        }} />

        {/* Label */}
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.6rem",
          letterSpacing: "0.45em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          — Enter password —
        </p>

        {/* Title */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.6rem",
          fontWeight: "400",
          color: "var(--text)",
          marginBottom: "0.4rem",
        }}>
          🩷 Anniversary 🩷
        </h1>

        {/* ✏️ แก้คำบรรยายใต้ชื่อ */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          marginBottom: "2.5rem",
        }}>
          เก่งจริงต้องไม่กด คำใบ้ นะ
          
         </p>
       
       
        {/* PIN Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "2.5rem" }}>
          {dots.map((state, i) => (
            <motion.div
              key={i}
              animate={state === "error" ? { x: [0, -4, 4, -4, 0] } : {}}
              transition={{ duration: 0.3 }}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: `1px solid ${
                  state === "filled" ? "var(--gold)"
                  : state === "error" ? "var(--rose)"
                  : state === "success" ? "#4a7c59"
                  : "var(--border)"
                }`,
                background:
                  state === "filled" ? "var(--gold)"
                  : state === "error" ? "var(--rose)"
                  : state === "success" ? "#4a7c59"
                  : "transparent",
                transition: "background 0.2s, border-color 0.2s",
              }}
            />
          ))}
        </div>

        {/* Number Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "1rem" }}>
          {["1","2","3","4","5","6","7","8","9"].map((k) => (
            <button
              key={k}
              onClick={() => pressKey(k)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                color: "var(--text)",
                fontSize: "1.3rem",
                fontFamily: "var(--font-body)",
                padding: "1rem 0",
                cursor: "pointer",
                transition: "background 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#2a1a22";
                (e.target as HTMLButtonElement).style.borderColor = "var(--rose)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "var(--surface)";
                (e.target as HTMLButtonElement).style.borderColor = "var(--border)";
              }}
            >
              {k}
            </button>
          ))}

          {/* Bottom row: empty, 0, delete */}
          <div />
          <button
            onClick={() => pressKey("0")}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              color: "var(--text)",
              fontSize: "1.3rem",
              fontFamily: "var(--font-body)",
              padding: "1rem 0",
              cursor: "pointer",
              transition: "background 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#2a1a22";
              (e.target as HTMLButtonElement).style.borderColor = "var(--rose)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "var(--surface)";
              (e.target as HTMLButtonElement).style.borderColor = "var(--border)";
            }}
          >
            0
          </button>
          <button
            onClick={deleteLast}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              fontSize: "1.2rem",
              cursor: "pointer",
              padding: "1rem 0",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = "var(--rose-light)"; }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = "var(--text-muted)"; }}
          >
            ⌫
          </button>
        </div>

        {/* Status message */}
        <div style={{ height: "1.2rem", marginTop: "0.5rem" }}>
          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.p
                key="err"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--rose-light)",
                }}
              >
                {errorMessage}
              </motion.p>
            )}
            {status === "success" && (
              <motion.p
                key="ok"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                }}
              >
                ✓ เก่งอ่าาาาแฟน♥
              </motion.p>
            )}
          </AnimatePresence>
        </div>
            {/* test */}
              {/* Button */}
      <button
  onClick={() => setOpen(true)}
  className="
    group
    relative
    overflow-hidden
    px-10 py-4
    rounded-2xl
    bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600
    text-white
    font-semibold
    tracking-wide
    shadow-[0_0_30px_rgba(244,114,182,0.35)]
    transition-all duration-300
    hover:scale-105
    hover:shadow-[0_0_45px_rgba(244,114,182,0.55)]
    active:scale-95
  "
>
  {/* Shine effect */}
  <span
    className="
      absolute inset-0
      -translate-x-full
      group-hover:translate-x-full
      transition-transform duration-1000
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
    "
  />

  <span className="relative z-10 flex items-center gap-2">
    💖 คำใบ้ 🤔
  </span>
</button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          
          <div className="
            relative
            w-[320px]
            rounded-3xl
            bg-[#ff69b4]/20
            border border-pink-200/20
            backdrop-blur-2xl
            p-6
            text-white
            shadow-2xl
          ">
            <div className="text-center text-5xl mb-3">
              💖
            </div>

            <h1 className="text-center text-2xl font-bold mb-2">
              นั้นไงคนอ้วน เปิดดูคำใบ้
            </h1>

            <p className="text-center text-pink-100/80 mb-5">
              เราคบกันวันเดือนปีไหนน้าาา?? ติกตอก ✨
            </p>

            <button
              onClick={() => setOpen(false)}
              className="
                w-full py-2
                rounded-xl
                bg-pink-500
                hover:bg-pink-600
                transition
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    
              

            {/* test */}
        {/* Bottom divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginTop: "1.5rem",
        }} />
      </div>
      
    </motion.div>
    
  );
  
}
