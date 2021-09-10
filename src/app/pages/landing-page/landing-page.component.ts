import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  // Demo Data for Video Resources
  slides = [
    { img: '../../../assets/images/others/video.png' },
    { img: '../../../assets/images/others/video1.png' },
    { img: '../../../assets/images/others/video2.png' },
    { img: '../../../assets/images/others/video.png' },
    { img: '../../../assets/images/others/video2.png' },
    { img: '../../../assets/images/others/video1.png' },
    { img: '../../../assets/images/others/video.png' },
    { img: '../../../assets/images/others/video1.png' },
    { img: '../../../assets/images/others/video2.png' },
    { img: '../../../assets/images/others/video.png' },
    { img: '../../../assets/images/others/video2.png' },
    { img: '../../../assets/images/others/video1.png' },
  ];

  // Demo Data for Testimonials

  testimonials = [
    {
      quote:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      imgUrl: '../../../assets/images/users/person.png',
      name: 'Sairam Koduri',
      title: 'Designation',
    },
    {
      quote:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      imgUrl: '../../../assets/images/users/person.png',
      name: 'Sairam Koduri',
      title: 'Designation',
    },
    {
      quote:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      imgUrl: '../../../assets/images/users/person.png',
      name: 'Sairam Koduri',
      title: 'Designation',
    },
    {
      quote:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      imgUrl: '../../../assets/images/users/person.png',
      name: 'Sairam Koduri',
      title: 'Designation',
    },
    {
      quote:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      imgUrl: '../../../assets/images/users/person.png',
      name: 'Sairam Koduri',
      title: 'Designation',
    },
  ];

  // Slider configuration for Video Resources

  videoConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  // Slider configuration for Testimonials
  testimonialConfig = { slidesToShow: 1, slidesToScroll: 1, arrows: true };

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
