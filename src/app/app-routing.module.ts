import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { WishlistComponent } from './wishlist-page/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  },

  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
