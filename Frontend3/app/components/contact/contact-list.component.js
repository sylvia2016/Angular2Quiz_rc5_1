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
var ContactListComponent = (function () {
    function ContactListComponent(comm) {
        this.comm = comm;
    }
    ContactListComponent.prototype.getClass = function () {
        var _this = this;
        var ob = this.comm.getClasses();
        ob.then(function (data) {
            _this.classes = data;
            console.log(_this.classes);
            //if (value.length > 0) {
            //    this.currentClass = value[0];
            //    this.getContacts();
            //}
        });
    };
    //getContacts() {
    //    this.comm.getContacts(this.currentClass.ClassId)
    //        .subscribe((value: ContactModel[]) => {
    //            this.contacts = value;
    //        });
    //}
    //stringify(o: any): string {
    //    return JSON.stringify(o);
    //}
    //onShowEditChange() {
    //    this.getContacts();
    //}
    //onClassChange(arg: string) {
    //    console.log(arg);
    //    this.currentClass = JSON.parse(arg);
    //    this.getContacts();
    //}
    ContactListComponent.prototype.ngOnInit = function () {
        this.getClass();
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: 'app/components/contact/contact-list.component.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map