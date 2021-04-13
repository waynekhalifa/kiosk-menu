import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slides } from './slides';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isActive = false;
  slides = Slides;
  customOptions: OwlOptions = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    items: 1,
    nav: false,
  };
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isActive = true;
    }, 300);
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
