import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../views/products/products.component';
import { RecipesComponent } from '../views/recipes/recipes.component';
import { ProductDetailComponent } from '../views/products/product-detail/product-detail.component';
import { AddProductComponent } from '../views/products/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
