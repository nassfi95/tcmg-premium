import { NextResponse } from 'next/server';
import { readAdminData, writeAdminData, type AdminData } from '@/lib/admin-store';
export const dynamic = 'force-dynamic';
export async function GET() { return NextResponse.json(await readAdminData()); }
export async function PUT(request: Request) { const body = await request.json() as AdminData; return NextResponse.json(await writeAdminData(body)); }
