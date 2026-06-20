"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MenuSection } from "@/lib/menu-data";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";

function MenuImageCarousel({ images, alt, fit = "cover" }: { images: string[]; alt: string; fit?: "cover" | "contain" }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), 4200);
    return () => window.clearInterval(timer);
  }, [images.length]);

  const currentImage = images[active];

  return <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-night sm:min-h-[470px]">
    {fit === "contain" && <Image src={currentImage} alt="" fill className="scale-110 object-cover opacity-30 blur-2xl" />}
    <AnimatePresence initial={false}>
      <motion.div key={currentImage} className="absolute inset-0" initial={{ opacity: 0, x: "14%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "-14%" }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>
        <Image src={currentImage} alt={alt} fill className={fit === "contain" ? "object-contain" : "object-cover"} />
      </motion.div>
    </AnimatePresence>
    <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
    {images.length > 1 && <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">{images.map((image, index) => <button key={image} onClick={() => setActive(index)} aria-label={`Afficher la photo ${index + 1}`} className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-copper" : "w-1.5 bg-ivory/50"}`} />)}</div>}
  </div>;
}

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
        {sections.map((section, sectionIndex) => <Reveal key={section.title}><article className={`menu-sheet ${sectionIndex % 2 ? 'menu-sheet-reverse' : ''} ${section.image || section.images?.length ? '' : 'menu-sheet-text-only'}`}>
          {(section.images?.length || section.image) && <MenuImageCarousel images={section.images ?? [section.image!]} alt={section.title} fit={section.imageFit} />}
          <div className="p-6 sm:p-10 lg:p-12"><h2 className="signature text-4xl text-copper sm:text-6xl">{section.title}</h2><div className="mt-8 space-y-6">{section.items.map(item => <div key={item.name} className="menu-line"><div className="flex items-baseline gap-3"><h3>{item.name}</h3>{item.price && <><span className="menu-dots" /><strong>{item.price}</strong></>}</div>{item.description && <p>{item.description}</p>}</div>)}</div>{section.note && <p className="mt-8 border-t border-copper/20 pt-5 text-xs italic text-ivory/45">{section.note}</p>}</div>
        </article></Reveal>)}
      </div>
    </section>
    <section className="border-t border-copper/20 px-5 py-14"><div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 sm:flex-row"><Link href="/carte" className="outline-button"><ArrowLeft size={16} /> Toute la carte</Link><Link href="/contact" className="gold-button">Réserver une table <ArrowRight size={16} /></Link></div></section>
  </main>;
}
