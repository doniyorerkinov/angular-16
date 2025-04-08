import { ProductsService } from 'src/app/server/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productService = inject(ProductsService);
  product: IProduct | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      +params.get('id')!;
      this.productService
        .getProduct(+params.get('id')!)
        .subscribe((product) => {
          this.product = product;
          console.log(product);
        });
    });
  }
}
