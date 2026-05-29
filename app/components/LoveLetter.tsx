"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface ALL {
  onNavigate: (page: "home" | "all" | "letter" | "gallery" | "timeline") => void;
}

// ✏️ แก้ข้อความตรงนี้ได้เลยครับ
const LETTER = {
  greeting: "ถึงไอ่อ้วนตูดเหม็น",
  paragraphs: [
    "วันนี้วันครบรอบของเราทั้งสอง เราคบกันมานานเนอะ 3Y 7M ละ ฮ่าฮ่าฮ่า สุขสันวันครบรอบนะอ้วน",
    "ในนี้อาจจะให้ช้าไปหน่อย แต่เค้ารักเธอนะ จุฟๆ💖 อยากบอกว่าเค้า รักเธอที่สุดในโลกกก รักมากกกๆ ไม่อยากทำให้เบบี๋เสียใจแล้ว เค้าขอโทษที่ผ่านมานะ",
    "ก็ขอขอบคุณเธอนะที่คอยเฝ้าดูเค้า สอนเค้า ดุเค้า และ รักเค้า นี้อาจจะไม่ใช่สิ่งที่มีราคาแต่เค้าตั้งใจทำนะอ้วน 55555 แฟนอาจจะสงสัยทำไมเค้าเลือกเพลงนี้ เค้ารู้สึกว่ามันเป็นเพลงที่เค้าทำให้นึกถึงอ้วนตลอดเวลา ชอบโมเม้นตอนนั้นที่นั่งรถไฟไปด้วยนะ มันดีมากๆเลย อยากนั้งไปด้วยกันอีกจัง ชอบตอนฟังเพลงแล้วไปเที่ยวด้วยกัน นั้งไปด้วยกัน จับมือไปไหนด้วยกัน ถึงจะลำบากแต่เค้าชอบนะ รู้สึกว่ามีเธอ ไม่ว่าจะที่ไหนเค้าก็ไปได้ จากคนที่ชอบอยู่บ้าน ตอนนี้ชอบมีเธอไปทุกที่ละ ",
    "ขอบคุณน้าที่เข้ามาทำให้ชีวิตเค้าไม่น่าเบื่อ ขอบคุณที่ไม่ทิ้งเค้าในวันที่เค้าทำตัวไม่น่ารัก ขอบคุณทุกอย่าง ก็ช่วยใจดีกับเค้าเยอะๆหน่อยนะ💓"
  ],
  closing: "ด้วยความรักทั้งหมดที่มี",
  signature: "คนที่รักเธอที่สุด",
 
};

 export default function LoveLetter({
  onNavigate,
}: ALL) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "8rem 2rem",
        maxWidth: "720px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          letterSpacing: "0.5em",
          color: "#000000",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        — Letter to Baby —
      </motion.p>

      {/* Letter card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          background: "linear-gradient(135deg, rgba(26,17,24,0.9) 0%, rgba(17,12,15,0.95) 100%)",
          border: "1px solid var(--border)",
          borderRadius: "2px",
          padding: "clamp(2rem, 6vw, 4rem)",
          position: "relative",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(139,58,82,0.03)",
        }}
      >
        {/* Corner decorations */}
        {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              [pos.includes("top") ? "top" : "bottom"]: "-1px",
              [pos.includes("left") ? "left" : "right"]: "-1px",
              width: "20px",
              height: "20px",
              borderTop: pos.includes("top") ? "1px solid var(--gold)" : "none",
              borderBottom: pos.includes("bottom") ? "1px solid var(--gold)" : "none",
              borderLeft: pos.includes("left") ? "1px solid var(--gold)" : "none",
              borderRight: pos.includes("right") ? "1px solid var(--gold)" : "none",
            }}
          />
        ))}

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.3rem",
            fontStyle: "italic",
            color: "var(--rose-light)",
            marginBottom: "2.5rem",
          }}
        >
          {LETTER.greeting},
        </motion.p>

        {/* Paragraphs */}
        {LETTER.paragraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 + i * 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              lineHeight: "1.9",
              color: "var(--text)",
              marginBottom: "1.5rem",
              textAlign: "justify",
            }}
          >
            {para}
          </motion.p>
        ))}

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.4 }}
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, var(--border), transparent)",
            margin: "2rem 0",
          }}
        />

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
          style={{ textAlign: "right" }}
        >
          <p style={{ fontStyle: "italic", color: "var(--text-muted)", fontSize: "1rem", marginBottom: "0.5rem" }}>
            {LETTER.closing},
          </p>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            color: "var(--gold)",
            letterSpacing: "0.05em",
          }}>
            {LETTER.signature}
          </p>
          
        </motion.div>

      {/* BackButton */}
        <motion.button
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.6 }}
  onClick={() => onNavigate("all")}
  style={{
    marginTop: "2.5rem",
    background: "transparent",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    color: "var(--gold)",
    fontFamily: "var(--font-display)",
    fontSize: "0.65rem",
    letterSpacing: "0.4em",
    padding: "0.8rem 2rem",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "border-color 0.2s, color 0.2s",
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
    (e.currentTarget as HTMLButtonElement).style.color = "var(--gold-light)";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
    (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
  }}
>
  ← BACK 
</motion.button>

      </motion.div>
      
    </section>
  );
}
