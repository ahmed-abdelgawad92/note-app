import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input('item') item: MenuItem;
  collapsed = true;
  constructor() { }

  ngOnInit() {
  }

  showAllText() {
    this.collapsed = ! this.collapsed;
  }
}
