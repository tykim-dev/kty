import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj)
}