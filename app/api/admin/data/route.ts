import { NextResponse } from 'next/server';
import {
  readAdminData,
  writeAdminData,
  type AdminData,
} from '@/lib/admin-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await readAdminData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const body = (await request.json()) as AdminData;
  const data = await writeAdminData(body);
  return NextResponse.json(data);
}
