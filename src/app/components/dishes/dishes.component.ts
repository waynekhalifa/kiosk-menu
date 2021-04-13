import { Component, OnInit } from '@angular/core';
import { DishItems } from './dish-items';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit {
  dishItems = DishItems;
  isActive = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isActive = true;
    }, 500);
  }
}
