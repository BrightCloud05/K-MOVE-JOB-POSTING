import { getJobs } from "@/lib/notion";
import JobListClient from "./JobListClient";
import styles from "./page.module.css";

// ISR: 60초마다 재생성
export const revalidate = 60;

export const metadata = {
  title: "채용공고 | K-Move Sydney",
  description: "KOTRA K-Move Sydney의 최신 채용 공고를 확인하세요. IT, 마케팅, 금융 등 다양한 분야의 호주 시드니 취업 기회.",
};

async function getAllJobs() {
  return await getJobs();
}

export default async function JobsPage() {
  const jobs = await getAllJobs();

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className={styles.headerBg}></div>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeDot}></span>
            실시간 업데이트
          </div>
          <h1 className={styles.pageTitle}>채용공고</h1>
          <p className={styles.pageDesc}>
            호주 시드니의 다양한 직무 기회를 탐색하고 지원하세요
          </p>
        </div>
      </div>

      <div className="container">
        <JobListClient jobs={jobs} />
      </div>
    </div>
  );
}
