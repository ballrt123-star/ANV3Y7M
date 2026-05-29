"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import router from "next/router";

const ANNIVERSARY_DATE = new Date("2022-10-28T00:00:00");

function getTimeData(now: Date = new Date()) {
  const start = ANNIVERSARY_DATE;

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  // fix negative days
  if (days < 0) {
    months -= 1;

    const prevMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    );

    days += prevMonth.getDate();
  }

  // fix negative months
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const formatter = new Intl.DateTimeFormat("th-TH", {
    timeZone: "Asia/Bangkok",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  const get = (t: string) =>
    parts.find((p) => p.type === t)?.value ?? "00";

  return {
    years,
    months,
    days,
    hours: get("hour"),
    minutes: get("minute"),
    seconds: get("second"),

    totalDays: Math.floor(
      (now.getTime() - start.getTime()) /
        (1000 * 60 * 60 * 24)
    ),
  };
}
  interface HeroProps {
  onNavigate: (page: "letter" | "gallery" | "timeline" | "all") => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [time, setTime] = useState(() =>
    getTimeData()
  );

  const [isLeaving, setIsLeaving] =
    useState(false);

  // update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // smooth navigate
  const handleNavigate = (path: string) => {
    setIsLeaving(true);

    setTimeout(() => {
      router.push(path);
    }, 800);
  };

  return (
    <motion.section
      animate={{
        opacity: isLeaving ? 0 : 1,
        scale: isLeaving ? 0.98 : 1,
        filter: isLeaving
          ? "blur(10px)"
          : "blur(0px)",
      }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Atmospheric background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #2a0d1a 0%, #0a0608 70%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b3a52' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating rose petals */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width:
              i % 3 === 0 ? "6px" : "4px",
            height:
              i % 3 === 0 ? "6px" : "4px",
            borderRadius: "50% 0 50% 0",
            background: `rgba(139,58,82,${
              0.2 + (i % 4) * 0.1
            })`,
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 5) * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [
              0,
              i % 2 === 0 ? 10 : -10,
              0,
            ],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        {/* Decorative line */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, var(--gold), transparent)",
            marginBottom: "2rem",
          }}
        />

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily:
              "var(--font-display)",
            fontSize: "0.75rem",
            letterSpacing: "0.4em",
            color: "var(--gold)",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          28 ตุลาคม 2565 — คือวันที่เราตกลงคบกัน
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          style={{
            fontFamily:
              "var(--font-display)",
            fontSize:
              "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: "400",
            lineHeight: 1.1,
            color: "var(--text)",
            marginBottom: "1rem",
            textShadow:
              "0 0 60px rgba(201,169,110,0.15)",
          }}
        >
          Happy anniversary to us both
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontStyle: "italic",
            color: "var(--text-muted)",
            fontSize: "1.1rem",
            marginBottom: "3rem",
          }}
        >
          เวลาผ่านมา{" "}
          {time.totalDays.toLocaleString()}{" "}
          วันแล้ว
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              label: "Y",
              value: time.years,
            },
            {
              label: "M",
              value: time.months,
            },
            {
              label: "D",
              value: time.days,
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                background:
                  "rgba(26,17,24,0.8)",
                border:
                  "1px solid var(--border)",
                borderRadius: "2px",
                padding: "1rem 1.2rem",
                minWidth: "80px",
                backdropFilter:
                  "blur(10px)",
              }}
            >
              <div
                style={{
                  fontFamily:
                    "var(--font-display)",
                  fontSize:
                    "clamp(1.8rem, 6vw, 3rem)",
                  fontWeight: "400",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>

              <div
                style={{
                  fontFamily:
                    "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color:
                    "var(--text-muted)",
                  marginTop: "0.5rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Live clock */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{
            fontFamily:
              "var(--font-display)",
            fontSize: "1rem",
            letterSpacing: "0.3em",
            color: "var(--rose-light)",
          }}
        >
          {time.hours} : {time.minutes} :{" "}
          {time.seconds}
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2,
          }}
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, var(--gold), transparent)",
            marginTop: "2rem",
          }}
          
        
        />
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
  NEXT →
</motion.button>
        
      </div>
      
      

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            width: "1px",
            height: "50px",
            background:
              "linear-gradient(to bottom, var(--gold), transparent)",
            margin: "0 auto",
          }}
        />
      </motion.div>
    </motion.section>
  );
}