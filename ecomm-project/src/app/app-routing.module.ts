import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'seller',
    component: SellerComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [authGuard]
  }, 
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate:[authGuard]
  },
  {
    path:'seller-update-product/:id',
    component:SellerUpdateProductComponent,
    canActivate:[authGuard]
  },{
    path:'search/:query',
    component:SearchComponent
  },{
    path:'user-auth',
    component:UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
