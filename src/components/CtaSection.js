"use client";

import styles from "./CtaSection.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CtaSection() {
  const cardRef = useRef(null);
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

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div
          ref={cardRef}
          className={`${styles.ctaCard} ${visible ? styles.visible : ""}`}
        >
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
