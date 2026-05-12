import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "프로그램 소개 | K-Move Sydney",
  description: "KOTRA K-Move Sydney 프로그램에 대해 알아보세요. 한국 인재의 호주 취업을 지원하는 글로벌 인재 양성 프로그램입니다.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerBg}></div>
        <div className={`container ${styles.headerContent}`}>
          <h1 className={styles.title}>
            K-Move <span className="gradient-text">Sydney</span>
          </h1>
          <p className={styles.subtitle}>
            KOTRA가 운영하는 한국 인재 해외 취업 지원 프로그램
          </p>
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        {/* About Section */}
        <section className={styles.section}>
          <div className={styles.sectionIcon} style={{ background: 'linear-gradient(135deg, #0047AB, #2563EB)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h2>K-Move란?</h2>
          <p>
            K-Move는 대한민국 정부(고용노동부)와 KOTRA(대한무역투자진흥공사)가 함께 운영하는
            <strong> 글로벌 인재 양성 및 해외 취업 지원 프로그램</strong>입니다.
          </p>
          <p>
            한국의 우수한 인재들이 해외에서 글로벌 역량을 키우고, 현지 기업에서 경력을 쌓을 수 있도록
            체계적인 교육, 매칭, 정착 지원 서비스를 제공합니다.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIcon} style={{ background: 'linear-gradient(135deg, #00C9A7, #34D9B8)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h2>시드니 센터 소개</h2>
          <p>
            K-Move Sydney는 호주 시드니를 기반으로 운영되며, IT, 마케팅, 금융, 엔지니어링 등
            다양한 산업 분야에서 한국 인재와 호주 기업을 연결합니다.
          </p>
          <p>
            시드니는 아시아-태평양 지역의 비즈니스 허브로서, 글로벌 기업들의 APAC 본사가
            밀집해 있어 한국 인재에게 풍부한 기회를 제공합니다.
          </p>
        </section>

        {/* Process */}
        <section className={styles.processSection}>
          <h2 className={styles.processTitle}>지원 프로세스</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3>온라인 지원</h3>
              <p>채용공고를 확인하고 관심 직무에 지원합니다</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3>서류 심사</h3>
              <p>이력서 및 자기소개서를 기반으로 1차 심사를 진행합니다</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3>면접 지원</h3>
              <p>면접 코칭 및 기업 인터뷰를 진행합니다</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3>취업 및 정착</h3>
              <p>합격 후 비자, 거주지 등 현지 정착을 지원합니다</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h2>문의하기</h2>
            <p>K-Move Sydney 프로그램에 대해 궁금한 점이 있으신가요?</p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <strong>이메일</strong>
                  <a href="mailto:kmove.sydney@kotra.or.kr">kmove.sydney@kotra.or.kr</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <strong>주소</strong>
                  <span>Sydney, NSW, Australia</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <div>
                  <strong>웹사이트</strong>
                  <a href="https://www.kotra.or.kr" target="_blank" rel="noopener noreferrer">www.kotra.or.kr</a>
                </div>
              </div>
            </div>

            <Link href="/jobs" className="btn btn-cta" style={{ marginTop: '24px' }}>
              채용공고 확인하기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
