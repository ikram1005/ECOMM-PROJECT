import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { product } from 'data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  searchResults: product[] | undefined;
  constructor(private route: Router, private product: ProductService) { }

  ngOnInit() {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let data = localStorage.getItem('seller');
          let sellerData = data && JSON.parse(data);
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('user')) {
          let data = localStorage.getItem('user');
          let userData = data && JSON.parse(data);
          this.userName = userData.name;
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    })
  }

  logOut() {
    if (this.menuType === 'user' || this.menuType === 'seller') {
      localStorage.removeItem(this.menuType);
      this.route.navigate(['home']);
    }
  }


  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchList(element.value).subscribe((data) => {
        if (data.length > 5) {
          data.length = 5;
        }
        if (data.length > 0) {
          this.searchResults = data;
        }
      })
    }
  }

  hide() {
    this.searchResults = undefined;
  }

  submitSearch(q: string) {
    this.route.navigate([`search/${q}`]);
  }

}
