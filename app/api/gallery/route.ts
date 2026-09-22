import { NextResponse } from 'next/server';
import { readAdminData } from '@/lib/admin-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await readAdminData();

  return NextResponse.json(
    { photos: data.photos },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
