import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-slider',
  templateUrl: './tournaments-slider.component.html',
  styleUrls: ['./tournaments-slider.component.scss'],
})
export class TournamentsSliderComponent implements OnInit {
  posts = [1, 2, 3, 4, 5, 6];

  config = {
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() {}

  ngOnInit(): void {}
}
