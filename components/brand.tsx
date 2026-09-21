import Image from 'next/image';
import Link from 'next/link';
export function Brand({dark=false}:{dark?:boolean}) { return <Link href="/" aria-label="TCMG — accueil" className={`group flex items-center gap-3 ${dark?'text-[#071120]':'text-white'}`}><Image src="/tcmg-mark.svg" alt="Logo TCMG" width={42} height={42} priority className="transition duration-500 group-hover:rotate-6"/><span className="leading-none"><b className="block text-lg font-black tracking-[-.08em]">TCMG</b><small className="mt-1 block text-[8px] font-bold tracking-[.19em] opacity-65">GOUSSAINVILLE</small></span></Link> }
