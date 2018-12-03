import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[];
  constructor(private hService: HomeService) { }

  ngOnInit() {
    this.menuItems = this.hService.getGridMenu();
  }
}
