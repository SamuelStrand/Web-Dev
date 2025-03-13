import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngFor="let product of products" class="product-container">
  <h3>
    <a class="name" [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>
  <img [src]="product.image" alt="{{ product.name }}" width="300">
  <p class="description">
    <strong> Description: </strong> {{ product.description }}
  </p>
  <p class="description">
    <strong>Rating: </strong> {{ product.rating }}
  </p>

  <a [href]="'https://wa.me/?text=Check%20out%20' + product.name + '%20at%20this%20link:%20' + product.buyLink"
     class="share-button">
     Share via WhatsApp
  </a>

  <a [href]="product.buyLink" class="buy-button">
     Buy now
  </a>
</div>

  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [
    { name: 'Apple iPhone 15 Pro Max', description: 'Флагманский смартфон от Apple с процессором A17 Pro, улучшенной камерой и корпусом из титана.', rating: 5, image: '/assets/tech1.jpg', buyLink: "https://apple.com/iphone-15-pro-max" },
    { name: 'Samsung Galaxy S24 Ultra', description: 'Мощный смартфон с 200-МП камерой, стилусом S-Pen и передовым процессором Snapdragon 8 Gen 3.', rating: 4.5, image: '/assets/tech2.jpg', buyLink: "https://samsung.com/galaxy-s24-ultra" },
    { name: 'Sony PlayStation 5', description: 'Игровая консоль нового поколения с поддержкой 4K-гейминга, быстрой загрузкой и эксклюзивными играми.', rating: 5, image: '/assets/tech3.jpg', buyLink: "https://playstation.com/ps5" },
    { name: 'Microsoft Xbox Series X', description: 'Производительная игровая консоль с поддержкой 8K-графики, быстрой загрузкой и геймпассом.', rating: 4.5, image: '/assets/tech4.jpg', buyLink: "https://xbox.com/series-x" },
    { name: 'Apple MacBook Pro 16 M3 Max', description: 'Мощный ноутбук для профессионалов с экраном Liquid Retina XDR и новым чипом M3 Max.', rating: 5, image: '/assets/tech5.jpg', buyLink: "https://apple.com/macbook-pro-16" },
    { name: 'ASUS ROG Zephyrus G14', description: 'Игровой ноутбук с процессором Ryzen 9, видеокартой RTX 4070 и экраном Mini LED.', rating: 4.5, image: '/assets/tech6.jpg', buyLink: "https://asus.com/rog-zephyrus-g14" },
    { name: 'Samsung OLED 4K Smart TV', description: 'Премиальный OLED-телевизор с глубоким черным цветом, 120 Гц и интеллектуальной платформой Tizen.', rating: 4.5, image: '/assets/tech7.jpg', buyLink: "https://samsung.com/oled-tv" },
    { name: 'DJI Air 3', description: 'Компактный и мощный дрон с двойной камерой, 4K-видеосъемкой и увеличенным временем полета.', rating: 4.5, image: '/assets/tech8.jpg', buyLink: "https://dji.com/air-3" },
    { name: 'Sony WH-1000XM5', description: 'Наушники с лучшим в классе шумоподавлением, качественным звуком и комфортной посадкой.', rating: 5, image: '/assets/tech9.jpg', buyLink: "https://sony.com/wh-1000xm5" },
    { name: 'Garmin Fenix 7X Pro', description: 'Продвинутая спортивная смарт-часы с GPS, автономностью до 28 дней и функциями мониторинга здоровья.', rating: 4.5, image: '/assets/tech10.jpg', buyLink: "https://garmin.com/fenix-7x-pro" }
  ];


  share(product: any) {
    const message = `Check out ${product.name} at this link: ${product.buyLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  buy(link: string) {
    console.log('Buy link:', link);
    window.open(link, '_blank');
  }

}
