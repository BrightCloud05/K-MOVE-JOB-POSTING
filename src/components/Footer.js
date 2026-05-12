import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topWave}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="var(--color-dark)"/>
        </svg>
      </div>

      <div className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.brandLogo}>
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="url(#footer-logo-grad)" />
                  <path d="M8 14L12 10L16 14L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 18L12 14L16 18L20 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  <defs>
                    <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28">
                      <stop stopColor="#0047AB"/>
                      <stop offset="1" stopColor="#00C9A7"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span>K-Move Sydney</span>
              </div>
              <p className={styles.brandDesc}>
                KOTRA K-Move Sydney는 한국 인재의 호주 취업을 지원하는 글로벌 취업 프로그램입니다.
              </p>
            </div>

            {/* Quick Links */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>바로가기</h4>
              <Link href="/" className={styles.link}>홈</Link>
              <Link href="/jobs" className={styles.link}>채용공고</Link>
              <Link href="/about" className={styles.link}>프로그램 소개</Link>
            </div>

            {/* Contact */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>연락처</h4>
              <a href="mailto:kmove.sydney@kotra.or.kr" className={styles.link}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                kmove.sydney@kotra.or.kr
              </a>
              <span className={styles.link}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Sydney, NSW, Australia
              </span>
            </div>

            {/* Resources */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>관련 링크</h4>
              <a href="https://www.kotra.or.kr" target="_blank" rel="noopener noreferrer" className={styles.link}>
                KOTRA 공식 사이트
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
              <a href="https://www.worldjob.or.kr" target="_blank" rel="noopener noreferrer" className={styles.link}>
                월드잡플러스
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className={styles.bottom}>
            <p>© {new Date().getFullYear()} KOTRA K-Move Sydney. All rights reserved.</p>
            <p className={styles.powered}>
              Powered by KOTRA 대한무역투자진흥공사
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
