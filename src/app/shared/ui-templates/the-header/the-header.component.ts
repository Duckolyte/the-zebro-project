import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../service/navigation.service';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {

  titleSectionOne = 'Project';
  titleSectionTwo = 'Zebro';

  constructor(
    private  navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateHome(): void {
    this.navigationService.navigateTo('home');
  }
}
