import { Component } from '@angular/core';
import { product } from 'data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  constructor(private product:ProductService){}

  submit(data:product){
    this.product.AddProduct(data);  
  }

}
