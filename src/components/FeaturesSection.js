"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "글로벌 네트워크",
    desc: "KOTRA의 전 세계 127개 해외무역관 네트워크를 통한 검증된 기업 매칭",
  },
  {
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "맞춤형 지원",
    desc: "이력서 컨설팅, 면접 코칭, 비자 상담 등 취업 전 과정 1:1 지원",
  },
  {
    gradient: "linear-gradient(135deg, #F59E0B, #F97316)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "높은 취업 성공률",
    desc: "체계적인 사전 교육과 현지 정착 지원으로 높은 취업 성공률 달성",
  },
];

const TILT_MAX = 12; // 최대 기울기 각도 (도)

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 스크롤 등장
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  // 3D Tilt
  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const card = ref.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();

      // 카드 중심 기준 마우스 위치 (-0.5 ~ 0.5)
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = -y * TILT_MAX;  // 위아래 기울기
      const rotateY = x * TILT_MAX;   // 좌우 기울기

      card.style.transform = `
        translateY(0)
        scale(1.03)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

      // glow가 마우스 위치를 따라감
      if (glowRef.current) {
        const glowX = (x + 0.5) * 100;
        const glowY = (y + 0.5) * 100;
        glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
        glowRef.current.style.opacity = "1";
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!ref.current) return;
    ref.current.style.transform = "translateY(0) scale(1) rotateX(0deg) rotateY(0deg)";
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.featureCard} ${visible ? styles.visible : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 마우스 따라다니는 glow */}
      <div ref={glowRef} className={styles.cardGlow} />

      <div className={styles.featureIcon} style={{ background: feature.gradient }}>
        {feature.icon}
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.featureHeader} ${headerVisible ? styles.headerVisible : ""}`}
        >
          <h2 className="section-title">왜 K-Move인가요?</h2>
          <p className="section-subtitle">KOTRA가 운영하는 검증된 해외 취업 프로그램</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
