import { NextResponse } from 'next/server';
import { readAdminData, writeAdminData } from '@/lib/admin-store';

export async function GET() {
  const data = await readAdminData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    await writeAdminData(data);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Échec de l'enregistrement." },
      { status: 500 }
    );
  }
}
