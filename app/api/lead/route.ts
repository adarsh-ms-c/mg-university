import { NextResponse } from 'next/server';

const phonePattern = /^(\+91)?[6-9]\d{9}$/;

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 }); }
  if (!body || typeof body !== 'object' || !('name' in body) || !('phone' in body)) return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
  const { name, phone } = body as { name: unknown; phone: unknown };
  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 120) return NextResponse.json({ error: 'Name must be between 2 and 120 characters.' }, { status: 400 });
  if (typeof phone !== 'string' || !phonePattern.test(phone.replace(/[\s-]/g, ''))) return NextResponse.json({ error: 'Enter a valid Indian mobile number.' }, { status: 400 });

  // TODO: Persist validated leads to an approved database, Google Sheet, email service, or CRM.
  // This endpoint currently validates and acknowledges requests; it does not store or forward personal data.
  return NextResponse.json({ ok: true }, { status: 202 });
}
