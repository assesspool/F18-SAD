(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-user-login/add-user-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/add-user-login/add-user-login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, label, p {\r\n  color: white;\r\n}\r\n\r\n#center {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#height {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-user-login/add-user-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-user-login/add-user-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"center\" >\r\n  <div id=\"height\">\r\n    <h3>Add User</h3>\r\n    <div [hidden]=\"submitted\">\r\n      <form #addUserForm=\"ngForm\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"firstName\">First Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Give User's FirstName\"\r\n                 required\r\n                 [(ngModel)]=\"user.firstName\" name=\"firstName\" #firstName=\"ngModel\">\r\n          <div [hidden]=\"firstName.valid || firstName.pristine\"\r\n               class=\"alert alert-danger\">\r\n            First Name is required\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastName\">Last Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Give User's LastName\"\r\n                 required\r\n                 [(ngModel)]=\"user.lastName\" name=\"lastName\" #lastName=\"ngModel\">\r\n          <div [hidden]=\"lastName.valid || lastName.pristine\"\r\n               class=\"alert alert-danger\">\r\n            Last Name is required\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"string\" (ngModelChange)=\"compareEmail($event)\" class=\"form-control\" id=\"email\"\r\n                 placeholder=\"Give User's Email\"\r\n                 required\r\n                 [(ngModel)]=\"user.email\" name=\"email\" #email=\"ngModel\">\r\n          <div [hidden]=\"email.valid || email.pristine\"\r\n               class=\"alert alert-danger\">\r\n            Email is required\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"emailExist == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n          Email already exists\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-group-sm\">\r\n          <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">Back</button>\r\n          <button type=\"button\" class=\"btn btn-dark\" (click)=\"addUser()\" [disabled]=\"!addUserForm.form.valid\">Add</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div [hidden]=\"!submitted\">\r\n      <p>Submitted Successfully! -> <span class=\"badge badge-light\">{{user.firstName}}  {{user.lastName}}</span></p>\r\n      <div class=\"btn-group btn-group-sm\">\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">Back</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack(); addUserForm.reset()\">Continue</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-user-login/add-user-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-user-login/add-user-login.component.ts ***!
  \************************************************************/
/*! exports provided: AddUserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserLoginComponent", function() { return AddUserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_user_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-log.service */ "./src/app/services/user-log.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddUserLoginComponent = /** @class */ (function () {
    function AddUserLoginComponent(userService, location, logData, comp, data) {
        this.userService = userService;
        this.location = location;
        this.logData = logData;
        this.comp = comp;
        this.data = data;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.submitted = false;
        this.emailExist = 1;
    }
    AddUserLoginComponent.prototype.ngOnInit = function () {
    };
    AddUserLoginComponent.prototype.newUser = function () {
        this.submitted = false;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    };
    AddUserLoginComponent.prototype.addUser = function () {
        this.save();
    };
    AddUserLoginComponent.prototype.goBack = function () {
        this.data.changeToggle(1);
    };
    //check if the Email already exists on create screen
    AddUserLoginComponent.prototype.compareEmail = function (event) {
        var _this = this;
        this.user.email = event;
        this.userService.compareEmail(this.user.email).subscribe(function (response) {
            _this.emailExist = response;
            console.log(_this.emailExist);
        });
    };
    AddUserLoginComponent.prototype.save = function () {
        var _this = this;
        if (this.emailExist == 2) {
            console.log('cannot continue');
        }
        else {
            this.user.userName = "[pending]";
            this.user.userPassword = "[pending]";
            this.user.userRole = "accountant";
            this.user.securityQ = "[pending]";
            this.user.securityA = "[pending]";
            this.user.active = 0;
            this.userService.addUser(this.user)
                .subscribe(function () {
                _this.logData.create(_this.comp.getUserName(), 'Created user ' + _this.user.firstName).subscribe();
                _this.submitted = true;
            });
        }
    };
    AddUserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user-login',
            template: __webpack_require__(/*! ./add-user-login.component.html */ "./src/app/add-user-login/add-user-login.component.html"),
            styles: [__webpack_require__(/*! ./add-user-login.component.css */ "./src/app/add-user-login/add-user-login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _services_user_log_service__WEBPACK_IMPORTED_MODULE_3__["UserLogService"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]])
    ], AddUserLoginComponent);
    return AddUserLoginComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, p {\r\n    color: white;\r\n}\r\ntd, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\n#center {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n#height {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n.add_user {\r\n  display: none;\r\n}\r\n#userTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 60px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 50%;\r\n}\r\n.modal-content2 {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 25%;\r\n}\r\n.rightContent{\r\n  width: 400px;\r\n  z-index: 0;\r\n  overflow-x: hidden;\r\n  float: left;\r\n}\r\n.leftContent{\r\n  width: 400px;\r\n  margin-top:86px;\r\n  margin-left: 450px;\r\n}\r\n.warning{\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Create user form-->\r\n<div id=\"new_user\" class=\"modal\">\r\n<div class=\"modal-content\">\r\n\r\n    <form #addUserForm=\"ngForm\" >\r\n      <div class=\"rightContent\">\r\n      <div class=\"form-group\">\r\n        <label for=\"userName\">User Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"userName\" (ngModelChange)=\"compareUserName($event)\" placeholder=\"User Name\" required [(ngModel)]=\"user.userName\"\r\n               name=\"userName\" >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"password\" (ngModelChange)=\"checkPassword($event)\" placeholder=\"Password\" required [(ngModel)]=\"user.userPassword\"\r\n               name=\"password\" >\r\n        <label for=\"password\" class=\"warning\">Password must be at least 8 characters long</label>\r\n        <label for=\"password\" class=\"warning\">Includes at least one of the following: #,$,%,&,*,+ </label>\r\n        <label for=\"password\" class=\"warning\">Includes at least one number</label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" required [(ngModel)]=\"user.firstName\"\r\n               name=\"firstName\" >\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">email</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"email\" (ngModelChange)=\"compareEmail($event)\" placeholder=\"email\" required [(ngModel)]=\"user.email\"\r\n               name=\"email\" >\r\n      </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"userRole\">Role: </label>\r\n          <select class=\"form-control\" required [(ngModel)]=\"user.userRole\" id=\"userRole\" name=\"roleType\" >\r\n            <option>accountant</option>\r\n            <option>manager</option>\r\n            <option>admin</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"securityQ\">Security Question: </label>\r\n          <select class=\"form-control\" required [(ngModel)]=\"user.securityQ\" id=\"securityQ\" name=\"SecurityQ\" >\r\n            <option>What is your favorite color?</option>\r\n            <option>Where did you go to high school?</option>\r\n            <option>What is your favorite movie?</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div *ngIf=\"usernameExist == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n          Username already exists\r\n        </div>\r\n\r\n        <div *ngIf=\"emailExist == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n          Email already exists\r\n        </div>\r\n\r\n        <div *ngIf=\"passwordError == 1\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n          Password is not acceptable\r\n        </div>\r\n\r\n        <button (click)=\"submit();\" id=\"submitBtn\" [disabled]=\"!addUserForm.form.valid\" >Submit</button>\r\n        <input type=\"reset\">\r\n        <button (click)=\"close(); addUserForm.reset()\" id=\"closeModalBtn\">Cancel</button>\r\n      </div>\r\n\r\n      <div class=\"leftContent\">\r\n        <div class=\"form-group\">\r\n          <label for=\"passwordAgain\">Re-enter Password</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"passwordAgain\" placeholder=\"Password\" required [(ngModel)]=\"user.userPassword\"\r\n                 name=\"password2\" >\r\n        </div>\r\n        <div class=\"form-group\" style=\"margin-top:112px;\">\r\n          <label for=\"lastName\">Last Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" required [(ngModel)]=\"user.lastName\"\r\n                 name=\"lastName\">\r\n        </div>\r\n\r\n        <div class=\"form-group\" style=\"margin-top:188px;\">\r\n          <label for=\"answer\">Answer</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"answer\" placeholder=\"Answer\" required [(ngModel)]=\"user.securityA\"\r\n                 name=\"password3\" >\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- Update User form-->\r\n<div id=\"updateUserModal\" class=\"modal\">\r\n   <div class=\"modal-content\">\r\n     <form #editUserForm=\"ngForm\">\r\n       <div class=\"rightContent\">\r\n\r\n       <div class=\"form-group\">\r\n         <label for=\"userNam2\">User Name</label>\r\n         <input type=\"text\" class=\"form-control\" id=\"userNam2\"  placeholder=\"username\" (ngModelChange)=\"compareUserNameUpdate($event);\" required [(ngModel)]=\"user2.userName\"\r\n                value=\"{{user2.userName}}\"  name=\"userName2\" >\r\n       </div>\r\n       <div class=\"form-group\">\r\n         <label for=\"password2\">Password</label>\r\n         <input type=\"text\" class=\"form-control\" id=\"password2\"  placeholder=\"Password\" (ngModelChange)=\"checkPasswordUpdate($event)\" required [(ngModel)]=\"user2.userPassword\"\r\n                value=\"{{user2.userPassword}}\"  name=\"password\" >\r\n         <label for=\"password\" class=\"warning\">Password must be at least 8 characters long</label>\r\n         <label for=\"password\" class=\"warning\">Includes at least one of the following: #,$,%,&,*,+ </label>\r\n         <label for=\"password\" class=\"warning\">Includes at least one number</label>\r\n       </div>\r\n         <div class=\"form-group\">\r\n           <label for=\"firstName2\">First Name</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"firstName2\" placeholder=\"First Name\" required [(ngModel)]=\"user2.firstName\"\r\n                  value=\"{{user2.firstName}}\" name=\"firstName\" >\r\n         </div>\r\n\r\n         <div class=\"form-group\">\r\n           <label for=\"email2\">email</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"email2\" (ngModelChange)=\"compareEmailUpdate($event)\" placeholder=\"email\" required [(ngModel)]=\"user2.email\"\r\n                  value=\"{{user2.email}}\"name=\"email\" >\r\n         </div>\r\n\r\n         <div class=\"form-group\">\r\n           <label for=\"userRole2\">Role: </label>\r\n           <select class=\"form-control\" required [(ngModel)]=\"user2.userRole\" id=\"userRole2\" value=\"{{user2.userRole}}\" name=\"roleType\" >\r\n             <option>accountant</option>\r\n             <option>manager</option>\r\n             <option>admin</option>\r\n           </select>\r\n         </div>\r\n\r\n         <div class=\"form-group\">\r\n           <label for=\"securityQ2\">Security Question: </label>\r\n           <select class=\"form-control\" required [(ngModel)]=\"user2.securityQ\" id=\"securityQ2\" value=\"{{user2.securityQ}}\" name=\"SecurityQ\" >\r\n             <option>What is your favorite color?</option>\r\n             <option>Where did you go to high school?</option>\r\n             <option>What is your favorite movie?</option>\r\n           </select>\r\n         </div>\r\n\r\n         <div class=\"form-group\">\r\n           <label for=\"securityQ2\">Active:</label>\r\n           <select class=\"activel\" required [(ngModel)]=\"userActive2\" id=\"active1\" value=\"{{userActive}}\" name=\"active\" >\r\n             <option>active</option>\r\n             <option>inactive</option>\r\n           </select>\r\n         </div>\r\n\r\n         <div *ngIf=\"usernameExist == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n           Username already exists\r\n         </div>\r\n\r\n         <div *ngIf=\"emailExist == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n           Email already exists\r\n         </div>\r\n\r\n         <div *ngIf=\"passwordError == 1\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n           Password is not acceptable\r\n         </div>\r\n         <button (click)=\"submitEdit();\" id=\"submitBtn5\" [disabled]=\"!editUserForm.form.valid\" >Submit</button>\r\n         <button (click)=\"resetUpdate()\" id=\"closeModalBtn3\">Reset</button>\r\n       <button (click)=\"close2();\" id=\"closeModalBtn2\">Cancel</button>\r\n       </div>\r\n\r\n       <div class=\"leftContent\">\r\n         <div class=\"form-group\">\r\n           <label for=\"passwordAgain2\">Re-enter Password</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"passwordAgain2\" placeholder=\"Password\" required [(ngModel)]=\"user2.userPassword\"\r\n                  value=\"{{user2.userPassword}}\" name=\"password2\" >\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-top:112px;\">\r\n           <label for=\"lastName2\">Last Name</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"lastName2\" placeholder=\"Last Name\" required [(ngModel)]=\"user2.lastName\"\r\n                  value=\"{{user2.lastName}}\" name=\"lastName\">\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-top:188px;\">\r\n           <label for=\"answer2\">Answer</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"answer2\" placeholder=\"Answer\" required [(ngModel)]=\"user2.securityA\"\r\n                  value=\"{{user2.securityA}}\" name=\"password3\" >\r\n         </div>\r\n       </div>\r\n     </form>\r\n   </div>\r\n</div>\r\n<!--Display User details-->\r\n<div id=\"viewUserData\" class=\"modal\">\r\n  <div class=\"modal-content2\">\r\n    <form #viewUserData=\"ngForm\">\r\n        <table id=\"display\">\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">User Name:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.userName}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Password:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.userPassword}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">First name:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.firstName}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Last name:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.lastName}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">email:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.email}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Role:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.userRole}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Security Question:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.securityQ}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Security answer:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.securityA}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Password expiration:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.passwordExpire | date: 'MM/dd/yyyy  HH:mm:ss'}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Updated last:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.updatedAt | date: 'MM/dd/yyyy  HH:mm:ss'}}</th>\r\n          </tr>\r\n          <tr style=\" background-color: white\">\r\n            <th style=\"color: black; border: none\">Created At:</th>\r\n            <th style=\"color: black; border: none\">{{userDisplay.createdAt | date: 'MM/dd/yyyy  HH:mm:ss'}}</th>\r\n          </tr>\r\n\r\n\r\n        </table>\r\n        <button (click)=\"close3(); \" id=\"closeModalBtn4\">Close</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- Display User list form-->\r\n<form class=\"form-inline\" style=\"left: 8px\">\r\n  <div style=\"position:  relative;left: 75%;  padding-top: 20px\">\r\n<div class=\"form-group\">\r\n  <input type=\"text\" class=\"form-control\" id=\"searchBar\"  style=\"width: 300px; left: 6px\" placeholder=\"Search\" (ngModelChange)=\"viewUsersSort(column,'ASC', columnSearch, $event)\" required [(ngModel)]=\"criteria\"\r\n           name=\"search\" >\r\n  </div>\r\n  </div>\r\n</form>\r\n\r\n<button class=\"btn btn-info btn-lg\" (click)=\"createUser()\" *ngIf=\"access == 0\">Create User</button>\r\n<div class=\"form-group\">\r\n\r\n  <table id=\"userTable\">\r\n    <tr>\r\n      <th (click)=\"viewUsersSort('userName','ASC',columnSearch,criteria); column='userName' \">User Name</th>\r\n      <th (click)=\"viewUsersSort('firstName','ASC',columnSearch,criteria); column='firstName'\">First Name</th>\r\n      <th (click)=\"viewUsersSort('lastName','ASC',columnSearch,criteria); column='lastName'\">Last Name</th>\r\n      <th (click)=\"viewUsersSort('userPassword','ASC',columnSearch,criteria); column='userPassword' \">Password</th>\r\n      <th (click)=\"viewUsersSort('email','ASC',columnSearch,criteria); column='email'\">Email</th>\r\n      <th (click)=\"viewUsersSort('userRole','ASC',columnSearch,criteria); column='userRole' \">User Role</th>\r\n      <th (click)=\"viewUsersSort('updatedAt','ASC',columnSearch,criteria); column='updatedAt'\">Updated at</th>\r\n      <th (click)=\"viewUsersSort('createdAt','ASC',columnSearch,criteria); column='createdAt'\">Created at</th>\r\n      <th (click)=\"viewUsersSort('active','ASC',columnSearch,criteria); column='active'\">Active</th>\r\n    </tr>\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{ user.userName}}</td>\r\n      <td>{{ user.firstName }}</td>\r\n      <td>{{ user.lastName }}</td>\r\n      <td>{{ user.userPassword}}</td>\r\n      <td>{{ user.email }}</td>\r\n      <td>{{ user.userRole }}</td>\r\n      <td>{{ user.updatedAt | date: 'MM/dd/yyyy  HH:mm:ss'}}</td>\r\n      <td>{{ user.createdAt | date: 'MM/dd/yyyy  HH:mm:ss'}}</td>\r\n      <td *ngIf=\"user.active == 0\">inactive</td>\r\n      <td *ngIf=\"user.active == 1\">active</td>\r\n      <button class=\"btn btn-primary\" (click)=\"getUserInfo(user.userId)\"  *ngIf=\"access == 0\">Edit</button>\r\n      <button class=\"btn btn-primary\" (click)=\"viewData(user.userId)\">More</button>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<!--\r\n<div id=\"editUser\">\r\n  <table>\r\n    <tr *ngFor=\"let edit of editUser\">\r\n      <td>{{ edit.userName }}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_user_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-log.service */ "./src/app/services/user-log.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router, location, logData, comp, data, userData) {
        this.router = router;
        this.location = location;
        this.logData = logData;
        this.comp = comp;
        this.data = data;
        this.userData = userData;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user2 = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userDisplay = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.users = [];
        this.editUser = [];
        this.active = [];
        this.usernameExist = 1;
        this.emailExist = 1;
        this.passwordAcceptable = 0;
        this.passwordError = 0;
        this.access = 1;
        this.blankSpace = " ";
        this.userInfo2 = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userActive = "sss";
        this.userActive2 = " ";
        //for search and sort
        this.column = 'userId';
        this.columnSearch = 'all';
        this.criteria = '';
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.viewUsersSort('userId', 'ASC', 'All', null);
        this.userAccess();
    };
    AddUserComponent.prototype.viewUsers = function () {
        var _this = this;
        this.userData.findAll().subscribe(function (user) {
            _this.users = user;
        });
    };
    AddUserComponent.prototype.viewUsersSort = function (column, direction, columnSearch, criteria) {
        var _this = this;
        this.userData.findAllSort(column, direction, columnSearch, criteria).subscribe(function (user) {
            _this.users = user;
            console.log("updated");
        });
    };
    //open create user screen
    AddUserComponent.prototype.createUser = function () {
        var modal = document.getElementById("new_user");
        modal.style.display = "block";
    };
    //close create user screen
    AddUserComponent.prototype.close = function () {
        var modal = document.getElementById("new_user");
        modal.style.display = "none";
        this.userForm.reset();
        // this.userInfo = null;
    };
    //close update screen
    AddUserComponent.prototype.close2 = function () {
        var editModal = document.getElementById("updateUserModal");
        editModal.style.display = "none";
        this.emailExist = 1;
        this.usernameExist = 1;
        this.passwordError = 0;
        this.passwordAcceptable = 1;
        this.resetUpdate();
    };
    AddUserComponent.prototype.close3 = function () {
        var modal = document.getElementById("viewUserData");
        modal.style.display = "none";
    };
    //check if the Username already exists on create screen
    AddUserComponent.prototype.compareUserName = function (event) {
        var _this = this;
        this.user.userName = event;
        this.userData.compareUsername(this.user.userName).subscribe(function (response) {
            console.log("button changed");
            _this.usernameExist = response;
            console.log(_this.usernameExist);
        });
    };
    //check if the Username already exists on update screen
    AddUserComponent.prototype.compareUserNameUpdate = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user2.userName = event;
                        return [4 /*yield*/, this.getOriginalUserID(this.user2.userId)];
                    case 1:
                        _a.sent();
                        if (this.user2.userName == this.userInfo2.userName) {
                            this.usernameExist = 1;
                            console.log("worked");
                        }
                        else {
                            this.userData.compareUsername(this.user2.userName).subscribe(function (response) {
                                console.log("button changed");
                                _this.usernameExist = response;
                                console.log(_this.usernameExist);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //check if the Email already exists on create screen
    AddUserComponent.prototype.compareEmail = function (event) {
        var _this = this;
        this.user.email = event;
        this.userData.compareEmail(this.user.email).subscribe(function (response) {
            _this.emailExist = response;
            console.log(_this.emailExist);
        });
    };
    //check if the Email already exists on update screen
    AddUserComponent.prototype.compareEmailUpdate = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user2.email = event;
                        return [4 /*yield*/, this.getOriginalUserID(this.user2.userId)];
                    case 1:
                        _a.sent();
                        if (this.user2.email == this.userInfo2.email) {
                            this.emailExist = 1;
                        }
                        else {
                            this.userData.compareEmail(this.user2.email).subscribe(function (response) {
                                _this.emailExist = response;
                                console.log(_this.userInfo2.email);
                                console.log(response);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //submit new user
    AddUserComponent.prototype.submit = function () {
        var _this = this;
        if (this.passwordAcceptable != 1) {
            this.passwordError = 1;
        }
        else if (this.usernameExist !== 1 || this.emailExist !== 1) {
            console.log("cannot continue");
        }
        else {
            this.user.lastUpdatePassword = new Date();
            this.user.passwordExpire = new Date();
            this.user.passwordExpire.setDate(this.user.lastUpdatePassword.getDate() + 28);
            this.userData.addUser(this.user)
                .subscribe(function () {
                _this.viewUsersSort(_this.column, 'ASC', _this.columnSearch, _this.criteria);
                _this.close();
                _this.userForm.reset();
            });
        }
    };
    //submit an edit
    AddUserComponent.prototype.submitEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.passwordAcceptable !== 1)) return [3 /*break*/, 1];
                        console.log("no1");
                        this.passwordError = 1;
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.usernameExist !== 1 || this.emailExist !== 1)) return [3 /*break*/, 2];
                        console.log("no");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getOriginalUserID(this.user2.userId)];
                    case 3:
                        _a.sent();
                        //if password is reset, expire date is reset
                        console.log('Hello');
                        if (this.user2.userPassword !== this.userInfo2.userPassword) {
                            this.user2.lastUpdatePassword = new Date();
                            this.user2.passwordExpire = new Date();
                            this.user2.passwordExpire.setDate(this.user2.lastUpdatePassword.getDate() + 28);
                            console.log('password expiration has been reset');
                        }
                        if (this.userActive2 === "active") {
                            this.user2.active = 1;
                        }
                        else {
                            this.user2.active = 0;
                        }
                        this.user2.userId = this.userInfo2.userId;
                        this.userData.updateUser(this.user2)
                            .subscribe(function () {
                            _this.viewUsersSort(_this.column, 'ASC', _this.columnSearch, _this.criteria);
                            _this.close2();
                            _this.passwordError = 0;
                            _this.passwordAcceptable = 1;
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //check if password is appropriate
    AddUserComponent.prototype.checkPassword = function (event) {
        this.user.userPassword = event;
        try {
            var length_1 = this.user.userPassword.length;
            var result = this.user.userPassword.match(/[0-9]+/g);
            var result2 = this.user.userPassword.match(/[%, #, $, *, &,+]+/g);
            console.log(result);
            if (this.user.userPassword.length >= 8 && result != null && result2 != null) {
                console.log('password is good');
                this.passwordAcceptable = 1;
                this.passwordError = 0;
            }
            else {
                console.log('password is weak');
                console.log(length_1);
                this.passwordAcceptable = 0;
                this.passwordError = 0;
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    //check if password is appropriate for update
    AddUserComponent.prototype.checkPasswordUpdate = function (event) {
        this.user2.userPassword = event;
        try {
            var length_2 = this.user2.userPassword.length;
            var result = this.user2.userPassword.match(/[0-9]+/g);
            var result2 = this.user2.userPassword.match(/[%, #, $, *, &,+]+/g);
            console.log(result);
            if (this.user2.userPassword.length >= 8 && result != null && result2 != null) {
                console.log('password is good');
                this.passwordAcceptable = 1;
                this.passwordError = 0;
            }
            else {
                console.log('password is weak');
                console.log(length_2);
                this.passwordAcceptable = 0;
                this.passwordError = 0;
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    AddUserComponent.prototype.getUser = function (id) {
        var _this = this;
        // let id = document.getElementById("userId").;
        var userId = +id;
        this.userData.getUser(userId).subscribe(function (getEditUser) {
            _this.editUser = getEditUser;
            document.getElementById("editUser").hidden = false; //Unhide table after onLog click
            document.getElementById("showUsersTable").hidden = true;
            _this.router.navigate(['user/' + userId]);
        });
    };
    //type of user using the page
    AddUserComponent.prototype.userAccess = function () {
        if (this.comp.getRole() === 'admin') {
            this.access = 0;
        }
        else {
            this.access = 1;
        }
    };
    //reset update page
    AddUserComponent.prototype.resetUpdate = function () {
        var _this = this;
        this.userData.getUser(this.user2.userId)
            .subscribe(function (user) {
            _this.user2 = user;
            _this.userInfo2 = user;
            console.log(_this.userInfo2.userName);
            console.log(_this.user2.userName);
            if (_this.user2.active == 0) {
                _this.userActive = "inactive";
            }
            else {
                _this.userActive = "active";
            }
        });
    };
    //retreive the id of the update user unchanged
    //fixed asyncronous calls
    AddUserComponent.prototype.getOriginalUserID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userID = id;
                        return [4 /*yield*/, this.userData.getUser(this.userID)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        this.userInfo2 = response;
                        console.log('userworked');
                        console.log(this.userInfo2.userName);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserComponent.prototype.viewData = function (id) {
        var _this = this;
        this.userID = id;
        this.userData.getUser(this.userID)
            .subscribe(function (user) {
            _this.userDisplay = user;
            var modal = document.getElementById("viewUserData");
            modal.style.display = 'block';
        });
    };
    //Get account info to edit and load modal
    AddUserComponent.prototype.getUserInfo = function (id) {
        var _this = this;
        this.userID = id;
        this.userData.getUser(this.userID)
            .subscribe(function (user) {
            _this.user2 = user;
            _this.userInfo2 = user;
            _this.passwordError = 0;
            _this.passwordAcceptable = 1;
            console.log(_this.userInfo2.userName);
            console.log(_this.user2.userName);
            if (_this.user2.active == 0) {
                _this.userActive = "inactive";
            }
            else {
                _this.userActive = "active";
            }
            var modal = document.getElementById('updateUserModal');
            modal.style.display = 'block';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addUserForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"])
    ], AddUserComponent.prototype, "userForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editUserForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"])
    ], AddUserComponent.prototype, "editForm", void 0);
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _services_user_log_service__WEBPACK_IMPORTED_MODULE_3__["UserLogService"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-page/user-page.component */ "./src/app/user-page/user-page.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-home/login-home.component */ "./src/app/login-home/login-home.component.ts");
/* harmony import */ var _chart_of_accounts_chart_of_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chart-of-accounts/chart-of-accounts.component */ "./src/app/chart-of-accounts/chart-of-accounts.component.ts");
/* harmony import */ var _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home-screen/home-screen.component */ "./src/app/home-screen/home-screen.component.ts");
/* harmony import */ var _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-log/user-log.component */ "./src/app/user-log/user-log.component.ts");
/* harmony import */ var _journalize_journalize_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../journalize/journalize.component */ "./src/app/journalize/journalize.component.ts");
/* harmony import */ var _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../general-ledger/general-ledger.component */ "./src/app/general-ledger/general-ledger.component.ts");
/* harmony import */ var _individual_ledger_individual_ledger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../individual-ledger/individual-ledger.component */ "./src/app/individual-ledger/individual-ledger.component.ts");
/* harmony import */ var _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../trial-balance/trial-balance.component */ "./src/app/trial-balance/trial-balance.component.ts");
/* harmony import */ var _individual_journal_individual_journal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../individual-journal/individual-journal.component */ "./src/app/individual-journal/individual-journal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        redirectTo: '/loginHome',
        pathMatch: 'full'
    },
    {
        path: 'loginHome',
        component: _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_6__["LoginHomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'UserPage',
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_8__["HomeScreenComponent"]
            },
            {
                path: 'userList',
                component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"]
            },
            {
                path: 'chartOfAccounts',
                component: _chart_of_accounts_chart_of_accounts_component__WEBPACK_IMPORTED_MODULE_7__["ChartOfAccountsComponent"]
            },
            {
                path: 'userLogs',
                component: _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_9__["UserLogComponent"]
            },
            {
                path: 'journal',
                component: _journalize_journalize_component__WEBPACK_IMPORTED_MODULE_10__["JournalizeComponent"]
            },
            {
                path: 'generalLedger',
                component: _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_11__["GeneralLedgerComponent"]
            },
            {
                path: 'ledger',
                component: _individual_ledger_individual_ledger_component__WEBPACK_IMPORTED_MODULE_12__["IndividualLedgerComponent"]
            },
            {
                path: 'ledger/:term',
                component: _individual_ledger_individual_ledger_component__WEBPACK_IMPORTED_MODULE_12__["IndividualLedgerComponent"]
            },
            {
                path: 'journal_info',
                component: _individual_journal_individual_journal_component__WEBPACK_IMPORTED_MODULE_14__["IndividualJournalComponent"]
            },
            {
                path: 'journal_info/:term',
                component: _individual_journal_individual_journal_component__WEBPACK_IMPORTED_MODULE_14__["IndividualJournalComponent"]
            },
            {
                path: 'trial-balance',
                component: _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_13__["TrialBalanceComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_6__["LoginHomeComponent"],
    _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"],
    _chart_of_accounts_chart_of_accounts_component__WEBPACK_IMPORTED_MODULE_7__["ChartOfAccountsComponent"],
    _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"],
    _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_8__["HomeScreenComponent"],
    _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_9__["UserLogComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.topbar{\r\n  width: 17%;\r\n  margin: 0 auto;\r\n\r\n}\r\ndiv.center{\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: perspective(1px) translateY(-70%);\r\n          transform: perspective(1px) translateY(-70%);\r\n}\r\ndiv.image{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_cookieService, localSt, sessionSt, data) {
        this._cookieService = _cookieService;
        this.localSt = localSt;
        this.sessionSt = sessionSt;
        this.data = data;
        this.title = 'Welcome to Sarif Financial';
        this.access = 1;
        this.indicator = '';
    }
    AppComponent.prototype.setCookies = function () {
        this._cookieService.put('test', 'testing cookie');
    };
    AppComponent.prototype.getCookie = function () {
        alert(this._cookieService.get('test'));
    };
    AppComponent.prototype.delCookies = function () {
        this._cookieService.remove('test');
    };
    AppComponent.prototype.setSession = function (id, userName, userRole, firstName, lastName) {
        this.sessionSt.store('userName', userName);
        this.sessionSt.store('id', id);
        this.sessionSt.store('userRole', userRole);
        this.sessionSt.store('firstName', firstName);
        this.sessionSt.store('lastName', lastName);
    };
    AppComponent.prototype.getSession = function () {
        alert(this.sessionSt.retrieve('logged-in'));
    };
    AppComponent.prototype.getUserName = function () {
        return this.sessionSt.retrieve('userName');
    };
    AppComponent.prototype.getRole = function () {
        return this.sessionSt.retrieve('userRole');
    };
    AppComponent.prototype.getFirstName = function () {
        return this.sessionSt.retrieve('firstName');
    };
    AppComponent.prototype.delSession = function () {
        this.sessionSt.clear('userName');
        this.sessionSt.clear('id');
        this.sessionSt.clear('userRole');
    };
    AppComponent.prototype.findAccount = function (found) {
        this.sessionSt.store('accountName', found);
    };
    AppComponent.prototype.getAccount = function () {
        return this.sessionSt.retrieve('accountName');
    };
    AppComponent.prototype.delAccount = function () {
        this.sessionSt.clear('accountName');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user-page/user-page.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-home/login-home.component */ "./src/app/login-home/login-home.component.ts");
/* harmony import */ var _chart_of_accounts_chart_of_accounts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart-of-accounts/chart-of-accounts.component */ "./src/app/chart-of-accounts/chart-of-accounts.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-log/user-log.component */ "./src/app/user-log/user-log.component.ts");
/* harmony import */ var _add_user_login_add_user_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-user-login/add-user-login.component */ "./src/app/add-user-login/add-user-login.component.ts");
/* harmony import */ var _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-screen/home-screen.component */ "./src/app/home-screen/home-screen.component.ts");
/* harmony import */ var _journalize_journalize_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./journalize/journalize.component */ "./src/app/journalize/journalize.component.ts");
/* harmony import */ var _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./general-ledger/general-ledger.component */ "./src/app/general-ledger/general-ledger.component.ts");
/* harmony import */ var _individual_ledger_individual_ledger_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./individual-ledger/individual-ledger.component */ "./src/app/individual-ledger/individual-ledger.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trial-balance/trial-balance.component */ "./src/app/trial-balance/trial-balance.component.ts");
/* harmony import */ var _individual_journal_individual_journal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./individual-journal/individual-journal.component */ "./src/app/individual-journal/individual-journal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__["UserPageComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__["AddUserComponent"],
                _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_12__["LoginHomeComponent"],
                _chart_of_accounts_chart_of_accounts_component__WEBPACK_IMPORTED_MODULE_13__["ChartOfAccountsComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"],
                _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_15__["UserLogComponent"],
                _add_user_login_add_user_login_component__WEBPACK_IMPORTED_MODULE_16__["AddUserLoginComponent"],
                _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_17__["HomeScreenComponent"],
                _journalize_journalize_component__WEBPACK_IMPORTED_MODULE_18__["JournalizeComponent"],
                _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_19__["GeneralLedgerComponent"],
                _individual_ledger_individual_ledger_component__WEBPACK_IMPORTED_MODULE_20__["IndividualLedgerComponent"],
                _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_22__["TrialBalanceComponent"],
                _individual_journal_individual_journal_component__WEBPACK_IMPORTED_MODULE_23__["IndividualJournalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["Ng2Webstorage"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_21__["TextMaskModule"]
            ],
            providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart-of-accounts.ts":
/*!**************************************!*\
  !*** ./src/app/chart-of-accounts.ts ***!
  \**************************************/
/*! exports provided: CoA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoA", function() { return CoA; });
var CoA = /** @class */ (function () {
    function CoA() {
    }
    return CoA;
}());



/***/ }),

/***/ "./src/app/chart-of-accounts/chart-of-accounts.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/chart-of-accounts/chart-of-accounts.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\n\r\ntable, h3, h2, td {\r\n    color: white;\r\n}\r\n\r\n#accountTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#center {\r\n    position: relative;\r\n    width: 14%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n#height {\r\n    margin-top:30px;\r\n    width: 250px\r\n  }\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n/* The switch - the box around the slider */\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n.switch input {display:none;}\r\n\r\n/* The slider */\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.createHeader {\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/chart-of-accounts/chart-of-accounts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/chart-of-accounts/chart-of-accounts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"createAccountModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <form #addAccountForm=\"ngForm\">\r\n\r\n      <!-- Modal for account creation -->\r\n      <div class=\"form-group\">\r\n        <label for=\"accountName\">Account Name</label><br>\r\n        <input type=\"text\" class=\"form-control\" id=\"accountName\" style=\"text-transform: capitalize\"\r\n                placeholder=\"Account Name\" required [(ngModel)]=\"CoA.accountName\"\r\n          name=\"accountName\" #accountNam=\"ngModel\">\r\n      </div>\r\n      <div [hidden]=\"accountNam.valid || accountNam.pristine\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Account Name is required\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"accountNumber\">Account Number</label><br>\r\n        <input type=\"text\" class=\"form-control\" id=\"accountNumber\" placeholder=\"Account Number\" required [(ngModel)]=\"CoA.accountNumber\"\r\n          name=\"accountNumber\" #accountNumbe=\"ngModel\">\r\n      </div>\r\n      <div [hidden]=\"accountNumbe.valid || accountNumbe.pristine\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Account Number is required\r\n      </div>\r\n      <div *ngIf=\"isNegativeNumber(CoA.accountNumber)\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Account Number must be greater than 0\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"accountType\">Account Type</label><br>\r\n        <select required [(ngModel)]=\"CoA.accountType\" name=\"accountType\" #accountType=\"ngModel\" >\r\n          <option>Assets</option>\r\n          <option>Revenue</option>\r\n          <option>Expenses</option>\r\n          <option>Liability</option>\r\n          <option>Equity</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"accountSubType\">Account Subtype</label><br>\r\n        <select required [(ngModel)]=\"CoA.accountSubType\" name=\"accountSubType\" #accountSubType=\"ngModel\">\r\n          <option>Current Assets</option>\r\n          <option>Property, Plant, and Equipment</option>\r\n          <option>Current Liabilities</option>\r\n          <option>Long-term Liabilities</option>\r\n          <option>Stocholders' Equity</option>\r\n          <option>Operating Revenues</option>\r\n          <option>Cost of Goods Sold</option>\r\n          <option>Other</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"originalBalance\">Original Balance</label><br>\r\n        <input type=\"text\" class=\"form-control\" id=\"originalBalance\" [textMask]=\"{mask: currencyMask}\" placeholder=\"Account Balance\" required [(ngModel)]=\"CoA.originalBalance\"\r\n          name=\"originalBalance\" #balance=\"ngModel\">\r\n      </div>\r\n      <div [hidden]=\"balance.valid || balance.pristine\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Account Balance is required\r\n      </div> \r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"active\">Active</label>\r\n        <select required [(ngModel)]=\"CoA.active\" name=\"active\" #activeInactive=\"ngModel\">\r\n          <option>Active</option>\r\n          <option>Inactive</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"comment\">Comments</label><br>\r\n        <input type=\"text\" class=\"form-control\" id=\"comment\" placeholder=\"Account Description\" required [(ngModel)]=\"CoA.comment\"\r\n          name=\"comment\" #description=\"ngModel\" required>\r\n      </div>\r\n      <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Account Description is required\r\n      </div>\r\n\r\n      <div *ngIf=\"numberHasDecimal==2\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Balance must be in decimal format\r\n      </div>\r\n\r\n\r\n      <button (click)=\"submit()\" id=\"submitBtn\" [disabled]=\"!addAccountForm.form.valid\">Submit</button>\r\n      <input type=\"reset\">\r\n      <button (click)=\"close()\" id=\"closeModalBtn4\">Cancel</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal for account update -->\r\n<div id=\"editAccountModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <form #editAccountForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"accountName\">Account Name</label><br>\r\n        <input type=\"text\" class=\"form-control\" id=\"accountName\" style=\"text-transform: capitalize\"\r\n               (ngModelChange)=\"compareAccountNameUpdate($event)\" value=\"{{ accountData.accountName}}\" required [(ngModel)]=\"editCoA.accountName\"\r\n          name=\"accountName\" #accountName=\"ngModel\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"accountNumber\">Account Number</label><br>\r\n        <input type=\"text\" [textMask]=\"{mask: currencyMask}\" class=\"form-control\" id=\"accountNumber\"\r\n               (ngModelChange)=\"compareAccountNumberUpdate($event)\" value=\"{{ accountData.accountNumber }}\" required\r\n          [(ngModel)]=\"editCoA.accountNumber\" name=\"accountNumber\" #accountNumber=\"ngModel\">\r\n      </div>\r\n      <div *ngIf=\"isNegativeNumber(editCoA.accountNumber)\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Account Number must be greater than 0\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"accountType\">Account Type: {{ accountData.accountType}}</label><br>\r\n        <select required [(ngModel)]=\"editCoA.accountType\" name=\"accountType\" #accountType=\"ngModel\">\r\n          <option>Assets</option>\r\n          <option>Revenue</option>\r\n          <option>Expenses</option>\r\n          <option>Liability</option>\r\n          <option>Equity</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"accountSubType\">Account Subtype: {{ accountData.accountSubType}}</label><br>\r\n        <select required [(ngModel)]=\"editCoA.accountSubType\" value=\"{{accountData.accountSubType}}\" name=\"accountSubType\" #accountSubType=\"ngModel\">\r\n          <option>Current Assets</option>\r\n          <option>Property, Plant, and Equipment</option>\r\n          <option>Current Liabilities</option>\r\n          <option>Long-term Liabilities</option>\r\n          <option>Stocholders' Equity</option>\r\n          <option>Operating Revenues</option>\r\n          <option>Cost of Goods Sold</option>\r\n          <option>Other</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"originalBalance\">Original Balance</label><br>\r\n        <input type=\"text\" [textMask]=\"{mask: currencyMask}\" class=\"form-control\" id=\"originalBalance\"  value=\"{{ accountData.originalBalance }}\" required\r\n          [(ngModel)]=\"editCoA.originalBalance\" name=\"originalBalance\" #originalBalance=\"ngModel\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"active\">Active: {{ accountData.active}}</label><br>\r\n        <select required [(ngModel)]=\"editCoA.active\" name=\"active\" #active=\"ngModel\">\r\n          <option>Active</option>\r\n          <option>Inactive</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"comment\">Comments</label><br>\r\n        <input type=\"text\" class=\"form-control\" id=\"comment\" value=\"{{ accountData.comment }}\" required [(ngModel)]=\"editCoA.comment\"\r\n          name=\"comment\" #comment=\"ngModel\">\r\n      </div>\r\n\r\n      <div *ngIf=\"accountNameExist== 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n        Account Name exists\r\n      </div>\r\n      <div *ngIf=\"accountNumberExist == 3\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n        Account Number input must be an integer\r\n      </div>\r\n      <div *ngIf=\"accountNumberExist == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n        Account Number exists\r\n      </div>\r\n      <div *ngIf=\"numberHasDecimal==2\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Balance must be in decimal format\r\n      </div>\r\n\r\n      <button (click)=\"submitEdit()\" id=\"submitEditBtn\">Submit</button>\r\n      <button (click)=\"resetUpdate()\" id=\"closeModalBtn3\">Reset</button>\r\n      <button (click)=\"close2()\" id=\"closeModalBtn\">Cancel</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!--search bar -->\r\n<form class=\"form-inline\" style=\"left: 8px\">\r\n  <div style=\"position:  relative;left: 75%;  padding-top: 20px\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" id=\"searchBar\"  style=\"width: 300px; left: 6px\" placeholder=\"Search\" (ngModelChange)=\"viewAccountsSort(column,'ASC', columnSearch, $event)\" required [(ngModel)]=\"criteria\"\r\n             name=\"search\" >\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<button class=\"btn btn-info btn-lg\" (click)=\"createAccount()\" id='createAccountBtn' *ngIf=\"access == 1\">Create Account</button>\r\n\r\n<div class=\"form-group\">\r\n  <table id=\"accountTable\">\r\n    <tr>\r\n      <th (click)=\"viewAccountsSort('accountNumber','ASC',columnSearch,criteria)\">Account Number</th>\r\n      <th (click)=\"viewAccountsSort('accountName','ASC',columnSearch,criteria)\">Account Name</th>\r\n      <th (click)=\"viewAccountsSort('accountType','ASC',columnSearch,criteria)\">Account Type</th>\r\n      <th (click)=\"viewAccountsSort('accountSubType','ASC',columnSearch,criteria)\">Account Subtype</th>\r\n      <th (click)=\"viewAccountsSort('normalSide','ASC',columnSearch,criteria)\">Normal Side</th>\r\n      <th (click)=\"viewAccountsSort('originalBalance','ASC',columnSearch,criteria)\">Original Balance</th>\r\n      <th (click)=\"viewAccountsSort('currentBalance','ASC',columnSearch,criteria)\">Current Balance</th>\r\n      <th (click)=\"viewAccountsSort('comment','ASC',columnSearch,criteria)\">Account Description</th>\r\n      <th (click)=\"viewAccountsSort('active','ASC',columnSearch,criteria)\">Active</th>\r\n      <th (click)=\"viewAccountsSort('createdBy','ASC',columnSearch,criteria)\">Created By</th>\r\n    </tr>\r\n    <tr *ngFor=\"let account of accounts\">\r\n      <td>{{ account.accountNumber }}</td>\r\n      <td>{{ account.accountName }}</td>\r\n      <td>{{ account.accountType }}</td>\r\n      <td>{{ account.accountSubType }}</td>\r\n      <td>{{ account.normalSide }}</td>\r\n      <td style=\"text-align: right;\">{{ account.originalBalance | number : '1.2-2'}}</td>\r\n      <td style=\"text-align: right;\">{{ account.currentBalance | number : '1.2-2'}}</td>\r\n      <td>{{ account.comment }}</td>\r\n      <td>{{ account.active }}</td>\r\n      <td>{{ account.createdBy }}</td>\r\n      <button class=\"btn btn-primary\" (click)=\"getAccount(account.caId)\" *ngIf=\"access == 1\">Edit</button>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chart-of-accounts/chart-of-accounts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chart-of-accounts/chart-of-accounts.component.ts ***!
  \******************************************************************/
/*! exports provided: ChartOfAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartOfAccountsComponent", function() { return ChartOfAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_of_accounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart-of-accounts */ "./src/app/chart-of-accounts.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_coa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/coa.service */ "./src/app/services/coa.service.ts");
/* harmony import */ var _services_user_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-log.service */ "./src/app/services/user-log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ChartOfAccountsComponent = /** @class */ (function () {
    function ChartOfAccountsComponent(coaService, logData, comp) {
        this.coaService = coaService;
        this.logData = logData;
        this.comp = comp;
        this.CoA = new _chart_of_accounts__WEBPACK_IMPORTED_MODULE_1__["CoA"]();
        this.editCoA = new _chart_of_accounts__WEBPACK_IMPORTED_MODULE_1__["CoA"]();
        this.accounts = [];
        this.accountData = new _chart_of_accounts__WEBPACK_IMPORTED_MODULE_1__["CoA"]();
        this.temp = [];
        //input data for search and sort
        this.column = 'caId'; //sort column
        this.columnSearch = 'all'; //column that will be searched
        this.criteria = ''; //search query
        this.accountCheck = new _chart_of_accounts__WEBPACK_IMPORTED_MODULE_1__["CoA"]();
        //variables to indicate conditions are met
        this.accountNameExist = 1;
        this.accountNumberExist = 1;
        this.numberHasDecimal = 1;
        //set user access
        this.access = 0;
        //currencyMask
        /////EDITED 10/31 BECAUSE THE MASK WAS TOO SPOOKY
        this.currencyMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_6___default()({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: false,
            //thousandsSeparatorSymbol: ',',
            allowDecimal: true,
            decimalSymbol: '.',
            decimalLimit: 2,
            integerLimit: null,
            requireDecimal: false,
            precision: 2,
            allowNegative: false,
            allowLeadingZeroes: false
        });
    }
    ChartOfAccountsComponent.prototype.ngOnInit = function () {
        this.onOpened();
        this.viewAccountsSort('caId', 'ASC', 'All', null);
        //this.viewAccounts();
        //Closes modal when user clicks outside of modal
        window.onclick = function (event) {
            var createAccountModal = document.getElementById("createAccountModal");
            if (event.target == createAccountModal) {
                createAccountModal.style.display = "none";
            }
            var editAccountModal = document.getElementById("editAccountModal");
            if (event.target == editAccountModal) {
                editAccountModal.style.display = "none";
            }
        };
    };
    ChartOfAccountsComponent.prototype.viewAccounts = function () {
        var _this = this;
        this.coaService.findAll().subscribe(function (account) {
            _this.accounts = account;
        });
    };
    ChartOfAccountsComponent.prototype.viewAccountsSort = function (column, direction, columnSearch, criteria) {
        var _this = this;
        this.coaService.findAllSort(column, direction, columnSearch, criteria).subscribe(function (account) {
            _this.accounts = account;
        });
    };
    //sets user access
    ChartOfAccountsComponent.prototype.onOpened = function () {
        if (this.comp.getRole() === 'admin') {
            this.access = 1;
        }
        else if (this.comp.getRole() === 'manager') {
            this.access = 2;
        }
        else {
            this.access = 3;
        }
    };
    //Opens modal
    ChartOfAccountsComponent.prototype.createAccount = function () {
        this.numberHasDecimal = 1;
        var modal = document.getElementById("createAccountModal");
        modal.style.display = "block";
    };
    ChartOfAccountsComponent.prototype.submit = function () {
        var _this = this;
        this.CoA.createdBy = this.comp.getUserName();
        //Check to see if account number is a number
        if (isNaN(this.CoA.accountNumber)) {
            return window.alert("Enter a number for account number");
        }
        ;
        //Check to see if account balance is a number
        if (isNaN(this.CoA.originalBalance)) {
            return window.alert("Enter a number for the balance");
        }
        ;
        //Set asset and revenue account types to normal side debit
        if (this.CoA.accountType == "Assets" || this.CoA.accountType == "Expenses") {
            this.CoA.normalSide = "Debit";
        }
        else {
            this.CoA.normalSide = "Credit";
        }
        //current balance may be set to 0 but this is not confirmed
        //Set the current balance to 0
        this.CoA.currentBalance = 0;
        this.editCoA = this.CoA;
        //Check to see if another account exists with same number or name
        if (this.numberHasDecimal == 2) {
            console.log('cannot continue');
        }
        else {
            this.coaService.findAll().subscribe(function (account) {
                _this.temp = account;
                for (var i = 0; i < _this.temp.length; i++) {
                    //Check for account name
                    if (_this.temp[i].accountName == _this.CoA.accountName) {
                        return window.alert("Account with same account name found. Enter different account name.");
                    }
                    //Check for account number
                    if (_this.temp[i].accountNumber == _this.CoA.accountNumber) {
                        return window.alert("Account with the same account number found. Enter a different account number.");
                    }
                }
                //If account name and number not found, create the account
                _this.CoA.accountName = _this.CoA.accountName.charAt(0).toLocaleUpperCase() + _this.CoA.accountName.substr(1);
                _this.coaService.addAccount(_this.CoA)
                    .subscribe(function () {
                    _this.logData.create(_this.comp.getUserName(), _this.CoA.createdBy + 'created account ' + _this.CoA.accountName).subscribe();
                    //Close modal
                    var modal = document.getElementById("createAccountModal");
                    modal.style.display = "none";
                    _this.accountForm.reset();
                    _this.viewAccountsSort(_this.column, 'ASC', _this.columnSearch, _this.criteria);
                });
            });
        }
    };
    //Closes modal after clicking on cancel in modal
    ChartOfAccountsComponent.prototype.close = function () {
        var modal = document.getElementById("createAccountModal");
        modal.style.display = "none";
        this.accountForm.reset();
    };
    ChartOfAccountsComponent.prototype.close2 = function () {
        var editModal = document.getElementById("editAccountModal");
        editModal.style.display = "none";
        this.editForm.reset();
    };
    //Get account info to edit and load modal
    ChartOfAccountsComponent.prototype.getAccount = function (id) {
        var _this = this;
        this.numberHasDecimal = 1;
        this.accountId = +id;
        this.coaService.getAccount(this.accountId)
            .subscribe(function (account) {
            _this.accountData = account;
            _this.editCoA = account;
        });
        var modal = document.getElementById("editAccountModal");
        modal.style.display = "block";
    };
    ChartOfAccountsComponent.prototype.submitEdit = function () {
        var _this = this;
        if ((this.editCoA.accountNumber != null) && isNaN(this.editCoA.accountNumber)) {
            return window.alert("Enter a number for account number");
        }
        ;
        if ((this.editCoA.originalBalance != null) && isNaN(this.editCoA.originalBalance)) {
            return window.alert("Enter a number for the balance");
        }
        //Set the account Id correctly to chosen account
        this.editCoA.caId = this.accountId;
        //Set asset and revenue account types to normal side debit
        if (this.editCoA.accountType == "Assets" || this.editCoA.accountType == "Revenue") {
            this.editCoA.normalSide = "Debit";
        }
        else {
            this.editCoA.normalSide = "Credit";
        }
        //Reset current balance to new orignal balance
        this.editCoA.currentBalance = this.editCoA.originalBalance;
        //Check to see if another account exists with same number or name
        //If account name and number not found, create the account
        if (this.numberHasDecimal == 2) {
            console.log('decimal required');
        }
        else {
            this.editCoA.accountName = this.editCoA.accountName.charAt(0).toLocaleUpperCase() + this.editCoA.accountName.substr(1);
            console.log('edit made');
            this.coaService.updateAccount(this.editCoA)
                .subscribe(function () {
                _this.logData.create(_this.comp.getUserName(), 'Updated account ' + _this.editCoA.accountName).subscribe();
                var modal = document.getElementById("editAccountModal");
                modal.style.display = "none";
                _this.viewAccountsSort(_this.column, 'ASC', _this.columnSearch, _this.criteria);
            });
        }
    };
    ChartOfAccountsComponent.prototype.compareAccountNameUpdate = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.editCoA.accountName = event;
                        return [4 /*yield*/, this.getOriginalAccountID(this.editCoA.caId)];
                    case 1:
                        _a.sent();
                        if (this.editCoA.accountName == this.accountCheck.accountName) {
                            this.accountNameExist = 1;
                            console.log("worked");
                        }
                        else {
                            this.coaService.compareAccountName(this.editCoA.accountName).subscribe(function (response) {
                                console.log("button changed");
                                _this.accountNameExist = response;
                                console.log(_this.accountNameExist);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChartOfAccountsComponent.prototype.compareAccountNumberUpdate = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isNaN(event) || event == "")) return [3 /*break*/, 1];
                        console.log("not a number");
                        this.accountNumberExist = 3;
                        return [3 /*break*/, 3];
                    case 1:
                        this.editCoA.accountNumber = event;
                        return [4 /*yield*/, this.getOriginalAccountID(this.editCoA.caId)];
                    case 2:
                        _a.sent();
                        if (this.editCoA.accountNumber == this.accountCheck.accountNumber) {
                            this.accountNumberExist = 1;
                            console.log("worked");
                        }
                        else {
                            this.coaService.compareAccountNumber(this.editCoA.accountNumber).subscribe(function (response) {
                                console.log("button changed");
                                _this.accountNumberExist = response;
                                console.log(_this.accountNumberExist);
                            });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //gets original account info to compare for update page
    ChartOfAccountsComponent.prototype.getOriginalAccountID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.accountId = id;
                        return [4 /*yield*/, this.coaService.getAccount(this.accountId).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.accountCheck = response;
                        return [2 /*return*/];
                }
            });
        });
    };
    ChartOfAccountsComponent.prototype.resetUpdate = function () {
        var _this = this;
        this.coaService.getAccount(this.editCoA.caId)
            .subscribe(function (user) {
            _this.editCoA = user;
            _this.accountCheck = user;
        });
    };
    ChartOfAccountsComponent.prototype.isNegativeNumber = function (accountNumber) {
        return (accountNumber < 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAccountForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ChartOfAccountsComponent.prototype, "accountForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editAccountForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ChartOfAccountsComponent.prototype, "editForm", void 0);
    ChartOfAccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart-of-accounts',
            template: __webpack_require__(/*! ./chart-of-accounts.component.html */ "./src/app/chart-of-accounts/chart-of-accounts.component.html"),
            styles: [__webpack_require__(/*! ./chart-of-accounts.component.css */ "./src/app/chart-of-accounts/chart-of-accounts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coa_service__WEBPACK_IMPORTED_MODULE_3__["CoAService"],
            _services_user_log_service__WEBPACK_IMPORTED_MODULE_4__["UserLogService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ChartOfAccountsComponent);
    return ChartOfAccountsComponent;
}());



/***/ }),

/***/ "./src/app/general-ledger/general-ledger.component.css":
/*!*************************************************************!*\
  !*** ./src/app/general-ledger/general-ledger.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\n#ledgerTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/general-ledger/general-ledger.component.html":
/*!**************************************************************!*\
  !*** ./src/app/general-ledger/general-ledger.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"form-group\">\r\n  <table id=\"ledgerTable\">\r\n    <tr>\r\n      <th colspan=\"9\" class=\"col-xs-1 text-center\">General Ledger</th>\r\n    <tr>\r\n    <tr>\r\n      <th >Account Number</th>\r\n      <th >Account Name</th>\r\n      <th >Account Type</th>\r\n      <th >Account Subtype</th>\r\n      <th >Normal Side</th>\r\n      <th >Original Balance</th>\r\n      <th >Current Balance</th>\r\n      <th >Account Description</th>\r\n      <th >Active</th>\r\n    </tr>\r\n    <tr *ngFor=\"let account of accounts\">\r\n      <td>{{ account.accountNumber }}</td>\r\n      <td>\r\n        <button class=\"btn btn-link\" style=\"color: #fab82a\" (click)=\"viewLedger(account.accountName)\" id=\"button1\" >{{ account.accountName }}</button></td>\r\n      <td>{{ account.accountType }}</td>\r\n      <td>{{ account.accountSubType }}</td>\r\n      <td>{{ account.normalSide }}</td>\r\n      <td style=\"text-align: right;\">{{ account.originalBalance | number : '1.2-2'}}</td>\r\n      <td style=\"text-align: right;\">{{ account.currentBalance | number : '1.2-2'}}</td>\r\n      <td>{{ account.comment }}</td>\r\n      <td>{{ account.active }}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/general-ledger/general-ledger.component.ts":
/*!************************************************************!*\
  !*** ./src/app/general-ledger/general-ledger.component.ts ***!
  \************************************************************/
/*! exports provided: GeneralLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLedgerComponent", function() { return GeneralLedgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/coa.service */ "./src/app/services/coa.service.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralLedgerComponent = /** @class */ (function () {
    function GeneralLedgerComponent(router, coaService, data) {
        this.router = router;
        this.coaService = coaService;
        this.data = data;
        this.accounts = [];
    }
    GeneralLedgerComponent.prototype.ngOnInit = function () {
        //this.viewAccounts();
        this.viewAccountsSort('caId', 'ASC', 'All', null);
    };
    GeneralLedgerComponent.prototype.viewAccounts = function () {
        var _this = this;
        this.coaService.findAll().subscribe(function (account) {
            _this.accounts = account;
        });
    };
    GeneralLedgerComponent.prototype.viewAccountsSort = function (column, direction, columnSearch, criteria) {
        var _this = this;
        this.coaService.findAllSort(column, direction, columnSearch, criteria).subscribe(function (account) {
            _this.accounts = account;
        });
    };
    GeneralLedgerComponent.prototype.viewLedger = function (accountName) {
        this.data.setAccount(accountName);
        this.router.navigate(['UserPage/ledger', accountName]);
    };
    GeneralLedgerComponent.prototype.stuff = function () {
    };
    GeneralLedgerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-ledger',
            template: __webpack_require__(/*! ./general-ledger.component.html */ "./src/app/general-ledger/general-ledger.component.html"),
            styles: [__webpack_require__(/*! ./general-ledger.component.css */ "./src/app/general-ledger/general-ledger.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_coa_service__WEBPACK_IMPORTED_MODULE_1__["CoAService"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], GeneralLedgerComponent);
    return GeneralLedgerComponent;
}());



/***/ }),

/***/ "./src/app/generalLedger.ts":
/*!**********************************!*\
  !*** ./src/app/generalLedger.ts ***!
  \**********************************/
/*! exports provided: GeneralLedger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLedger", function() { return GeneralLedger; });
var GeneralLedger = /** @class */ (function () {
    function GeneralLedger() {
    }
    return GeneralLedger;
}());



/***/ }),

/***/ "./src/app/home-screen/home-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, h3, h2, td {\r\n  color: white;\r\n}\r\n\r\n#image {\r\n  background-image:url('logo.png');\r\n  background-position: center;\r\n  background-size: 170px 260px;\r\n  width: 170px;\r\n  height: 260px;\r\n\r\n}\r\n\r\n#center {\r\n  position: relative;\r\n  width: 20%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#center2 {\r\n  position: relative;\r\n  padding-top: 20px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-screen/home-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"center\">\r\n  <div id=\"image\">\r\n  </div>\r\n  <div id=\"center2\">\r\n    <h3>{{welcome}}</h3>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-screen/home-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.ts ***!
  \******************************************************/
/*! exports provided: HomeScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenComponent", function() { return HomeScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeScreenComponent = /** @class */ (function () {
    function HomeScreenComponent(comp) {
        this.comp = comp;
        this.welcome = '';
    }
    HomeScreenComponent.prototype.ngOnInit = function () {
        this.welcome = 'Welcome ' + this.comp.getFirstName();
    };
    HomeScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-screen',
            template: __webpack_require__(/*! ./home-screen.component.html */ "./src/app/home-screen/home-screen.component.html"),
            styles: [__webpack_require__(/*! ./home-screen.component.css */ "./src/app/home-screen/home-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], HomeScreenComponent);
    return HomeScreenComponent;
}());



/***/ }),

/***/ "./src/app/individual-journal/individual-journal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/individual-journal/individual-journal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\n#journalTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n#center {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n#height {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n#journalAccountAddTable{\r\n  font-family: arial, sans-serif;\r\n  color: black;\r\n}\r\n.accountsAdd{\r\n  font-weight:400;\r\n  color: black;\r\n  border: none;\r\n}\r\n.accountsinput{\r\n  color: black;\r\n  border: none;\r\n}\r\n.accountslist{\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.accountslist2{\r\n  background-color: transparent;\r\n  text-indent: 25px;\r\n  border: none;\r\n}\r\n.accountslist3{\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.accountslist4{\r\n  background-color: transparent;\r\n  text-indent: 8px;\r\n  border: 1px solid #6e7d93;\r\n\r\n}\r\n.trbackground{\r\n  background-color: white;\r\n}\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/individual-journal/individual-journal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/individual-journal/individual-journal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 20px\">\r\n  <table id=\"journalTable\" style=\" table-layout:fixed\">\r\n    <thead>\r\n    <tr>\r\n      <th colspan=\"8\" class=\"col-xs-1 text-center\">Individual Journal</th>\r\n    <tr>\r\n    <tr>\r\n      <th><abbr title=\"Date\"></abbr>Date</th>\r\n      <th><abbr title=\"Type\"></abbr>Type</th>\r\n      <th><abbr title=\"Created By\"></abbr>Created By</th>\r\n      <th><abbr title=\"Accounts\"></abbr>Accounts</th>\r\n      <th><abbr title=\"Reference\"></abbr>REF</th>\r\n      <th><abbr title=\"Debit\"></abbr>Debit</th>\r\n      <th><abbr title=\"Credit\"></abbr>Credit</th>\r\n      <th><abbr title=\"Credit\"></abbr>Status</th>\r\n    </tr>\r\n    </thead>\r\n\r\n    <tr >\r\n      <td style=\"vertical-align: top\"  >{{ thisJournal.Date | date: 'MM/dd/yyyy'}}</td>\r\n      <td>\r\n    <tr *ngFor=\"let jaccount of thisJournal.JournalAccounts\" style=\" background-color: transparent\">\r\n      <td class=\"accountslist2\">{{jaccount.Type}}</td>\r\n    </tr>\r\n    </td>\r\n    <td style=\"vertical-align: top\" >{{ thisJournal.CreatedBy }}</td>\r\n    <td>\r\n      <tr *ngFor=\"let jaccount of thisJournal.JournalAccounts\" style=\" background-color: transparent\" >\r\n        <td  class=\"accountslist2\" *ngIf=\"jaccount.NormalSide == 'Credit'\" >\r\n         {{ jaccount.AccountName }}</td>\r\n        <td  class=\"accountslist\" *ngIf=\"jaccount.NormalSide == 'Debit'\">\r\n          {{ jaccount.AccountName }}\r\n        </td>\r\n\r\n      </tr>\r\n    </td>\r\n\r\n    <td style=\"vertical-align: top\">{{ thisJournal.Reference }}</td>\r\n\r\n    <td >\r\n      <table class=\"tableAlign\">\r\n        <tr *ngFor=\"let jaccount of thisJournal.JournalAccounts; let b = index\" style=\" background-color: transparent\">\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.DebitAmount == null\"  style=\"text-align: right;\">&nbsp;</td>\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.DebitAmount != null && b == 0\"  style=\"float:right\">{{\"$\"+(jaccount.DebitAmount | number : '1.2-2')}}</td>\r\n          <td class=\"accountslist3\"  *ngIf=\"jaccount.DebitAmount != null && b != 0\"  style=\"text-align: right;\">{{(jaccount.DebitAmount | number : '1.2-2')}}</td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n\r\n    <td >\r\n      <table class=\"tableAlign\">\r\n        <tr *ngFor=\"let jaccount of thisJournal.JournalAccounts; let i = index\" style=\" background-color: transparent;\">\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.CreditAmount == null\"  style=\"text-align: right;\">&nbsp;</td>\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.CreditAmount != null && i == getNumberDebits(thisJournal.JournalAccounts)\"  style=\"text-align: right;\">{{\"$\"+(jaccount.CreditAmount | number : '1.2-2')}}</td>\r\n          <td class=\"accountslist3\" *ngIf=\"jaccount.CreditAmount != null && i != getNumberDebits(thisJournal.JournalAccounts)\"  style=\"text-align: right;\">{{(jaccount.CreditAmount | number : '1.2-2')}}</td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n    <td style=\"vertical-align: top\">\r\n\r\n      <label *ngIf=\"thisJournal.acceptance != null\" style=\"text-align: right;\">{{thisJournal.acceptance}}</label>\r\n      <label *ngIf=\"thisJournal.acceptance == null\" style=\"text-align: right;\">Pending</label>\r\n\r\n    </td>\r\n\r\n    </tr>\r\n  </table>\r\n  <button class=\"btn btn-info btn-lg\" (click)=\"viewGenJournal()\" >General Journal</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/individual-journal/individual-journal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/individual-journal/individual-journal.component.ts ***!
  \********************************************************************/
/*! exports provided: IndividualJournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualJournalComponent", function() { return IndividualJournalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_journalize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/journalize.service */ "./src/app/services/journalize.service.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _journal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal */ "./src/app/journal.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndividualJournalComponent = /** @class */ (function () {
    function IndividualJournalComponent(journalServ, data, router) {
        this.journalServ = journalServ;
        this.data = data;
        this.router = router;
        this.thisJournal = _journal__WEBPACK_IMPORTED_MODULE_3__["Journal"];
        /*
         * THIS SHOULD BE PRIVATE BUT WON'T COMPILE
         *
         * SHOULD BE REWORKED TO ACCOUNT FOR THIS
         */
        this.journals = [];
    }
    IndividualJournalComponent.prototype.ngOnInit = function () {
        this.viewJournals();
    };
    IndividualJournalComponent.prototype.viewJournals = function () {
        var _this = this;
        this.journalServ.findAll().subscribe(function (journal) {
            _this.journals = journal;
            var temp = _this.data.getReference();
            for (var _i = 0, _a = _this.journals; _i < _a.length; _i++) {
                var journ = _a[_i];
                if (temp == journ.Reference) {
                    _this.thisJournal = journ;
                    break;
                }
            }
            console.log(_this.journals);
        });
    };
    IndividualJournalComponent.prototype.viewGenJournal = function () {
        this.router.navigate(['UserPage/journal']);
    };
    IndividualJournalComponent.prototype.getNumberDebits = function (journalAcc) {
        var num = 0;
        for (var _i = 0, journalAcc_1 = journalAcc; _i < journalAcc_1.length; _i++) {
            var j = journalAcc_1[_i];
            if (j.DebitAmount != null) {
                num++;
            }
        }
        return num;
    };
    IndividualJournalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-journal',
            template: __webpack_require__(/*! ./individual-journal.component.html */ "./src/app/individual-journal/individual-journal.component.html"),
            styles: [__webpack_require__(/*! ./individual-journal.component.css */ "./src/app/individual-journal/individual-journal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_journalize_service__WEBPACK_IMPORTED_MODULE_1__["JournalizeService"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], IndividualJournalComponent);
    return IndividualJournalComponent;
}());



/***/ }),

/***/ "./src/app/individual-ledger/individual-ledger.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/individual-ledger/individual-ledger.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\n#ledgerTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/individual-ledger/individual-ledger.component.html":
/*!********************************************************************!*\
  !*** ./src/app/individual-ledger/individual-ledger.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <table id=\"ledgerTable\" style=\" table-layout:fixed\">\r\n    <tr>\r\n      <th colspan=\"7\" >\r\n        <label>{{'Account #: '+ currentCoA.accountNumber}}</label>\r\n        <label style=\"margin: auto; padding-left: 40%\">{{account}}</label></th>\r\n    <tr>\r\n    <tr>\r\n      <th >Date</th>\r\n      <th >Number</th>\r\n      <th >Description</th>\r\n      <th >REF</th>\r\n      <th >Debit</th>\r\n      <th >Credit</th>\r\n      <th >Balance</th>\r\n    </tr>\r\n    <tr>\r\n      <th ></th>\r\n      <th ></th>\r\n      <th ></th>\r\n      <th ></th>\r\n      <th ></th>\r\n      <th ></th>\r\n      <th style=\"text-align: right;\">0</th>\r\n    </tr>\r\n    <tr *ngFor=\"let account of accountList2\">\r\n      <td>{{ account.Date | date: 'MM/dd/yyyy'}}</td>\r\n      <td>{{ account.AccountNumber }}</td>\r\n      <td>{{ account.Description }}</td>\r\n      <td (click)=\"viewJournal(account.Reference)\">{{ account.Reference}}</td>\r\n      <td style=\"text-align: right;\">{{ account.DebitAmount | number : '1.2-2' }}</td>\r\n      <td style=\"text-align: right;\">{{ account.CreditAmount | number : '1.2-2'}}</td>\r\n      <td style=\"text-align: right;\">{{calculateTotal(account.glId) | number : '1.2-2'}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/individual-ledger/individual-ledger.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/individual-ledger/individual-ledger.component.ts ***!
  \******************************************************************/
/*! exports provided: IndividualLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualLedgerComponent", function() { return IndividualLedgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _services_general_ledger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general-ledger.service */ "./src/app/services/general-ledger.service.ts");
/* harmony import */ var _services_coa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/coa.service */ "./src/app/services/coa.service.ts");
/* harmony import */ var _chart_of_accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart-of-accounts */ "./src/app/chart-of-accounts.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var IndividualLedgerComponent = /** @class */ (function () {
    function IndividualLedgerComponent(data, cserv, ledgerServ, coaService, router) {
        this.data = data;
        this.cserv = cserv;
        this.ledgerServ = ledgerServ;
        this.coaService = coaService;
        this.router = router;
        this.account = 'temp';
        this.currentCoA = new _chart_of_accounts__WEBPACK_IMPORTED_MODULE_4__["CoA"]();
        this.accountList = []; //entire list of approved accounts
        this.accountList2 = []; //list of specified accounts
        this.accountListDebitFirst = [];
        this.isStartDebit = 0;
        this.total = 0;
        this.displayTotal = 0;
    }
    IndividualLedgerComponent.prototype.ngOnInit = function () {
        this.isStartDebit = 0;
        this.viewLedger();
        this.getAccount();
    };
    IndividualLedgerComponent.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.accountList = [];
                        this.accountList2 = [];
                        this.account = this.data.getAccount();
                        return [4 /*yield*/, this.cserv.getByName(this.account).toPromise()];
                    case 1:
                        result = _a.sent();
                        this.currentCoA = result;
                        console.log(this.currentCoA);
                        this.total = this.currentCoA.originalBalance;
                        this.displayTotal = this.total;
                        return [2 /*return*/];
                }
            });
        });
    };
    IndividualLedgerComponent.prototype.viewLedger = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.ledgerServ.findAll().subscribe(function (result) {
                    _this.accountList = result;
                    for (var _i = 0, _a = _this.accountList; _i < _a.length; _i++) {
                        var acc1 = _a[_i];
                        if (acc1.AccountName == _this.account) {
                            _this.accountList2.push(acc1);
                        }
                    }
                    console.log(_this.accountList2);
                    //this.getDebitFirst();
                });
                return [2 /*return*/];
            });
        });
    };
    //this forces first balance to be negative for Credit side accounts, will keep for later
    IndividualLedgerComponent.prototype.getDebitFirst = function () {
        if (this.accountList2[0].CreditAmount != null) {
            for (var _i = 0, _a = this.accountList2; _i < _a.length; _i++) {
                var acc = _a[_i];
                if (acc.DebitAmount != null) {
                    var genled = acc;
                    this.accountList2.splice(this.accountList2.indexOf(acc), 1);
                    this.accountList2.unshift(genled);
                    break;
                }
            }
        }
    };
    IndividualLedgerComponent.prototype.viewJournal = function (ref) {
        this.data.setReference(ref);
        this.router.navigate(['UserPage/journal_info']);
    };
    IndividualLedgerComponent.prototype.calculateTotal = function (accountID) {
        var num = 0;
        for (var _i = 0, _a = this.accountList2; _i < _a.length; _i++) {
            var account = _a[_i];
            if (account.NormalSide == 'Debit') {
                if (account.DebitAmount != null) {
                    if (account.glId != accountID) {
                        num = +num + +account.DebitAmount;
                    }
                    else {
                        num = +num + +account.DebitAmount;
                        return num;
                    }
                }
                else {
                    if (account.glId != accountID) {
                        num = +num - +account.CreditAmount;
                    }
                    else {
                        num = +num - +account.CreditAmount;
                        return num;
                    }
                }
            }
            else {
                if (account.DebitAmount != null) {
                    if (account.glId != accountID) {
                        num = +num - +account.DebitAmount;
                    }
                    else {
                        num = +num - +account.DebitAmount;
                        return num;
                    }
                }
                else {
                    if (account.glId != accountID) {
                        num = +num + +account.CreditAmount;
                    }
                    else {
                        num = +num + +account.CreditAmount;
                        return num;
                    }
                }
            }
        }
    };
    IndividualLedgerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-ledger',
            template: __webpack_require__(/*! ./individual-ledger.component.html */ "./src/app/individual-ledger/individual-ledger.component.html"),
            styles: [__webpack_require__(/*! ./individual-ledger.component.css */ "./src/app/individual-ledger/individual-ledger.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"],
            _services_coa_service__WEBPACK_IMPORTED_MODULE_3__["CoAService"],
            _services_general_ledger_service__WEBPACK_IMPORTED_MODULE_2__["GeneralLedgerService"],
            _services_coa_service__WEBPACK_IMPORTED_MODULE_3__["CoAService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], IndividualLedgerComponent);
    return IndividualLedgerComponent;
}());



/***/ }),

/***/ "./src/app/journal.ts":
/*!****************************!*\
  !*** ./src/app/journal.ts ***!
  \****************************/
/*! exports provided: Journal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Journal", function() { return Journal; });
var Journal = /** @class */ (function () {
    function Journal() {
    }
    return Journal;
}());



/***/ }),

/***/ "./src/app/journalAccount.ts":
/*!***********************************!*\
  !*** ./src/app/journalAccount.ts ***!
  \***********************************/
/*! exports provided: JournalAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalAccount", function() { return JournalAccount; });
var JournalAccount = /** @class */ (function () {
    function JournalAccount() {
    }
    return JournalAccount;
}());



/***/ }),

/***/ "./src/app/journalize/journalize.component.css":
/*!*****************************************************!*\
  !*** ./src/app/journalize/journalize.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\nbutton.link { background:none;border:none; }\r\nbutton.hover { background:none;border:none; }\r\n#journalTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n#center {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n#height {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n#journalAccountAddTable{\r\n  font-family: arial, sans-serif;\r\n  color: black;\r\n}\r\n.accountsAdd{\r\n  font-weight:400;\r\n  color: black;\r\n  border: none;\r\n}\r\n.accountsinput{\r\n  color: black;\r\n  border: none;\r\n}\r\n.accountslist{\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.accountslist2{\r\n  background-color: transparent;\r\n  text-indent: 25px;\r\n  border: none;\r\n}\r\n.accountslist3{\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.accountslist4{\r\n  background-color: transparent;\r\n  text-indent: 8px;\r\n  border: 1px solid #6e7d93;\r\n\r\n}\r\n.trbackground{\r\n  background-color: white;\r\n}\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n/* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n.row {\r\n display: block/* equal height of the children */\r\n}\r\n.tableAlign{\r\n  margin-left: auto;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/journalize/journalize.component.html":
/*!******************************************************!*\
  !*** ./src/app/journalize/journalize.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"column is-half\" hidden>\r\n      <div class=\"level-right\">\r\n        <p class=\"level-item\"><strong>All</strong></p>\r\n        <p class=\"level-item\"><a>Approved</a></p>\r\n        <p class=\"level-item\"><a>Needs Approval</a></p>\r\n        <p class=\"level-item\"><a>Rejected</a></p>\r\n      </div>\r\n    </div>\r\n    <!-- End of row 2: right column -->\r\n\r\n\r\n\r\n    <div id=\"createJournalEntry\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <form #addJournalForm=\"ngForm\">\r\n\r\n          <hr/>\r\n          <div style=\"width: 200px\">\r\n            <label>Date</label>\r\n          <my-date-picker name=\"myDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"model\"  required></my-date-picker>\r\n            </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Description\" [(ngModel)]=\"journalNew.Description\"\r\n                   name=\"description\" >\r\n          </div>\r\n          <hr id=\"journalAccountAddTable\">\r\n          <table>\r\n            <tr >\r\n              <th class=\"accountsAdd\"><abbr title=\"Date\"></abbr>Account</th>\r\n              <th class=\"accountsAdd\"><abbr title=\"Date\"></abbr>Debits</th>\r\n              <th class=\"accountsAdd\"><abbr title=\"Date\"></abbr>Credits</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let account of journalAccountsDebit\" class=\"trbackground\">\r\n              <td class=\"accountsinput\" style=\" background-color: white\">\r\n                <select id=\"debitDropDown\"  class=\"form-control\" style=\"width: 200px\" required\r\n                        [ngModelOptions]=\"{standalone: true}\"\r\n                         [(ngModel)]=\"account.AccountName\" [name]=\"account.AccountName\"\r\n                        (ngModelChange)=\"checkRepeatDebitAccount(); \"\r\n                          #accountSubType=\"ngModel\">\r\n                  <option disabled>Debits:</option>\r\n                  <option *ngFor=\"let accountDeb of debitAccounts\">{{accountDeb }}</option>\r\n                  <option disabled>Credits:</option>\r\n                  <option *ngFor=\"let accountCred of creditAccounts\">{{accountCred}}</option>\r\n                </select>\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white; \">\r\n                <input type=\"text\" class=\"form-control\" [textMask]=\"{mask: currencyMask}\" id=\"DebitAmount\" placeholder=\"Debit\" style=\"text-align: right;\"\r\n                       required [ngModelOptions]=\"{standalone: true}\"\r\n\r\n                       [name]=\"account.DebitAmount\" [(ngModel)]=\"account.DebitAmount\"  (ngModelChange)=\"getDebitTotal(); \">\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white\">\r\n                <input type=\"text\" class=\"form-control\" id=\"CreditAmount\" placeholder=\"Credit\" disabled style=\"text-align: right;\"\r\n                       name=\"description3\" >\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white\" *ngIf=\"journalAccountsDebit.indexOf(account) > 0\">\r\n                <button class=\"btn btn-danger\" (click)=\"removeDebit(journalAccountsDebit.indexOf(account)); checkRepeatDebitAccount();\" id=\"removeDebitInput\"   >Remove</button>\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white\">\r\n                <button class=\"btn btn-info\" (click)=\"addDebitInput()\" id=\"addDebitInput\"  *ngIf=\"journalAccountsDebit.indexOf(account) == journalAccountsDebit.length -1\">Add Debit</button>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let account of journalAccountsCredit\" class=\"trbackground\">\r\n              <td class=\"accountsinput\" style=\" background-color: white\">\r\n              <select id=\"creditDropDown\" class=\"form-control\" style=\"width: 200px\" required\r\n                      [ngModelOptions]=\"{standalone: true}\"\r\n\r\n                      [(ngModel)]=\"account.AccountName\" [name]=\"account.AccountName\"\r\n                      (ngModelChange)=\"checkRepeatCreditAccount()\"\r\n                      #accountSubType=\"ngModel\">\r\n                <option disabled>Debits:</option>\r\n                <option *ngFor=\"let accountDeb of debitAccounts\">{{accountDeb}}</option>\r\n                <option disabled>Credits:</option>\r\n                <option *ngFor=\"let accountCred of creditAccounts\">{{accountCred}}</option>\r\n              </select>\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white\">\r\n                <input type=\"text\" class=\"form-control\" id=\"DebitAmount2\" placeholder=\"Debit\" disabled style=\"text-align: right;\"\r\n                       name=\"description5\" >\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white; text-align: right;\">\r\n                <input type=\"text\" class=\"form-control\" id=\"CreditAmount2\" placeholder=\"Credit\" required  style=\"text-align: right;\"\r\n                       [ngModelOptions]=\"{standalone: true}\"\r\n                       [(ngModel)]=\"account.CreditAmount\"\r\n                       (ngModelChange)=\"getCreditTotal()\"\r\n                       [name]=\"account.CreditAmount\"\r\n                       >\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white\" *ngIf=\"journalAccountsCredit.indexOf(account) > 0\">\r\n                <button class=\"btn btn-danger\" (click)=\"removeCredit(journalAccountsCredit.indexOf(account)); checkRepeatCreditAccount();\" id=\"removeCreditInput\"   >Remove</button>\r\n              </td>\r\n              <td class=\"accountsinput\" style=\" background-color: white\">\r\n                <button class=\"btn btn-info\" (click)=\"addCreditInput();\" id=\"addCreditInput\"  *ngIf=\"journalAccountsCredit.indexOf(account) == journalAccountsCredit.length -1\">Add Credit</button>\r\n              </td>\r\n\r\n            </tr>\r\n\r\n             <tr class=\"trbackground\">\r\n               <td class=\"accountsinput\" style=\" background-color: white\"></td>\r\n               <td class=\"accountsinput\" style=\" background-color: white; text-align: right;\" >{{'$' + (totalDebit | number : '1.2-2')}}</td>\r\n               <td class=\"accountsinput\" style=\" background-color: white; text-align: right;\" >{{'$' + (totalCredit | number : '1.2-2')}}</td>\r\n\r\n             </tr>\r\n          </table>\r\n          <form enctype=\"multipart/form-data\">\r\n            <input #folderInput type=\"file\" (change)=\"selectFile($event.target.files)\" >\r\n          </form>\r\n          <hr/>\r\n          <div *ngIf=\"totalsmatch == 0\" class=\"alert alert-danger\"  style=\"width: 340px;\">\r\n            Debit and Credits do not match\r\n          </div>\r\n\r\n          <div *ngIf=\"repeatDebitAccount == 0\" class=\"alert alert-danger\"  style=\"width: 340px;\">\r\n            You have duplicate accounts\r\n          </div>\r\n\r\n          <div *ngIf=\"repeatCreditAccount == 0\" class=\"alert alert-danger\"  style=\"width: 340px;\">\r\n            You have duplicate accounts\r\n          </div>\r\n          <button (click)=\"submit();\" id=\"submitBtn\" [disabled]=\"checkBothInputs() == 0\" >Submit</button>\r\n          <button (click)=\"close(); addJournalForm.reset()\" id=\"closeModalBtn\">Cancel</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n<!--base table-->\r\n\r\n    <form class=\"form-inline\" style=\"left: 8px\">\r\n      <div style=\"position:  relative;left: 75%;  padding-top: 20px\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" id=\"searchBar\"  style=\"width: 300px; left: 6px\" placeholder=\"Search\" [(ngModel)]=\"criteria\"\r\n                 (ngModelChange)=\"viewJournalsSort(column, 'ASC', columnSearch, $event, approvalType)\"\r\n                 name=\"search\" >\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <button class=\"btn btn-info btn-lg\" (click)=\"openCreateJournal()\" >Add Journal</button>\r\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" style=\"float: right; margin-right: 8%\">\r\n      <label class=\"btn btn-secondary\">\r\n        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked (click)=\"setApprovalType('Approved')\">Approved\r\n      </label>\r\n      <label class=\"btn btn-secondary\">\r\n        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\" (click)=\"setApprovalType('Declined')\">Declined\r\n      </label>\r\n      <label class=\"btn btn-secondary\">\r\n        <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\" (click)=\"setApprovalType(null)\">Pending\r\n      </label>\r\n    </div>\r\n<div>\r\n  <table id=\"journalTable\" style=\" table-layout:fixed\">\r\n    <thead>\r\n    <tr>\r\n      <th colspan=\"8\" class=\"col-xs-1 text-center\">General Journal</th>\r\n    <tr>\r\n    <tr>\r\n      <th><abbr title=\"Date\"></abbr>Date</th>\r\n      <th><abbr title=\"Type\"></abbr>Type</th>\r\n      <th><abbr title=\"Created By\"></abbr>Created By</th>\r\n      <th><abbr title=\"Accounts\"></abbr>Accounts</th>\r\n      <th><abbr title=\"Reference\"></abbr>REF</th>\r\n      <th><abbr title=\"Debit\"></abbr>Debit</th>\r\n      <th><abbr title=\"Credit\"></abbr>Credit</th>\r\n      <th><abbr title=\"Credit\"></abbr>Status</th>\r\n    </tr>\r\n    </thead>\r\n\r\n    <tr *ngFor=\"let journal of journals\">\r\n      <td style=\"vertical-align: top\"  >{{ journal.Date | date: 'MM/dd/yyyy'}}</td>\r\n      <td>\r\n        <tr *ngFor=\"let jaccount of journal.JournalAccounts\" style=\" background-color: transparent\">\r\n         <td class=\"accountslist2\">{{jaccount.Type}}</td>\r\n        </tr>\r\n      </td>\r\n      <td style=\"vertical-align: top\" >{{ journal.CreatedBy }}</td>\r\n      <td>\r\n        <tr *ngFor=\"let jaccount of journal.JournalAccounts\" style=\" background-color: transparent\" >\r\n          <td  class=\"accountslist2\" *ngIf=\"jaccount.NormalSide == 'Credit'\" >\r\n            <button class=\"hover\" style=\"color: white\" (click)=\"viewLedger(jaccount.AccountName)\" id=\"button1\" >{{ jaccount.AccountName }}</button></td>\r\n          <td  class=\"accountslist\" *ngIf=\"jaccount.NormalSide == 'Debit'\">\r\n            <button class=\"hover\" style=\"color: white\" (click)=\"viewLedger(jaccount.AccountName)\" id=\"button2\" >{{ jaccount.AccountName }}</button>\r\n          </td>\r\n\r\n       </tr>\r\n      </td>\r\n\r\n      <td style=\"vertical-align: top\">{{ journal.Reference }}</td>\r\n\r\n      <td >\r\n        <table class=\"tableAlign\">\r\n        <tr *ngFor=\"let jaccount of journal.JournalAccounts; let b = index\" style=\" background-color: transparent\">\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.DebitAmount == null\"  style=\"text-align: right;\">&nbsp;</td>\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.DebitAmount != null && b == 0\"  style=\"float:right\">{{\"$\"+(jaccount.DebitAmount | number : '1.2-2')}}</td>\r\n          <td class=\"accountslist3\"  *ngIf=\"jaccount.DebitAmount != null && b != 0\"  style=\"text-align: right;\">{{(jaccount.DebitAmount | number : '1.2-2')}}</td>\r\n        </tr>\r\n        </table>\r\n      </td>\r\n\r\n      <td >\r\n        <table class=\"tableAlign\">\r\n        <tr *ngFor=\"let jaccount of journal.JournalAccounts; let i = index\" style=\" background-color: transparent;\">\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.CreditAmount == null\"  style=\"text-align: right;\">&nbsp;</td>\r\n          <td class=\"accountslist\"  *ngIf=\"jaccount.CreditAmount != null && i == getNumberDebits(journal.JournalAccounts)\"  style=\"text-align: right;\">{{\"$\"+(jaccount.CreditAmount | number : '1.2-2')}}</td>\r\n          <td class=\"accountslist3\" *ngIf=\"jaccount.CreditAmount != null && i != getNumberDebits(journal.JournalAccounts)\"  style=\"text-align: right;\">{{(jaccount.CreditAmount | number : '1.2-2')}}</td>\r\n        </tr>\r\n        </table>\r\n      </td>\r\n    <td style=\"vertical-align: top\">\r\n      <div *ngIf=\"access == 2\">\r\n        <button class=\"btn btn-info\" style=\"\" (click)=\"approveJournal(journal)\"  *ngIf=\"journal.acceptance == null\" >Approve</button>\r\n      </div>\r\n      <label *ngIf=\"journal.acceptance != null\">{{journal.acceptance}}</label>\r\n      <label *ngIf=\"journal.acceptance == null && access == 3\">Pending</label>\r\n      <div *ngIf=\"access == 2\">\r\n        <button class=\"btn btn-danger\" style=\"width: 95px\" (click)=\"declineJournal(journal)\"  *ngIf=\"journal.acceptance == null\" >Decline</button>\r\n      </div>\r\n    </td>\r\n\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/journalize/journalize.component.ts":
/*!****************************************************!*\
  !*** ./src/app/journalize/journalize.component.ts ***!
  \****************************************************/
/*! exports provided: JournalizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalizeComponent", function() { return JournalizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_journalize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/journalize.service */ "./src/app/services/journalize.service.ts");
/* harmony import */ var _services_general_ledger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general-ledger.service */ "./src/app/services/general-ledger.service.ts");
/* harmony import */ var _journal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal */ "./src/app/journal.ts");
/* harmony import */ var _journalAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../journalAccount */ "./src/app/journalAccount.ts");
/* harmony import */ var _generalLedger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generalLedger */ "./src/app/generalLedger.ts");
/* harmony import */ var _services_coa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/coa.service */ "./src/app/services/coa.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
        //'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
};
var JournalizeComponent = /** @class */ (function () {
    function JournalizeComponent(router, coaService, journalServ, ledgerServ, comp, http, data) {
        this.router = router;
        this.coaService = coaService;
        this.journalServ = journalServ;
        this.ledgerServ = ledgerServ;
        this.comp = comp;
        this.http = http;
        this.data = data;
        this.fileUploadURL = 'http://localhost:8080/api/journalFiles';
        this.journalNew = new _journal__WEBPACK_IMPORTED_MODULE_3__["Journal"]();
        this.journals = []; //list of journal entries
        this.journalAccountsDebit = []; //list of Debit journal accounts
        this.journalAccountsCredit = []; //list of Debit journal accounts
        //Account variables for grabbing a list of accounts
        this.accounts = []; //list of total accounts
        this.debitAccounts = []; //list of all debit accounts
        this.creditAccounts = []; //list of all credit accounts
        this.totalDebit = 0.00;
        this.totalCredit = 0.00;
        //search functions.
        this.column = 'JId';
        this.columnSearch = 'all';
        this.approvalType = 'all';
        this.criteria = '';
        //error variables
        this.fieldsFilled = 0;
        this.fieldsFilled2 = 0;
        this.totalsmatch = 1;
        this.repeatDebitAccount = 1;
        this.repeatCreditAccount = 1;
        //user access
        this.access = 0;
        this.myDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
            editableDateField: false
        };
        this.currencyMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12___default()({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: false,
            //thousandsSeparatorSymbol: ',',
            allowDecimal: true,
            decimalSymbol: '.',
            decimalLimit: 2,
            integerLimit: null,
            requireDecimal: false,
            precision: 2,
            allowNegative: false,
            allowLeadingZeroes: false
        });
        this.model = { date: { year: 2018, month: 10, day: 9 } };
    }
    JournalizeComponent.prototype.ngOnInit = function () {
        this.journals = [];
        this.journals.length = 0;
        this.onOpened();
        this.getAccounts();
        //this.viewJournals();
        this.viewJournalsSort('JId', 'ASC', 'All', null, 'all');
        //this.viewJournalAccounts();
    };
    JournalizeComponent.prototype.viewJournals = function () {
        var _this = this;
        this.journalServ.findAll().subscribe(function (journal) {
            _this.journals = journal;
            console.log(_this.journals);
        });
    };
    //this.viewUsersSort('userId', 'ASC', 'All', null);
    JournalizeComponent.prototype.onOpened = function () {
        if (this.comp.getRole() === 'admin') {
            this.access = 1;
        }
        else if (this.comp.getRole() === 'manager') {
            this.access = 2;
        }
        else {
            this.access = 3;
        }
    };
    JournalizeComponent.prototype.viewJournalsSort = function (column, direction, columnSearch, criteria, approvalType) {
        var _this = this;
        this.journalServ.findAllSort(column, direction, columnSearch, criteria, approvalType).subscribe(function (journal) {
            _this.journals = journal;
            console.log(_this.journals);
        });
    };
    JournalizeComponent.prototype.getNumberDebits = function (journalAcc) {
        var num = 0;
        for (var _i = 0, journalAcc_1 = journalAcc; _i < journalAcc_1.length; _i++) {
            var j = journalAcc_1[_i];
            if (j.DebitAmount != null) {
                num++;
            }
        }
        return num;
    };
    JournalizeComponent.prototype.getAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _i, _a, account;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.debitAccounts = [];
                        this.creditAccounts = [];
                        return [4 /*yield*/, this.coaService.findAll().toPromise()];
                    case 1:
                        result = _b.sent();
                        this.accounts = result;
                        console.log("Hello");
                        for (_i = 0, _a = this.accounts; _i < _a.length; _i++) {
                            account = _a[_i];
                            if (account.normalSide == 'Debit') {
                                this.debitAccounts.push(account.accountName);
                                console.log("Debit: " + account.accountName);
                            }
                            else {
                                this.creditAccounts.push(account.accountName);
                                console.log("Credit: " + account.accountName);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    JournalizeComponent.prototype.getDebitTotal = function () {
        this.totalsmatch = 1;
        this.totalDebit = 0.00;
        for (var _i = 0, _a = this.journalAccountsDebit; _i < _a.length; _i++) {
            var account = _a[_i];
            if (isNaN(account.DebitAmount) || account.DebitAmount == null) {
            }
            else {
                this.totalDebit = +this.totalDebit + +account.DebitAmount;
            }
        }
    };
    JournalizeComponent.prototype.getCreditTotal = function () {
        this.totalsmatch = 1;
        this.totalCredit = 0.00;
        for (var _i = 0, _a = this.journalAccountsCredit; _i < _a.length; _i++) {
            var account = _a[_i];
            if (isNaN(account.CreditAmount) || account.CreditAmount == null) {
            }
            else {
                this.totalCredit = +this.totalCredit + +account.CreditAmount;
            }
        }
    };
    JournalizeComponent.prototype.checkBothInputs = function () {
        if (this.checkInputExist() == 1 && this.checkInputExist2() == 1 && this.journalNew.Description != null && this.journalNew.Description != '') {
            return 1;
        }
        else {
            return 0;
        }
    };
    JournalizeComponent.prototype.checkInputExist = function () {
        for (var _i = 0, _a = this.journalAccountsDebit; _i < _a.length; _i++) {
            var account = _a[_i];
            if (account.AccountName == undefined || account.DebitAmount == undefined || account.DebitAmount == 0 || isNaN(account.DebitAmount)) {
                this.fieldsFilled = 0;
                break;
            }
            else {
                this.fieldsFilled = 1;
            }
        }
        return this.fieldsFilled;
    };
    JournalizeComponent.prototype.checkInputExist2 = function () {
        for (var _i = 0, _a = this.journalAccountsCredit; _i < _a.length; _i++) {
            var account = _a[_i];
            if (account.AccountName == undefined || account.CreditAmount == undefined || account.CreditAmount == 0 || isNaN(account.CreditAmount)) {
                this.fieldsFilled2 = 0;
                break;
            }
            else {
                this.fieldsFilled2 = 1;
            }
        }
        return this.fieldsFilled2;
    };
    JournalizeComponent.prototype.addDebitInput = function () {
        var debit = new _journalAccount__WEBPACK_IMPORTED_MODULE_4__["JournalAccount"]();
        this.journalAccountsDebit.push(debit);
        console.log(this.journalAccountsDebit[0].AccountName);
        this.checkInputExist();
    };
    JournalizeComponent.prototype.addCreditInput = function () {
        var credit = new _journalAccount__WEBPACK_IMPORTED_MODULE_4__["JournalAccount"]();
        this.journalAccountsCredit.push(credit);
        this.checkInputExist2();
    };
    JournalizeComponent.prototype.openCreateJournal = function () {
        this.totalsmatch = 1;
        this.journalAccountsDebit = []; //reset journal accounts
        this.journalAccountsCredit = []; //reset journal accounts
        this.totalDebit = 0;
        this.totalCredit = 0;
        this.loadAccountInput();
        var modal = document.getElementById("createJournalEntry");
        modal.style.display = "block";
    };
    //creates new starting array for inputs in create form
    JournalizeComponent.prototype.loadAccountInput = function () {
        this.journalAccountsDebit[0] = new _journalAccount__WEBPACK_IMPORTED_MODULE_4__["JournalAccount"]();
        this.journalAccountsCredit[0] = new _journalAccount__WEBPACK_IMPORTED_MODULE_4__["JournalAccount"]();
    };
    JournalizeComponent.prototype.close = function () {
        var modal = document.getElementById("createJournalEntry");
        modal.style.display = "none";
        this.journalForm.reset();
        this.selectedFile = null;
        this.repeatDebitAccount = 1;
        this.repeatCreditAccount = 1;
        this.myInputVariable.nativeElement.value = "";
    };
    JournalizeComponent.prototype.removeDebit = function (index) {
        this.checkRepeatDebitAccount();
        if (index > -1) {
            this.journalAccountsDebit.splice(index, 1);
        }
    };
    JournalizeComponent.prototype.removeCredit = function (index) {
        this.checkRepeatCreditAccount();
        if (index > -1) {
            this.journalAccountsCredit.splice(index, 1);
        }
    };
    JournalizeComponent.prototype.checkRepeatDebitAccount = function () {
        console.log('repeat');
        for (var _i = 0, _a = this.journalAccountsDebit; _i < _a.length; _i++) {
            var acc1 = _a[_i];
            for (var _b = 0, _c = this.journalAccountsDebit; _b < _c.length; _b++) {
                var acc2 = _c[_b];
                if (this.journalAccountsDebit.indexOf(acc1) == this.journalAccountsDebit.indexOf(acc2)) {
                    this.repeatDebitAccount = 1;
                }
                else if (acc1.AccountName == acc2.AccountName) {
                    this.repeatDebitAccount = 0;
                    console.log('Duplicate');
                    return;
                }
                else {
                    this.repeatDebitAccount = 1;
                }
                for (var _d = 0, _e = this.journalAccountsCredit; _d < _e.length; _d++) {
                    var acc3 = _e[_d];
                    if (acc1.AccountName == acc3.AccountName) {
                        this.repeatDebitAccount = 0;
                        return;
                    }
                    else {
                        this.repeatDebitAccount = 1;
                    }
                }
            }
        }
    };
    JournalizeComponent.prototype.checkRepeatCreditAccount = function () {
        console.log('repeat');
        for (var _i = 0, _a = this.journalAccountsCredit; _i < _a.length; _i++) {
            var acc1 = _a[_i];
            for (var _b = 0, _c = this.journalAccountsCredit; _b < _c.length; _b++) {
                var acc2 = _c[_b];
                if (this.journalAccountsCredit.indexOf(acc1) == this.journalAccountsCredit.indexOf(acc2)) {
                    this.repeatCreditAccount = 1;
                }
                else if (acc1.AccountName == acc2.AccountName) {
                    this.repeatCreditAccount = 0;
                    console.log('Duplicate');
                    return;
                }
                else {
                    this.repeatCreditAccount = 1;
                }
            }
            for (var _d = 0, _e = this.journalAccountsDebit; _d < _e.length; _d++) {
                var acc3 = _e[_d];
                if (acc1.AccountName == acc3.AccountName) {
                    this.repeatCreditAccount = 0;
                    return;
                }
                else {
                    this.repeatCreditAccount = 1;
                }
            }
        }
    };
    //posting and updating tables including: journal and journal accounts
    JournalizeComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, response, _i, _a, debitAccounts, _b, _c, acc, _d, _e, creditAccounts, _f, _g, acc, uploadData;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (!(this.totalDebit != this.totalCredit)) return [3 /*break*/, 1];
                        this.totalsmatch = 0;
                        return [3 /*break*/, 11];
                    case 1:
                        id = void 0;
                        //sets the input date
                        this.journalNew.Date = new Date();
                        this.journalNew.Date.setFullYear(this.model.date.year, this.model.date.month - 1, this.model.date.day);
                        this.journalNew.CreatedBy = this.comp.getUserName();
                        this.journalNew.Reference = this.makeRandomRef();
                        console.log(this.journalNew.Date);
                        return [4 /*yield*/, this.journalServ.addJournal(this.journalNew).toPromise()];
                    case 2:
                        response = _h.sent();
                        id = response.JId;
                        console.log("id: " + id);
                        _i = 0, _a = this.journalAccountsDebit;
                        _h.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        debitAccounts = _a[_i];
                        debitAccounts.JournalJId = id;
                        debitAccounts.NormalSide = 'Debit';
                        //set account type
                        for (_b = 0, _c = this.accounts; _b < _c.length; _b++) {
                            acc = _c[_b];
                            if (acc.accountName == debitAccounts.AccountName) {
                                debitAccounts.Type = acc.accountType;
                                break;
                            }
                        }
                        return [4 /*yield*/, this.journalServ.addJournalAccounts(debitAccounts).toPromise()];
                    case 4:
                        _h.sent();
                        console.log('posted debit');
                        _h.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        _d = 0, _e = this.journalAccountsCredit;
                        _h.label = 7;
                    case 7:
                        if (!(_d < _e.length)) return [3 /*break*/, 10];
                        creditAccounts = _e[_d];
                        creditAccounts.JournalJId = id;
                        creditAccounts.NormalSide = 'Credit';
                        //set account type
                        for (_f = 0, _g = this.accounts; _f < _g.length; _f++) {
                            acc = _g[_f];
                            if (acc.accountName == creditAccounts.AccountName) {
                                creditAccounts.Type = acc.accountType;
                                break;
                            }
                        }
                        return [4 /*yield*/, this.journalServ.addJournalAccounts(creditAccounts).toPromise()];
                    case 8:
                        _h.sent();
                        console.log('posted credit');
                        _h.label = 9;
                    case 9:
                        _d++;
                        return [3 /*break*/, 7];
                    case 10:
                        //sending source file
                        if (this.selectedFile != null) {
                            uploadData = new FormData();
                            uploadData.append('file', this.selectedFile);
                            //uploadData.append('#journalId', JSON.stringify(id));
                            console.log('File uploaded: ' + this.selectedFile.name);
                            this.http.post(this.fileUploadURL, uploadData, httpOptions).subscribe(function (result) {
                                console.log('result');
                                _this.myInputVariable.nativeElement.value = "";
                            });
                        }
                        this.viewJournals();
                        console.log(response);
                        this.close();
                        _h.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    //create a random set of characters for reference
    JournalizeComponent.prototype.makeRandomRef = function () {
        var text = "";
        var poss = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 7; i++)
            text += poss.charAt(Math.floor(Math.random() * poss.length));
        return text;
    };
    JournalizeComponent.prototype.selectFile = function (files) {
        this.selectedFile = files.item(0);
        //console.log('selected File' + this.selectedFile.name);
    };
    //posting journal
    JournalizeComponent.prototype.approveJournal = function (journal) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, account, _b, _c, CoA_1, ledger, journaltemp;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _i = 0, _a = journal.JournalAccounts;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 15];
                        account = _a[_i];
                        _b = 0, _c = this.accounts;
                        _d.label = 2;
                    case 2:
                        if (!(_b < _c.length)) return [3 /*break*/, 14];
                        CoA_1 = _c[_b];
                        ledger = new _generalLedger__WEBPACK_IMPORTED_MODULE_5__["GeneralLedger"]();
                        if (!(account.AccountName == CoA_1.accountName)) return [3 /*break*/, 13];
                        ledger.Date = journal.Date;
                        ledger.AccountNumber = CoA_1.accountNumber;
                        ledger.AccountName = account.AccountName;
                        ledger.NormalSide = CoA_1.normalSide;
                        ledger.CreditAmount = account.CreditAmount;
                        ledger.DebitAmount = account.DebitAmount;
                        ledger.Reference = journal.Reference;
                        ledger.Description = journal.Description;
                        return [4 /*yield*/, this.ledgerServ.addLedger(ledger).toPromise()];
                    case 3:
                        _d.sent();
                        console.log('ledger entries added');
                        if (!(ledger.NormalSide == 'Debit')) return [3 /*break*/, 8];
                        if (!(ledger.DebitAmount != null)) return [3 /*break*/, 5];
                        CoA_1.currentBalance = +CoA_1.currentBalance + +ledger.DebitAmount;
                        return [4 /*yield*/, this.coaService.updateAccount(CoA_1).toPromise()];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        CoA_1.currentBalance = +CoA_1.currentBalance - +ledger.CreditAmount;
                        return [4 /*yield*/, this.coaService.updateAccount(CoA_1).toPromise()];
                    case 6:
                        _d.sent();
                        _d.label = 7;
                    case 7: return [3 /*break*/, 12];
                    case 8:
                        if (!(ledger.DebitAmount != null)) return [3 /*break*/, 10];
                        CoA_1.currentBalance = +CoA_1.currentBalance - +ledger.DebitAmount;
                        return [4 /*yield*/, this.coaService.updateAccount(CoA_1).toPromise()];
                    case 9:
                        _d.sent();
                        return [3 /*break*/, 12];
                    case 10:
                        CoA_1.currentBalance = +CoA_1.currentBalance + +ledger.CreditAmount;
                        return [4 /*yield*/, this.coaService.updateAccount(CoA_1).toPromise()];
                    case 11:
                        _d.sent();
                        _d.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        _b++;
                        return [3 /*break*/, 2];
                    case 14:
                        _i++;
                        return [3 /*break*/, 1];
                    case 15:
                        journal.acceptance = 'Approved';
                        journaltemp = new _journal__WEBPACK_IMPORTED_MODULE_3__["Journal"]();
                        journaltemp.JId = journal.JId;
                        journaltemp.acceptance = journal.acceptance;
                        journaltemp.Description = journal.Description;
                        journaltemp.Date = journal.Date;
                        journaltemp.Reference = journal.Reference;
                        journaltemp.CreatedBy = journal.CreatedBy;
                        console.log(journaltemp);
                        this.journalServ.updateJournal(journaltemp).subscribe(function (result) {
                            console.log(result);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    JournalizeComponent.prototype.declineJournal = function (journal) {
        return __awaiter(this, void 0, void 0, function () {
            var journaltemp;
            return __generator(this, function (_a) {
                journal.acceptance = 'Declined';
                journaltemp = new _journal__WEBPACK_IMPORTED_MODULE_3__["Journal"]();
                journaltemp.JId = journal.JId;
                journaltemp.acceptance = journal.acceptance;
                journaltemp.Description = journal.Description;
                journaltemp.Date = journal.Date;
                journaltemp.Reference = journal.Reference;
                journaltemp.CreatedBy = journal.CreatedBy;
                console.log(journaltemp);
                this.journalServ.updateJournal(journaltemp).subscribe(function (result) {
                    console.log(result);
                });
                return [2 /*return*/];
            });
        });
    };
    JournalizeComponent.prototype.viewLedger = function (accountName) {
        this.data.setAccount(accountName);
        this.router.navigate(['UserPage/ledger', accountName]);
    };
    JournalizeComponent.prototype.setApprovalType = function (type) {
        this.approvalType = type;
        this.viewJournalsSort('JId', 'ASC', 'all', '', this.approvalType);
    };
    JournalizeComponent.prototype.stuff = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addJournalForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"])
    ], JournalizeComponent.prototype, "journalForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('journalAccountAddTable'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"])
    ], JournalizeComponent.prototype, "accountsTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('folderInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JournalizeComponent.prototype, "myInputVariable", void 0);
    JournalizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-journalize',
            template: __webpack_require__(/*! ./journalize.component.html */ "./src/app/journalize/journalize.component.html"),
            styles: [__webpack_require__(/*! ./journalize.component.css */ "./src/app/journalize/journalize.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _services_coa_service__WEBPACK_IMPORTED_MODULE_6__["CoAService"],
            _services_journalize_service__WEBPACK_IMPORTED_MODULE_1__["JournalizeService"],
            _services_general_ledger_service__WEBPACK_IMPORTED_MODULE_2__["GeneralLedgerService"],
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_11__["SharedDataService"]])
    ], JournalizeComponent);
    return JournalizeComponent;
}());



/***/ }),

/***/ "./src/app/login-home/login-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-home/login-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#image {\r\n  background-image:url('logo.png');\r\n  background-position: center;\r\n  background-size: 200px 350px;\r\n  width: 200px;\r\n  height: 350px;\r\n\r\n}\r\n\r\n#center {\r\n  position: relative;\r\n  width: 10%;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login-home/login-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-home/login-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"center\">\r\n  <div id=\"image\">\r\n  </div>\r\n</div>\r\n\r\n<ng-container [ngSwitch]=\"toggle\">\r\n  <app-add-user-login *ngSwitchCase=\"2\"></app-add-user-login>\r\n  <app-login *ngSwitchCase=\"1\"></app-login>\r\n  <app-reset-password *ngSwitchCase=\"3\"></app-reset-password>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/login-home/login-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-home/login-home.component.ts ***!
  \****************************************************/
/*! exports provided: LoginHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomeComponent", function() { return LoginHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginHomeComponent = /** @class */ (function () {
    function LoginHomeComponent(data) {
        this.data = data;
    }
    LoginHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentToggle.subscribe(function (num) { return _this.toggle = num; });
    };
    LoginHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-home',
            template: __webpack_require__(/*! ./login-home.component.html */ "./src/app/login-home/login-home.component.html"),
            styles: [__webpack_require__(/*! ./login-home.component.css */ "./src/app/login-home/login-home.component.css")],
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], LoginHomeComponent);
    return LoginHomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    color: white;\r\n}\r\n\r\nh3{\r\n    color: white;\r\n}\r\n\r\nlabel.required { color: white; }\r\n\r\n#center {\r\n  position: relative;\r\n  width: 10%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#center2 {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\n#height {\r\n  margin-top:30px;\r\n  width: 400px\r\n}\r\n\r\n#button1{\r\n  color: white;\r\n  position:absolute;\r\n  right:6%;\r\n}\r\n\r\n#button2{\r\n  color: white;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  right: -12%;\r\n}\r\n\r\nhr{\r\n  width: 250px;\r\n  border-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #addUserForm=\"ngForm\">\r\n\r\n  <div id=\"center2\">\r\n    <div id=\"height\">\r\n      <h3>Login</h3>\r\n      <div class=\"horizontalgap\" style=\"width:250px\">\r\n        <div class=\"form-group\">\r\n          <label class='required' for=\"username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\" (ngModelChange)=\"resetError()\" placeholder=\"Username\" required [(ngModel)]=\"username\"\r\n            name=\"username\" #usernam=\"ngModel\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"usernam.valid || usernam.pristine\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Username is required\r\n      </div>\r\n\r\n\r\n      <div class=\"horizontalgap\" style=\"width:250px\">\r\n        <div class=\"form-group\">\r\n          <label class='required' for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" (ngModelChange)=\"resetError()\" placeholder=\"Password\" required [(ngModel)]=\"password\"\r\n            name=\"password\" #passw=\"ngModel\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"passw.valid || passw.pristine\" style=\"width: 250px; height: 30px\">\r\n        <label class=\"alert alert-danger\" style=\"width:250px; padding-top: 6px;\"> Password is required </label>\r\n      </div>\r\n\r\n      <p>\r\n\r\n      </p>\r\n      <div *ngIf=\"isActive == 2\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n        Account has been deactivated\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!addUserForm.form.valid\">Login</button>\r\n        <button class=\"btn btn-link\" (click)=\"toggler()\" id=\"button1\">Register</button>\r\n\r\n  </div>\r\n      <hr/>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-link\" (click)=\"toggleReset()\" id=\"button2\" >Reset Password</button>\r\n      </div>\r\n      </div>\r\n      <div [hidden]=\"notLogged\" class=\"alert alert-danger\" style=\"width: 250px;\">\r\n        Incorrect username or password\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-log.service */ "./src/app/services/user-log.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-home/login-home.component */ "./src/app/login-home/login-home.component.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, comp, logData, home, data) {
        this.router = router;
        this.loginService = loginService;
        this.comp = comp;
        this.logData = logData;
        this.home = home;
        this.data = data;
        this.notLogged = true;
        this.invalidIndicator = '';
        this.isActive = 1;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendData(this.username, this.password).subscribe(function (user) {
            _this.user = user;
            console.log('Login success, userType = ', _this.user.userName);
            if (_this.user.userId > 0) {
                _this.router.navigate(['UserPage']);
                _this.logData.create(_this.username, 'User successful login').subscribe();
                _this.comp.setSession(_this.user.userId, _this.user.userName, _this.user.userRole, _this.user.firstName, _this.user.lastName);
                _this.isActive = 1;
            }
            else if (_this.user.userId === -2) {
                _this.isActive = 2;
            }
            else {
                _this.invalidIndicator = 'Login failed';
                _this.isActive = 1;
                _this.notLogged = false;
            }
        });
    };
    // error goes away when changes are put into input
    LoginComponent.prototype.resetError = function () {
        this.isActive = 1;
    };
    LoginComponent.prototype.toggler = function () {
        this.data.changeToggle(2);
    };
    LoginComponent.prototype.toggleReset = function () {
        this.data.changeToggle(3);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_5__["LoginHomeComponent"]],
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _services_user_log_service__WEBPACK_IMPORTED_MODULE_2__["UserLogService"],
            _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_5__["LoginHomeComponent"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, label, p {\r\n  color: white;\r\n}\r\n\r\n#center {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#center2 {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#center3 {\r\n  position: relative;\r\n  width: 14%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#height {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n\r\n#height2 {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n\r\n#height3 {\r\n  margin-top:30px;\r\n  width: 250px\r\n}\r\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #addUserForm=\"ngForm\" >\r\n  <div id=\"center\" *ngIf=\"resetPage == 1\">\r\n    <div id=\"height\">\r\n  <div class=\"form-group\">\r\n    <label for=\"firstName\">Enter your username</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Username\"\r\n           required\r\n           [(ngModel)]=\"username\" name=\"firstName\" #firstName=\"ngModel\">\r\n  \r\n      <div class=\"btn-group btn-group-sm\">\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">Back</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"onContinue()\">Continue</button>\r\n      </div>\r\n  \r\n  </div>\r\n      <div *ngIf=\"usernameExist == 1\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n        Username does not exist\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"center2\" *ngIf=\"resetPage == 2\">\r\n    <div id=\"height2\">\r\n      <label >{{response.question}}</label>\r\n      <div>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"answer\"\r\n               required\r\n               [(ngModel)]=\"answer\" name=\"firstName\" #firstName=\"ngModel\">\r\n      </div>\r\n      <div class=\"btn-group btn-group-sm\">\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack2()\">Back</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"sendEmail()\">Continue</button>\r\n      </div>\r\n      <p>\r\n  \r\n      </p>\r\n      <div *ngIf=\"answerCorrect == 1\" class=\"alert alert-danger\"  style=\"width: 250px;\">\r\n        Incorrect answer\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <div id=\"center3\" *ngIf=\"resetPage == 3\">\r\n      <div id=\"height3\">\r\n        <label>An email has been sent to {{emailResult}}!</label>\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">Continue</button>\r\n      </div>\r\n    </div>\r\n  \r\n  </form>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(loginService, data) {
        this.loginService = loginService;
        this.data = data;
        this.resetPage = 1;
        this.usernameExist = 0;
        this.answerCorrect = 0;
        this.emailResult = '';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.onContinue = function () {
        var _this = this;
        this.loginService.resetPasswordSend(this.username).subscribe(function (response) {
            _this.response = response;
            _this.username2 = _this.username;
            if (_this.response.exists === 0) {
                _this.usernameExist = 1;
                console.log('error');
            }
            else {
                _this.resetPage = 2;
                console.log('enable button');
            }
        });
    };
    ResetPasswordComponent.prototype.sendEmail = function () {
        var _this = this;
        this.loginService.sendEmail(this.username).subscribe(function (response) {
            console.log(response);
            _this.emailResult = response;
            _this.resetPage = 3;
        });
    };
    ResetPasswordComponent.prototype.onContinue2 = function () {
        if (this.answer !== this.response.answer) {
            this.answerCorrect = 1;
        }
        else {
            console.log("password accepted");
        }
    };
    ResetPasswordComponent.prototype.goBack = function () {
        this.data.changeToggle(1);
    };
    ResetPasswordComponent.prototype.goBack2 = function () {
        this.resetPage = 1;
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/services/coa.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/coa.service.ts ***!
  \*****************************************/
/*! exports provided: CoAService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoAService", function() { return CoAService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
};
var CoAService = /** @class */ (function () {
    function CoAService(http) {
        this.http = http;
        this.coaUrl = 'http://localhost:8080/api/chartOfAccounts'; // URL to web api
        this.findAccountNameUrl = 'http://localhost:8080/api/chartOfAccounts/account';
        this.chartSortUrl = 'http://localhost:8080/api/chartSort';
        this.nameCheckUrl = 'http://localhost:8080/api/accountNameCheck';
        this.numberCheckUrl = 'http://localhost:8080/api/accountNumberCheck';
        this.getByNameUrl = 'http://localhost:8080/api/getAccountByName';
    }
    CoAService.prototype.findAll = function () {
        return this.http.get(this.coaUrl, httpOptions);
    };
    CoAService.prototype.findAllSort = function (column, direction, columnSearch, criteria) {
        return this.http.post(this.chartSortUrl, { column: column, direction: direction, columnSearch: columnSearch,
            criteria: criteria }, httpOptions);
    };
    CoAService.prototype.addAccount = function (coa) {
        return this.http.post(this.coaUrl, coa, httpOptions);
    };
    CoAService.prototype.getAccount = function (account) {
        return this.http.get(this.coaUrl + "/" + account, httpOptions);
    };
    CoAService.prototype.getByName = function (accountName) {
        return this.http.post(this.getByNameUrl, { accountName: accountName }, httpOptions);
    };
    CoAService.prototype.updateAccount = function (account) {
        var body = JSON.stringify(account);
        return this.http.put(this.coaUrl, body, httpOptions);
    };
    CoAService.prototype.compareAccountName = function (accountName) {
        return this.http.post(this.nameCheckUrl, { accountName: accountName }, httpOptions);
    };
    CoAService.prototype.compareAccountNumber = function (accountNumber) {
        return this.http.post(this.numberCheckUrl, { accountNumber: accountNumber }, httpOptions);
    };
    CoAService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoAService);
    return CoAService;
}());



/***/ }),

/***/ "./src/app/services/general-ledger.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/general-ledger.service.ts ***!
  \****************************************************/
/*! exports provided: GeneralLedgerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLedgerService", function() { return GeneralLedgerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
};
var GeneralLedgerService = /** @class */ (function () {
    function GeneralLedgerService(http) {
        this.http = http;
        this.ledgerURL = 'http://localhost:8080/api/generalLedger';
    }
    GeneralLedgerService.prototype.findAll = function () {
        return this.http.get(this.ledgerURL, httpOptions);
    };
    GeneralLedgerService.prototype.addLedger = function (ledger) {
        return this.http.post(this.ledgerURL, ledger, httpOptions);
    };
    GeneralLedgerService.prototype.getLedger = function (id) {
        return this.http.get(this.ledgerURL + "/" + id, httpOptions);
    };
    GeneralLedgerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeneralLedgerService);
    return GeneralLedgerService;
}());



/***/ }),

/***/ "./src/app/services/journalize.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/journalize.service.ts ***!
  \************************************************/
/*! exports provided: JournalizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalizeService", function() { return JournalizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
};
var JournalizeService = /** @class */ (function () {
    //'/api/journal'
    //'/api/journalAccount'
    function JournalizeService(http) {
        this.http = http;
        this.journalUrl = 'http://localhost:8080/api/journal';
        this.journalSort = 'http://localhost:8080/api/journalSort';
        this.journalAccountUrl = 'http://localhost:8080/api/journalAccount';
    }
    //operations for Journal
    JournalizeService.prototype.findAll = function () {
        return this.http.get(this.journalUrl, httpOptions);
    };
    JournalizeService.prototype.findAllSort = function (column, direction, columnSearch, criteria, approvalType) {
        return this.http.post(this.journalSort, { column: column, direction: direction, columnSearch: columnSearch,
            criteria: criteria, approvalType: approvalType }, httpOptions);
    };
    JournalizeService.prototype.getJournal = function (id) {
        return this.http.get(this.journalUrl + "/" + id, httpOptions);
    };
    JournalizeService.prototype.addJournal = function (journal) {
        return this.http.post(this.journalUrl, journal, httpOptions);
    };
    JournalizeService.prototype.updateJournal = function (journal) {
        var body = JSON.stringify(journal);
        return this.http.put(this.journalUrl, body, httpOptions);
    };
    JournalizeService.prototype.findAllAccounts = function () {
        return this.http.get(this.journalAccountUrl, httpOptions);
    };
    JournalizeService.prototype.getJournaAccountsl = function (id) {
        return this.http.get(this.journalAccountUrl + "/" + id, httpOptions);
    };
    JournalizeService.prototype.addJournalAccounts = function (journalAccount) {
        return this.http.post(this.journalAccountUrl, journalAccount, httpOptions);
    };
    JournalizeService.prototype.updateJournalAccounts = function (journalAccount) {
        var body = JSON.stringify(journalAccount);
        return this.http.put(this.journalAccountUrl, body, httpOptions);
    };
    JournalizeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JournalizeService);
    return JournalizeService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.customersUrl = 'http://localhost:8080/api/users';
        this.resetURL = 'http://localhost:8080/api/resetPassword';
        this.emailURL = 'http://localhost:8080/api/emailSend';
        this.loginUrl = 'http://localhost:8080/api/loginVerify';
        this.sessionURL = 'http://localhost:8080/api/checkSession';
    }
    LoginService.prototype.sendData = function (username, password) {
        return this.http.post(this.loginUrl, { userName: username, userPassword: password }, httpOptions);
    };
    LoginService.prototype.resetPasswordSend = function (username) {
        return this.http.post(this.resetURL, { username: username }, httpOptions);
    };
    LoginService.prototype.sendEmail = function (username) {
        return this.http.post(this.emailURL, { userName: username }, httpOptions);
    };
    LoginService.prototype.getSession = function () {
        return this.http.get(this.sessionURL, httpOptions);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/shared-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shared-data.service.ts ***!
  \*************************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedDataService = /** @class */ (function () {
    function SharedDataService() {
        this.loginToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this.currentToggle = this.loginToggle.asObservable();
        this.accountName = '';
        this.accountRef = '';
    }
    SharedDataService.prototype.changeToggle = function (num) {
        this.loginToggle.next(num);
    };
    SharedDataService.prototype.setAccount = function (account) {
        this.accountName = account;
    };
    SharedDataService.prototype.getAccount = function () {
        return this.accountName;
    };
    SharedDataService.prototype.setReference = function (ref) {
        this.accountRef = ref;
    };
    SharedDataService.prototype.getReference = function () {
        return this.accountRef;
    };
    SharedDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "./src/app/services/user-log.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/user-log.service.ts ***!
  \**********************************************/
/*! exports provided: UserLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogService", function() { return UserLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
};
var UserLogService = /** @class */ (function () {
    function UserLogService(http) {
        this.http = http;
        this.log = 'http://localhost:8080/api/log';
    }
    UserLogService.prototype.create = function (username, actionType) {
        return this.http.post(this.log, { userName: username, actionType: actionType }, httpOptions);
    };
    UserLogService.prototype.findAll = function () {
        return this.http.get(this.log, httpOptions);
    };
    UserLogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserLogService);
    return UserLogService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:8080/api/users'; // URL to web api
        this.usersSortUrl = 'http://localhost:8080/api/usersSort';
        this.compareUserNameURL = 'http://localhost:8080/api/userNameCheck';
        this.compareEmailURL = 'http://localhost:8080/api/passwordCheck';
        this.getActiveURL = 'http://localhost:8080/api/getActive';
    }
    UserService.prototype.findAll = function () {
        return this.http.get(this.usersUrl, httpOptions);
    };
    UserService.prototype.findAllSort = function (column, direction, columnSearch, criteria) {
        return this.http.post(this.usersSortUrl, { column: column, direction: direction, columnSearch: columnSearch,
            criteria: criteria }, httpOptions);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl);
    };
    // getUser(userId: number): Observable<User> {
    //   const url = `${this.usersUrl}/${userId}`;
    //   return this.http.get<User>(url);
    // }
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.usersUrl + "/" + id, httpOptions);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.usersUrl, user, httpOptions);
    };
    UserService.prototype.deleteUser = function (user) {
        var userId = typeof user === 'number' ? user : user.userId;
        var url = this.usersUrl + "/" + userId;
        return this.http.delete(url, httpOptions);
    };
    UserService.prototype.updateUser = function (user) {
        var body = JSON.stringify(user);
        return this.http.put(this.usersUrl, body, httpOptions);
    };
    UserService.prototype.compareUsername = function (username) {
        return this.http.post(this.compareUserNameURL, { username: username }, httpOptions);
    };
    UserService.prototype.compareEmail = function (email) {
        return this.http.post(this.compareEmailURL, { email: email }, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/trial-balance/trial-balance.component.css":
/*!***********************************************************!*\
  !*** ./src/app/trial-balance/trial-balance.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\n#ledgerTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/trial-balance/trial-balance.component.html":
/*!************************************************************!*\
  !*** ./src/app/trial-balance/trial-balance.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" style=\"margin: auto; width: 50%;\">\r\n  <table id=\"ledgerTable\" style=\" table-layout:fixed\">\r\n    <tr>\r\n      <th colspan=\"4\" class=\"col-xs-1 text-center\">Trial Balance</th>\r\n    <tr>\r\n    <tr>\r\n      <th >Title of Account</th>\r\n      <th >Account Number</th>\r\n      <th >Debit Balance</th>\r\n      <th >Credit Balance</th>\r\n    </tr>\r\n    <tr *ngFor=\"let account of accountsArranged\">\r\n      <td>{{ account.accountName }}</td>\r\n      <td>{{ account.accountNumber }}</td>\r\n      <td *ngIf=\"account.normalSide == 'Debit'\" style=\"text-align: right;\">{{ account.currentBalance | number : '1.2-2'}}</td>\r\n      <td *ngIf=\"account.normalSide == 'Debit'\" style=\"text-align: right;\">&nbsp;</td>\r\n      <td *ngIf=\"account.normalSide == 'Credit'\" style=\"text-align: right;\">&nbsp;</td>\r\n      <td *ngIf=\"account.normalSide == 'Credit'\" style=\"text-align: right;\">{{ account.currentBalance | number : '1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th ></th>\r\n      <th ></th>\r\n      <th style=\"text-align: right;\">{{debitTotal | number : '1.2-2'}}</th>\r\n      <th style=\"text-align: right;\">{{creditTotal | number : '1.2-2'}}</th>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trial-balance/trial-balance.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trial-balance/trial-balance.component.ts ***!
  \**********************************************************/
/*! exports provided: TrialBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialBalanceComponent", function() { return TrialBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/coa.service */ "./src/app/services/coa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var TrialBalanceComponent = /** @class */ (function () {
    function TrialBalanceComponent(cserv) {
        this.cserv = cserv;
        this.accounts = [];
        this.accountsArranged = [];
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.assetslist = [];
        this.liabilitiesList = [];
        this.equitList = [];
        this.revenueList = [];
        this.expensesList = [];
    }
    TrialBalanceComponent.prototype.ngOnInit = function () {
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.viewAccounts();
        console.log('hello');
    };
    TrialBalanceComponent.prototype.viewAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _i, _a, acc, _b, _c, asset, _d, _e, liability, _f, _g, equity, _h, _j, revenue, _k, _l, expense;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, this.cserv.findAllSort('caId', 'ASC', 'All', null).toPromise()];
                    case 1:
                        result = _m.sent();
                        this.accounts = result;
                        //arranging accounts by type
                        for (_i = 0, _a = this.accounts; _i < _a.length; _i++) {
                            acc = _a[_i];
                            if (acc.accountType == 'Assets') {
                                this.assetslist.push(acc);
                            }
                            else if (acc.accountType == 'Liability') {
                                this.liabilitiesList.push(acc);
                            }
                            else if (acc.accountType == 'Equity') {
                                this.equitList.push(acc);
                            }
                            else if (acc.accountType == 'Revenue') {
                                this.revenueList.push(acc);
                            }
                            else {
                                this.expensesList.push(acc);
                            }
                        }
                        //put arranged lists into one list
                        for (_b = 0, _c = this.assetslist; _b < _c.length; _b++) {
                            asset = _c[_b];
                            this.accountsArranged.push(asset);
                        }
                        for (_d = 0, _e = this.liabilitiesList; _d < _e.length; _d++) {
                            liability = _e[_d];
                            this.accountsArranged.push(liability);
                        }
                        for (_f = 0, _g = this.equitList; _f < _g.length; _f++) {
                            equity = _g[_f];
                            this.accountsArranged.push(equity);
                        }
                        for (_h = 0, _j = this.revenueList; _h < _j.length; _h++) {
                            revenue = _j[_h];
                            this.accountsArranged.push(revenue);
                        }
                        for (_k = 0, _l = this.expensesList; _k < _l.length; _k++) {
                            expense = _l[_k];
                            this.accountsArranged.push(expense);
                        }
                        this.totalDebit();
                        this.totalCredit();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrialBalanceComponent.prototype.totalDebit = function () {
        for (var _i = 0, _a = this.accountsArranged; _i < _a.length; _i++) {
            var acc = _a[_i];
            console.log(acc.currentBalance);
            if (acc.normalSide == 'Debit') {
                this.debitTotal = +this.debitTotal + +acc.currentBalance;
            }
        }
    };
    TrialBalanceComponent.prototype.totalCredit = function () {
        for (var _i = 0, _a = this.accountsArranged; _i < _a.length; _i++) {
            var acc = _a[_i];
            console.log(acc.currentBalance);
            if (acc.normalSide == 'Credit') {
                this.creditTotal = +this.creditTotal + +acc.currentBalance;
            }
        }
    };
    TrialBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trial-balance',
            template: __webpack_require__(/*! ./trial-balance.component.html */ "./src/app/trial-balance/trial-balance.component.html"),
            styles: [__webpack_require__(/*! ./trial-balance.component.css */ "./src/app/trial-balance/trial-balance.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coa_service__WEBPACK_IMPORTED_MODULE_1__["CoAService"]])
    ], TrialBalanceComponent);
    return TrialBalanceComponent;
}());



/***/ }),

/***/ "./src/app/user-log/user-log.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-log/user-log.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, label, p {\r\n  color: white;\r\n}\r\ntd, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\ntable, h3, h2, td {\r\n  color: white;\r\n}\r\n#logTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 40%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-log/user-log.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-log/user-log.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div>\r\n  <table id=\"logTable\">\r\n    <tr>\r\n      <th>Username</th>\r\n      <th>Action Type</th>\r\n      <th></th>\r\n      <th>Time</th>\r\n    <tr *ngFor=\"let log of logs\">\r\n      <td>{{ log.userName }}</td>\r\n      <td>{{ log.actionType }}</td>\r\n      <td></td>\r\n      <td>{{ log.createdAt | date: 'MM/dd/yyyy  HH:mm:ss'}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-log/user-log.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-log/user-log.component.ts ***!
  \************************************************/
/*! exports provided: UserLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogComponent", function() { return UserLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-log.service */ "./src/app/services/user-log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLogComponent = /** @class */ (function () {
    function UserLogComponent(logData) {
        this.logData = logData;
        this.logs = [];
    }
    UserLogComponent.prototype.ngOnInit = function () {
        this.onLog();
    };
    UserLogComponent.prototype.onLog = function () {
        var _this = this;
        this.logData.findAll().subscribe(function (userLog) {
            _this.logs = userLog;
        });
    };
    UserLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-log',
            template: __webpack_require__(/*! ./user-log.component.html */ "./src/app/user-log/user-log.component.html"),
            styles: [__webpack_require__(/*! ./user-log.component.css */ "./src/app/user-log/user-log.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_log_service__WEBPACK_IMPORTED_MODULE_1__["UserLogService"]])
    ], UserLogComponent);
    return UserLogComponent;
}());



/***/ }),

/***/ "./src/app/user-page/user-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-page/user-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\r\n  border: 1px solid #6e7d93;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #6e7d93;\r\n}\r\n\r\ntable, h3, h2, td {\r\n    color: white;\r\n}\r\n\r\n#accountTable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 200px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #161616;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n  float: left;\r\n}\r\n\r\n.right{\r\n  margin-left: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-page/user-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-page/user-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form #adminForm=\"ngForm\">\r\n  <div>\r\n  <div class=\"sidenav\">\r\n    <div class = \"container-fluid\">\r\n      <h2> {{indicator}} </h2>\r\n      <div>\r\n      <button class=\"btn btn-link\" (click)=\"viewHome()\" id=\"button0\" >Home </button>\r\n      </div>\r\n      <button class=\"btn btn-link\" (click)=\"viewUserList()\" id=\"button1\" *ngIf=\"access == 1 || access == 2\">User list</button>\r\n      <button class=\"btn btn-link\" (click)=\"viewLog()\" id=\"button2\" *ngIf=\"access == 1\">User log</button>\r\n      <button class=\"btn btn-link\" (click)=\"viewCoA()\" id=\"button3\" >Chart of accounts</button>\r\n      <!--Admin can access the journal just for testing purposes -->\r\n      <button class=\"btn btn-link\" (click)=\"viewJournal()\" id=\"button4\" *ngIf=\"access == 3 || access == 2\" >Journal</button>\r\n      <button class=\"btn btn-link\" (click)=\"viewGLedger()\" id=\"button6\" *ngIf=\"access == 3 || access == 2\">General Ledger</button>\r\n      <button class=\"btn btn-link\" (click)=\"viewTrialBalance()\" id=\"button7\" *ngIf=\"access == 3 || access == 2\">Trial Balance</button>\r\n      <button class=\"btn btn-link\" (click)=\"logOut()\" id=\"button5\" >Log out</button>\r\n\r\n    </div>\r\n  </div>\r\n    <div class=\"right\">\r\n      <router-outlet></router-outlet>\r\n      <!--\r\n      <ng-container [ngSwitch]=\"currentpage\">\r\n        <app-home-screen *ngSwitchCase=\"0\"></app-home-screen>\r\n        <app-chart-of-accounts *ngSwitchCase=\"1\"></app-chart-of-accounts>\r\n        <app-add-user *ngSwitchCase=\"2\"></app-add-user>\r\n        <app-user-log *ngSwitchCase=\"3\"></app-user-log>\r\n        </ng-container>\r\n        -->\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/user-page/user-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-page/user-page.component.ts ***!
  \**************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_user_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-log.service */ "./src/app/services/user-log.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(router, loginService, comp, logData, userData) {
        this.router = router;
        this.loginService = loginService;
        this.comp = comp;
        this.logData = logData;
        this.userData = userData;
        this.indicator = '';
        this.access = 1;
        this.logs = [];
        this.currentpage = 0;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.onOpened();
    };
    UserPageComponent.prototype.onOpened = function () {
        this.indicator = this.comp.getUserName();
        if (this.comp.getRole() === 'admin') {
            this.access = 1;
        }
        else if (this.comp.getRole() === 'manager') {
            this.access = 2;
        }
        else {
            this.access = 3;
        }
    };
    UserPageComponent.prototype.logOut = function () {
        this.logData.create(this.comp.getUserName(), 'User Logout').subscribe();
        this.comp.delSession();
        this.router.navigate(['loginHome']);
    };
    UserPageComponent.prototype.viewCoA = function () {
        this.router.navigate(['UserPage/chartOfAccounts']);
    };
    UserPageComponent.prototype.viewUserList = function () {
        this.router.navigate(['UserPage/userList']);
    };
    UserPageComponent.prototype.viewLog = function () {
        this.router.navigate(['UserPage/userLogs']);
    };
    UserPageComponent.prototype.viewHome = function () {
        this.router.navigate(['UserPage/home']);
    };
    UserPageComponent.prototype.viewJournal = function () {
        this.router.navigate(['UserPage/journal']);
    };
    UserPageComponent.prototype.viewGLedger = function () {
        this.router.navigate(['UserPage/generalLedger']);
    };
    UserPageComponent.prototype.viewTrialBalance = function () {
        this.router.navigate(['UserPage/trial-balance']);
    };
    UserPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user-page/user-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_user_log_service__WEBPACK_IMPORTED_MODULE_4__["UserLogService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tyler\Documents\GitHub\assesspool\F18-SAD\sarif\client2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map