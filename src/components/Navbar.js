"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logo-grad)" />
              <path d="M8 14L12 10L16 14L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 18L12 14L16 18L20 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#0047AB"/>
                  <stop offset="1" stopColor="#00C9A7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>K-Move</span>
            <span className={styles.logoSub}>Sydney</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>홈</Link>
          <Link href="/jobs" className={styles.navLink}>채용공고</Link>
          <Link href="/about" className={styles.navLink}>프로그램 소개</Link>
        </div>

        {/* CTA */}
        <div className={styles.navActions}>
          <Link href="/jobs" className="btn btn-primary btn-sm">
            공고 보기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>홈</Link>
          <Link href="/jobs" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>채용공고</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>프로그램 소개</Link>
          <Link href="/jobs" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ width: '100%', marginTop: '8px' }}>
            공고 보기
          </Link>
        </div>
      )}
    </nav>
  );
}
