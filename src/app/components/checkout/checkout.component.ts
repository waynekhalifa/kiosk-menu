import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  placed = false;
  consfirmation = '';
  constructor() {}

  ngOnInit(): void {}

  placeOrder() {
    this.consfirmation = 'Your Order has been placed successfully';
    this.placed = true;
  }
}
