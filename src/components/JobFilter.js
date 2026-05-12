"use client";

import styles from "./JobFilter.module.css";

export default function JobFilter({ filters, onFilterChange, locations, types }) {
  return (
    <div className={styles.filterBar}>
      {/* Location Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          지역
        </label>
        <select
          className={styles.select}
          value={filters.location}
          onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          id="filter-location"
        >
          <option value="">전체 지역</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Employment Type Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          고용형태
        </label>
        <select
          className={styles.select}
          value={filters.type}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          id="filter-type"
        >
          <option value="">전체</option>
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Clear */}
      {(filters.location || filters.type || filters.search) && (
        <button
          className={styles.clearBtn}
          onClick={() => onFilterChange({ location: "", type: "", search: "" })}
          id="filter-clear"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          초기화
        </button>
      )}
    </div>
  );
}
