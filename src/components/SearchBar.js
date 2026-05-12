"use client";

import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchWrapper}>
      <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="직무명, 회사명, 기술 스택으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="search-input"
      />
      {value && (
        <button className={styles.clearBtn} onClick={() => onChange("")} aria-label="Clear search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
    </div>
  );
}
