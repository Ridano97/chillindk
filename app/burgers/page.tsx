import { MenuPage } from "@/components/menu-page";
import { burgerSections } from "@/lib/menu-data";
export default function Page() { return <MenuPage eyebrow="Généreux par nature" title="Nos Burgers" intro="Du classique au brioché, toujours fondant, toujours fait minute." hero="/media/IMG_4609.JPG" sections={burgerSections} />; }
