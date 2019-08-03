import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentsService {
    constructor() { }
}
ComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentsService.ctorParameters = () => [];
/** @nocollapse */ ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-components',
                template: `
    <p>
      components works!
    </p>
  `
            }] }
];
/** @nocollapse */
ComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatNavigationComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MatNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-navigation',
                template: "<div class=\"nav vertical\">\n  <!--  <ng-container *ngFor=\"let item of navigation\">-->\n  <!--    <div [ngSwitch]=\"item.type\">-->\n  <!--      <ng-container *ngSwitchCase=\"'group'\">-->\n  <!--        &lt;!&ndash;          <fuse-nav-vertical-group *ngIf=\"item.type == 'group'\" [item]=\"item\"></fuse-nav-vertical-group>&ndash;&gt;-->\n  <!--      </ng-container>-->\n  <!--    </div>-->\n  <!--    <ng-container *ngSwitchCase=\"'collapsable'\">-->\n  <!--&lt;!&ndash;      <fuse-nav-vertical-collapsable *ngIf=\"item.type == 'collapsable'\" [item]=\"item\"></fuse-nav-vertical-collapsable>&ndash;&gt;-->\n  <!--    </ng-container>-->\n  <!--    <ng-container *ngSwitchCase=\"'item'\">-->\n  <!--&lt;!&ndash;      <fuse-nav-vertical-item *ngIf=\"item.type == 'item'\" [item]=\"item\"></fuse-nav-vertical-item>&ndash;&gt;-->\n  <!--    </ng-container>-->\n  <!--  </ng-container>-->\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatNavigationComponent.ctorParameters = () => [];
MatNavigationComponent.propDecorators = {
    navigation: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentsModule {
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComponentsComponent, MatNavigationComponent],
                imports: [
                    CommonModule,
                ],
                exports: [ComponentsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatMenuButtonComponent {
    constructor() {
        this.menuItems = [];
        this.onMenuItemSelected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.menuItems.length > 0) {
            this.selectedMenuItem = this.menuItems[0];
        }
    }
}
MatMenuButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-menu-button',
                template: "<button mat-button fxHide fxShow.gt-xs [matMenuTriggerFor]=\"menuButton\" class=\"menu-button\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img [src]=\"selectedMenuItem?.imgURL\" class=\"flag mr-8\"/>\n    <span class=\"iso text-uppercase\">{{ selectedMenuItem.text }}</span>\n  </div>\n</button>\n\n<mat-menu #menuButton=\"matMenu\" [overlapTrigger]=\"false\">\n  <button (click)=\"selectedMenuItem = item; onMenuItemSelected.emit(item.key)\"\n          *ngFor=\"let item of menuItems\"\n          mat-menu-item>\n          <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img *ngIf=\"item.imgURL\" [src]=\"item?.imgURL\"/>\n            <span>{{ item.text }}</span>\n          </span>\n  </button>\n</mat-menu>\n",
                styles: [".menu-button{min-width:64px;height:64px}button{outline:0}img{max-width:100%;height:16px;vertical-align:top;border:none;margin-right:16px}"]
            }] }
];
/** @nocollapse */
MatMenuButtonComponent.ctorParameters = () => [];
MatMenuButtonComponent.propDecorators = {
    menuItems: [{ type: Input }],
    height: [{ type: Input }],
    onMenuItemSelected: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatMenuButtonModule {
}
MatMenuButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatMenuModule,
                    FlexLayoutModule
                ],
                declarations: [MatMenuButtonComponent],
                exports: [MatMenuButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComponentsComponent, ComponentsModule, ComponentsService, MatMenuButtonComponent, MatMenuButtonModule, MatNavigationComponent as ɵa };
//# sourceMappingURL=angular-material-extensions-components.js.map
