import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination, IProduct } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // GET: Retrieve all Products
  getProducts(
    limit: number,
    skip: number,
    catagory?: string
  ): Observable<IPagination<IProduct>> {
    return this.http.get<IPagination<IProduct>>(
      `${this.apiUrl}${
        catagory ? `/category/${catagory}` : ''
      }?limit=${limit}&skip=${skip}`
    );
  }

  // GET: Retrieve a single Product by ID
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  // POST: Create a new Product
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, product);
  }

  // PUT: Update an existing Product
  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiUrl}/${id}`, product);
  }

  // DELETE: Remove an Product
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
