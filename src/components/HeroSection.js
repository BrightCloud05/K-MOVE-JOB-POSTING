import styles from "./HeroSection.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
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
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>취업 성공</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>파트너 기업</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
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
              <div className={styles.vcItem}>
                <div className={styles.vcIcon} style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                </div>
                <div className={styles.vcText}>
                  <strong>Frontend Developer</strong>
                  <span>Sydney CBD · Full-time</span>
                </div>
                <div className={`badge badge-accent ${styles.vcBadge}`}>New</div>
              </div>
              <div className={styles.vcItem}>
                <div className={styles.vcIcon} style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                </div>
                <div className={styles.vcText}>
                  <strong>Marketing Specialist</strong>
                  <span>North Sydney · Full-time</span>
                </div>
                <div className={`badge badge-primary ${styles.vcBadge}`}>Hot</div>
              </div>
              <div className={styles.vcItem}>
                <div className={styles.vcIcon} style={{ background: 'linear-gradient(135deg, #F59E0B, #F97316)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <div className={styles.vcText}>
                  <strong>Business Analyst</strong>
                  <span>Parramatta · Contract</span>
                </div>
                <div className={`badge badge-warning ${styles.vcBadge}`}>Urgent</div>
              </div>
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
