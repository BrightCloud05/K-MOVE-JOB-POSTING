import HeroSection from "@/components/HeroSection";
import JobCard from "@/components/JobCard";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
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
      <HeroSection jobs={jobs} />

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
              <JobCard key={job.id} job={job} index={index} />
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

      <FeaturesSection />

      <CtaSection />
    </>
  );
}
