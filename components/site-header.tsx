"use client";

import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";

const links = [["Accueil", "/"], ["La carte", "/carte"], ["Contact", "/#contact-footer"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-copper/15 bg-night/90 backdrop-blur-xl">
    <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-10">
      <Link href="/" className="block h-12 w-36 shrink-0 text-ivory sm:h-14 sm:w-48" aria-label="Chill'in DK - Accueil">
        <BrandLogo className="size-full" />
      </Link>
      <div className="hidden items-center gap-8 text-[13px] font-bold uppercase tracking-[.12em] xl:flex">
        {links.map(([label, href]) => <Link key={href} className="nav-link" href={href}>{label}</Link>)}
      </div>
      <Link href="/#contact-footer" className="outline-button reserve-button desktop-reserve"><CalendarDays size={15} /> Réserver</Link>
      <button className="grid size-12 place-items-center rounded-xl border border-copper/30 xl:hidden" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="grid gap-4 border-t border-copper/15 bg-panel px-6 py-7 text-lg xl:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/#contact-footer" className="outline-button reserve-button mt-2" onClick={() => setOpen(false)}><CalendarDays size={15} /> Réserver une table</Link></div>}
  </header>;
}
