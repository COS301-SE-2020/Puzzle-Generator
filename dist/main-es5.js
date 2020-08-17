function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/index/index.component */
    "./src/app/pages/index/index.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/profile-puzzles/profile-puzzles.component */
    "./src/app/pages/profile-puzzles/profile-puzzles.component.ts");
    /* harmony import */


    var _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/profile-ratings/profile-ratings.component */
    "./src/app/pages/profile-ratings/profile-ratings.component.ts");
    /* harmony import */


    var _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/ratings/ratings.component */
    "./src/app/pages/ratings/ratings.component.ts");
    /* harmony import */


    var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/reset-password/reset-password.component */
    "./src/app/pages/reset-password/reset-password.component.ts");
    /* harmony import */


    var _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/reset-success/reset-success.component */
    "./src/app/pages/reset-success/reset-success.component.ts");
    /* harmony import */


    var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/create/create.component */
    "./src/app/pages/create/create.component.ts");
    /* harmony import */


    var _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/aicreate/aicreate.component */
    "./src/app/pages/aicreate/aicreate.component.ts");

    var routes = [{
      path: 'index',
      component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }, {
      path: 'signup',
      component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'profile',
      component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }, {
      path: 'profilePuzzles',
      component: _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePuzzlesComponent"]
    }, {
      path: 'profileRatings',
      component: _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_7__["ProfileRatingsComponent"]
    }, {
      path: 'ratings',
      component: _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_8__["RatingsComponent"]
    }, {
      path: 'resetPassword',
      component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]
    }, {
      path: 'resetSuccess',
      component: _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_10__["ResetSuccessComponent"]
    }, {
      path: 'create',
      component: _pages_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"]
    }, {
      path: 'aicreate',
      component: _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_12__["AICreateComponent"]
    }, // otherwise redirect to home
    {
      path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'prometheus-puzzles';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@font-face{\r\n  font-family: keep-calm;\r\n  src: url('KeepCalm-Medium.ttf');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOztBQUVyRTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUg7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQW1EO0FBQ3JEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzXCI7Ki9cclxuXHJcbi8qIGJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmV4cGFuZGVkLXRvb2xiYXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9rZWVwX2NhbG0vS2VlcENhbG0tTWVkaXVtLnR0ZicpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/index/index.component */
    "./src/app/pages/index/index.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/ratings/ratings.component */
    "./src/app/pages/ratings/ratings.component.ts");
    /* harmony import */


    var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/reset-password/reset-password.component */
    "./src/app/pages/reset-password/reset-password.component.ts");
    /* harmony import */


    var _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/reset-success/reset-success.component */
    "./src/app/pages/reset-success/reset-success.component.ts");
    /* harmony import */


    var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/create/create.component */
    "./src/app/pages/create/create.component.ts");
    /* harmony import */


    var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./rate-dialog/rate-dialog.component */
    "./src/app/rate-dialog/rate-dialog.component.ts");
    /* harmony import */


    var _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/profile-puzzles/profile-puzzles.component */
    "./src/app/pages/profile-puzzles/profile-puzzles.component.ts");
    /* harmony import */


    var _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/profile-ratings/profile-ratings.component */
    "./src/app/pages/profile-ratings/profile-ratings.component.ts");
    /* harmony import */


    var _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/aicreate/aicreate.component */
    "./src/app/pages/aicreate/aicreate.component.ts"); //
    //pages


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_index_index_component__WEBPACK_IMPORTED_MODULE_24__["IndexComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"], _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_29__["RatingsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__["ResetPasswordComponent"], _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_31__["ResetSuccessComponent"], _pages_create_create_component__WEBPACK_IMPORTED_MODULE_32__["CreateComponent"], _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_33__["RateDialogComponent"], _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_34__["ProfilePuzzlesComponent"], _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_35__["ProfileRatingsComponent"], _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_36__["AICreateComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_index_index_component__WEBPACK_IMPORTED_MODULE_24__["IndexComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"], _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_29__["RatingsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__["ResetPasswordComponent"], _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_31__["ResetSuccessComponent"], _pages_create_create_component__WEBPACK_IMPORTED_MODULE_32__["CreateComponent"], _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_33__["RateDialogComponent"], _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_34__["ProfilePuzzlesComponent"], _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_35__["ProfileRatingsComponent"], _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_36__["AICreateComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot()],
          entryComponents: [_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_33__["RateDialogComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    function NavbarComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manual");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Ratings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Puzzles");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          this.router.navigate(['/index']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = localStorage.getItem('name');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 23,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "logo"], ["src", "assets/images/logo_nav.png", 1, "navimg"], ["id", "navCustom", "SideClass", "navbar"], ["routerLinkActive", "active", 1, "nav", "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/ratings", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], [1, "caret"], ["class", "dropdown-menu dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], [1, "navbar-text"], ["id", "logout", 3, "click"], ["role", "menu", 1, "dropdown-menu", "dropdown", "dropdown-primary"], ["routerLink", "/create", "mdbWavesEffect", "", 1, "dropdown-item", "waves-light"], ["routerLink", "/aicreate", "mdbWavesEffect", "", 1, "dropdown-item", "waves-light"], ["routerLink", "/profile", "mdbWavesEffect", "", 1, "dropdown-item", "waves-light"], ["routerLink", "/profileRatings", "mdbWavesEffect", "", 1, "dropdown-item", "waves-light"], ["routerLink", "/profilePuzzles", "mdbWavesEffect", "", 1, "dropdown-item", "waves-light"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-navbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 7, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_div_18_Template, 9, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_21_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hello, ", ctx.name, " ");
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownMenuDirective"]],
      styles: ["#navCustom nav{\r\n  background-color: #7C593A;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]{\r\n  color: white;\r\n  margin-right: 1.5vw;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar-text[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] { color: #7C593A !important; }\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  background-color: #7C593A;\r\n  color: white;\r\n  padding: 1vw;\r\n  font-size: 2rem;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]:hover{\r\n  background-color:  white;\r\n  color: #7C593A;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem !important;\r\n  color: white !important;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  height: 14rem;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n}\r\n\r\n.navimg[_ngcontent-%COMP%]{ \r\n  height: 13rem;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%]{\r\n  margin-left: 0.5vw !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUEsc0JBQXNCLHlCQUF5QixFQUFFOztBQUVqRDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjbmF2Q3VzdG9tIG5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubmF2YmFyLXRleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbnVsLm5hdiBsaTpob3ZlciA+IGEgeyBjb2xvcjogIzdDNTkzQSAhaW1wb3J0YW50OyB9XHJcblxyXG5zcGFue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDF2dztcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbiNsb2dvdXQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlO1xyXG4gIGNvbG9yOiAjN0M1OTNBO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW17XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgaGVpZ2h0OiAxNHJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG4ubmF2aW1neyBcclxuICBoZWlnaHQ6IDEzcmVtO1xyXG59XHJcblxyXG4uY2FyZXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/aicreate/aicreate.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/aicreate/aicreate.component.ts ***!
    \******************************************************/

  /*! exports provided: AICreateComponent */

  /***/
  function srcAppPagesAicreateAicreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AICreateComponent", function () {
      return AICreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_assets_js_aiCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/assets/js/aiCreation.js */
    "./src/assets/js/aiCreation.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AICreateComponent = /*#__PURE__*/function () {
      function AICreateComponent() {
        _classCallCheck(this, AICreateComponent);
      }

      _createClass(AICreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(src_assets_js_aiCreation_js__WEBPACK_IMPORTED_MODULE_1__["initializeDataAI"])();
          this.token = localStorage.getItem('token');
        }
      }]);

      return AICreateComponent;
    }();

    AICreateComponent.ɵfac = function AICreateComponent_Factory(t) {
      return new (t || AICreateComponent)();
    };

    AICreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AICreateComponent,
      selectors: [["app-aicreate"]],
      decls: 72,
      vars: 1,
      consts: [[1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1"], [1, ""], ["id", "inputContainer"], ["type", "text", "name", "numberOfPieces", "id", "numberOfPiecesInputBox", "value", "3"], ["type", "text", "name", "numberOfPieces", "id", "numberOfPiecesInputBox1", "value", "1"], ["type", "text", "name", "numberOfPieces", "id", "numberOfPiecesInputBox2", "value", "1"], ["type", "text", "name", "numberOfPieces", "id", "numberOfPiecesInputBox3", "value", "1"], [1, "radio-group"], ["value", "euclidean", "name", "distanceMetric", "id", "euclideanButtonAI", 1, "radio-button"], ["value", "manhattan", "name", "distanceMetric", "id", "manhattanButtonAI", 1, "radio-button"], ["mat-raised-button", "", "id", "nextButton", 1, "btns"], ["mat-raised-button", "", "id", "generatePuzzleButtonAI", 1, "btns"], ["id", "containerAI"], ["id", "colorPalettesAI"], ["mat-raised-button", "", "id", "randomizeColorsButtonAI", 1, "btns"], ["id", ""], ["type", "text", "name", "puzzleName", "id", "puzzleNameInputBox"], ["type", "text", "name", "puzzleDescription", "id", "puzzleDescriptionInputBox"], ["hidden", "true", "id", "tokenLabel"], ["mat-raised-button", "", "id", "saveButtonAI", 1, "btns"]],
      template: function AICreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Algorithm Parameters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Number of puzzle pieces(20 max):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Number of Group 1 pieces:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Number of Group 2 pieces:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Number of Group 3 pieces:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select Puzzle Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-group", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-radio-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Euclidian ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Manhattan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Generate Puzzle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Create a puzzle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Randomize Colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Saving Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Short Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: whitesmoke;\r\n  padding: 3%;\r\n  \r\n  \r\n  border-radius: 0.5%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: 2%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n margin-left: 10rem;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n   width: 500px;\r\n   height: 500px;\r\n   border: 1px solid black;\r\n   margin: 1rem;\r\n}\r\n\r\n.radio-group[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: column;\r\n   \r\n   font-size: 1vw;\r\n }\r\n\r\n#label[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n   padding: 0.7em 0;\r\n   font-size: 1vw;\r\n   font-family: keep-calm;\r\n   color: black;\r\n }\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n   background-color: #7C593A;\r\n   color: white;\r\n   margin: 0 1.3vw;\r\n }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n   text-transform: capitalize;\r\n   padding: 0.7em 0;\r\n   margin-top: 30px;\r\n   font-size: 40px;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   color: gray;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWljcmVhdGUvYWljcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osYUFBYTtHQUNiLHVCQUF1QjtHQUN2QixZQUFZO0FBQ2Y7O0FBRUE7R0FDRyxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLHVCQUF1QjtHQUN2QixjQUFjO0NBQ2hCOztBQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2Qsc0JBQXNCO0dBQ3RCLFlBQVk7Q0FDZDs7QUFFQTtHQUNFLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osZUFBZTtDQUNqQjs7QUFHQTtHQUNFLGtCQUFrQjtHQUNsQiwwQkFBMEI7R0FDMUIsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLHNCQUFzQjtHQUN0QixXQUFXO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9haWNyZWF0ZS9haWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxLjUlOyAqL1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMS41JTsgKi9cclxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gbWFyZ2luLWxlZnQ6IDEwcmVtO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgd2lkdGg6IDUwMHB4O1xyXG4gICBoZWlnaHQ6IDUwMHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXAge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAvKiBtYXJnaW4tbGVmdDogMXJlbTsgKi9cclxuICAgZm9udC1zaXplOiAxdnc7XHJcbiB9XHJcblxyXG4gI2xhYmVse1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmc6IDAuN2VtIDA7XHJcbiAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcblxyXG4gLmJ0bnN7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgbWFyZ2luOiAwIDEuM3Z3O1xyXG4gfVxyXG5cclxuXHJcbiAubWFpbi10aXRsZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgcGFkZGluZzogMC43ZW0gMDtcclxuICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgIGNvbG9yOiBncmF5O1xyXG4gfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AICreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aicreate',
          templateUrl: './aicreate.component.html',
          styleUrls: ['./aicreate.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/create/create.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/create/create.component.ts ***!
    \**************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppPagesCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/assets/js/manualCreation.js */
    "./src/assets/js/manualCreation.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var CreateComponent = /*#__PURE__*/function () {
      function CreateComponent() {
        _classCallCheck(this, CreateComponent);
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_1__["initializeData"])();
          this.token = localStorage.getItem('token');
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ɵfac = function CreateComponent_Factory(t) {
      return new (t || CreateComponent)();
    };

    CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateComponent,
      selectors: [["app-create"]],
      decls: 51,
      vars: 1,
      consts: [["id", "help", "src", "../../../assets/gifHelp.mp4"], [1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1"], [1, ""], [1, "radio-group"], ["value", "euclidean", "name", "distanceMetric", "id", "euclideanButton", 1, "radio-button"], ["value", "manhattan", "name", "distanceMetric", "id", "manhattanButton", 1, "radio-button"], ["id", "deletePointButton"], ["id", "container"], ["id", "colorPalettes"], ["mat-raised-button", "", "id", "randomizeColorsButton", 1, "btns"], ["mat-raised-button", "", "id", "generatePuzzleButton", 1, "btns"], ["id", ""], ["type", "text", "name", "puzzleName", "id", "puzzleNameInputBox"], ["type", "text", "name", "puzzleDescription", "id", "puzzleDescriptionInputBox"], ["hidden", "true", "id", "tokenLabel"], ["mat-raised-button", "", "id", "saveButton", 1, "btns"]],
      template: function CreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Puzzle Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Euclidian ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Manhattan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create puzzle by selecting points on the canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Randomize Colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Generate Puzzle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Saving Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Short Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   background-color: whitesmoke;\r\n   padding: 3%;\r\n   \r\n   \r\n   border-radius: 0.5%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin: 2%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  margin-left: 10rem;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    height: 500px;\r\n    border: 1px solid black;\r\n    margin: 1rem;\r\n}\r\n\r\n.radio-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    font-size: 1vw;\r\n  }\r\n\r\n#label[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 0.7em 0;\r\n    font-size: 1vw;\r\n    font-family: keep-calm;\r\n    color: black;\r\n  }\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0 1.3vw;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    padding: 0.7em 0;\r\n    margin-top: 30px;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    font-family: keep-calm;\r\n    color: gray;\r\n  }\r\n\r\n#help[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    padding: 1vw;\r\n    float: right;\r\n    margin-right: 2vw;\r\n    cursor: pointer;\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csNEJBQTRCO0dBQzVCLFdBQVc7R0FDWCx1QkFBdUI7R0FDdkIsd0JBQXdCO0dBQ3hCLG1CQUFtQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7O0VBRWpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgcGFkZGluZzogMyU7XHJcbiAgIC8qIG1hcmdpbi1sZWZ0OiAxLjUlOyAqL1xyXG4gICAvKiBtYXJnaW4tcmlnaHQ6IDEuNSU7ICovXHJcbiAgIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxcmVtOyAqL1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgfVxyXG5cclxuICAjbGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjdlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDEuM3Z3O1xyXG4gIH1cclxuXHJcblxyXG4gIC5tYWluLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nOiAwLjdlbSAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcblxyXG4gICNoZWxwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create',
          templateUrl: './create.component.html',
          styleUrls: ['./create.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/index/index.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/index/index.component.ts ***!
    \************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppPagesIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent() {
        _classCallCheck(this, IndexComponent);
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndexComponent;
    }();

    IndexComponent.ɵfac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)();
    };

    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 44,
      vars: 0,
      consts: [["id", "indexNav"], [1, "links"], ["id", "btnLink"], ["href", "/signup", "mat-button", "", 1, "indexBtn"], ["href", "/login", "mat-button", "", 1, "indexBtn"], ["src", "assets/images/websmal1.jpg"], ["id", "second", 1, "container"], [1, "main-title"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], [1, "one"], [1, "content"], [1, "content-overlay"], ["src", "assets/images/puzzles/6.png", 1, "content-image"], [1, "content-details", "fadeIn-bottom"], [1, "content-title"], [1, "content-text"], ["src", "assets/images/puzzles/2.png", 1, "content-image"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Have fun creating 3D puzzles that can be shared, rated and printed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Geometric Puzzles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is a short description of a geometric equationed arithmetic puzzle. Magnified by bliss.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Arithmetic Puzzles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "This is a short description of a arithmetic equationed arithmetic puzzle. Magnified by razor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Polygon Puzzles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "This is a short description of a polygon equationed arithmetic puzzle. Magnified by shoes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  padding: 0.7em 0;\r\n  margin-top: 30px;\r\n  font-size: 60px;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]{\r\n  padding: 1em 0;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.descText[_ngcontent-%COMP%]{\r\n    padding: 2%;\r\n}\r\n\r\n.indexNavBtns[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 92%;\r\n  }\r\n\r\n#second[_ngcontent-%COMP%]{\r\n    background-color: #694b30;\r\n    width:100%;\r\n    height: 91%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: #7C593A;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: 1.5px solid black;\r\n  color: black ;\r\n  height: 30px;\r\n  text-align: center;\r\n  width: 80px;\r\n  transition-duration: 0.4s;\r\n  margin: 5px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  font-size: 16px;\r\n\r\n}\r\n\r\n#more[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 150px;\r\n\r\n}\r\n\r\n.why[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.indexBtn[_ngcontent-%COMP%]:hover {\r\n  background-color: #7C593A;\r\n  color: white !important;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 3.5em;\r\n\r\n}\r\n\r\n.indexNavImage[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    height: 60%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 20px;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: whitesmoke;\r\n \r\n   border-bottom: solid 1px rgba(160, 160, 160, 0.3);\r\n  height: 4.2em;\r\n  left: 0;\r\n  line-height: 4em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n  line-height: inherit;\r\n  margin-left: 5px;\r\n  white-space: nowrap;\r\n  font-family: keep-calm;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 0.7em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\r\n  height: inherit;\r\n  line-height: inherit;\r\n  margin-left: 1.5em;\r\n  overflow: hidden;\r\n  padding-left: 1.5em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-left: solid 1.5px black;\r\n  line-height: 1;\r\n  margin-left: 1em;\r\n  padding-left: 1em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover{\r\n  color: #f6c616;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  border-left: 0;\r\n  margin-left: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n  \r\n  font-size: 0.7em;\r\n  font-weight: 400;\r\n  letter-spacing: 0.25em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#btnLink[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: 10px;\r\n  margin-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFHVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBR1YsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFHVixnQ0FBZ0M7RUFHaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUdGO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBR0M7SUFDRyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFHQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUVBQXVFO0VBQ3ZFLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxrQkFBa0I7O0FBRXBCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0NBQzdCLDZDQUE2QztHQUMzQyxpREFBaUQ7RUFDbEQsYUFBYTtFQUNiLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLE9BQU87RUFDUCwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbURBQW1EO0VBQ25ELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTtcclxuXHJcbiosICo6YmVmb3JlLCAqOmFmdGVye1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubWFpbi10aXRsZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuN2VtIDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9uZXtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLm9uZSAudGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxze1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIGgze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIHB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmZhZGVJbi1ib3R0b217XHJcbiAgdG9wOiA4MCU7XHJcbn1cclxuXHJcbi5kZXNjVGV4dHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uaW5kZXhOYXZCdG5ze1xyXG4gICAgcGFkZGluZzogMSU7XHJcblxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkyJTtcclxuICB9XHJcblxyXG5cclxuI3NlY29uZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTRiMzA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MSU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzdDNTkzQTtcclxufVxyXG5cclxuXHJcbiAuYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogYmxhY2sgO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBtYXJnaW46IDVweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG4jbW9yZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG5cclxufVxyXG5cclxuLndoeXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmluZGV4QnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDMuNWVtO1xyXG5cclxufVxyXG5cclxuLmluZGV4TmF2SW1hZ2V7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4jaW5kZXhOYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAvKiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDIwNywgMjA3KTsgICovXHJcbiAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcbiAgaGVpZ2h0OiA0LjJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0ZW07XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNpbmRleE5hdiBhIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNpbmRleE5hdiB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmRleE5hdiAuYmFyIHtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbn1cclxuXHJcbiNpbmRleE5hdiBoMSBhIHtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzIHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzIHVsIGxpIHtcclxuICBib3JkZXItbGVmdDogc29saWQgMS41cHggYmxhY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuI2luZGV4TmF2IC5saW5rcyAgPiB1bCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2luZGV4TmF2IC5saW5rcyA+IGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNmNmM2MTY7XHJcbn1cclxuXHJcbiNpbmRleE5hdiAubGlua3MgdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuI2luZGV4TmF2IC5saW5rcyB1bCBsaSBhIHtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAqL1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcblxyXG4jYnRuTGlua3tcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-index',
          templateUrl: './index.component.html',
          styleUrls: ['./index.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_ng_container_15_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2.message, " ");
      }
    }

    function LoginComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_15_mat_error_1_Template, 2, 1, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError(error_r2.type) && (ctx_r0.loginForm.get("email").dirty || ctx_r0.loginForm.get("email").touched));
      }
    }

    function LoginComponent_ng_container_22_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r5.message, " ");
      }
    }

    function LoginComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_22_mat_error_1_Template, 2, 1, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError(error_r5.type) && (ctx_r1.loginForm.get("password").dirty || ctx_r1.loginForm.get("password").touched));
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, api, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router; //error messages used during login/register validation

        this.error_messages = {
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'email',
            message: 'Invalid email format.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must have at least 6 characters.'
          }]
        };
      } //method for logging in user and getting the token associated with the said user


      _createClass(LoginComponent, [{
        key: "loginUser",
        value: function loginUser(currentUser) {
          var _this = this;

          this.formError = '';

          if (currentUser !== null) {
            this.verifyUser = {
              "username": currentUser.email,
              "password": currentUser.password
            };
            this.api.loginUser(this.verifyUser).subscribe(function (data) {
              console.log(data);
              localStorage.removeItem('name');
              localStorage.setItem('name', data['name']);
              localStorage.removeItem('token');
              localStorage.setItem('token', data['token']);
              _this.formError = "";

              _this.router.navigate(['/ratings']);

              setTimeout(function () {
                localStorage.removeItem('token');

                _this.router.navigate(['login']);

                alert("You have been logged out after 1 hour");
              }, 3600000);
            }, function (error) {
              console.log('Error from API: ', error.error);

              if (error.status >= 401) {
                _this.formError = error.error;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 33,
      vars: 5,
      consts: [[1, "container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "required", "", "formControlName", "password", "type", "password", 1, "input"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btns", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "id", "two", 1, "btns"], ["routerLink", "/resetPassword", 1, "link"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            return ctx.loginUser(ctx.loginForm.value);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_ng_container_22_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " *");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    background-color: #7C593A; \r\n    height: 100%;\r\n    width: 100%; \r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color:white;\r\n}\r\n\r\n#one[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n}\r\n\r\n#two[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n}\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    padding-left: 78px;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 9.5rem;\r\n}\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG59XHJcblxyXG4uYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuI29uZXtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuIFxyXG4jdHdve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVnRm9ybXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbiNwYXNzRXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiBcclxuLnJlZ0Zvcm1Db250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICAgIHBhZGRpbmctbGVmdDogNzhweDtcclxufVxyXG5cclxuLmNhcmRUaXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA5LjVyZW07XHJcbn1cclxuXHJcbiNwYXNzRXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/profile-puzzles/profile-puzzles.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/profile-puzzles/profile-puzzles.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProfilePuzzlesComponent */

  /***/
  function srcAppPagesProfilePuzzlesProfilePuzzlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePuzzlesComponent", function () {
      return ProfilePuzzlesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function ProfilePuzzlesComponent_div_2_mat_card_4_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_2_mat_card_4_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var puzzle_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r7.share(puzzle_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SHARE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfilePuzzlesComponent_div_2_mat_card_4_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_2_mat_card_4_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var puzzle_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r10.stopShare(puzzle_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "STOP SHARING");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfilePuzzlesComponent_div_2_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-actions", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfilePuzzlesComponent_div_2_mat_card_4_button_7_Template, 2, 0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfilePuzzlesComponent_div_2_mat_card_4_button_8_Template, 2, 0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_2_mat_card_4_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

          var puzzle_r4 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r13.deletePuzzle(puzzle_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "DELETE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var puzzle_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", puzzle_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](puzzle_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !puzzle_r4.shared);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", puzzle_r4.shared);
      }
    }

    function ProfilePuzzlesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Puzzles");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfilePuzzlesComponent_div_2_mat_card_4_Template, 11, 4, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.userPuzzleList);
      }
    }

    function ProfilePuzzlesComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have not created any puzzles at the moment");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfilePuzzlesComponent_mat_spinner_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 16);
      }
    }

    var ProfilePuzzlesComponent = /*#__PURE__*/function () {
      function ProfilePuzzlesComponent(api, router) {
        _classCallCheck(this, ProfilePuzzlesComponent);

        this.api = api;
        this.router = router;
        this.temp = false;
      }

      _createClass(ProfilePuzzlesComponent, [{
        key: "getUserPuzzles",
        value: function getUserPuzzles() {
          var _this2 = this;

          this.api.getPuzzlesByUser(this.currentUser).subscribe(function (data) {
            _this2.userPuzzleList = data;

            if (data[0] == null) {
              _this2.text = true;
            }

            _this2.show = false;
          });
        }
      }, {
        key: "share",
        value: function share(data) {
          this.puzzle = {
            "puzzleID": data
          };

          if (this.api.sharePuzzle(this.puzzle).subscribe()) {
            alert("Puzzle shared");
          }

          location.reload();
        }
      }, {
        key: "deletePuzzle",
        value: function deletePuzzle(puzzleID) {
          // this.puzzle = {
          //   "puzzleID": puzzleID
          // }
          if (this.api.deletePuzzle(puzzleID).subscribe()) {
            alert("Puzzle deleted");
          }

          location.reload();
        }
      }, {
        key: "stopShare",
        value: function stopShare(data) {
          this.puzzle = {
            "puzzleID": data
          };

          if (this.api.stopSharingPuzzle(this.puzzle).subscribe()) {
            alert("Stop sharing puzzle");
          }

          location.reload();
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return new Promise(function (resolve) {
                      return setTimeout(function () {
                        return resolve();
                      }, ms);
                    }).then(function () {
                      console.log("fired");
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
          }

          this.currentUser = {
            "token": localStorage.getItem('token')
          };
          this.show = true;
          this.text = false;
          this.delay(1500).then(function () {
            _this3.getUserPuzzles();
          }); //this.getUserPuzzles();
        }
      }]);

      return ProfilePuzzlesComponent;
    }();

    ProfilePuzzlesComponent.ɵfac = function ProfilePuzzlesComponent_Factory(t) {
      return new (t || ProfilePuzzlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProfilePuzzlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfilePuzzlesComponent,
      selectors: [["app-profile-puzzles"]],
      decls: 6,
      vars: 3,
      consts: [[1, "container"], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "puzzleActions"], ["mat-button", "", "class", "btns", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btns", 3, "click"], ["id", "NoneText"], ["id", "spinner"]],
      template: function ProfilePuzzlesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfilePuzzlesComponent_div_2_Template, 5, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfilePuzzlesComponent_div_3_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfilePuzzlesComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  margin-left: 1.5%;\r\n  margin-right: 1.5%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n background-size: cover;\r\n}\r\n\r\n.navimg[_ngcontent-%COMP%]{\r\n height: 100%;\r\n width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n background-color: white;\r\n width: 100%;\r\n}\r\n\r\n.infoIcon[_ngcontent-%COMP%]{\r\n float: right;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 20vw;\r\n height: 20vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 2%;\r\n  margin-top: 1rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: auto;\r\n margin-bottom: 2vw;\r\n margin-top: 1vw;\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n font-size: 14px;\r\n  \r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n background-color: #7C593A;\r\n color: white;\r\n margin: 0.5vw;\r\n width: 50%;\r\n border: 1px solid white;\r\n text-align: center;\r\n}\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n color: #fff;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]:hover{\r\n  \r\n  background-color: white;\r\n  color: black;\r\n  border: #7C593A solid 0.1px;\r\n }\r\n\r\n.example-form-field[_ngcontent-%COMP%]{\r\n margin-left: 2vw;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n margin: auto ;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{\r\n margin: 0;\r\n padding: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n position: relative;\r\n width: 100%;\r\n max-width: 340px;\r\n overflow: hidden;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 100%;\r\n margin-bottom: 10px;\r\n}\r\n\r\n#NoneText[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wdXp6bGVzL3Byb2ZpbGUtcHV6emxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTs7QUFFbEU7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxtRkFBbUY7Q0FDbkYsc0JBQXNCO0FBQ3ZCOztBQUdBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7QUFDWDs7QUFHQTtDQUNDLHVCQUF1QjtDQUN2QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osdUVBQXVFO0FBQ3hFOztBQUVBO0NBQ0MsZUFBZTtFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7Q0FDaEIseUNBQXlDO0FBQzFDOztBQUdBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osMkJBQTJCO0NBQzVCOztBQUVEO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FHVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO1FBQ1EsZUFBZTtNQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcHV6emxlcy9wcm9maWxlLXB1enpsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTsgKi9cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4ubmF2aW1ne1xyXG4gaGVpZ2h0OiAxMDAlO1xyXG4gd2lkdGg6IDUwJTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb0ljb257XHJcbiBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gd2lkdGg6IDIwdnc7XHJcbiBoZWlnaHQ6IDIwdnc7XHJcbn1cclxuXHJcbmgxe1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiBtYXJnaW46IGF1dG87XHJcbiBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiBtYXJnaW4tdG9wOiAxdnc7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGV7XHJcbiBmb250LXNpemU6IDE0cHg7XHJcbiAgLyogY29sb3I6IGJsYWNrOyAgKi9cclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uYnRuc3tcclxuIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiBjb2xvcjogd2hpdGU7XHJcbiBtYXJnaW46IDAuNXZ3O1xyXG4gd2lkdGg6IDUwJTtcclxuIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHV6emxlQWN0aW9uc3tcclxuIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnB1enpsZURldGFpbHN7XHJcbiBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bnM6aG92ZXJ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpOzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAjN0M1OTNBIHNvbGlkIDAuMXB4O1xyXG4gfVxyXG5cclxuLmV4YW1wbGUtZm9ybS1maWVsZHtcclxuIG1hcmdpbi1sZWZ0OiAydnc7XHJcbn1cclxuXHJcbiNzcGlubmVye1xyXG4gbWFyZ2luOiBhdXRvIDtcclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XHJcbiBtYXJnaW46IDA7XHJcbiBwYWRkaW5nOiAwO1xyXG4gLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB3aWR0aDogMTAwJTtcclxuIG1heC13aWR0aDogMzQwcHg7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudC1pbWFnZXtcclxuIHdpZHRoOiAxMDAlO1xyXG4gbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI05vbmVUZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXIgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgICAgIHN0cm9rZTogIzdDNTkzQTtcclxuICAgICAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilePuzzlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-profile-puzzles',
          templateUrl: './profile-puzzles.component.html',
          styleUrls: ['./profile-puzzles.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/profile-ratings/profile-ratings.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/profile-ratings/profile-ratings.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProfileRatingsComponent */

  /***/
  function srcAppPagesProfileRatingsProfileRatingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRatingsComponent", function () {
      return ProfileRatingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../rate-dialog/rate-dialog.component */
    "./src/app/rate-dialog/rate-dialog.component.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function ProfileRatingsComponent_div_2_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SOLVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_2_mat_card_4_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var rating_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.openAndCheck(rating_r4.puzzleID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UPDATE RATING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rating_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rating_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r4.puzzleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", rating_r4.rating, "/5");
      }
    }

    function ProfileRatingsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Ratings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileRatingsComponent_div_2_mat_card_4_Template, 13, 3, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userRatingsList);
      }
    }

    function ProfileRatingsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have not made any ratings at the moment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileRatingsComponent_mat_spinner_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 16);
      }
    }

    var ProfileRatingsComponent = /*#__PURE__*/function () {
      function ProfileRatingsComponent(api, router, dialog) {
        _classCallCheck(this, ProfileRatingsComponent);

        this.api = api;
        this.router = router;
        this.dialog = dialog;
      }

      _createClass(ProfileRatingsComponent, [{
        key: "getUserPuzzleRatings",
        value: function getUserPuzzleRatings() {
          var _this4 = this;

          this.api.getPuzzleRatingsByUser(this.currentUser).subscribe(function (data) {
            _this4.userRatingsList = data;

            if (data[0] == null) {
              _this4.text = true;
            }

            _this4.show = false;
          });
        }
      }, {
        key: "checkData",
        value: function checkData(data) {
          this.ratePID = data;
        }
      }, {
        key: "openRateDialog",
        value: function openRateDialog() {
          var _this5 = this;

          this.rateDialogRef = this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_1__["RateDialogComponent"]);
          this.rateDialogRef.afterClosed().subscribe(function (result) {
            if (result != "") {
              _this5.ratingEntry = {
                //"id":this.rateUID,
                "puzzleID": _this5.ratePID,
                "rating": result,
                "token": localStorage.getItem('token')
              };
              console.log(_this5.ratingEntry);

              if (_this5.api.createNewPuzzleRating(_this5.ratingEntry).subscribe()) {
                alert("Rating added");
              }

              location.reload();
            }
          });
        }
      }, {
        key: "openAndCheck",
        value: function openAndCheck(rateP) {
          this.checkData(rateP);
          this.openRateDialog();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }]);

      return ProfileRatingsComponent;
    }();

    ProfileRatingsComponent.ɵfac = function ProfileRatingsComponent_Factory(t) {
      return new (t || ProfileRatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    ProfileRatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileRatingsComponent,
      selectors: [["app-profile-ratings"]],
      decls: 6,
      vars: 3,
      consts: [[1, "container"], ["class", "container-fluid", 4, "ngIf"], ["id", "NoneText", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "puzzleActions"], ["mat-button", "", 1, "btns"], ["mat-button", "", 1, "btns", 3, "click"], ["id", "NoneText"], ["id", "spinner"]],
      template: function ProfileRatingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileRatingsComponent_div_2_Template, 5, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileRatingsComponent_div_3_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileRatingsComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  margin-left: 1.5%;\r\n  margin-right: 1.5%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n background-size: cover;\r\n}\r\n\r\n.navimg[_ngcontent-%COMP%]{\r\n height: 100%;\r\n width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n background-color: white;\r\n width: 100%;\r\n}\r\n\r\n.infoIcon[_ngcontent-%COMP%]{\r\n float: right;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 20vw;\r\n height: 20vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 2%;\r\n  margin-top: 1rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: auto;\r\n margin-bottom: 2vw;\r\n margin-top: 1vw;\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n font-size: 14px;\r\n  \r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n background-color: #7C593A;\r\n color: white;\r\n margin: 0.5vw;\r\n width: 50%;\r\n border: 1px solid white;\r\n text-align: center;\r\n}\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n color: #fff;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]:hover{\r\n \r\n background-color: white;\r\n color: black;\r\n border: #7C593A solid 0.1px;\r\n}\r\n\r\n.example-form-field[_ngcontent-%COMP%]{\r\n margin-left: 2vw;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n margin: auto ;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{\r\n margin: 0;\r\n padding: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n position: relative;\r\n width: 100%;\r\n max-width: 340px;\r\n overflow: hidden;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 100%;\r\n margin-bottom: 10px;\r\n}\r\n\r\n#NoneText[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1yYXRpbmdzL3Byb2ZpbGUtcmF0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTs7QUFFbEU7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxtRkFBbUY7Q0FDbkYsc0JBQXNCO0FBQ3ZCOztBQUdBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7QUFDWDs7QUFHQTtDQUNDLHVCQUF1QjtDQUN2QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osdUVBQXVFO0FBQ3hFOztBQUVBO0NBQ0MsZUFBZTtFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7Q0FDaEIseUNBQXlDO0FBQzFDOztBQUdBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUdBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FHVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO1FBQ1EsZUFBZTtNQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcmF0aW5ncy9wcm9maWxlLXJhdGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTsgKi9cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4ubmF2aW1ne1xyXG4gaGVpZ2h0OiAxMDAlO1xyXG4gd2lkdGg6IDUwJTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb0ljb257XHJcbiBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gd2lkdGg6IDIwdnc7XHJcbiBoZWlnaHQ6IDIwdnc7XHJcbn1cclxuXHJcbmgxe1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiBtYXJnaW46IGF1dG87XHJcbiBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiBtYXJnaW4tdG9wOiAxdnc7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGV7XHJcbiBmb250LXNpemU6IDE0cHg7XHJcbiAgLyogY29sb3I6IGJsYWNrOyAgKi9cclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uYnRuc3tcclxuIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiBjb2xvcjogd2hpdGU7XHJcbiBtYXJnaW46IDAuNXZ3O1xyXG4gd2lkdGg6IDUwJTtcclxuIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHV6emxlQWN0aW9uc3tcclxuIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnB1enpsZURldGFpbHN7XHJcbiBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bnM6aG92ZXJ7XHJcbiAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7OyAqL1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3JkZXI6ICM3QzU5M0Egc29saWQgMC4xcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0tZmllbGR7XHJcbiBtYXJnaW4tbGVmdDogMnZ3O1xyXG59XHJcblxyXG5cclxuI3NwaW5uZXJ7XHJcbiBtYXJnaW46IGF1dG8gO1xyXG59XHJcblxyXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcclxuIG1hcmdpbjogMDtcclxuIHBhZGRpbmc6IDA7XHJcbiAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIHdpZHRoOiAxMDAlO1xyXG4gbWF4LXdpZHRoOiAzNDBweDtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jTm9uZVRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjN0M1OTNBO1xyXG4gICAgICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-ratings',
          templateUrl: './profile-ratings.component.html',
          styleUrls: ['./profile-ratings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ProfileComponent_div_15_ng_container_5_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r3.message, " ");
      }
    }

    function ProfileComponent_div_15_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_15_ng_container_5_mat_error_1_Template, 2, 1, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.updateNameForm.get("name").hasError(error_r3.type) && (ctx_r1.updateNameForm.get("name").dirty || ctx_r1.updateNameForm.get("name").touched));
      }
    }

    function ProfileComponent_div_15_ng_container_12_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r6.message, " ");
      }
    }

    function ProfileComponent_div_15_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_15_ng_container_12_mat_error_1_Template, 2, 1, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r6 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.updateUsernameForm.get("username").hasError(error_r6.type) && (ctx_r2.updateUsernameForm.get("username").dirty || ctx_r2.updateUsernameForm.get("username").touched));
      }
    }

    function ProfileComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_15_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updateName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProfileComponent_div_15_Template_input_input_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.nameTextboxValue = $event.target.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_15_ng_container_5_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_15_Template_form_ngSubmit_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.updateUsername();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProfileComponent_div_15_Template_input_input_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.usernameTextboxValue = $event.target.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_15_ng_container_12_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateNameForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.currentUserObject.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.error_messages.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.updateNameForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateUsernameForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.currentUserObject.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.error_messages.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.updateUsernameForm.valid);
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(api, formBuilder, router) {
        _classCallCheck(this, ProfileComponent);

        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.error_messages = {
          'username': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'email',
            message: 'Invalid email format.'
          }],
          'name': [{
            type: 'required',
            message: 'Full name is required.'
          }, {
            type: 'pattern',
            message: 'Name can only consist of letters'
          }]
        };
      }

      _createClass(ProfileComponent, [{
        key: "updateName",
        value: function updateName() {
          var _this6 = this;

          this.currentUser = null;

          if (this.nameTextboxValue != undefined) {
            this.currentUser = {
              "token": localStorage.getItem('token'),
              "name": this.nameTextboxValue
            };
            localStorage.removeItem('name');
            localStorage.setItem('name', this.currentUser['name']);
            this.api.updateName(this.currentUser).subscribe(function (data) {
              _this6.currentUserObject['name'] = data['name'];
            });
            alert("Name updated");
          } else {
            console.log("No value provided");
          }

          location.reload();
        }
      }, {
        key: "updateUsername",
        value: function updateUsername() {
          var _this7 = this;

          this.currentUser = null;

          if (this.usernameTextboxValue != undefined) {
            this.currentUser = {
              "token": localStorage.getItem('token'),
              "username": this.usernameTextboxValue
            };
            this.api.updateUsername(this.currentUser).subscribe(function (data) {
              _this7.currentUserObject['username'] = data['username'];
            });
          } else {
            console.log("No value provided");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
          }

          this.currentUser = {
            "token": localStorage.getItem('token')
          };
          this.api.getUser(this.currentUser).subscribe(function (data) {
            _this8.currentUserObject = data;
            _this8.updateNameForm = _this8.formBuilder.group({
              name: [data['name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]]
            });
            _this8.updateUsernameForm = _this8.formBuilder.group({
              username: [data['username'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
            });
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 16,
      vars: 1,
      consts: [[1, "container-fluid"], ["fxLayout", "row"], [1, "profileImageCard"], ["src", "assets/images/profile.jpg", "id", "profileImage"], [1, "profileText"], [1, "move"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["matInput", "", "formControlName", "name", 3, "value", "input"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 1, "btns", 3, "disabled"], ["matInput", "", "formControlName", "username", 3, "value", "input"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_div_15_Template, 15, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserObject);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["#image[_ngcontent-%COMP%], #profileImage[_ngcontent-%COMP%]{\r\n    width: 20rem;\r\n    height: 22rem;\r\n}\r\n\r\n#profileImage[_ngcontent-%COMP%]{\r\n    height: 20vw;\r\n    width: 20vw;\r\n    border-radius: 100rem;\r\n    padding: 2rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    color: black;\r\n}\r\n\r\n.profileImageCard[_ngcontent-%COMP%]{\r\n  margin-left: 23%;\r\n}\r\n\r\n.abc[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.profileText[_ngcontent-%COMP%], .profileImageCard[_ngcontent-%COMP%]{\r\n  margin-bottom: 2vw;\r\n  margin-top: 2vw;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  width: 25%;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.userPuzzles[_ngcontent-%COMP%]{\r\n    margin: 0.2rem;\r\n    background-color:  #7C593A;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    \r\n     background-color: white;\r\n     margin-left: 1.5%;\r\n     margin-right: 1.5%;\r\n     border-radius: 0.5%;\r\n  }\r\n\r\n.move[_ngcontent-%COMP%]{\r\n    border: 1px gainsboro solid;\r\n    border-radius: 10px;\r\n    padding: 0.5vw;\r\n    margin-bottom: 1vw;\r\n    background-color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFVBQVU7RUFDVjt1QkFDcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksMkRBQTJEO0tBQzFELHVCQUF1QjtLQUN2QixpQkFBaUI7S0FDakIsa0JBQWtCO0tBQ2xCLG1CQUFtQjtFQUN0Qjs7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWFnZSwgI3Byb2ZpbGVJbWFnZXtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGhlaWdodDogMjJyZW07XHJcbn1cclxuXHJcbiNwcm9maWxlSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlSW1hZ2VDYXJke1xyXG4gIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbn1cclxuXHJcbi5hYmN7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ucHJvZmlsZVRleHQsIC5wcm9maWxlSW1hZ2VDYXJke1xyXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMjUlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyUHV6emxlc3tcclxuICAgIG1hcmdpbjogMC4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM3QzU5M0E7XHJcbn1cclxuXHJcbi5idG5ze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzMuanBnJyk7Ki9cclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICBtYXJnaW4tbGVmdDogMS41JTtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMC41JTtcclxuICB9XHJcblxyXG4gIC5tb3Zle1xyXG4gICAgYm9yZGVyOiAxcHggZ2FpbnNib3JvIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ratings/RatingsArr.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/ratings/RatingsArr.ts ***!
    \*********************************************/

  /*! exports provided: RatingsArr */

  /***/
  function srcAppPagesRatingsRatingsArrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingsArr", function () {
      return RatingsArr;
    });

    var RatingsArr = function RatingsArr() {
      _classCallCheck(this, RatingsArr);
    };
    /***/

  },

  /***/
  "./src/app/pages/ratings/puzzleArr.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/ratings/puzzleArr.ts ***!
    \********************************************/

  /*! exports provided: PuzzleArr */

  /***/
  function srcAppPagesRatingsPuzzleArrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PuzzleArr", function () {
      return PuzzleArr;
    });

    var PuzzleArr = function PuzzleArr() {
      _classCallCheck(this, PuzzleArr);
    };
    /***/

  },

  /***/
  "./src/app/pages/ratings/ratings.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/ratings/ratings.component.ts ***!
    \****************************************************/

  /*! exports provided: RatingsComponent */

  /***/
  function srcAppPagesRatingsRatingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingsComponent", function () {
      return RatingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _puzzleArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./puzzleArr */
    "./src/app/pages/ratings/puzzleArr.ts");
    /* harmony import */


    var _RatingsArr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./RatingsArr */
    "./src/app/pages/ratings/RatingsArr.ts");
    /* harmony import */


    var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../rate-dialog/rate-dialog.component */
    "./src/app/rate-dialog/rate-dialog.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function RatingsComponent_mat_spinner_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
      }
    }

    function RatingsComponent_div_10_mat_card_2_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_div_10_mat_card_2_button_25_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var puzzle_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.openAndCheck(puzzle_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RATE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RatingsComponent_div_10_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created by:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created on:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle", 15);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SOLVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RatingsComponent_div_10_mat_card_2_button_25_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var puzzle_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", puzzle_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r3.creator, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r3.created, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r3.description, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", puzzle_r3.rating, "/5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", puzzle_r3.showRating);
      }
    }

    function RatingsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingsComponent_div_10_mat_card_2_Template, 26, 7, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.datasource.filteredData);
      }
    }

    var RatingsComponent = /*#__PURE__*/function () {
      function RatingsComponent(api, cdr, dialog, router) {
        _classCallCheck(this, RatingsComponent);

        this.api = api;
        this.cdr = cdr;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["id", "name", "description", "creator", "rating", "created", "showRating", "image"];
        this.puzzles = [];
        this.ratings = [];
      }

      _createClass(RatingsComponent, [{
        key: "populate",
        value: function populate(populatePuz) {
          var _this9 = this;

          this.ratings.length = 0;
          this.api.getAllPuzzleRatings().subscribe(function (data) {
            for (var i = 0; data[i] != null; i++) {
              var ratingObj = new _RatingsArr__WEBPACK_IMPORTED_MODULE_2__["RatingsArr"]();
              ratingObj.id = data[i].id;
              ratingObj.rating = data[i].rating;
              ratingObj.puzzleID = data[i].puzzleID;

              _this9.ratings.push(ratingObj);
            }
          }, function (error) {
            console.log("Error from API: ", error.error);
          });

          if (populatePuz != null) {
            this.getPuzzles(populatePuz);
          } else {
            this.api.getAllPuzzles().subscribe(function (data) {
              _this9.getPuzzles(data);
            }, function (error) {
              console.log('Error from API: ', error.error);
            });
          }
        }
      }, {
        key: "searchItems",
        value: function searchItems(searchValue) {
          var _this10 = this;

          if (searchValue != undefined) {
            this.api.getSearchedPuzzles(searchValue).subscribe(function (data) {
              var dataObjectSize = Object.keys(data).length;

              if (dataObjectSize == 0) {
                alert("Nothing matches given criteria");
                console.log("Nothing matches given criteria");
              } else {
                //Please populate the page with the data received. Other puzzles not fromd data must be cleared
                console.log(data);

                _this10.populate(data);
              }
            });
          }
        }
      }, {
        key: "getPuzzles",
        value: function getPuzzles(data) {
          this.puzzles.length = 0;

          for (var i = 0; data[i] != null; i++) {
            var puzzleObj = new _puzzleArr__WEBPACK_IMPORTED_MODULE_1__["PuzzleArr"]();
            puzzleObj.id = data[i].id;
            puzzleObj.name = data[i].name;
            puzzleObj.description = data[i].description;
            puzzleObj.creator = data[i].creator;
            puzzleObj.created = data[i].createdAt;
            puzzleObj.image = data[i].image;
            console.log(puzzleObj.image);

            if (puzzleObj.creator == this.currentUser["name"]) {
              puzzleObj.showRating = false;
            } else {
              puzzleObj.showRating = true;
            }

            var j = 0;
            var total = 0;

            for (var k = 0; this.ratings[k] != null; k++) {
              if (this.ratings[k].puzzleID == data[i].id) {
                //********* ERROR HERE - THIS LOOP IS NOT ENTERED WHEN THE RATINGS VALUE IS 0  ************
                console.log(this.ratings[k]);
                total = total + this.ratings[k].rating;
                j = j + 1;
              }
            }

            if (j == 0) {
              puzzleObj.rating = 0 .toString();
            } else {
              puzzleObj.rating = (total / j).toFixed(2);
            }

            this.puzzles.push(puzzleObj);
          }

          this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.puzzles);
          this.dataAvailable = true;
          this.show = false;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.datasource.filterPredicate = function (data, filter) {
            return data.name.toLowerCase().includes(filter);
          };

          this.datasource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "checkData",
        value: function checkData(data) {
          this.ratePID = data; //this.rateUID = localStorage.getItem('token');
          //this.rateUID = localStorage.getItem('id');
          //console.log(localStorage.getItem('id'));
        }
      }, {
        key: "openRateDialog",
        value: function openRateDialog() {
          var _this11 = this;

          this.rateDialogRef = this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RateDialogComponent"]);
          this.rateDialogRef.afterClosed().subscribe(function (result) {
            //console.log(result);
            //console.log(this.ratePID);
            //console.log(this.rateUID);
            if (result != "") {
              _this11.ratingEntry = {
                //"id":this.rateUID,
                "puzzleID": _this11.ratePID,
                "rating": result,
                "token": localStorage.getItem('token')
              };
              console.log(_this11.ratingEntry);

              if (_this11.api.createNewPuzzleRating(_this11.ratingEntry).subscribe()) {
                alert("Rating added");
              }

              location.reload();
            }
          });
        }
      }, {
        key: "openAndCheck",
        value: function openAndCheck(rateP) {
          this.checkData(rateP);
          this.openRateDialog();
        }
      }, {
        key: "reload",
        value: function reload() {
          this.populate(null);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.show = true;
          this.dataAvailable = false;

          if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
          }

          this.currentUser = {
            "token": localStorage.getItem('token')
          };
          this.api.getUser(this.currentUser).subscribe(function (data) {
            console.log(data["name"]);
            _this12.currentUser = {
              "token": localStorage.getItem('token'),
              "name": data["name"]
            };
          });
          this.populate(null);
        }
      }]);

      return RatingsComponent;
    }();

    RatingsComponent.ɵfac = function RatingsComponent_Factory(t) {
      return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    RatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RatingsComponent,
      selectors: [["app-ratings"]],
      decls: 11,
      vars: 2,
      consts: [[1, "container"], [1, "example-form-field"], ["matInput", "", 3, "keyup"], ["mat-button", "", "id", "resetBtn", 3, "click"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["id", "spinner"], [1, "container-fluid"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], [1, "puzzleActions"], ["mat-button", "", 1, "btns"], ["mat-button", "", "class", "btns", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btns", 3, "click"]],
      template: function RatingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RatingsComponent_Template_input_keyup_5_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_button_click_6_listener() {
            return ctx.reload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RESET SEARCH CRITERIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RatingsComponent_mat_spinner_9_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RatingsComponent_div_10_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataAvailable);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardActions"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   margin-left: 1.5%;\r\n   margin-right: 1.5%;\r\n   border-radius: 0.5%;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.navimg[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.infoIcon[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 20vw;\r\n  height: 20vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 4vw;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: gray;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  margin-bottom: 2vw;\r\n  margin-top: 2vw;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n   \r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n   margin-top: 5px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  width: 50%;\r\n  text-align: center;\r\n  font-weight: normal;\r\n}\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]:hover, .btns[_ngcontent-%COMP%]:hover{\r\n  \r\n  background-color: white;\r\n  color: #7C593A;\r\n}\r\n\r\n.example-form-field[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  background-color: #7C593A;\r\n  color: #fff;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n  margin: auto ;\r\n  color: black;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 340px;\r\n  overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  \r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: justify;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 30%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5ncy9yYXRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFOztBQUVsRTtHQUNHLHVCQUF1QjtHQUN2QixpQkFBaUI7R0FDakIsa0JBQWtCO0dBQ2xCLG1CQUFtQjtBQUN0Qjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsV0FBVztBQUNiOztBQUVDO0VBQ0MsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWix1RUFBdUU7QUFDekU7O0FBRUM7RUFDQyxlQUFlO0dBQ2QsbUJBQW1CO0FBQ3RCOztBQUVDO0dBQ0UsZUFBZTtFQUNoQix5Q0FBeUM7QUFDM0M7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUdWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUdWLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFHVixnQ0FBZ0M7RUFHaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtRQUNRLGVBQWU7TUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yYXRpbmdzL3JhdGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTsgKi9cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICBtYXJnaW4tbGVmdDogMS41JTtcclxuICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gICBib3JkZXItcmFkaXVzOiAwLjUlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4ubmF2aW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvSWNvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogMjB2dztcclxufVxyXG5cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4gbWF0LWNhcmR7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxufVxyXG5cclxuIG1hdC1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAgLyogY29sb3I6IGJsYWNrOyAgKi9cclxufVxyXG5cclxuIG1hdC1jYXJkLXRpdGxle1xyXG4gICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uYnRuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAuNXZ3O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5wdXp6bGVBY3Rpb25ze1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnB1enpsZURldGFpbHN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNyZXNldEJ0bjpob3ZlciwgLmJ0bnM6aG92ZXJ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpOzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzdDNTkzQTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG59XHJcblxyXG4jcmVzZXRCdG57XHJcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jc3Bpbm5lcntcclxuICBtYXJnaW46IGF1dG8gO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzNDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiBoZWlnaHQ6IDg3JTsgKi9cclxufVxyXG5cclxuLmNvbnRlbnQtaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LWRldGFpbHN7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgaDN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgcHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uZmFkZUluLWJvdHRvbXtcclxuICB0b3A6IDgwJTtcclxufVxyXG5cclxuLnNwaW5uZXIgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgICAgIHN0cm9rZTogIzdDNTkzQTtcclxuICAgICAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ratings',
          templateUrl: './ratings.component.html',
          styleUrls: ['./ratings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reset-password/reset-password.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
    \******************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppPagesResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ResetPasswordComponent_ng_container_14_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r3.message, " ");
      }
    }

    function ResetPasswordComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_14_mat_error_1_Template, 2, 1, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("email").hasError(error_r3.type) && (ctx_r0.resetPasswordForm.get("email").dirty || ctx_r0.resetPasswordForm.get("email").touched));
      }
    }

    function ResetPasswordComponent_ng_container_21_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r6.message, " ");
      }
    }

    function ResetPasswordComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_21_mat_error_1_Template, 2, 1, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r6 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordForm.get("password").hasError(error_r6.type) && (ctx_r1.resetPasswordForm.get("password").dirty || ctx_r1.resetPasswordForm.get("password").touched));
      }
    }

    function ResetPasswordComponent_ng_container_28_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r9.message, " ");
      }
    }

    function ResetPasswordComponent_ng_container_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_28_mat_error_1_Template, 2, 1, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r9 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.resetPasswordForm.get("confirmPassword").hasError(error_r9.type) && (ctx_r2.resetPasswordForm.get("confirmPassword").dirty || ctx_r2.resetPasswordForm.get("confirmPassword").touched));
      }
    }

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(formBuilder, api, router) {
        _classCallCheck(this, ResetPasswordComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router; //error messages used during login/register validation

        this.error_messages = {
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'email',
            message: 'Invalid email format.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must have at least 6 characters.'
          }],
          'confirmPassword': [{
            type: 'required',
            message: 'password is required.'
          }, {
            type: 'minlength',
            message: 'Password must have at least 6 characters.'
          }]
        };
      } //method for logging in user and getting the token associated with the said user


      _createClass(ResetPasswordComponent, [{
        key: "resetPassword",
        value: function resetPassword(currentUser) {
          var _this13 = this;

          this.resetDone = '';
          this.formError = '';

          if (this.doPasswordsMatch(this.resetPasswordForm.controls['password'].value, this.resetPasswordForm.controls['confirmPassword'].value) == true) {
            this.verifyUser = {
              "username": currentUser.email,
              "password": currentUser.password
            };

            if (this.verifyUser != null) {
              this.api.resetPassword(this.verifyUser).subscribe(function () {}, function (error) {
                if (error.status >= 401) {
                  _this13.formError = error.error;
                } else {
                  _this13.router.navigate(['/resetSuccess', {
                    message: "Password reset. Please login"
                  }]);
                }
              });
            }
          } else {
            this.formError = "Passwords do not match";
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          });
        } //checking if passwords match

      }, {
        key: "doPasswordsMatch",
        value: function doPasswordsMatch(firstPassword, secondPassword) {
          if (firstPassword !== secondPassword) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 35,
      vars: 6,
      consts: [[1, "container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "required", "", "formControlName", "password", "type", "password", 1, "input"], ["matInput", "", "required", "", "formControlName", "confirmPassword", "type", "password", 1, "input"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btns", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "id", "two", 1, "btns"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_7_listener() {
            return ctx.resetPassword(ctx.resetPasswordForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResetPasswordComponent_ng_container_14_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ResetPasswordComponent_ng_container_21_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResetPasswordComponent_ng_container_28_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.resetPasswordForm.valid);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n  background-color: #be8a5c; \r\n  height: 100%;\r\n  width: 100%;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n}\r\n\r\n#two[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n#one[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n}\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    margin-top: 150px;\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n#resetDone[_ngcontent-%COMP%]{\r\n    color: #7C593A;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZThhNWM7IFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbn1cclxuXHJcbi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxufVxyXG5cclxuI3R3b3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI29uZXtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5yZWdGb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnRm9ybUNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZFRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4jcGFzc0Vycm9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI3Jlc2V0RG9uZXtcclxuICAgIGNvbG9yOiAjN0M1OTNBO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reset-success/reset-success.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/reset-success/reset-success.component.ts ***!
    \****************************************************************/

  /*! exports provided: ResetSuccessComponent */

  /***/
  function srcAppPagesResetSuccessResetSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetSuccessComponent", function () {
      return ResetSuccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ResetSuccessComponent = /*#__PURE__*/function () {
      function ResetSuccessComponent(route, router) {
        _classCallCheck(this, ResetSuccessComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(ResetSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var message = this.route.snapshot.paramMap.get('message');
        }
      }]);

      return ResetSuccessComponent;
    }();

    ResetSuccessComponent.ɵfac = function ResetSuccessComponent_Factory(t) {
      return new (t || ResetSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ResetSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetSuccessComponent,
      selectors: [["app-reset-success"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], [1, "cardTitle"], [1, "regFormContent"], ["routerLink", "/login", "mat-raised-button", "", "id", "two", 1, "btns"]],
      template: function ResetSuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset Password Successfully");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n    background-image: url('bg2.jpg');\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n}\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    text-align: center;\r\n}\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    margin-top: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtc3VjY2Vzcy9yZXNldC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBdUQ7SUFDdkQsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXQtc3VjY2Vzcy9yZXNldC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMi5qcGcnKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbn1cclxuXHJcbi5yZWdGb3Jte1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ0Zvcm1Db250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNhcmRUaXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-success',
          templateUrl: './reset-success.component.html',
          styleUrls: ['./reset-success.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SignupComponent_ng_container_14_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r4.message, " ");
      }
    }

    function SignupComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_14_mat_error_1_Template, 2, 1, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r4 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("name").hasError(error_r4.type) && (ctx_r0.signUpForm.get("name").dirty || ctx_r0.signUpForm.get("name").touched));
      }
    }

    function SignupComponent_ng_container_21_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r7.message, " ");
      }
    }

    function SignupComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_21_mat_error_1_Template, 2, 1, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r7 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signUpForm.get("email").hasError(error_r7.type) && (ctx_r1.signUpForm.get("email").dirty || ctx_r1.signUpForm.get("email").touched));
      }
    }

    function SignupComponent_ng_container_28_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r10.message, " ");
      }
    }

    function SignupComponent_ng_container_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_28_mat_error_1_Template, 2, 1, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r10 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.get("password").hasError(error_r10.type) && (ctx_r2.signUpForm.get("password").dirty || ctx_r2.signUpForm.get("password").touched));
      }
    }

    function SignupComponent_ng_container_35_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r13.message, " ");
      }
    }

    function SignupComponent_ng_container_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_container_35_mat_error_1_Template, 2, 1, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r13 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signUpForm.get("confirmPassword").hasError(error_r13.type) && (ctx_r3.signUpForm.get("confirmPassword").dirty || ctx_r3.signUpForm.get("confirmPassword").touched));
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, api, router) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router; //error messages used during login/register validation

        this.error_messages = {
          'name': [{
            type: 'required',
            message: 'Full name is required.'
          }, {
            type: 'pattern',
            message: 'Name can only consist of letters'
          }],
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'email',
            message: 'Invalid email format.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must have at least 6 characters.'
          }],
          'confirmPassword': [{
            type: 'required',
            message: 'password is required.'
          }, {
            type: 'minlength',
            message: 'Password must have at least 6 characters.'
          }]
        };
      } //method for creating a new user. A new JSON object is created and sent to the node api


      _createClass(SignupComponent, [{
        key: "createNewUser",
        value: function createNewUser(createUser) {
          var _this14 = this;

          this.formError = '';

          if (this.doPasswordsMatch(this.signUpForm.controls['password'].value, this.signUpForm.controls['confirmPassword'].value) == true) {
            this.newUser = {
              "name": createUser.name,
              "username": createUser.email,
              "password": createUser.password
            };

            if (this.newUser != null) {
              this.api.createUser(this.newUser).subscribe(function (data) {
                console.log(data);
                localStorage.removeItem('name');
                localStorage.setItem('name', data['name']);
                localStorage.removeItem('token');
                localStorage.setItem('token', data['token']);

                _this14.router.navigate(['/ratings']);
              }, function (error) {
                console.log('Error from API: ', error.error);

                if (error.status >= 401) {
                  _this14.formError = error.error;
                }
              });
            }
          } else {
            this.formError = "Passwords do not match";
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          });
        } //checking if passwords match

      }, {
        key: "doPasswordsMatch",
        value: function doPasswordsMatch(firstPassword, secondPassword) {
          if (firstPassword !== secondPassword) {
            //this.formError = "Passwords do not match: " + controlName + " " + matchingControlName;
            return false;
          } else {
            //this.formError = "Match: " + controlName + " " + matchingControlName;
            return true;
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 42,
      vars: 7,
      consts: [[1, "container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "John Doe", "formControlName", "name", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], ["matInput", "", "required", "", "formControlName", "password", "type", "password", 1, "input"], ["matInput", "", "required", "", "formControlName", "confirmPassword", "type", "password", 1, "input"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btn", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "color", "accent", 1, "btns"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_7_listener() {
            return ctx.createNewUser(ctx.signUpForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your full name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_ng_container_14_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_ng_container_21_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_ng_container_28_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SignupComponent_ng_container_35_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signUpForm.valid);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n    \r\n    background-color: #7C593A;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n}\r\n\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color:white\r\n}\r\n\r\n\r\n#one[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n}\r\n\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEZBQThGO0lBQzlGLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrL3Rlby1kdWxkdWxhby00b3A5XzJCdDJFZy11bnNwbGFzaC5qcGcnKTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuXHJcbi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbiNvbmV7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ucmVnRm9ybXtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdGb3JtQ29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkVGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuI3Bhc3NFcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rate-dialog/rate-dialog.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/rate-dialog/rate-dialog.component.ts ***!
    \******************************************************/

  /*! exports provided: RateDialogComponent */

  /***/
  function srcAppRateDialogRateDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateDialogComponent", function () {
      return RateDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RateDialogComponent_ng_container_7_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r1.message, " ");
      }
    }

    function RateDialogComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RateDialogComponent_ng_container_7_mat_error_1_Template, 2, 1, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("rating").hasError(error_r1.type) && (ctx_r0.form.get("rating").dirty || ctx_r0.form.get("rating").touched));
      }
    }

    var RateDialogComponent = /*#__PURE__*/function () {
      function RateDialogComponent(formBuilder, dialogRef) {
        _classCallCheck(this, RateDialogComponent);

        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.error_messages = {
          'rating': [{
            type: 'pattern',
            message: 'Number must be between 1 and 5'
          }]
        };
      }

      _createClass(RateDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[1-5]")]
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          this.dialogRef.close("".concat(form.rating));
        }
      }]);

      return RateDialogComponent;
    }();

    RateDialogComponent.ɵfac = function RateDialogComponent_Factory(t) {
      return new (t || RateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
    };

    RateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RateDialogComponent,
      selectors: [["app-rate-dialog"]],
      decls: 13,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["matInput", "", "type", "number", "min", "1", "max", "5", "formControlName", "rating", "placeholder", "Enter Rating", "ngControl", "rating"], [4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button", "mat-dialog-close", ""], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function RateDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RateDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submit(ctx.form.value);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGUtZGlhbG9nL3JhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rate-dialog',
          templateUrl: './rate-dialog.component.html',
          styleUrls: ['./rate-dialog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: APIService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIService", function () {
      return APIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var APIService = /*#__PURE__*/function () {
      function APIService(http) {
        _classCallCheck(this, APIService);

        this.http = http;
      }
      /**
       * User endpoints start here
       */
      //create new user


      _createClass(APIService, [{
        key: "createUser",
        value: function createUser(newUser) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/createUser', newUser, httpOptions);
        }
      }, {
        key: "loginUser",
        value: function loginUser(currentUser) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/login', currentUser, httpOptions);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(currentUser) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/resetPassword', currentUser, httpOptions);
        }
      }, {
        key: "getUser",
        value: function getUser(token) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getUser', token, httpOptions);
        }
      }, {
        key: "updateName",
        value: function updateName(currentUser) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/updateName', currentUser, httpOptions);
        }
      }, {
        key: "updateUsername",
        value: function updateUsername(currentUser) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/updateUsername', currentUser, httpOptions);
        }
      }, {
        key: "getPuzzlesByUser",
        value: function getPuzzlesByUser(token) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getPuzzlesByUser', token, httpOptions);
        }
      }, {
        key: "getPuzzleRatingsByUser",
        value: function getPuzzleRatingsByUser(token) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getPuzzleRatingsByUser', token, httpOptions);
        }
        /**
         * User endpoints end here
         */

        /**
        * Puzzle endpoints start here
        */

      }, {
        key: "getAllPuzzles",
        value: function getAllPuzzles() {
          return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getAllPuzzles');
        }
      }, {
        key: "getAllPuzzleByID",
        value: function getAllPuzzleByID(puzzleID) {
          return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID?Id=' + puzzleID);
        }
      }, {
        key: "createNewPuzzle",
        value: function createNewPuzzle(puzzle) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzle', puzzle, httpOptions);
        }
      }, {
        key: "createNewPuzzleRating",
        value: function createNewPuzzleRating(rating) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzleRating', rating, httpOptions);
        }
      }, {
        key: "getAllPuzzleRatings",
        value: function getAllPuzzleRatings() {
          return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getAllPuzzleRatings');
        }
      }, {
        key: "getSearchedPuzzles",
        value: function getSearchedPuzzles(term) {
          return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getSearchedPuzzles/' + term);
        }
      }, {
        key: "sharePuzzle",
        value: function sharePuzzle(puzzle) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put('https://prometheuspuzzles.herokuapp.com/api/puzzles/sharePuzzle', puzzle, httpOptions);
        }
      }, {
        key: "stopSharingPuzzle",
        value: function stopSharingPuzzle(puzzle) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put('https://prometheuspuzzles.herokuapp.com/api/puzzles/stopSharingPuzzle', puzzle, httpOptions);
        }
      }, {
        key: "deletePuzzle",
        value: function deletePuzzle(puzzle) {
          return this.http["delete"]('http://localhost:3200/api/puzzles/deletePuzzle/' + puzzle);
        }
      }]);

      return APIService;
    }();

    APIService.ɵfac = function APIService_Factory(t) {
      return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: APIService,
      factory: APIService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/js/aiCreation.js":
  /*!*************************************!*\
    !*** ./src/assets/js/aiCreation.js ***!
    \*************************************/

  /*! exports provided: initializeDataAI */

  /***/
  function srcAssetsJsAiCreationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeDataAI", function () {
      return initializeDataAI;
    });
    /* harmony import */


    var src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/assets/js/manualCreation.js */
    "./src/assets/js/manualCreation.js"); ///The structure of each individual/chromosome object


    var Chromosome = {
      sites: [],
      fitness: -1
    }; ///The structure of each site object

    var Site = {
      x: 0,
      y: 0,
      surfaceArea: 0
    };
    var generatePuzzleAIButton, colorPalettesDiv;
    var tempWidth, tempHeight;
    var totalSurfaceArea;
    var generationSize = 10 + 1;
    var tournamentSize = 4;
    var maximumIterations = 150;
    var seedString = 'apples';
    var sliders = [];
    var labels = [];
    var numberOfSites = 6;
    var desiredProportions = [0.40, 0.20, 0.10, 0.10, 0.10, 0.10];
    var groupDistribution = [];

    function copyObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    function xmur3(str) {
      for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353), h = h << 13 | h >>> 19;
      }

      return function () {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
      };
    }

    function mulberry32(a) {
      return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }

    var seed = xmur3(seedString);
    var rand = mulberry32(seed());

    function random(max) {
      return Math.ceil(rand() * max) - 1;
    }

    function expandPuzzle(sites, factor) {
      for (var i = 0; i < sites.length; i++) {
        sites[i].x = sites[i].x * factor;
        sites[i].y = sites[i].y * factor;
      }

      return sites;
    }

    function initializeDataAI() {
      Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["initializeData"])('AI');
      generatePuzzleAIButton = document.getElementById('generatePuzzleButtonAI');
      generatePuzzleAIButton.addEventListener('mousedown', generatePuzzleAI);
      generatePuzzleAIButton.remove();
      document.getElementById('nextButton').addEventListener('mousedown', displaySlidersCard);
      colorPalettesDiv = document.getElementById('colorPalettesAI');
      colorPalettesDiv.remove();
    }

    function displaySlidersCard() {
      numberOfSites = document.getElementById('numberOfPiecesInputBox').value;
      groupDistribution.push(document.getElementById('numberOfPiecesInputBox1').value);
      groupDistribution.push(document.getElementById('numberOfPiecesInputBox2').value);
      groupDistribution.push(document.getElementById('numberOfPiecesInputBox3').value);
      generateSliders(3);
      document.getElementById('inputContainer').appendChild(generatePuzzleAIButton);
    }

    function generatePuzzleAI() {
      desiredProportions = [];

      for (var i = 0; i < 3; i++) {
        var proportion = sliders[i].value / groupDistribution[i] / 100;

        for (var counter = 0; counter < groupDistribution[i]; counter++) {
          desiredProportions.push(proportion);
        }
      }

      desiredProportions.sort(function (a, b) {
        return b - a;
      });
      document.getElementById('inputContainer').innerHTML = '';
      document.getElementById('inputContainer').appendChild(colorPalettesDiv);
      var sites = run();
      sites = expandPuzzle(sites, 10);
      Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["setSites"])(sites);
      Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["setDisableEditMode"])(true);
      Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["generateSiteBoundaries"])();
      Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["createPieces"])();
    }

    function generateSliders(numberOfSliders) {
      var inputContainer = document.getElementById('inputContainer');
      var defaultValue = 100 / numberOfSliders;
      inputContainer.innerHTML = '';

      for (var i = 0; i < numberOfSliders; i++) {
        var slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 1.00;
        slider.max = 100.00 - numberOfSliders + 1;
        slider.value = defaultValue;
        slider.previousValue = defaultValue;
        slider.sliderid = i;
        slider.step = 0.01;
        slider.addEventListener('input', function () {
          var difference = this.previousValue - this.value;
          var distributedValue = (difference / (numberOfSliders - 1)).toFixed(2);
          var leftover = 0;

          for (var _i = 0; _i < numberOfSliders; _i++) {
            if (_i != this.sliderid) {
              var tempValue = parseFloat(sliders[_i].value) + parseFloat(distributedValue);

              if (tempValue >= 1.00) {
                if (leftover != 0 && tempValue + leftover >= 1.00) {
                  tempValue += leftover;
                  leftover = 0;
                }

                sliders[_i].value = tempValue;
                sliders[_i].previousValue = tempValue;
                labels[_i].innerHTML = parseInt(tempValue);
              } else {
                leftover += parseFloat(distributedValue);
              }
            }
          }

          for (var _i2 = 0; leftover != 0 && _i2 < numberOfSliders; _i2++) {
            if (_i2 != this.sliderid) {
              var _tempValue = parseFloat(sliders[_i2].value) + leftover;

              if (_tempValue >= 1.00) {
                sliders[_i2].value = _tempValue;
                sliders[_i2].previousValue = _tempValue;
                labels[_i2].innerHTML = parseInt(_tempValue);
                leftover = 0;
              }
            }
          }

          this.previousValue = this.value;
          labels[this.sliderid].innerHTML = parseInt(this.value);
        });
        var headerLabel = document.createElement('label');
        headerLabel.innerHTML = 'Group ' + (i + 1);
        var valueLabel = document.createElement('label');
        valueLabel.innerHTML = defaultValue.toFixed(0);
        var br = document.createElement('br');
        sliders.push(slider);
        labels.push(valueLabel);
        inputContainer.appendChild(headerLabel);
        inputContainer.appendChild(slider);
        inputContainer.appendChild(valueLabel);
        inputContainer.appendChild(br);
      }
    } ///Executes the genetic algorithm and returns the resulting site array 


    function run() {
      var currentGeneration = [],
          nextGeneration = [];
      var parentX, parentY, children;
      var x, y;
      tempWidth = src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["width"] / 10;
      tempHeight = src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["height"] / 10;
      totalSurfaceArea = tempWidth * tempHeight;
      nextGeneration = initializeGeneration();

      for (var generation = 0; generation < maximumIterations; generation++) {
        currentGeneration = nextGeneration;
        nextGeneration = [];
        nextGeneration.push(getFittest(currentGeneration));

        for (var i = 0; i < generationSize - 1; i += 2) {
          var _nextGeneration;

          parentX = runTournament(currentGeneration);
          parentY = runTournament(currentGeneration);
          children = crossover(parentX, parentY);
          mutate(children[0]);
          mutate(children[1]);
          calculateAndSetFitness(children[0]);
          calculateAndSetFitness(children[1]);

          (_nextGeneration = nextGeneration).push.apply(_nextGeneration, _toConsumableArray(children));
        }
      }

      console.log(nextGeneration);
      console.log('done!');
      return getFittest(nextGeneration).sites;
    } ///Returns the fittest chromosome from generation


    function getFittest(generation) {
      var fittestChromosome = null;
      fittestChromosome = generation[0];

      for (var i = 1; i < generationSize; i++) {
        if (generation[i].fitness < fittestChromosome.fitness) fittestChromosome = generation[i];
      }

      return fittestChromosome;
    } ///Randomly selected a site and a movement direction; then proceed to execute movement using a random offset


    function mutate(chromosome) {
      // let siteIndex = random(numberOfSites);
      var selectedSite = chromosome.sites[random(numberOfSites)];
      var offset = random(5);
      var movementDirection = random(4); ///Move site to the right by offset (increment x by offset), or move to the left if at board edge

      if (movementDirection == 0) {
        if (selectedSite.x + offset < tempWidth) selectedSite.x = selectedSite.x + offset;else selectedSite.x = selectedSite.x - offset;
      } ///Move site to the left by offset (decrement x by offset), or move to the right if at the board edge
      else if (movementDirection == 1) {
          if (selectedSite.x - offset > 0) selectedSite.x = selectedSite.x - offset;else selectedSite.x = selectedSite.x + offset;
        } ///Move site upwards by offset (decrement y by offset), or move downwards if at the board edge
        else if (movementDirection == 2) {
            if (selectedSite.y - offset > 0) selectedSite.y = selectedSite.y - offset;else selectedSite.y = selectedSite.y + offset;
          } ///Move site downwards by offset (increment y by offset), or move upwards if at board edge
          else if (movementDirection == 3) {
              if (selectedSite.y + offset < tempHeight) selectedSite.y = selectedSite.y + offset;else selectedSite.y = selectedSite.y - offset;
            }
    }
    /**
    	Crossover operation; randomly select a site index and swap the sites located on said index. 
    	This function will create two new children, swap their sites and return an array containing them.
    **/


    function crossover(chromosomeX, chromosomeY) {
      var swapIndex = random(numberOfSites);
      var childX = copyObject(chromosomeX);
      var childY = copyObject(chromosomeY);
      var tempSite = childX.sites[swapIndex];
      childX.sites[swapIndex] = childY.sites[swapIndex];
      childY.sites[swapIndex] = tempSite;
      return [childX, childY];
    } ///Tournament selection of parent for next generation - fittest from a random bunch is returned.


    function runTournament(generation) {
      var chosenChromosome,
          fittestChromosome = null;

      for (var i = 0; i < tournamentSize; i++) {
        chosenChromosome = generation[random(generationSize)];
        if (fittestChromosome == null || chosenChromosome.fitness < fittestChromosome.fitness) fittestChromosome = chosenChromosome;
      }

      return fittestChromosome;
    } ///Create and return the initial generation of chromosomes


    function initializeGeneration() {
      var currentGeneration = [];

      for (var i = 0; i < generationSize; i++) {
        var newChromosome = copyObject(Chromosome);

        for (var siteIndex = 0; siteIndex < numberOfSites; siteIndex++) {
          var tempSite = copyObject(Site);
          tempSite.x = random(tempWidth + 1);
          tempSite.y = random(tempHeight + 1);
          newChromosome.sites.push(tempSite);
        }

        calculateAndSetFitness(newChromosome);
        currentGeneration.push(newChromosome);
      }

      return currentGeneration;
    } ///Calculate and set the fitness of a chromosome


    function calculateAndSetFitness(chromosome) {
      determineAndSetSiteBoundaries(chromosome);
      sortSites(chromosome);
      var fitness = 0,
          difference;

      for (var i = 0; i < desiredProportions.length; i++) {
        difference = desiredProportions[i] * totalSurfaceArea - chromosome.sites[i].surfaceArea;
        if (difference < 0) difference *= -1;
        fitness += difference;
      }

      chromosome.fitness = fitness;
    } ///Sort the sites according to surface area from highest to lowest


    function sortSites(chromosome) {
      var sites = chromosome.sites;
      sites.sort(function (siteA, siteB) {
        return siteB.surfaceArea - siteA.surfaceArea;
      });
    } ///Generate the boundaries around the sites


    function determineAndSetSiteBoundaries(chromosome) {
      for (var i = 0; i < numberOfSites; i++) {
        chromosome.sites[i].surfaceArea = 0;
      }

      for (var row = 0; row < tempHeight; row++) {
        for (var col = 0; col < tempWidth; col++) {
          var distances = Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["calculateDistancesFromSitesToPoint"])(col, row, chromosome.sites);
          var equidistantPoints = Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["equidistantPointsPresent"])(distances);
          chromosome.sites[equidistantPoints[0]].surfaceArea += 1;
        }
      }
    }
    /***/

  },

  /***/
  "./src/assets/js/manualCreation.js":
  /*!*****************************************!*\
    !*** ./src/assets/js/manualCreation.js ***!
    \*****************************************/

  /*! exports provided: width, height, setSites, setDisableEditMode, initializeData, calculateDistancesFromSitesToPoint, equidistantPointsPresent, generateSiteBoundaries, createPieces */

  /***/
  function srcAssetsJsManualCreationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "width", function () {
      return width;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "height", function () {
      return height;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setSites", function () {
      return setSites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setDisableEditMode", function () {
      return setDisableEditMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeData", function () {
      return initializeData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "calculateDistancesFromSitesToPoint", function () {
      return calculateDistancesFromSitesToPoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "equidistantPointsPresent", function () {
      return equidistantPointsPresent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateSiteBoundaries", function () {
      return generateSiteBoundaries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createPieces", function () {
      return createPieces;
    });
    /* harmony import */


    var konva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! konva */
    "./node_modules/konva/lib/index.js");
    /* harmony import */


    var konva__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_0__);

    var apiURL = "http://localhost:3200/api/puzzles/createPuzzle";
    var distanceMetric = 'euclidean';
    var token;
    var contentDiv = null;
    var aiContentDiv = null;
    var canvas;
    var canvasCoords;
    var width = 500;
    var height = 500;
    var stage;
    var layer;
    var square;
    var pointsArray = [];
    var sites = [];
    var siteBoundaries = [];
    var pieces = [];
    var precision = 0;
    var colorPalettes = []; //Default palette

    var selectedPalette;
    var paletteCounter = 0;
    var radioButtons = [];
    var hoverOverPoint = false;
    var disableEditMode = false;
    var deletePointButtonClicked = false;
    var piecesJSONObject;
    /** Tutorial for adding more color palettes: **/
    //Step 1: Make an array with desired colors - can be hex values or names

    var defaultPalette = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite', 'Red', 'Green']; //Step 2: Add the array to the page using this function with the array as a first and the desired name as a second parameter

    addColorPalette(defaultPalette, "Default"); //Step 3: Profit!!

    var shadesOfBluePalette = ['DarkBlue', 'DeepSkyBlue', 'MediumBlue', 'DodgerBlue', 'MidnightBlue', 'RoyalBlue', 'DarkSlateBlue', 'CornflowerBlue', 'SkyBlue', 'PowderBlue'];
    addColorPalette(shadesOfBluePalette, "Shades of Blue");
    var shadesOfGreenPalette = ['Teal', 'MediumSpringGreen', 'LimeGreen', 'ForestGreen', 'MediumSeaGreen', 'LawnGreen', 'PaleGreen', 'GreenYellow', 'Aquamarine'];
    addColorPalette(shadesOfGreenPalette, "Shades of Green"); ///Add a color palette to the page and needed functionality

    function addColorPalette(arrayOfColors, paletteName) {
      colorPalettes.push(arrayOfColors); // let radioButton = document.createElement('mat-radio-button');

      var radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton["class"] = 'radio-button';
      radioButton.value = paletteName;
      radioButton.innerHTML = paletteName;
      radioButton.name = 'colorPalette';
      radioButton.paletteid = paletteCounter++;
      radioButton.addEventListener('mousedown', function () {
        selectedPalette = colorPalettes[this.paletteid];
        changePuzzleColorPalette(selectedPalette);
      });
      radioButtons.push(radioButton);
    } ///Changes the displayed color palette used on the puzzle and re-renders it


    function changePuzzleColorPalette(colors) {
      if (pieces.length > 0) {
        layer.removeChildren();

        for (var i = 0; i < pieces.length; i++) {
          pieces[i].attrs.stroke = colors[i % colors.length];
          layer.add(pieces[i]);
        }

        layer.draw();
      }
    }

    function randomizePuzzleColorPalette() {
      if (pieces.length > 0) {
        layer.removeChildren();

        for (var i = 0; i < pieces.length; i++) {
          pieces[i].attrs.stroke = getRandomRGB();
          layer.add(pieces[i]);
        }

        layer.draw();
      }
    } ///Returns a random RGB value


    function getRandomRGB() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    } ///Initialize data and set functions for buttons


    function initializeData(appendedString) {
      if (appendedString == undefined) appendedString = '';
      disableEditMode = false;
      piecesJSONObject = {
        'pieces': []
      };
      selectedPalette = defaultPalette;
      console.log(canvas);
      canvas = document.getElementById('container' + appendedString);
      console.log(canvas);
      stage = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Stage({
        container: 'container' + appendedString,
        width: width,
        height: height
      });
      layer = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Layer();
      square = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Rect({
        x: 0,
        y: 0,
        width: width,
        height: height,
        stroke: 'black',
        strokeWidth: 2
      });
      layer.add(square);
      stage.add(layer);
      canvas.addEventListener('mousedown', function (event) {
        if (!disableEditMode && !hoverOverPoint) {
          canvasCoords = canvas.getBoundingClientRect();
          var x = event.clientX - canvasCoords.x;
          var y = event.clientY - canvasCoords.y;
          var point = createPoint(x, y);
          layer.add(point);
          layer.draw();
          console.log("X: " + x + " Y: " + y);
        }
      });
      addColorPalettePicker(appendedString);
      document.getElementById('generatePuzzleButton' + appendedString).addEventListener('mousedown', generatePuzzle);
      document.getElementById('euclideanButton' + appendedString).addEventListener('mousedown', function () {
        setDistanceMetric('euclidean');
      });
      document.getElementById('manhattanButton' + appendedString).addEventListener('mousedown', function () {
        setDistanceMetric('manhattan');
      });
      document.getElementById('saveButton' + appendedString).addEventListener('mousedown', function () {
        savePuzzle(false);
      });

      if (document.getElementById('deletePointButton') != null) {
        document.getElementById('deletePointButton').addEventListener('mousedown', function () {
          deletePointButtonClicked = !deletePointButtonClicked;

          if (deletePointButtonClicked) {
            disableEditMode = true;
            this.innerHTML = 'edit';
          } else {
            disableEditMode = false;
            this.innerHTML = 'delete';
          }
        });
      } // document.getElementById('saveAndSubmitButton').addEventListener('mousedown', function() {
      // 	// let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });
      // 	// document.getElementById('testingImg').src = puzzleImage;
      // 	savePuzzle(true);
      // });

    }

    function addColorPalettePicker(appendedString) {
      var colorPaletteDiv = document.getElementById('colorPalettes' + appendedString);
      var label;

      for (var i = 0; i < radioButtons.length; i++) {
        label = document.createElement('label');
        label.innerHTML = radioButtons[i].value;
        colorPaletteDiv.appendChild(radioButtons[i]);
        colorPaletteDiv.appendChild(label);
      }

      document.getElementById('randomizeColorsButton' + appendedString).addEventListener('mousedown', randomizePuzzleColorPalette);
    } ///Create a post ajax request and send it to the API in order to save the user's created puzzle


    function savePuzzle(share) {
      token = document.getElementById('tokenLabel').innerHTML;
      var puzzleName = document.getElementById('puzzleNameInputBox').value;
      var puzzleDescription = document.getElementById('puzzleDescriptionInputBox').value;
      var puzzleImage = stage.toDataURL({
        pixelRatio: 0.25
      });
      var jsonData = {
        token: token,
        name: puzzleName,
        description: puzzleDescription,
        puzzleObject: piecesJSONObject,
        image: puzzleImage,
        shared: share
      };
      $.ajax({
        type: 'POST',
        url: apiURL,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        success: function success(data, status) {
          console.log(data);
          console.log(status);
        },
        error: function error(data, status) {
          console.log(data);
          console.log(status);
        }
      });
    } ///Set the selected distance metric for the puzzle


    function setDistanceMetric(metric) {
      distanceMetric = metric;
    } ///Set disableEditMode to true to prevent user from clicking it any further


    function setDisableEditMode(bool) {
      disableEditMode = bool;
    } ///Set the sites array


    function setSites(tempSites) {
      sites = tempSites;
    } ///Create a visual representation of where the user clicks


    function createPoint(x, y) {
      var point = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Circle({
        x: x,
        y: y,
        radius: 1,
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      });
      point.on('mouseover', function (event) {
        document.onmousemove = function (event) {
          canvasCoords = canvas.getBoundingClientRect();
          point.x(event.clientX - canvasCoords.x);
          point.y(event.clientY - canvasCoords.y);
        };

        hoverOverPoint = true;
        document.body.style.cursor = 'pointer';
      });
      point.on('mouseout', function (event) {
        document.onmousemove = null;
        hoverOverPoint = false;
        document.body.style.cursor = 'default';
      });
      point.on('click', function (event) {
        // console.log('clicked!');
        if (deletePointButtonClicked) {
          document.onmousemove = null;
          hoverOverPoint = false;
          document.body.style.cursor = 'default';
          point.destroy();
          layer.draw();
        }
      });
      return point;
    } ///Calls the necessary functions to generate puzzle's vertiecs as well as the visual representation 


    function generatePuzzle() {
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
      pointsArray = layer.getChildren(function (node) {
        return node.getClassName() === 'Circle';
      });

      for (var i = pointsArray.length - 1; i >= 0; i--) {
        sites.push({
          x: pointsArray[i].attrs.x,
          y: pointsArray[i].attrs.y
        });
      }

      layer.destroyChildren(); ///This makes sure that the generate button will only generate once

      disableEditMode = true;
      generateSiteBoundaries();
      createPieces();
    } ///Creates the puzzle pieces from the siteBoundaries for each site(position selected by the user) 


    function createPieces() {
      for (var i = 0; i < sites.length; i++) {
        var trimmedPoints = trimPoints(siteBoundaries[i]);
        var piece = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Line({
          points: trimmedPoints,
          stroke: selectedPalette[i % selectedPalette.length],
          strokeWidth: 1,
          draggable: true
        });
        piece.on('mouseover', function () {
          document.body.style.cursor = 'pointer';
        });
        piece.on('mouseout', function () {
          document.body.style.cursor = 'default';
        });
        pieces.push(piece);
        piecesJSONObject.pieces.push(trimmedPoints);
        layer.add(piece);
      }

      layer.draw();
      piecesJSONObject = JSON.stringify(piecesJSONObject);
    } ///Shortens the array of vertices for each puzzle piece


    function trimPoints(pointArray) {
      var trimmedPoints = [];
      var lastPointCol = -1;
      var firstPointCol = pointArray[0];
      var currentRow = pointArray[1];
      var crissCross = 1;

      for (var index = 0; index < pointArray.length; index += 2) {
        if (currentRow != pointArray[index + 1]) {
          if (crissCross == 1) {
            trimmedPoints.push(firstPointCol, currentRow);
            trimmedPoints.push(lastPointCol, currentRow);
            crissCross = -1;
          } else {
            trimmedPoints.push(lastPointCol, currentRow);
            trimmedPoints.push(firstPointCol, currentRow);
            crissCross - 1;
          }

          firstPointCol = pointArray[index];
          lastPointCol = pointArray[index];
          currentRow = pointArray[index + 1];
        } else {
          lastPointCol = pointArray[index];
        }
      }

      return trimmedPoints;
    } ///Generate the boundaries around the sites


    function generateSiteBoundaries() {
      for (var i = 0; i < sites.length; i++) {
        siteBoundaries[i] = [];
      }

      for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
          var distances = calculateDistancesFromSitesToPoint(col, row, sites);
          var equidistantPoints = equidistantPointsPresent(distances);
          siteBoundaries[equidistantPoints[0]].push(col);
          siteBoundaries[equidistantPoints[0]].push(row);
        }
      }
    } ///Determines which site is closest to a pixel position


    function equidistantPointsPresent(distances) {
      var returnArray = [];
      var minimumDistance = Math.min.apply(Math, _toConsumableArray(distances));
      if (distanceMetric === 'euclidean') minimumDistance = minimumDistance.toFixed(precision) + '';
      var index = 0,
          counter = 0;

      while (index != -1) {
        index = distances.indexOf(minimumDistance);

        if (index != -1) {
          returnArray.push(index + counter);
          distances.splice(index, 1);
          counter++;
        }
      }

      return returnArray;
    } ///Calculates the distances from each site to pixel in position (xOfPoint, yOfPoint) and returns an array


    function calculateDistancesFromSitesToPoint(xOfPoint, yOfPoint, sitePoints) {
      var result = [];

      for (var i = 0; i < sitePoints.length; i++) {
        result.push(calculateDistance(xOfPoint, yOfPoint, sitePoints[i].x, sitePoints[i].y));
      }

      return result;
    } ///Calculates the distance from point1 to point2 using the selected distance metrix


    function calculateDistance(point1X, point1Y, point2X, point2Y) {
      if (distanceMetric === 'euclidean') return calculateEuclideanDistance(point1X, point1Y, point2X, point2Y);else if (distanceMetric === 'manhattan') return calculateManhattanDistance(point1X, point1Y, point2X, point2Y);
    } ///Calculates and returns the Euclidean distance


    function calculateEuclideanDistance(point1X, point1Y, point2X, point2Y) {
      var result = Math.pow(Math.pow(point1X - point2X, 2) + Math.pow(point1Y - point2Y, 2), 0.5);
      return result.toFixed(precision);
    } ///Calculates and returns the Manhattan distance


    function calculateManhattanDistance(point1X, point1Y, point2X, point2Y) {
      var resultX = point1X - point2X;
      if (resultX < 0) resultX *= -1;
      var resultY = point1Y - point2Y;
      if (resultY < 0) resultY *= -1;
      var result = resultX + resultY;
      return result;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jayni\Documents\Campus Stuff\2020\COS301 Software Engineering\Capstone Project\GIT\Puzzle-Generator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map