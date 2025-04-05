import { Component, inject, signal } from '@angular/core';
import { ProductsService } from 'src/app/server/products.service';
import { IPagination } from 'src/app/interfaces';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from 'src/app/components/search/search.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [
    ProductCardComponent,
    CommonModule,
    ModalComponent,
    MatButtonModule,
    SearchComponent,
  ],
})
export class ProductsComponent {
  productSercive = inject(ProductsService);
  pagination: IPagination<any> = {
    products: [],
    total: 0,
    skip: 0,
    limit: 20,
  };
  isModalOpen = signal<boolean>(false);
  search: string = '';
  ngOnInit(): void {
    this.loadProducts();
  }

  updateSearch(newValue: string): void {
    this.search = newValue;
    this.loadProducts();
  }

  loadProducts(): void {
    this.productSercive
      .getProducts(this.pagination.limit, this.pagination.skip)
      .subscribe((data) => {
        this.pagination.products = data.products;
        this.pagination.limit = data.limit;
      });
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
