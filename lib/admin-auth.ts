import { createHmac, timingSafeEqual } from 'crypto';

export const ADMIN_COOKIE = 'tcmg_admin_session';
const encoder = new TextEncoder();

function secret() { return process.env.ADMIN_SESSION_SECRET ?? process.env.ADMIN_PASSWORD ?? ''; }

function signature(value: string) { return createHmac('sha256', secret()).update(value).digest('base64url'); }

export function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 12;
  const value = `admin.${expires}`;
  return `${value}.${signature(value)}`;
}

export function isAdminSession(token?: string) {
  if (!token || !secret()) return false;
  const [role, expiry, provided] = token.split('.');
  const value = `${role}.${expiry}`;
  if (role !== 'admin' || !expiry || Number(expiry) < Date.now() / 1000 || !provided) return false;
  const expected = signature(value);
  return provided.length === expected.length && timingSafeEqual(encoder.encode(provided), encoder.encode(expected));
}

export function validAdminPassword(password: string) {
  const configured = process.env.ADMIN_PASSWORD;
  if (!configured || password.length !== configured.length) return false;
  return timingSafeEqual(encoder.encode(password), encoder.encode(configured));
}
