import { Component, Optional, Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatAlertDialog = /** @class */ (function () {
    function MatAlertDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatAlertDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Alert';
            this.icon = this.data.icon ? this.data.icon : 'warning';
            this.type = this.data.type ? this.data.type : 'warn';
            this.message = this.data.message ? this.data.message : 'Cancel';
            this.okTextButton = this.data.okTextButton ? this.data.okTextButton : 'Ok';
        }
    };
    MatAlertDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-alert-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-icon [color]=\"type\">{{icon}}</mat-icon>\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div class=\"subtitle\">\n    <p>{{message}}</p>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          matDialogClose\n          [color]=\"type\">\n    {{okTextButton}}\n  </button>\n</mat-dialog-actions>\n",
                    styles: [".material-icons{font-size:4rem}.mat-icon{height:4rem;width:4rem}.title{font-size:20px;margin-top:16px}.subtitle{margin:16px auto;max-width:300px;color:rgba(0,0,0,.54);font-size:15px;text-align:center}.subtitle p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0}"]
                }] }
    ];
    /** @nocollapse */
    MatAlertDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatAlertDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatAsyncDialog = /** @class */ (function () {
    function MatAsyncDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatAsyncDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    };
    MatAsyncDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-async-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatAsyncDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatAsyncDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatConfirmDialog = /** @class */ (function () {
    function MatConfirmDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatConfirmDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Confirm';
            this.confirmMessage = this.data.confirmMessage ? this.data.confirmMessage : 'Are you sure ?';
            this.confirmTextButton = this.data.confirmTextButton ? this.data.confirmTextButton : 'Confirm';
            this.cancelTextButton = this.data.cancelTextButton ? this.data.cancelTextButton : 'Cancel';
        }
    };
    MatConfirmDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-confirm-dialog',
                    template: "<h1 matDialogTitle>{{title}}</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n  <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">{{confirmTextButton}}</button>\n  <button mat-button (click)=\"dialogRef.close(false)\">{{cancelTextButton}}</button>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatConfirmDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatConfirmDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatInputDialog = /** @class */ (function () {
    function MatInputDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatInputDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Enter the data';
            this.icon = this.data.icon ? this.data.icon : 'edit';
            this.color = this.data.color ? this.data.color : 'primary';
            this.placeholder = this.data.placeholder ? this.data.placeholder : '';
            this.textButton = this.data.textButton ? this.data.textButton : 'Ok';
        }
    };
    MatInputDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-input-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #input [placeholder]=\"placeholder\">\n      <mat-icon matSuffix [color]=\"color\">{{icon}}</mat-icon>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(input.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatInputDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatInputDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatLoadingDialog = /** @class */ (function () {
    function MatLoadingDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatLoadingDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    };
    MatLoadingDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-loading-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatLoadingDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatLoadingDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatRadioDialog = /** @class */ (function () {
    function MatRadioDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatRadioDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Options';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
            this.textButton = this.data.textButton ? this.data.textButton : 'OK';
            this.options = this.data.options ? this.data.options : null;
        }
    };
    MatRadioDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-radio-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-radio-group #radioGroup>\n      <mat-radio-button *ngFor=\"let option of options\" name=\"more_options\"\n                        [value]=\"option.value\">\n        {{option.viewValue ? option.viewValue : option.value}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(radioGroup.selected.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}mat-radio-group{display:flex;flex-direction:column;margin:15px 0}mat-radio-button{margin:5px}"]
                }] }
    ];
    /** @nocollapse */
    MatRadioDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatRadioDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSelectDialog = /** @class */ (function () {
    function MatSelectDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatSelectDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Options';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
            this.textButton = this.data.textButton ? this.data.textButton : 'OK';
            this.options = this.data.options ? this.data.options : null;
        }
    };
    MatSelectDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-select-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field>\n      <mat-label>options</mat-label>\n      <mat-select #select>\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n          {{option.viewValue ? option.viewValue : option.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatSelectDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatSelectDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTimerDialog = /** @class */ (function () {
    function MatTimerDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatTimerDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    };
    MatTimerDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-timer-dialog',
                    template: "<p>\n  mat-timer-dialog works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatTimerDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatTimerDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var dialogs = [
    MatAlertDialog,
    MatAsyncDialog,
    MatConfirmDialog,
    MatInputDialog,
    MatLoadingDialog,
    MatRadioDialog,
    MatSelectDialog,
    MatTimerDialog,
];
var MatDialogsModule = /** @class */ (function () {
    function MatDialogsModule() {
    }
    MatDialogsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FlexLayoutModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSelectModule
                    ],
                    exports: __spread(dialogs, [MatDialogModule, FlexLayoutModule]),
                    entryComponents: __spread(dialogs),
                    declarations: __spread(dialogs)
                },] }
    ];
    return MatDialogsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatAlertDialog, MatAsyncDialog, MatConfirmDialog, MatDialogsModule, MatInputDialog, MatLoadingDialog, MatRadioDialog, MatSelectDialog, MatTimerDialog, dialogs };
//# sourceMappingURL=angular-material-extensions-dialogs.js.map
