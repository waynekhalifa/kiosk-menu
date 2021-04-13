import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { OffersComponent } from './components/offers/offers.component';
import { DishdetailComponent } from './components/dishdetail/dishdetail.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'menu/:id', component: DishdetailComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'your-order', component: OrderpageComponent },
  { path: 'place-order', component: HomeComponent },
  { path: '', component: OffersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
