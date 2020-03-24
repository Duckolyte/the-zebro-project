import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
  ) {
  }

  navigateTo(url: string) {
    this.router.navigate([`${url}`]);
  }

  getCurrentUrl(): string {
    return this.router.url;
  }
}
