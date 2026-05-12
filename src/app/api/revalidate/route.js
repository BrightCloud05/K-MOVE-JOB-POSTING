import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * On-Demand Revalidation API
 * 
 * 노션에서 공고가 변경되었을 때 즉시 웹사이트를 업데이트하려면:
 * POST /api/revalidate?secret=YOUR_SECRET
 * 
 * 사용 예시:
 * curl -X POST "https://your-site.com/api/revalidate?secret=YOUR_SECRET"
 */
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Secret 토큰 검증
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret token" },
      { status: 401 }
    );
  }

  try {
    // 모든 관련 페이지 재생성
    revalidatePath("/");
    revalidatePath("/jobs");
    
    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
      message: "Successfully revalidated all pages",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error revalidating", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST method to trigger revalidation",
    usage: "POST /api/revalidate?secret=YOUR_REVALIDATE_SECRET",
  });
}
