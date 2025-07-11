import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home';
// import { Search } from './search/search';
import { FoodPage } from './food-page/food-page';
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path: 'tag/:tag', component: HomeComponent},
    {path: 'food/:id', component: FoodPage},
    {path: 'cart-page', component: CartPage}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
