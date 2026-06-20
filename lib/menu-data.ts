export type MenuItem = { name: string; price?: string; description?: string };
export type MenuSection = { title: string; image?: string; images?: string[]; imageFit?: "cover" | "contain"; items: MenuItem[]; note?: string };

export const brunchSections: MenuSection[] = [{
  title: "Formules Brunch",
  images: ["/media/brunchmarocain.jpg", "/media/DSC02237.jpg", "/media/brunchmarocain2.jpg"],
  items: [
    { name: "Arabic", price: "11,90 €", description: "Thé à la menthe ou café, msemen (crêpe marocaine), œuf, fromage, olives, charcuterie, huile d'olive, harissa et jus d'orange fraîchement pressé." },
    { name: "French Morning", price: "8,00 €", description: "Tartine (confiture, Nutella ou beurre), croissant, fromage, chocolat chaud, café ou thé." },
    { name: "English Classic", price: "11,50 €", description: "Boisson chaude, œufs brouillés, bacon, saucisse, haricots blancs à la tomate et toast." },
    { name: "American Dream", price: "12,50 €", description: "Café ou cappuccino et jus d'orange, pancakes ou gaufre, sirop d'érable, œufs brouillés et charcuterie." },
    { name: "Nordic Fresh", price: "13,90 €", description: "Gaufre, saumon fumé, avocat ou fromage frais, ciboulette et œuf." },
    { name: "Healthy", price: "11,90 €", description: "Tartine de pain complet toastée (avocat ou fromage frais), au choix : thon, blanc de poulet ou saumon. Yaourt ou fromage blanc avec graines de chia, miel, granola et fruits." },
    { name: "Chill'in Brunch", price: "16,90 €", description: "Grand plateau composé de fruits frais et secs, fromage frais, œuf dur et œuf au plat, tartines complètes, avocat, fromage en tranches, salade, charcuterie de poulet (ou autre), boisson fraîche ou smoothie." },
  ],
}];

export const burgerSections: MenuSection[] = [{
  title: "Burgers",
  image: "/media/IMG_4609.JPG",
  imageFit: "contain",
  items: [
    { name: "Burger Beef", price: "7,50 €", description: "Pain burger, steak, cheddar et sauce maison." },
    { name: "Le Double", price: "8,50 €", description: "Double steak haché, cheddar et sauce maison." },
    { name: "Le Country", price: "9,00 €", description: "Pain burger, double steak, cheddar, bacon, œuf et sauce maison." },
    { name: "Le Chicken", price: "8,50 €", description: "Pain burger, poulet frit, salade, tomate, oignon, sauce au poivre et cheddar." },
    { name: "Sweet Burger", price: "11,00 €", description: "Gaufre de patate douce, sauce maison, steak smashé, cheddar, oignon caramélisé, salade et tomate." },
    { name: "Double Brioche", price: "8,00 €", description: "Pain brioché, double steak smashé, cheddar, sauce maison, salade, tomate et oignon." },
    { name: "Chick'n Brioche", price: "9,00 €", description: "Pain brioché, chicken mariné au curry, cheddar, sauce maison, salade, tomate et oignon." },
  ],
  note: "Supplément frites 2,50 € · frites de patate douce 3,50 € (avec soft)",
}];

export const savorySections: MenuSection[] = [{
  title: "Salé · Brunch & Lunch",
  images: ["/media/DSC02168.jpg", "/media/saumon.jpg", "/media/gauffrechicken.jpg"],
  items: [
    { name: "Pain Muffin Bénédicte", price: "10,50 €", description: "Pain muffin, avocat, œuf poché, bacon ou saumon (1 € supp.), sauce bénédicte." },
    { name: "Croissant Bénédicte", price: "10,50 €", description: "Croissant garni de jambon ou saumon (1 € supp.), avocat, œuf poché et sauce bénédicte." },
    { name: "Muffin Cheddar & Bacon", price: "4,70 €", description: "Pain muffin, cheddar fondu, œuf et bacon." },
    { name: "Le Croissant Salé", price: "10,00 €", description: "Philadelphia, avocat, œufs brouillés et lardons." },
    { name: "Toast Chèvre Miel", price: "9,50 €", description: "Pain toasté, chèvre chaud, noix, miel, lardons, salade et vinaigre balsamique." },
    { name: "Pancake Fusion", price: "15,00 €", description: "Boursin, guacamole, saumon, œuf, sauce lait de coco & curcuma et boisson au choix." },
    { name: "Chicken Waffle", price: "9,50 €", description: "Gaufre salée garnie de chou, escalope de poulet panée, œuf poché, sauce miel-moutarde maison et roquette." },
  ],
  note: "Supplément sauce maison : 0,80 €",
}, {
  title: "Le Croque Brunch",
  items: [
    { name: "Monsieur", price: "6,00 €", description: "Jambon, gruyère et béchamel." },
    { name: "Madame", price: "7,00 €", description: "Jambon, gruyère, béchamel et œuf au plat." },
  ],
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
    ],
  },
  {
    title: "Suppléments",
    items: [
      { name: "Chocolat au lait maison", price: "0,80 €" },
      { name: "Nutella", price: "0,80 €" },
      { name: "Confiture", price: "0,80 €" },
      { name: "Coulis de fruits rouges", price: "0,80 €" },
      { name: "Crème de pistache", price: "0,80 €" },
      { name: "Caramel beurre salé", price: "0,80 €" },
      { name: "Fruits frais", price: "1,20 €" },
      { name: "Chantilly", price: "0,50 €" },
      { name: "Glace", price: "1,00 €" },
    ],
  },
  {
    title: "Desserts",
    image: "/media/cheesecake.jpg",
    items: [{ name: "Gâteaux du jour", price: "Prix affiché au comptoir" }],
  },
];

export const drinkSections: MenuSection[] = [
  {
    title: "Cafés & Chocolats",
    images: ["/media/DSC02152.jpg", "/media/DSC02140.jpg"],
    items: [
      { name: "Expresso", price: "1,80 €" }, { name: "Café au lait", price: "4,00 €" },
      { name: "Cappuccino", price: "4,50 €" }, { name: "Latte Macchiato", price: "4,60 €" },
      { name: "Chocolat chaud", price: "3,50 €" }, { name: "Chocolat viennois", price: "4,00 €" },
      { name: "Supplément arôme", price: "0,50 €", description: "Vanille, noisette et caramel." },
    ],
  },
  {
    title: "Boissons Fraîches",
    images: ["/media/DSC02282.jpg", "/media/cocktail.jpg", "/media/DSC02136.jpg"],
    items: [
      { name: "Milkshake", price: "5,00 €" }, { name: "Jus d'orange pressé", price: "3,00 €" },
      { name: "Smoothie", price: "6,00 €" }, { name: "Thé à la menthe", price: "2,50 €" },
      { name: "Petite théière", price: "4,00 €" }, { name: "Grande théière", price: "6,00 €" },
    ],
  },
  {
    title: "Formule Thé",
    items: [
      { name: "Msemen", description: "Miel, Nutella ou Vache qui rit." },
      { name: "Verre de thé" },
    ],
  },
  {
    title: "Divers",
    items: [
      { name: "Capri-Sun" },
      { name: "Oasis Tropical" },
      { name: "Oasis Pomme-Poire" },
      { name: "Oasis Pomme-Cassis-Framboise" },
      { name: "Coca-Cola" },
      { name: "Coca-Cola Cherry" },
      { name: "Coca-Cola Zéro" },
      { name: "Ice Tea Pastèque-Menthe" },
      { name: "Ice Tea Framboise" },
      { name: "Orangina" },
      { name: "Perrier" },
    ],
  },
];
