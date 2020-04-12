import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app-store';
import {UpdateSelectionContext} from '../../selection-context/selection-context.actions';
import {NavigationService} from '../../service/navigation.service';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {

  private titleSectionOne = 'Project';
  private titleSectionTwo = 'Zebro';

  constructor(
    private  navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateHome(): void {
    this.navigationService.navigateTo('home');
  }
}
