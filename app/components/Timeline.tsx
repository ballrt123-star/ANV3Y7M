"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ✏️ แก้ไทม์ไลน์ตรงนี้ได้เลยครับ — เพิ่ม/ลด items ได้ตามต้องการ
const MEMORIES = [
  {
    date: "28 ต.ค. 2565",
    title: "วันที่เราเริ่มต้น",
    description: "วันแรกที่ทุกอย่างเปลี่ยนไป วันที่ฉันรู้ว่าเธอคือคนที่ฉันตามหา",
    emoji: "🌹",
  },
  {
    date: "ธ.ค. 2565",
    title: "ครั้งแรกที่เราเดินทางด้วยกัน",
    description: "เพิ่มความทรงจำของคุณที่นี่ครับ",
    emoji: "✈️",
  },
  {
    date: "ก.พ. 2566",
    title: "วันวาเลนไทน์แรก",
    description: "เพิ่มความทรงจำของคุณที่นี่ครับ",
    emoji: "💌",
  },
  {
    date: "ต.ค. 2566",
    title: "ครบรอบ 1 ปี",
    description: "เพิ่มความทรงจำของคุณที่นี่ครับ",
    emoji: "🕯️",
  },
  {
    date: "ต.ค. 2567",
    title: "ครบรอบ 2 ปี",
    description: "เพิ่มความทรงจำของคุณที่นี่ครับ",
    emoji: "🌙",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ padding: "6rem 2rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.65rem",
          letterSpacing: "0.5em",
          color: "var(--gold)",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        — ไทม์ไลน์ความทรงจำ —
      </motion.p>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{
            position: "absolute",
            left: "calc(50% - 0.5px)",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, var(--rose), var(--border), transparent)",
            transformOrigin: "top",
          }}
        />

        {MEMORIES.map((memory, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.8 }}
              style={{
                display: "flex",
                justifyContent: isLeft ? "flex-end" : "flex-start",
                paddingLeft: isLeft ? "0" : "calc(50% + 2rem)",
                paddingRight: isLeft ? "calc(50% + 2rem)" : "0",
                marginBottom: "3rem",
                position: "relative",
              }}
            >
              {/* Center dot */}
              <div style={{
                position: "absolute",
                left: "calc(50% - 5px)",
                top: "1.2rem",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "var(--rose)",
                boxShadow: "0 0 15px rgba(139,58,82,0.6)",
                border: "2px solid var(--bg)",
              }} />

              {/* Card */}
              <div style={{
                background: "rgba(26,17,24,0.85)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "1.25rem 1.5rem",
                maxWidth: "280px",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{memory.emoji}</span>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "var(--gold)",
                  }}>
                    {memory.date}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}>
                  {memory.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.6",
                  fontStyle: "italic",
                }}>
                  {memory.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
