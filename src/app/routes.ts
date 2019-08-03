import {Routes} from '@angular/router';
import {Homepage} from './pages/homepage';

export const ANGULAR_MATERIAL_EXTENSIONS_ROUTES: Routes =
  [
    {path: '', component: Homepage, pathMatch: 'full', data: {}},
    {
      path: 'dialogs',
      loadChildren: () => import('src/app/pages/dialogs-page/dialogs-page.module').then(m => m.DialogsPageModule),
    },
    {
      path: 'mat-menu-button',
      loadChildren: () => import('src/app/pages/mat-menu-button-page/mat-menu-button-page.module').then(m => m.MatMenuButtonPageModule),
    },
    {path: '**', redirectTo: ''},
  ];
