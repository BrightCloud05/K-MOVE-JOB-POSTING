import { getJobs, getJobById } from "@/lib/notion";
import Link from "next/link";
import styles from "./page.module.css";

export const revalidate = 60;

// 정적 경로 생성 (빌드 시)
export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) {
    return { title: "공고를 찾을 수 없습니다 | K-Move Sydney" };
  }
  return {
    title: `${job.title} | K-Move Sydney`,
    description: job.description?.slice(0, 160) || `${job.title} - ${job.company} 채용 공고`,
  };
}

export default async function JobDetailPage({ params }) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          <h2>공고를 찾을 수 없습니다</h2>
          <p>삭제되었거나 존재하지 않는 채용 공고입니다.</p>
          <Link href="/jobs" className="btn btn-primary">
            채용공고 목록으로
          </Link>
        </div>
      </div>
    );
  }

  const daysLeft = job.deadline ? getDaysUntil(job.deadline) : null;

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerBg}></div>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/jobs" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5"/>
              <path d="M12 19l-7-7 7-7"/>
            </svg>
            채용공고 목록
          </Link>

          <div className={styles.badges}>
            {job.employmentType && (
              <span className="badge badge-accent">{job.employmentType}</span>
            )}
            {daysLeft !== null && daysLeft <= 14 && daysLeft >= 0 && (
              <span className="badge badge-warning">마감임박 D-{daysLeft}</span>
            )}
          </div>

          <h1 className={styles.title}>{job.title}</h1>

          <div className={styles.metaRow}>
            {job.company && (
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                {job.company}
              </span>
            )}
            {job.location && (
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {job.location}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={`container ${styles.body}`}>
        <div className={styles.mainContent}>
          {/* Description */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              직무 설명
            </h2>
            <div className={styles.descriptionText}>
              {job.description || "상세 설명이 등록되지 않았습니다."}
            </div>
          </section>

          {/* Tags */}
          {job.tags && job.tags.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                필요 기술 / 태그
              </h2>
              <div className={styles.tagsList}>
                {job.tags.map((tag) => (
                  <span key={tag} className={`badge badge-tag ${styles.tag}`}>{tag}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>공고 정보</h3>

            <div className={styles.infoList}>
              {job.company && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>회사</span>
                  <span className={styles.infoValue}>{job.company}</span>
                </div>
              )}
              {job.location && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>위치</span>
                  <span className={styles.infoValue}>{job.location}</span>
                </div>
              )}
              {job.employmentType && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>고용형태</span>
                  <span className={styles.infoValue}>{job.employmentType}</span>
                </div>
              )}
              {job.salary && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>급여</span>
                  <span className={styles.infoValue}>{job.salary}</span>
                </div>
              )}
              {job.deadline && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>마감일</span>
                  <span className={styles.infoValue}>
                    {new Date(job.deadline).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {daysLeft !== null && daysLeft >= 0 && (
                      <span className={styles.daysLeft}> (D-{daysLeft})</span>
                    )}
                  </span>
                </div>
              )}
            </div>

            {/* Apply Button */}
            {job.applyUrl ? (
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta"
                style={{ width: '100%', marginTop: '16px' }}
                id="apply-button"
              >
                지원하기
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            ) : (
              <button className="btn btn-cta" style={{ width: '100%', marginTop: '16px', opacity: 0.5 }} disabled>
                지원 링크 준비 중
              </button>
            )}
          </div>

          {/* Share */}
          <div className={styles.shareCard}>
            <span className={styles.shareLabel}>이 공고 공유하기</span>
            <div className={styles.shareButtons}>
              <div className={styles.shareBtn} title="링크 복사">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  const now = new Date();
  return Math.ceil((date - now) / (1000 * 60 * 60 * 24));
}
