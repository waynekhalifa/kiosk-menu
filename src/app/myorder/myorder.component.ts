import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DishItem } from '../components/dishes/dish-item';
import { DishItems } from '../components/dishes/dish-items';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss'],
})
export class MyorderComponent implements OnInit {
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
}
