"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { MenuSection } from "@/lib/menu-data";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";

export function MenuPage({ eyebrow, title, intro, hero, sections }: { eyebrow: string; title: string; intro: string; hero: string; sections: MenuSection[] }) {
  return <main className="min-h-screen bg-night text-ivory">
    <SiteHeader />
    <section className="menu-page-hero">
      <Image src={hero} alt={title} fill priority className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/20" />
      <div className="relative mx-auto flex min-h-[70svh] max-w-[1360px] flex-col justify-end px-5 pb-16 pt-32 sm:px-10 lg:pb-20">
        <Reveal><p className="eyebrow text-copper">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-6xl leading-[.9] tracking-[-.05em] sm:text-8xl lg:text-9xl">{title}</h1><p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">{intro}</p></Reveal>
      </div>
    </section>
    <section className="menu-page-body">
      <div className="mx-auto max-w-[1200px] space-y-10">
        {sections.map((section, sectionIndex) => <Reveal key={section.title}><article className={`menu-sheet ${sectionIndex % 2 ? 'menu-sheet-reverse' : ''}`}>
          {section.image && <div className="relative min-h-[340px] overflow-hidden rounded-xl sm:min-h-[470px]"><Image src={section.image} alt={section.title} fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" /></div>}
          <div className="p-6 sm:p-10 lg:p-12"><h2 className="signature text-4xl text-copper sm:text-6xl">{section.title}</h2><div className="mt-8 space-y-6">{section.items.map(item => <div key={item.name} className="menu-line"><div className="flex items-baseline gap-3"><h3>{item.name}</h3><span className="menu-dots" /><strong>{item.price}</strong></div>{item.description && <p>{item.description}</p>}</div>)}</div>{section.note && <p className="mt-8 border-t border-copper/20 pt-5 text-xs italic text-ivory/45">{section.note}</p>}</div>
        </article></Reveal>)}
      </div>
    </section>
    <section className="border-t border-copper/20 px-5 py-14"><div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 sm:flex-row"><Link href="/carte" className="outline-button"><ArrowLeft size={16} /> Toute la carte</Link><Link href="/contact" className="gold-button">Réserver une table <ArrowRight size={16} /></Link></div></section>
  </main>;
}
