"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CalendarDays, ChefHat, Clock3, Coffee, Heart,
  ExternalLink, Facebook, Instagram, Leaf, MapPin, Menu, MessageCircle, Moon, Phone, Star, Sun, Users, X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./reveal";
import { StreamHero } from "./stream-hero";
import { BrandLogo } from "./brand-logo";

const categories = [
  { title: "Nos Brunchs", text: "Des classiques revisités pour bien commencer la journée.", image: "/media/DSC02168.jpg", icon: Coffee },
  { title: "Nos Burgers", text: "Des burgers généreux avec des produits de qualité.", image: "/media/IMG_4609.JPG", icon: ChefHat },
  { title: "Brunch & Lunch", text: "Des plats savoureux pour toutes les envies.", image: "/media/DSC02256.jpg", icon: Leaf },
];

const galleryImages = [
  ["/media/DSC02295.jpg", "Assiette gourmande Chill'in"],
  ["/media/DSC02136.jpg", "Moment brunch chez Chill'in"],
  ["/media/DSC02282.jpg", "Boisson signature Chill'in"],
  ["/media/DSC02191.jpg", "Cuisine généreuse Chill'in"],
  ["/media/DSC02233.jpg", "Table dressée chez Chill'in"],
  ["/media/DSC02168.jpg", "Brunch fait maison Chill'in"],
];

const reviews = [
  "Nous avons testé ce brunch ce matin et c'était un sans-faute. L'endroit est vraiment sympa avec une super déco, on s'y sent tout de suite bien.",
  "Très joli endroit, que l'on veuille bruncher, déjeuner ou goûter, c'est parfait. Le plat était très beau visuellement et vraiment délicieux.",
  "Je recommande à 100 %, accueil au top et cuisine excellente. Qualité des aliments 10/10. Parfait pour y aller en famille ou entre amis.",
  "Nous nous y sommes rendu pour le midi. Les assiettes sont joliment dressées et le service est attentionné et professionnel.",
  "Un brunch où nous avons été super bien accueillis. L'équipe est souriante et très aimable, et la cuisine est vraiment délicieuse.",
  "Très belle découverte sur Dunkerque ! La nourriture était géniale, l'ambiance incroyablement chill.",
];

const googleReviewsUrl = "https://www.google.com/search?sa=X&sca_esv=340f99c589fee39c&sxsrf=APpeQnvBJai6qoiZkRUC4laybfk4NWYKxw:1781952234163&q=Chill%27in+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY0NbAwNbewMDU1MTA0NzSwNN3AyPiKkdc5IzMnRz0zT8GxLLN4ESsqHwCAqn-TOwAAAA&rldimm=13150857885540171095&tbm=lcl&hl=fr-FR&ved=2ahUKEwim27Gv0ZWVAxXo9LsIHWZiDKgQ9fQKegQISRAG&biw=1512&bih=827&dpr=2#lkt=LocalPoiReviews";

type DarkHomePageProps = {
  theme?: "dark" | "light";
  onThemeChange?: () => void;
};

export function DarkHomePage({ theme = "dark", onThemeChange }: DarkHomePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [review, setReview] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  useEffect(() => {
    if (reviewsPaused) return;
    const timer = window.setInterval(() => setReview((current) => (current + 1) % reviews.length), 4000);
    return () => window.clearInterval(timer);
  }, [reviewsPaused]);

  return (
    <main className={`theme-home min-h-screen overflow-hidden bg-night text-ivory ${theme === "light" ? "theme-light" : ""}`}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-copper/15 bg-night/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-10">
          <a href="#accueil" className="block h-12 w-36 shrink-0 text-ivory sm:h-14 sm:w-48" aria-label="Chill'in DK - Accueil">
            <BrandLogo className="size-full" />
          </a>
          <div className="hidden items-center gap-9 text-[13px] font-bold uppercase tracking-[.14em] lg:flex">
            <Link className="nav-link active" href="/">Accueil</Link>
            <Link className="nav-link" href="/carte">La carte</Link>
            <a className="nav-link" href="#contact-footer">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact-footer" className="outline-button reserve-button desktop-reserve"><CalendarDays size={15} /> Réserver</a>
            {onThemeChange && <button className="grid size-12 place-items-center rounded-xl border border-copper/30 text-copper transition hover:bg-copper hover:text-night" onClick={onThemeChange} aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"} title={theme === "dark" ? "Thème clair" : "Thème sombre"}>{theme === "dark" ? <Sun size={21} /> : <Moon size={21} />}</button>}
            <button className="grid size-12 place-items-center rounded-xl border border-copper/30 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-copper/15 bg-panel px-6 py-7 lg:hidden">
            <div className="grid gap-5 text-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
              <Link href="/carte" onClick={() => setMenuOpen(false)}>La carte</Link>
              <a href="#contact-footer" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="#contact-footer" className="outline-button reserve-button mt-2" onClick={() => setMenuOpen(false)}><CalendarDays size={15} /> Réserver</a>
            </div>
          </motion.div>
        )}
      </header>

      <section id="accueil" className="relative min-h-[100svh] border-b border-copper/20 pt-24">
        <Image src="/media/DSC02123.jpg" alt="Le salon chaleureux de Chill'in" fill priority className="object-cover" />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-l from-night via-night/75 to-night/10" />
        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1440px] items-center justify-end px-5 py-14 sm:px-10 lg:py-12">
          <div className="relative z-10 max-w-xl lg:mr-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="badge mb-7"><Leaf size={14} /> Brunch fait maison</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }} className="hero-heading">Le brunch,<br />comme <em>on l&apos;aime.</em></motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="mt-7 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">Des produits frais, des recettes gourmandes et une ambiance chaleureuse.</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }} className="mt-8 flex flex-wrap gap-3">
              <Link href="/carte" className="gold-button">Voir la carte <ArrowRight size={17} /></Link>
              <a href="#contact-footer" className="outline-button reserve-button">Réserver une table <CalendarDays size={15} /></a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }} className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-copper/20 pt-6 text-[11px] text-ivory/65 sm:text-sm">
              <div className="hero-benefit"><Leaf /> <span>Produits frais<br />et de saison</span></div>
              <div className="hero-benefit"><ChefHat /> <span>Recettes<br />faites maison</span></div>
              <div className="hero-benefit"><Heart /> <span>Ambiance<br />chaleureuse</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="video" className="px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <Reveal direction="right" className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="font-display text-4xl sm:text-6xl">Quelques secondes<br /><em className="signature text-copper">chez Chill&apos;in.</em></h2><p className="max-w-sm text-sm leading-relaxed text-ivory/45">La vidéo démarre seule. Active le son en bas à droite pour vivre pleinement l&apos;ambiance.</p></Reveal>
          <StreamHero />
        </div>
      </section>

      <section id="creations" className="section-dark">
        <div className="mx-auto max-w-[1360px]">
          <Reveal className="section-heading"><p>Notre carte</p><h2>Découvrez nos créations</h2><span /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return <Reveal key={cat.title} delay={i * .1} direction={i % 2 ? "right" : "left"}><article className="category-card group"><div className="flex items-center gap-4 p-5"><div className="icon-ring"><Icon size={22} /></div><div><h3 className="signature text-3xl">{cat.title}</h3><p className="mt-1 text-xs text-ivory/55">{cat.text}</p></div></div><div className="relative aspect-[1.55] overflow-hidden"><Image src={cat.image} alt={cat.title} fill className="object-cover transition duration-700 group-hover:scale-105" /></div><Link href="/carte" className="flex items-center justify-between p-5 text-[11px] font-bold uppercase tracking-widest">Explorer la carte <ArrowRight size={16} /></Link></article></Reveal>;
            })}
          </div>
          <Reveal className="mt-10 text-center"><Link href="/carte" className="gold-button">Voir toute la carte <ArrowRight size={17} /></Link></Reveal>
        </div>
      </section>

      <section id="a-propos" className="px-5 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1360px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <Reveal direction="left" className="about-sign">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl"><Image src="/media/DSC02106.jpg" alt="La façade et l'enseigne Chill'in à Dunkerque" fill className="object-cover" /></div>
          </Reveal>
          <Reveal direction="right">
            <p className="eyebrow text-copper">Notre univers</p>
            <h2 className="mt-5 font-display text-5xl leading-[.95] sm:text-7xl">Plus qu&apos;un brunch,<br /><em className="signature text-copper">un lieu où rester.</em></h2>
            <p className="mt-7 max-w-xl leading-relaxed text-ivory/55">Chill&apos;in est né d&apos;une envie simple : créer à Dunkerque une parenthèse chaleureuse où les assiettes sont généreuses, le café est soigné et personne ne regarde l&apos;heure.</p>
            <div className="mt-9 grid grid-cols-3 gap-4 text-xs text-ivory/60">
              <div className="experience-point"><Users /> Convivial</div>
              <div className="experience-point"><Coffee /> Gourmand</div>
              <div className="experience-point"><Heart /> Fait maison</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="slow-gallery border-y border-copper/15 py-14 sm:py-20" aria-label="Quelques instants chez Chill'in">
        <div className="mb-9 px-5 text-center sm:px-10">
          <p className="eyebrow text-copper">Quelques instants chez Chill&apos;in</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">À table, <em className="signature text-copper">tout simplement.</em></h2>
        </div>
        <div className="slow-gallery-track">
          {[0, 1].map((set) => (
            <div className="slow-gallery-set" key={set} aria-hidden={set === 1}>
              {galleryImages.map(([src, alt], index) => (
                <div className={`slow-gallery-card slow-gallery-card-${index % 3}`} key={`${set}-${src}`}>
                  <Image src={src} alt={set === 0 ? alt : ""} fill sizes="(max-width: 640px) 75vw, 420px" className="object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="avis" className="border-y border-copper/20 bg-panel px-5 py-20 sm:px-10 lg:py-28" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)} onFocusCapture={() => setReviewsPaused(true)} onBlurCapture={() => setReviewsPaused(false)}>
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center gap-1 text-copper">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
          <motion.div key={review} initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}>
            <blockquote className="font-display text-3xl sm:text-5xl lg:text-6xl">“{reviews[review]}”</blockquote>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-ivory/55 lg:text-sm">5/5 sur Google</p>
          </motion.div>
          <div className="mt-7 flex justify-center gap-2">{reviews.map((_, i) => <button key={i} onClick={() => setReview(i)} aria-label={`Avis ${i + 1}`} className={`h-1.5 rounded-full transition-all ${review === i ? 'w-8 bg-copper' : 'w-1.5 bg-ivory/20'}`} />)}</div>
          <a href={googleReviewsUrl} target="_blank" rel="noreferrer" className="google-review-cta group">
            <div className="relative min-h-52 overflow-hidden sm:min-h-64"><Image src="/media/googleavis.jpg" alt="Les avis Google de Chill'in" fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-night/20" /></div>
            <div className="relative flex flex-col justify-center p-7 text-left sm:p-10"><p className="eyebrow text-copper">Votre expérience compte</p><h3 className="mt-3 font-display text-3xl sm:text-5xl">Vous avez aimé ?<br /><em className="signature text-copper">Dites-le-nous.</em></h3><p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/55">Partagez votre expérience chez Chill&apos;in en quelques secondes sur Google.</p><span className="gold-button mt-6 w-fit">Donner mon avis <ExternalLink size={15} /></span></div>
          </a>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:py-28">
        <Reveal className="reservation-card mx-auto max-w-[1500px]">
          <div className="flex items-center gap-6"><div className="icon-ring size-14 lg:size-16"><CalendarDays /></div><div><h2 className="font-display text-2xl sm:text-3xl lg:text-5xl">Envie de réserver une table ?</h2><p className="mt-1 text-sm text-ivory/45 lg:mt-2 lg:text-lg">Réservez facilement et profitez d&apos;un moment unique.</p></div></div>
          <a href="https://www.google.com/maps/search/?api=1&query=Chill%27in+14+rue+Thiers+59140+Dunkerque" target="_blank" rel="noreferrer" className="gold-button">Nous trouver <ArrowRight size={17} /></a>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-[1500px] gap-10 text-sm text-ivory/55 sm:grid-cols-2 lg:text-lg">
          <div><MapPin className="mb-3 text-copper" /><strong className="text-ivory">Chill&apos;in Café & Brunch</strong><p className="mt-1">14 rue Thiers, 59140 Dunkerque</p></div>
          <div><Clock3 className="mb-3 text-copper" /><strong className="text-ivory">Horaires</strong><p className="mt-1">Du mardi au dimanche · à confirmer</p></div>
        </div>
      </section>

      <footer id="contact-footer" className="contact-footer border-t border-copper/15 px-5 py-14 sm:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <Reveal direction="left" className="flex flex-col justify-between gap-5 border-b border-copper/15 pb-10 sm:flex-row sm:items-end lg:pb-14"><div><p className="eyebrow text-copper">Restons en contact</p><h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl">Nous <em className="signature text-copper">suivre.</em></h2></div><p className="max-w-lg text-sm leading-relaxed text-ivory/45 lg:text-lg">Retrouvez les nouveautés, les créations et toute l&apos;ambiance Chill&apos;in sur nos réseaux.</p></Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a className="social-card" href="https://www.instagram.com/chillin_dk/" target="_blank" rel="noreferrer"><Instagram /><span>Instagram</span><strong>@chillin_dk</strong></a>
            <a className="social-card" href="https://www.snapchat.com/@chillin_dk" target="_blank" rel="noreferrer"><MessageCircle /><span>Snapchat</span><strong>@chillin_dk</strong></a>
            <a className="social-card" href="https://www.facebook.com/profile.php?id=61584187581630&locale=fr_FR" target="_blank" rel="noreferrer"><Facebook /><span>Facebook</span><strong>Chill&apos;in DK</strong></a>
            <a className="social-card" href="tel:"><Phone /><span>Téléphone</span><strong>À renseigner</strong></a>
          </div>
          <div className="mt-12 flex items-center justify-between gap-3 text-[10px] text-ivory/30 sm:text-xs lg:text-sm"><div className="flex min-w-0 items-center gap-2 sm:gap-4"><a href="#accueil" className="block h-8 w-24 shrink-0 text-ivory sm:h-10 sm:w-32" aria-label="Chill'in DK - Retour en haut"><BrandLogo className="size-full" /></a><span className="whitespace-nowrap">© {new Date().getFullYear()}</span></div><p className="shrink-0 text-right">RIO DIGITAL LAB</p></div>
        </div>
      </footer>
    </main>
  );
}
