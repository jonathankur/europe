webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_stock__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemPage = (function () {
    function ItemPage(nav, navParams, connect, loadingCtrl, zone, alertCtrl, barcodeScanner) {
        this.nav = nav;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.srch = '';
        this.brands = [];
        this.prods = [];
        this.brand = '';
        this.mode = 0;
        this.mode2 = 0;
        this.srch = '';
        this.mode = 0;
    }
    ItemPage.prototype.ionViewDidLoad = function () {
    };
    ItemPage.prototype.doScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.checkCode(barcodeData.text);
            }
        }, function (err) {
        });
    };
    ItemPage.prototype.doSearch = function () {
        var _this = this;
        var that = this;
        var url = 'getprodsearch.php?srch=' + encodeURIComponent(this.srch);
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                if (data.success) {
                    that.prods = data.prods;
                    if (that.prods.length == 1) {
                        that.goProd(that.prods[0].id);
                    }
                    else
                        that.mode = 3;
                }
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    ItemPage.prototype.checkCode = function (a) {
        var _this = this;
        var that = this;
        var url = 'getbarlook.php?code=' + a;
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                if (data.success)
                    that.goProd(data.id);
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    ItemPage.prototype.goProd = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__stock_stock__["a" /* StockPage */], { 'id': id });
    };
    ItemPage.prototype.brandsrch = function () {
        this.mode2 = 0;
        this.mode = 1;
    };
    ItemPage.prototype.goback = function () {
        this.mode = 0;
    };
    ItemPage.prototype.gobrand = function (a) {
        var _this = this;
        var that = this;
        this.mode2 = 0;
        var url = 'getbrands.php?l=' + a;
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.mode2 = 1;
                that.brands = data.brands;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    ItemPage.prototype.choosebrand = function (a) {
        var _this = this;
        var that = this;
        var url = 'getprods.php?srch=&brand=' + encodeURIComponent(a);
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.prods = data.prods;
                that.mode = 3;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    return ItemPage;
}());
ItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/item/item.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>European Foods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#4C4577; color:white">\n<ion-grid *ngIf="mode==0">\n <ion-row>\n <ion-col>\n  <p>Product Look-Up</p>\n </ion-col>\n </ion-row>\n <ion-row>\n  <ion-col col-1></ion-col>\n  <ion-col col-9>\n  \n							<ion-input  style="background-color:white; color:black" type="text" [(ngModel)]="srch" name="srch" placeholder="Search..."></ion-input>\n\n  </ion-col>\n  <ion-col col-1>\n    <button ion-button icon-only color="secondary" style="font-size:0.7em" (click)="doSearch();">\n      <ion-icon  name="search"></ion-icon>\n    </button>\n  </ion-col>\n  <ion-col col-1>\n  </ion-col>\n </ion-row>\n\n\n<ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n\n<button ion-button full  class="button200" color="dark" (click)="doScan()">Scan Barcode</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n\n <ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n\n<button ion-button full  class="button200" color="dark" (click)="brandsrch()">Search By Brand</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n\n</ion-grid>\n<ion-grid *ngIf="mode==1">\n<ion-row>\n<ion-col col-11>\n<p>Search By Brand</p>\n</ion-col>\n<ion-col col-1 (click)="goback();"><p>X</p></ion-col> \n</ion-row>\n<div *ngIf="mode2==0">\n<ion-row><ion-col><p style="font-size:0.7em">Please choose the first letter of the Brand</p>\n</ion-col></ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'A\')">A</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'B\')">B</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'C\')">C</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'D\')">D</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'E\')">E</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'F\')">F</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'G\')">G</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'H\')">H</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'I\')">I</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'J\')">J</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'K\')">K</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'L\')">L</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'M\')">M</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'N\')">N</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'O\')">O</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'P\')">P</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'Q\')">Q</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'R\')">R</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'S\')">S</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'T\')">T</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'U\')">U</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'V\')">V</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'W\')">W</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'X\')">X</button></ion-col>\n <ion-col col-1><button ion-button full  class="button200" color="dark" (click)="gobrand(\'Y\')">Y</button></ion-col>\n <ion-col col-1><button ion-button full  class="button200" color="dark" (click)="gobrand(\'Z\')">Z</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'1\')">1</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'2\')">2</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'3\')">3</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'4\')">4</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'5\')">5</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'6\')">6</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'7\')">7</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'8\')">8</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'9\')">9</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'0\')">0</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n</div>\n<div *ngIf="mode2==1">\n<ion-grid>\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro" padding *ngFor="let b of brands">\n   <ion-col (click)="choosebrand(b.name)"> {{ b.name }} </ion-col>\n </ion-row>\n</ion-grid>\n</div>\n</ion-grid>\n<ion-grid *ngIf="mode==3">\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro; font-size:0.7em" padding *ngFor="let p of prods">\n   <ion-col col-3 (click)="goProd(p.id)"> {{ p.sku }} </ion-col>\n   <ion-col col-9 text-wrap (click)="goProd(p.id)"> {{ p.name }} </ion-col>\n </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/item/item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], ItemPage);

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/van/van.module": [
		276,
		0
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connect = (function () {
    function Connect(http) {
        this.http = http;
        this.server_url = 'https://jkur.com.au/europe/';
    }
    Connect.prototype.PostQuery = function (object, parameter) {
        return this.http.get(this.server_url + object + parameter).map(function (res) { return res.json(); });
    };
    Connect.prototype.getList = function (object) {
        return this.http.get(this.server_url + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Connect.prototype.getServerUrl = function () {
        return this.server_url;
    };
    return Connect;
}());
Connect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], Connect);

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pick_pick__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_item__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = (function () {
    function MenuPage(nav, navParams, connect) {
        this.nav = nav;
        this.navParams = navParams;
        this.connect = connect;
        this.me = '';
        this.username = '';
        this.user = '';
        this.password = '';
        this.error = '';
        this.mode = 0;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var u = window.localStorage.getItem('me');
        if (!u)
            u = '';
        if (u.length) {
            this.me = u;
            this.username = window.localStorage.getItem('username');
            this.mode = 1;
        }
        else {
            this.mode = 0;
            this.me = '';
        }
    };
    MenuPage.prototype.goodsin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pick_pick__["a" /* PickPage */]);
    };
    MenuPage.prototype.products = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__item_item__["a" /* ItemPage */]);
    };
    MenuPage.prototype.login = function () {
        var _this = this;
        var that = this;
        this.connect.getList('userlogin.php?params=' + encodeURI(this.user + '~' + this.password)).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                that.me = data.me;
                that.username = data.username;
                that.mode = 1;
                window.localStorage.setItem('me', that.me);
                window.localStorage.setItem('username', that.username);
            }
            else {
                that.error = data.error;
            }
        }, function (err) { return _this.connect.logError(err); });
    };
    MenuPage.prototype.logout = function () {
        this.user = '';
        this.password = '';
        this.mode = 0;
        window.localStorage.setItem('me', '');
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/menu/menu.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>European Foods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#4C4577">\n<ion-grid *ngIf="mode==0">\n		<form (ngSubmit)="login()" #loginForm="ngForm" class="maxWidth300">\n	<ion-row>\n <ion-col>\n  <h2 style="color:white">Log In</h2>\n </ion-col>\n </ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>User name</ion-label>\n							<ion-input type="text" [(ngModel)]="user" name="user"  required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Password</ion-label>\n							<ion-input type="password" [(ngModel)]="password" name="password" required></ion-input>\n						</ion-item>\n					</ion-list>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n<ion-col col-1>\n</ion-col>\n				<ion-col col-10>\n					<button ion-button full  class="button200" color="secondary">Log In</button>\n				</ion-col>\n<ion-col col-1>\n</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col padding class="error" *ngIf="error">\n					<p>{{error}}</p>\n				</ion-col>\n			</ion-row>\n		</form>\n		\n </ion-grid>\n<ion-grid *ngIf="mode==1">\n <ion-row>\n   <ion-col>\n     <p style="color:white">Hi {{ username }} </p>\n   </ion-col>\n </ion-row>\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro" padding>\n   <ion-col (click)="goodsin()"> Goods In </ion-col>\n </ion-row>\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro" padding>\n   <ion-col (click)="products()"> Product Look-Up </ion-col>\n </ion-row>\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro" padding>\n   <ion-col (click)="goodsin()"> Reports </ion-col>\n </ion-row>\n <ion-row style="background-color:#2C2D36; color:white" padding>\n   <ion-col (click)="logout()"> Log Out </ion-col>\n </ion-row>\n  \n \n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__picker_picker__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PickPage = (function () {
    function PickPage(nav, navParams, connect, loadingCtrl, zone, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.srch = '';
        this.sups = [];
        this.porders = [];
        this.supplier = '';
        this.mode = 0;
        this.mode2 = 0;
        this.srch = '';
        this.mode = 0;
    }
    PickPage.prototype.ionViewDidLoad = function () {
    };
    PickPage.prototype.goPord = function (a) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__picker_picker__["a" /* PickerPage */], { 'id': a });
    };
    PickPage.prototype.doSearch = function () {
        var _this = this;
        var that = this;
        var url = 'getposearch.php?srch=' + encodeURIComponent(this.srch);
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                if (data.success) {
                    that.porders = data.porders;
                    if (that.porders.length == 1) {
                        that.goPord(that.porders[0].id);
                    }
                    else
                        that.mode = 3;
                }
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    PickPage.prototype.supsrch = function () {
        this.mode2 = 0;
        this.mode = 1;
    };
    PickPage.prototype.goback = function () {
        this.mode = 0;
    };
    PickPage.prototype.gobrand = function (a) {
        var _this = this;
        var that = this;
        this.mode2 = 0;
        var url = 'getsups.php?l=' + a;
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.mode2 = 1;
                that.sups = data.sups;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    PickPage.prototype.choosebrand = function (a) {
        var _this = this;
        var that = this;
        var url = 'getpos.php?srch=&sup=' + encodeURIComponent(a);
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.porders = data.porders;
                that.mode = 3;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    return PickPage;
}());
PickPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pick',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/pick/pick.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>European Foods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#4C4577; color:white">\n<ion-grid *ngIf="mode==0">\n <ion-row>\n <ion-col>\n  <p>P/Order Look-Up</p>\n </ion-col>\n </ion-row>\n <ion-row>\n  <ion-col col-1></ion-col>\n  <ion-col col-9>\n  \n							<ion-input  style="background-color:white; color:black" type="text" [(ngModel)]="srch" name="srch" placeholder="Search..."></ion-input>\n\n  </ion-col>\n  <ion-col col-1>\n    <button ion-button icon-only color="secondary" style="font-size:0.7em" (click)="doSearch();">\n      <ion-icon  name="search"></ion-icon>\n    </button>\n  </ion-col>\n  <ion-col col-1>\n  </ion-col>\n </ion-row>\n\n\n <ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n\n<button ion-button full  class="button200" color="dark" (click)="supsrch()">Search By Supplier</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n\n\n\n <ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n\n<button ion-button full  class="button200" color="dark" (click)="statsrch()">Search By Status</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n\n\n</ion-grid>\n<ion-grid *ngIf="mode==1">\n<ion-row>\n<ion-col col-11>\n<p>Search By Supplier</p>\n</ion-col>\n<ion-col col-1 (click)="goback();"><p>X</p></ion-col> \n</ion-row>\n<div *ngIf="mode2==0">\n<ion-row><ion-col><p style="font-size:0.7em">Please choose the first letter of the Supplier</p>\n</ion-col></ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'A\')">A</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'B\')">B</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'C\')">C</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'D\')">D</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'E\')">E</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'F\')">F</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'G\')">G</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'H\')">H</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'I\')">I</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'J\')">J</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'K\')">K</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'L\')">L</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'M\')">M</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'N\')">N</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'O\')">O</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'P\')">P</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'Q\')">Q</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'R\')">R</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'S\')">S</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'T\')">T</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'U\')">U</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'V\')">V</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'W\')">W</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'X\')">X</button></ion-col>\n <ion-col col-1><button ion-button full  class="button200" color="dark" (click)="gobrand(\'Y\')">Y</button></ion-col>\n <ion-col col-1><button ion-button full  class="button200" color="dark" (click)="gobrand(\'Z\')">Z</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'1\')">1</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'2\')">2</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'3\')">3</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'4\')">4</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'5\')">5</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n<ion-row>\n <ion-col col-1> </ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'6\')">6</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'7\')">7</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'8\')">8</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'9\')">9</button></ion-col>\n <ion-col col-2><button ion-button full  class="button200" color="dark" (click)="gobrand(\'0\')">0</button></ion-col>\n <ion-col col-1> </ion-col>\n</ion-row>\n</div>\n<div *ngIf="mode2==1">\n<ion-grid>\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro" padding *ngFor="let s of sups">\n   <ion-col (click)="choosebrand(s.name)"> {{ s.name }} </ion-col>\n </ion-row>\n</ion-grid>\n</div>\n</ion-grid>\n<ion-grid *ngIf="mode==3">\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro; font-size:0.7em" padding *ngFor="let p of porders">\n   <ion-col col-3 (click)="goPord(p.id)"> {{ p.id }}</ion-col>\n   <ion-col col-9 text-wrap (click)="goPord(p.id)"> {{ p.supplier }} <br> {{ p.status }} </ion-col>\n </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/pick/pick.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PickPage);

//# sourceMappingURL=pick.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(32);
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
 * Generated class for the StockpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PickerPage = (function () {
    function PickerPage(navCtrl, navParams, connect, loadingCtrl, zone, alertCtrl, cdr, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.barcodeScanner = barcodeScanner;
        this.id = '';
        this.thissku = '';
        this.thisname = '';
        this.thisqty = '';
        this.barsku = '';
        this.allgood = 0;
        this.id = this.navParams.get("id");
        this.pstatus = 0;
        this.prodlist = [];
        this.barsku = '';
        this.allgood = 0;
    }
    PickerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        var url = 'pickdetails.php?id=' + this.id;
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.prodlist = data.prodlist;
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    PickerPage.prototype.lookup = function () {
        this.findProd(this.barsku);
    };
    PickerPage.prototype.scanBar = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.findProd(barcodeData.text);
            }
        }, function (err) {
        });
    };
    PickerPage.prototype.findProd = function (s) {
        var _this = this;
        var that = this;
        var url = 'getprodsearch.php?srch=' + s;
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                console.log(data);
                if (data.success) {
                    that.prods = data.prods;
                    if (that.prods.length == 1) {
                        that.doProduct(that.prods[0]);
                    }
                    else
                        that.pstatus = 3;
                }
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    PickerPage.prototype.doProduct = function (data) {
        var that = this;
        var found = 0;
        that.thissku = data.sku;
        that.thisname = data.name;
        that.thisid = data.id;
        that.thisloc = data.loc;
        that.thisbatch = data.batch;
        that.thisexpiry = data.expiry;
        that.barsku = '';
        that.thisqty = '';
        for (var i in that.prodlist)
            if (that.prodlist[i].id == data.id)
                found = 1;
        if (found == 0) {
            var nw = { "id": data.id, "sku": data.sku, "name": data.name, "size": data.size, "expected": 0, "counted": 0, "backcolor": "#FFDDDD", "loc": "", "expiry": "", "batch": "" };
            that.prodlist.push(nw);
        }
        that.pstatus = 1;
    };
    PickerPage.prototype.cancelit = function () {
        this.pstatus = 0;
    };
    PickerPage.prototype.saveit = function () {
        this.pstatus = 2;
    };
    PickerPage.prototype.saveit2 = function () {
        var _this = this;
        var that = this;
        var q = 1;
        if (this.thisqty.length)
            q = parseInt(this.thisqty);
        that.zone.run(function () {
            for (var i in that.prodlist) {
                if (that.prodlist[i].id == that.thisid) {
                    that.prodlist[i].counted += q;
                    that.prodlist[i].batch = that.thisbatch;
                    that.prodlist[i].expiry = that.thisexpiry;
                    that.prodlist[i].loc = that.thisloc;
                }
                if (that.prodlist[i].counted == that.prodlist[i].expected)
                    that.prodlist[i].backcolor = '#DDFFDD';
                else {
                    if (that.prodlist[i].counted > that.prodlist[i].expected)
                        that.prodlist[i].backcolor = '#FFDDDD';
                    else
                        that.prodlist[i].backcolor = '#DDDDDD';
                }
            }
            _this.pstatus = 0;
        });
    };
    PickerPage.prototype.kin = function (a) {
        this.thisqty = '' + this.thisqty + a;
    };
    PickerPage.prototype.allcomplete = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Saving..."
        });
        loader.present();
        var url = 'pickcomplete.php?id=' + this.id + '&cart=' + encodeURIComponent(JSON.stringify(this.prodlist));
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.navCtrl.pop();
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    return PickerPage;
}());
PickerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-picker',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/picker/picker.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>European Foods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#4C4577; color:white">\n<ion-grid style="color:black; background-color:gainsboro">\n<ion-row>\n<ion-col text-center>Order {{ id }} </ion-col>\n</ion-row>\n</ion-grid>\n<div *ngIf="pstatus==0">\n<ion-list>\n <ion-item>\n    <ion-label stacked>Next Item</ion-label>\n    <ion-input type="text" [(ngModel)]="barsku"></ion-input>\n  </ion-item>\n</ion-list>\n<ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n<button ion-button full  class="button200" color="dark" (click)="lookup()">Look-Up</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n<ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n<button ion-button full  class="button200" color="dark" (click)="scanBar()">Scan Barcode</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n<ion-row>\n <ion-col col-1></ion-col>\n <ion-col col-10>\n<button ion-button full  class="button200" color="secondary" (click)="allcomplete()">Finish</button>\n		</ion-col>\n <ion-col col-1> </ion-col>\n </ion-row>\n\n<ion-grid style="color:black">\n<ion-row *ngFor="let p of prodlist"  [style.background]=p.backcolor text-wrap no-padding>\n  			<ion-col col-2><div>{{ p.counted }} /<br>{{ p.expected }}</div></ion-col><ion-col col-10><div style="font-size:0.7em">{{p.sku }}</div>\n              <div>{{ p.name }}</div>		\n		<div style="font-size:0.7em">{{ p.size }}</div>	\n			</ion-col>\n</ion-row>              \n</ion-grid>\n</div>\n<div *ngIf="pstatus==1">\n   <ion-list>\n <ion-item>\n    <ion-label stacked>SKU</ion-label>\n    <ion-input type="text" [(ngModel)]="thissku" readonly></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Description</ion-label>\n    <ion-input type="text" [(ngModel)]="thisname" readonly></ion-input>\n  </ion-item>\n\n <ion-item>\n    <ion-label stacked>Quantity</ion-label>\n    <ion-input type="text" [(ngModel)]="thisqty"></ion-input>\n  </ion-item>\n </ion-list>\n <ion-grid>\n <ion-row style="margin-bottom:5px">\n <ion-col col-4><ion-item style="background-color:lightskyblue" text-center (click)="kin(1)"> 1 </ion-item></ion-col>\n <ion-col col-4><ion-item style="background-color:lightskyblue" text-center (click)="kin(2)"> 2 </ion-item></ion-col>\n <ion-col col-4><ion-item style="background-color:lightskyblue" text-center (click)="kin(3)"> 3 </ion-item></ion-col>\n </ion-row>\n <ion-row style="margin-bottom:5px">\n <ion-col col-4><ion-item  style="background-color:lightskyblue" text-center (click)="kin(4)"> 4 </ion-item></ion-col>\n <ion-col col-4><ion-item  style="background-color:lightskyblue" text-center (click)="kin(5)"> 5 </ion-item></ion-col>\n <ion-col col-4><ion-item  style="background-color:lightskyblue" text-center (click)="kin(6)"> 6 </ion-item></ion-col>\n </ion-row>\n <ion-row style="margin-bottom:5px">\n <ion-col col-4><ion-item style="background-color:lightskyblue" text-center (click)="kin(7)"> 7 </ion-item></ion-col>\n <ion-col col-4><ion-item style="background-color:lightskyblue" text-center (click)="kin(8)"> 8 </ion-item></ion-col>\n <ion-col col-4><ion-item style="background-color:lightskyblue" text-center (click)="kin(9)"> 9 </ion-item></ion-col>\n </ion-row>\n\n <ion-row>\n <ion-col col-4><ion-item  style="background-color:tomato" text-center (click)="cancelit()"> X </ion-item></ion-col>\n <ion-col col-4><ion-item  style="background-color:lightskyblue" text-center (click)="kin(0)"> 0 </ion-item></ion-col>\n <ion-col col-4><ion-item  style="background-color:lightgreen" text-center (click)="saveit()"> SAVE </ion-item></ion-col>\n </ion-row>\n </ion-grid>\n\n</div>\n<div *ngIf="pstatus==2">\n   <ion-list>\n <ion-item>\n    <ion-label stacked>SKU</ion-label>\n    <ion-input type="text" [(ngModel)]="thissku" readonly></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Description</ion-label>\n    <ion-input type="text" [(ngModel)]="thisname" readonly></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Batch #</ion-label>\n    <ion-input type="text" [(ngModel)]="thisbatch"></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Expiry Date</ion-label>\n    <ion-input type="text" [(ngModel)]="thisexpiry"></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Location</ion-label>\n    <ion-input type="text" [(ngModel)]="thisloc"></ion-input>\n  </ion-item>\n </ion-list>\n <ion-row>\n <ion-col col-6><ion-item  style="background-color:tomato" text-center (click)="cancelit()"> CANCEL </ion-item></ion-col>\n <ion-col col-6><ion-item  style="background-color:lightgreen" text-center (click)="saveit2()"> SAVE </ion-item></ion-col>\n </ion-row>\n\n</div>\n<ion-grid *ngIf="pstatus==3">\n <ion-row style="background-color:#2C2D36; color:white; border-bottom:1px solid gainsboro; font-size:0.7em" padding *ngFor="let p of prods">\n   <ion-col col-3 (click)="doProduct(p)"> {{ p.sku }} </ion-col>\n   <ion-col col-9 text-wrap (click)="doProduct(p)"> {{ p.name }}<br> {{ p.size }}\n   </ion-col>\n </ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/picker/picker.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _h || Object])
], PickerPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=picker.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockPage = (function () {
    function StockPage(navCtrl, navParams, connect, zone, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.zone = zone;
        this.cdr = cdr;
        this.id = 0;
        this.code = '';
        this.desc = '';
        this.barcode = '';
    }
    StockPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
        this.refresh();
    };
    StockPage.prototype.refresh = function () {
        var _this = this;
        var that = this;
        var url = 'getprod.php?id=' + this.id;
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.code = data.code;
                that.desc = data.desc;
                that.barcode = data.barcode;
                that.cdr.markForCheck();
            });
        }, function (err) { return _this.connect.logError(err); });
    };
    return StockPage;
}());
StockPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stock',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/stock/stock.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>European Foods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#4C4577; color:white">\n<ion-grid>\n <ion-row>\n  <ion-col col-3>Code</ion-col>\n  <ion-col col-9>{{ code }}</ion-col>\n </ion-row>\n <ion-row>\n  <ion-col col-3>Description</ion-col>\n  <ion-col col-9>{{ desc }}</ion-col>\n </ion-row>\n <ion-row>\n  <ion-col col-3>Barcode</ion-col>\n  <ion-col col-9>{{ barcode }}</ion-col>\n </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/stock/stock.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], StockPage);

//# sourceMappingURL=stock.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
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
 * Generated class for the VanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VanPage = (function () {
    function VanPage(navCtrl, navParams, connect, zone, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.zone = zone;
        this.cdr = cdr;
        this.speedo = '';
        this.speedo2 = '';
        this.orderno = '';
        this.sts = 0;
        this.dtls = '';
        this.sts = 0;
        this.speedo = '';
        this.speedo2 = '';
        this.orderno = '';
        this.dtls = '';
        this.past = [];
    }
    VanPage.prototype.ionViewDidLoad = function () {
        this.vanStatus(0);
    };
    VanPage.prototype.vanStatus = function (a) {
        var _this = this;
        if (a == 3)
            this.speedo = this.speedo2;
        var url = 'vanstatus.php?mode=' + this.sts + '&orderno=' + this.orderno + '&speedo=' + this.speedo;
        console.log(url);
        var that = this;
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                console.log(data);
                that.sts = data.sts;
                that.past = data.past;
                that.dtls = data.dtls;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    return VanPage;
}());
VanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-van',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/van/van.html"*/'<!--\n  Generated template for the VanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Van Usage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div *ngIf="sts==0">\n<ion-item>\n<p>Searching for Current Status</p>\n</ion-item>\n</div>\n<div *ngIf="sts==1">\n\n<p>Start New Trip</p>\n  <ion-item>\n    <ion-label stacked>Order Number</ion-label>\n    <ion-input type="number" [(ngModel)]="orderno"></ion-input>\n </ion-item>\n <ion-item>\n <button ion-button (click)="vanStatus(1)" block color="primary">Look Up</button>\n </ion-item>\n</div>\n\n<div *ngIf="sts==2">\n<p  [innerHTML]="dtls"></p>\n  <ion-item>\n    <ion-label stacked>Speedo Reading Out</ion-label>\n    <ion-input type="number" [(ngModel)]="speedo"></ion-input>\n </ion-item>\n <ion-item>\n <button ion-button (click)="vanStatus(2)" block color="primary">Start Trip</button>\n</ion-item>\n <ion-item>\n <button ion-button (click)="this.sts=1" block color="danger">Cancel</button>\n</ion-item>\n</div>\n<div *ngIf="sts==3">\n<p  [innerHTML]="dtls"></p>\n  <ion-item>\n    <ion-label stacked>Speedo Reading In</ion-label>\n    <ion-input type="number" [(ngModel)]="speedo2"></ion-input>\n </ion-item>\n <ion-item>\n <button ion-button (click)="vanStatus(3)" block color="primary">End Trip</button>\n</ion-item>\n</div>\n\n		<ion-list text-wrap >\n			<ion-item *ngFor="let p of past"  >\n<p style="color:purple">{{ p.comp }}</p>\n<p>{{ p.order }}</p>\n<p>From: {{ p.date1 }}</p>\n<p>To: {{ p.date2 }}</p>\n			</ion-item>\n		</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/van/van.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], VanPage);

//# sourceMappingURL=van.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pick_pick__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_item_item__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_stock_stock__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_stockp_stockp__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_photos_photos__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_showroom_showroom__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_van_van__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_picker_picker__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_connect__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_stock_stock__["a" /* StockPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_stockp_stockp__["a" /* StockpPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pick_pick__["a" /* PickPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_item_item__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_picker_picker__["a" /* PickerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_van_van__["a" /* VanPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_showroom_showroom__["a" /* ShowroomPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_photos_photos__["a" /* PhotosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/van/van.module#VanPageModule', name: 'VanPage', segment: 'van', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pick_pick__["a" /* PickPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_stock_stock__["a" /* StockPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_stockp_stockp__["a" /* StockpPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_item_item__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_showroom_showroom__["a" /* ShowroomPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_picker_picker__["a" /* PickerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_van_van__["a" /* VanPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_photos_photos__["a" /* PhotosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_20__providers_connect__["a" /* Connect */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(198);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/var/www/html/ionic/europe/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(32);
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
    function HomePage(nav, navParams, loadingCtrl, menuCtrl, connect, zone, alertCtrl, cdr, barcodeScanner) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.connect = connect;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.barcodeScanner = barcodeScanner;
        this.myMode = 0;
        this.mySKU = '';
        this.myName = '';
        this.myMessage = '';
        this.myBar = '';
        this.myLocs = [];
        this.myID = 0;
        this.newLoc = '';
        this.repmode = false;
        this.barsku = '';
        this.myMessage = '';
        this.myID = 0;
        this.newLoc = '';
        this.myLocs = [];
    }
    HomePage.prototype.recalc = function () {
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.recalc();
    };
    HomePage.prototype.addchar = function (a) {
        this.newLoc = "" + this.newLoc + a;
    };
    HomePage.prototype.doScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.checkCode(barcodeData.text);
            }
        }, function (err) {
        });
    };
    HomePage.prototype.doText = function () {
        this.checkCode(this.barsku);
    };
    HomePage.prototype.scanLoc = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.updateLoc(barcodeData.text);
            }
        }, function (err) {
        });
    };
    HomePage.prototype.fake = function () {
        this.checkCode('9300462346120');
    };
    HomePage.prototype.checkCode = function (s) {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Searching..."
        });
        loader.present();
        var url = 'spitem.php?code=' + s;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                console.log(data);
                that.myMode = data.result;
                if (that.myMode > 0) {
                    that.mySKU = data.SKU;
                    that.myName = data.name;
                    that.myBar = data.barcode;
                    that.myLocs = data.locs;
                    that.myID = data.id;
                    that.newLoc = '';
                }
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    HomePage.prototype.updateLoc = function (s) {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Updating..."
        });
        loader.present();
        var url = 'spsetloc.php?code=' + s + '&id=' + this.myID + '&repmode=' + this.repmode;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.myMode = data.result;
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    HomePage.prototype.delLoc = function (s) {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Updating..."
        });
        loader.present();
        var url = 'spdelloc.php?code=' + s + '&id=' + this.myID;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.myLocs = data.result;
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    HomePage.prototype.goBack = function () {
        this.myMode = 0;
    };
    HomePage.prototype.enterLoc = function () {
        this.myMode = 2;
    };
    HomePage.prototype.saveLoc = function () {
        this.updateLoc(this.newLoc);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Locations\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<div *ngIf = "myMode == 0" style="padding-top:50px"> \n\n<ion-grid>\n <ion-item no-padding>\n    <ion-label stacked>Next Item</ion-label>\n    <ion-input type="text" [(ngModel)]="barsku"></ion-input>\n </ion-item>\n <ion-item no-padding>\n   <button ion-button color="secondary" block (click)="doText()">Look-Up Item</button>\n </ion-item>\n <ion-item no-padding style="border-top:20px">\n <button ion-button color="primary" block (click)="doScan()">Scan product</button>\n </ion-item>\n</ion-grid>\n</div>\n<div *ngIf = "myMode == 1">\n<ion-grid no-padding>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>SKU</ion-label>\n						<ion-input type="text" [(ngModel)]="mySKU" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Product Name</ion-label>\n						<ion-input type="text" [(ngModel)]="myName" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Barcode</ion-label>\n						<ion-input type="text" [(ngModel)]="myBar" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n<ion-row>\n <ion-col col-12>\n  <ion-item>\n    <ion-label>Replace Mode</ion-label>\n    <ion-toggle [(ngModel)]="repmode" checked="false"></ion-toggle>\n  </ion-item>\n </ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col col-12>\n <button ion-button color="primary" block (click)="scanLoc()">Scan Location</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n <button ion-button color="secondary" block (click)="enterLoc()">Enter Location</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n<button ion-button color="danger" block (click)="goBack()">Go Back</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list *ngIf="myLocs.length">\n  			<ion-item-sliding *ngFor="let l of myLocs" >\n<button ion-item detail-none >\n		<h3>{{ l.loc }}</h3>\n				</button>\n				<ion-item-options side="right">\n					<button ion-button color="danger" (click)="delLoc(l.loc)"><ion-icon name="ios-information-circle"></ion-icon>Delete</button>\n				</ion-item-options>\n			</ion-item-sliding>\n</ion-list>\n</div>\n<div *ngIf="myMode == 2">\n<ion-grid>\n<ion-row>\n<ion-col>\n					<ion-item>\n						<ion-label stacked>New Location</ion-label>\n						<ion-input type="text" [(ngModel)]="newLoc"></ion-input>\n					</ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-6>\n<button ion-button color="secondary" block (click)="saveLoc()">Enter</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button color="danger" block (click)="goBack()">Go Back</button>\n</ion-col>\n</ion-row>\n\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'A\')">A</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'B\')">B</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'C\')">C</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'D\')">D</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'E\')">E</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'F\')">F</button>\n</ion-col>\n</ion-row>\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'G\')">G</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'H\')">H</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'I\')">I</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'J\')">J</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'K\')">K</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'L\')">L</button>\n</ion-col>\n</ion-row>\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'M\')">M</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'N\')">N</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'O\')">O</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'P\')">P</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'Q\')">Q</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'R\')">R</button>\n</ion-col>\n</ion-row>\n\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'S\')">S</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'T\')">T</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'U\')">U</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'V\')">V</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'W\')">W</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'X\')">X</button>\n</ion-col>\n</ion-row>\n\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'Y\')">Y</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'Z\')">Z</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'1\')">1</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'2\')">2</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'3\')">3</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'4\')">4</button>\n</ion-col>\n</ion-row>\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'5\')">5</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'6\')">6</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'7\')">7</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'8\')">8</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'9\')">9</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'0\')">0</button>\n</ion-col>\n\n</ion-row>\n\n</ion-grid>	\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(32);
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
 * Generated class for the StockpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockpPage = (function () {
    function StockpPage(navCtrl, navParams, connect, loadingCtrl, zone, alertCtrl, cdr, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.barcodeScanner = barcodeScanner;
        this.orderno = '';
        this.thissku = '';
        this.thisname = '';
        this.thisqty = '';
        this.barsku = '';
        this.orderno = this.navParams.get("orderno");
        this.pstatus = 0;
        this.prodlist = [];
        this.barsku = '';
    }
    StockpPage.prototype.ionViewDidLoad = function () {
    };
    StockpPage.prototype.lookup = function () {
        this.findProd(this.barsku);
    };
    StockpPage.prototype.scanBar = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.findProd(barcodeData.text);
            }
        }, function (err) {
        });
    };
    StockpPage.prototype.findProd = function (s) {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Searching..."
        });
        loader.present();
        var url = 'spitem.php?code=' + s;
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                if (data.result > 0) {
                    that.thissku = data.SKU;
                    that.thisname = data.name;
                    that.thisid = data.id;
                    that.barsku = '';
                    that.thisloc = '';
                    that.thisqty = '';
                    that.pstatus = 1;
                }
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    StockpPage.prototype.completeOrd = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Saving..."
        });
        loader.present();
        var url = 'completeso.php?id=' + this.orderno + '&items=' + JSON.stringify(this.prodlist);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.navCtrl.pop();
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    StockpPage.prototype.delProd = function (id) {
        var _this = this;
        var nw = [];
        var sz = this.prodlist.length;
        for (var i = 0; i < sz; i++)
            if (this.prodlist[i].id != id)
                nw.push(this.prodlist[i]);
        this.zone.run(function () {
            _this.prodlist = nw;
            ;
        });
    };
    StockpPage.prototype.cancelit = function () {
        this.pstatus = 0;
    };
    StockpPage.prototype.saveit = function () {
        var _this = this;
        var nw = { 'id': this.thisid, 'sku': this.thissku, 'name': this.thisname, 'qty': this.thisqty, 'loc': this.thisloc };
        var that = this;
        that.zone.run(function () {
            _this.prodlist.push(nw);
            _this.pstatus = 0;
        });
    };
    return StockpPage;
}());
StockpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stockp',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/stockp/stockp.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Stock Order {{ orderno }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<div *ngIf="pstatus==0">\n<ion-list>\n <ion-item>\n    <ion-label stacked>Next Item</ion-label>\n    <ion-input type="text" [(ngModel)]="barsku"></ion-input>\n  </ion-item>\n <ion-item>\n  <button ion-button block color="primary" (click)="lookup()">Look-Up</button>\n </ion-item>\n <ion-item>\n  <button ion-button block color="primary" (click)="scanBar()">Scan Barcode</button>\n </ion-item>\n<ion-item>\n  <button ion-button block color="secondary" (click)="completeOrd()">Complete Stock In</button>\n </ion-item>\n\n</ion-list>\n<ion-list *ngIf="prodlist.length">\n  			<ion-item-sliding *ngFor="let p of prodlist" >\n<button ion-item detail-none >\n		<h4>{{ p.qty }}X {{p.sku }} [Location: {{ p.loc }}]</h4>\n              <div>{{ p.name }}</div>			\n				</button>\n				<ion-item-options side="right">\n					<button ion-button color="danger" (click)="delProd(p.id)"><ion-icon name="ios-information-circle"></ion-icon>Delete</button>\n				</ion-item-options>\n			</ion-item-sliding>\n</ion-list>\n</div>\n<div *ngIf="pstatus==1">\n   <ion-list>\n <ion-item>\n    <ion-label stacked>SKU</ion-label>\n    <ion-input type="text" [(ngModel)]="thissku" readonly></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Description</ion-label>\n    <ion-input type="text" [(ngModel)]="thisname" readonly></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Quantity</ion-label>\n    <ion-input type="text" [(ngModel)]="thisqty"></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label stacked>Location</ion-label>\n    <ion-input type="text" [(ngModel)]="thisloc"></ion-input>\n </ion-item>\n <ion-item>\n  <button ion-button block color="secondary" (click)="saveit()">Confirm</button>\n </ion-item>\n <ion-item>\n  <button ion-button block color="danger" (click)="cancelit()">Cancel</button>\n </ion-item>\n  \n </ion-list>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/stockp/stockp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], StockpPage);

//# sourceMappingURL=stockp.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connect__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotosPage = (function () {
    function PhotosPage(navCtrl, navParams, zone, alertCtrl, viewCtrl, loadingCtrl, cdr, camera, connect, transfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cdr = cdr;
        this.camera = camera;
        this.connect = connect;
        this.transfer = transfer;
        this.notes = "";
        this.body = "";
        this.mymode = 0;
        this.phlist = [];
        this.addresses = [];
        this.notes = "";
        this.body = "";
        this.mymode = 0;
    }
    PhotosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        var url = 'getphotolist.php?rnd=' + Math.random();
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.addresses = data;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    PhotosPage.prototype.takePic = function () {
        var _this = this;
        this.camera.getPicture({ quality: 80, targetWidth: 800, targetHeight: 1000, cameraDirection: 0, correctOrientation: true, destinationType: 1, allowEdit: false }).then(function (imagePath) {
            _this.zone.run(function () { _this.uploadImage(imagePath); });
        }, function (err) {
        });
    };
    PhotosPage.prototype.sendCust = function () {
        this.mymode = 1;
    };
    PhotosPage.prototype.sendIt = function (a) {
        var _this = this;
        var that = this;
        var url = 'sendpics.php?a=' + a.email + '&body=' + encodeURI(that.body) + '&notes=' + encodeURI(that.notes) + '&photos=' + encodeURI(JSON.stringify(this.phlist));
        this.connect.getList(url).subscribe(function (data) {
            that.zone.run(function () {
                that.mymode = 0;
            });
        }, function (err) {
            _this.connect.logError(err);
        });
    };
    PhotosPage.prototype.delPhoto = function (a) {
        var _this = this;
        var nw = [];
        this.zone.run(function () {
            for (var p in _this.phlist)
                if (_this.phlist[p].id != a)
                    nw.push({ id: _this.phlist[p].id, pic: 'https://theparcelpeople.com.au/catalogue/server/photos/p' + _this.phlist[p].id + '.jpg' });
            _this.phlist = nw;
            console.log(_this.phlist);
            _this.cdr.markForCheck();
        });
    };
    PhotosPage.prototype.uploadImage = function (imagePath) {
        // Destination URL
        var url = this.connect.getServerUrl() + 'upload.php';
        // File for Upload
        var targetPath = imagePath;
        // File name only
        var filename = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {}
        };
        var that = this;
        var fileTransfer = this.transfer.create();
        var loader = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        loader.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, encodeURI(url), options, true).then(function (data) {
            var n = JSON.parse(data.response).num;
            that.phlist.push({ id: n, pic: 'https://theparcelpeople.com.au/catalogue/server/photos/p' + n + '.jpg' });
            loader.dismiss();
        }, function (err) {
            loader.dismiss();
        });
    };
    return PhotosPage;
}());
PhotosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-photos',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/photos/photos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Take Photos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf="mymode==0">\n<ion-list>\n <ion-item>\n    <ion-label stacked>Reference Notes</ion-label>\n    <ion-input type="text" [(ngModel)]="notes"></ion-input>\n  </ion-item>\n <ion-item>\n <ion-label stacked>Text for Email</ion-label>\n <ion-textarea [(ngModel)]="body"></ion-textarea> \n </ion-item>  \n</ion-list>\n<ion-grid>\n<ion-row *ngIf="phlist.length">\n<ion-col col-12>\n <button ion-button block color="secondary" (click)="sendCust()">Send to Customer</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n <button ion-button block color="primary" (click)="takePic()">Take a Photo</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list *ngIf="phlist.length">\n  			<ion-item-sliding *ngFor="let p of phlist" >\n<button ion-item detail-none >\n					<img [src]="p.pic" width="150">\n				</button>\n				<ion-item-options side="right">\n					<button ion-button color="danger" (click)="delPhoto(p.id)"><ion-icon name="ios-information-circle"></ion-icon>Delete</button>\n				</ion-item-options>\n			</ion-item-sliding>\n</ion-list>\n</div>\n<div *ngIf="mymode > 0">\n<ion-list>\n  			<ion-item *ngFor="let a of addresses">\n<button ion-button block style="height:100px" color="primary" (click) = "sendIt(a)" ><h2>{{ a.name }}</h2></button>\n			</ion-item>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/photos/photos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */]])
], PhotosPage);

//# sourceMappingURL=photos.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(103);
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
 * Generated class for the ShowroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowroomPage = (function () {
    function ShowroomPage(navCtrl, navParams, zone, alertCtrl, viewCtrl, loadingCtrl, barcodeScanner, camera, connect, transfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.camera = camera;
        this.connect = connect;
        this.transfer = transfer;
        this.itemcode = '';
    }
    ShowroomPage.prototype.ionViewDidLoad = function () {
    };
    ShowroomPage.prototype.doMisc = function () {
        var _this = this;
        this.camera.getPicture({ quality: 80, targetWidth: 800, targetHeight: 1000, cameraDirection: 0, correctOrientation: true, destinationType: 1, allowEdit: false }).then(function (imagePath) {
            _this.zone.run(function () { _this.uploadImage(imagePath); });
        }, function (err) {
        });
    };
    ShowroomPage.prototype.uploadImage = function (imagePath) {
        // Destination URL
        var url = this.connect.getServerUrl() + 'uploadmisc.php';
        // File for Upload
        var targetPath = imagePath;
        // File name only
        var filename = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {}
        };
        var fileTransfer = this.transfer.create();
        var loader = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        loader.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, encodeURI(url), options, true).then(function (data) {
            var n = JSON.parse(data.response).num;
            loader.dismiss();
            alert('MISC' + n);
        }, function (err) {
            loader.dismiss();
            alert('Error');
        });
    };
    ShowroomPage.prototype.tryOrd = function (o) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { 'itemcode': o });
    };
    ShowroomPage.prototype.doScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.tryOrd(barcodeData.text);
            }
        }, function (err) {
        });
    };
    ShowroomPage.prototype.doLook = function () {
        if (this.itemcode.length)
            this.tryOrd(this.itemcode);
    };
    return ShowroomPage;
}());
ShowroomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-showroom',template:/*ion-inline-start:"/var/www/html/ionic/europe/src/pages/showroom/showroom.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ShowRoom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n\n<ion-row>\n<ion-col col-12>\n<button ion-button color="primary" block (click)="doMisc()">Miscellaneous</button>\n</ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col col-12>\n<ion-label stacked>Item Code</ion-label>\n<ion-input text [(ngModel)]="itemcode"></ion-input>\n<button ion-button color="primary" block (click)="doLook()">Look Up</button>\n</ion-col>\n</ion-row>\n\n\n<ion-row>\n<ion-col col-12>\n<button ion-button color="primary" block (click)="doScan()">Scan Item</button>\n</ion-col>\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/europe/src/pages/showroom/showroom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
], ShowroomPage);

//# sourceMappingURL=showroom.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map