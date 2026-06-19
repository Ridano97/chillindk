import { MenuPage } from "@/components/menu-page";
import { sweetSections } from "@/lib/menu-data";
export default function Page() { return <MenuPage eyebrow="Pour finir ou commencer" title="Les Douceurs" intro="Pancakes, pain perdu, crêpes et gaufres à composer selon l'envie du moment." hero="/media/DSC02186.jpg" sections={sweetSections} />; }
