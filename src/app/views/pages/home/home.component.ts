import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  private visitedPages!: Set<String>;

  pageThumbnailDetails: {
    title: string,
    thumbnailUrl: string,
    navigateToPath: string,
    hasVisited: boolean,
  }[];

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) {
    this.visitedPages = new Set(JSON.parse(this.cookieService.get('ab-vp') ?? '[]'));

    this.pageThumbnailDetails = [
      {
        title: 'Projects',
        thumbnailUrl: '/assets/landing-page/thumbnail.svg',
        navigateToPath: 'fanart', // TODO: navigate to projects page
        hasVisited: this.visitedPages.has('projects'),
      },
      {
        title: 'Fan letters',
        thumbnailUrl: '/assets/landing-page/thumbnail.svg',
        navigateToPath: 'letters',
        hasVisited: this.visitedPages.has('letters'),
      },
      {
        title: 'Fan art',
        thumbnailUrl: '/assets/landing-page/thumbnail.svg',
        navigateToPath: 'fanart',
        hasVisited: this.visitedPages.has('fanart'),
      },
      {
        title: 'Credits',
        thumbnailUrl: '/assets/landing-page/thumbnail.svg',
        navigateToPath: 'credits',
        hasVisited: this.visitedPages.has('credits'),
      },
    ];
  }

  navigateToPage(path: string) {
    this.router.navigateByUrl(path);
    this.visitedPages.add(path);
    this.cookieService.put('ab-vp', JSON.stringify(new Array(...this.visitedPages)));
    const details = this.pageThumbnailDetails.find(it => it.navigateToPath === path);
    if (details) {
      details.hasVisited = true;
    }
  }
}
