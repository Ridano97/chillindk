"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Clock3, MapPin, Menu, Play, Star, X } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "./reveal";

const dishes = [
  { title: "Brunch signature", tag: "Toute la journée", image: "/media/DSC02256.jpg" },
  { title: "Burgers généreux", tag: "Fait minute", image: "/media/IMG_4609.JPG" },
  { title: "Boissons frappées", tag: "Ultra gourmand", image: "/media/DSC02282.jpg" },
];

const gallery = ["DSC02168.jpg", "DSC02295.jpg", "DSC02123.jpg", "DSC02233.jpg", "DSC02195.jpg", "DSC02282.jpg"];

const reviews = [
  "Une vraie parenthèse au cœur de Dunkerque. L'assiette est aussi belle que généreuse.",
  "Le lieu qu'il manquait pour bruncher sans regarder l'heure.",
  "Déco canon, produits frais et boissons originales.",
];

export function LightHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [review, setReview] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play(); else video.pause();
  };

  return (
    <main className="light-site overflow-hidden bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/30 bg-cream/85 px-5 py-3 shadow-sm backdrop-blur-xl sm:px-7">
          <a href="#top" className="light-logo text-2xl">Chill&apos;in <small>DK</small></a>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a className="light-nav" href="#carte">La carte</a>
            <a className="light-nav" href="#histoire">Notre univers</a>
            <a className="light-nav" href="#avis">Vos mots</a>
            <Link className="light-nav font-bold text-orange" href="/">Version principale</Link>
            <a className="light-button light-button-dark" href="#contact">Nous trouver <ArrowUpRight size={16} /></a>
          </div>
          <button className="grid size-10 place-items-center rounded-full bg-ink text-cream md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-2 grid max-w-[1440px] gap-4 rounded-3xl bg-ink p-7 text-2xl text-cream md:hidden">
          {[['La carte', '#carte'], ['Notre univers', '#histoire'], ['Vos mots', '#avis'], ['Nous trouver', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <Link href="/" className="text-orange">Version principale</Link>
        </motion.div>}
      </header>

      <section id="top" ref={heroRef} className="relative flex min-h-[100svh] items-end bg-ink text-cream">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src="/media/DSC02186.jpg" alt="Brunch Chill'in" fill priority className="object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30" />
        </motion.div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-end gap-10 px-5 pb-12 pt-36 sm:px-10 lg:grid-cols-[1fr_280px] lg:px-16 lg:pb-16">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} className="light-eyebrow mb-6">Café · Brunch · Good mood</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="light-hero-title">Prends le temps<br />de <em>chiller.</em></motion.h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
            <p className="mb-6 max-w-xs leading-relaxed text-cream/80">Du brunch qui déborde de l&apos;assiette, du café bien fait et cette sensation d&apos;être exactement au bon endroit.</p>
            <a href="#carte" className="light-button light-button-light">Découvrir <ArrowDownRight size={18} /></a>
          </motion.div>
        </div>
        <div className="light-marquee absolute bottom-0 hidden w-full translate-y-1/2 rotate-[-1.3deg] bg-orange py-3 text-ink lg:block"><div><span>BRUNCH ALL DAY ✦ CAFÉ DE CARACTÈRE ✦ FAIT AVEC AMOUR ✦ DUNKERQUE ✦ </span><span>BRUNCH ALL DAY ✦ CAFÉ DE CARACTÈRE ✦ FAIT AVEC AMOUR ✦ DUNKERQUE ✦ </span></div></div>
      </section>

      <section id="histoire" className="light-section pt-28 lg:pt-44">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal><p className="light-eyebrow text-orange">Ici, on ralentit</p></Reveal>
          <Reveal delay={.1}><h2 className="light-section-title">Un café pensé comme<br />un <em>refuge gourmand.</em></h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">Chill&apos;in, c&apos;est le rendez-vous des matins qui s&apos;étirent et des déjeuners qui se transforment en après-midi.</p></Reveal>
        </div>
      </section>

      <section className="light-section pt-0">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none"><button className="light-video" onClick={playVideo} aria-label="Lire la vidéo"><video ref={videoRef} src="/media/CHILLIN.mp4" poster="/media/DSC02140.jpg" muted loop playsInline className="h-full w-full object-cover" /><span><Play fill="currentColor" /></span></button><div className="absolute -right-4 -top-6 -z-10 size-36 rounded-full bg-orange sm:-right-10 sm:size-44" /></Reveal>
          <Reveal delay={.1}><p className="light-eyebrow mb-5 text-orange">Plus qu&apos;un brunch</p><h2 className="light-section-title">Le goût du<br /><em>bon moment.</em></h2><p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65">Notre cuisine se vit autant qu&apos;elle se déguste. Une fenêtre animée au cœur des gestes, des sourires et des assiettes.</p></Reveal>
        </div>
      </section>

      <section id="carte" className="light-section bg-ink text-cream">
        <div className="mx-auto max-w-[1300px]"><Reveal className="mb-14"><p className="light-eyebrow mb-5 text-orange">À toute heure</p><h2 className="light-section-title">Tes nouvelles<br /><em>obsessions.</em></h2></Reveal>
          <div className="grid gap-5 md:grid-cols-3">{dishes.map((dish, i) => <Reveal key={dish.title} delay={i * .1}><article className="light-dish group"><Image src={dish.image} alt={dish.title} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><span className="text-xs uppercase tracking-[.18em] text-orange">{dish.tag}</span><h3 className="mt-2 font-display text-3xl">{dish.title}</h3></div></article></Reveal>)}</div>
        </div>
      </section>

      <section className="py-20 sm:py-28"><div className="light-gallery flex w-max gap-4">{[...gallery, ...gallery].map((img, i) => <div key={`${img}-${i}`} className={`relative h-[440px] w-[330px] flex-none overflow-hidden rounded-3xl ${i % 3 === 1 ? 'mt-10' : ''}`}><Image src={`/media/${img}`} alt="L'univers Chill'in" fill className="object-cover" /></div>)}</div></section>

      <section id="avis" className="light-section bg-peach text-center"><div className="mx-auto max-w-5xl"><div className="mb-7 flex justify-center gap-1 text-orange">{Array.from({length: 5}).map((_, i) => <Star key={i} fill="currentColor" />)}</div><motion.blockquote key={review} initial={{opacity:0}} animate={{opacity:1}} className="font-display text-3xl sm:text-5xl">“{reviews[review]}”</motion.blockquote><p className="mt-6 text-xs font-bold uppercase tracking-widest">Aperçu avant connexion Google</p><div className="mt-8 flex justify-center gap-2">{reviews.map((_, i) => <button key={i} onClick={() => setReview(i)} aria-label={`Avis ${i+1}`} className={`h-2 rounded-full ${review === i ? 'w-9 bg-ink' : 'w-2 bg-ink/20'}`} />)}</div></div></section>

      <section id="contact" className="light-section bg-orange"><div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-2"><Reveal><p className="light-eyebrow mb-5">On se retrouve ?</p><h2 className="light-section-title">Ta table<br /><em>t&apos;attend.</em></h2></Reveal><Reveal className="grid gap-8 sm:grid-cols-2"><div><MapPin className="mb-4" /><strong>Chill&apos;in Café & Brunch</strong><p className="mt-2 text-ink/70">14 rue Thiers<br />59140 Dunkerque</p></div><div><Clock3 className="mb-4" /><strong>Horaires</strong><p className="mt-2 text-ink/70">Du mardi au dimanche<br />Horaires à confirmer</p></div></Reveal></div></section>

      <footer className="bg-ink px-5 py-10 text-cream"><div className="mx-auto flex max-w-[1300px] items-center justify-between"><div className="light-logo text-3xl">Chill&apos;in <small>DK</small></div><Link href="/" className="text-sm text-orange">Voir la version principale</Link><p className="hidden text-xs text-cream/35 sm:block">© {new Date().getFullYear()}</p></div></footer>
    </main>
  );
}
