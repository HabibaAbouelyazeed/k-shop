import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeroComponent } from './home/hero/hero.component';
import { ProductsListComponent } from './home/products-list/products-list.component';
import { ProductCardMainComponent } from './home/product-card-main/product-card-main.component';
import { LatestProductsListComponent } from './home/latest-products-list/latest-products-list.component';
import { ProductCardSideComponent } from './home/product-card-side/product-card-side.component';
import { WishlistComponent } from './wishlist-page/wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundPageComponent,
    HeroComponent,
    ProductsListComponent,
    ProductCardMainComponent,
    LatestProductsListComponent,
    ProductCardSideComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
