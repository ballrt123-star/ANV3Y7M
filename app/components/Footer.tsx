"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer ref={ref} style={{ padding: "6rem 2rem 4rem", textAlign: "center" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2 }}
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          marginBottom: "3rem",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.6rem",
          letterSpacing: "0.5em",
          color: "var(--text-muted)",
          marginBottom: "1rem",
          textTransform: "uppercase",
        }}>
          28 ตุลาคม 2565
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          color: "var(--text-muted)",
          fontSize: "1rem",
        }}>
          &ldquo;รักษ์เธอ ทุกวัน ไม่มีวันหมด&rdquo;
        </p>
        <div style={{
          marginTop: "2rem",
          fontSize: "1.5rem",
          opacity: 0.4,
        }}>
          ♡
        </div>
      </motion.div>
    </footer>
  );
}
