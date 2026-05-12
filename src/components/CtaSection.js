"use client";

import styles from "./CtaSection.module.css";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

const TILT_MAX = 8;

export default function CtaSection() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -y * TILT_MAX;
      const rotateY = x * TILT_MAX;
      card.style.transform = `scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      if (glowRef.current) {
        const glowX = (x + 0.5) * 100;
        const glowY = (y + 0.5) * 100;
        glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.07) 0%, transparent 60%)`;
        glowRef.current.style.opacity = "1";
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!cardRef.current) return;
    cardRef.current.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    cardRef.current.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    if (glowRef.current) glowRef.current.style.opacity = "0";
    setTimeout(() => {
      if (cardRef.current) cardRef.current.style.transition = "";
    }, 500);
  }, []);

  return (
    <section className={styles.ctaSection}>
      <div className="container" style={{ perspective: "1000px" }}>
        <div
          ref={cardRef}
          className={`${styles.ctaCard} ${visible ? styles.visible : ""}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={glowRef} className={styles.ctaGlow} />
          <div className={styles.ctaBg}></div>
          <div className={styles.ctaContent}>
            <h2>시드니에서의 새로운 시작,<br />지금 바로 도전하세요</h2>
            <p>K-Move Sydney와 함께라면 호주 취업의 꿈이 현실이 됩니다</p>
            <div className={styles.ctaButtons}>
              <Link href="/jobs" className="btn btn-cta">
                채용공고 확인하기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
