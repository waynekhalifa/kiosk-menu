import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DishItem } from '../dishes/dish-item';
import { DishItems } from '../dishes/dish-items';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  dishItems = DishItems;
  dishItem?: DishItem;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const itemFromRoute = Number(routeParams.get('id'));

    this.dishItem = this.dishItems.find((item) => item.id === itemFromRoute);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  addToOrder(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
