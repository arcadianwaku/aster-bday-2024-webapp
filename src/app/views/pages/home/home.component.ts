import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  pageThumbnailDetails: {
    title: string,
    thumbnailUrl: string,
    navigateToPath: string,
  }[];

  constructor(
  ) {

    this.pageThumbnailDetails = [
      {
        title: 'Projects',
        thumbnailUrl: '/assets/landing-page/projects_thumbnail.png',
        navigateToPath: 'projects',
      },
      {
        title: 'Fan letters',
        thumbnailUrl: '/assets/landing-page/fan_letters_thumbnail.png',
        navigateToPath: 'letters',
      },
      {
        title: 'Fan art',
        thumbnailUrl: '/assets/landing-page/fan_art_thumbnail.png',
        navigateToPath: 'fanart',
      },
      {
        title: 'Credits',
        thumbnailUrl: '/assets/landing-page/credits_thumbnail.png',
        navigateToPath: 'credits',
      },
    ];
  }
}
