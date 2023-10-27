import { Component } from '@angular/core';
import { product } from 'data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private r: ActivatedRoute, private product: ProductService) { }

  productData: undefined | product[];
  searchQuery:string='';

  ngOnInit() {
     this.r.params.subscribe(params=>{
      this.searchQuery=params['query'];
      this.performSearch(this.searchQuery);
     })
  }

  performSearch(query:string){
    this.product.searchList(query).subscribe((val)=>{
      if(val){
        this.productData=val;
      }
    })
  }

}
