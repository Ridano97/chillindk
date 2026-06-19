import { MenuPage } from "@/components/menu-page";
import { brunchSections } from "@/lib/menu-data";
export default function Page() { return <MenuPage eyebrow="Du matin au goûter" title="Formules Brunch" intro="Huit façons de prendre le temps, des classiques aux grandes assiettes Chill'in." hero="/media/DSC02256.jpg" sections={brunchSections} />; }
