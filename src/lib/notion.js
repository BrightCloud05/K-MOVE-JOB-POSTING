import { Client } from "@notionhq/client";

// Notion 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

/**
 * 노션 데이터베이스에서 모든 활성 채용 공고를 가져옵니다.
 * Status가 "Done"이 아닌 공고만 필터링합니다.
 */
export async function getJobs() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "상태",
        status: {
          does_not_equal: "Done",
        },
      },
      sorts: [
        {
          property: "마감일",
          direction: "ascending",
        },
      ],
    });

    return response.results.map(pageToJob);
  } catch (error) {
    console.error("Error fetching jobs from Notion:", error);
    return [];
  }
}

/**
 * 특정 ID의 채용 공고를 가져옵니다.
 */
export async function getJobById(pageId) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    return pageToJob(page);
  } catch (error) {
    console.error(`Error fetching job ${pageId}:`, error);
    return null;
  }
}

/**
 * 노션 페이지의 본문 블록(content)을 가져옵니다.
 */
export async function getJobContent(pageId) {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });
    return blocks.results;
  } catch (error) {
    console.error(`Error fetching content for ${pageId}:`, error);
    return [];
  }
}

/**
 * 노션 페이지 객체를 간단한 Job 객체로 변환합니다.
 */
function pageToJob(page) {
  const props = page.properties;

  return {
    id: page.id,
    title: getTitle(props["직무명"]),
    company: getRichText(props["회사명"]),
    location: getSelect(props["지역"]),
    employmentType: getSelect(props["고용형태"]),
    deadline: getDate(props["마감일"]),
    salary: getRichText(props["급여"]),
    status: getStatus(props["상태"]),
    description: getRichText(props["설명"]),
    applyUrl: getUrl(props["지원링크"]),
    tags: getMultiSelect(props["태그"]),
    createdAt: page.created_time,
    updatedAt: page.last_edited_time,
  };
}

// ─── 노션 속성 헬퍼 함수들 ─────────────────────────────────

function getTitle(prop) {
  if (!prop || !prop.title || prop.title.length === 0) return "Untitled";
  return prop.title.map((t) => t.plain_text).join("");
}

function getRichText(prop) {
  if (!prop || !prop.rich_text || prop.rich_text.length === 0) return "";
  return prop.rich_text.map((t) => t.plain_text).join("");
}

function getSelect(prop) {
  if (!prop || !prop.select) return "";
  return prop.select.name || "";
}

function getMultiSelect(prop) {
  if (!prop || !prop.multi_select) return [];
  return prop.multi_select.map((item) => item.name);
}

function getDate(prop) {
  if (!prop || !prop.date || !prop.date.start) return null;
  return prop.date.start;
}

function getUrl(prop) {
  if (!prop || !prop.url) return "";
  return prop.url;
}

function getStatus(prop) {
  if (!prop || !prop.status) return "";
  return prop.status.name || "";
}

/**
 * 노션 블록을 HTML로 렌더링합니다.
 */
export function renderBlock(block) {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return `<p>${renderRichText(value.rich_text)}</p>`;
    case "heading_1":
      return `<h1>${renderRichText(value.rich_text)}</h1>`;
    case "heading_2":
      return `<h2>${renderRichText(value.rich_text)}</h2>`;
    case "heading_3":
      return `<h3>${renderRichText(value.rich_text)}</h3>`;
    case "bulleted_list_item":
      return `<li>${renderRichText(value.rich_text)}</li>`;
    case "numbered_list_item":
      return `<li>${renderRichText(value.rich_text)}</li>`;
    case "divider":
      return "<hr />";
    case "quote":
      return `<blockquote>${renderRichText(value.rich_text)}</blockquote>`;
    case "code":
      return `<pre><code>${renderRichText(value.rich_text)}</code></pre>`;
    case "callout":
      return `<div class="callout">${value.icon?.emoji || ""} ${renderRichText(value.rich_text)}</div>`;
    default:
      return "";
  }
}

function renderRichText(richTextArray) {
  if (!richTextArray || richTextArray.length === 0) return "";

  return richTextArray
    .map((text) => {
      let content = text.plain_text;
      if (text.annotations.bold) content = `<strong>${content}</strong>`;
      if (text.annotations.italic) content = `<em>${content}</em>`;
      if (text.annotations.underline) content = `<u>${content}</u>`;
      if (text.annotations.strikethrough) content = `<s>${content}</s>`;
      if (text.annotations.code) content = `<code>${content}</code>`;
      if (text.href) content = `<a href="${text.href}" target="_blank" rel="noopener noreferrer">${content}</a>`;
      return content;
    })
    .join("");
}
