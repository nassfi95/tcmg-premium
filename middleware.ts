import { NextRequest, NextResponse } from 'next/server';

const cookieName = 'tcmg_admin_session';
const encoder = new TextEncoder();

async function valid(token?: string) {
  const secret = process.env.ADMIN_SESSION_SECRET ?? process.env.ADMIN_PASSWORD;
  if (!token || !secret) return false;
  const [role, expiry, supplied] = token.split('.');
  const payload = `${role}.${expiry}`;
  if (role !== 'admin' || !expiry || Number(expiry) < Date.now() / 1000 || !supplied) return false;
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const bytes = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  const expected = btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  if (expected.length !== supplied.length) return false;
  let mismatch = 0; for (let i = 0; i < expected.length; i++) mismatch |= expected.charCodeAt(i) ^ supplied.charCodeAt(i);
  return mismatch === 0;
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login' || request.nextUrl.pathname === '/api/admin/login') return NextResponse.next();
  if (await valid(request.cookies.get(cookieName)?.value)) return NextResponse.next();
  if (request.nextUrl.pathname.startsWith('/api/')) return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  return NextResponse.redirect(new URL('/admin/login', request.url));
}

export const config = { matcher: ['/admin/:path*', '/api/admin/:path*'] };
