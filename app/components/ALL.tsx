"use client";
import { motion } from "framer-motion";


interface ALL {
  onNavigate: (page: "home" | "all" | "letter" | "gallery" | "timeline" | "goal" | "quiz") => void;
}



const MENU_ITEMS = [
  { icon: "🗓️", label: "เป้าหมาย", sub: "อยากทำให้มันสำเร็จ", page: "goal" as const },
  { icon: "💌", label: "จดหมาย", sub: "ถึงคนน่ารัก", page: "letter" as const },
  { icon: "🧠", label: "คำถาม", sub: "จำกันได้รึป่าว", page: "quiz" as const },
  { icon: "📷", label: "ความทรงจำ", sub: "ที่ผ่านกันมา", page: "gallery" as const },
];


export default function ALL({ onNavigate }: ALL) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      

        {/* Top divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginBottom: "2rem",
        }} />

        <h1><motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            letterSpacing: "0.3em",
            color: "#000000",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          — MENU —
        </motion.p>
</h1>
        {/* 2x2 Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "1rem",
        }}>
          {MENU_ITEMS.map((item, i) => (
            <motion.button
              key={item.page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate(item.page)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "0.9rem 1rem",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.3rem",
                transition: "border-color 0.2s",
                aspectRatio: "1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--rose)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <span style={{ fontSize: "2rem" }}>{item.icon}</span>
              <div>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  letterSpacing: "0.05em",
                  marginBottom: "0.2rem",
                }}>
                  {item.label}
                </p>
                {item.sub && (
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                  }}>
                    {item.sub}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom divider */}
<div style={{
  height: "1px",
  background: "linear-gradient(to right, transparent, var(--gold), transparent)",
  marginTop: "2rem",
}} />

{/* Back to Hero */}
<motion.button
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => onNavigate("home")}
  style={{
    marginTop: "1rem",
    width: "80%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "0.9rem 1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    transition: "border-color 0.2s",
  }}
  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--rose)"; }}
  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
>
  <span style={{ fontSize: "1.2rem" }}>🏠</span>
  <p style={{
    fontFamily: "var(--font-display)",
    fontSize: "0.85rem",
    color: "var(--text)",
    letterSpacing: "0.05em",
  }}>
    เวลาที่เราผ่านมาด้วยกัน
  </p>
</motion.button>
      
    </motion.section>
    
  );
}