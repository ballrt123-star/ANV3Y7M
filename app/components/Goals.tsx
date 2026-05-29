"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GoalProps {
  onNavigate: (page: "home" | "all" | "letter" | "gallery" | "timeline" | "quiz" | "goal") => void;
}

const GOALS = [
  { icon: "🎓", label: "เรียนให้จบ", sub: "ก้าวแรกของทุกอย่าง" },
  { icon: "✈️", label: "เที่ยวด้วยกัน", sub: "ไปให้ไกล แค่มีเธอก็พอ" },
  { icon: "💼", label: "ทำงานมีเงิน", sub: "สร้างอนาคตด้วยมือเราเอง" },
  { icon: "🏠", label: "ย้ายออกมาอยู่ด้วยกัน", sub: "บ้านคือที่ที่มีเธออยู่" },
  { icon: "🔑", label: "มีอะไรเป็นของๆ เรา", sub: "สิ่งที่สร้างขึ้นมาด้วยกัน" },
  { icon: "💍", label: "แต่งงาน", sub: "วันที่สำคัญที่สุดในชีวิต" },
];

export default function Goal({ onNavigate }: GoalProps) {
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (i: number) => {
    setChecked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const progress = Math.round((checked.length / GOALS.length) * 100);

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

        {/* Phone frame */}
        <div style={{
          width: "320px",
          background: "#0f0a0d",
          borderRadius: "40px",
          border: "2px solid #2e1f28",
          boxShadow: "0 0 0 6px #110c0f, 0 30px 80px rgba(0,0,0,0.6)",
          overflow: "hidden",
          position: "relative",
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
              9:41
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
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}>
              ●●●
            </span>
          </div>

          {/* Screen content */}
          <div style={{
            padding: "1.25rem 1.25rem 2rem",
            maxHeight: "560px",
            overflowY: "auto",
          }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.55rem",
                letterSpacing: "0.4em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
              }}>
                — เป้าหมายของเค้า —
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}>
                ที่อยากมีเธออยู่กับเค้า
              </p>
            </div>

            {/* Progress bar */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.4rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: "var(--text-muted)",
                }}>
                  ความคืบหน้า
                </span>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  color: "var(--gold)",
                }}>
                  {checked.length}/{GOALS.length}
                </span>
              </div>
              <div style={{
                height: "3px",
                background: "var(--border)",
                borderRadius: "2px",
                overflow: "hidden",
              }}>
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  style={{ height: "100%", background: "var(--gold)" }}
                />
              </div>
            </div>

            {/* Goal list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {GOALS.map((goal, i) => {
                const done = checked.includes(i);
                return (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggle(i)}
                    style={{
                      background: done ? "rgba(201,169,110,0.08)" : "rgba(26,17,24,0.8)",
                      border: `1px solid ${done ? "var(--gold)" : "var(--border)"}`,
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      textAlign: "left",
                      transition: "background 0.3s, border-color 0.3s",
                      width: "100%",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>{goal.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        color: done ? "var(--gold)" : "var(--text)",
                        letterSpacing: "0.03em",
                        marginBottom: "0.15rem",
                        transition: "color 0.3s",
                        textDecoration: done ? "line-through" : "none",
                      }}>
                        {goal.label}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.65rem",
                        color: "var(--text-muted)",
                        fontStyle: "italic",
                      }}>
                        {goal.sub}
                      </p>
                    </div>

                    {/* Checkmark */}
                    <AnimatePresence>
                      {done && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          style={{
                            width: "18px", height: "18px",
                            borderRadius: "50%",
                            background: "var(--gold)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.6rem",
                            color: "#0a0608",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            {/* All done message */}
            <AnimatePresence>
              {checked.length === GOALS.length && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: "center",
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontSize: "0.8rem",
                    marginTop: "1.25rem",
                  }}
                >
                  ทำได้ทุกอย่างเลย 🖤
                </motion.p>
              )}
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

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => onNavigate("all")}
          style={{
            display: "block",
            margin: "1.5rem auto 0",
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
          }}
        >
          ← BACK
        </motion.button>
      </div>
    </section>
  );
}