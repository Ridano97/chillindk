"use client";

import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Accueil", "/"], ["La carte", "/carte"], ["Contact", "/#contact-footer"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-copper/15 bg-night/90 backdrop-blur-xl">
    <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-10">
      <Link href="/" className="signature text-2xl sm:text-3xl">Chill&apos;in <span>DK</span></Link>
      <div className="hidden items-center gap-5 text-[10px] font-bold uppercase tracking-[.12em] xl:flex">
        {links.map(([label, href]) => <Link key={href} className="nav-link" href={href}>{label}</Link>)}
      </div>
      <Link href="/#contact-footer" className="outline-button reserve-button desktop-reserve"><CalendarDays size={15} /> Réserver</Link>
      <button className="grid size-11 place-items-center rounded-xl border border-copper/30 xl:hidden" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="grid gap-4 border-t border-copper/15 bg-panel px-6 py-7 text-lg xl:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/#contact-footer" className="outline-button reserve-button mt-2" onClick={() => setOpen(false)}><CalendarDays size={15} /> Réserver une table</Link></div>}
  </header>;
}
