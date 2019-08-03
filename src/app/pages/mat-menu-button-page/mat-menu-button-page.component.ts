import {Component, OnInit} from '@angular/core';
import {MatMenuButtonItem} from '@angular-material-extensions/components';

@Component({
  selector: 'app-mat-menu-button-page',
  templateUrl: './mat-menu-button-page.component.html',
  styleUrls: ['./mat-menu-button-page.component.scss']
})
export class MatMenuButtonPageComponent implements OnInit {

  menuItems: MatMenuButtonItem[] = [
    {
      key: 'mute_key',
      imgURL: 'assets/img/icons/essential-collection/png/mute.png',
      text: 'Mute'
    },
    {
      key: 'play_key',
      imgURL: 'assets/img/icons/essential-collection/png/play-button-1.png',
      text: 'Play'
    },
    {
      key: 'pause_key',
      imgURL: 'assets/img/icons/essential-collection/png/pause-1.png',
      text: 'Pause'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onMenuItemSelected(menuKey: string) {
    console.log('menu key:', menuKey);
  }
}
