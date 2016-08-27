"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_service_1 = require('../../services/common.service');
var ContactDetailComponent = (function () {
    function ContactDetailComponent(comm) {
        this.comm = comm;
        this.showClass = false;
    }
    ContactDetailComponent.prototype.onShowClassChange = function () {
    };
    ContactDetailComponent.prototype.gotoClass = function () {
        this.showClass = true;
    };
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Boolean)
    ], ContactDetailComponent.prototype, "showClass", void 0);
    ContactDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: 'app/components/contact/contact-detail.component.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map