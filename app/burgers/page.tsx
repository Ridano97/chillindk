import type { Metadata } from "next";
import { MenuPage } from "@/components/menu-page";
import { burgerSections } from "@/lib/menu-data";
export const metadata: Metadata = { title: "Burgers Maison à Dunkerque", description: "Burgers classiques, doubles, chicken et pains briochés préparés minute chez Chill'in à Dunkerque.", alternates: { canonical: "/burgers" } };
export default function Page() { return <MenuPage eyebrow="Généreux par nature" title="Nos Burgers" intro="Du classique au brioché, toujours fondant, toujours fait minute." hero="/media/IMG_4609.JPG" sections={burgerSections} />; }
