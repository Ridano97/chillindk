export type MenuItem = { name: string; price: string; description?: string };
export type MenuSection = { title: string; image?: string; images?: string[]; imageFit?: "cover" | "contain"; items: MenuItem[]; note?: string };

export const brunchSections: MenuSection[] = [{
  title: "Formules Brunch",
  images: ["/media/brunchmarocain.jpg", "/media/DSC02237.jpg", "/media/brunchmarocain2.jpg"],
  items: [
    { name: "Arabic", price: "11,90 €", description: "Thé à la menthe ou café, msemen, œuf, fromage, olives, charcuterie, huile d'olive, harissa et jus d'orange fraîchement pressé." },
    { name: "French Morning", price: "8,00 €", description: "Tartine, croissant, fromage, chocolat chaud, café ou thé." },
    { name: "Turkish Touch", price: "10,90 €", description: "Yaourt turc à l'ail et au persil, œuf au plat et sauce rouge légèrement relevée." },
    { name: "American Dream", price: "12,50 €", description: "Café ou cappuccino, jus d'orange, pancakes ou gaufre, sirop d'érable, œufs brouillés et charcuterie." },
    { name: "Nordic Fresh", price: "13,90 €", description: "Gaufre, saumon fumé, avocat ou fromage frais, ciboulette et œuf." },
    { name: "Healthy", price: "11,90 €", description: "Tartine complète toastée, avocat ou fromage frais, protéine au choix, yaourt, graines de chia, miel, granola et fruits." },
    { name: "Chill'in Brunch", price: "16,90 €", description: "Grand plateau de fruits frais et secs, fromage frais, œuf, tartines, avocat, salade, charcuterie et boisson fraîche ou smoothie." },
  ],
}];

export const burgerSections: MenuSection[] = [{
  title: "Burgers",
  image: "/media/IMG_4609.JPG",
  imageFit: "contain",
  items: [
    { name: "Burger Beef", price: "7,50 €", description: "Pain burger, steak, cheddar et sauce maison." },
    { name: "Le Double", price: "8,00 €", description: "Double steak haché, cheddar et sauce maison." },
    { name: "Le Country", price: "8,50 €", description: "Double steak, cheddar, bacon, œuf et sauce maison." },
    { name: "Le Chicken", price: "8,00 €", description: "Poulet frit, salade, tomate, oignon, sauce au poivre et cheddar." },
    { name: "Sweet Burger", price: "10,50 €", description: "Gaufre de patate douce, steak smashé, cheddar, oignon caramélisé, salade et tomate." },
    { name: "Double Brioche", price: "8,00 €", description: "Pain brioché, double steak smashé, cheddar, sauce maison, salade, tomate et oignon." },
    { name: "Chick'n Brioche", price: "8,00 €", description: "Pain brioché, chicken mariné au curry, cheddar, sauce maison, salade, tomate et oignon." },
  ],
  note: "Supplément frites 2,50 € · frites de patate douce 3,50 € (avec soft)",
}];

export const savorySections: MenuSection[] = [{
  title: "Salé · Brunch & Lunch",
  images: ["/media/DSC02168.jpg", "/media/saumon.jpg", "/media/gauffrechicken.jpg"],
  items: [
    { name: "Pain Muffin Bénédicte", price: "10,50 €", description: "Pain muffin, avocat, œuf poché, bacon ou saumon, sauce bénédicte." },
    { name: "Croissant Bénédicte", price: "10,50 €", description: "Croissant garni de jambon, avocat, œuf poché et sauce bénédicte." },
    { name: "Muffin Cheddar & Bacon", price: "4,70 €", description: "Pain muffin, cheddar fondu, œuf et bacon." },
    { name: "Le Croissant Salé", price: "9,50 €", description: "Philadelphia, avocat, œufs brouillés et lardons." },
    { name: "Toast Chèvre Miel", price: "9,50 €", description: "Pain toasté, chèvre chaud, noix, miel, lardons, salade et vinaigre balsamique." },
    { name: "Pancake Fusion", price: "15,00 €", description: "Boursin, guacamole, saumon, œuf, sauce lait de coco & curcuma et boisson au choix." },
    { name: "Croque Brunch Monsieur", price: "6,00 €", description: "Jambon, gruyère et béchamel." },
    { name: "Croque Brunch Madame", price: "7,00 €", description: "Jambon, gruyère, béchamel et œuf au plat." },
    { name: "Chicken Waffle", price: "8,20 €", description: "Gaufre salée, chou, poulet pané, œuf poché, sauce miel-moutarde et roquette." },
  ],
  note: "Supplément sauce maison : 0,80 €",
}];

export const sweetSections: MenuSection[] = [
  {
    title: "Pancakes",
    image: "/media/pancake.jpg",
    items: [
      { name: "Pistache Signature", price: "7,50 €", description: "Crème pistache, éclats de pistache et coulis de framboise." },
      { name: "Rouge Velours", price: "6,50 €", description: "Coulis de fruits rouges, fruits frais et chantilly." },
      { name: "Choco Noisette", price: "7,00 €", description: "Chocolat au lait maison et éclats de noisette." },
      { name: "Chocolat Blanc", price: "7,00 €", description: "Chocolat blanc maison, éclats de noisette et chantilly." },
      { name: "Caramel beurre salé & noix", price: "7,00 €", description: "Caramel maison, noix et chantilly." },
    ],
  },
  {
    title: "Pain Perdu",
    images: ["/media/painperdu.jpg", "/media/painperdu2.jpg", "/media/painperdu3.jpg"],
    items: [
      { name: "Pistache", price: "6,00 €", description: "Coulis et éclats de pistache, boule de glace." },
      { name: "Framboise", price: "6,00 €", description: "Coulis de framboise, framboises et boule de glace." },
      { name: "Caramel beurre salé", price: "6,00 €", description: "Caramel beurre salé et boule de glace." },
      { name: "Choco-Noisette", price: "6,00 €", description: "Chocolat au lait, noisette, chantilly et boule de glace." },
    ],
  },
  {
    title: "Crêpes & Gaufres à composer",
    image: "/media/IMG_4607.JPG",
    items: [
      { name: "Base crêpe", price: "3,50 €" },
      { name: "Base gaufre", price: "4,00 €" },
      { name: "Supplément gourmand", price: "0,80 €", description: "Chocolat, Nutella, confiture, coulis, pistache ou caramel beurre salé." },
      { name: "Fruits frais", price: "1,20 €" },
      { name: "Chantilly", price: "0,50 €" },
      { name: "Glace", price: "1,00 €" },
      { name: "Gâteaux du jour", price: "Prix au comptoir" },
    ],
  },
];

export const drinkSections: MenuSection[] = [
  {
    title: "Cafés & Chocolats",
    image: "/media/DSC02152.jpg",
    items: [
      { name: "Expresso", price: "1,80 €" }, { name: "Café au lait", price: "4,00 €" },
      { name: "Cappuccino", price: "4,50 €" }, { name: "Latte Macchiato", price: "4,60 €" },
      { name: "Chocolat chaud", price: "3,50 €" }, { name: "Chocolat viennois", price: "4,00 €" },
    ],
    note: "Supplément arôme vanille, noisette ou caramel : 0,50 €",
  },
  {
    title: "Boissons Fraîches",
    image: "/media/DSC02282.jpg",
    items: [
      { name: "Milkshake", price: "5,00 €" }, { name: "Jus d'orange pressé", price: "3,00 €" },
      { name: "Smoothie du jour", price: "6,00 €" }, { name: "Thé à la menthe", price: "2,50 €" },
      { name: "Théière à la menthe", price: "4,00 €" },
    ],
  },
];
