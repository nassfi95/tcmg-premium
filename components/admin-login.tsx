'use client';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export function AdminLogin() {
  const [password, setPassword] = useState(''); const [error, setError] = useState(''); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent) { event.preventDefault(); setLoading(true); setError(''); const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ password }) }); setLoading(false); if (response.ok) location.assign('/admin'); else setError('Accès refusé. Vérifiez le mot de passe.'); }
  return <main className="admin-login min-h-screen px-5 py-10"><motion.form initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} onSubmit={submit} className="admin-login-card mx-auto mt-[16vh] max-w-md p-8 sm:p-10"><p className="eyebrow text-[#72d68b]">TCMG · ACCÈS RESTREINT</p><h1 className="mt-5 text-4xl font-black tracking-[-.06em] text-white">Administration.</h1><p className="mt-4 leading-7 text-white/70">Connectez-vous pour gérer les contenus du club.</p><label className="mt-9 block text-sm font-bold text-white" htmlFor="password">Mot de passe</label><input id="password" className="admin-input mt-2" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required />{error && <p className="mt-3 text-sm font-semibold text-red-200">{error}</p>}<button className="button button-green mt-7 w-full justify-center" disabled={loading}>{loading ? 'Connexion…' : 'Se connecter'}</button></motion.form></main>;
}
