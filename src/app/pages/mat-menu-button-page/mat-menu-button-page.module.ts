import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuButtonPageComponent} from './mat-menu-button-page.component';
import {MatMenuButtonModule} from '@angular-material-extensions/components';
import {MarkdownModule} from 'ngx-markdown';
import {SharedModule} from '@shared/shared.module';
import {MatMenuButtonPageRoutingModule} from './mat-menu-button-page-routing.module';


@NgModule({
  declarations: [MatMenuButtonPageComponent],
  imports: [
    CommonModule,
    MatMenuButtonModule,
    MarkdownModule.forChild(),
    SharedModule,
    MatMenuButtonPageRoutingModule
  ]
})
export class MatMenuButtonPageModule {
}
