export type MenuItem = {
  name: string;
  price?: number;
  halfPrice?: number;
  fullPrice?: number;
  featured?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  description?: string;
  items?: MenuItem[];
  sections?: MenuSection[];
};

export const menuData: MenuCategory[] = [
  {
    id: "mandi",
    title: "Non-Veg South Indian Mandi",
    description: "Royal feasts with slow-roasted meats and Arabian spice.",
    items: [
      { name: "Mandi Mafia Special", halfPrice: 749, fullPrice: 1399 },
      { name: "Sultan Darbar", halfPrice: 799, fullPrice: 1499 },
      { name: "Juicy Crab Mandi", halfPrice: 579, fullPrice: 899 },
      { name: "Alfaham Chicken", halfPrice: 649, fullPrice: 1249 },
      { name: "Bhimavaram Royyala Mandi", halfPrice: 799, fullPrice: 1499 },
      { name: "Pepper Mutton Mandi", halfPrice: 699, fullPrice: 1299 },
      { name: "Arabian Fish Mandi", halfPrice: 749, fullPrice: 1399 }
    ]
  },
  {
    id: "starters",
    title: "Starters",
    description: "Chinese, Tandoori, and Grilled specialties.",
    sections: [
      {
        title: "Chinese",
        items: [
          { name: "Chicken Chinese Sizzler", price: 429 },
          { name: "Dragon Chicken", price: 349 },
          { name: "Chilli Garlic Prawns", price: 459 }
        ]
      },
      {
        title: "Tandoori",
        items: [
          { name: "Mutton Seekh Kebab", price: 499 },
          { name: "Tandoori Chicken", price: 359 }
        ]
      },
      {
        title: "Grilled",
        items: [
          { name: "Peri Peri Grilled Fish", price: 399 },
          { name: "Smoky Grilled Wings", price: 329 }
        ]
      }
    ]
  },
  {
    id: "turkish",
    title: "Turkish Specials",
    description: "Ankara-inspired bakes and kebabs.",
    items: [
      { name: "Minced Chicken Pide", price: 379, featured: true },
      { name: "Spinach Fatayer", price: 279, featured: true },
      { name: "Hummus with Pitabread", price: 399 },
      { name: "Lamb Adana Kebab", price: 499 },
      { name: "Turkish Shawarma Plate", price: 399 },
      { name: "Cheese Manakish", price: 249 }
    ]
  },
  {
    id: "desserts",
    title: "Desserts & Mojitos",
    description: "Sweet finales and signature pours.",
    items: [
      { name: "Kaddu Ka Kheer", price: 199 },
      { name: "Apricot Delight", price: 299 },
      { name: "Kunafa", price: 299 },
      { name: "Baklava", price: 249 },
      { name: "Blood Red Cranberry Mojito", price: 149 },
      { name: "Blueberry Rush", price: 149 },
      { name: "Arabian Mint Mojito", price: 149 },
      { name: "Rose Milk", price: 129 }
    ]
  },
  {
    id: "extras",
    title: "Beverages & Extras",
    description: "Refreshments and indulgent add-ons.",
    items: [
      { name: "Mineral Water", price: 20 },
      { name: "Soft Drink", price: 60 },
      { name: "Fresh Lime Soda", price: 79 },
      { name: "Extra Mandi Rice", price: 129 },
      { name: "Extra Pita Bread", price: 49 },
      { name: "Extra Garlic Mayo Dip", price: 39 },
      { name: "Extra Arabian Pickle", price: 29 }
    ]
  }
];
