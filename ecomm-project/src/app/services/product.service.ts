import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  AddProduct(product: product) {
    this.http.post('http://localhost:3000/products', product).subscribe((val) => {
      if (val) {
        alert('Product added !.')
      }
    })
  }

  getProducts() {
    return this.http.get<product[]>(`http://localhost:3000/products`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(data: product) {
    return this.http.put<product>(`http://localhost:3000/products/${data.id}`, data);
  }

  searchList(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
}
