webpackJsonp([2],{

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/frontpage/frontpage.module": [
		355,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnrollPage = (function () {
    function EnrollPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EnrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enroll',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\enroll\enroll.html"*/'<ion-header>\n  <ion-navbar>\n   \n    <ion-title class="hme_clss">Enroll Form</ion-title>\n<ion-buttons end>\n\n    <button class="stl_btn">\n     \n         <ion-icon name="mail" class="set_env"></ion-icon>\n    </button>\n\n</ion-buttons>\n\n \n  </ion-navbar>\n\n  <ion-toolbar class="sub_sttl">\n    <ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <h3 class="stn_dttl">Child details</h3>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="width: 100%; float: left; background-image: url(../assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n\n<ion-list>\n  <div class="cvr_rds">\n  <ion-item>\n    <ion-label fixed class="lft_nmme">Name*</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="komal"></ion-input>\n  </ion-item>\n\n    <ion-item>\n    <ion-label fixed class="lft_nmme">DOB*</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="24/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Gender</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="Female"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Level*</ion-label>\n      <ion-icon item-end name="star"></ion-icon>\n    <ion-input class="rght_nmme" type="text" value=""></ion-input>\n  </ion-item>\n\n    <ion-item>\n      <ion-label fixed class="lft_nmme">Username*</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="Admin"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Password*</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="Admin"></ion-input>\n    \n  </ion-item>\n\n<div class="frm_fl">\n      <label class="chse_clk">\n    or choose two red icon.\n    </label>\n    <div class="cvr_dummy">\n    <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adventure_id">\n<label for="adventure_id" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-car" md="md-car"></ion-icon></label>\n    </div>\n\n    <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adventure">\n<label for="adventure" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-beer" md="md-beer"></ion-icon></label>\n    </div>\n\n    <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adventur">\n<label for="adventur" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-cloud" md="md-cloud"></ion-icon></label>\n    </div>\n\n    <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adventu">\n<label for="adventu" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-lock" md="md-lock"></ion-icon></label>\n    </div>\n\n    <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="advent">\n<label for="advent" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-home" md="md-home"></ion-icon></label>\n    </div>\n\n    <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adven">\n<label for="adven" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-phone-portrait" md="md-phone-portrait"></ion-icon></label>\n    </div>\n<div class="spacer"></div>\n\n     <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adve">\n<label for="adve" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-restaurant" md="md-restaurant"></ion-icon></label>\n    </div>\n\n <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="adv">\n<label for="adv" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-checkmark" md="md-checkmark"></ion-icon></label>\n    </div>\n\n  <div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="ad">\n<label for="ad" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-star" md="md-star"></ion-icon></label>\n    </div>\n\n<div class="dummy" >\n  <input type="checkbox" name="genres" value="adventure" id="a">\n<label for="a" style="font-family: \'SExtralight\'; font-size:14px;"> <ion-icon class="con_sml" ios="md-close" md="md-close"></ion-icon></label>\n    </div>\n<div class="spacer"></div>\n    </div>\n</div>\n\n <ion-item>\n    <h3 class="lft_nmme" item-start>Upload Image</h3>\n    <div class="rght_nmme" item-end>\n      <div class="fileUpload strgt_fmml">\n        <span><img class="upld_gns" src="../assets/images/upld_fll.png"></span>\n        <input type="file" class="upload" />\n      </div>\n    </div>\n</ion-item>\n\n <div class="brdr_byy">\n    <div class="chose_onn" item-start>\n    <h3>or Choose One</h3>\n    </div>\n\n<div class="chose_boy" item-end>\n    <ion-grid>\n  <ion-row>\n    <ion-col col-2 style="padding: 5px 1px;">\n      <div class="pic_mdl active">\n        <img src="../assets/images/pro_pc.png">\n      </div>\n    </ion-col>\n\n    <ion-col col-2 style="padding: 5px 1px;">\n      <div class="pic_mdl">\n        <img src="../assets/images/pro_pc.png">\n      </div>\n    </ion-col>\n\n    <ion-col col-2 style="padding: 5px 1px;">\n      <div class="pic_mdl">\n        <img src="../assets/images/pro_pc.png">\n      </div>\n    </ion-col>\n\n    <ion-col col-2 style="padding: 5px 1px;">\n      <div class="pic_mdl">\n        <img src="../assets/images/pro_pc.png">\n      </div>\n    </ion-col>\n\n    <ion-col col-2 style="padding: 5px 1px;">\n      <div class="pic_mdl">\n        <img src="../assets/images/pro_pc.png">\n      </div>\n    </ion-col>\n\n    <ion-col col-2 style="padding: 5px 1px;">\n      <div class="pic_mdl">\n        <img src="../assets/images/pro_pc.png">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n\n</div>\n  </div>\n    <button ion-button block class="sbnt_btn">Submit</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\enroll\enroll.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], EnrollPage);
    return EnrollPage;
}());

//# sourceMappingURL=enroll.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPage = (function () {
    function ForgotPage(navCtrl, common, http, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
    }
    ForgotPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.ForgotForm = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
        });
    };
    ForgotPage.prototype.isValid = function (field) {
        var formField = this.ForgotForm.get(field);
        return formField.valid || formField.pristine;
    };
    ForgotPage.prototype.Signin = function (Signindata) {
        var _this = this;
        console.log(Signindata.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            var options = this.common.headers();
            //      this.uniqueDeviceID.get().then((uuid: any) => {
            //  console.log(uuid)
            var postdata = {
                username: Signindata.value.username,
            };
            this.http.post(this.common.Url + 'parent_login.php', postdata, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.success == true) {
                    //localStorage.setItem('CurrentUser',JSON.stringify(response.userinfo));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.common.presentAlert('Login', response.message);
                }
            });
            // }).catch((error: any) => console.log(error));
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\forgot\forgot.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Forgot password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="width: 100%; height:100%; float: left; background-image: url(assets/images/bg_splash.jpg); background-attachment: fixed; background-size: cover;" padding="">\n<div class="backgrnd_clss">\n  <div class="upt_bg">\n    <div class="logo_pc">\n    <img src="assets/images/logo.png">\n    </div>\n\n  <ion-list>\n    <form [formGroup]="ForgotForm">\n      <ion-list>\n\n          <ion-item class="regs_prnt">\n                   <ion-input type="email" placeholder="Username" formControlName="username"></ion-input>\n                   <ion-icon name="contact" item-left></ion-icon>\n               </ion-item>\n               <p *ngIf="!isValid(\'username\')" color="danger" padding-left>Invalid username.</p>\n       </ion-list>\n          <button ion-button block class="sbnt_btn" [disabled]="!ForgotForm.valid" (click)=\'Signin(ForgotForm)\'>Continue</button>\n  </form>\n</ion-list>\n</div></div></ion-content>\n \n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\forgot\forgot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpalshPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_slider__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpalshPage = (function () {
    function SpalshPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SpalshPage.prototype.slider_lnk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__slider_slider__["a" /* SliderPage */]);
    };
    SpalshPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-spalsh',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\spalsh\spalsh.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content style="width: 100%; height:100%; float: left; background-image: url(assets/images/bg_splash.jpg); background-attachment: fixed; background-size: cover; position:relative;">\n  <div class="upt_bg">\n    <div class="logo_pc" (click)=\'slider_lnk()\'>\n    <img src="assets/images/logo.png">\n    </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\spalsh\spalsh.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SpalshPage);
    return SpalshPage;
}());

//# sourceMappingURL=spalsh.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderPage = (function () {
    function SliderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SliderPage.prototype.sgn_lnk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\slider\slider.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content>\n<ion-slides pager>\n\n  <ion-slide style="background-image: url(assets/imgs/s1.jpg); background-size: cover;" (click)=\'sgn_lnk()\'>\n  </ion-slide>\n\n  <ion-slide style="background-image: url(assets/imgs/s2.jpg); background-size: cover;" (click)=\'sgn_lnk()\'>\n  </ion-slide>\n\n  <ion-slide style="background-image: url(assets/imgs/slider.jpg); background-size: cover;" (click)=\'sgn_lnk()\'>\n\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\slider\slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusPage = (function () {
    function AboutusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\aboutus\aboutus.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">About Us</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n <div class="about_cntnt">\n   <h3>Welcome to Tutway, a unique platform where learning is fun.</h3>\n   <p>Now there is no distinction between kids fun time and study time... \n    Say goodbye to the days of cramming those dull and ponderous books which made learning a tedious task. At Tutway, we believe in a very simple idea, that audio-visual learning is the most effective tool for learning. Many researchers have proven that kids learn a lot by playing the interactive games and watching audio-visual animated lessons as compared to reading from books. To learn the new concepts, Kids show more interest in adopting unique ways of learning. We have brought programme that not only covers the important concepts but also makes learning more stable that stimulates the critical thinking of the young learners. \n    \n    Let\'s break away from our perception that adopting new learning concepts is difficult and challenging. You will find out our website very user-friendly and an interactive mode of gaining knowledge. Even kids can access the content without constant parental supervision. \n    \n    The human race has come a long way from where it started in terms of the technological advancements. Every new invention once seemed impossibility. Have you ever realized that technology has changed a lot in last century?... \n    Imagine a phone 100 years ago... And that\'s it turns up now... \n    Imagine railways 100 years ago... And that\'s these look like now... \n    Imagine an airplane 100 years ago and that\'s it looks like now... \n    Imagine a class room 100 years ago... And that\'s it appears now... \n    \n    But shockingly, classrooms have not changed much. We still rely on rote learning and have those classrooms where all the students are expected to learn together irrespective of their different aptitudes and learning abilities. Consequently, they forget most of the concepts after some time and the root cause is to cram the bookish language. That\'s when Tutway comes to the rescue. It is a supplementary education programme, where kids can learn at their own pace. The students can watch animated videos, which are so meticulously made that they can understand even the most complex concepts very easily. There is a question bank at the end of each video where they can answer those questions multiple times and test whether they have received the knowledge optimally or not. It\'s fun and rewarding at the same time. And to encourage the students to learn we have a policy of \'The more you learn, the more you earn\'. Under this policy, when you learn more and get good marks in the quizzes, you will be rewarded with stars, which can be spent by kids on buying toys or even movie tickets right from the Tutway website. Moreover, with information systems embedded in the programme, parents can monitor real time performance of their kids and get up-to-date information about their performance including quizzes attempted and marks scored in each quiz, both in tabular and graphical formats. Regular reports are e-mailed to parents so that the parents can analyze their kids\' performance. \n    \n    We all know that in order to build a building we need a strong solid foundation. Similarly, if we want to understand high-level concepts, we should have a clear understanding of basic concepts. \n    \n    For instance, if kids don\'t know about addition and subtraction, they cannot do multiplication; and if they don\'t know about multiplication, they cannot do division. And if they don\'t have the knowledge of these four basic operations, algebra cannot be done by them; and it goes on and on. \n    \n    Same applies to English language. If kids don\'t have sound knowledge of grammar and vocabulary, it becomes extremely difficult for them to have good communication skills. \n    \n    Knowledge of the scientific concepts is also required for observing physical, chemical and biological phenomena\'s all around us. \n    \n    That\'s why, Tutway has hundreds of animated videos on Maths, English, and Science to clear the core basics of these subjects. It perfectly suits most of the educational needs of most of the students regardless of their learning ability. \n    \n    So hurry up, click the button below to book a free demo class and let\'s make education an interactive and fun experience.</p>\n </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\aboutus\aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactusPage = (function () {
    function ContactusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\contactus\contactus.html"*/'<!-- <ion-header>\n  <ion-navbar>\n   \n    <ion-title class="hme_clss">Contact Us</ion-title>\n<ion-buttons end>\n\n    <button class="stl_btn">\n     \n         <ion-icon name="mail" class="set_env"></ion-icon>\n    </button>\n\n</ion-buttons>\n\n \n  </ion-navbar>\n\n <ion-toolbar class="sub_sttl">\n    <ion-grid>\n  <ion-row>\n    <ion-col col-6>\n      <h3 class="stn_dttl">Student details</h3>\n    </ion-col>\n\n    <ion-col col-6>\n      <div class="clos_vddo">\n       <span class="nnm_meeta">komal</span>\n     <div class="dtt_pc">\n      <img src="assets/images/pro_pc.png">\n       </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Contact us</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n<!-- \n<ion-list>\n  <div class="cvr_rds">\n  <ion-item>\n    <ion-label fixed class="lft_nmme">From Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="22/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n    <ion-label fixed class="lft_nmme">To Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="24/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Week:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="week1"></ion-input>\n  </ion-item>\n  </div>\n    <button ion-button block class="sbnt_btn">Search</button>\n</ion-list>\n\n<div class="graph_calculate">\n  <img src="../assets/images/avg_graph.jpg">\n  <h4>Collective Week Wise Average Marks</h4>\n</div>\n\n<div class="graph_calculate">\n  <img src="../assets/images/avg_graph1.jpg">\n  <h4>Collective Week Wise Average Marks</h4>\n</div>\n\n<div class="ttl_lgn">\n\n<ion-list>\n      <h4>Quiz Wise Marks and Time Spent Detail</h4>\n  <div class="cvr_tme">\n\n      <ion-item>\n    <h3 item-start class="shw_tbleft">Week</h3>\n    <h3 item-end class="shw_tblrght">Week1</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Subject</h3>\n    <h3 item-end class="shw_tblrght">Science</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Video</h3>\n    <h3 item-end class="shw_tblrght">Body Parts</h3>\n  </ion-item>\n\n    <ion-item>\n    <h3 item-start class="shw_tbleft">Quiz</h3>\n    <h3 item-end class="shw_tblrght">quiz</h3>\n  </ion-item>\n\n    <ion-item>\n    <h3 item-start class="shw_tbleft">Total Correct Questions</h3>\n    <h3 item-end class="shw_tblrght">10/0</h3>\n  </ion-item>\n\n   <ion-item>\n    <h3 item-start class="shw_tbleft">Score</h3>\n    <h3 item-end class="shw_tblrght">0%</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Star</h3>\n    <h3 item-end class="shw_tblrght">\n<ion-icon item-end name="star"></ion-icon>\n    </h3>\n  </ion-item>\n\n   <ion-item>\n    <h3 item-start class="shw_tbleft">Grade</h3>\n    <h3 item-end class="shw_tblrght">f</h3>\n  </ion-item>\n\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Watch Start</h3>\n    <div item-end class="shw_tblrght">\n      <h3>jan 27, 2018</h3>\n       <span>09:34 PM</span>\n    </div>\n  </ion-item>\n\n           <ion-item>\n    <h3 item-start class="shw_tbleft">Watch End</h3>\n    <div item-end class="shw_tblrght">\n      <h3>jan 27, 2018</h3>\n       <span>10:34 PM</span>\n    </div>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Spend Time</h3>\n    <h3 item-end class="shw_tblrght">00:06:00</h3>\n  </ion-item>\n\n  </div>\n</ion-list> \n\n</div>-->\n<iframe class="img_border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.487039063634!2d-79.63916838450409!3d43.59639987912323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47252e6db4df%3A0xe810ebe3a47d6419!2s2+Robert+Speck+Pkwy+%23750%2C+Mississauga%2C+ON+L4Z+1H8%2C+Canada!5e0!3m2!1sen!2sin!4v1500530323961" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n<div class="about_cntnt">\n  <h3>Tutway Head Office</h3>\n  <p>2 Robert Speck Pkwy Suite 750,<br>\n    Mississauga, ON L4Z 1H8, Canada<br>\n    Local Contact No : 416-525-8411<br>\n    Toll Free : 1-866-485-1166<br>\n    Email: support@tutway.com</p>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\contactus\contactus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\changepassword\changepassword.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Change Password</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n<ion-list>\n  <div class="cvr_rds">\n  <ion-item>\n    <ion-label fixed class="lft_nmme">Old Password</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="*******"></ion-input>\n  </ion-item>\n\n    <ion-item>\n    <ion-label fixed class="lft_nmme">New Password</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="********"></ion-input>\n  </ion-item>\n     <ion-item>\n    <ion-label fixed class="lft_nmme">Confirm Password</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="********"></ion-input>\n  </ion-item>\n  </div>\n     <button ion-button block class="sbnt_btn">Submit</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\changepassword\changepassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\terms\terms.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Terms and Condition</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n <div class="about_cntnt">\n   <!-- <h3>welcome to tutway, a unique platform where learning is platform.</h3> -->\n   <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> -->\n   <pdf-viewer src=\'https://www.tutway.com/files/website-terms-conditions.pdf\' [zoom]="0.5" [render-text]="true"\n   style="display: block;"\n></pdf-viewer>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\terms\terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\help\help.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Help</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n  <div class="about_cntnt">\n    <h3>welcome to tutway, a unique platform where learning is platform.</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n   </div>\n </ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacypolicyPage = (function () {
    function PrivacypolicyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PrivacypolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacypolicy',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\privacypolicy\privacypolicy.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Privacy Policy</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n <div class="about_cntnt">\n   <!-- <h3>welcome to tutway, a unique platform where learning is platform.</h3>\n   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> -->\n   <pdf-viewer src="https://www.tutway.com/files/website-privacy-policy.pdf" [zoom]="0.5" [render-text]="true"\n            style="display: block;"\n></pdf-viewer>\n  </div>\n  \n  <!-- <div>\n    <label>PDF src</label>\n    <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">\n    <pdf-viewer src="https://www.tutway.com/files/website-privacy-policy.pdf" \n            [render-text]="true"\n            style="display: block;"\n></pdf-viewer>\n</div> -->\n\n<!-- <pdf-viewer src=\'https://www.tutway.com/files/website-privacy-policy.pdf\' [render-text]="true"\n            style="display: block;"\n></pdf-viewer> -->\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\privacypolicy\privacypolicy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], PrivacypolicyPage);
    return PrivacypolicyPage;
}());

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailreportPage = (function () {
    function EmailreportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EmailreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emailreport',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\emailreport\emailreport.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\emailreport\emailreport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], EmailreportPage);
    return EmailreportPage;
}());

//# sourceMappingURL=emailreport.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemrewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedeemrewardPage = (function () {
    function RedeemrewardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RedeemrewardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-redeemreward',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\redeemreward\redeemreward.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\redeemreward\redeemreward.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], RedeemrewardPage);
    return RedeemrewardPage;
}());

//# sourceMappingURL=redeemreward.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesmancornerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesmancornerPage = (function () {
    function SalesmancornerPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SalesmancornerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-salesmancorner',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\salesmancorner\salesmancorner.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\salesmancorner\salesmancorner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SalesmancornerPage);
    return SalesmancornerPage;
}());

//# sourceMappingURL=salesmancorner.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideolistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideolistPage = (function () {
    function VideolistPage(navCtrl, streamingMedia, appsetting, loadingCtrl, http, formBuilder, modalCtrl, common) {
        this.navCtrl = navCtrl;
        this.streamingMedia = streamingMedia;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.videos = [];
        // alert('videolist hh');
        this.getvideos();
        this.video = document.getElementsByTagName('video');
        console.log(this.video);
    }
    VideolistPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        //    this.videoplayer = this.formBuilder.group({
        //    video: [''],
        //  });
    };
    VideolistPage.prototype.startVideo = function (vidId, vide) {
        var _this = this;
        console.log(vide);
        var options = {
            successCallback: function (res) {
                console.log('Finished Video');
                // alert('finished video');
                // alert(JSON.stringify(res));
                var options = _this.common.headers();
                var Loading = _this.loadingCtrl.create({
                    //spinner: 'Bubbles',
                    content: 'Please wait...',
                });
                Loading.present().then(function () {
                    var postdata = {
                        student_master_id: 1,
                        week_master_id: 2,
                        course_master_id: 1,
                        video_master_id: vidId
                    };
                    _this.http.post(_this.common.Url + 'videodetailmaster.php', postdata, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        // alert('Video detail save');
                    });
                });
            },
            errorCallback: function (e) {
                console.log('Error: ', e);
                alert('error');
                alert(JSON.stringify(e));
            },
            orientation: 'portrait'
        };
        // http://www.sample-videos.com/
        this.streamingMedia.playVideo(vide, options);
    };
    VideolistPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getvideos();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    VideolistPage.prototype.getvideos = function () {
        var _this = this;
        var aa = this;
        var options = this.common.headers();
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/imgs/loader.gif\" />",
        });
        Loading.present().then(function () {
            _this.http.get(_this.common.Url + 'get_video.php', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                response.forEach(function (value, key) {
                    console.log(value);
                    console.log(key);
                    if (key <= 10) {
                        aa.videos.push(value);
                    }
                });
                // this.videosdata = response;   
                console.log(_this.videos);
            });
        });
    };
    VideolistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videolist',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\videolist\videolist.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Watch video</ion-title>\n<ion-buttons end>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n    <!-- <button ion-button full (click)="startVideo()">Start Video</button>\n    <button ion-button full (click)="playVid()">Play Video</button> -->\n    \n    <video *ngFor="let vid of videos" poster="{{vid.videoimageName}}" id="myVideo" width="100%" (click)="startVideo(vid.id,vid.videoName)"></video> \n    <!-- <video id="myVideo" width="320" height="176">\n      <source src="https://www.tutway.com/UploadedFiles/VideoMasterFiles/Video1.mp4" type="video/mp4">\n     \n    </video>\n    \n    <video width="320" height="240" controls id="video">\n      <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4" type="video/mp4">\n      \n    </video> -->\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\videolist\videolist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */]])
    ], VideolistPage);
    return VideolistPage;
}());

//# sourceMappingURL=videolist.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Appsetting provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http) {
        this.http = http;
        console.log('Hello Appsetting Provider');
        // alert('jdhjdh');
    }
    Appsetting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], Appsetting);
    return Appsetting;
}());

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FrontpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrontpagePage = (function () {
    function FrontpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FrontpagePage.prototype.proceed = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */], { proceed: event });
    };
    FrontpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrontpagePage');
    };
    FrontpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frontpage',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\frontpage\frontpage.html"*/'<!--\n  Generated template for the FrontpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>frontpage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="proceed(\'parent\')">Proceed as parent</button>\n  <button ion-button full (click)="proceed(\'teacher\')">Proceed as teacher</button>\n  <button ion-button block (click)="proceed(\'student\')">Proceed as student</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\frontpage\frontpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FrontpagePage);
    return FrontpagePage;
}());

//# sourceMappingURL=frontpage.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_spalsh_spalsh__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_enroll_enroll__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_watchvdeo_watchvdeo__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_avg_vdeo_avg_vdeo__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tme_spnd_tme_spnd__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_changepassword_changepassword__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_terms_terms__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_help_help__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_forgot__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_privacypolicy_privacypolicy__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_emailreport_emailreport__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_redeemreward_redeemreward__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_salesmancorner_salesmancorner__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_appsetting__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_frontpage_frontpage__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_pdf_viewer__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_streaming_media__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_videolist_videolist__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_spalsh_spalsh__["a" /* SpalshPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enroll_enroll__["a" /* EnrollPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_watchvdeo_watchvdeo__["a" /* WatchvdeoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_avg_vdeo_avg_vdeo__["a" /* Avg_vdeoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tme_spnd_tme_spnd__["a" /* Tme_spndPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_emailreport_emailreport__["a" /* EmailreportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_redeemreward_redeemreward__["a" /* RedeemrewardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_salesmancorner_salesmancorner__["a" /* SalesmancornerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_frontpage_frontpage__["a" /* FrontpagePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_videolist_videolist__["a" /* VideolistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/frontpage/frontpage.module#FrontpagePageModule', name: 'FrontpagePage', segment: 'frontpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_spalsh_spalsh__["a" /* SpalshPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enroll_enroll__["a" /* EnrollPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_watchvdeo_watchvdeo__["a" /* WatchvdeoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_avg_vdeo_avg_vdeo__["a" /* Avg_vdeoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tme_spnd_tme_spnd__["a" /* Tme_spndPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_emailreport_emailreport__["a" /* EmailreportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_redeemreward_redeemreward__["a" /* RedeemrewardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_salesmancorner_salesmancorner__["a" /* SalesmancornerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_frontpage_frontpage__["a" /* FrontpagePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_videolist_videolist__["a" /* VideolistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__providers_appsetting__["a" /* Appsetting */],
                __WEBPACK_IMPORTED_MODULE_24__providers_common__["a" /* Common */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_streaming_media__["a" /* StreamingMedia */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_spalsh_spalsh__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_watchvdeo_watchvdeo__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_avg_vdeo_avg_vdeo__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tme_spnd_tme_spnd__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contactus_contactus__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_help_help__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_privacypolicy_privacypolicy__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_emailreport_emailreport__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_redeemreward_redeemreward__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_salesmancorner_salesmancorner__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_videolist_videolist__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        //alert('jksdhfka');
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-home-outline' },
            { title: 'Watch video', component: __WEBPACK_IMPORTED_MODULE_19__pages_videolist_videolist__["a" /* VideolistPage */], icon: 'ios-home-outline' },
            { title: 'Inbox', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'ios-mail-open-outline' },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__["a" /* AboutusPage */], icon: 'ios-people-outline' },
            { title: 'Average Mark Detail', component: __WEBPACK_IMPORTED_MODULE_8__pages_avg_vdeo_avg_vdeo__["a" /* Avg_vdeoPage */], icon: 'ios-home-outline' },
            { title: 'Time Spend', component: __WEBPACK_IMPORTED_MODULE_9__pages_tme_spnd_tme_spnd__["a" /* Tme_spndPage */], icon: 'ios-timer-outline' },
            { title: 'Video Watch Detail', component: __WEBPACK_IMPORTED_MODULE_7__pages_watchvdeo_watchvdeo__["a" /* WatchvdeoPage */], icon: 'logo-youtube' },
            { title: 'Email Report Setting', component: __WEBPACK_IMPORTED_MODULE_16__pages_emailreport_emailreport__["a" /* EmailreportPage */], icon: 'ios-document-outline' },
            { title: 'Salesman Corner', component: __WEBPACK_IMPORTED_MODULE_18__pages_salesmancorner_salesmancorner__["a" /* SalesmancornerPage */], icon: 'ios-man-outline' },
            { title: 'Redeem Reward List', component: __WEBPACK_IMPORTED_MODULE_17__pages_redeemreward_redeemreward__["a" /* RedeemrewardPage */], icon: 'ios-home-outline' },
            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_15__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */], icon: 'ios-contact-outline' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */], icon: 'ios-help-circle-outline' },
            { title: 'Terms & Condition', component: __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */], icon: 'ios-home-outline' },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], icon: 'ios-unlock-outline' },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_11__pages_contactus_contactus__["a" /* ContactusPage */], icon: 'ios-pin-outline' }
        ];
        if (localStorage.getItem('CurrentUser')) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_spalsh_spalsh__["a" /* SpalshPage */];
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.Logout = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_spalsh_spalsh__["a" /* SpalshPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\app\app.html"*/'<ion-menu [content]="content">\n  <!--<ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>-->\n\n  <ion-content style="background:#112025; width:100%; float:left;">\n    <div class="usr_pic">\n      <div class="pic_crcle">\n        <img src="assets/images/pro_pc.png">\n      </div>\n       <span class="stnd_cls">Student Name</span>\n    </div>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="bck_trns">\n         <ion-icon item-left [name]="p.icon"></ion-icon>\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="Logout()" class="bck_trns">\n        <ion-icon item-left name="ios-home-outline"></ion-icon>\n      Logout\n     </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_enroll__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watchvdeo_watchvdeo__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avg_vdeo_avg_vdeo__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tme_spnd_tme_spnd__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.enrol_lnk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_enroll__["a" /* EnrollPage */]);
    };
    HomePage.prototype.vdeo_lnk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__watchvdeo_watchvdeo__["a" /* WatchvdeoPage */]);
    };
    HomePage.prototype.avg_lnk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__avg_vdeo_avg_vdeo__["a" /* Avg_vdeoPage */]);
    };
    HomePage.prototype.tme_lnk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tme_spnd_tme_spnd__["a" /* Tme_spndPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons style="float:left;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title class="hme_clss">Home</ion-title>\n<ion-buttons end>\n    <button class="stl_btn" (click)="enrol_lnk()">\n      <img class="set_btn" src="assets/images/hdr_pls.png">\n    </button>\n\n    <button class="stl_btn">\n       <img class="set_btn" src="assets/images/hdr_pls2.png">\n    </button>\n\n</ion-buttons>\n\n \n  </ion-navbar>\n\n  <ion-toolbar class="sub_sttl">\n    <ion-grid>\n  <ion-row>\n    <ion-col col-6>\n      <h3 class="stn_dttl">Student details</h3>\n    </ion-col>\n\n    <ion-col col-6>\n     <div class="dtt_pc">\n      <img src="assets/images/pro_pc.png">\n       </div>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="width: 100%; float: left; background-image: url(../assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <div class="cvr_lvl">\n        <div class="cvr_txxt">\n          <h4>Level</h4>\n        </div>\n        <div class="numbr_lvl">\n          <span>1</span>\n          </div>\n\n          <div class="cvr_txxt">\n          <h4>Current Status</h4>\n        </div>\n        <div class="numbr_lvl">\n          <span>Active</span>\n          </div>\n      </div>\n    </ion-col>\n\n     <ion-col col-12>\n      <div class="cvr_lvl">\n        <div class="cvr_txxt">\n          <h4>Child Name</h4>\n        </div>\n        <div class="numbr_lvl">\n          <span>David Smith</span>\n          </div>\n\n          <div class="cvr_txxt">\n          <h4>Joining Date</h4>\n        </div>\n        <div class="numbr_lvl">\n          <span>23-01-2018</span>\n          </div>\n      </div>\n    </ion-col>\n\n     <ion-col col-12>\n      <div class="cvr_lvl">\n        <div class="cvr_accmplsh">\n          <h4>Week Accomplished</h4>\n        </div>\n      </div>\n      \n    </ion-col>\n  </ion-row>\n\n   <ion-row>\n    <ion-col col-12>\n      <div class="hme_hdng">\n        <h4>login Time</h4>\n      </div>\n\n      <div class="cvr_lvl">\n        <div class="cvr_txxt">\n          <h4>Today</h4>\n        </div>\n\n         <div class="cvr_txxt1">\n          <h4>Yesterday</h4>\n        </div>\n\n        <div class="numbr_nmme">\n          <span>10:00am</span>\n          </div>\n\n        <div class="numbr_dte">\n          <span>11:00am</span>\n          </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n   <ion-row>\n    <ion-col col-12>\n      <div class="hme_hdng">\n        <h4>Last 7 Days login time</h4>\n      </div>\n\n      <div class="cvr_lvl">\n        <div class="twl_noon">\n          <h4>12:00 noon</h4>\n        </div>\n\n        <div class="noon_rght">\n           <h4>Today</h4>\n        </div>\n\n          <div class="twl_noon">\n          <h4>12:00 noon</h4>\n        </div>\n\n        <div class="noon_rght">\n           <h4>Today</h4>\n        </div>\n\n          <div class="twl_noon">\n          <h4>12:00 noon</h4>\n        </div>\n\n        <div class="noon_rght">\n           <h4>Today</h4>\n        </div>\n      </div>\n    </ion-col> \n  </ion-row>\n\n   <ion-row>\n    <ion-col col-12>\n      <div class="hme_hdng">\n        <h4>Total login time</h4>\n      </div>\n\n      <div class="cvr_lvl">\n        <div class="twl_noon">\n          <h4>12:00 noon</h4>\n        </div>\n\n        <div class="noon_rght">\n           <h4>Today</h4>\n        </div>\n\n          <div class="twl_noon">\n          <h4>12:00 noon</h4>\n        </div>\n\n        <div class="noon_rght">\n           <h4>Today</h4>\n        </div>\n\n          <div class="twl_noon">\n          <h4>12:00 noon</h4>\n        </div>\n\n        <div class="noon_rght">\n           <h4>Today</h4>\n        </div>\n      </div>\n    </ion-col> \n  </ion-row>\n\n     <ion-row>\n    <ion-col col-12>\n      <div class="hme_hdng">\n        <h4>Detail Peformance Report</h4>\n      </div>\n\n      <div class="cvr_lvl">\n       <div class="wtch_sctn" (click)="vdeo_lnk()">\n         <h3>Watch Video</h3>\n         <img src="../assets/images/wtch.png">\n       </div>\n\n        <div class="avg_sctn" (click)="avg_lnk()">\n         <h3>Average Mark</h3>\n         <img src="../assets/images/avrge.png">\n       </div>\n\n        <div class="tme_sctn" (click)="tme_lnk()">\n         <h3>Time Spend</h3>\n         <img src="../assets/images/clck.png">\n       </div>\n\n      </div>\n    </ion-col> \n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n\n      <div class="cvr_lvl">\n       <div class="twl_ovrl">\n          <h4>Overall average marks</h4>\n        </div>\n\n        <div class="prcnt_rght">\n           <h4>0.00%</h4>\n        </div>\n\n      </div>\n    </ion-col> \n  </ion-row>\n\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Common provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.Url = 'https://www.tutway.com/apis/';
        console.log('Hello Common Provider');
        // alert('jdhjdh');
    }
    Common.prototype.headers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    Common.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    Common.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        return setTimeout(function () { return alert.present(); }, 3000);
        // return alert.present();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, common, http, formBuilder, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        console.log(this.navParams.get('proceed'));
        this.pet = "signin";
    }
    SignupPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SigninForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
        });
        this.SignupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(12)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]],
            cpassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]],
            street: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            city: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            state: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            country: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            postalcode: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            // parent:[false,[Validators.required]],
            term: [true, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.legal.bind(this)]],
            privacy: [true, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.legal.bind(this)]]
        }, { validator: this.matchingPasswords('password', 'cpassword') });
    };
    SignupPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    SignupPage.prototype.legal = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { legal: false };
        }
    };
    SignupPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    SignupPage.prototype.isValidSignin = function (field) {
        var formField = this.SigninForm.get(field);
        return formField.valid || formField.pristine;
    };
    SignupPage.prototype.isValid = function (field) {
        var formField = this.SignupForm.get(field);
        return formField.valid || formField.pristine;
    };
    SignupPage.prototype.Signin = function (Signindata) {
        var _this = this;
        console.log(Signindata.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (Signindata.value.password.indexOf(' ') != 0) {
                var options = this.common.headers();
                //      this.uniqueDeviceID.get().then((uuid: any) => {
                //  console.log(uuid)
                var postdata = {
                    email: Signindata.value.email,
                    password: Signindata.value.password,
                };
                this.http.post(this.common.Url + 'parent_login.php', postdata, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    if (response.error == 0) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.common.presentAlert('Login', response.message);
                    }
                });
                // }).catch((error: any) => console.log(error));
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    SignupPage.prototype.ionChange = function (event) {
        console.log(event);
        this.role = event;
    };
    SignupPage.prototype.signup = function (signupdata) {
        var _this = this;
        console.log(this.role);
        console.log(signupdata.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (signupdata.value.password.indexOf(' ') != 0) {
                var options = this.common.headers();
                //      this.uniqueDeviceID.get().then((uuid: any) => {
                //  console.log(uuid)
                var postdata = {
                    name: signupdata.value.name,
                    email: signupdata.value.email,
                    password: signupdata.value.password,
                    phone: signupdata.value.phone,
                    address_line_1: signupdata.value.street,
                    address_line_2: signupdata.value.address,
                    city_name: signupdata.value.city,
                    state_name: signupdata.value.state,
                    country_name: signupdata.value.country,
                    postal_code: signupdata.value.postalcode
                    // deviceid:uuid,
                    // role:'user'
                };
                var dynamicUrl;
                if (this.role == "parent") {
                    console.log('parent signup');
                    dynamicUrl = this.common.Url + 'parent_signup.php';
                }
                else {
                    console.log('teacher signup');
                    dynamicUrl = this.common.Url + 'teacher_signup.php';
                }
                this.http.post(dynamicUrl, postdata, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    if (response.error == 0) {
                        // localStorage.setItem('CurrentUser',JSON.stringify(response.userinfo));
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.common.presentAlert('Signup', response.message);
                    }
                });
                // }).catch((error: any) => console.log(error));
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    SignupPage.prototype.hme_connt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\signup\signup.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content style="width: 100%; height:100%; float: left; background-image: url(assets/images/bg_splash.jpg); background-attachment: fixed; background-size: cover;">\n<div class="backgrnd_clss">\n  <div class="upt_bg">\n    <div class="logo_pc">\n    <img src="assets/images/logo.png">\n    </div>\n\n    <div padding>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="signin" class="colr_seen">\n      SIGNIN\n    </ion-segment-button>\n    <ion-segment-button value="signup" class="colr_seen">\n      SIGNUP\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div [ngSwitch]="pet">\n  <ion-list *ngSwitchCase="\'signin\'" ngSelected="selected">\n    <form [formGroup]="SigninForm">\n      <ion-list>\n          <ion-item class="regs_prnt">\n                   <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n                   <ion-icon name="contact" item-left></ion-icon>\n               </ion-item>\n               <p *ngIf="!isValidSignin(\'email\')" color="danger" padding-left>Invalid email.</p>\n                <ion-item class="regs_prnt">\n                   <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n                   <ion-icon name="lock" item-left></ion-icon>\n               </ion-item>\n               <p *ngIf="!isValidSignin(\'password\')" color="danger" padding-left>Password required.</p>\n       </ion-list>\n          <button ion-button block class="sbnt_btn" [disabled]="!SigninForm.valid" (click)=\'Signin(SigninForm)\'>Continue</button>\n  </form>\n\n   <!-- <span class="alrd_con">Dont have an Account? Sign Up</span> -->\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n     <div class="crte_acnt">\n       <h3>Create Account</h3>\n        </div>\n    </ion-col>\n     <ion-col col-6 (click)="forgotPassword()">\n<div class="crte_acnt">\n       <h3>Forgot Password?</h3>\n        </div>\n     </ion-col>\n <ion-col col-12>\n       <div class="or_txt">\n         <h4>OR</h4>\n         </div>\n      </ion-col>\n      <ion-col col-12>\n       <div class="logn_btn">\n         <img src="assets/images/btn_fbb.jpg">\n         </div>\n      </ion-col>\n         <ion-col col-12>\n       <div class="cnt_uss">\n         <h5>Connect with us</h5>\n         </div>\n      </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n\n  </ion-list>\n</div>\n\n<div [ngSwitch]="pet">\n    <form [formGroup]="SignupForm" (submit)="signup(SignupForm)">\n  <ion-list *ngSwitchCase="\'signup\'" radio-group>\n    <ion-item class="regs_adj">\n  <ion-label>Parents Registration</ion-label>\n  <ion-radio color="dark" value="parent" name="parent" (ionSelect)="ionChange(\'parent\')" [checked]="parent"></ion-radio>\n  <!-- <ion-radio color="dark"></ion-radio> -->\n</ion-item>\n\n <ion-item class="regs_adj">\n  <ion-label>Teacher Registration</ion-label>\n  <ion-radio color="dark" value="teacher" name="parent" (ionSelect)="ionChange(\'teacher\')"></ion-radio>\n</ion-item>\n\n<ion-list>\n<div class="pic_upld">\n  <img src="assets/images/camera_pc.png">\n</div>\n   <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="Name" formControlName="name"></ion-input>\n            <ion-icon name="contact" item-left></ion-icon>\n        </ion-item>\n        <p *ngIf="!isValid(\'name\')" color="danger" padding-left>Name required.</p>\n  <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n            <ion-icon name="mail" item-left></ion-icon>\n        </ion-item>\n        <p *ngIf="!isValid(\'email\')" color="danger" padding-left>Invalid email.</p>\n         <ion-item class="regs_prnt">\n            <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n            <ion-icon name="lock" item-left></ion-icon>\n        </ion-item>\n        <p *ngIf="!isValid(\'password\')" color="danger" padding-left>Password required.</p>\n         <ion-item class="regs_prnt">\n            <ion-input type="password" placeholder="Confirm Password" formControlName="cpassword"></ion-input>\n            <ion-icon name="lock" item-left></ion-icon>\n        </ion-item>\n        <div class=\'form-text error\' color="danger" *ngIf="SignupForm.controls.cpassword.touched">\n          <div *ngIf="SignupForm.hasError(\'mismatchedPasswords\')">Passwords do not match.</div>\n        </div>\n         <ion-item class="regs_prnt">\n            <ion-input type="tel" placeholder="Mobile Number" formControlName="phone" maxLength="12"></ion-input>\n            <ion-icon name="phone-portrait" item-left></ion-icon>\n        </ion-item>\n        <!-- <p *ngIf="!isValid(\'phone\')" color="danger" padding-left>Phone required.</p> -->\n        <h2 class="prma_adr">Permanent Address</h2>\n         <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="Street No." formControlName="street"></ion-input>\n            <img class="nmbr_hldr" src="assets/images/stret_pc.png" item-left>\n        </ion-item>\n        <p *ngIf="!isValid(\'street\')" color="danger" padding-left>Street no required.</p>\n        <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="Address*" formControlName="address"></ion-input>\n            <ion-icon name="pin" item-left></ion-icon>\n        </ion-item>\n        <p *ngIf="!isValid(\'address\')" color="danger" padding-left>Address required.</p>\n        <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="City*" formControlName="city"></ion-input>\n            <img class="nmbr_hldr" src="assets/images/city.png" item-left>\n        </ion-item>\n        <p *ngIf="!isValid(\'city\')" color="danger" padding-left>City required.</p>\n        <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="State*" class="lft_gp" formControlName="state"></ion-input>\n           <img class="nmbr_hldr1" src="assets/images/stte.png" item-left>\n        </ion-item>\n        <p *ngIf="!isValid(\'state\')" color="danger" padding-left>State required.</p>\n        <ion-item class="regs_prnt">\n            <ion-input type="text" placeholder="Country*" formControlName="country"></ion-input>\n            <ion-icon name="globe" item-left></ion-icon>\n        </ion-item>\n        <p *ngIf="!isValid(\'country\')" color="danger" padding-left>Country required.</p>\n         <ion-item class="regs_prnt">\n            <ion-input type="tel" placeholder="Postal code*" formControlName="postalcode" maxLength="7"></ion-input>\n            <img class="nmbr_hldr" src="assets/images/postl_cde.png" item-left>\n        </ion-item>\n        <p *ngIf="!isValid(\'postalcode\')" color="danger" padding-left>Postal code required.</p>\n</ion-list>\n\n<div class="agre_trms">\n\n  <ion-item class="regs_trns">\n  <ion-label>I agree to Terms and Conditions of tutway.com </ion-label>\n  <ion-checkbox color="dark" formControlName="term"></ion-checkbox>\n</ion-item>\n\n<ion-item class="regs_trns">\n  <ion-label>I agree to Privacy Policy of tutway.com </ion-label>\n  <ion-checkbox color="dark" formControlName="privacy"></ion-checkbox>\n</ion-item>\n  </div>\n   <button ion-button block class="sbnt_btn" type="submit" [disabled]="!SignupForm.valid">Submit</button>\n   <span class="alrd_con">Already have an Account? Sign In</span>\n  </ion-list>\n</form>\n\n</div>\n    </div>\n  </div>\n\n  \n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__["a" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__["a" /* NavParams */]) === "function" && _f || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchvdeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatchvdeoPage = (function () {
    function WatchvdeoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WatchvdeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-watchvdeo',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\watchvdeo\watchvdeo.html"*/'<ion-header>\n  <ion-navbar>\n   <button ion-button menuToggle>\n      <ion-icon name="md-arrow-round-back"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Video</ion-title>\n<ion-buttons end>\n\n    <button class="stl_btn">\n     \n         <ion-icon name="mail" class="set_env"></ion-icon>\n    </button>\n\n</ion-buttons>\n\n \n  </ion-navbar>\n\n <ion-toolbar class="sub_sttl">\n    <ion-grid>\n  <ion-row>\n    <ion-col col-6>\n      <h3 class="stn_dttl">Student details</h3>\n    </ion-col>\n\n    <ion-col col-6>\n      <div class="clos_vddo">\n       <span class="nnm_meeta">komal</span>\n     <div class="dtt_pc">\n      <img src="assets/images/pro_pc.png">\n       </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="width: 100%; float: left; background-image: url(../assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n\n<ion-list>\n  <div class="cvr_rds">\n  <ion-item>\n    <ion-label fixed class="lft_nmme">From Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="22/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n    <ion-label fixed class="lft_nmme">To Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="24/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Week:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="week1"></ion-input>\n  </ion-item>\n  </div>\n    <button ion-button block class="sbnt_btn">Search</button>\n</ion-list>\n\n<div class="graph_calculate">\n  <img src="../assets/images/video_graph.png">\n  <h4>Time Spent on Video\'s Detail</h4>\n</div>\n\n<div class="ttl_lgn">\n\n<ion-list>\n      <h4>Total login time</h4>\n  <div class="cvr_tme">\n\n      <ion-item>\n    <h3 item-start class="shw_tbleft">Week</h3>\n    <h3 item-end class="shw_tblrght">Week1</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Subject</h3>\n    <h3 item-end class="shw_tblrght">Science</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Video</h3>\n    <h3 item-end class="shw_tblrght">Body Parts</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Rating</h3>\n    <h3 item-end class="shw_tblrght">\n<ion-icon item-end name="star"></ion-icon>\n\n    </h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Watch Start</h3>\n    <div item-end class="shw_tblrght">\n      <h3>jan 27, 2018</h3>\n       <span>09:34 PM</span>\n    </div>\n  </ion-item>\n\n           <ion-item>\n    <h3 item-start class="shw_tbleft">Watch End</h3>\n    <div item-end class="shw_tblrght">\n      <h3>jan 27, 2018</h3>\n       <span>10:34 PM</span>\n    </div>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Spend Time</h3>\n    <h3 item-end class="shw_tblrght">00:06:00</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Actual Video Time</h3>\n    <h3 item-end class="shw_tblrght">00:06:46</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Status</h3>\n    <h3 item-end class="shw_tblrght">Active</h3>\n  </ion-item>\n\n  </div>\n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\watchvdeo\watchvdeo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], WatchvdeoPage);
    return WatchvdeoPage;
}());

//# sourceMappingURL=watchvdeo.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avg_vdeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Avg_vdeoPage = (function () {
    function Avg_vdeoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Avg_vdeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avg_vdeo',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\avg_vdeo\avg_vdeo.html"*/'<ion-header>\n  <ion-navbar>\n   <button ion-button menuToggle>\n      <ion-icon name="md-arrow-round-back"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Average Marks Details</ion-title>\n<ion-buttons end>\n\n    <button class="stl_btn">\n     \n         <ion-icon name="mail" class="set_env"></ion-icon>\n    </button>\n\n</ion-buttons>\n\n \n  </ion-navbar>\n\n <ion-toolbar class="sub_sttl">\n    <ion-grid>\n  <ion-row>\n    <ion-col col-6>\n      <h3 class="stn_dttl">Student details</h3>\n    </ion-col>\n\n    <ion-col col-6>\n      <div class="clos_vddo">\n       <span class="nnm_meeta">komal</span>\n     <div class="dtt_pc">\n      <img src="assets/images/pro_pc.png">\n       </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n\n<ion-list>\n  <div class="cvr_rds">\n  <ion-item>\n    <ion-label fixed class="lft_nmme">From Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="22/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n    <ion-label fixed class="lft_nmme">To Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="24/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Week:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="week1"></ion-input>\n  </ion-item>\n  </div>\n    <button ion-button block class="sbnt_btn">Search</button>\n</ion-list>\n\n<div class="graph_calculate">\n  <img src="assets/images/avg_graph.jpg">\n  <h4>Collective Week Wise Average Marks</h4>\n</div>\n\n<div class="graph_calculate">\n  <img src="assets/images/avg_graph1.jpg">\n  <h4>Collective Week Wise Average Marks</h4>\n</div>\n\n<div class="ttl_lgn">\n\n<ion-list>\n      <h4>Quiz Wise Marks and Time Spent Detail</h4>\n  <div class="cvr_tme">\n\n      <ion-item>\n    <h3 item-start class="shw_tbleft">Week</h3>\n    <h3 item-end class="shw_tblrght">Week1</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Subject</h3>\n    <h3 item-end class="shw_tblrght">Science</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Video</h3>\n    <h3 item-end class="shw_tblrght">Body Parts</h3>\n  </ion-item>\n\n    <ion-item>\n    <h3 item-start class="shw_tbleft">Quiz</h3>\n    <h3 item-end class="shw_tblrght">quiz</h3>\n  </ion-item>\n\n    <ion-item>\n    <h3 item-start class="shw_tbleft">Total Correct Questions</h3>\n    <h3 item-end class="shw_tblrght">10/0</h3>\n  </ion-item>\n\n   <ion-item>\n    <h3 item-start class="shw_tbleft">Score</h3>\n    <h3 item-end class="shw_tblrght">0%</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Star</h3>\n    <h3 item-end class="shw_tblrght">\n<ion-icon item-end name="star"></ion-icon>\n    </h3>\n  </ion-item>\n\n   <ion-item>\n    <h3 item-start class="shw_tbleft">Grade</h3>\n    <h3 item-end class="shw_tblrght">f</h3>\n  </ion-item>\n\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Watch Start</h3>\n    <div item-end class="shw_tblrght">\n      <h3>jan 27, 2018</h3>\n       <span>09:34 PM</span>\n    </div>\n  </ion-item>\n\n           <ion-item>\n    <h3 item-start class="shw_tbleft">Watch End</h3>\n    <div item-end class="shw_tblrght">\n      <h3>jan 27, 2018</h3>\n       <span>10:34 PM</span>\n    </div>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Spend Time</h3>\n    <h3 item-end class="shw_tblrght">00:06:00</h3>\n  </ion-item>\n\n  </div>\n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\avg_vdeo\avg_vdeo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Avg_vdeoPage);
    return Avg_vdeoPage;
}());

//# sourceMappingURL=avg_vdeo.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tme_spndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tme_spndPage = (function () {
    function Tme_spndPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tme_spndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tme_spnd',template:/*ion-inline-start:"D:\ionic project\tutway\tutway\src\pages\tme_spnd\tme_spnd.html"*/'<ion-header>\n  <ion-navbar>\n   <button ion-button menuToggle>\n      <ion-icon name="md-arrow-round-back"></ion-icon>\n    </button>\n    <ion-title class="hme_clss">Time Spend on Quiz\'s</ion-title>\n<ion-buttons end>\n\n    <button class="stl_btn">\n     \n         <ion-icon name="mail" class="set_env"></ion-icon>\n    </button>\n\n</ion-buttons>\n\n \n  </ion-navbar>\n\n <ion-toolbar class="sub_sttl">\n    <ion-grid>\n  <ion-row>\n    <ion-col col-6>\n      <h3 class="stn_dttl">Student details</h3>\n    </ion-col>\n\n    <ion-col col-6>\n      <div class="clos_vddo">\n       <span class="nnm_meeta">komal</span>\n     <div class="dtt_pc">\n      <img src="assets/images/pro_pc.png">\n       </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="width: 100%; float: left; background-image: url(assets/images/video_bg.png); background-attachment: fixed; background-size: cover;">\n\n<ion-list>\n  <div class="cvr_rds">\n  <ion-item>\n    <ion-label fixed class="lft_nmme">From Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="22/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n    <ion-label fixed class="lft_nmme">To Date:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="24/01/2018"></ion-input>\n  </ion-item>\n\n    <ion-item>\n     <ion-label fixed class="lft_nmme">Week:</ion-label>\n    <ion-input class="rght_nmme" type="text" value="" placeholder="week1"></ion-input>\n  </ion-item>\n  </div>\n    <button ion-button block class="sbnt_btn">Search</button>\n</ion-list>\n\n<div class="graph_calculate">\n  <img src="assets/images/tme_grph.jpg">\n  <h4>Week Wise Total Time Spent on Quiz\'s</h4>\n</div>\n\n<div class="ttl_lgn">\n\n<ion-list>\n      <h4>Login Detail</h4>\n  <div class="cvr_tme">\n\n      <ion-item>\n    <h3 item-start class="shw_tbleft">Login Date</h3>\n    <h3 item-end class="shw_tblrght">Week1</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Logout Date</h3>\n    <h3 item-end class="shw_tblrght">Science</h3>\n  </ion-item>\n\n       <ion-item>\n    <h3 item-start class="shw_tbleft">Spend Time</h3>\n    <h3 item-end class="shw_tblrght">00:06:00</h3>\n  </ion-item>\n\n  \n\n\n\n   \n\n  </div>\n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic project\tutway\tutway\src\pages\tme_spnd\tme_spnd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Tme_spndPage);
    return Tme_spndPage;
}());

//# sourceMappingURL=tme_spnd.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.js.map