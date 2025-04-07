import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  private apiUrl = 'https://dummyjson.com';
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/products/category-list`);
  }
}
