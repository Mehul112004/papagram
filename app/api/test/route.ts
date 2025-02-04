import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest) {
  console.log("REQUST", request);
  return NextResponse.json({ message: "Hello" }, { status: 200 });
}
