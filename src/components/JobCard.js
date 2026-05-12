import Link from "next/link";
import styles from "./JobCard.module.css";

export default function JobCard({ job }) {
  const isUrgent = job.deadline && isWithinDays(job.deadline, 14);
  const isNew = isWithinDays(job.createdAt, 7);
  const daysLeft = job.deadline ? getDaysUntil(job.deadline) : null;

  return (
    <Link href={`/jobs/${job.id}`} className={styles.card} id={`job-card-${job.id}`}>
      {/* Status Badges */}
      <div className={styles.badges}>
        {isNew && <span className="badge badge-accent">New</span>}
        {isUrgent && <span className="badge badge-warning">마감임박</span>}
        {job.employmentType && (
          <span className="badge badge-primary">{job.employmentType}</span>
        )}
      </div>

      {/* Job Title */}
      <h3 className={styles.title}>{job.title}</h3>

      {/* Company */}
      <div className={styles.company}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        {job.company || "회사 정보 없음"}
      </div>

      {/* Meta Info */}
      <div className={styles.meta}>
        {job.location && (
          <div className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {job.location}
          </div>
        )}
        {job.salary && (
          <div className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            {job.salary}
          </div>
        )}
      </div>

      {/* Description Preview */}
      {job.description && (
        <p className={styles.description}>
          {job.description.length > 120 ? job.description.slice(0, 120) + "..." : job.description}
        </p>
      )}

      {/* Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className={styles.tags}>
          {job.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="badge badge-tag">{tag}</span>
          ))}
          {job.tags.length > 4 && (
            <span className="badge badge-tag">+{job.tags.length - 4}</span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className={styles.footer}>
        {daysLeft !== null && (
          <span className={styles.deadline}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {daysLeft > 0 ? `D-${daysLeft}` : daysLeft === 0 ? "오늘 마감" : "마감됨"}
          </span>
        )}
        <span className={styles.viewMore}>
          상세보기
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14"/>
            <path d="M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

function isWithinDays(dateStr, days) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  const now = new Date();
  const diff = (date - now) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= days;
}

function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  const now = new Date();
  return Math.ceil((date - now) / (1000 * 60 * 60 * 24));
}
