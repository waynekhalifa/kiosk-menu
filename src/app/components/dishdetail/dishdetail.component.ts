import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishItem } from '../dishes/dish-item';
import { DishItems } from '../dishes/dish-items';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  isActive = false;
  dishItems = DishItems;
  dishItem?: DishItem;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemFromRoute = Number(routeParams.get('id'));
  
    this.dishItem = this.dishItems.find(item => item.id === itemFromRoute);
    
    setTimeout(() => {
      this.isActive = true;
    }, 500);
  }
}
