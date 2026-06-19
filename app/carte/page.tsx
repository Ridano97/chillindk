import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const universes = [
  ["Formules brunch", "Pour prendre le temps dès le matin.", "/brunchs", "/media/DSC02256.jpg"],
  ["Brunch & lunch", "Les assiettes salées et généreuses.", "/sale", "/media/DSC02168.jpg"],
  ["Burgers", "Classiques, doubles et briochés.", "/burgers", "/media/IMG_4609.JPG"],
  ["Douceurs", "Pancakes, gaufres et pain perdu.", "/douceurs", "/media/DSC02186.jpg"],
  ["Boissons", "Cafés, milkshakes et boissons fraîches.", "/boissons", "/media/DSC02282.jpg"],
];

export default function CartePage() {
  return <main className="min-h-screen bg-night text-ivory"><SiteHeader /><section className="px-5 pb-20 pt-36 sm:px-10"><div className="mx-auto max-w-[1360px]"><p className="eyebrow text-copper">La carte Chill&apos;in</p><h1 className="mt-5 font-display text-6xl sm:text-8xl">Choisis ton <em className="signature text-copper">moment.</em></h1><p className="mt-6 max-w-xl text-ivory/55">Toutes nos envies sont réunies ici. Entre dans un univers pour découvrir les recettes et les prix.</p><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{universes.map(([title, text, href, image], i) => <Link href={href} key={href} className={`universe-card group ${i === 0 ? 'md:col-span-2' : ''}`}><Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><h2 className="font-display text-3xl sm:text-4xl">{title}</h2><p className="mt-2 text-sm text-ivory/60">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-copper">Découvrir <ArrowRight size={15} /></span></div></Link>)}</div></div></section></main>;
}
