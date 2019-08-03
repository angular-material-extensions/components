<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.rawgit.com/angular-material-extensions/core/master/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/components -  contains a set of prebuilt extended angular material components, simple API and easy to use.

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage) 
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

## [Demo](https://angular-material-extensions.io/)

View all the directives in action at https://angular-material-extensions.io/

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `8.x`

---

<a name="installation"/>

##  Installation

Now install `@angular-material-extensions/components` via:

```shell
npm install --save @angular-material-extensions/components
```

## Components

### `mat-menu-button` - material selection box with icons or images [learn more](https://angular-material-extensions.io/)

#### Import the library

Once installed you need to import the main module:
```js
import { MatMenuButtonModule } from '@angular-material-extensions/components';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatPasswordStrengthModule .forRoot()`):
```js
import { MatMenuButtonModule } from '@angular-material-extensions/components';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [
    MatMenuButtonModule,
    MatDialogModule,
     ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```


<a name="usage"/>

#### Usage


```html
<mat-menu-button [menuItems]="menuItems" 
                 (onMenuItemSelected)="onMenuItemSelected($event)">
</mat-menu-button>
```

```typescript
import {MatMenuButtonItem} from '@angular-material-extensions/components';


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

onMenuItemSelected(menuKey: string) {
    console.log('menu key:', menuKey);
  }
```

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/password-strength/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

## License

Copyright (c) 2019 Anthony Nahas. Licensed under the MIT License (MIT)

