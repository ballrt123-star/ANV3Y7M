"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizProps {
  onNavigate: (page: "home" | "all" | "letter" | "gallery" | "timeline" | "quiz" | "goal") => void;
}

const QUESTIONS = [
  {
    question: "เราเจอกันครั้งแรกที่ไหน?",
    choices: ["มหาลัย", "ห้าง", "ห้องน้ำ", "วัด"],
    answer: 1,
  },
  {
    question: "วันเกิดของเค้าคือ?",
    choices: ["12 กุมพา", "23 กุมพา", "23 มกราคม", "3 มิถุนา"],
    answer: 1,
  },
  {
    question: "เค้าชอบอาหารอะไร?",
    choices: ["ญี่ปุ่น", "อีสาน", "ฟาส ฟูส", "ไทย"],
    answer: 0,
  },
  {
    question: "สีที่ฉันชอบคืออะไร?",
    choices: ["ฟ้า", "น้ำเงิน", "ดำ", "ม่วง"],
    answer: 1,
  },
  {
    question: "ขนมที่เค้าชอบ?",
    choices: ["ลูกอม", "ช้อคโกเเล็ต", "ขนมกรอบๆ", "ไม่ชอบ"],
    answer: 3,
  },
];

export default function Quiz({ onNavigate }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const isCorrect = index === QUESTIONS[current].answer;
    if (isCorrect) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= QUESTIONS.length) {
        setFinished(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const getChoiceStyle = (index: number) => {
    if (selected === null) return {
      background: "var(--surface)",
      borderColor: "var(--border)",
      color: "var(--text)",
    };
    if (index === QUESTIONS[current]?.answer) return {
      background: "rgba(74,124,89,0.2)",
      borderColor: "#4a7c59",
      color: "#7dba96",
    };
    if (index === selected) return {
      background: "rgba(139,58,82,0.2)",
      borderColor: "var(--rose)",
      color: "var(--rose-light)",
    };
    return {
      background: "var(--surface)",
      borderColor: "var(--border)",
      color: "var(--text-muted)",
    };
  };

  const currentQuestion = QUESTIONS[current];

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
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, #2a0d1a 0%, #0a0608 70%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "500px" }}>

        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginBottom: "2rem",
        }} />

        <AnimatePresence mode="wait">
          {!finished && currentQuestion ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.4em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                }}>
                  ข้อ {current + 1} / {QUESTIONS.length}
                </p>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--text-muted)",
                }}>
                  {score} คะแนน
                </p>
              </div>

              <div style={{
                height: "2px",
                background: "var(--border)",
                borderRadius: "1px",
                marginBottom: "2.5rem",
                overflow: "hidden",
              }}>
                <motion.div
                  animate={{ width: `${((current + 1) / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                  style={{ height: "100%", background: "var(--gold)" }}
                />
              </div>

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.2rem",
                color: "var(--text)",
                textAlign: "center",
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}>
                {currentQuestion.question}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {currentQuestion.choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    style={{
                      ...getChoiceStyle(i),
                      border: "1px solid",
                      borderRadius: "2px",
                      padding: "0.9rem 1.25rem",
                      cursor: selected === null ? "pointer" : "default",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      textAlign: "left",
                      transition: "background 0.2s, border-color 0.2s, color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      width: "100%",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      opacity: 0.6,
                      minWidth: "16px",
                    }}>
                      {["ก", "ข", "ค", "ง"][i]}
                    </span>
                    {choice}
                  </button>
                ))}
              </div>
            </motion.div>

          ) : finished ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center" }}
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.5em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}>
                — สรุปผล —
              </p>

              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                color: "var(--gold)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {score}/{QUESTIONS.length}
              </div>

              <p style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                color: "var(--text-muted)",
                fontSize: "1rem",
                marginBottom: "3rem",
              }}>
                {score === QUESTIONS.length
                  ? "เก่งมากเลยอ่าาา บี๋มาจุฟทีมา 🖤"
                  : score >= 3
                  ? "ก็ไม่ได้ยากนะเธอ ทำไมเป็นงี้ งอล"
                  : "ต้องใช้เวลาอยู่ด้วยกันมากกว่านี้แล้วล่ะ"}
              </p>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setCurrent(0);
                    setSelected(null);
                    setScore(0);
                    setFinished(false);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--gold)",
                    borderRadius: "2px",
                    color: "var(--gold)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.4em",
                    padding: "0.8rem 2rem",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  เล่นใหม่
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate("all")}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.4em",
                    padding: "0.8rem 2rem",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  ← BACK
                </motion.button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginTop: "2.5rem",
        }} />
      </div>
    </section>
  );
}