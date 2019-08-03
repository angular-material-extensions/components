(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/menu'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@angular-material-extensions/components', ['exports', '@angular/core', '@angular/common', '@angular/material/button', '@angular/material/menu', '@angular/flex-layout'], factory) :
    (global = global || self, factory((global['angular-material-extensions'] = global['angular-material-extensions'] || {}, global['angular-material-extensions'].components = {}), global.ng.core, global.ng.common, global.ng.material.button, global.ng.material.menu, global.ng['flex-layout']));
}(this, function (exports, core, common, button, menu, flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsService = /** @class */ (function () {
        function ComponentsService() {
        }
        ComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
        return ComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsComponent = /** @class */ (function () {
        function ComponentsComponent() {
        }
        /**
         * @return {?}
         */
        ComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-components',
                        template: "\n    <p>\n      components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ComponentsComponent.ctorParameters = function () { return []; };
        return ComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatNavigationComponent = /** @class */ (function () {
        function MatNavigationComponent() {
        }
        /**
         * @return {?}
         */
        MatNavigationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        MatNavigationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-navigation',
                        template: "<div class=\"nav vertical\">\n  <!--  <ng-container *ngFor=\"let item of navigation\">-->\n  <!--    <div [ngSwitch]=\"item.type\">-->\n  <!--      <ng-container *ngSwitchCase=\"'group'\">-->\n  <!--        &lt;!&ndash;          <fuse-nav-vertical-group *ngIf=\"item.type == 'group'\" [item]=\"item\"></fuse-nav-vertical-group>&ndash;&gt;-->\n  <!--      </ng-container>-->\n  <!--    </div>-->\n  <!--    <ng-container *ngSwitchCase=\"'collapsable'\">-->\n  <!--&lt;!&ndash;      <fuse-nav-vertical-collapsable *ngIf=\"item.type == 'collapsable'\" [item]=\"item\"></fuse-nav-vertical-collapsable>&ndash;&gt;-->\n  <!--    </ng-container>-->\n  <!--    <ng-container *ngSwitchCase=\"'item'\">-->\n  <!--&lt;!&ndash;      <fuse-nav-vertical-item *ngIf=\"item.type == 'item'\" [item]=\"item\"></fuse-nav-vertical-item>&ndash;&gt;-->\n  <!--    </ng-container>-->\n  <!--  </ng-container>-->\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatNavigationComponent.ctorParameters = function () { return []; };
        MatNavigationComponent.propDecorators = {
            navigation: [{ type: core.Input }]
        };
        return MatNavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ComponentsComponent, MatNavigationComponent],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [ComponentsComponent]
                    },] }
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatMenuButtonComponent = /** @class */ (function () {
        function MatMenuButtonComponent() {
            this.menuItems = [];
            this.onMenuItemSelected = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        MatMenuButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.menuItems.length > 0) {
                this.selectedMenuItem = this.menuItems[0];
            }
        };
        MatMenuButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-menu-button',
                        template: "<button mat-button fxHide fxShow.gt-xs [matMenuTriggerFor]=\"menuButton\" class=\"menu-button\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img [src]=\"selectedMenuItem?.imgURL\" class=\"flag mr-8\"/>\n    <span class=\"iso text-uppercase\">{{ selectedMenuItem.text }}</span>\n  </div>\n</button>\n\n<mat-menu #menuButton=\"matMenu\" [overlapTrigger]=\"false\">\n  <button (click)=\"selectedMenuItem = item; onMenuItemSelected.emit(item.key)\"\n          *ngFor=\"let item of menuItems\"\n          mat-menu-item>\n          <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img *ngIf=\"item.imgURL\" [src]=\"item?.imgURL\"/>\n            <span>{{ item.text }}</span>\n          </span>\n  </button>\n</mat-menu>\n",
                        styles: [".menu-button{min-width:64px;height:64px}button{outline:0}img{max-width:100%;height:16px;vertical-align:top;border:none;margin-right:16px}"]
                    }] }
        ];
        /** @nocollapse */
        MatMenuButtonComponent.ctorParameters = function () { return []; };
        MatMenuButtonComponent.propDecorators = {
            menuItems: [{ type: core.Input }],
            height: [{ type: core.Input }],
            onMenuItemSelected: [{ type: core.Output }]
        };
        return MatMenuButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatMenuButtonModule = /** @class */ (function () {
        function MatMenuButtonModule() {
        }
        MatMenuButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            menu.MatMenuModule,
                            flexLayout.FlexLayoutModule
                        ],
                        declarations: [MatMenuButtonComponent],
                        exports: [MatMenuButtonComponent]
                    },] }
        ];
        return MatMenuButtonModule;
    }());

    exports.ComponentsComponent = ComponentsComponent;
    exports.ComponentsModule = ComponentsModule;
    exports.ComponentsService = ComponentsService;
    exports.MatMenuButtonComponent = MatMenuButtonComponent;
    exports.MatMenuButtonModule = MatMenuButtonModule;
    exports.ɵa = MatNavigationComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-material-extensions-components.umd.js.map
