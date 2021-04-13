import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss'],
})
export class OrderpageComponent implements OnInit {
  isActive = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isActive = true;
    }, 500);
  }
}
