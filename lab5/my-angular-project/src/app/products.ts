export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  images?: string[];
  rating: number;
  categoryName: string;
  likes: number
}
export const products = [
  // Phones
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max',
    price: 599990,
    description: 'Flagship smartphone with A17 Pro chip, Pro camera system, and titanium frame.',
    link: 'https://www.apple.com/iphone-15-pro/',
    image: 'assets/tech1.jpg',
    images: [
      'assets/tech1.jpg',
      'assets/tech1.jpg'
    ],
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 579990,
    description: 'Smartphone with 200MP camera, Snapdragon 8 Gen 3, and S Pen support.',
    link: 'https://www.samsung.com/galaxy-s24-ultra/',
    image: 'assets/tech2.jpg',
    images: [
      'https://images.samsung.com/galaxy-s24-ultra-1.jpg',
      'https://images.samsung.com/galaxy-s24-ultra-2.jpg'
    ],
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 3,
    name: 'Xiaomi 14 Pro',
    price: 69999,
    description: 'Xiaomi flagship with LTPO OLED screen, Leica camera, and Snapdragon 8 Gen 3.',
    link: 'https://www.mi.com/global/product/xiaomi-14-pro/',
    image: 'assets/tech3.jpg',
    images: [
      'https://www.mi.com/global/images/xiaomi-14-pro-1.jpg',
      'https://www.mi.com/global/images/xiaomi-14-pro-2.jpg'
    ],
    rating: 4.5,
    categoryName: 'Phones',
    likes: 0
  },

  // Laptops
  {
    id: 4,
    name: 'Apple MacBook Pro 16"',
    price: 999990,
    description: 'Powerful laptop with M3 Max chip, 120Hz display, and 22-hour battery life.',
    link: 'https://www.apple.com/macbook-pro-16/',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1697304424183',
    images: [
      'https://store.storeimages.cdn-apple.com/macbook-pro-16-1.jpg',
      'https://store.storeimages.cdn-apple.com/macbook-pro-16-2.jpg'
    ],
    rating: 5,
    categoryName: 'Laptops',
    likes: 0
  },
  {
    id: 5,
    name: 'ASUS ROG Strix G16',
    price: 499990,
    description: 'Gaming laptop with GeForce RTX 4070, Intel i9, and 240Hz display.',
    link: 'https://rog.asus.com/laptops/rog-strix/rog-strix-g16-2023-series/',
    image: 'assets/tech4.jpg',
    images: [
      'https://dlcdnwebimgs.asus.com/rog-strix-g16-1.jpg',
      'https://dlcdnwebimgs.asus.com/rog-strix-g16-2.jpg'
    ],
    rating: 5,
    categoryName: 'Laptops',
    likes: 0
  },

  // TV
  {
    id: 7,
    name: 'Samsung Neo QLED 8K 75"',
    price: 1499990,
    description: 'Premium 8K TV with Quantum Mini LED and AI processor.',
    link: 'https://www.samsung.com/tvs/neo-qled/',
    image: 'assets/tech5.jpg',
    images: [
      'https://images.samsung.com/neo-qled-8k-1.jpg',
      'https://images.samsung.com/neo-qled-8k-2.jpg'
    ],
    rating: 5,
    categoryName: 'TV',
    likes: 0
  },

  // Home Appliances
  {
    id: 8,
    name: 'Dyson V15 Detect',
    price: 299990,
    description: 'Powerful cordless vacuum cleaner with laser detection and HEPA filter.',
    link: 'https://www.dyson.com/vacuums/v15-detect/',
    image: 'assets/tech6.jpg',
    images: [
      'https://www.dyson.com/images/dyson-v15-1.jpg',
      'https://www.dyson.com/images/dyson-v15-2.jpg'
    ],
    rating: 5,
    categoryName: 'Home Appliances',
    likes: 0
  },
  {
    id: 9,
    name: 'LG F2V9HS2W',
    price: 369990,
    description: 'Washing machine with AI DD, steam treatment, and efficient water consumption.',
    link: 'https://www.lg.com/washing-machines/',
    image: 'assets/tech7.jpg',
    images: [
      'assets/tech7.jpg',
      'assets/tech7.jpg'
    ],
    rating: 4.5,
    categoryName: 'Home Appliances',
    likes: 0
  }
];



