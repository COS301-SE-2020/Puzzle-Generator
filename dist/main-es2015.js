(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile-puzzles/profile-puzzles.component */ "./src/app/pages/profile-puzzles/profile-puzzles.component.ts");
/* harmony import */ var _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile-ratings/profile-ratings.component */ "./src/app/pages/profile-ratings/profile-ratings.component.ts");
/* harmony import */ var _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ratings/ratings.component */ "./src/app/pages/ratings/ratings.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reset-success/reset-success.component */ "./src/app/pages/reset-success/reset-success.component.ts");
/* harmony import */ var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/create/create.component */ "./src/app/pages/create/create.component.ts");
/* harmony import */ var _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/aicreate/aicreate.component */ "./src/app/pages/aicreate/aicreate.component.ts");















const routes = [
    { path: 'index', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'profilePuzzles', component: _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePuzzlesComponent"] },
    { path: 'profileRatings', component: _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_7__["ProfileRatingsComponent"] },
    { path: 'ratings', component: _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_8__["RatingsComponent"] },
    { path: 'resetPassword', component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] },
    { path: 'resetSuccess', component: _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_10__["ResetSuccessComponent"] },
    { path: 'create', component: _pages_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"] },
    { path: 'aicreate', component: _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_12__["AICreateComponent"] },
    // otherwise redirect to home
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'prometheus-puzzles';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@font-face{\n  font-family: keep-calm;\n  src: url('KeepCalm-Medium.ttf');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOztBQUVyRTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUg7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQW1EO0FBQ3JEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzXCI7Ki9cblxuLyogYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5leHBhbmRlZC10b29sYmFyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gKi9cblxuQGZvbnQtZmFjZXtcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9rZWVwX2NhbG0vS2VlcENhbG0tTWVkaXVtLnR0ZicpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/ratings/ratings.component */ "./src/app/pages/ratings/ratings.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/reset-success/reset-success.component */ "./src/app/pages/reset-success/reset-success.component.ts");
/* harmony import */ var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/create/create.component */ "./src/app/pages/create/create.component.ts");
/* harmony import */ var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rate-dialog/rate-dialog.component */ "./src/app/rate-dialog/rate-dialog.component.ts");
/* harmony import */ var _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/profile-puzzles/profile-puzzles.component */ "./src/app/pages/profile-puzzles/profile-puzzles.component.ts");
/* harmony import */ var _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/profile-ratings/profile-ratings.component */ "./src/app/pages/profile-ratings/profile-ratings.component.ts");
/* harmony import */ var _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/aicreate/aicreate.component */ "./src/app/pages/aicreate/aicreate.component.ts");







//


















//pages















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_index_index_component__WEBPACK_IMPORTED_MODULE_25__["IndexComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
        _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_30__["RatingsComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__["NavbarComponent"],
        _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__["ResetPasswordComponent"],
        _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_32__["ResetSuccessComponent"],
        _pages_create_create_component__WEBPACK_IMPORTED_MODULE_33__["CreateComponent"],
        _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_34__["RateDialogComponent"],
        _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_35__["ProfilePuzzlesComponent"],
        _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_36__["ProfileRatingsComponent"],
        _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_37__["AICreateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_index_index_component__WEBPACK_IMPORTED_MODULE_25__["IndexComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                    _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_30__["RatingsComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__["NavbarComponent"],
                    _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__["ResetPasswordComponent"],
                    _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_32__["ResetSuccessComponent"],
                    _pages_create_create_component__WEBPACK_IMPORTED_MODULE_33__["CreateComponent"],
                    _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_34__["RateDialogComponent"],
                    _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_35__["ProfilePuzzlesComponent"],
                    _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_36__["ProfileRatingsComponent"],
                    _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_37__["AICreateComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                ],
                entryComponents: [_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_34__["RateDialogComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/index']);
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 41, vars: 1, consts: [[1, "container-fluid"], [1, "logo"], ["src", "assets/images/logo_nav.png", "routerLink", "/ratings", 1, "navimg"], ["id", "navCustom", 1, "navbar", "navbar-expand-sm"], [1, "left"], ["id", "burger", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent1", "aria-controls", "navbarSupportedContent1", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "hidden-sm", "hidden-md", "hidden-lg", "hidden-xl"], [1, "fa", "fa-bars", "fa-2x"], ["id", "navbarSupportedContent1", 1, "collapse", "navbar-collapse", "left"], ["routerLinkActive", "active", 1, "nav", "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/ratings", 1, "nav-link"], [1, "nav-item", "dropdown"], ["role", "button", "id", "navbarDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/create", 1, "dropdown-item"], ["routerLink", "/aicreate", 1, "dropdown-item"], ["role", "button", "id", "navbarDropdown2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown2", 1, "dropdown-menu"], ["routerLink", "/profile", 1, "dropdown-item"], ["routerLink", "/profileRatings", 1, "dropdown-item"], ["routerLink", "/profilePuzzles", 1, "dropdown-item"], [1, "navbar-text"], ["id", "logout", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "My Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "My Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "My Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_39_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hello, ", ctx.name, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n}\n\n.nav-link[_ngcontent-%COMP%]{\n  color: white;\n  margin-right: 1.5vw;\n  font-size: 1.7rem;\n}\n\n.navbar-text[_ngcontent-%COMP%]{\n  color: white;\n  text-align: left;\n  font-size: 1.5rem;\n  font-family: keep-calm;\n  margin-top: 2rem;\n}\n\nul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #7C593A !important;\n  cursor: pointer;\n}\n\nspan[_ngcontent-%COMP%]{\n  float: right;\n}\n\n#logout[_ngcontent-%COMP%]{\n  margin-left: 2vw;\n  background-color: #7C593A;\n  color: white;\n  padding: 0.9vw;\n  font-size: 1.7rem;\n}\n\n#logout[_ngcontent-%COMP%]:hover{\n  background-color:  white;\n  color: #7C593A;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%]{\n  font-size: 1.5rem !important;\n  color: white !important;\n}\n\n.navimg[_ngcontent-%COMP%]{\n  height: 13vw;\n}\n\n.caret[_ngcontent-%COMP%]{\n  margin-left: 0.7vw !important;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.nav[_ngcontent-%COMP%]{\n  font-family: keep-calm;\n  margin: 0.8rem;\n}\n\ni[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  color: white;\n  margin-top: 1vw;\n}\n\n#burger[_ngcontent-%COMP%] {\n  background-color: #7C593A !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]{\n  background-color: #7C593A !important;\n  padding: 1vw;\n}\n\n@media only screen and (max-width:768px){\n\n  .dropdown-menu[_ngcontent-%COMP%]{\n    background-color: #7C593A !important;\n    padding-left: 4vw;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTtJQUNFLG9DQUFvQztJQUNwQyxpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG59XG5cbi5uYXYtbGlua3tcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLm5hdmJhci10ZXh0e1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG51bC5uYXYgbGk6aG92ZXIgPiBhIHtcbiAgY29sb3I6ICM3QzU5M0EgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zcGFue1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNsb2dvdXR7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC45dnc7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4jbG9nb3V0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG4gIGNvbG9yOiAjN0M1OTNBO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1pdGVte1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5hdmltZ3tcbiAgaGVpZ2h0OiAxM3Z3O1xufVxuXG4uY2FyZXR7XG4gIG1hcmdpbi1sZWZ0OiAwLjd2dyAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubmF2e1xuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xuICBtYXJnaW46IDAuOHJlbTtcbn1cblxuaXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxdnc7XG59XG5cbiNidXJnZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDF2dztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcblxuICAuZHJvcGRvd24tbWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA0dnc7XG4gIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/aicreate/aicreate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/aicreate/aicreate.component.ts ***!
  \******************************************************/
/*! exports provided: AICreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AICreateComponent", function() { return AICreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_js_aiCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/js/aiCreation.js */ "./src/assets/js/aiCreation.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













class AICreateComponent {
    constructor() { }
    ngOnInit() {
        Object(src_assets_js_aiCreation_js__WEBPACK_IMPORTED_MODULE_1__["initializeDataAI"])();
        this.token = localStorage.getItem('token');
    }
}
AICreateComponent.ɵfac = function AICreateComponent_Factory(t) { return new (t || AICreateComponent)(); };
AICreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AICreateComponent, selectors: [["app-aicreate"]], decls: 94, vars: 4, consts: [["mat-raised-button", "", "id", "help", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myVideoModal1Label", "aria-hidden", "true", 1, "modal", "fade"], ["videoModal1", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-body", "mb-0", "p-0"], [1, "embed-responsive", "embed-responsive-16by9", "z-depth-1-half"], ["src", "../../assets/AICreation.mp4", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "modal-footer", "justify-content-center"], [1, "btns", 3, "click"], [1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1"], [1, "puzzleOptions"], [1, "titleLabel"], ["id", "inputContainer"], ["appearance", "outline", 1, "names"], ["type", "number", "matInput", "", "placeholder", "3", "name", "numberOfPieces", "id", "numberOfPiecesInputBox", 1, "input"], ["type", "number", "matInput", "", "placeholder", "1", "name", "numberOfPieces", "id", "numberOfPiecesInputBox1", 1, "input"], ["type", "number", "matInput", "", "placeholder", "1", "name", "numberOfPieces", "id", "numberOfPiecesInputBox2", 1, "input"], ["type", "number", "matInput", "", "placeholder", "1", "name", "numberOfPieces", "id", "numberOfPiecesInputBox3", 1, "input"], [1, "radio-group"], ["value", "euclidean", "name", "distanceMetric", "id", "euclideanButtonAI", 1, "radio-button"], ["value", "manhattan", "name", "distanceMetric", "id", "manhattanButtonAI", 1, "radio-button"], ["mat-raised-button", "", "id", "nextButton", 1, "btns"], ["mat-raised-button", "", "id", "generatePuzzleButtonAI", 1, "btns"], [1, "creationCard"], ["id", "containerAI"], [1, "saveOptions"], [1, "matContentC"], ["paletteid", "0", "value", "default", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "1", "value", "shadesOfRed", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "2", "value", "shadesOfGreen", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "3", "value", "shadesOfBlue", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["mat-raised-button", "", "id", "randomizeColorsButtonAI", 1, "btns"], ["matInput", "", "placeholder", "New Puzzle", "name", "puzzleName", "id", "puzzleNameInputBoxAI", 1, "input", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "For my cat", "name", "puzzleDescription", "id", "puzzleDescriptionInputBoxAI", 1, "input", 3, "ngModel", "ngModelChange"], ["hidden", "true", "id", "tokenLabel"], ["mat-raised-button", "", "id", "saveButtonAI", "routerLink", "/profilePuzzles", 1, "btns", 3, "disabled"]], template: function AICreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AICreateComponent_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AICreateComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Algorithm Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Maximum of puzzle pieces - 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Number of puzzle pieces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Number of Group 1 pieces:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Number of Group 2 pieces:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Number of Group 2 pieces:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Select Puzzle Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-radio-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-radio-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Euclidian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Manhattan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Generate Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Create a puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Saving Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card-content", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Select a color-palette:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-radio-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-radio-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Shades Of Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-radio-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Shades Of Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-radio-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Shades of Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Randomize Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Puzzle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AICreateComponent_Template_input_ngModelChange_84_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Short description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AICreateComponent_Template_input_ngModelChange_88_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.name || !ctx.description);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n  \n  padding: 3%;\n  border-radius: 0.5%;\n}\n\n#help[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  color: white;\n  padding: 0.5rem;\n  float: right;\n  margin-right: 2vw;\n  cursor: pointer;\n  height: 5rem;\n  width: 7rem;\n}\n\n.content[_ngcontent-%COMP%]{\n margin-left: 10rem;\n}\n\n.titleLabel[_ngcontent-%COMP%]{\n  margin-left: -2rem;\n}\n\nmat-radio-group[_ngcontent-%COMP%]{\n  font-size: 1.5rem;\n  padding:0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#container[_ngcontent-%COMP%] {\n   width: 500px;\n   height: 500px;\n   border: 1px solid black;\n   margin: 1rem;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n   display: flex;\n   flex-direction: column;\n   \n   font-size: 1vw;\n }\n\n#label[_ngcontent-%COMP%]{\n   text-align: center;\n   padding: 0.7em 0;\n   font-size: 1vw;\n   font-family: keep-calm;\n   color: black;\n }\n\n.btns[_ngcontent-%COMP%]{\n   background-color: #7C593A;\n   color: white;\n   margin: 0 1.3vw;\n }\n\n.main-title[_ngcontent-%COMP%]{\n   text-align: center;\n   text-transform: capitalize;\n   padding: 0.7em 0;\n   margin-top: 30px;\n   font-size: 40px;\n   text-align: center;\n   font-family: keep-calm;\n   color: gray;\n }\n\n.puzzleOptions[_ngcontent-%COMP%]{\n  margin: 1rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n  padding-top: 4rem;\n  width: 40rem;\n  background-color: gainsboro;\n}\n\n.puzzleOptions[_ngcontent-%COMP%]{\n  margin-left: 3rem;\n}\n\n.creationCard[_ngcontent-%COMP%]{\n  margin: 1rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n  padding-top: 4rem;\n  margin-bottom: 1rem;\n  background-color: gainsboro;\n}\n\n.saveOptions[_ngcontent-%COMP%]{\n  margin: 1rem;\n  padding-left: 2rem;\n  padding-top: 4rem;\n  width: 30rem;\n  max-width: 50rem;\n  background-color: gainsboro;\n}\n\n.matContentC[_ngcontent-%COMP%]{\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWljcmVhdGUvYWljcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLFlBQVk7QUFDZjs7QUFFQTtHQUNHLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsdUJBQXVCO0dBQ3ZCLGNBQWM7Q0FDaEI7O0FBRUE7R0FDRSxrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZCxzQkFBc0I7R0FDdEIsWUFBWTtDQUNkOztBQUVBO0dBQ0UseUJBQXlCO0dBQ3pCLFlBQVk7R0FDWixlQUFlO0NBQ2pCOztBQUdBO0dBQ0Usa0JBQWtCO0dBQ2xCLDBCQUEwQjtHQUMxQixnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLFdBQVc7Q0FDYjs7QUFFQTtFQUNDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FpY3JlYXRlL2FpY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xuICBwYWRkaW5nOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcbn1cblxuI2hlbHB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMnZ3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDdyZW07XG59XG5cbi5jb250ZW50e1xuIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbn1cblxuLnRpdGxlTGFiZWx7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbn1cblxubWF0LXJhZGlvLWdyb3Vwe1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzowLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNjb250YWluZXIge1xuICAgd2lkdGg6IDUwMHB4O1xuICAgaGVpZ2h0OiA1MDBweDtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgbWFyZ2luOiAxcmVtO1xufVxuXG4ucmFkaW8tZ3JvdXAge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAvKiBtYXJnaW4tbGVmdDogMXJlbTsgKi9cbiAgIGZvbnQtc2l6ZTogMXZ3O1xuIH1cblxuICNsYWJlbHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHBhZGRpbmc6IDAuN2VtIDA7XG4gICBmb250LXNpemU6IDF2dztcbiAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XG4gICBjb2xvcjogYmxhY2s7XG4gfVxuXG4gLmJ0bnN7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xuICAgY29sb3I6IHdoaXRlO1xuICAgbWFyZ2luOiAwIDEuM3Z3O1xuIH1cblxuXG4gLm1haW4tdGl0bGV7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgIHBhZGRpbmc6IDAuN2VtIDA7XG4gICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgZm9udC1zaXplOiA0MHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcbiAgIGNvbG9yOiBncmF5O1xuIH1cblxuIC5wdXp6bGVPcHRpb25ze1xuICBtYXJnaW46IDFyZW07XG4gIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHdpZHRoOiA0MHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG4ucHV6emxlT3B0aW9uc3tcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG5cbi5jcmVhdGlvbkNhcmR7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG4uc2F2ZU9wdGlvbnN7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgd2lkdGg6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi5tYXRDb250ZW50Q3tcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AICreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aicreate',
                templateUrl: './aicreate.component.html',
                styleUrls: ['./aicreate.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/create/create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/js/manualCreation.js */ "./src/assets/js/manualCreation.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");














class CreateComponent {
    constructor() { }
    ngOnInit() {
        Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_1__["initializeData"])();
        this.token = localStorage.getItem('token');
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 75, vars: 4, consts: [["mat-raised-button", "", "id", "help", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myVideoModal1Label", "aria-hidden", "true", 1, "modal", "fade"], ["videoModal1", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-body", "mb-0", "p-0"], [1, "embed-responsive", "embed-responsive-16by9", "z-depth-1-half"], ["src", "../../assets/ManualCreation.mp4", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "modal-footer", "justify-content-center"], [1, "btns", 3, "click"], [1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1"], [1, "puzzleType"], [1, "titleLabel"], [1, "radio-group"], ["value", "euclidean", "name", "distanceMetric", "id", "euclideanButton", 1, "radio-button"], ["value", "manhattan", "name", "distanceMetric", "id", "manhattanButton", 1, "radio-button"], [1, "creationCard"], ["mat-raised-button", "", "id", "deletePointButton", 1, "btns"], ["id", "deletePointButtonIcon"], ["id", "editPointButtonIcon"], ["id", "container"], ["mat-raised-button", "", "id", "generatePuzzleButton", 1, "btns"], [1, "saveOptions"], [1, "matContentC"], ["paletteid", "0", "value", "default", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "1", "value", "shadesOfRed", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "2", "value", "shadesOfGreen", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "3", "value", "shadesOfBlue", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["mat-raised-button", "", "id", "randomizeColorsButton", 1, "btns"], ["appearance", "outline", 1, "names"], ["matInput", "", "placeholder", "New Puzzle", "name", "puzzleName", "id", "puzzleNameInputBox", 1, "input", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "For my cat", "name", "puzzleDescription", "id", "puzzleDescriptionInputBox", 1, "input", 3, "ngModel", "ngModelChange"], ["hidden", "true", "id", "tokenLabel"], ["mat-raised-button", "", "id", "saveButton", "routerLink", "/profilePuzzles", 1, "btns", 3, "disabled"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Puzzle Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Euclidian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Manhattan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create puzzle by selecting points on the canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Delete Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Generate Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Saving Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Select a color-palette:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-radio-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Shades Of Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-radio-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Shades Of Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-radio-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Shades of Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Randomize Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Puzzle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_65_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Short description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_69_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.name || !ctx.description);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   \r\n   padding: 3%;\r\n   border-radius: 0.5%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  margin-left: 10rem;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    width: 50.2rem;\r\n    height: 50.2rem;\r\n    border: 1px solid black;\r\n    margin: 1rem;\r\n}\r\n\r\nmat-radio-group[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n    padding:0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n#label[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 0.7em 0;\r\n    font-size: 1vw;\r\n    \r\n    color: black;\r\n  }\r\n\r\n.names[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0 1.3vw;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n    margin-left: 1rem;\r\n  }\r\n\r\n#help[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    padding: 0.5rem;\r\n    float: right;\r\n    margin-right: 2vw;\r\n    cursor: pointer;\r\n    height: 5rem;\r\n    width: 7rem;\r\n  }\r\n\r\n.titleLabel[_ngcontent-%COMP%]{\r\n    margin-left: -2rem;\r\n  }\r\n\r\n.puzzleType[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding-left: 3rem;\r\n    padding-right: 5rem;\r\n    padding-top: 4rem;\r\n    width: 30rem;\r\n    background-color: gainsboro;\r\n  }\r\n\r\n.puzzleType[_ngcontent-%COMP%]{\r\n    margin-left: 5rem;\r\n  }\r\n\r\n.creationCard[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding-left: 5rem;\r\n    padding-right: 5rem;\r\n    padding-top: 4rem;\r\n    margin-bottom: 1rem;\r\n    background-color: gainsboro;\r\n  }\r\n\r\n.saveOptions[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding-left: 2rem;\r\n    padding-top: 4rem;\r\n    width: 30rem;\r\n    max-width: 50rem;\r\n    background-color: gainsboro;\r\n  }\r\n\r\n.matContentC[_ngcontent-%COMP%]{\r\n    margin-left: 4.5rem;\r\n  }\r\n\r\n@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {\r\n    #container[_ngcontent-%COMP%] {\r\n      width: 23rem;\r\n      height: 35rem;\r\n      border: 1px solid black;\r\n      margin-left: -3.5rem;\r\n  }\r\n\r\n  .puzzleType[_ngcontent-%COMP%]{\r\n    margin-left: .8rem;\r\n    width: 25rem;\r\n  }\r\n\r\n  .saveOptions[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    \r\n    width: 25rem;\r\n  } \r\n\r\n  #help[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n  }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0NBQWtDO0dBQ2xDLFdBQVc7R0FDWCxtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0U7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixvQkFBb0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xyXG4gICBwYWRkaW5nOiAzJTtcclxuICAgYm9yZGVyLXJhZGl1czogMC41JTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MC4ycmVtO1xyXG4gICAgaGVpZ2h0OiA1MC4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbiAgbWF0LXJhZGlvLWdyb3Vwe1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOjAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgI2xhYmVse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC43ZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgLyogZm9udC1mYW1pbHk6IGtlZXAtY2FsbTsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5uYW1lc3tcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDEuM3Z3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2hlbHB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICB3aWR0aDogN3JlbTtcclxuICB9XHJcblxyXG4gIC50aXRsZUxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnB1enpsZVR5cGV7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgfVxyXG5cclxuICAucHV6emxlVHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNyZWF0aW9uQ2FyZHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgfVxyXG5cclxuICAuc2F2ZU9wdGlvbnN7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgfVxyXG5cclxuICAubWF0Q29udGVudEN7XHJcbiAgICBtYXJnaW4tbGVmdDogNC41cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcclxuICAgICNjb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMjNyZW07XHJcbiAgICAgIGhlaWdodDogMzVyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTMuNXJlbTtcclxuICB9XHJcblxyXG4gIC5wdXp6bGVUeXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IC44cmVtO1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNhdmVPcHRpb25ze1xyXG4gICAgLyogbWFyZ2luOiAxcmVtOyAqL1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAycmVtOyAqL1xyXG4gICAgLyogcGFkZGluZy10b3A6IDRyZW07ICovXHJcbiAgICB3aWR0aDogMjVyZW07XHJcbiAgfSBcclxuXHJcbiAgI2hlbHB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");




class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 44, vars: 0, consts: [["id", "indexNav"], [1, "links"], ["id", "btnLink"], ["href", "/signup", "mat-button", "", 1, "indexBtn"], ["href", "/login", "mat-button", "", 1, "indexBtn"], ["src", "assets/images/web.jpg", 1, "splashImage"], ["id", "second", 1, "container"], [1, "main-title"], [1, "subtitle"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], [1, "one"], [1, "content"], [1, "content-overlay"], ["src", "assets/images/puzzles/6.png", 1, "content-image"], [1, "content-details", "fadeIn-bottom"], [1, "content-title"], [1, "content-text"], ["src", "assets/images/puzzles/2.png", 1, "content-image"], ["id", "hiddenImage", 1, "one"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "C R E A T E . S H A R E . R A T E . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create account or login to start creating 3D puzzles that can be shared, rated and printed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Geometric Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is a short description of a geometric equationed arithmetic puzzle. Magnified by bliss.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Arithmetic Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "This is a short description of a arithmetic equationed arithmetic puzzle. Magnified by razor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Polygon Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "This is a short description of a polygon equationed arithmetic puzzle. Magnified by shoes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  padding: 0.7em 0;\r\n  margin-top: 30px;\r\n  font-size: 60px;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]{\r\n  padding: 1em 0;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  \r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.descText[_ngcontent-%COMP%]{\r\n    padding: 2%;\r\n}\r\n\r\n.indexNavBtns[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 92%;\r\n  }\r\n\r\n#second[_ngcontent-%COMP%]{\r\n    background-color: #694b30;\r\n    width:100%;\r\n    height: 91%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: #7C593A;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: 1.5px solid black;\r\n  color: black ;\r\n  height: 30px;\r\n  text-align: center;\r\n  width: 80px;\r\n  transition-duration: 0.4s;\r\n  margin: 5px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  font-size: 16px;\r\n\r\n}\r\n\r\n#more[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 150px;\r\n\r\n}\r\n\r\n.why[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.indexBtn[_ngcontent-%COMP%]:hover {\r\n  background-color: #7C593A;\r\n  color: white !important;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 3.5em;\r\n\r\n}\r\n\r\n.indexNavImage[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    height: 60%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 20px;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: whitesmoke;\r\n \r\n   border-bottom: solid 1px rgba(160, 160, 160, 0.3);\r\n  height: 4.2em;\r\n  left: 0;\r\n  line-height: 4em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n  line-height: inherit;\r\n  margin-left: 5px;\r\n  white-space: nowrap;\r\n  font-family: keep-calm;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 0.7em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\r\n  height: inherit;\r\n  line-height: inherit;\r\n  margin-left: 1.5em;\r\n  overflow: hidden;\r\n  padding-left: 1.5em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-left: solid 1.5px black;\r\n  line-height: 1;\r\n  margin-left: 1em;\r\n  padding-left: 1em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover{\r\n  color: #f6c616;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  border-left: 0;\r\n  margin-left: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n  \r\n  font-size: 0.7em;\r\n  font-weight: 400;\r\n  letter-spacing: 0.25em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n#btnLink[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: 10px;\r\n  margin-right: 15px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {\r\n  img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .main-title[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .subtitle[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  #second[_ngcontent-%COMP%], .one[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n    height: 100%;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFHQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFHVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUdWLGdDQUFnQztFQUdoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0FBR0Y7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFHQztJQUNHLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1RUFBdUU7RUFDdkUsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGtCQUFrQjs7QUFFcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7Q0FDN0IsNkNBQTZDO0dBQzNDLGlEQUFpRDtFQUNsRCxhQUFhO0VBQ2IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztFQUNQLCtDQUErQztFQUMvQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtREFBbUQ7RUFDbkQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheSk7XHJcblxyXG4ubWFpbi10aXRsZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuN2VtIDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9uZXtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLm9uZSAudGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBmb250LWZhbWlseToga2VlcC1jYWxtOyAqL1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LWRldGFpbHN7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgaDN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgcHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uZmFkZUluLWJvdHRvbXtcclxuICB0b3A6IDgwJTtcclxufVxyXG5cclxuLmRlc2NUZXh0e1xyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5pbmRleE5hdkJ0bnN7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTIlO1xyXG4gIH1cclxuXHJcblxyXG4jc2Vjb25ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5NGIzMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDkxJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG5cclxuIC5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGNvbG9yOiBibGFjayA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogODBweDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbn1cclxuXHJcbiNtb3Jle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTUwcHg7XHJcblxyXG59XHJcblxyXG4ud2h5e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uaW5kZXhCdG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMy41ZW07XHJcblxyXG59XHJcblxyXG4uaW5kZXhOYXZJbWFnZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiNpbmRleE5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuIC8qICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpOyAgKi9cclxuICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuICBoZWlnaHQ6IDQuMmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDRlbTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2luZGV4TmF2IGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2luZGV4TmF2IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmRleE5hdiB1bCBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuI2luZGV4TmF2IC5iYXIge1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuI2luZGV4TmF2IGgxIGEge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbiNpbmRleE5hdiAubGlua3Mge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbiNpbmRleE5hdiAubGlua3MgdWwgbGkge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxLjVweCBibGFjaztcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzICA+IHVsIGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzID4gYTpob3ZlcntcclxuICBjb2xvcjogI2Y2YzYxNjtcclxufVxyXG5cclxuI2luZGV4TmF2IC5saW5rcyB1bCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzIHVsIGxpIGEge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgLyogZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNidG5MaW5re1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcclxuICBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubWFpbi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gICNzZWNvbmQsIC5vbmV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function LoginComponent_ng_container_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2.message, " ");
} }
function LoginComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_15_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError(error_r2.type) && (ctx_r0.loginForm.get("email").dirty || ctx_r0.loginForm.get("email").touched));
} }
function LoginComponent_ng_container_25_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r5.message, " ");
} }
function LoginComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_25_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError(error_r5.type) && (ctx_r1.loginForm.get("password").dirty || ctx_r1.loginForm.get("password").touched));
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class LoginComponent {
    constructor(formBuilder, api, router) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        //error messages used during login/register validation
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Invalid email format.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must have at least 6 characters.' }
            ]
        };
    }
    //method for logging in user and getting the token associated with the said user
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    loginUser(currentUser) {
        this.formError = '';
        if (currentUser !== null) {
            this.verifyUser = {
                "username": currentUser.email,
                "password": currentUser.password
            };
            this.api.loginUser(this.verifyUser).subscribe(data => {
                console.log(data);
                localStorage.removeItem('name');
                localStorage.setItem('name', data['name']);
                localStorage.removeItem('token');
                localStorage.setItem('token', data['token']);
                this.formError = "";
                this.router.navigate(['/ratings']);
                setTimeout(() => {
                    localStorage.removeItem('token');
                    this.router.navigate(['login']);
                    alert("You have been logged out after 1 hour");
                }, 3600000);
            }, error => {
                console.log('Error from API: ', error.error);
                if (error.status >= 401) {
                    this.formError = error.error;
                }
            });
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 10, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "required", "", "formControlName", "password", 1, "input", 3, "type"], [1, "fa", 3, "ngClass", "click"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btns", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "id", "two", 1, "btns"], ["routerLink", "/resetPassword", 1, "link"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.loginUser(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_ng_container_15_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_23_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_ng_container_25_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " *\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\n\n.container[_ngcontent-%COMP%]{\n    background-color: #7C593A;\n    height: 100%;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n}\n\n.btns[_ngcontent-%COMP%]{\n    background-color: #7C593A;\n    color:white;\n}\n\n#one[_ngcontent-%COMP%]{\n    margin: 5%;\n}\n\n#two[_ngcontent-%COMP%]{\n    color: white;\n}\n\n.regForm[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 300px;\n    text-align: center;\n    margin-top: 10%;\n}\n\n#passError[_ngcontent-%COMP%]{\n    color: red;\n}\n\n.regFormContent[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\n\nh3[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n    font-family: keep-calm;\n    padding-left: 78px;\n}\n\n.cardTitle[_ngcontent-%COMP%]{\n    margin-left: 9.5rem;\n}\n\n#passError[_ngcontent-%COMP%]{\n    color: red;\n}\n\n.link[_ngcontent-%COMP%]{\n    color: black;\n}\n\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkpO1xuXG4uY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmJ0bnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuI29uZXtcbiAgICBtYXJnaW46IDUlO1xufVxuXG4jdHdve1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlZ0Zvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4jcGFzc0Vycm9ye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5yZWdGb3JtQ29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5oM3tcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XG4gICAgcGFkZGluZy1sZWZ0OiA3OHB4O1xufVxuXG4uY2FyZFRpdGxle1xuICAgIG1hcmdpbi1sZWZ0OiA5LjVyZW07XG59XG5cbiNwYXNzRXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmxpbmt7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile-puzzles/profile-puzzles.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile-puzzles/profile-puzzles.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfilePuzzlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePuzzlesComponent", function() { return ProfilePuzzlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













function ProfilePuzzlesComponent_div_9_mat_card_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_9_mat_card_4_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const puzzle_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.share(puzzle_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SHARE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_div_9_mat_card_4_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_9_mat_card_4_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const puzzle_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.stopShare(puzzle_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "STOP SHARING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_div_9_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-actions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfilePuzzlesComponent_div_9_mat_card_4_button_7_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfilePuzzlesComponent_div_9_mat_card_4_button_8_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_9_mat_card_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const puzzle_r5 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.deletePuzzle(puzzle_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", puzzle_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](puzzle_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !puzzle_r5.shared);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", puzzle_r5.shared);
} }
function ProfilePuzzlesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Puzzles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfilePuzzlesComponent_div_9_mat_card_4_Template, 11, 4, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 1, ctx_r0.userPuzzleList, ctx_r0.startIndex, ctx_r0.endIndex));
} }
function ProfilePuzzlesComponent_mat_paginator_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-paginator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ProfilePuzzlesComponent_mat_paginator_10_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.pageEvent = ctx_r16.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r1.totalNumberOfPuzzles)("pageSize", ctx_r1.pageSize);
} }
function ProfilePuzzlesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have not created any puzzles at the moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_mat_spinner_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 20);
} }
class ProfilePuzzlesComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.temp = false;
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    changeEvent(event) {
        console.log("Event: ", event);
        this.startIndex = event.pageIndex * event.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
        if (this.endIndex > this.totalNumberOfPuzzles) {
            this.endIndex = this.totalNumberOfPuzzles;
        }
        this.userPuzzleList.slice(this.startIndex, this.endIndex);
        return event;
    }
    nameDescending() {
        return this.userPuzzleList.sort((a, b) => {
            console.log("values: ", this.userPuzzleList);
            //console.log("args: ", args);
            let paramA = a.name.toLowerCase();
            let paramB = b.name.toLowerCase();
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    nameAscending() {
        return this.userPuzzleList.sort((a, b) => {
            console.log("values: ", this.userPuzzleList);
            //console.log("args: ", args);
            let paramA = a.name.toLowerCase();
            let paramB = b.name.toLowerCase();
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    getUserPuzzles() {
        this.api.getPuzzlesByUser(this.currentUser).subscribe(data => {
            this.totalNumberOfPuzzles = Object.keys(data).length;
            this.userPuzzleList = data;
            if (data[0] == null) {
                this.text = true;
            }
            this.show = false;
        });
    }
    share(data) {
        this.puzzle = {
            "puzzleID": data
        };
        if (this.api.sharePuzzle(this.puzzle).subscribe()) {
            alert("Puzzle shared");
        }
        location.reload();
    }
    deletePuzzle(puzzleID) {
        // this.puzzle = {
        //   "puzzleID": puzzleID
        // }
        if (this.api.deletePuzzle(puzzleID).subscribe()) {
            alert("Puzzle deleted");
        }
        location.reload();
    }
    stopShare(data) {
        this.puzzle = {
            "puzzleID": data
        };
        if (this.api.stopSharingPuzzle(this.puzzle).subscribe()) {
            alert("Stop sharing puzzle");
        }
        location.reload();
    }
    delay(ms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms))
                .then(() => { console.log("fired"); });
        });
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.show = true;
        this.text = false;
        this.delay(2500).then(() => {
            this.getUserPuzzles();
        });
        //this.getUserPuzzles();
    }
}
ProfilePuzzlesComponent.ɵfac = function ProfilePuzzlesComponent_Factory(t) { return new (t || ProfilePuzzlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfilePuzzlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfilePuzzlesComponent, selectors: [["app-profile-puzzles"]], decls: 14, vars: 4, consts: [["mat-button", "", 1, "sortBtns"], [1, "arrow", 3, "click"], [1, "container"], ["class", "container-fluid", 4, "ngIf"], ["class", "paginator", 3, "length", "pageSize", "page", 4, "ngIf"], [4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "puzzleActions"], ["mat-button", "", "class", "btns", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btns", 3, "click"], [1, "paginator", 3, "length", "pageSize", "page"], ["id", "NoneText"], ["id", "spinner"]], template: function ProfilePuzzlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_Template_mat_icon_click_3_listener() { return ctx.nameAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_Template_mat_icon_click_6_listener() { return ctx.nameDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProfilePuzzlesComponent_div_9_Template, 6, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfilePuzzlesComponent_mat_paginator_10_Template, 1, 2, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfilePuzzlesComponent_div_11_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProfilePuzzlesComponent_mat_spinner_13_Template, 1, 0, "mat-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  margin-left: 1.5%;\r\n  margin-right: 1.5%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n background-color: white;\r\n width: 100%;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 100%;\r\n margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.paginator[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: auto;\r\n margin-top: 2vw;\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n font-family:keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin: 2rem 0 !important;\r\n font-family: keep-calm;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n background-color: #7C593A;\r\n color: white;\r\n margin: 0.5vw;\r\n width: 50%;\r\n border: 1px solid white;\r\n text-align: center;\r\n font-size: 1.5rem;\r\n}\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n color: #fff;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]:hover{\r\n  \r\n  background-color: white;\r\n  color: black;\r\n  border: #7C593A solid 0.1px;\r\n }\r\n\r\n.example-form-field[_ngcontent-%COMP%]{\r\n margin-left: 2vw;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n margin: auto ;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n position: relative;\r\n width: 100%;\r\n max-width: 370px;\r\n overflow: hidden;\r\n}\r\n\r\n#NoneText[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n}\r\n\r\n@media only screen and (max-width:350px){\r\n  .btns[_ngcontent-%COMP%]{\r\n     background-color: #7C593A;\r\n     color: white;\r\n     margin: 0.5vw;\r\n     width: 50%;\r\n     border: 1px solid white;\r\n     text-align: center;\r\n     font-size: 1rem;\r\n   }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wdXp6bGVzL3Byb2ZpbGUtcHV6emxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLHVFQUF1RTtDQUN2RSxxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkI7O0FBRUE7R0FDRSxZQUFZO0NBQ2Q7O0FBRUQ7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osMkJBQTJCO0NBQzVCOztBQUVEO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO1FBQ1EsZUFBZTtBQUN2Qjs7QUFFQTtFQUNFO0tBQ0cseUJBQXlCO0tBQ3pCLFlBQVk7S0FDWixhQUFhO0tBQ2IsVUFBVTtLQUNWLHVCQUF1QjtLQUN2QixrQkFBa0I7S0FDbEIsZUFBZTtHQUNqQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wdXp6bGVzL3Byb2ZpbGUtcHV6emxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMS41JTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1pbWFnZXtcclxuIHdpZHRoOiAxMDAlO1xyXG4gbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDF7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0b3J7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuIG1hcmdpbjogYXV0bztcclxuIG1hcmdpbi10b3A6IDJ2dztcclxuIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuIGNvbG9yOiBibGFjaztcclxuIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gZm9udC1mYW1pbHk6a2VlcC1jYWxtO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZXtcclxuICBtYXJnaW46IDJyZW0gMCAhaW1wb3J0YW50O1xyXG4gZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuLmJ0bnN7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gbWFyZ2luOiAwLjV2dztcclxuIHdpZHRoOiA1MCU7XHJcbiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uc29ydEJ0bnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbiAuYXJyb3d7XHJcbiAgIG1hcmdpbjogMXJlbTtcclxuIH1cclxuXHJcbi5wdXp6bGVBY3Rpb25ze1xyXG4gZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ucHV6emxlRGV0YWlsc3tcclxuIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuczpob3ZlcntcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6ICM3QzU5M0Egc29saWQgMC4xcHg7XHJcbiB9XHJcblxyXG4uZXhhbXBsZS1mb3JtLWZpZWxke1xyXG4gbWFyZ2luLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuI3NwaW5uZXJ7XHJcbiBtYXJnaW46IGF1dG8gO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB3aWR0aDogMTAwJTtcclxuIG1heC13aWR0aDogMzcwcHg7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jTm9uZVRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjN0M1OTNBO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzUwcHgpe1xyXG4gIC5idG5ze1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIG1hcmdpbjogMC41dnc7XHJcbiAgICAgd2lkdGg6IDUwJTtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICB9XHJcbiB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilePuzzlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile-puzzles',
                templateUrl: './profile-puzzles.component.html',
                styleUrls: ['./profile-puzzles.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile-ratings/profile-ratings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile-ratings/profile-ratings.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileRatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRatingsComponent", function() { return ProfileRatingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rate-dialog/rate-dialog.component */ "./src/app/rate-dialog/rate-dialog.component.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");














function ProfileRatingsComponent_div_16_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SOLVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_16_mat_card_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const rating_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.openAndCheck(rating_r5.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UPDATE RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_16_mat_card_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const rating_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.delete(rating_r5.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DELETE RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rating_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r5.puzzleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", rating_r5.rating, "/5");
} }
function ProfileRatingsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileRatingsComponent_div_16_mat_card_4_Template, 17, 3, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 1, ctx_r0.userRatingsList, ctx_r0.startIndex, ctx_r0.endIndex));
} }
function ProfileRatingsComponent_mat_paginator_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ProfileRatingsComponent_mat_paginator_17_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.pageEvent = ctx_r9.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.totalNumberOfPuzzles)("pageSize", ctx_r1.pageSize);
} }
function ProfileRatingsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have not made any ratings at the moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 21);
} }
class ProfileRatingsComponent {
    constructor(api, router, dialog) {
        this.api = api;
        this.router = router;
        this.dialog = dialog;
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    changeEvent(event) {
        console.log("Event: ", event);
        this.startIndex = event.pageIndex * event.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
        if (this.endIndex > this.totalNumberOfPuzzles) {
            this.endIndex = this.totalNumberOfPuzzles;
        }
        this.userRatingsList.slice(this.startIndex, this.endIndex);
        return event;
    }
    nameDescending() {
        return this.userRatingsList.sort((a, b) => {
            let paramA = a.puzzleName.toLowerCase();
            let paramB = b.puzzleName.toLowerCase();
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    nameAscending() {
        return this.userRatingsList.sort((a, b) => {
            let paramA = a.puzzleName.toLowerCase();
            let paramB = b.puzzleName.toLowerCase();
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    ratingDescending() {
        return this.userRatingsList.sort((a, b) => {
            let paramA = a.rating; //.toLowerCase();
            let paramB = b.rating; //.toLowerCase();
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    ratingAscending() {
        return this.userRatingsList.sort((a, b) => {
            let paramA = a.rating; //.toLowerCase();
            let paramB = b.rating; //.toLowerCase();
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    getUserPuzzleRatings() {
        this.api.getPuzzleRatingsByUser(this.currentUser).subscribe(data => {
            this.totalNumberOfPuzzles = Object.keys(data).length;
            this.userRatingsList = data;
            this.show = false;
            this.text = false;
            if (this.totalNumberOfPuzzles == 0) {
                this.text = true;
            }
        });
    }
    checkData(data) {
        this.ratePID = data;
    }
    openRateDialog() {
        this.rateDialogRef = this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_1__["RateDialogComponent"]);
        this.rateDialogRef.afterClosed().subscribe(result => {
            if (result != "") {
                this.ratingEntry = {
                    //"id":this.rateUID,
                    "puzzleID": this.ratePID,
                    "rating": result,
                    "token": localStorage.getItem('token')
                };
                if (this.api.createNewPuzzleRating(this.ratingEntry).subscribe()) {
                    alert("Rating added");
                }
                location.reload();
            }
        });
    }
    openAndCheck(rateP) {
        this.checkData(rateP);
        this.openRateDialog();
    }
    delete(ratePID) {
        this.deleteVal = {
            "puzzleID": ratePID,
            "token": localStorage.getItem('token')
        };
        this.api.findRatingID(this.deleteVal).subscribe((result) => {
            if (this.api.deleteRating(result["id"]).subscribe()) {
                alert("Rating deleted");
                location.reload();
            }
        });
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.show = true;
        this.text = false;
        this.getUserPuzzleRatings();
    }
}
ProfileRatingsComponent.ɵfac = function ProfileRatingsComponent_Factory(t) { return new (t || ProfileRatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ProfileRatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileRatingsComponent, selectors: [["app-profile-ratings"]], decls: 21, vars: 4, consts: [["mat-button", "", 1, "sortBtns"], [1, "arrow", 3, "click"], [1, "container"], ["class", "container-fluid", 4, "ngIf"], [3, "length", "pageSize", "page", 4, "ngIf"], ["id", "NoneText", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "puzzleActions"], ["mat-button", "", 1, "btns"], ["mat-button", "", 1, "btns", 3, "click"], ["mat-button", "", "id", "delete", 3, "click"], [3, "length", "pageSize", "page"], ["id", "NoneText"], ["id", "spinner"]], template: function ProfileRatingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_Template_mat_icon_click_3_listener() { return ctx.nameAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_Template_mat_icon_click_6_listener() { return ctx.nameDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_Template_mat_icon_click_10_listener() { return ctx.ratingAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_Template_mat_icon_click_13_listener() { return ctx.ratingDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileRatingsComponent_div_16_Template, 6, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileRatingsComponent_mat_paginator_17_Template, 1, 2, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileRatingsComponent_div_18_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileRatingsComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n  background-color: white;\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n  border-radius: 0.5%;\n}\n\n.container[_ngcontent-%COMP%]{\n background-color: white;\n width: 100%;\n}\n\n.infoIcon[_ngcontent-%COMP%]{\n float: right;\n}\n\n.content-image[_ngcontent-%COMP%]{\n width: 100%;\n margin-bottom: 10px;\n}\n\nh1[_ngcontent-%COMP%]{\n  padding-top: 1%;\n  margin-top: 0.5rem;\n  font-family: keep-calm;\n  color: black;\n  text-align: center;\n}\n\nmat-card[_ngcontent-%COMP%]{\n margin: auto;\n margin-top: 2vw;\n background-color: gainsboro;\n color: black;\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n font-family:keep-calm;\n}\n\nmat-card-title[_ngcontent-%COMP%]{\n  margin: 2rem 0 !important;\n font-family: keep-calm;\n}\n\n.btns[_ngcontent-%COMP%]{\n background-color: #7C593A;\n color: white;\n margin: 0.5vw;\n width: 50%;\n border: 1px solid white;\n text-align: center;\n font-size: 1.5rem;\n}\n\n.sortBtns[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  color: white;\n  margin-left: 3.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid white;\n  text-align: center;\n }\n\n.arrow[_ngcontent-%COMP%]{\n   margin: 1rem;\n }\n\n#delete[_ngcontent-%COMP%] {\n  background-color: #7C593A;\n  color: white;\n  margin-left: 25%;\n  margin-top: 2%;\n  width: 50%;\n  border: 1px solid white;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.puzzleActions[_ngcontent-%COMP%]{\n display: inline;\n}\n\n.puzzleDetails[_ngcontent-%COMP%]{\n color: #fff;\n}\n\n.btns[_ngcontent-%COMP%]:hover, #delete[_ngcontent-%COMP%]:hover{\n background-color: white;\n color: black;\n border: #7C593A solid 0.1px;\n}\n\n#spinner[_ngcontent-%COMP%]{\n margin: auto ;\n}\n\n.content[_ngcontent-%COMP%] {\n position: relative;\n width: 100%;\n max-width: 370px;\n overflow: hidden;\n}\n\n#NoneText[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n        stroke: #7C593A;\n      }\n\n@media only screen and (max-width:350px){\n  .btns[_ngcontent-%COMP%]{\n   background-color: #7C593A;\n   color: white;\n   margin: 0.5vw;\n   width: 50%;\n   border: 1px solid white;\n   text-align: center;\n   font-size: 1rem;\n  }\n\n  #delete[_ngcontent-%COMP%] {\n    background-color: #7C593A;\n    color: white;\n    margin-left: 25%;\n    margin-top: 2%;\n    width: 50%;\n    border: 1px solid white;\n    text-align: center;\n    font-size: 1rem;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1yYXRpbmdzL3Byb2ZpbGUtcmF0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLHVFQUF1RTtDQUN2RSxxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkI7O0FBRUE7R0FDRSxZQUFZO0NBQ2Q7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO1FBQ1EsZUFBZTtNQUNqQjs7QUFHTjtFQUNFO0dBQ0MseUJBQXlCO0dBQ3pCLFlBQVk7R0FDWixhQUFhO0dBQ2IsVUFBVTtHQUNWLHVCQUF1QjtHQUN2QixrQkFBa0I7R0FDbEIsZUFBZTtFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1yYXRpbmdzL3Byb2ZpbGUtcmF0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNSU7XG59XG5cbi5jb250YWluZXJ7XG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvSWNvbntcbiBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb250ZW50LWltYWdle1xuIHdpZHRoOiAxMDAlO1xuIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgxe1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJke1xuIG1hcmdpbjogYXV0bztcbiBtYXJnaW4tdG9wOiAydnc7XG4gYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuIGNvbG9yOiBibGFjaztcbiBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbiBmb250LWZhbWlseTprZWVwLWNhbG07XG59XG5cbm1hdC1jYXJkLXRpdGxle1xuICBtYXJnaW46IDJyZW0gMCAhaW1wb3J0YW50O1xuIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XG59XG5cbi5idG5ze1xuIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gY29sb3I6IHdoaXRlO1xuIG1hcmdpbjogMC41dnc7XG4gd2lkdGg6IDUwJTtcbiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zb3J0QnRuc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMy41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuIC5hcnJvd3tcbiAgIG1hcmdpbjogMXJlbTtcbiB9XG5cbiNkZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnB1enpsZUFjdGlvbnN7XG4gZGlzcGxheTogaW5saW5lO1xufVxuXG4ucHV6emxlRGV0YWlsc3tcbiBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bnM6aG92ZXIsICNkZWxldGU6aG92ZXJ7XG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gY29sb3I6IGJsYWNrO1xuIGJvcmRlcjogIzdDNTkzQSBzb2xpZCAwLjFweDtcbn1cblxuI3NwaW5uZXJ7XG4gbWFyZ2luOiBhdXRvIDtcbn1cblxuLmNvbnRlbnQge1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB3aWR0aDogMTAwJTtcbiBtYXgtd2lkdGg6IDM3MHB4O1xuIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNOb25lVGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogIzdDNTkzQTtcbiAgICAgIH1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzUwcHgpe1xuICAuYnRuc3tcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gICBjb2xvcjogd2hpdGU7XG4gICBtYXJnaW46IDAuNXZ3O1xuICAgd2lkdGg6IDUwJTtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgI2RlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-ratings',
                templateUrl: './profile-ratings.component.html',
                styleUrls: ['./profile-ratings.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function ProfileComponent_div_8_ng_container_7_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r3.message, " ");
} }
function ProfileComponent_div_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_8_ng_container_7_mat_error_1_Template, 2, 1, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.updateNameForm.get("name").hasError(error_r3.type) && (ctx_r1.updateNameForm.get("name").dirty || ctx_r1.updateNameForm.get("name").touched));
} }
function ProfileComponent_div_8_ng_container_16_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r6.message, " ");
} }
function ProfileComponent_div_8_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_8_ng_container_16_mat_error_1_Template, 2, 1, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.updateUsernameForm.get("username").hasError(error_r6.type) && (ctx_r2.updateUsernameForm.get("username").dirty || ctx_r2.updateUsernameForm.get("username").touched));
} }
function ProfileComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProfileComponent_div_8_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nameTextboxValue = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_8_ng_container_7_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_8_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateUsername(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProfileComponent_div_8_Template_input_input_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.usernameTextboxValue = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_8_ng_container_16_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateNameForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.currentUserObject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.error_messages.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.updateNameForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateUsernameForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.currentUserObject.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.error_messages.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.updateUsernameForm.valid);
} }
class ProfileComponent {
    constructor(api, formBuilder, router) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.error_messages = {
            'username': [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Invalid email format.' }
            ],
            'name': [
                { type: 'required', message: 'Full name is required.' },
                { type: 'pattern', message: 'Name can only consist of letters' }
            ]
        };
    }
    updateName() {
        this.currentUser = null;
        if (this.nameTextboxValue != undefined) {
            this.currentUser = {
                "token": localStorage.getItem('token'),
                "name": this.nameTextboxValue
            };
            localStorage.removeItem('name');
            localStorage.setItem('name', this.currentUser['name']);
            this.api.updateName(this.currentUser).subscribe(data => {
                this.currentUserObject['name'] = data['name'];
            });
            alert("Name updated");
        }
        else {
            console.log("No value provided");
        }
        location.reload();
    }
    updateUsername() {
        this.currentUser = null;
        if (this.usernameTextboxValue != undefined) {
            this.currentUser = {
                "token": localStorage.getItem('token'),
                "username": this.usernameTextboxValue
            };
            this.api.updateUsername(this.currentUser).subscribe(data => {
                this.currentUserObject['username'] = data['username'];
            });
        }
        else {
            console.log("No value provided");
        }
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.api.getUser(this.currentUser).subscribe(data => {
            this.currentUserObject = data;
            this.updateNameForm = this.formBuilder.group({
                name: [data['name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]]
            });
            this.updateUsernameForm = this.formBuilder.group({
                username: [data['username'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
            });
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 1, consts: [[1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "col wrap"], [1, "profileText"], [1, "move"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["for", "name"], ["matInput", "", "formControlName", "name", 3, "value", "input"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 1, "btns", 3, "disabled"], ["for", "username"], ["matInput", "", "formControlName", "username", 3, "value", "input"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_8_Template, 19, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserObject);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["#image[_ngcontent-%COMP%], #profileImage[_ngcontent-%COMP%]{\n    width: 20rem;\n    height: 22rem;\n}\n\n#profileImage[_ngcontent-%COMP%]{\n    height: 20vw;\n    width: 20vw;\n    border-radius: 100rem;\n    padding: 2rem;\n}\n\nh1[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n    font-family: keep-calm;\n    color: black;\n    margin-left: 5vw;\n}\n\n.profileText[_ngcontent-%COMP%]{\n  margin-left: 35%;\n}\n\n.abc[_ngcontent-%COMP%]{\n  display: inline;\n}\n\n.profileText[_ngcontent-%COMP%], .profileImageCard[_ngcontent-%COMP%]{\n  margin-bottom: 2vw;\n  margin-top: 2vw;\n  background-color: gainsboro;\n  color: black;\n  width: 30%;\n  text-align: center !important;\n}\n\n.userPuzzles[_ngcontent-%COMP%]{\n    margin: 0.2rem;\n    background-color:  #7C593A;\n}\n\n.btns[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  color: white;\n  margin-bottom: 1rem;\n}\n\n.container-fluid[_ngcontent-%COMP%]{\n     background-color: white;\n     margin-left: 1.5%;\n     margin-right: 1.5%;\n     border-radius: 0.5%;\n  }\n\n.move[_ngcontent-%COMP%]{\n    border: 1px gainsboro solid;\n    border-radius: 10px;\n    padding: 0.5vw;\n    margin-bottom: 1vw;\n    background-color: white;\n  }\n\nmat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 570px;\n    min-width: 300px;\n    position: relative;\n    overflow: hidden;\n    height: 39rem;\n    text-align: center !important;\n  }\n\n@media only screen and (max-width:576px){\n    .profileImageCard[_ngcontent-%COMP%], .profileText[_ngcontent-%COMP%]{\n      margin: auto;\n    }\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7S0FDSyx1QkFBdUI7S0FDdkIsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQixtQkFBbUI7RUFDdEI7O0FBRUE7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0VBQy9COztBQUdBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWFnZSwgI3Byb2ZpbGVJbWFnZXtcbiAgICB3aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAyMnJlbTtcbn1cblxuI3Byb2ZpbGVJbWFnZXtcbiAgICBoZWlnaHQ6IDIwdnc7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbmgxe1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuLnByb2ZpbGVUZXh0e1xuICBtYXJnaW4tbGVmdDogMzUlO1xufVxuXG4uYWJje1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wcm9maWxlVGV4dCwgLnByb2ZpbGVJbWFnZUNhcmR7XG4gIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgbWFyZ2luLXRvcDogMnZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyUHV6emxlc3tcbiAgICBtYXJnaW46IDAuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzdDNTkzQTtcbn1cblxuLmJ0bnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDAuNSU7XG4gIH1cblxuICAubW92ZXtcbiAgICBib3JkZXI6IDFweCBnYWluc2Jvcm8gc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwLjV2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1NzBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMzlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XG4gICAgLnByb2ZpbGVJbWFnZUNhcmQsIC5wcm9maWxlVGV4dHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/ratings/RatingsArr.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/ratings/RatingsArr.ts ***!
  \*********************************************/
/*! exports provided: RatingsArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsArr", function() { return RatingsArr; });
class RatingsArr {
}


/***/ }),

/***/ "./src/app/pages/ratings/puzzleArr.ts":
/*!********************************************!*\
  !*** ./src/app/pages/ratings/puzzleArr.ts ***!
  \********************************************/
/*! exports provided: PuzzleArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleArr", function() { return PuzzleArr; });
class PuzzleArr {
}


/***/ }),

/***/ "./src/app/pages/ratings/ratings.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/ratings/ratings.component.ts ***!
  \****************************************************/
/*! exports provided: RatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsComponent", function() { return RatingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _puzzleArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzleArr */ "./src/app/pages/ratings/puzzleArr.ts");
/* harmony import */ var _RatingsArr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingsArr */ "./src/app/pages/ratings/RatingsArr.ts");
/* harmony import */ var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rate-dialog/rate-dialog.component */ "./src/app/rate-dialog/rate-dialog.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");



















function RatingsComponent_mat_spinner_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 9);
} }
function RatingsComponent_div_36_mat_card_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- Not yet rated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_div_36_mat_card_2_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_div_36_mat_card_2_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const puzzle_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openAndCheck(puzzle_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_div_36_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created on:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RatingsComponent_div_36_mat_card_2_span_22_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SOLVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RatingsComponent_div_36_mat_card_2_button_26_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", puzzle_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r4.creator, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r4.created, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r4.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", puzzle_r4.rating, "/5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", puzzle_r4.rating == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", puzzle_r4.showRating);
} }
function RatingsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingsComponent_div_36_mat_card_2_Template, 27, 8, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r1.datasource.filteredData, ctx_r1.startIndex, ctx_r1.endIndex));
} }
function RatingsComponent_mat_paginator_37_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function RatingsComponent_mat_paginator_37_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.pageEvent = ctx_r10.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r2.totalNumberOfPuzzles)("pageSize", ctx_r2.pageSize);
} }
class RatingsComponent {
    constructor(api, cdr, dialog, router) {
        this.api = api;
        this.cdr = cdr;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["id", "name", "description", "creator", "rating", "created", "showRating", "image"];
        this.puzzles = [];
        this.ratings = [];
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    changeEvent(event) {
        console.log("Event: ", event);
        this.startIndex = event.pageIndex * event.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
        if (this.endIndex > this.totalNumberOfPuzzles) {
            this.endIndex = this.totalNumberOfPuzzles;
        }
        this.puzzles.slice(this.startIndex, this.endIndex);
        return event;
    }
    //sorting functions start here
    puzzleDescending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.name.toLowerCase();
            let paramB = b.name.toLowerCase();
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    puzzleAscending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.name.toLowerCase();
            let paramB = b.name.toLowerCase();
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    creatorDescending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.creator.toLowerCase();
            let paramB = b.creator.toLowerCase();
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    creatorAscending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.creator.toLowerCase();
            let paramB = b.creator.toLowerCase();
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    dateDescending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.created; //.toLowerCase();
            let paramB = b.creator; //.toLowerCase();
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    dateAscending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.created; //.toLowerCase();
            let paramB = b.creator; //.toLowerCase();
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    ratingDescending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.rating;
            let paramB = b.rating;
            if (paramA > paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    ratingAscending() {
        return this.puzzles.sort((a, b) => {
            let paramA = a.rating;
            let paramB = b.rating;
            if (paramA < paramB) {
                return -1;
            }
            else {
                return 1;
            }
            return 0;
        });
    }
    //sorting functions end here
    populate(populatePuz) {
        this.ratings.length = 0;
        this.api.getAllPuzzleRatings().subscribe(data => {
            for (let i = 0; data[i] != null; i++) {
                let ratingObj = new _RatingsArr__WEBPACK_IMPORTED_MODULE_2__["RatingsArr"]();
                ratingObj.id = data[i].id;
                ratingObj.rating = data[i].rating;
                ratingObj.puzzleID = data[i].puzzleID;
                this.ratings.push(ratingObj);
            }
        }, error => {
            console.log("Error from API: ", error.error);
        });
        if (populatePuz != null) {
            this.getPuzzles(populatePuz);
        }
        else {
            this.api.getAllPuzzles().subscribe(data => {
                this.totalNumberOfPuzzles = Object.keys(data).length;
                this.getPuzzles(data);
            }, error => {
                console.log('Error from API: ', error.error);
            });
        }
    }
    searchItems(searchValue) {
        if (searchValue != undefined) {
            this.api.getSearchedPuzzles(searchValue).subscribe(data => {
                var dataObjectSize = Object.keys(data).length;
                if (dataObjectSize == 0) {
                    alert("Nothing matches given criteria");
                    console.log("Nothing matches given criteria");
                }
                else {
                    //Please populate the page with the data received. Other puzzles not fromd data must be cleared
                    console.log(data);
                    this.populate(data);
                }
            });
        }
    }
    getPuzzles(data) {
        this.puzzles.length = 0;
        for (let i = 0; data[i] != null; i++) {
            let puzzleObj = new _puzzleArr__WEBPACK_IMPORTED_MODULE_1__["PuzzleArr"]();
            puzzleObj.id = data[i].id;
            puzzleObj.name = data[i].name;
            puzzleObj.description = data[i].description;
            puzzleObj.creator = data[i].creator;
            puzzleObj.created = data[i].createdAt;
            puzzleObj.image = data[i].image;
            if (puzzleObj.creator == this.currentUser["name"]) {
                puzzleObj.showRating = false;
            }
            else {
                puzzleObj.showRating = true;
            }
            let j = 0;
            let total = 0;
            for (let k = 0; this.ratings[k] != null; k++) {
                if (this.ratings[k].puzzleID == data[i].id) {
                    //********* ERROR HERE - THIS LOOP IS NOT ENTERED WHEN THE RATINGS VALUE IS 0  ************
                    total = total + this.ratings[k].rating;
                    j = j + 1;
                }
            }
            if (j == 0) {
                puzzleObj.rating = (0).toString();
            }
            else {
                puzzleObj.rating = (total / j).toFixed(2);
            }
            this.puzzles.push(puzzleObj);
        }
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.puzzles);
        this.dataAvailable = true;
        this.show = false;
    }
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.name.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    checkData(data) {
        this.ratePID = data;
    }
    openRateDialog() {
        this.rateDialogRef = this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RateDialogComponent"]);
        this.rateDialogRef.afterClosed().subscribe(result => {
            if (result != "") {
                this.ratingEntry = {
                    //"id":this.rateUID,
                    "puzzleID": this.ratePID,
                    "rating": result,
                    "token": localStorage.getItem('token')
                };
                if (this.api.createNewPuzzleRating(this.ratingEntry).subscribe()) {
                    alert("Rating added");
                }
                location.reload();
            }
        });
    }
    openAndCheck(rateP) {
        this.checkData(rateP);
        this.openRateDialog();
    }
    reload() {
        this.populate(null);
    }
    ngOnInit() {
        this.show = true;
        this.dataAvailable = false;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.api.getUser(this.currentUser).subscribe(data => {
            console.log(data["name"]);
            this.currentUser = {
                "token": localStorage.getItem('token'),
                "name": data["name"]
            };
        });
        this.populate(null);
    }
}
RatingsComponent.ɵfac = function RatingsComponent_Factory(t) { return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
RatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingsComponent, selectors: [["app-ratings"]], decls: 38, vars: 3, consts: [[1, "container"], [1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 1, "sortBtns"], [1, "arrow", 3, "click"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["class", "paginator", 3, "length", "pageSize", "page", 4, "ngIf"], ["id", "spinner"], [1, "container-fluid"], ["fxLayout", "row wrap", "fxLayout.xs", "row wrap", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], [4, "ngIf"], [1, "puzzleActions"], ["mat-button", "", 1, "btns"], ["mat-button", "", "class", "btns", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btns", 3, "click"], [1, "paginator", 3, "length", "pageSize", "page"]], template: function RatingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RatingsComponent_Template_input_keyup_5_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Puzzle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_8_listener() { return ctx.puzzleAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_11_listener() { return ctx.puzzleDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_15_listener() { return ctx.ratingAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_18_listener() { return ctx.ratingDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Creator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_22_listener() { return ctx.creatorAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_25_listener() { return ctx.creatorDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_29_listener() { return ctx.dateAscending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "arrow_upwardward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_mat_icon_click_32_listener() { return ctx.dateDescending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RatingsComponent_mat_spinner_35_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RatingsComponent_div_36_Template, 4, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RatingsComponent_mat_paginator_37_Template, 1, 2, "mat-paginator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n   background-color: white;\n   margin-left: 1.5%;\n   margin-right: 1.5%;\n   border-radius: 0.5%;\n}\n\n.container[_ngcontent-%COMP%]{\n  background-color: white;\n  height: 100%;\n  width: 100%;\n}\n\n.content-image[_ngcontent-%COMP%]{\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\nh1[_ngcontent-%COMP%]{\n  text-align: center;\n  font-size: 4vw;\n  font-family: Arial, Helvetica, sans-serif;\n  color: gray;\n}\n\nmat-card[_ngcontent-%COMP%]{\n  margin: auto;\n  margin-top: 2vw;\n  background-color: gainsboro;\n  color: black;\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n  font-family: keep-calm;\n}\n\nmat-card-title[_ngcontent-%COMP%]{\n   margin: 2rem 0 !important;\n  font-family: keep-calm;\n}\n\n.btns[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  color: white;\n  margin: 0.5vw;\n  width: 50%;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: normal;\n}\n\n.sortBtns[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  color: white;\n  margin-left: 3.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid white;\n  text-align: center;\n  font-family: keep-calm;\n }\n\n.arrow[_ngcontent-%COMP%]{\n   margin: 1rem;\n }\n\n.puzzleActions[_ngcontent-%COMP%]{\n  display: inline;\n}\n\n.puzzleDetails[_ngcontent-%COMP%]{\n  color: #fff;\n}\n\n#resetBtn[_ngcontent-%COMP%]:hover, .btns[_ngcontent-%COMP%]:hover{\n  background-color: white;\n  color: #7C593A;\n}\n\n.searchArea[_ngcontent-%COMP%]{\n  margin-left: 2vw;\n  font-family: keep-calm;\n  font-size:1.8rem;\n}\n\n#resetBtn[_ngcontent-%COMP%]{\n  margin-left: 2vw;\n  background-color: #7C593A;\n  color: white;\n  margin: 0.5vw;\n  text-align: center;\n  font-weight: normal;\n  padding: 0.5vw;\n  border-radius: 0.5vw;\n\n}\n\n#spinner[_ngcontent-%COMP%]{\n  margin: auto ;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 370px;\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.7);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  transition: all 0.4s ease-in-out 0s;\n}\n\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\n  opacity: 1;\n}\n\n.content-image[_ngcontent-%COMP%]{\n\n}\n\n.content-details[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: justify;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\n  top: 30%;\n  left: 50%;\n  opacity: 1;\n}\n\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.5em;\n  text-transform: uppercase;\n}\n\n.fadeIn-bottom[_ngcontent-%COMP%]{\n  top: 80%;\n}\n\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n        stroke: #7C593A;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5ncy9yYXRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx1QkFBdUI7R0FDdkIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxXQUFXO0FBQ2I7O0FBRUM7RUFDQyxZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUVBQXVFO0VBQ3ZFLHNCQUFzQjtBQUN4Qjs7QUFFQztHQUNFLHlCQUF5QjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7Q0FDdkI7O0FBRUE7R0FDRSxZQUFZO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUdWLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBR1YsZ0NBQWdDO0VBR2hDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtRQUNRLGVBQWU7TUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yYXRpbmdzL3JhdGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xuICAgYm9yZGVyLXJhZGl1czogMC41JTtcbn1cblxuLmNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogZ3JheTtcbn1cblxuIG1hdC1jYXJke1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDJ2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xufVxuXG4gbWF0LWNhcmQtdGl0bGV7XG4gICBtYXJnaW46IDJyZW0gMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xufVxuXG5cbi5idG5ze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMC41dnc7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc29ydEJ0bnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcbiB9XG5cbiAuYXJyb3d7XG4gICBtYXJnaW46IDFyZW07XG4gfVxuXG4ucHV6emxlQWN0aW9uc3tcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucHV6emxlRGV0YWlsc3tcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNyZXNldEJ0bjpob3ZlciwgLmJ0bnM6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzdDNTkzQTtcbn1cblxuLnNlYXJjaEFyZWF7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XG4gIGZvbnQtc2l6ZToxLjhyZW07XG59XG5cbiNyZXNldEJ0bntcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDAuNXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICBib3JkZXItcmFkaXVzOiAwLjV2dztcblxufVxuXG4jc3Bpbm5lcntcbiAgbWFyZ2luOiBhdXRvIDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW50IC5jb250ZW50LW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtb3ZlcmxheXtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRlbnQtaW1hZ2V7XG5cbn1cblxuLmNvbnRlbnQtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlsc3tcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRlbnQtZGV0YWlscyBoM3tcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmFkZUluLWJvdHRvbXtcbiAgdG9wOiA4MCU7XG59XG5cbi5zcGlubmVyIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjN0M1OTNBO1xuICAgICAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ratings',
                templateUrl: './ratings.component.html',
                styleUrls: ['./ratings.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function ResetPasswordComponent_ng_container_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r3.message, " ");
} }
function ResetPasswordComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_15_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("email").hasError(error_r3.type) && (ctx_r0.resetPasswordForm.get("email").dirty || ctx_r0.resetPasswordForm.get("email").touched));
} }
function ResetPasswordComponent_ng_container_24_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r6.message, " ");
} }
function ResetPasswordComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_24_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordForm.get("password").hasError(error_r6.type) && (ctx_r1.resetPasswordForm.get("password").dirty || ctx_r1.resetPasswordForm.get("password").touched));
} }
function ResetPasswordComponent_ng_container_33_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r9.message, " ");
} }
function ResetPasswordComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_33_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.resetPasswordForm.get("confirmPassword").hasError(error_r9.type) && (ctx_r2.resetPasswordForm.get("confirmPassword").dirty || ctx_r2.resetPasswordForm.get("confirmPassword").touched));
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class ResetPasswordComponent {
    constructor(formBuilder, api, router) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        //error messages used during login/register validation
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Invalid email format.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must have at least 6 characters.' }
            ],
            'confirmPassword': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'Password must have at least 6 characters.' }
            ],
        };
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    toggleFieldTextType2() {
        this.fieldTextType2 = !this.fieldTextType2;
    }
    //method for logging in user and getting the token associated with the said user
    resetPassword(currentUser) {
        this.resetDone = '';
        this.formError = '';
        if (this.doPasswordsMatch(this.resetPasswordForm.controls['password'].value, this.resetPasswordForm.controls['confirmPassword'].value) == true) {
            this.verifyUser = {
                "username": currentUser.email,
                "password": currentUser.password
            };
            if (this.verifyUser != null) {
                this.api.resetPassword(this.verifyUser).subscribe(() => { }, error => {
                    if (error.status >= 401) {
                        this.formError = error.error;
                    }
                    else {
                        this.router.navigate(['/resetSuccess', { message: "Password reset. Please login" }]);
                    }
                });
            }
        }
        else {
            this.formError = "Passwords do not match";
        }
    }
    ngOnInit() {
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    //checking if passwords match
    doPasswordsMatch(firstPassword, secondPassword) {
        if (firstPassword !== secondPassword) {
            return false;
        }
        else {
            return true;
        }
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 40, vars: 16, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "required", "", "formControlName", "password", 1, "input", 3, "type"], [1, "fa", 3, "ngClass", "click"], ["matInput", "", "required", "", "formControlName", "confirmPassword", 1, "input", 3, "type"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btns", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "id", "two", 1, "btns"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_8_listener() { return ctx.resetPassword(ctx.resetPasswordForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_ng_container_15_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_i_click_22_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResetPasswordComponent_ng_container_24_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_i_click_31_listener() { return ctx.toggleFieldTextType2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ResetPasswordComponent_ng_container_33_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType2 ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, !ctx.fieldTextType2, ctx.fieldTextType2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.resetPasswordForm.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\n\n.container[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n}\n\nh3[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n    font-family: keep-calm;\n    margin-left: 30px;\n}\n\n.btns[_ngcontent-%COMP%]{\n    background-color: #7C593A;\n    color: white;\n}\n\n#two[_ngcontent-%COMP%]{\n    color: white;\n}\n\n#one[_ngcontent-%COMP%]{\n    margin: 5%;\n}\n\n.regForm[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 300px;\n    text-align: center;\n    margin-top: 10%;\n}\n\n.regFormContent[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\n\n.cardTitle[_ngcontent-%COMP%]{\n    margin-left: 9.5rem;\n}\n\n#passError[_ngcontent-%COMP%]{\n    color: red;\n}\n\n#resetDone[_ngcontent-%COMP%]{\n    color: #7C593A;\n}\n\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTtcblxuLmNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5oM3tcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5idG5ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jdHdve1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI29uZXtcbiAgICBtYXJnaW46IDUlO1xufVxuXG4ucmVnRm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5yZWdGb3JtQ29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uY2FyZFRpdGxle1xuICAgIG1hcmdpbi1sZWZ0OiA5LjVyZW07XG59XG5cbiNwYXNzRXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuI3Jlc2V0RG9uZXtcbiAgICBjb2xvcjogIzdDNTkzQTtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/reset-success/reset-success.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/reset-success/reset-success.component.ts ***!
  \****************************************************************/
/*! exports provided: ResetSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSuccessComponent", function() { return ResetSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class ResetSuccessComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        let message = this.route.snapshot.paramMap.get('message');
    }
}
ResetSuccessComponent.ɵfac = function ResetSuccessComponent_Factory(t) { return new (t || ResetSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ResetSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetSuccessComponent, selectors: [["app-reset-success"]], decls: 12, vars: 0, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], ["routerLink", "/login", "mat-raised-button", "", "id", "two", 1, "btns"]], template: function ResetSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]], styles: [".container[_ngcontent-%COMP%]{\n  background-color: #7C593A;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n}\n\nh3[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n    font-family: keep-calm;\n    margin-left: 25px; \n}\n\n.btns[_ngcontent-%COMP%]{\n    background-color: #7C593A;\n    color: white;\n}\n\n.regForm[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 300px;\n    text-align: center;\n    margin-top: 10%;\n}\n\n.regFormContent[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\n\n.cardTitle[_ngcontent-%COMP%]{\n    margin-left: 1rem;\n    margin-top: 1rem;\n}\n\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtc3VjY2Vzcy9yZXNldC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXN1Y2Nlc3MvcmVzZXQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5oM3tcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7IFxufVxuXG4uYnRuc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlZ0Zvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ucmVnRm9ybUNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNhcmRUaXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-success',
                templateUrl: './reset-success.component.html',
                styleUrls: ['./reset-success.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function SignupComponent_ng_container_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r4.message, " ");
} }
function SignupComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_15_mat_error_1_Template, 2, 1, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("name").hasError(error_r4.type) && (ctx_r0.signUpForm.get("name").dirty || ctx_r0.signUpForm.get("name").touched));
} }
function SignupComponent_ng_container_22_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r7.message, " ");
} }
function SignupComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_22_mat_error_1_Template, 2, 1, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signUpForm.get("email").hasError(error_r7.type) && (ctx_r1.signUpForm.get("email").dirty || ctx_r1.signUpForm.get("email").touched));
} }
function SignupComponent_ng_container_31_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r10.message, " ");
} }
function SignupComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_31_mat_error_1_Template, 2, 1, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.get("password").hasError(error_r10.type) && (ctx_r2.signUpForm.get("password").dirty || ctx_r2.signUpForm.get("password").touched));
} }
function SignupComponent_ng_container_40_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r13.message, " ");
} }
function SignupComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_40_mat_error_1_Template, 2, 1, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signUpForm.get("confirmPassword").hasError(error_r13.type) && (ctx_r3.signUpForm.get("confirmPassword").dirty || ctx_r3.signUpForm.get("confirmPassword").touched));
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class SignupComponent {
    constructor(formBuilder, api, router) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        //error messages used during login/register validation
        this.error_messages = {
            'name': [
                { type: 'required', message: 'Full name is required.' },
                { type: 'pattern', message: 'Name can only consist of letters' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Invalid email format.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must have at least 6 characters.' }
            ],
            'confirmPassword': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'Password must have at least 6 characters.' }
            ],
        };
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    toggleFieldTextType2() {
        this.fieldTextType2 = !this.fieldTextType2;
    }
    //method for creating a new user. A new JSON object is created and sent to the node api
    createNewUser(createUser) {
        this.formError = '';
        if (this.doPasswordsMatch(this.signUpForm.controls['password'].value, this.signUpForm.controls['confirmPassword'].value) == true) {
            this.newUser = {
                "name": createUser.name,
                "username": createUser.email,
                "password": createUser.password
            };
            if (this.newUser != null) {
                this.api.createUser(this.newUser).subscribe(data => {
                    console.log(data);
                    localStorage.removeItem('name');
                    localStorage.setItem('name', data['name']);
                    localStorage.removeItem('token');
                    localStorage.setItem('token', data['token']);
                    this.router.navigate(['/ratings']);
                }, error => {
                    console.log('Error from API: ', error.error);
                    if (error.status >= 401) {
                        this.formError = error.error;
                    }
                });
            }
        }
        else {
            this.formError = "Passwords do not match";
        }
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    //checking if passwords match
    doPasswordsMatch(firstPassword, secondPassword) {
        if (firstPassword !== secondPassword) {
            //this.formError = "Passwords do not match: " + controlName + " " + matchingControlName;
            return false;
        }
        else {
            //this.formError = "Match: " + controlName + " " + matchingControlName;
            return true;
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 47, vars: 17, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "John Doe", "formControlName", "name", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], ["matInput", "", "required", "", "formControlName", "password", 1, "input", 3, "type"], [1, "fa", 3, "ngClass", "click"], ["matInput", "", "required", "", "formControlName", "confirmPassword", 1, "input", 3, "type"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btn", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "color", "accent", 1, "btns"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_8_listener() { return ctx.createNewUser(ctx.signUpForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter your full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_ng_container_15_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignupComponent_ng_container_22_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_i_click_29_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_ng_container_31_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_i_click_38_listener() { return ctx.toggleFieldTextType2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignupComponent_ng_container_40_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType2 ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, !ctx.fieldTextType2, ctx.fieldTextType2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signUpForm.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".container[_ngcontent-%COMP%]{\n    \n    background-color: #7C593A;\n    height: 100%;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n}\n\n\nh1[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n    font-family: keep-calm;\n}\n\n\n.btns[_ngcontent-%COMP%]{\n    background-color: #7C593A;\n    color:white\n}\n\n\n#one[_ngcontent-%COMP%]{\n    margin: 5%;\n}\n\n\n.regForm[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 300px;\n    text-align: center;\n    margin-top: 5%;\n}\n\n\n.regFormContent[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\n\n\n.cardTitle[_ngcontent-%COMP%]{\n    margin-left: 1rem;\n    margin-top: 1rem;\n}\n\n\n#passError[_ngcontent-%COMP%]{\n    color: red;\n}\n\n\nh3[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n    font-family: keep-calm;\n    padding-left: 78px;\n}\n\n\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEZBQThGO0lBQzlGLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFjay90ZW8tZHVsZHVsYW8tNG9wOV8yQnQyRWctdW5zcGxhc2guanBnJyk7Ki9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cblxuaDF7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xufVxuXG5cbi5idG5ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XG4gICAgY29sb3I6d2hpdGVcbn1cblxuI29uZXtcbiAgICBtYXJnaW46IDUlO1xufVxuXG4ucmVnRm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnJlZ0Zvcm1Db250ZW50e1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jYXJkVGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiNwYXNzRXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuaDN7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xuICAgIHBhZGRpbmctbGVmdDogNzhweDtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rate-dialog/rate-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/rate-dialog/rate-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: RateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateDialogComponent", function() { return RateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function RateDialogComponent_ng_container_7_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r1.message, " ");
} }
function RateDialogComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RateDialogComponent_ng_container_7_mat_error_1_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("rating").hasError(error_r1.type) && (ctx_r0.form.get("rating").dirty || ctx_r0.form.get("rating").touched));
} }
class RateDialogComponent {
    constructor(formBuilder, dialogRef) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.error_messages = {
            'rating': [
                { type: 'pattern', message: 'Number must be between 1 and 5' }
            ]
        };
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^([1-5])$")]
        });
    }
    submit(form) {
        this.dialogRef.close(`${form.rating}`);
    }
}
RateDialogComponent.ɵfac = function RateDialogComponent_Factory(t) { return new (t || RateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
RateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateDialogComponent, selectors: [["app-rate-dialog"]], decls: 13, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["matInput", "", "type", "number", "min", "1", "max", "5", "formControlName", "rating", "placeholder", "Enter Rating", "ngControl", "rating"], [4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button", "mat-dialog-close", ""], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function RateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RateDialogComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rate Puzzle (out of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RateDialogComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGUtZGlhbG9nL3JhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rate-dialog',
                templateUrl: './rate-dialog.component.html',
                styleUrls: ['./rate-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class APIService {
    constructor(http) {
        this.http = http;
    }
    /**
     * User endpoints start here
     */
    //create new user
    createUser(newUser) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/createUser', newUser, httpOptions);
    }
    loginUser(currentUser) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/login', currentUser, httpOptions);
    }
    resetPassword(currentUser) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/resetPassword', currentUser, httpOptions);
    }
    getUser(token) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getUser', token, httpOptions);
    }
    updateName(currentUser) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/updateName', currentUser, httpOptions);
    }
    updateUsername(currentUser) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/updateUsername', currentUser, httpOptions);
    }
    getPuzzlesByUser(token) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getPuzzlesByUser', token, httpOptions);
    }
    getPuzzleRatingsByUser(token) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getPuzzleRatingsByUser', token, httpOptions);
    }
    /**
     * User endpoints end here
     */
    /**
    * Puzzle endpoints start here
    */
    getAllPuzzles() {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getAllPuzzles');
    }
    getAllPuzzleByID(puzzleID) {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID?Id=' + puzzleID);
    }
    createNewPuzzle(puzzle) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzle', puzzle, httpOptions);
    }
    createNewPuzzleRating(rating) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzleRating', rating, httpOptions);
    }
    getAllPuzzleRatings() {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getAllPuzzleRatings');
    }
    getSearchedPuzzles(term) {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getSearchedPuzzles/' + term);
    }
    sharePuzzle(puzzle) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put('https://prometheuspuzzles.herokuapp.com/api/puzzles/sharePuzzle', puzzle, httpOptions);
    }
    stopSharingPuzzle(puzzle) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put('https://prometheuspuzzles.herokuapp.com/api/puzzles/stopSharingPuzzle', puzzle, httpOptions);
    }
    deletePuzzle(puzzle) {
        return this.http.delete('https://prometheuspuzzles.herokuapp.com/api/puzzles/deletePuzzle/' + puzzle);
    }
    findRatingID(rating) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/findRatingID', rating, httpOptions);
    }
    deleteRating(rating) {
        return this.http.delete('https://prometheuspuzzles.herokuapp.com/api/puzzles/deleteRating/' + rating);
    }
}
APIService.ɵfac = function APIService_Factory(t) { return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIService, factory: APIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/js/aiCreation.js":
/*!*************************************!*\
  !*** ./src/assets/js/aiCreation.js ***!
  \*************************************/
/*! exports provided: initializeDataAI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDataAI", function() { return initializeDataAI; });
/* harmony import */ var src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/js/manualCreation.js */ "./src/assets/js/manualCreation.js");


///The structure of each individual/chromosome object
let Chromosome = {
	sites: [],
	fitness: -1,
};

///The structure of each site object
let Site = {
	x: 0,
	y: 0,
	surfaceArea: 0,
}

let generatePuzzleAIButton, colorPalettesDiv;
let tempWidth, tempHeight;
let totalSurfaceArea;

let generationSize = 10 + 1;
let tournamentSize = 4;
let maximumIterations = 150;
let seedString = 'apples';

let sliders = [];
let labels = [];
let numberOfSites = 6;
let desiredProportions = [0.40, 0.20, 0.10, 0.10, 0.10, 0.10];
let groupDistribution = [];

function copyObject(obj)
{
    return JSON.parse(JSON.stringify(obj));
}

function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

let seed = xmur3(seedString);
let rand = mulberry32(seed());

function random(max)
{
    return Math.ceil(rand() * max) - 1;
}

function expandPuzzle(sites, factor)
{
	for(let i = 0; i < sites.length; i++)
	{
		sites[i].x = sites[i].x * factor;
		sites[i].y = sites[i].y * factor;
	}

	return sites;
}

function initializeDataAI()
{
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["initializeData"])('AI');
	generatePuzzleAIButton = document.getElementById('generatePuzzleButtonAI');
	generatePuzzleAIButton.addEventListener('mousedown', generatePuzzleAI);
	generatePuzzleAIButton.remove();

	document.getElementById('nextButton').addEventListener('mousedown', displaySlidersCard);
	// colorPalettesDiv = document.getElementById('colorPalettesAI');
	// colorPalettesDiv.remove();
}

function displaySlidersCard()
{
	numberOfSites = document.getElementById('numberOfPiecesInputBox').value;

	groupDistribution.push(document.getElementById('numberOfPiecesInputBox1').value);
	groupDistribution.push(document.getElementById('numberOfPiecesInputBox2').value);
	groupDistribution.push(document.getElementById('numberOfPiecesInputBox3').value);

	generateSliders(3);

	document.getElementById('inputContainer').appendChild(generatePuzzleAIButton);
}

function generatePuzzleAI()
{
	desiredProportions = [];

	for(let i = 0; i < 3; i++)
	{
		let proportion = (sliders[i].value / groupDistribution[i]) / 100;

		for(let counter = 0; counter < groupDistribution[i]; counter++)
			desiredProportions.push(proportion);
	}

	desiredProportions.sort( function(a, b) { return b - a } );

	document.getElementById('inputContainer').innerHTML = '';
	// document.getElementById('inputContainer').appendChild(colorPalettesDiv);

	let sites = run();
	sites = expandPuzzle(sites, 10);

	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["setSites"])(sites);
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["setDisableEditMode"])(true);
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["clearBoard"])();
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["generateSiteBoundaries"])();
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["createPieces"])();
}

function generateSliders(numberOfSliders)
{
	let inputContainer = document.getElementById('inputContainer');
	let defaultValue = 100/numberOfSliders;

	inputContainer.innerHTML = '';

	for(let i = 0; i < numberOfSliders; i++)
	{
		let slider = document.createElement('input');
		slider.type = 'range';
		slider.min = 1.00;
		slider.max = 100.00 - numberOfSliders + 1;
		slider.value = defaultValue;
		slider.previousValue = defaultValue;
		slider.sliderid = i;
		slider.step = 0.01;

		slider.addEventListener('input', function() {
			let difference = this.previousValue - this.value;
			let distributedValue = (difference/( numberOfSliders - 1 )).toFixed(2);
			let leftover = 0;

			for(let i = 0 ; i < numberOfSliders; i++)
			{
				if(i != this.sliderid)
				{
					let tempValue = ( parseFloat(sliders[i].value) + parseFloat(distributedValue) );
					if(tempValue >= 1.00)
					{
						if(leftover != 0 && ( tempValue + leftover ) >= 1.00)
						{
							tempValue += leftover;
							leftover = 0;
						}

						sliders[i].value = tempValue;
						sliders[i].previousValue = tempValue;
						labels[i].innerHTML = parseInt(tempValue);
					}
					else
					{
						leftover += parseFloat(distributedValue);
					}
				}
			}

			for(let i = 0; leftover != 0 && i < numberOfSliders; i++)
			{
				if(i != this.sliderid)
				{
					let tempValue = parseFloat(sliders[i].value) + leftover;
					if(tempValue >= 1.00)
					{
						sliders[i].value = tempValue;
						sliders[i].previousValue = tempValue;
						labels[i].innerHTML = parseInt(tempValue);
						leftover = 0;
					}
				}
			}

			this.previousValue = this.value;
			labels[this.sliderid].innerHTML = parseInt(this.value);
		});

		let headerLabel = document.createElement('label');
		headerLabel.innerHTML = 'Size ' + (i+1);

		let valueLabel = document.createElement('label');
		valueLabel.innerHTML = defaultValue.toFixed(0);

		let br = document.createElement('br');

		sliders.push(slider);
		labels.push(valueLabel);


		inputContainer.appendChild(headerLabel);
		inputContainer.appendChild(slider);
		inputContainer.appendChild(valueLabel);
		inputContainer.appendChild(br);
	}
}

///Executes the genetic algorithm and returns the resulting site array
function run()
{
	let currentGeneration = [], nextGeneration = [];
	let parentX, parentY, children;
	let x, y;
	tempWidth = src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["width"]/10;
	tempHeight = src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["height"]/10;
	totalSurfaceArea = tempWidth * tempHeight;

	nextGeneration = initializeGeneration();
	for(let generation = 0; generation < maximumIterations; generation++)
	{
		currentGeneration = nextGeneration;
		nextGeneration = [];
		nextGeneration.push( getFittest(currentGeneration) );
		for(let i = 0; i < generationSize - 1; i+=2)
		{
			parentX = runTournament(currentGeneration);
			parentY = runTournament(currentGeneration);
			children = crossover(parentX, parentY);
			mutate(children[0]);
			mutate(children[1]);
			calculateAndSetFitness(children[0]);
			calculateAndSetFitness(children[1]);
			nextGeneration.push(...children);
		}
	}

	console.log(nextGeneration);
	console.log('done!');
	return getFittest(nextGeneration).sites;
}

///Returns the fittest chromosome from generation
function getFittest(generation)
{
	let fittestChromosome = null;
	fittestChromosome = generation[0];

	for(let i = 1; i < generationSize; i++)
		if(generation[i].fitness < fittestChromosome.fitness)
			fittestChromosome = generation[i];

	return fittestChromosome;
}

///Randomly selected a site and a movement direction; then proceed to execute movement using a random offset
function mutate(chromosome)
{
	// let siteIndex = random(numberOfSites);
	let selectedSite = chromosome.sites[random(numberOfSites)];
	let offset = random(5);
	let movementDirection = random(4);

	///Move site to the right by offset (increment x by offset), or move to the left if at board edge
	if(movementDirection == 0)
	{
		if(selectedSite.x + offset < tempWidth)
			selectedSite.x = selectedSite.x + offset;
		else
			selectedSite.x = selectedSite.x - offset;
	}
	///Move site to the left by offset (decrement x by offset), or move to the right if at the board edge
	else if(movementDirection == 1)
	{
		if(selectedSite.x - offset > 0)
			selectedSite.x = selectedSite.x - offset;
		else
			selectedSite.x = selectedSite.x + offset;
	}
	///Move site upwards by offset (decrement y by offset), or move downwards if at the board edge
	else if(movementDirection == 2)
	{
		if(selectedSite.y - offset > 0)
			selectedSite.y = selectedSite.y - offset;
		else
			selectedSite.y = selectedSite.y + offset;
	}
	///Move site downwards by offset (increment y by offset), or move upwards if at board edge
	else if(movementDirection == 3)
	{
		if(selectedSite.y + offset < tempHeight)
			selectedSite.y = selectedSite.y + offset;
		else
			selectedSite.y = selectedSite.y - offset;
	}
}

/**
	Crossover operation; randomly select a site index and swap the sites located on said index.
	This function will create two new children, swap their sites and return an array containing them.
**/
function crossover(chromosomeX, chromosomeY)
{
	let swapIndex = random(numberOfSites);
	let childX = copyObject(chromosomeX);
	let childY = copyObject(chromosomeY);

	let tempSite = childX.sites[swapIndex];
	childX.sites[swapIndex] = childY.sites[swapIndex];
	childY.sites[swapIndex] = tempSite;

	return [childX, childY];
}

///Tournament selection of parent for next generation - fittest from a random bunch is returned.
function runTournament(generation)
{
	let chosenChromosome, fittestChromosome = null;

	for(let i = 0; i < tournamentSize; i++)
	{
		chosenChromosome = generation[random(generationSize)];
		if(fittestChromosome == null || chosenChromosome.fitness < fittestChromosome.fitness)
			fittestChromosome = chosenChromosome;
	}

	return fittestChromosome;
}

///Create and return the initial generation of chromosomes
function initializeGeneration()
{
	let currentGeneration = [];
	for(let i = 0; i < generationSize; i++)
	{
		let newChromosome = copyObject(Chromosome);
		for(let siteIndex = 0; siteIndex < numberOfSites; siteIndex++)
		{
			let tempSite = copyObject(Site);
			tempSite.x = random(tempWidth + 1);
			tempSite.y = random(tempHeight + 1);
			newChromosome.sites.push(tempSite);
		}

		calculateAndSetFitness(newChromosome);
		currentGeneration.push(newChromosome);
	}

	return currentGeneration;
}

///Calculate and set the fitness of a chromosome
function calculateAndSetFitness(chromosome)
{
	determineAndSetSiteBoundaries(chromosome);
	sortSites(chromosome);
	let fitness = 0, difference;

	for(let i = 0; i < desiredProportions.length; i++)
	{
		difference = ( desiredProportions[i] * totalSurfaceArea ) - chromosome.sites[i].surfaceArea;
		if(difference < 0)
			difference *= -1;
		fitness += difference;
	}

	chromosome.fitness = fitness;
}

///Sort the sites according to surface area from highest to lowest
function sortSites(chromosome)
{
	let sites = chromosome.sites;
	sites.sort(function(siteA, siteB) { return 	siteB.surfaceArea - siteA.surfaceArea });
}

///Generate the boundaries around the sites
function determineAndSetSiteBoundaries(chromosome)
{
	for(let i = 0; i < numberOfSites; i++)
		chromosome.sites[i].surfaceArea = 0;

	for(let row = 0; row < tempHeight; row++)
	{
		for(let col = 0; col < tempWidth; col++)
		{
			let distances = Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["calculateDistancesFromSitesToPoint"])(col, row, chromosome.sites);
			let equidistantPoints = Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["equidistantPointsPresent"])(distances);

			chromosome.sites[equidistantPoints[0]].surfaceArea += 1;
		}
	}
}


/***/ }),

/***/ "./src/assets/js/manualCreation.js":
/*!*****************************************!*\
  !*** ./src/assets/js/manualCreation.js ***!
  \*****************************************/
/*! exports provided: width, height, setSites, setDisableEditMode, initializeData, calculateDistancesFromSitesToPoint, equidistantPointsPresent, generateSiteBoundaries, createPieces, clearBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSites", function() { return setSites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisableEditMode", function() { return setDisableEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeData", function() { return initializeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDistancesFromSitesToPoint", function() { return calculateDistancesFromSitesToPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equidistantPointsPresent", function() { return equidistantPointsPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSiteBoundaries", function() { return generateSiteBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPieces", function() { return createPieces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBoard", function() { return clearBoard; });
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_0__);



let apiURL = "http://localhost:3200/api/puzzles/createPuzzle";
let distanceMetric = 'euclidean';
let token;

let contentDiv = null;
let aiContentDiv = null;
let canvas;
let canvasCoords;
let width =  500;
let height = 500;
let stage;
let layer;
let square;
let pointsArray = [];
let sites = [];
let siteBoundaries;
let pieces = [];
let precision = 0;

let colorPalettes = [];
//Default palette
let selectedPalette;
let paletteCounter = 0;
let radioButtons = [];

let hoverOverPoint = false;
let disableEditMode = false;
let deletePointButtonClicked = false;
let piecesJSONObject;

let editIcon, deleteIcon;

///Make an array with desired colors - can be hex values or names
let defaultPalette = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite', 'Red', 'Green'];
///Add the array to the page using this function with the array as a first and the desired name as a second parameter
addColorPalette(defaultPalette, "Default");

let shadesOfRedPalette = ['Crimson', 'DarkRed', 'Coral', 'FireBrick', 'IndianRed', 'Maroon', 'OrangeRed', 'PaleVioletRed', 'Red', 'Tomato', 'Brown'];
addColorPalette(shadesOfRedPalette, "Shades Of Red");

let shadesOfGreenPalette = ['Teal', 'MediumSpringGreen', 'LimeGreen', 'ForestGreen', 'MediumSeaGreen', 'LawnGreen', 'PaleGreen', 'GreenYellow', 'Aquamarine'];
addColorPalette(shadesOfGreenPalette, "Shades of Green");

let shadesOfBluePalette = ['DarkBlue', 'DeepSkyBlue', 'MediumBlue', 'DodgerBlue', 'MidnightBlue', 'RoyalBlue', 'DarkSlateBlue', 'CornflowerBlue', 'SkyBlue', 'PowderBlue'];
addColorPalette(shadesOfBluePalette, "Shades of Blue");
///Add a color palette to the page and needed functionality
function addColorPalette(arrayOfColors, paletteName)
{
	colorPalettes.push(arrayOfColors);
	// let radioButton = document.createElement('mat-radio-button');
	// let radioButton = document.createElement('input');
	// radioButton.type = 'radio';
	// radioButton.class = 'radio-button';
	// radioButton.value = paletteName;
	// radioButton.innerHTML = paletteName;
	// radioButton.name = 'colorPalette';
	// radioButton.paletteid = paletteCounter++;
	// radioButton.addEventListener('mousedown', function() {
	// 	selectedPalette = colorPalettes[this.paletteid];
	// 	changePuzzleColorPalette(selectedPalette);
	// });

	// radioButtons.push(radioButton);
}

///Changes the displayed color palette used on the puzzle and re-renders it
function changePuzzleColorPalette(colors)
{
	if(pieces.length > 0)
	{
		layer.removeChildren();
		for(let i = 0; i < pieces.length; i++)
		{
			pieces[i].attrs.stroke = colors[i % colors.length];
			layer.add(pieces[i]);
		}

		layer.draw();
	}
}

///Randomizes the color palette used on the puzzle
function randomizePuzzleColorPalette()
{
	if(pieces.length > 0)
	{
		layer.removeChildren();
		for(let i = 0; i < pieces.length; i++)
		{
			pieces[i].attrs.stroke = getRandomRGB();
			layer.add(pieces[i]);
		}

		layer.draw();
	}
}

///Returns a random RGB value
function getRandomRGB()
{
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

///Initialize data and set functions for buttons
function initializeData(appendedString)
{
	if(appendedString == undefined)
		appendedString = '';

	sites = [];
	siteBoundaries = [];

	disableEditMode = false;

	selectedPalette = defaultPalette;
	canvas = document.getElementById('container'+appendedString);
	stage = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Stage({
		container: 'container'+appendedString,
		width: width,
		height: height,
	});

	layer = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Layer();

	square = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Rect({
		x: 0,
		y: 0,
		width: width,
		height: height,
		stroke: 'black',
		strokeWidth: 2,

	});

	layer.add(square);
	stage.add(layer);

	canvas.addEventListener('mousedown', function(event){
		if(!disableEditMode && !hoverOverPoint)
		{
			canvasCoords = canvas.getBoundingClientRect();
			let x = event.clientX - canvasCoords.x;
			let y = event.clientY - canvasCoords.y;

			let point = createPoint(x, y);

			layer.add(point);
			layer.draw();
			console.log("X: " + x + " Y: " + y);
		}
	});

	// addColorPalettePicker(appendedString);

	if(document.getElementById('generatePuzzleButton') != null)
		document.getElementById('generatePuzzleButton').addEventListener('mousedown', generatePuzzle);

	document.getElementById('euclideanButton'+appendedString).addEventListener('mousedown', function(){
		setDistanceMetric('euclidean');
	});

	document.getElementById('manhattanButton'+appendedString).addEventListener('mousedown', function(){
		setDistanceMetric('manhattan');
	});

	document.getElementById('saveButton'+appendedString).addEventListener('mousedown', function() {
		savePuzzle(appendedString);
	});

	if(document.getElementById('deletePointButton') != null)
	{
		editIcon = document.getElementById('editPointButtonIcon');
		deleteIcon = document.getElementById('deletePointButtonIcon');
		if(editIcon != null)
			editIcon.remove();

		document.getElementById('deletePointButton').addEventListener('mousedown', function() {
			deletePointButtonClicked = !deletePointButtonClicked;
			if(deletePointButtonClicked)
			{
				disableEditMode = true;
				this.innerHTML = '';
				this.appendChild(editIcon);
				this.innerHTML += 'Edit Mode';
			}
			else
			{
				disableEditMode = false;
				this.innerHTML = '';
				this.appendChild(deleteIcon);
				this.innerHTML += 'Delete Mode';
			}
		});
	}

	document.getElementById('randomizeColorsButton'+appendedString).addEventListener('mousedown', randomizePuzzleColorPalette);

	let palettes = document.getElementsByClassName('colorPalettes');

	for(let paletteIndex = 0; paletteIndex < palettes.length; paletteIndex++)
	{
		palettes[paletteIndex].addEventListener('mousedown', function(){
			// console.log(this.getAttribute('paletteid'));
			selectedPalette = colorPalettes[this.getAttribute('paletteid')];
			changePuzzleColorPalette(selectedPalette);
		});
	}

	// document.getElementById('saveAndSubmitButton').addEventListener('mousedown', function() {
	// 	// let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });
	// 	// document.getElementById('testingImg').src = puzzleImage;
	// 	savePuzzle(true);
	// });
}

function addColorPalettePicker(appendedString)
{
	let colorPaletteDiv = document.getElementById('colorPalettes'+appendedString);
	let label;
	for(let i = 0; i < radioButtons.length; i++)
	{
		label = document.createElement('label');
		label.innerHTML = radioButtons[i].value;
		colorPaletteDiv.appendChild(radioButtons[i]);
		colorPaletteDiv.appendChild(label);
	}
}

///Create a post ajax request and send it to the API in order to save the user's created puzzle
function savePuzzle(appendedString)
{
	token = document.getElementById('tokenLabel').innerHTML;

	let puzzleName = document.getElementById('puzzleNameInputBox'+appendedString).value;
	let puzzleDescription = document.getElementById('puzzleDescriptionInputBox'+appendedString).value;

	let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });

	let jsonData = {
		token: token,
		name: puzzleName,
		description: puzzleDescription,
		puzzleObject: piecesJSONObject,
		image: puzzleImage,
		shared: false
	};

	$.ajax({
		type: 'POST',
		url: apiURL,
		headers: {
			'Access-Control-Allow-Origin' : '*'
		},
		contentType: 'application/json',
		data: JSON.stringify(jsonData),
		dataType: 'json',
		success: function(data, status) {
			console.log(data);
			console.log(status);
		},
		error: function(data, status) {
			console.log(data);
			console.log(status);
		}
	});
}

///Set the selected distance metric for the puzzle
function setDistanceMetric(metric)
{
	distanceMetric = metric;
}

///Set disableEditMode to true to prevent user from clicking it any further
function setDisableEditMode(bool)
{
	disableEditMode = bool;
}

///Set the sites array
function setSites(tempSites)
{
	sites = tempSites;
}

///Clear the board
function clearBoard()
{
	piecesJSONObject = {
		'pieces' : []
	};

	pieces = [];
	layer.destroyChildren();
}

///Create a visual representation of where the user clicks
function createPoint(x, y)
{
	let point = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Circle({
		x: x,
		y: y,
		radius: 1,
		stroke: 'black',
		strokeWidth: 4,
		draggable: true
	});

	point.on('mouseover', function (event){
		document.onmousemove = function(event) {
			canvasCoords = canvas.getBoundingClientRect();
			point.x(event.clientX - canvasCoords.x);
			point.y(event.clientY - canvasCoords.y);
		};

		hoverOverPoint = true;
		document.body.style.cursor = 'pointer';
	});

	point.on('mouseout', function(event) {
		document.onmousemove = null;
		hoverOverPoint = false;
		document.body.style.cursor = 'default';
	});

	point.on('click', function(event) {
		// console.log('clicked!');
		if(deletePointButtonClicked)
		{
			document.onmousemove = null;
			hoverOverPoint = false;
			document.body.style.cursor = 'default';
			point.destroy();
			layer.draw();
		}
	});

	return point;
}

///Calls the necessary functions to generate puzzle's vertiecs as well as the visual representation
function generatePuzzle()
{
	//Testing data
	// {"sites":[78,108,300,102,100,247,333,281,184,331],"queries":[]}
	// sites = [
	// {
	// 	x:78,
	// 	y:108,
	// },
	// {
	// 	x:300,
	// 	y:102,
	// },
	// {
	// 	x:100,
	// 	y:247,
	// },
	// {
	// 	x:333,
	// 	y:281,
	// },
	// {
	// 	x:184,
	// 	y:331,
	// }
	// ];

	pointsArray = layer.getChildren(function(node) {
		return node.getClassName() === 'Circle';
	});

	for (let i = pointsArray.length - 1; i >= 0; i--) {
		sites.push({
			x: pointsArray[i].attrs.x,
			y: pointsArray[i].attrs.y,
		});
	}

	clearBoard();

	///This makes sure that the generate button will only generate once
	disableEditMode = true;

	generateSiteBoundaries();
	createPieces();
}

///Creates the puzzle pieces from the siteBoundaries for each site(position selected by the user)
function createPieces()
{
	for(let i = 0; i < sites.length; i++)
	{
		let trimmedPoints = trimPoints(siteBoundaries[i]);
		let piece = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Line({
			points: trimmedPoints,
			stroke: selectedPalette[i % selectedPalette.length],
			strokeWidth: 1,
			draggable: true,
		});

		piece.on('mouseover', function (){
			document.body.style.cursor = 'pointer';
		});

		piece.on('mouseout', function() {
			document.body.style.cursor = 'default';
		});

		pieces.push(piece);
		piecesJSONObject.pieces.push(trimmedPoints);
		layer.add(piece);
	}
	layer.draw();
	piecesJSONObject = JSON.stringify(piecesJSONObject);
}

///Shortens the array of vertices for each puzzle piece
function trimPoints(pointArray)
{
	let trimmedPoints = [];
	let lastPointCol = -1;
	let firstPointCol = pointArray[0];
	let currentRow = pointArray[1];
	let crissCross = 1;

	for(let index = 0; index < pointArray.length; index+=2)
	{
		if(currentRow != pointArray[index+1])
		{
			if(crissCross == 1)
			{
				trimmedPoints.push(firstPointCol, currentRow);
				trimmedPoints.push(lastPointCol, currentRow);
				crissCross = -1;
			}
			else
			{
				trimmedPoints.push(lastPointCol, currentRow);
				trimmedPoints.push(firstPointCol, currentRow);
				crissCross - 1;
			}

			firstPointCol = pointArray[index];
			lastPointCol = pointArray[index];
			currentRow = pointArray[index+1];
		}
		else
		{
			lastPointCol = pointArray[index];
		}
	}

	return trimmedPoints;
}

///Generate the boundaries around the sites
function generateSiteBoundaries()
{
	// console.log(sites);
	for(let i = 0; i < sites.length; i++)
		siteBoundaries[i] = [];

	for(let row = 0; row < height; row++)
	{
		for(let col = 0; col < width; col++)
		{
			let distances = calculateDistancesFromSitesToPoint(col, row, sites);
			let equidistantPoints = equidistantPointsPresent(distances);

			siteBoundaries[equidistantPoints[0]].push(col);
			siteBoundaries[equidistantPoints[0]].push(row);
		}
	}
}

///Determines which site is closest to a pixel position
function equidistantPointsPresent(distances)
{
	let returnArray = [];
	let minimumDistance = Math.min(...distances);

	if(distanceMetric === 'euclidean')
		minimumDistance = minimumDistance.toFixed(precision) + '';

	let index = 0, counter = 0;

	while(index != -1)
	{
		index = distances.indexOf(minimumDistance);
		if(index != -1)
		{
			returnArray.push(index+counter);
			distances.splice(index, 1);
			counter++;
		}
	}

	return returnArray;
}

///Calculates the distances from each site to pixel in position (xOfPoint, yOfPoint) and returns an array
function calculateDistancesFromSitesToPoint(xOfPoint, yOfPoint, sitePoints)
{
	let result = [];
	for(let i = 0; i < sitePoints.length; i++)
		result.push(calculateDistance(xOfPoint, yOfPoint, sitePoints[i].x, sitePoints[i].y));

	return result;
}

///Calculates the distance from point1 to point2 using the selected distance metrix
function calculateDistance(point1X, point1Y, point2X, point2Y)
{
	if(distanceMetric === 'euclidean')
		return calculateEuclideanDistance(point1X, point1Y, point2X, point2Y);
	else if(distanceMetric === 'manhattan')
		return calculateManhattanDistance(point1X, point1Y, point2X, point2Y);
}

///Calculates and returns the Euclidean distance
function calculateEuclideanDistance(point1X, point1Y, point2X, point2Y)
{
	let result = Math.pow( Math.pow( point1X - point2X, 2 ) + Math.pow( point1Y - point2Y, 2 ), 0.5 );
	return result.toFixed(precision);
}

///Calculates and returns the Manhattan distance
function calculateManhattanDistance(point1X, point1Y, point2X, point2Y)
{
	let resultX = point1X - point2X;
	if(resultX < 0)
		resultX *= -1;
	let resultY = point1Y - point2Y;
	if(resultY < 0)
		resultY *= -1;
	let result = resultX + resultY;
	return result;
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jayni\Documents\Campus Stuff\2020\COS301 Software Engineering\Capstone Project\GIT\Puzzle-Generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map