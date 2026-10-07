import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body?.email || !body?.name) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  console.info("[datavaura-lead]", {
    name: body.name,
    email: body.email,
    company: body.company,
    country: body.country,
    needs: body.needs,
  });
  return NextResponse.json({ ok: true });
}
