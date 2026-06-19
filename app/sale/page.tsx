import { MenuPage } from "@/components/menu-page";
import { savorySections } from "@/lib/menu-data";
export default function Page() { return <MenuPage eyebrow="Brunch & Lunch" title="Le salé" intro="Des œufs pochés, des muffins, des croissants et des assiettes préparées minute." hero="/media/DSC02168.jpg" sections={savorySections} />; }
