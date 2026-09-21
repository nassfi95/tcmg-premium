import { NextResponse } from 'next/server';
import { readAdminData, writeAdminData } from '@/lib/admin-store';

export async function POST(request: Request) {
  const form = await request.formData(); const file = form.get('file'); const category = form.get('category');
  if (!(file instanceof File) || typeof category !== 'string' || !file.type.startsWith('image/')) return NextResponse.json({ error: 'Image invalide.' }, { status: 400 });
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return NextResponse.json({ error: 'BLOB_READ_WRITE_TOKEN doit être configuré sur Vercel.' }, { status: 503 });
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
  const pathname = `tcmg/${crypto.randomUUID()}-${safeName}`;
  const upload = await fetch(`https://blob.vercel-storage.com/${pathname}`, { method: 'PUT', headers: { Authorization: `Bearer ${token}`, 'x-api-version': '7', 'content-type': file.type, 'x-add-random-suffix': '0' }, body: await file.arrayBuffer() });
  if (!upload.ok) return NextResponse.json({ error: 'L’envoi vers Vercel Blob a échoué.' }, { status: 502 });
  const blob = await upload.json() as { url: string };
  const data = await readAdminData(); const photo = { id: crypto.randomUUID(), url: blob.url, category, name: file.name };
  data.photos.unshift(photo); await writeAdminData(data); return NextResponse.json(photo);
}
