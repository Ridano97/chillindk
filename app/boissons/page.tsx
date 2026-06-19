import { MenuPage } from "@/components/menu-page";
import { drinkSections } from "@/lib/menu-data";
export default function Page() { return <MenuPage eyebrow="Chaud ou frappé" title="Les Boissons" intro="Du café de caractère aux milkshakes ultra gourmands." hero="/media/DSC02282.jpg" sections={drinkSections} />; }
