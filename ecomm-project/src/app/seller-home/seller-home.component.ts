import { Component } from '@angular/core';
import { product } from 'data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  constructor(private product:ProductService,private route:Router){}

  productData:undefined|product[];

  ngOnInit(){
    this.productList();
  }

  deleteItem(id:number){
      this.product.deleteProduct(id).subscribe((result)=>{
        if(result){
          alert('Product deleted !.')
          this.productList();
        }
      })
  }

  productList(){
    this.product.getProducts().subscribe((result)=>{
      this.productData=result;
    })
  }

}
