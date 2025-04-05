import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LineThroughDirective } from 'src/app/Directives/LineThrough';
import { ChangeColorDirective } from 'src/app/Directives/ChangeColor';
import { IProduct } from 'src/app/interfaces';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [
    CommonModule,
    LineThroughDirective,
    MatIconModule,
    ChangeColorDirective,
  ],
  standalone: true,
})
export class ProductCardComponent {
  @Input() product: IProduct | null = null;

  CalculateDiscountPrice(price: number, discount: number): number {
    return Number((price - (price * discount) / 100).toFixed(2));
  }
}
