import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=20&skip=0`, {
      cache: "no-store",
    });
    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        data,
      });
    }
    return NextResponse.json({ error: "Failed to fetch product data." }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product data." }, { status: 500 });
  }
}
