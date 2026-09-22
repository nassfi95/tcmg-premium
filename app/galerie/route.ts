import { NextResponse } from 'next/server';
import { readAdminData } from '@/lib/admin-store';

export async function GET() {
  const data = await readAdminData();

  return NextResponse.json({
    photos: data.photos,
  });
}
