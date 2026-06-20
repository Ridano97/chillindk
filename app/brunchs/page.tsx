import type { Metadata } from "next";
import { MenuPage } from "@/components/menu-page";
import { brunchSections } from "@/lib/menu-data";
export const metadata: Metadata = { title: "Formules Brunch à Dunkerque", description: "Découvrez les formules brunch Chill'in à Dunkerque : assiettes généreuses, produits frais et recettes pour toutes les envies.", alternates: { canonical: "/brunchs" } };
export default function Page() { return <MenuPage eyebrow="Du matin au goûter" title="Formules Brunch" intro="Sept façons de prendre le temps, des classiques aux grandes assiettes Chill'in." hero="/media/DSC02256.jpg" sections={brunchSections} />; }
