import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface MatMenuButtonItem {
  key: string;
  text: string;
  imgURL?: string;
}

@Component({
  selector: 'mat-menu-button',
  templateUrl: './mat-menu-button.component.html',
  styleUrls: ['./mat-menu-button.component.scss']
})
export class MatMenuButtonComponent implements OnInit {

  @Input() menuItems: MatMenuButtonItem[] = [];
  @Input() height: string;

  @Output() onMenuItemSelected: EventEmitter<string> = new EventEmitter<string>();

  selectedMenuItem: MatMenuButtonItem;

  constructor() {
  }

  ngOnInit() {
    if (this.menuItems.length > 0) {
      this.selectedMenuItem = this.menuItems[0];
    }
  }

}
