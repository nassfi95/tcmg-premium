import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, createAdminSession, validAdminPassword } from '@/lib/admin-auth';

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: '' }));
  if (typeof password !== 'string' || !validAdminPassword(password)) return NextResponse.json({ error: 'Mot de passe incorrect.' }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createAdminSession(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/', maxAge: 60 * 60 * 12 });
  return response;
}
