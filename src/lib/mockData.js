/**
 * 노션 연동 전 개발/테스트용 Mock 데이터
 * 노션 API 설정이 완료되면 이 파일은 사용하지 않습니다.
 */

export const mockJobs = [
  {
    id: "mock-1",
    title: "Frontend Developer",
    company: "TechSydney Pty Ltd",
    location: "Sydney CBD",
    employmentType: "Full-time",
    deadline: "2026-06-30",
    salary: "$80,000 - $110,000 AUD",
    status: "In progress",
    description: "We are looking for a skilled Frontend Developer to join our dynamic team in Sydney. You will work on cutting-edge web applications using React, Next.js, and modern CSS frameworks. The ideal candidate has 2+ years of experience in frontend development and a passion for creating beautiful, performant user interfaces.",
    applyUrl: "https://example.com/apply/frontend",
    tags: ["React", "Next.js", "TypeScript", "CSS"],
    createdAt: "2026-05-01T00:00:00Z",
    updatedAt: "2026-05-10T00:00:00Z",
  },
  {
    id: "mock-2",
    title: "Digital Marketing Specialist",
    company: "OzMedia Group",
    location: "North Sydney",
    employmentType: "Full-time",
    deadline: "2026-07-15",
    salary: "$65,000 - $85,000 AUD",
    status: "In progress",
    description: "Join our marketing team to drive digital campaigns across APAC markets. You'll manage social media, SEO/SEM strategies, and content marketing initiatives. Experience with Google Analytics, Meta Ads Manager, and bilingual skills (Korean/English) are highly valued.",
    applyUrl: "https://example.com/apply/marketing",
    tags: ["Marketing", "SEO", "Social Media", "Bilingual"],
    createdAt: "2026-05-02T00:00:00Z",
    updatedAt: "2026-05-10T00:00:00Z",
  },
  {
    id: "mock-3",
    title: "Business Analyst",
    company: "Global Finance Partners",
    location: "Parramatta",
    employmentType: "Contract",
    deadline: "2026-06-20",
    salary: "$75,000 - $95,000 AUD",
    status: "In progress",
    description: "An exciting opportunity for a Business Analyst to work on financial technology projects. You will gather requirements, create documentation, and liaise between technical and business stakeholders. CPA or CFA certification is a plus.",
    applyUrl: "https://example.com/apply/ba",
    tags: ["Finance", "Analysis", "Agile", "SQL"],
    createdAt: "2026-05-03T00:00:00Z",
    updatedAt: "2026-05-10T00:00:00Z",
  },
  {
    id: "mock-4",
    title: "UX/UI Designer",
    company: "DesignLab Australia",
    location: "Surry Hills",
    employmentType: "Full-time",
    deadline: "2026-07-01",
    salary: "$70,000 - $100,000 AUD",
    status: "In progress",
    description: "We're seeking a creative UX/UI Designer to craft intuitive digital experiences. You'll conduct user research, create wireframes and prototypes, and collaborate closely with developers. Proficiency in Figma and a strong portfolio are essential.",
    applyUrl: "https://example.com/apply/design",
    tags: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    createdAt: "2026-05-04T00:00:00Z",
    updatedAt: "2026-05-10T00:00:00Z",
  },
  {
    id: "mock-5",
    title: "Data Engineer",
    company: "DataDriven Co",
    location: "Sydney CBD",
    employmentType: "Full-time",
    deadline: "2026-08-01",
    salary: "$100,000 - $130,000 AUD",
    status: "In progress",
    description: "Build and maintain scalable data pipelines for our growing analytics platform. Work with AWS, Spark, Python, and dbt to transform raw data into actionable insights. Experience with data warehousing and ETL processes is required.",
    applyUrl: "https://example.com/apply/data",
    tags: ["Python", "AWS", "SQL", "Spark", "dbt"],
    createdAt: "2026-05-05T00:00:00Z",
    updatedAt: "2026-05-10T00:00:00Z",
  },
  {
    id: "mock-6",
    title: "Customer Success Manager",
    company: "SaaSWorks Sydney",
    location: "Chatswood",
    employmentType: "Part-time",
    deadline: "2026-06-25",
    salary: "$55,000 - $70,000 AUD (pro-rata)",
    status: "In progress",
    description: "Manage client relationships and drive product adoption for our enterprise SaaS platform. You'll onboard new customers, conduct training sessions, and identify upsell opportunities. Bilingual Korean/English speakers preferred.",
    applyUrl: "https://example.com/apply/csm",
    tags: ["SaaS", "Customer Success", "Bilingual", "CRM"],
    createdAt: "2026-05-06T00:00:00Z",
    updatedAt: "2026-05-10T00:00:00Z",
  },
];

export function getMockJobs() {
  return mockJobs;
}

export function getMockJobById(id) {
  return mockJobs.find((job) => job.id === id) || null;
}
