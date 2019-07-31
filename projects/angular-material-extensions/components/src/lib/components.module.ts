import {NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {MatNavigationComponent} from './mat-navigation/mat-navigation.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ComponentsComponent, MatNavigationComponent],
  imports: [
    CommonModule,
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule {
}
