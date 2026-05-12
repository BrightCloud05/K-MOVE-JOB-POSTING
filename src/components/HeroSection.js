"use client";

import styles from "./HeroSection.module.css";
import Link from "next/link";
import { useRef, useCallback, useEffect, useState } from "react";

// Stats 카운팅 훅
function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOut 곡선
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const tagColors = [
  "linear-gradient(135deg, #3B82F6, #8B5CF6)",
  "linear-gradient(135deg, #10B981, #34D399)",
  "linear-gradient(135deg, #F59E0B, #F97316)",
];

const tagIcons = [
  <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>,
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
];

export default function HeroSection({ jobs = [] }) {
  const spotlightRef = useRef(null);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Stats IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const count1 = useCountUp(150, 1500, statsVisible);
  const count2 = useCountUp(50, 1500, statsVisible);
  const count3 = useCountUp(10, 1200, statsVisible);

  const handleMouseMove = useCallback((e) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.left = `${x}px`;
    spotlightRef.current.style.top = `${y}px`;
    spotlightRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.opacity = "0";
  }, []);

  return (
    <section
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight Glow */}
      <div ref={spotlightRef} className={styles.spotlight} />

      {/* Background Elements */}
      <div className={styles.bgGradient}></div>
      <div className={styles.bgGrid}></div>
      <div className={styles.bgOrb1}></div>
      <div className={styles.bgOrb2}></div>
      <div className={styles.bgOrb3}></div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          {/* Top Badge */}
          <div className={styles.topBadge}>
            <span className={styles.badgeDot}></span>
            KOTRA K-Move Program
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            호주 시드니에서
            <br />
            <span className="gradient-text">글로벌 커리어</span>를
            <br />
            시작하세요
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            KOTRA K-Move Sydney는 한국 인재의 해외 취업을 지원합니다.
            <br />
            IT, 마케팅, 금융 등 다양한 분야의 채용 기회를 만나보세요.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <Link href="/jobs" className="btn btn-cta">
              채용공고 보기
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg">
              프로그램 알아보기
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats} ref={statsRef}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {statsVisible ? count1 : 0}<span className={styles.statPlus}>+</span>
              </span>
              <span className={styles.statLabel}>취업 성공</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {statsVisible ? count2 : 0}<span className={styles.statPlus}>+</span>
              </span>
              <span className={styles.statLabel}>파트너 기업</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {statsVisible ? count3 : 0}<span className={styles.statPlus}>+</span>
              </span>
              <span className={styles.statLabel}>산업 분야</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <div className={styles.visualCardHeader}>
              <div className={styles.vcDots}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.vcTitle}>Latest Opportunities</span>
            </div>
            <div className={styles.vcList}>
              {jobs.slice(0, 3).map((job, i) => (
                <Link href={`/jobs/${job.id}`} key={job.id} className={styles.vcItem} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.vcIcon} style={{ background: tagColors[i % tagColors.length] }}>
                    {tagIcons[i % tagIcons.length]}
                  </div>
                  <div className={styles.vcText}>
                    <strong>{job.title}</strong>
                    <span>{job.location}{job.employmentType ? ` · ${job.employmentType}` : ""}</span>
                  </div>
                  <div className={`badge badge-accent ${styles.vcBadge}`}>New</div>
                </Link>
              ))}
              {jobs.length === 0 && (
                <div className={styles.vcItem}>
                  <div className={styles.vcIcon} style={{ background: tagColors[0] }}>{tagIcons[0]}</div>
                  <div className={styles.vcText}><strong>공고 로딩 중...</strong><span>Sydney</span></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
