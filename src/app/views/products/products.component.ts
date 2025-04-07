import { ReferencesService } from './../../server/references.service';
import { Component, inject, signal, effect } from '@angular/core';
import { ProductsService } from 'src/app/server/products.service';
import { IPagination, ISelect } from 'src/app/interfaces';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from 'src/app/components/search/search.component';
import { Subscription } from 'rxjs';
import { SelectComponent } from 'src/app/components/Form/select/select.component';
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
    SelectComponent,
  ],
})
export class ProductsComponent {
  productSercive = inject(ProductsService);
  referencesService = inject(ReferencesService);
  private subscribtion: Subscription | null = null;
  private categoriesSubscription: Subscription | null = null;
  pagination: IPagination<any> = {
    products: [],
    total: 0,
    skip: 0,
    limit: 40,
  };
  isModalOpen = signal<boolean>(false);
  search: string = '';
  categories: ISelect[] = [];
  selectedCategory = signal<string>('');

  constructor() {
    effect(() => {
      const currentCategory = this.selectedCategory();
      if (currentCategory) {
        this.loadProducts();
      }
    });
  }

  updateSearch(newValue: string): void {
    this.search = newValue;
    this.loadProducts();
  }

  loadProducts(): void {
    this.subscribtion = this.productSercive
      .getProducts(
        this.pagination.limit,
        this.pagination.skip,
        this.selectedCategory()
      )
      .subscribe((data) => {
        this.pagination.products = data.products;
        this.pagination.limit = data.limit;
      });
  }

  handleCategoryChange(selectedCategory: string): void {
    console.log('Selected category:', selectedCategory);
    this.selectedCategory.set(selectedCategory);
    // You can now use the selected category for further processing
  }

  ngOnInit(): void {
    this.loadProducts();
    this.categoriesSubscription = this.referencesService
      .getAllCategories()
      .subscribe((data) => {
        let n = data.map((category) => {
          return { value: category, text: category };
        });
        this.categories = n;
      });
  }

  ngOnDestroy(): void {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
