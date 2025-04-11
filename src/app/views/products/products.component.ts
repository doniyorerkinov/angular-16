import { StaticTemplateFormComponent } from './form/form.component';
import { ReferencesService } from './../../server/references.service';
import { Component, inject, signal, effect } from '@angular/core';
import { ProductsService } from 'src/app/server/products.service';
import { IFormField, IPagination, ISelect } from 'src/app/interfaces';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from 'src/app/components/search/search.component';
import { Subscription } from 'rxjs';
import { SelectComponent } from 'src/app/components/Form/select/select.component';
import { Router } from '@angular/router';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { TEMPLATE_FORM_FIELDS } from 'src/app/configs/form-filds.config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [
    StaticTemplateFormComponent,
    ProductCardComponent,
    CommonModule,
    ModalComponent,
    MatButtonModule,
    SearchComponent,
    SelectComponent,
    LoaderComponent,
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
  loading = signal<boolean>(false);
  isModalOpen = signal<boolean>(true);
  search: string = '';
  categories: ISelect[] = [];
  selectedCategory = signal<string>('');
  formFields: IFormField[] = TEMPLATE_FORM_FIELDS;
  constructor(private router: Router) {
    effect(() => {
      const currentCategory = this.selectedCategory();
      if (currentCategory) {
        this.loadProducts();
      }
    });
  }

  updateSearch(newValue: string): void {
    this.search =
      typeof newValue == 'string'
        ? newValue
        : // @ts-ignore
          (newValue.target as HTMLInputElement).value;
    this.selectedCategory.set('');
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.subscribtion = this.productSercive
      .getProducts(
        this.pagination.limit,
        this.pagination.skip,
        this.selectedCategory(),
        this.search
      )
      .subscribe((data) => {
        this.pagination.products = data.products;
        this.pagination.limit = data.limit;
        this.loading.set(false);
      });
  }

  handleCategoryChange(selectedCategory: string): void {
    this.selectedCategory.set(selectedCategory);
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

  goToProductDetail(id: number) {
    this.router.navigate(['/products', id]);
  }
}
