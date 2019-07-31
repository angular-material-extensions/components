import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuButtonComponent} from './mat-menu-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  declarations: [MatMenuButtonComponent],
  exports: [MatMenuButtonComponent]
})
export class MatMenuButtonModule {
}
