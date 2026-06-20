import type { Metadata } from "next";
import { MenuPage } from "@/components/menu-page";
import { savorySections } from "@/lib/menu-data";
export const metadata: Metadata = { title: "Brunch & Lunch Salé à Dunkerque", description: "Œufs pochés, muffins, croissants salés, saumon et chicken waffle préparés minute chez Chill'in à Dunkerque.", alternates: { canonical: "/sale" } };
export default function Page() { return <MenuPage eyebrow="Brunch & Lunch" title="Le salé" intro="Des œufs pochés, des muffins, des croissants et des assiettes préparées minute." hero="/media/DSC02168.jpg" sections={savorySections} />; }
