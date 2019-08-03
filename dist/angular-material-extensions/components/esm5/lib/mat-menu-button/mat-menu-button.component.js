/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * @record
 */
export function MatMenuButtonItem() { }
if (false) {
    /** @type {?} */
    MatMenuButtonItem.prototype.key;
    /** @type {?} */
    MatMenuButtonItem.prototype.text;
    /** @type {?|undefined} */
    MatMenuButtonItem.prototype.imgURL;
}
var MatMenuButtonComponent = /** @class */ (function () {
    function MatMenuButtonComponent() {
        this.menuItems = [];
        this.onMenuItemSelected = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'mat-menu-button',
                    template: "<button mat-button fxHide fxShow.gt-xs [matMenuTriggerFor]=\"menuButton\" class=\"menu-button\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img [src]=\"selectedMenuItem?.imgURL\" class=\"flag mr-8\"/>\n    <span class=\"iso text-uppercase\">{{ selectedMenuItem.text }}</span>\n  </div>\n</button>\n\n<mat-menu #menuButton=\"matMenu\" [overlapTrigger]=\"false\">\n  <button (click)=\"selectedMenuItem = item; onMenuItemSelected.emit(item.key)\"\n          *ngFor=\"let item of menuItems\"\n          mat-menu-item>\n          <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img *ngIf=\"item.imgURL\" [src]=\"item?.imgURL\"/>\n            <span>{{ item.text }}</span>\n          </span>\n  </button>\n</mat-menu>\n",
                    styles: [".menu-button{min-width:64px;height:64px}button{outline:0}img{max-width:100%;height:16px;vertical-align:top;border:none;margin-right:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatMenuButtonComponent.ctorParameters = function () { return []; };
    MatMenuButtonComponent.propDecorators = {
        menuItems: [{ type: Input }],
        height: [{ type: Input }],
        onMenuItemSelected: [{ type: Output }]
    };
    return MatMenuButtonComponent;
}());
export { MatMenuButtonComponent };
if (false) {
    /** @type {?} */
    MatMenuButtonComponent.prototype.menuItems;
    /** @type {?} */
    MatMenuButtonComponent.prototype.height;
    /** @type {?} */
    MatMenuButtonComponent.prototype.onMenuItemSelected;
    /** @type {?} */
    MatMenuButtonComponent.prototype.selectedMenuItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW1lbnUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtbWVudS1idXR0b24vbWF0LW1lbnUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUU3RSx1Q0FJQzs7O0lBSEMsZ0NBQVk7O0lBQ1osaUNBQWE7O0lBQ2IsbUNBQWdCOztBQUdsQjtJQWNFO1FBUFMsY0FBUyxHQUF3QixFQUFFLENBQUM7UUFHbkMsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFLaEYsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw4dkJBQStDOztpQkFFaEQ7Ozs7OzRCQUdFLEtBQUs7eUJBQ0wsS0FBSztxQ0FFTCxNQUFNOztJQWFULDZCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksc0JBQXNCOzs7SUFFakMsMkNBQTZDOztJQUM3Qyx3Q0FBd0I7O0lBRXhCLG9EQUFnRjs7SUFFaEYsa0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRNZW51QnV0dG9uSXRlbSB7XG4gIGtleTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGltZ1VSTD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LW1lbnUtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1tZW51LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdE1lbnVCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1lbnVJdGVtczogTWF0TWVudUJ1dHRvbkl0ZW1bXSA9IFtdO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgb25NZW51SXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHNlbGVjdGVkTWVudUl0ZW06IE1hdE1lbnVCdXR0b25JdGVtO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWVudUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zWzBdO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=