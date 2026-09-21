import { cookies } from 'next/headers';
import { AdminDashboard } from '@/components/admin-dashboard';
import { AdminLogin } from '@/components/admin-login';
import { isAdminSession } from '@/lib/admin-auth';

export const metadata = { title: 'Administration' };

export default async function AdminPage() {
  const token = (await cookies()).get('tcmg_admin_session')?.value;
  return isAdminSession(token) ? <AdminDashboard /> : <AdminLogin />;
}
