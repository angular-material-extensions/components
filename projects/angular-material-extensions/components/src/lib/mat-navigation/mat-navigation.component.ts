import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'mat-navigation',
  templateUrl: './mat-navigation.component.html',
  styleUrls: ['./mat-navigation.component.scss']
})
export class MatNavigationComponent implements OnInit {

  @Input()
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor() { }

  ngOnInit() {
  }

}
