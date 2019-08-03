import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MatMenuButtonPageComponent} from './mat-menu-button-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: MatMenuButtonPageComponent},
    ])
  ],
  exports: [RouterModule]
})
export class MatMenuButtonPageRoutingModule {
}
