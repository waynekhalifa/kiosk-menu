import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { MenuComponent } from './components/menu/menu.component';
import { OffersComponent } from './components/offers/offers.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DishdetailComponent } from './components/dishdetail/dishdetail.component';
import { OrderComponent } from './components/order/order.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DishesComponent,
    MenuComponent,
    OffersComponent,
    FooterComponent,
    HeaderComponent,
    DishdetailComponent,
    OrderComponent,
    OrderpageComponent,
    MyorderComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
