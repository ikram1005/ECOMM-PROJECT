import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { product } from 'data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private product:ProductService,private route:Router){}

  productData:undefined|product[];

  ngOnInit(){
    this.productList();
    this.startSlideshow();
  }

  productList(){
    this.product.getProducts().subscribe((result)=>{
      this.productData=result;
    })
  }

  imagedata = [
  "https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/10/appleiphone12pro-1.jpg?fit=1960%2C1102&ssl=1",
  "https://images.expertreviews.co.uk/wp-content/uploads/2021/03/best_budget_gaming_laptop.jpg",
  "https://rukminim2.flixcart.com/flap/850/400/image/7c9975f767d61c6c.jpg?q=90"
  ];

  currentIndex = 0;

  startSlideshow() {
    setInterval(() => {
      this.changeImage();
    }, 2000);
  }

  changeImage() {
    if (this.currentIndex >= this.imagedata.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

}
