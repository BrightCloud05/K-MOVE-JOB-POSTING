"use client";

import { useState, useMemo } from "react";
import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";
import SearchBar from "@/components/SearchBar";
import styles from "./page.module.css";

export default function JobListClient({ jobs }) {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    search: "",
  });

  // Extract unique locations and types for filter options
  const locations = useMemo(() => {
    return [...new Set(jobs.map((j) => j.location).filter(Boolean))];
  }, [jobs]);

  const types = useMemo(() => {
    return [...new Set(jobs.map((j) => j.employmentType).filter(Boolean))];
  }, [jobs]);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Location filter
      if (filters.location && job.location !== filters.location) return false;
      // Type filter
      if (filters.type && job.employmentType !== filters.type) return false;
      // Search filter
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const searchable = [
          job.title,
          job.company,
          job.description,
          ...(job.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(query)) return false;
      }
      return true;
    });
  }, [jobs, filters]);

  return (
    <div className={styles.content}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <SearchBar
          value={filters.search}
          onChange={(search) => setFilters((f) => ({ ...f, search }))}
        />
        <JobFilter
          filters={filters}
          onFilterChange={setFilters}
          locations={locations}
          types={types}
        />
      </div>

      {/* Results count */}
      <div className={styles.resultsInfo}>
        <span className={styles.resultCount}>
          총 <strong>{filteredJobs.length}</strong>건의 채용공고
        </span>
        {(filters.location || filters.type || filters.search) && (
          <span className={styles.filterActive}>필터 적용 중</span>
        )}
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className={styles.jobsGrid}>
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <h3>검색 결과가 없습니다</h3>
          <p>다른 검색어나 필터를 시도해 보세요</p>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setFilters({ location: "", type: "", search: "" })}
          >
            필터 초기화
          </button>
        </div>
      )}
    </div>
  );
}
