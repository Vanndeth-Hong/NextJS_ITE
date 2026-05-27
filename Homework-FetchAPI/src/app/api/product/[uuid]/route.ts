import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ uuid: string }> }
) {
  const { uuid } = await params;
  try {
    const res = await fetch(`https://dummyjson.com/products/${uuid}`, {
      cache: "no-store",
    });
    const data = await res.json();

    if (res.ok) {
      return NextResponse.json({
        success: true,
        data,
      });
    }
    return NextResponse.json({ error: "Failed to fetching product detail" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetching product detail" }, { status: 500 });
  }
}
