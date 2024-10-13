import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any; // Déclarer $ pour pouvoir l'utiliser comme jQuery

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(() => {
      this.initCarousel();
    });
  }
  

  initCarousel(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }

}
