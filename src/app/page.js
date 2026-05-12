import HeroSection from "@/components/HeroSection";
import JobCard from "@/components/JobCard";
import { getJobs } from "@/lib/notion";
import styles from "./page.module.css";
import Link from "next/link";

// ISR: 60초마다 재생성 (노션 데이터 자동 반영)
export const revalidate = 60;

async function getLatestJobs() {
  const jobs = await getJobs();
  return jobs.slice(0, 6); // 최신 6개만
}

export default async function HomePage() {
  const jobs = await getLatestJobs();

  return (
    <>
      <HeroSection />

      {/* Latest Jobs Section */}
      <section className={styles.jobsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title">최신 채용공고</h2>
              <p className="section-subtitle">지금 바로 지원할 수 있는 최신 채용 기회를 확인하세요</p>
            </div>
            <Link href="/jobs" className="btn btn-outline">
              전체 공고 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className={styles.jobsGrid}>
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`animate-fade-in-up delay-${index + 1}`}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>

          {jobs.length === 0 && (
            <div className={styles.emptyState}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <h3>아직 등록된 채용공고가 없습니다</h3>
              <p>곧 새로운 채용 기회가 등록됩니다. 잠시만 기다려 주세요!</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featureHeader}>
            <h2 className="section-title">왜 K-Move인가요?</h2>
            <p className="section-subtitle">KOTRA가 운영하는 검증된 해외 취업 프로그램</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>글로벌 네트워크</h3>
              <p>KOTRA의 전 세계 127개 해외무역관 네트워크를 통한 검증된 기업 매칭</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>맞춤형 지원</h3>
              <p>이력서 컨설팅, 면접 코칭, 비자 상담 등 취업 전 과정 1:1 지원</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #F59E0B, #F97316)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>높은 취업 성공률</h3>
              <p>체계적인 사전 교육과 현지 정착 지원으로 높은 취업 성공률 달성</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaBg}></div>
            <div className={styles.ctaContent}>
              <h2>시드니에서의 새로운 시작,<br/>지금 바로 도전하세요</h2>
              <p>K-Move Sydney와 함께라면 호주 취업의 꿈이 현실이 됩니다</p>
              <div className={styles.ctaButtons}>
                <Link href="/jobs" className="btn btn-cta">
                  채용공고 확인하기
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
