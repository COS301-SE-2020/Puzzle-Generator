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

/***/ "./src/app/admin/admin-puzzles/admin-puzzles.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-puzzles/admin-puzzles.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminPuzzlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPuzzlesComponent", function() { return AdminPuzzlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _pages_ratings_puzzleArr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/ratings/puzzleArr */ "./src/app/pages/ratings/puzzleArr.ts");
/* harmony import */ var _pages_ratings_RatingsArr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/ratings/RatingsArr */ "./src/app/pages/ratings/RatingsArr.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");


















function AdminPuzzlesComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.puzzleAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.puzzleDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.ratingAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_15_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.ratingDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_18_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.creatorAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_20_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.creatorDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_23_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.dateAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_mat_icon_25_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.dateDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_mat_spinner_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} }
function AdminPuzzlesComponent_div_28_mat_card_4_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- Not yet rated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPuzzlesComponent_div_28_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created on:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shared:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminPuzzlesComponent_div_28_mat_card_4_span_26_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPuzzlesComponent_div_28_mat_card_4_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const puzzle_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.delete(puzzle_r28.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DELETE PUZZLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", puzzle_r28.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r28.creator, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r28.created, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r28.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", puzzle_r28.shared, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", puzzle_r28.rating, "/5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", puzzle_r28.rating == "0");
} }
function AdminPuzzlesComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Puzzles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminPuzzlesComponent_div_28_mat_card_4_Template, 30, 8, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 1, ctx_r9.datasource.filteredData, ctx_r9.startIndex, ctx_r9.endIndex));
} }
function AdminPuzzlesComponent_mat_paginator_29_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AdminPuzzlesComponent_mat_paginator_29_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.pageEvent = ctx_r32.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r10.totalNumberOfPuzzles)("pageSize", ctx_r10.pageSize);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
class AdminPuzzlesComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.ratings = [];
        this.puzzles = [];
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    changeEvent(event) {
        this.startIndex = event.pageIndex * event.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
        if (this.endIndex > this.totalNumberOfPuzzles) {
            this.endIndex = this.totalNumberOfPuzzles;
        }
        this.puzzles.slice(this.startIndex, this.endIndex);
        return event;
    }
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.name.toLowerCase().includes(filter) || data.creator.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    puzzleDescending() {
        return this.puzzles.sort((a, b) => {
            this.sortedBy = "puzzleDesc";
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
            this.sortedBy = "puzzleAsc";
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
            this.sortedBy = "creatorDesc";
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
            this.sortedBy = "creatorAsc";
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
            this.sortedBy = "dateDesc";
            let paramA = new Date(a.created).getTime();
            let paramB = new Date(b.created).getTime();
            return paramA > paramB ? 1 : -1;
        });
    }
    dateAscending() {
        return this.puzzles.sort((a, b) => {
            this.sortedBy = "dateAsc";
            let paramA = new Date(a.created).getTime();
            let paramB = new Date(b.created).getTime();
            return paramA < paramB ? 1 : -1;
        });
    }
    ratingDescending() {
        return this.puzzles.sort((a, b) => {
            this.sortedBy = "ratingDesc";
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
            this.sortedBy = "ratingAsc";
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
    getPuzzles(data) {
        this.puzzles.length = 0;
        for (let i = 0; data[i] != null; i++) {
            let puzzleObj = new _pages_ratings_puzzleArr__WEBPACK_IMPORTED_MODULE_2__["PuzzleArr"]();
            puzzleObj.id = data[i].id;
            puzzleObj.name = data[i].name;
            puzzleObj.description = data[i].description;
            puzzleObj.creator = data[i].creator;
            puzzleObj.created = data[i].createdAt;
            puzzleObj.image = data[i].image;
            puzzleObj.shared = data[i].shared;
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
                puzzleObj.rating = 0;
            }
            else {
                puzzleObj.rating = (total / j);
            }
            this.puzzles.push(puzzleObj);
        }
        this.puzzleAscending();
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.puzzles);
        this.dataAvailable = true;
        this.show = false;
    }
    populate(populatePuz) {
        this.ratings.length = 0;
        this.api.getAllPuzzleRatings().subscribe(data => {
            for (let i = 0; data[i] != null; i++) {
                let ratingObj = new _pages_ratings_RatingsArr__WEBPACK_IMPORTED_MODULE_3__["RatingsArr"]();
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
            this.api.getAllPuzzlesAdmin().subscribe(data => {
                this.totalNumberOfPuzzles = Object.keys(data).length;
                this.getPuzzles(data);
            }, error => {
                console.log('Error from API: ', error.error);
            });
        }
    }
    delete(puzzleID) {
        if (this.api.deletePuzzleAdmin(puzzleID).subscribe()) {
            alert("Puzzle deleted");
            location.reload();
        }
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.show = true;
        this.dataAvailable = false;
        this.sortedBy = "";
        this.populate(null);
    }
}
AdminPuzzlesComponent.ɵfac = function AdminPuzzlesComponent_Factory(t) { return new (t || AdminPuzzlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AdminPuzzlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPuzzlesComponent, selectors: [["app-admin-puzzles"]], decls: 30, vars: 27, consts: [[1, "container"], [1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["class", "paginator", 3, "length", "pageSize", "page", 4, "ngIf"], [1, "arrow", 3, "click"], ["id", "spinner"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "row wrap", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], [4, "ngIf"], [1, "puzzleActions"], ["mat-button", "", 1, "btns", 3, "click"], [1, "paginator", 3, "length", "pageSize", "page"]], template: function AdminPuzzlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminPuzzlesComponent_Template_input_keyup_5_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminPuzzlesComponent_mat_icon_8_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminPuzzlesComponent_mat_icon_10_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminPuzzlesComponent_mat_icon_13_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminPuzzlesComponent_mat_icon_15_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Creator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminPuzzlesComponent_mat_icon_18_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminPuzzlesComponent_mat_icon_20_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminPuzzlesComponent_mat_icon_23_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminPuzzlesComponent_mat_icon_25_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminPuzzlesComponent_mat_spinner_27_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminPuzzlesComponent_div_28_Template, 6, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdminPuzzlesComponent_mat_paginator_29_Template, 1, 2, "mat-paginator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.sortedBy == "ratingAsc" || ctx.sortedBy == "ratingDesc", ctx.sortedBy != "ratingAsc" || ctx.sortedBy != "ratingDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, ctx.sortedBy == "creatorAsc" || ctx.sortedBy == "creatorDesc", ctx.sortedBy != "creatorAsc" || ctx.sortedBy != "creatorDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "creatorAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "creatorDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.sortedBy == "dateAsc" || ctx.sortedBy == "dateDesc", ctx.sortedBy != "dateAsc" || ctx.sortedBy != "dateDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   margin-left: 1.5%;\r\n   margin-right: 1.5%;\r\n   border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  margin-top: 2vw;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  font-family: keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n   margin: 2rem 0 !important;\r\n  font-family: keep-calm;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  width: 60%;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: normal;\r\n}\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-family: keep-calm;\r\n }\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   color: #7C593A;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   border: 2px solid #7C593A;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]:hover, .btns[_ngcontent-%COMP%]:hover{\r\n  background-color: white;\r\n  color: #7C593A;\r\n}\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  font-family: keep-calm;\r\n  font-size:1.8rem;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  text-align: center;\r\n  font-weight: normal;\r\n  padding: 0.5vw;\r\n  border-radius: 0.5vw;\r\n\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n  margin: auto ;\r\n  color: black;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 370px;\r\n  overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: justify;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 30%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\r\n\r\n@media only screen and (min-width: 435px) and (max-width: 670px){\r\n  .sortBtns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin-left: 3.5rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-family: keep-calm;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHV6emxlcy9hZG1pbi1wdXp6bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx1QkFBdUI7R0FDdkIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVDO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHVFQUF1RTtFQUN2RSxzQkFBc0I7QUFDeEI7O0FBRUM7R0FDRSx5QkFBeUI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0NBQ3ZCOztBQUVBO0dBQ0UsdUJBQXVCO0dBQ3ZCLGNBQWM7R0FDZCxtQkFBbUI7R0FDbkIsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2QixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLHlCQUF5QjtDQUMzQjs7QUFFQTtHQUNFLFlBQVk7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBR1YsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFHVixnQ0FBZ0M7RUFHaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO1FBQ1EsZUFBZTtNQUNqQjs7QUFFTjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7R0FDakI7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXB1enpsZXMvYWRtaW4tcHV6emxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC1pbWFnZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5oMXtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIG1hdC1jYXJke1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG59XHJcblxyXG4gbWF0LWNhcmQtdGl0bGV7XHJcbiAgIG1hcmdpbjogMnJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuXHJcbi5idG5ze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMC41dnc7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zb3J0QnRuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiB9XHJcblxyXG4gLmluVXNle1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgY29sb3I6ICM3QzU5M0E7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkICM3QzU5M0E7XHJcbiB9XHJcblxyXG4gLmFycm93e1xyXG4gICBtYXJnaW46IDFyZW07XHJcbiB9XHJcblxyXG4ucHV6emxlQWN0aW9uc3tcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5wdXp6bGVEZXRhaWxze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jcmVzZXRCdG46aG92ZXIsIC5idG5zOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG4uc2VhcmNoQXJlYXtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgZm9udC1zaXplOjEuOHJlbTtcclxufVxyXG5cclxuI3Jlc2V0QnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nOiAwLjV2dztcclxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbiNzcGlubmVye1xyXG4gIG1hcmdpbjogYXV0byA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlsc3tcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBoM3tcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZhZGVJbi1ib3R0b217XHJcbiAgdG9wOiA4MCU7XHJcbn1cclxuXHJcbi5zcGlubmVyIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgICAgICBzdHJva2U6ICM3QzU5M0E7XHJcbiAgICAgIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIGFuZCAobWF4LXdpZHRoOiA2NzBweCl7XHJcbiAgLnNvcnRCdG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPuzzlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-puzzles',
                templateUrl: './admin-puzzles.component.html',
                styleUrls: ['./admin-puzzles.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-ratings/admin-ratings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-ratings/admin-ratings.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminRatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRatingsComponent", function() { return AdminRatingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
















function AdminRatingsComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.puzzleAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminRatingsComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.puzzleDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminRatingsComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_icon_12_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.ratingAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminRatingsComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_icon_14_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.ratingDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminRatingsComponent_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_icon_17_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.creatorAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminRatingsComponent_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_icon_19_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.creatorDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminRatingsComponent_mat_card_25_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rater: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRatingsComponent_mat_card_25_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const rating_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.delete(rating_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DELETE RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rating_r21.testPuzzle.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rating_r21.rating, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r21.testUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r21.testPuzzle.name);
} }
function AdminRatingsComponent_mat_paginator_27_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AdminRatingsComponent_mat_paginator_27_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.pageEvent = ctx_r24.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r7.totalNumberOfPuzzles)("pageSize", ctx_r7.pageSize);
} }
function AdminRatingsComponent_mat_spinner_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 21);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
class AdminRatingsComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.sortedBy = true;
    }
    getPuzzleRatings() {
        this.api.getAllRatingsAdmin().subscribe(data => {
            this.ratingList = data;
            this.totalNumberOfPuzzles = Object.keys(data).length;
            console.log(this.ratingList);
            this.show = false;
            this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.ratingList);
            this.puzzleAscending();
        });
    }
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.testPuzzle.name.toLowerCase().includes(filter) || data.testUser.name.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    changeEvent(event) {
        console.log("Event: ", event);
        this.startIndex = event.pageIndex * event.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
        if (this.endIndex > this.totalNumberOfPuzzles) {
            this.endIndex = this.totalNumberOfPuzzles;
        }
        this.ratingList.slice(this.startIndex, this.endIndex);
        return event;
    }
    puzzleDescending() {
        return this.ratingList.sort((a, b) => {
            this.sortedBy = "puzzleDesc";
            let paramA = a.testPuzzle.name.toLowerCase();
            let paramB = b.testPuzzle.name.toLowerCase();
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
        return this.ratingList.sort((a, b) => {
            this.sortedBy = "puzzleAsc";
            let paramA = a.testPuzzle.name.toLowerCase();
            let paramB = b.testPuzzle.name.toLowerCase();
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
        return this.ratingList.sort((a, b) => {
            this.sortedBy = "creatorDesc";
            let paramA = a.testUser.name.toLowerCase();
            let paramB = b.testUser.name.toLowerCase();
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
        return this.ratingList.sort((a, b) => {
            this.sortedBy = "creatorAsc";
            let paramA = a.testUser.name.toLowerCase();
            let paramB = b.testUser.name.toLowerCase();
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
        return this.ratingList.sort((a, b) => {
            this.sortedBy = "ratingDesc";
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
        return this.ratingList.sort((a, b) => {
            this.sortedBy = "ratingAsc";
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
    delete(rateID) {
        if (this.api.deleteRatingAdmin(rateID).subscribe()) {
            alert("Rating deleted");
            location.reload();
        }
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.getPuzzleRatings();
        this.show = true;
    }
}
AdminRatingsComponent.ɵfac = function AdminRatingsComponent_Factory(t) { return new (t || AdminRatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminRatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminRatingsComponent, selectors: [["app-admin-ratings"]], decls: 30, vars: 25, consts: [[1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "container"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "page", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], [1, "arrow", 3, "click"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], [1, "puzzleActions"], ["mat-button", "", 1, "btns", 3, "click"], [3, "length", "pageSize", "page"], ["id", "spinner"]], template: function AdminRatingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminRatingsComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminRatingsComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminRatingsComponent_mat_icon_9_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminRatingsComponent_mat_icon_12_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminRatingsComponent_mat_icon_14_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rater ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminRatingsComponent_mat_icon_17_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminRatingsComponent_mat_icon_19_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "All Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminRatingsComponent_mat_card_25_Template, 19, 4, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminRatingsComponent_mat_paginator_27_Template, 1, 2, "mat-paginator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdminRatingsComponent_mat_spinner_29_Template, 1, 0, "mat-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.sortedBy == "ratingAsc" || ctx.sortedBy == "ratingDesc", ctx.sortedBy != "ratingAsc" || ctx.sortedBy != "ratingDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx.sortedBy == "creatorAsc" || ctx.sortedBy == "creatorDesc", ctx.sortedBy != "creatorAsc" || ctx.sortedBy != "creatorDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "creatorAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "creatorDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](26, 12, ctx.datasource.filteredData, ctx.startIndex, ctx.endIndex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   margin-left: 1.5%;\r\n   margin-right: 1.5%;\r\n   border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  margin-top: 2vw;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  font-family: keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n   margin: 2rem 0 !important;\r\n  font-family: keep-calm;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  width: 60%;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: normal;\r\n}\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-family: keep-calm;\r\n }\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   color: #7C593A;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   border: 2px solid #7C593A;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]:hover, .btns[_ngcontent-%COMP%]:hover{\r\n  background-color: white;\r\n  color: #7C593A;\r\n}\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  font-family: keep-calm;\r\n  font-size:1.8rem;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  text-align: center;\r\n  font-weight: normal;\r\n  padding: 0.5vw;\r\n  border-radius: 0.5vw;\r\n\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n  margin: auto ;\r\n  color: black;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 370px;\r\n  overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: justify;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 30%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\r\n\r\n@media only screen and (min-width: 435px) and (max-width: 670px){\r\n  .sortBtns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin-left: 3.5rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-family: keep-calm;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcmF0aW5ncy9hZG1pbi1yYXRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx1QkFBdUI7R0FDdkIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVDO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHVFQUF1RTtFQUN2RSxzQkFBc0I7QUFDeEI7O0FBRUM7R0FDRSx5QkFBeUI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0NBQ3ZCOztBQUVBO0dBQ0UsdUJBQXVCO0dBQ3ZCLGNBQWM7R0FDZCxtQkFBbUI7R0FDbkIsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2QixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLHlCQUF5QjtDQUMzQjs7QUFFQTtHQUNFLFlBQVk7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBR1YsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFHVixnQ0FBZ0M7RUFHaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO1FBQ1EsZUFBZTtNQUNqQjs7QUFFTjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7R0FDakI7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJhdGluZ3MvYWRtaW4tcmF0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC1pbWFnZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5oMXtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIG1hdC1jYXJke1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG59XHJcblxyXG4gbWF0LWNhcmQtdGl0bGV7XHJcbiAgIG1hcmdpbjogMnJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuXHJcbi5idG5ze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMC41dnc7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zb3J0QnRuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiB9XHJcblxyXG4gLmluVXNle1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgY29sb3I6ICM3QzU5M0E7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkICM3QzU5M0E7XHJcbiB9XHJcblxyXG4gLmFycm93e1xyXG4gICBtYXJnaW46IDFyZW07XHJcbiB9XHJcblxyXG4ucHV6emxlQWN0aW9uc3tcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5wdXp6bGVEZXRhaWxze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jcmVzZXRCdG46aG92ZXIsIC5idG5zOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG4uc2VhcmNoQXJlYXtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgZm9udC1zaXplOjEuOHJlbTtcclxufVxyXG5cclxuI3Jlc2V0QnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nOiAwLjV2dztcclxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbiNzcGlubmVye1xyXG4gIG1hcmdpbjogYXV0byA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlsc3tcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBoM3tcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZhZGVJbi1ib3R0b217XHJcbiAgdG9wOiA4MCU7XHJcbn1cclxuXHJcbi5zcGlubmVyIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgICAgICBzdHJva2U6ICM3QzU5M0E7XHJcbiAgICAgIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIGFuZCAobWF4LXdpZHRoOiA2NzBweCl7XHJcbiAgLnNvcnRCdG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-ratings',
                templateUrl: './admin-ratings.component.html',
                styleUrls: ['./admin-ratings.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-user/admin-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserComponent", function() { return AdminUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
















function AdminUserComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUserComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.puzzleAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUserComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUserComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.puzzleDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUserComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUserComponent_div_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.delete(user_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DELETE USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", user_r9.username, "");
} }
function AdminUserComponent_mat_paginator_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AdminUserComponent_mat_paginator_16_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.pageEvent = ctx_r12.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r3.totalNumberOfUsers)("pageSize", ctx_r3.pageSize);
} }
function AdminUserComponent_mat_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 15);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
class AdminUserComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.pageSize = 12;
        this.startIndex = 0;
        this.endIndex = 12;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.sortedBy = "";
    }
    changeEvent(event) {
        console.log("Event: ", event);
        this.startIndex = event.pageIndex * event.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
        if (this.endIndex > this.totalNumberOfUsers) {
            this.endIndex = this.totalNumberOfUsers;
        }
        this.userList.slice(this.startIndex, this.endIndex);
        return event;
    }
    puzzleDescending() {
        return this.userList.sort((a, b) => {
            this.sortedBy = "puzzleDesc";
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
        return this.userList.sort((a, b) => {
            this.sortedBy = "puzzleAsc";
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
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.name.toLowerCase().includes(filter) || data.username.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfUsers = this.datasource.filteredData.length;
    }
    getUsers() {
        this.api.getAllUsers().subscribe(data => {
            this.totalNumberOfUsers = Object.keys(data).length;
            this.userList = data;
            this.show = false;
            this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.userList);
            this.puzzleAscending();
        });
    }
    delete(user) {
        if (this.api.deleteUser(user).subscribe()) {
            alert("User deleted");
            location.reload();
        }
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.getUsers();
        this.show = true;
    }
}
AdminUserComponent.ɵfac = function AdminUserComponent_Factory(t) { return new (t || AdminUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserComponent, selectors: [["app-admin-user"]], decls: 19, vars: 13, consts: [[1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "container-fluid"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "page", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], [1, "arrow", 3, "click"], [1, "content"], [1, "puzzleActions"], ["mat-button", "", "id", "delete", 3, "click"], [3, "length", "pageSize", "page"], ["id", "spinner"]], template: function AdminUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminUserComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminUserComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminUserComponent_mat_icon_9_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminUserComponent_div_14_Template, 10, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminUserComponent_mat_paginator_16_Template, 1, 2, "mat-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminUserComponent_mat_spinner_18_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 6, ctx.datasource.filteredData, ctx.startIndex, ctx.endIndex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: ["h1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n font-family:keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin: 2rem 0 !important;\r\n font-family: keep-calm;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-top: 2%;\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%]:hover{\r\n background-color: white;\r\n color: black;\r\n border: #7C593A solid 0.1px;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n  stroke: #7C593A;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n  margin: auto ;\r\n}\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n }\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   color: #7C593A;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   border: 2px solid #7C593A;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n   margin-left: 2vw;\r\n   font-family: keep-calm;\r\n   font-size:1.8rem;\r\n }\r\n\r\n@media only screen and (max-width:576.98px){\r\n  .content[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-bottom: 2vw;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 577px) and (max-width: 768px){\r\n  .content[_ngcontent-%COMP%]{\r\n    width: 48%;\r\n    margin: auto;\r\n    margin-bottom: 2vw;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 769px) and (max-width: 992px){\r\n  .content[_ngcontent-%COMP%]{\r\n    width: 32%;\r\n    margin: auto;\r\n    margin-bottom: 2vw;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 993px){\r\n  .content[_ngcontent-%COMP%]{\r\n    width: 24%;\r\n    margin: auto;\r\n    margin-bottom: 2vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tdXNlci9hZG1pbi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWix1RUFBdUU7Q0FDdkUscUJBQXFCO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0NBQzFCLHNCQUFzQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBR0E7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLDJCQUEyQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7QUFFQTtHQUNFLHVCQUF1QjtHQUN2QixjQUFjO0dBQ2QsbUJBQW1CO0dBQ25CLG1CQUFtQjtHQUNuQix1QkFBdUI7R0FDdkIsa0JBQWtCO0dBQ2xCLHNCQUFzQjtHQUN0Qix5QkFBeUI7Q0FDM0I7O0FBRUE7R0FDRSxZQUFZO0NBQ2Q7O0FBRUE7R0FDRSxnQkFBZ0I7R0FDaEIsc0JBQXNCO0dBQ3RCLGdCQUFnQjtDQUNsQjs7QUFHRDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0FBRUY7O0FBR0E7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztBQUVGOztBQUdBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tdXNlci9hZG1pbi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuIGZvbnQtZmFtaWx5OmtlZXAtY2FsbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luOiAycmVtIDAgIWltcG9ydGFudDtcclxuIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbn1cclxuXHJcbiNkZWxldGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG4jZGVsZXRlOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3JkZXI6ICM3QzU5M0Egc29saWQgMC4xcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICBzdHJva2U6ICM3QzU5M0E7XHJcbn1cclxuI3NwaW5uZXJ7XHJcbiAgbWFyZ2luOiBhdXRvIDtcclxufVxyXG5cclxuXHJcbi5zb3J0QnRuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC5pblVzZXtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIGNvbG9yOiAjN0M1OTNBO1xyXG4gICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAjN0M1OTNBO1xyXG4gfVxyXG5cclxuIC5hcnJvd3tcclxuICAgbWFyZ2luOiAxcmVtO1xyXG4gfVxyXG5cclxuIC5zZWFyY2hBcmVhe1xyXG4gICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICBmb250LXNpemU6MS44cmVtO1xyXG4gfVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzYuOThweCl7XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3N3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5jb250ZW50e1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gIC5jb250ZW50e1xyXG4gICAgd2lkdGg6IDMyJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCl7XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB3aWR0aDogMjQlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-user',
                templateUrl: './admin-user.component.html',
                styleUrls: ['./admin-user.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _pages_profile_solved_puzzles_profile_solved_puzzles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/profile-solved-puzzles/profile-solved-puzzles.component */ "./src/app/pages/profile-solved-puzzles/profile-solved-puzzles.component.ts");
/* harmony import */ var _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/ratings/ratings.component */ "./src/app/pages/ratings/ratings.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/reset-success/reset-success.component */ "./src/app/pages/reset-success/reset-success.component.ts");
/* harmony import */ var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/create/create.component */ "./src/app/pages/create/create.component.ts");
/* harmony import */ var _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/aicreate/aicreate.component */ "./src/app/pages/aicreate/aicreate.component.ts");
/* harmony import */ var _admin_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-user/admin-user.component */ "./src/app/admin/admin-user/admin-user.component.ts");
/* harmony import */ var _admin_admin_ratings_admin_ratings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-ratings/admin-ratings.component */ "./src/app/admin/admin-ratings/admin-ratings.component.ts");
/* harmony import */ var _admin_admin_puzzles_admin_puzzles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-puzzles/admin-puzzles.component */ "./src/app/admin/admin-puzzles/admin-puzzles.component.ts");



















const routes = [
    { path: 'index', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'profilePuzzles', component: _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePuzzlesComponent"] },
    { path: 'profileRatings', component: _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_7__["ProfileRatingsComponent"] },
    { path: 'profileSolvedPuzzle', component: _pages_profile_solved_puzzles_profile_solved_puzzles_component__WEBPACK_IMPORTED_MODULE_8__["ProfileSolvedPuzzlesComponent"] },
    { path: 'ratings', component: _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_9__["RatingsComponent"] },
    { path: 'resetPassword', component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"] },
    { path: 'resetSuccess', component: _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_11__["ResetSuccessComponent"] },
    { path: 'create', component: _pages_create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"] },
    { path: 'aicreate', component: _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_13__["AICreateComponent"] },
    { path: 'adminUser', component: _admin_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_14__["AdminUserComponent"] },
    { path: 'adminRatings', component: _admin_admin_ratings_admin_ratings_component__WEBPACK_IMPORTED_MODULE_15__["AdminRatingsComponent"] },
    { path: 'adminPuzzles', component: _admin_admin_puzzles_admin_puzzles_component__WEBPACK_IMPORTED_MODULE_16__["AdminPuzzlesComponent"] },
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@font-face{\r\n  font-family: keep-calm;\r\n  src: url('KeepCalm-Medium.ttf');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOztBQUVyRTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUg7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQW1EO0FBQ3JEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzXCI7Ki9cclxuXHJcbi8qIGJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmV4cGFuZGVkLXRvb2xiYXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9rZWVwX2NhbG0vS2VlcENhbG0tTWVkaXVtLnR0ZicpO1xyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/ratings/ratings.component */ "./src/app/pages/ratings/ratings.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/reset-success/reset-success.component */ "./src/app/pages/reset-success/reset-success.component.ts");
/* harmony import */ var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/create/create.component */ "./src/app/pages/create/create.component.ts");
/* harmony import */ var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rate-dialog/rate-dialog.component */ "./src/app/rate-dialog/rate-dialog.component.ts");
/* harmony import */ var _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/profile-puzzles/profile-puzzles.component */ "./src/app/pages/profile-puzzles/profile-puzzles.component.ts");
/* harmony import */ var _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/profile-ratings/profile-ratings.component */ "./src/app/pages/profile-ratings/profile-ratings.component.ts");
/* harmony import */ var _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/aicreate/aicreate.component */ "./src/app/pages/aicreate/aicreate.component.ts");
/* harmony import */ var _admin_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/admin-user/admin-user.component */ "./src/app/admin/admin-user/admin-user.component.ts");
/* harmony import */ var _admin_admin_ratings_admin_ratings_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/admin-ratings/admin-ratings.component */ "./src/app/admin/admin-ratings/admin-ratings.component.ts");
/* harmony import */ var _admin_admin_puzzles_admin_puzzles_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin-puzzles/admin-puzzles.component */ "./src/app/admin/admin-puzzles/admin-puzzles.component.ts");
/* harmony import */ var _dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dialogs/solve-dialog/solve-dialog.component */ "./src/app/dialogs/solve-dialog/solve-dialog.component.ts");
/* harmony import */ var _pages_profile_solved_puzzles_profile_solved_puzzles_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/profile-solved-puzzles/profile-solved-puzzles.component */ "./src/app/pages/profile-solved-puzzles/profile-solved-puzzles.component.ts");
/* harmony import */ var _dialogs_menu_menu_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dialogs/menu/menu.component */ "./src/app/dialogs/menu/menu.component.ts");
/* harmony import */ var _dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dialogs/create-dialog/create-dialog.component */ "./src/app/dialogs/create-dialog/create-dialog.component.ts");
/* harmony import */ var _dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var _dialogs_profile_update_dialog_profile_update_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dialogs/profile-update-dialog/profile-update-dialog.component */ "./src/app/dialogs/profile-update-dialog/profile-update-dialog.component.ts");
/* harmony import */ var _dialogs_successful_solve_successful_solve_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dialogs/successful-solve/successful-solve.component */ "./src/app/dialogs/successful-solve/successful-solve.component.ts");
/* harmony import */ var _dialogs_email_pass_email_pass_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dialogs/email-pass/email-pass.component */ "./src/app/dialogs/email-pass/email-pass.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./dialogs/profile-puzzles-dialog/profile-puzzles-dialog.component */ "./src/app/dialogs/profile-puzzles-dialog/profile-puzzles-dialog.component.ts");







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
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_index_index_component__WEBPACK_IMPORTED_MODULE_26__["IndexComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
        _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_31__["RatingsComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__["NavbarComponent"],
        _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"],
        _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_33__["ResetSuccessComponent"],
        _pages_create_create_component__WEBPACK_IMPORTED_MODULE_34__["CreateComponent"],
        _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_35__["RateDialogComponent"],
        _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_36__["ProfilePuzzlesComponent"],
        _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_37__["ProfileRatingsComponent"],
        _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_38__["AICreateComponent"],
        _admin_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_39__["AdminUserComponent"],
        _admin_admin_ratings_admin_ratings_component__WEBPACK_IMPORTED_MODULE_40__["AdminRatingsComponent"],
        _admin_admin_puzzles_admin_puzzles_component__WEBPACK_IMPORTED_MODULE_41__["AdminPuzzlesComponent"],
        _dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_42__["SolveDialogComponent"],
        _pages_profile_solved_puzzles_profile_solved_puzzles_component__WEBPACK_IMPORTED_MODULE_43__["ProfileSolvedPuzzlesComponent"],
        _dialogs_menu_menu_component__WEBPACK_IMPORTED_MODULE_44__["MenuComponent"],
        _dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_45__["CreateDialogComponent"],
        _dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_46__["LoginDialogComponent"],
        _dialogs_profile_update_dialog_profile_update_dialog_component__WEBPACK_IMPORTED_MODULE_47__["ProfileUpdateDialogComponent"],
        _dialogs_successful_solve_successful_solve_component__WEBPACK_IMPORTED_MODULE_48__["SuccessfulSolveComponent"],
        _dialogs_email_pass_email_pass_component__WEBPACK_IMPORTED_MODULE_49__["EmailPassComponent"],
        _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_50__["FooterComponent"],
        _dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_51__["ProfilePuzzlesDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_index_index_component__WEBPACK_IMPORTED_MODULE_26__["IndexComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
                    _pages_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_31__["RatingsComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__["NavbarComponent"],
                    _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"],
                    _pages_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_33__["ResetSuccessComponent"],
                    _pages_create_create_component__WEBPACK_IMPORTED_MODULE_34__["CreateComponent"],
                    _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_35__["RateDialogComponent"],
                    _pages_profile_puzzles_profile_puzzles_component__WEBPACK_IMPORTED_MODULE_36__["ProfilePuzzlesComponent"],
                    _pages_profile_ratings_profile_ratings_component__WEBPACK_IMPORTED_MODULE_37__["ProfileRatingsComponent"],
                    _pages_aicreate_aicreate_component__WEBPACK_IMPORTED_MODULE_38__["AICreateComponent"],
                    _admin_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_39__["AdminUserComponent"],
                    _admin_admin_ratings_admin_ratings_component__WEBPACK_IMPORTED_MODULE_40__["AdminRatingsComponent"],
                    _admin_admin_puzzles_admin_puzzles_component__WEBPACK_IMPORTED_MODULE_41__["AdminPuzzlesComponent"],
                    _dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_42__["SolveDialogComponent"],
                    _pages_profile_solved_puzzles_profile_solved_puzzles_component__WEBPACK_IMPORTED_MODULE_43__["ProfileSolvedPuzzlesComponent"],
                    _dialogs_menu_menu_component__WEBPACK_IMPORTED_MODULE_44__["MenuComponent"],
                    _dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_45__["CreateDialogComponent"],
                    _dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_46__["LoginDialogComponent"],
                    _dialogs_profile_update_dialog_profile_update_dialog_component__WEBPACK_IMPORTED_MODULE_47__["ProfileUpdateDialogComponent"],
                    _dialogs_successful_solve_successful_solve_component__WEBPACK_IMPORTED_MODULE_48__["SuccessfulSolveComponent"],
                    _dialogs_email_pass_email_pass_component__WEBPACK_IMPORTED_MODULE_49__["EmailPassComponent"],
                    _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_50__["FooterComponent"],
                    _dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_51__["ProfilePuzzlesDialogComponent"],
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
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                ],
                entryComponents: [_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_35__["RateDialogComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dialogs/create-dialog/create-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/create-dialog/create-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDialogComponent", function() { return CreateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class CreateDialogComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    clicked() {
        this.router.navigate(['/profilePuzzles']);
    }
    ngOnInit() {
    }
}
CreateDialogComponent.ɵfac = function CreateDialogComponent_Factory(t) { return new (t || CreateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
CreateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateDialogComponent, selectors: [["app-create-dialog"]], decls: 6, vars: 0, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btns", 3, "click"]], template: function CreateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDialogComponent_Template_button_click_4_listener() { return ctx.clicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0.5vw;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9jcmVhdGUtZGlhbG9nL2NyZWF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY3JlYXRlLWRpYWxvZy9jcmVhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAuNXZ3O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-dialog',
                templateUrl: './create-dialog.component.html',
                styleUrls: ['./create-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/email-pass/email-pass.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialogs/email-pass/email-pass.component.ts ***!
  \************************************************************/
/*! exports provided: EmailPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPassComponent", function() { return EmailPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function EmailPassComponent_ng_container_9_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r1.message, " ");
} }
function EmailPassComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailPassComponent_ng_container_9_mat_error_1_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").hasError(error_r1.type) && (ctx_r0.form.get("email").dirty || ctx_r0.form.get("email").touched));
} }
class EmailPassComponent {
    constructor(formBuilder, dialogRef) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Invalid email format.' }
            ]
        };
    }
    submit(form) {
        this.input = form.email;
        this.dialogRef.close(`${form.email}`);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
}
EmailPassComponent.ɵfac = function EmailPassComponent_Factory(t) { return new (t || EmailPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
EmailPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailPassComponent, selectors: [["app-email-pass"]], decls: 15, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["matInput", "", "type", "text", "formControlName", "email", "placeholder", "Enter Email", "ngControl", "email"], [4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button", "mat-dialog-close", ""], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function EmailPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailPassComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter email address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email with reset password confirmation will be sent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailPassComponent_ng_container_9_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: [".btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0.5vw;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9lbWFpbC1wYXNzL2VtYWlsLXBhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZW1haWwtcGFzcy9lbWFpbC1wYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAuNXZ3O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-pass',
                templateUrl: './email-pass.component.html',
                styleUrls: ['./email-pass.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/login-dialog/login-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/login-dialog/login-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class LoginDialogComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    clicked() {
        this.router.navigate(['/index']);
    }
    ngOnInit() {
    }
}
LoginDialogComponent.ɵfac = function LoginDialogComponent_Factory(t) { return new (t || LoginDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
LoginDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginDialogComponent, selectors: [["app-login-dialog"]], decls: 6, vars: 0, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btns", 3, "click"]], template: function LoginDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are not logged in. Please login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginDialogComponent_Template_button_click_4_listener() { return ctx.clicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0.5vw;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9sb2dpbi1kaWFsb2cvbG9naW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7R0FDbEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2xvZ2luLWRpYWxvZy9sb2dpbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMC41dnc7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-dialog',
                templateUrl: './login-dialog.component.html',
                styleUrls: ['./login-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/menu/menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/dialogs/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class MenuComponent {
    constructor() { }
    clicked() {
        location.reload();
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 6, vars: 0, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btns", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Puzzle Rating Successful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_4_listener() { return ctx.clicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0.5vw;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAuNXZ3O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/profile-puzzles-dialog/profile-puzzles-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/profile-puzzles-dialog/profile-puzzles-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfilePuzzlesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePuzzlesDialogComponent", function() { return ProfilePuzzlesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ProfilePuzzlesDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fromPage = data.pageValue;
    }
    clicked() {
        location.reload();
    }
    ngOnInit() {
    }
}
ProfilePuzzlesDialogComponent.ɵfac = function ProfilePuzzlesDialogComponent_Factory(t) { return new (t || ProfilePuzzlesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
ProfilePuzzlesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePuzzlesDialogComponent, selectors: [["app-profile-puzzles-dialog"]], decls: 6, vars: 1, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btns", 3, "click"]], template: function ProfilePuzzlesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePuzzlesDialogComponent_Template_button_click_4_listener() { return ctx.clicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fromPage);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0.5vw;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9wcm9maWxlLXB1enpsZXMtZGlhbG9nL3Byb2ZpbGUtcHV6emxlcy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvcHJvZmlsZS1wdXp6bGVzLWRpYWxvZy9wcm9maWxlLXB1enpsZXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAuNXZ3O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePuzzlesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-puzzles-dialog',
                templateUrl: './profile-puzzles-dialog.component.html',
                styleUrls: ['./profile-puzzles-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/profile-update-dialog/profile-update-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/profile-update-dialog/profile-update-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileUpdateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateDialogComponent", function() { return ProfileUpdateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class ProfileUpdateDialogComponent {
    constructor() { }
    clicked() {
        location.reload();
    }
    ngOnInit() {
    }
}
ProfileUpdateDialogComponent.ɵfac = function ProfileUpdateDialogComponent_Factory(t) { return new (t || ProfileUpdateDialogComponent)(); };
ProfileUpdateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileUpdateDialogComponent, selectors: [["app-profile-update-dialog"]], decls: 6, vars: 0, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btns", 3, "click"]], template: function ProfileUpdateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile Successfully Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileUpdateDialogComponent_Template_button_click_4_listener() { return ctx.clicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0.5vw;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9wcm9maWxlLXVwZGF0ZS1kaWFsb2cvcHJvZmlsZS11cGRhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL3Byb2ZpbGUtdXBkYXRlLWRpYWxvZy9wcm9maWxlLXVwZGF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMC41dnc7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileUpdateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-update-dialog',
                templateUrl: './profile-update-dialog.component.html',
                styleUrls: ['./profile-update-dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/solve-dialog/solve-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/solve-dialog/solve-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: SolveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolveDialogComponent", function() { return SolveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_js_solvePuzzle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/js/solvePuzzle.js */ "./src/assets/js/solvePuzzle.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class SolveDialogComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            alert("You are not logged in");
        }
        this.token = localStorage.getItem('token');
        Object(src_assets_js_solvePuzzle_js__WEBPACK_IMPORTED_MODULE_1__["initializeDataSolve"])();
    }
}
SolveDialogComponent.ɵfac = function SolveDialogComponent_Factory(t) { return new (t || SolveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SolveDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolveDialogComponent, selectors: [["app-solve-dialog"]], decls: 14, vars: 0, consts: [["id", "solverDialogDiv", 1, "solver"], ["mat-dialog-title", ""], ["id", "solvedDiv", 1, "modal"], [1, "modal-content"], [1, "close"], ["id", "solverContainer"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", "id", "closeSolverDialogButton", 1, "btns"]], template: function SolveDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Puzzle Pieces onto the canvas to solve the puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Puzzle Successfully Solved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"]], styles: [".solver[_ngcontent-%COMP%]{\r\n    width: 75vw;\r\n    height: 60rem;\r\n    background-color: gainsboro;\r\n}\r\n\r\n#solverContainer[_ngcontent-%COMP%]{\r\n\twidth: 70vw;\r\n\theight: 50rem;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n  }\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 40%;\r\n  }\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin-top: 1rem;\r\n    margin: 0.5vw;\r\n    \r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9zb2x2ZS1kaWFsb2cvc29sdmUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7O0FBRUEsa0JBQWtCOztBQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9zb2x2ZS1kaWFsb2cvc29sdmUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdmVye1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBoZWlnaHQ6IDYwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcblxyXG4jc29sdmVyQ29udGFpbmVye1xyXG5cdHdpZHRoOiA3MHZ3O1xyXG5cdGhlaWdodDogNTByZW07XHJcbn1cclxuXHJcbi8qICNzb2x2ZWREaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0gKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLmJ0bnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbjogMC41dnc7XHJcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolveDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solve-dialog',
                templateUrl: './solve-dialog.component.html',
                styleUrls: ['./solve-dialog.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/successful-solve/successful-solve.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/successful-solve/successful-solve.component.ts ***!
  \************************************************************************/
/*! exports provided: SuccessfulSolveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulSolveComponent", function() { return SuccessfulSolveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SuccessfulSolveComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessfulSolveComponent.ɵfac = function SuccessfulSolveComponent_Factory(t) { return new (t || SuccessfulSolveComponent)(); };
SuccessfulSolveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessfulSolveComponent, selectors: [["app-successful-solve"]], decls: 2, vars: 0, template: function SuccessfulSolveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "successful-solve works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3Mvc3VjY2Vzc2Z1bC1zb2x2ZS9zdWNjZXNzZnVsLXNvbHZlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessfulSolveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-successful-solve',
                templateUrl: './successful-solve.component.html',
                styleUrls: ['./successful-solve.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NavbarComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Puzzles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
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
        this.token = localStorage.getItem('token');
        if (this.token == "CgOOiUKmqqPyOlhFjDZth") {
            this.admin = true;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 45, vars: 2, consts: [[1, "container-fluid"], [1, "logo"], ["src", "assets/images/logo_nav.png", "routerLink", "/ratings", 1, "navimg"], ["id", "navCustom", 1, "navbar", "navbar-expand-sm"], [1, "left"], ["id", "burger", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent1", "aria-controls", "navbarSupportedContent1", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "hidden-sm", "hidden-md", "hidden-lg", "hidden-xl"], [1, "fa", "fa-bars", "fa-2x"], ["id", "navbarSupportedContent1", 1, "collapse", "navbar-collapse", "left"], ["routerLinkActive", "active", 1, "nav", "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/ratings", 1, "nav-link"], [1, "nav-item", "dropdown"], ["role", "button", "id", "navbarDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/create", 1, "dropdown-item"], ["routerLink", "/aicreate", 1, "dropdown-item"], ["role", "button", "id", "navbarDropdown2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown2", 1, "dropdown-menu"], ["routerLink", "/profile", 1, "dropdown-item"], ["routerLink", "/profilePuzzles", 1, "dropdown-item"], ["routerLink", "/profileRatings", 1, "dropdown-item"], ["routerLink", "/profileSolvedPuzzle", 1, "dropdown-item"], ["class", "nav-item dropdown", 4, "ngIf"], [1, "navbar-text"], ["id", "logout", 3, "click"], ["routerLink", "/adminUser", 1, "dropdown-item"], ["routerLink", "/adminPuzzles", 1, "dropdown-item"], ["routerLink", "/adminRatings", 1, "dropdown-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "My Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "My Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Solved Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NavbarComponent_li_40_Template, 13, 0, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_43_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hello, ", ctx.name, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["nav[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]{\r\n  color: white;\r\n  margin-right: 1.5vw;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.navbar-text[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n  font-family: keep-calm;\r\n  margin-top: 2rem;\r\n}\r\n\r\nul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\r\n  color: #7C593A !important;\r\n  cursor: pointer;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  background-color: #7C593A;\r\n  color: white;\r\n  padding: 0.9vw;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]:hover{\r\n  background-color:  white;\r\n  color: #7C593A;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem !important;\r\n  color: white !important;\r\n}\r\n\r\n.navimg[_ngcontent-%COMP%]{\r\n  height: 13vw;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%]{\r\n  margin-left: 0.7vw !important;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n  font-family: keep-calm;\r\n  margin: 0.8rem;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-top: 1vw;\r\n}\r\n\r\n#burger[_ngcontent-%COMP%] {\r\n  background-color: #7C593A !important;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n  background-color: #7C593A !important;\r\n  padding: 1vw;\r\n}\r\n\r\n@media only screen and (max-width:768px){\r\n\r\n  .dropdown-menu[_ngcontent-%COMP%]{\r\n    background-color: #7C593A !important;\r\n    padding-left: 4vw;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTtJQUNFLG9DQUFvQztJQUNwQyxpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyLXRleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG51bC5uYXYgbGk6aG92ZXIgPiBhIHtcclxuICBjb2xvcjogIzdDNTkzQSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc3BhbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjl2dztcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG5cclxuI2xvZ291dDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XHJcbiAgY29sb3I6ICM3QzU5M0E7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbXtcclxuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2aW1ne1xyXG4gIGhlaWdodDogMTN2dztcclxufVxyXG5cclxuLmNhcmV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjd2dyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uYXZ7XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICBtYXJnaW46IDAuOHJlbTtcclxufVxyXG5cclxuaXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxdnc7XHJcbn1cclxuXHJcbiNidXJnZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0EgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDF2dztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuXHJcbiAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDR2dztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var src_app_dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/create-dialog/create-dialog.component */ "./src/app/dialogs/create-dialog/create-dialog.component.ts");
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");



















class AICreateComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    success() {
        this.createDialog = this.dialog.open(src_app_dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateDialogComponent"], { disableClose: true, hasBackdrop: true });
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            //alert("You are not logged in");
        }
        Object(src_assets_js_aiCreation_js__WEBPACK_IMPORTED_MODULE_1__["initializeDataAI"])();
        this.token = localStorage.getItem('token');
    }
}
AICreateComponent.ɵfac = function AICreateComponent_Factory(t) { return new (t || AICreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
AICreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AICreateComponent, selectors: [["app-aicreate"]], decls: 99, vars: 4, consts: [["mat-raised-button", "", "id", "help", 3, "click"], ["id", "helpXs", 1, "fish", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myVideoModal1Label", "aria-hidden", "true", 1, "modal", "fade"], ["videoModal1", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-body", "mb-0", "p-0"], [1, "embed-responsive", "embed-responsive-16by9", "z-depth-1-half"], ["src", "../../assets/AIFinal.mp4", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "modal-footer", "justify-content-center"], [1, "btns", 3, "click"], [1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1"], [1, "puzzleOptions"], [1, "titleLabel"], ["id", "inputContainer"], ["appearance", "outline", 1, "names"], ["type", "number", "matInput", "", "placeholder", "1", "name", "numberOfPieces", "id", "numberOfPiecesInputBox1", 1, "input"], ["type", "number", "matInput", "", "placeholder", "1", "name", "numberOfPieces", "id", "numberOfPiecesInputBox2", 1, "input"], ["type", "number", "matInput", "", "placeholder", "1", "name", "numberOfPieces", "id", "numberOfPiecesInputBox3", 1, "input"], [1, "radio-group"], ["value", "euclidean", "name", "distanceMetric", "id", "euclideanButtonAI", 1, "radio-button"], ["value", "manhattan", "name", "distanceMetric", "id", "manhattanButtonAI", 1, "radio-button"], ["mat-raised-button", "", "id", "nextButton", 1, "btns"], ["mat-raised-button", "", "id", "generatePuzzleButtonAI", 1, "btns"], [1, "creationCard"], ["id", "containerAI"], ["id", "progressBarDiv"], ["mode", "indeterminate", "id", "progressBar"], ["id", "puzzleControlsDiv"], ["mat-raised-button", "", "id", "previousPuzzleButton", 1, "btns"], ["mat-raised-button", "", "id", "nextPuzzleButton", 1, "btns"], [1, "saveOptions"], [1, "matContentC"], ["id", "colorPalleteLabel"], ["paletteid", "0", "value", "default", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "1", "value", "shadesOfRed", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "2", "value", "shadesOfGreen", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "3", "value", "shadesOfBlue", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["mat-raised-button", "", "id", "randomizeColorsButtonAI", 1, "btns"], ["matInput", "", "placeholder", "New Puzzle", "name", "puzzleName", "id", "puzzleNameInputBoxAI", 1, "input", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "For my cat", "name", "puzzleDescription", "id", "puzzleDescriptionInputBoxAI", 1, "input", 3, "ngModel", "ngModelChange"], ["hidden", "true", "id", "tokenLabel"], ["mat-raised-button", "", "id", "saveButtonAI", 1, "btns", 3, "disabled", "click"], [1, "footer"]], template: function AICreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AICreateComponent_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AICreateComponent_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AICreateComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Algorithm Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Number of Group 1 pieces:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Number of Group 2 pieces:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Number of Group 3 pieces:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select Puzzle Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-radio-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-radio-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Euclidian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Manhattan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Generate Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Create a puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "mat-progress-bar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Previous Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Next Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Saving Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-content", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Select a color-palette:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-radio-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-radio-button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Shades Of Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-radio-button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Shades Of Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-radio-button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Shades of Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Randomize Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Puzzle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AICreateComponent_Template_input_ngModelChange_88_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Short description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AICreateComponent_Template_input_ngModelChange_92_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AICreateComponent_Template_button_click_96_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "app-footer", 44);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.name || !ctx.description);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  \r\n  padding: 3%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n#help[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  float: right;\r\n  margin-right: 2vw;\r\n  cursor: pointer;\r\n  height: 5rem;\r\n  width: 7rem;\r\n}\r\n\r\n#helpXs[_ngcontent-%COMP%]{\r\n  visibility: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n margin-left: 10rem;\r\n}\r\n\r\n.titleLabel[_ngcontent-%COMP%]{\r\n  margin-left: -2rem;\r\n}\r\n\r\nmat-radio-group[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem;\r\n  padding:0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n   width: 500px;\r\n   height: 500px;\r\n   border: 1px solid black;\r\n   margin: 1rem;\r\n}\r\n\r\n.radio-group[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: column;\r\n   font-size: 1vw;\r\n }\r\n\r\n#label[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n   padding: 0.7em 0;\r\n   font-size: 1vw;\r\n   font-family: keep-calm;\r\n   color: black;\r\n }\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n   background-color: #7C593A;\r\n   color: white;\r\n   margin: 0 1.3vw;\r\n }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n   text-transform: capitalize;\r\n   padding: 0.7em 0;\r\n   margin-top: 30px;\r\n   font-size: 40px;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   color: gray;\r\n }\r\n\r\n.puzzleOptions[_ngcontent-%COMP%]{\r\n  margin: 1rem;\r\n  padding-left: 3rem;\r\n  padding-right: 3rem;\r\n  padding-top: 4rem;\r\n  width: 40rem;\r\n  background-color: gainsboro;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.creationCard[_ngcontent-%COMP%]{\r\n  margin: 1rem;\r\n  padding-left: 4rem;\r\n  padding-right: 4rem;\r\n  padding-top: 4rem;\r\n  margin-bottom: 1rem;\r\n  background-color: gainsboro;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n  line-height: 3rem;\r\n}\r\n\r\n.saveOptions[_ngcontent-%COMP%]{\r\n  margin: 1rem;\r\n  padding-left: 4rem;\r\n  padding-top: 4rem;\r\n  width: 35rem;\r\n  max-width: 50rem;\r\n  background-color: gainsboro;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 575.98px) { \r\n  .puzzleOptions[_ngcontent-%COMP%]{\r\n    width: 32rem;\r\n  }\r\n  #container[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    width: 29rem;\r\n    height: 35rem;\r\n    border: 1px solid black;\r\n    margin-left: -2.5rem;\r\n  }\r\n\r\n  .puzzleType[_ngcontent-%COMP%]{\r\n    margin-left: .8rem;\r\n    width: 32rem;\r\n  }\r\n\r\n  .creationCard[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    width: 32rem;\r\n  }\r\n\r\n  .saveOptions[_ngcontent-%COMP%]{\r\n    width: 32rem;\r\n  }\r\n\r\n  .matContentC[_ngcontent-%COMP%]{\r\n    margin-left: 3rem;\r\n  }\r\n\r\n  #colorPalleteLabel[_ngcontent-%COMP%]{\r\n    font-size: medium;\r\n  }\r\n\r\n  #help[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n  }\r\n\r\n  #helpXs[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .radio-group[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) { \r\n \r\n }\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) {  }\r\n\r\n\r\n\r\n@media (min-width: 992px) and (max-width: 1199.98px) {  }\r\n\r\n\r\n\r\n@media (min-width: 1200px) {  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWljcmVhdGUvYWljcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLFlBQVk7QUFDZjs7QUFFQTtHQUNHLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsY0FBYztDQUNoQjs7QUFFQTtHQUNFLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsY0FBYztHQUNkLHNCQUFzQjtHQUN0QixZQUFZO0NBQ2Q7O0FBRUE7R0FDRSx5QkFBeUI7R0FDekIsWUFBWTtHQUNaLGVBQWU7Q0FDakI7O0FBR0E7R0FDRSxrQkFBa0I7R0FDbEIsMEJBQTBCO0dBQzFCLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIsV0FBVztDQUNiOztBQUVBO0VBQ0MsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUEsMkRBQTJEOztBQUMzRDtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7O0FBRUEsbURBQW1EOztBQUNuRDs7Q0FFQzs7QUFFRCwyQ0FBMkM7O0FBQzNDLHVEQUF1RDs7QUFFdkQsMkNBQTJDOztBQUMzQyx3REFBd0Q7O0FBRXZELHdEQUF3RDs7QUFDekQsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWljcmVhdGUvYWljcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgKi9cclxuICBwYWRkaW5nOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xyXG59XHJcblxyXG4jaGVscHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbiNoZWxwWHN7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuIG1hcmdpbi1sZWZ0OiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlTGFiZWx7XHJcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcGFkZGluZzowLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgd2lkdGg6IDUwMHB4O1xyXG4gICBoZWlnaHQ6IDUwMHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXAge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBmb250LXNpemU6IDF2dztcclxuIH1cclxuXHJcbiAjbGFiZWx7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgcGFkZGluZzogMC43ZW0gMDtcclxuICAgZm9udC1zaXplOiAxdnc7XHJcbiAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgIGNvbG9yOiBibGFjaztcclxuIH1cclxuXHJcbiAuYnRuc3tcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBtYXJnaW46IDAgMS4zdnc7XHJcbiB9XHJcblxyXG5cclxuIC5tYWluLXRpdGxle1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICBwYWRkaW5nOiAwLjdlbSAwO1xyXG4gICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICBmb250LXNpemU6IDQwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICAgY29sb3I6IGdyYXk7XHJcbiB9XHJcblxyXG4gLnB1enpsZU9wdGlvbnN7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIHdpZHRoOiA0MHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbkNhcmR7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4uc2F2ZU9wdGlvbnN7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICB3aWR0aDogMzVyZW07XHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXHJcbiAgLnB1enpsZU9wdGlvbnN7XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG4gICNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHdpZHRoOiAyOXJlbTtcclxuICAgIGhlaWdodDogMzVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnB1enpsZVR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogLjhyZW07XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAuY3JlYXRpb25DYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAuc2F2ZU9wdGlvbnN7XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAubWF0Q29udGVudEN7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICB9XHJcblxyXG4gICNjb2xvclBhbGxldGVMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgI2hlbHB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAjaGVscFhze1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5yYWRpby1ncm91cCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7IFxyXG4gXHJcbiB9XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkgeyAgfVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7ICB9XHJcblxyXG4gLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AICreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aicreate',
                templateUrl: './aicreate.component.html',
                styleUrls: ['./aicreate.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var src_app_dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/create-dialog/create-dialog.component */ "./src/app/dialogs/create-dialog/create-dialog.component.ts");
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");


















class CreateComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    success() {
        this.createDialog = this.dialog.open(src_app_dialogs_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateDialogComponent"], { disableClose: true, hasBackdrop: true });
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            // alert("You are not logged in");
        }
        Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_1__["initializeData"])();
        this.token = localStorage.getItem('token');
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 78, vars: 4, consts: [["mat-raised-button", "", "id", "help", 3, "click"], ["id", "helpXs", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myVideoModal1Label", "aria-hidden", "true", 1, "modal", "fade"], ["videoModal1", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-body", "mb-0", "p-0"], [1, "embed-responsive", "embed-responsive-16by9", "z-depth-1-half"], ["src", "../../assets/ManualFinal.mp4", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "modal-footer", "justify-content-center"], [1, "btns", 3, "click"], [1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1"], [1, "puzzleType"], [1, "titleLabel"], [1, "radio-group"], ["value", "euclidean", "name", "distanceMetric", "id", "euclideanButton", 1, "radio-button"], ["value", "manhattan", "name", "distanceMetric", "id", "manhattanButton", 1, "radio-button"], [1, "creationCard"], ["mat-raised-button", "", "id", "deletePointButton", 1, "btns"], ["id", "deletePointButtonIcon"], ["id", "editPointButtonIcon"], ["id", "container"], ["mat-raised-button", "", "id", "generatePuzzleButton", 1, "btns"], [1, "saveOptions"], ["id", "saveHeading"], [1, "matContentC"], ["id", "colorPalleteLabel", 1, "titleLabel"], [1, "colRadioBtns"], ["paletteid", "0", "value", "default", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "1", "value", "shadesOfRed", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "2", "value", "shadesOfGreen", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["paletteid", "3", "value", "shadesOfBlue", "name", "colorPalettes", 1, "radio-button", "colorPalettes"], ["mat-raised-button", "", "id", "randomizeColorsButton", 1, "btns"], ["appearance", "outline", 1, "names"], ["matInput", "", "placeholder", "New Puzzle", "name", "puzzleName", "id", "puzzleNameInputBox", 1, "input", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "For my cat", "name", "puzzleDescription", "id", "puzzleDescriptionInputBox", 1, "input", 3, "ngModel", "ngModelChange"], ["hidden", "true", "id", "tokenLabel"], ["mat-raised-button", "", "id", "saveButton", 1, "btns", 3, "disabled", "click"], [1, "footer"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Puzzle Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Euclidian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Manhattan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Create puzzle by selecting points on the canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Delete Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Generate Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-title", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Saving Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Select a color-palette:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-radio-group", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-radio-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-radio-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Shades Of Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-radio-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Shades Of Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-radio-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Shades of Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Randomize Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Puzzle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_67_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Short description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_71_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_75_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-footer", 39);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.name || !ctx.description);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   \r\n   padding: 3%;\r\n   border-radius: 0.5%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  margin-left: 10rem;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    width: 50.2rem;\r\n    height: 50.2rem;\r\n    border: 1px solid black;\r\n    margin: 1rem;\r\n}\r\n\r\nmat-radio-group[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n#label[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 0.7em 0;\r\n    font-size: 1vw;\r\n    \r\n    color: black;\r\n  }\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin: 0 1.3vw;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n    margin-left: 1rem;\r\n  }\r\n\r\n#helpXs[_ngcontent-%COMP%]{\r\n    color: #7C593A;\r\n    visibility: hidden;\r\n    padding: 0.5rem;\r\n    float: right;\r\n    margin-right: 2vw;\r\n    cursor: pointer;\r\n  }\r\n\r\n#help[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    padding: 0.5rem;\r\n    float: right;\r\n    margin-right: 2vw;\r\n    cursor: pointer;\r\n    height: 5rem;\r\n    width: 7rem;\r\n  }\r\n\r\n.titleLabel[_ngcontent-%COMP%]{\r\n    margin-left: -2rem;\r\n  }\r\n\r\n.puzzleType[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding-left: 3rem;\r\n    padding-right: 5rem;\r\n    padding-top: 4rem;\r\n    width: 30rem;\r\n    background-color: gainsboro;\r\n  }\r\n\r\n.puzzleType[_ngcontent-%COMP%]{\r\n    margin-left: 1.5rem;\r\n    padding-right: -2rem;\r\n    width: 30rem;\r\n  }\r\n\r\n.creationCard[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding-left: 4rem;\r\n    padding-right: 4rem;\r\n    padding-top: 4rem;\r\n    margin-bottom: 1rem;\r\n    background-color: gainsboro;\r\n  }\r\n\r\n.saveOptions[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding-left: 4rem;\r\n    padding-right: 2rem;\r\n    padding-top: 4rem;\r\n    width: 30rem;\r\n    \r\n    background-color: gainsboro;\r\n  }\r\n\r\n#saveHeading[_ngcontent-%COMP%]{\r\n    margin-left: -2rem;\r\n  }\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    background-color: #7C593A;\r\n    line-height: 3rem;\r\n  }\r\n\r\n.names[_ngcontent-%COMP%]{\r\n    margin-left: -2rem;\r\n    font-size: 1.5rem;\r\n    \r\n  }\r\n\r\n.matContentC[_ngcontent-%COMP%]{\r\n    margin-left: 2rem;\r\n    margin-right: 2rem;\r\n  }\r\n\r\n#randomizeColorsButton[_ngcontent-%COMP%]{\r\n    margin-left: -2rem;\r\n  }\r\n\r\n\r\n\r\n@media (max-width: 575.98px) { \r\n  #container[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    width: 29rem;\r\n    height: 35rem;\r\n    border: 1px solid black;\r\n    margin-left: -2.5rem;\r\n  }\r\n\r\n  .puzzleType[_ngcontent-%COMP%]{\r\n    margin-left: .8rem;\r\n    width: 32rem;\r\n  }\r\n\r\n  .creationCard[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    width: 32rem;\r\n  }\r\n\r\n  .saveOptions[_ngcontent-%COMP%]{\r\n    width: 32rem;\r\n  }\r\n\r\n  .matContentC[_ngcontent-%COMP%]{\r\n    margin-left: 3rem;\r\n  }\r\n\r\n  #colorPalleteLabel[_ngcontent-%COMP%]{\r\n    font-size: medium;\r\n  }\r\n\r\n  #help[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n  }\r\n\r\n  #helpXs[_ngcontent-%COMP%]{\r\n    visibility: visible;\r\n    margin-top: -1.5rem;\r\n    margin-right: -5rem;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%]{\r\n    \r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) {  \r\n  #container[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    width: 29rem;\r\n    height: 35rem;\r\n    border: 1px solid black;\r\n    margin-left: -2.5rem;\r\n  }\r\n\r\n  .puzzleType[_ngcontent-%COMP%]{\r\n    margin-left: .8rem;\r\n    width: 32rem;\r\n  }\r\n\r\n  .creationCard[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    width: 32rem;\r\n  }\r\n\r\n  .saveOptions[_ngcontent-%COMP%]{\r\n    width: 32rem;\r\n  }\r\n\r\n  .matContentC[_ngcontent-%COMP%]{\r\n    margin-left: 3rem;\r\n  }\r\n\r\n  #colorPalleteLabel[_ngcontent-%COMP%]{\r\n    font-size: medium;\r\n  }\r\n\r\n  #help[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n  }\r\n\r\n  #helpXs[_ngcontent-%COMP%]{\r\n    visibility: visible;\r\n    margin-top: -1.5rem;\r\n    margin-right: -5rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) {  }\r\n\r\n\r\n\r\n@media (min-width: 992px) and (max-width: 1199.98px) {  }\r\n\r\n\r\n\r\n@media (min-width: 1200px) {  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0NBQWtDO0dBQ2xDLFdBQVc7R0FDWCxtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7OztrQ0FHOEI7RUFDaEM7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGLDJEQUEyRDs7QUFDM0Q7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsS0FBSztFQUNQO0FBQ0Y7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSwyQ0FBMkM7O0FBQzNDLHVEQUF1RDs7QUFFdkQsMkNBQTJDOztBQUMzQyx3REFBd0Q7O0FBRXZELHdEQUF3RDs7QUFDekQsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgKi9cclxuICAgcGFkZGluZzogMyU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAuMnJlbTtcclxuICAgIGhlaWdodDogNTAuMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4gIG1hdC1yYWRpby1ncm91cHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogcGFkZGluZzowLjVyZW07ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICNsYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuN2VtIDA7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuYnRuc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMS4zdnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtYWN0aW9uc3tcclxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjaGVscFhze1xyXG4gICAgY29sb3I6ICM3QzU5M0E7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICNoZWxwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbiAgfVxyXG5cclxuICAudGl0bGVMYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxuICB9XHJcblxyXG4gIC5wdXp6bGVUeXBle1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIH1cclxuXHJcbiAgLnB1enpsZVR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLTJyZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgfVxyXG5cclxuICAuY3JlYXRpb25DYXJke1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICB9XHJcblxyXG4gIC5zYXZlT3B0aW9uc3tcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIC8qIG1heC13aWR0aDogNTByZW07ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgfVxyXG5cclxuICAjc2F2ZUhlYWRpbmd7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gIC5uYW1lc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXHJcbiAgfVxyXG5cclxuICAubWF0Q29udGVudEN7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB9XHJcblxyXG4gICNyYW5kb21pemVDb2xvcnNCdXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbiAgfVxyXG4gIFxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweCkgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHdpZHRoOiAyOXJlbTtcclxuICAgIGhlaWdodDogMzVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnB1enpsZVR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogLjhyZW07XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAuY3JlYXRpb25DYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAuc2F2ZU9wdGlvbnN7XHJcbiAgICB3aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAubWF0Q29udGVudEN7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICB9XHJcblxyXG4gICNjb2xvclBhbGxldGVMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgI2hlbHB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAjaGVscFhze1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFse1xyXG4gICAgLyogICovXHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7ICBcclxuICAjY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICB3aWR0aDogMjlyZW07XHJcbiAgICBoZWlnaHQ6IDM1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTtcclxuICB9XHJcblxyXG4gIC5wdXp6bGVUeXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IC44cmVtO1xyXG4gICAgd2lkdGg6IDMycmVtO1xyXG4gIH1cclxuXHJcbiAgLmNyZWF0aW9uQ2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDMycmVtO1xyXG4gIH1cclxuXHJcbiAgLnNhdmVPcHRpb25ze1xyXG4gICAgd2lkdGg6IDMycmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hdENvbnRlbnRDe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAjY29sb3JQYWxsZXRlTGFiZWx7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcblxyXG4gICNoZWxwe1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgI2hlbHBYc3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7ICB9XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgIH1cclxuXHJcbiAvKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], [1, "text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Copyright 2020 - Prometheus Puzzles \u00A0 | \u00A0 team.prometheus@willowmoore.co.za ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: [".flex-container[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    font-family: keep-calm;\r\n    height: 7rem;\r\n    border-radius: .3rem;\r\n    font-size: 1.7rem;\r\n    color: #fff;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
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



class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 13, vars: 0, consts: [["id", "indexNav"], [1, "links"], ["id", "btnLink"], ["href", "/signup", "mat-button", "", 1, "indexBtn"], ["href", "/login", "mat-button", "", 1, "indexBtn"], ["id", "second", 1, "container"], ["media", "(max-width: 768px)", "srcset", "assets/images/indexSml.jpg"], ["src", "assets/images/newsplash.jpg", 1, "splashImage"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  padding: 0.7em 0;\r\n  margin-top: 30px;\r\n  font-size: 60px;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]{\r\n  padding: 1em 0;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  \r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.descText[_ngcontent-%COMP%]{\r\n    padding: 2%;\r\n}\r\n\r\n.indexNavBtns[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 92%;\r\n  }\r\n\r\n#second[_ngcontent-%COMP%], .one[_ngcontent-%COMP%]{\r\n    \r\n    width:100%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: white;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: 1.5px solid black;\r\n  color: black ;\r\n  height: 30px;\r\n  text-align: center;\r\n  width: 80px;\r\n  transition-duration: 0.4s;\r\n  margin: 5px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  font-size: 16px;\r\n\r\n}\r\n\r\n#more[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 150px;\r\n\r\n}\r\n\r\n.why[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.indexBtn[_ngcontent-%COMP%]:hover {\r\n  background-color: #7C593A;\r\n  color: white !important;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 3.5em;\r\n\r\n}\r\n\r\n.indexNavImage[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    height: 60%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 20px;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: whitesmoke;\r\n \r\n   border-bottom: solid 1px rgba(160, 160, 160, 0.3);\r\n  height: 4.2em;\r\n  left: 0;\r\n  line-height: 4em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n  line-height: inherit;\r\n  margin-left: 5px;\r\n  white-space: nowrap;\r\n  font-family: keep-calm;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 0.7em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\r\n  height: inherit;\r\n  line-height: inherit;\r\n  margin-left: 1.5em;\r\n  overflow: hidden;\r\n  padding-left: 1.5em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-left: solid 1.5px black;\r\n  line-height: 1;\r\n  margin-left: 1em;\r\n  padding-left: 1em;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover{\r\n  color: #f6c616;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  border-left: 0;\r\n  margin-left: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n#indexNav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n  \r\n  font-size: 0.7em;\r\n  font-weight: 400;\r\n  letter-spacing: 0.25em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n#btnLink[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: 10px;\r\n  margin-right: 15px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n@media screen and (max-width: 576px){\r\n  img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .main-title[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .subtitle[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n    font-size: 4vw;\r\n  }\r\n\r\n  #second[_ngcontent-%COMP%], .one[_ngcontent-%COMP%]{\r\n    margin-top: -1rem;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFHQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFHVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUdWLGdDQUFnQztFQUdoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0FBR0Y7SUFDSSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUdDO0lBQ0cseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBR0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHVFQUF1RTtFQUN2RSxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtDQUM3Qiw2Q0FBNkM7R0FDM0MsaURBQWlEO0VBQ2xELGFBQWE7RUFDYixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsK0NBQStDO0VBQy9DLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1EQUFtRDtFQUNuRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0FBQ3JCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkpO1xyXG5cclxuLm1haW4tdGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjdlbSAwO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vbmV7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuXHJcbi5vbmUgLnRpdGxle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogZm9udC1mYW1pbHk6IGtlZXAtY2FsbTsgKi9cclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxze1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIGgze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIHB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmZhZGVJbi1ib3R0b217XHJcbiAgdG9wOiA4MCU7XHJcbn1cclxuXHJcbi5kZXNjVGV4dHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uaW5kZXhOYXZCdG5ze1xyXG4gICAgcGFkZGluZzogMSU7XHJcblxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkyJTtcclxuICB9XHJcblxyXG5cclxuI3NlY29uZCwgLm9uZXtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7ICovXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIC5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGNvbG9yOiBibGFjayA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogODBweDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbn1cclxuXHJcbiNtb3Jle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTUwcHg7XHJcblxyXG59XHJcblxyXG4ud2h5e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uaW5kZXhCdG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMy41ZW07XHJcblxyXG59XHJcblxyXG4uaW5kZXhOYXZJbWFnZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiNpbmRleE5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuIC8qICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpOyAgKi9cclxuICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuICBoZWlnaHQ6IDQuMmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDRlbTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2luZGV4TmF2IGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2luZGV4TmF2IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmRleE5hdiB1bCBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuI2luZGV4TmF2IC5iYXIge1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuI2luZGV4TmF2IGgxIGEge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbiNpbmRleE5hdiAubGlua3Mge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbiNpbmRleE5hdiAubGlua3MgdWwgbGkge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxLjVweCBibGFjaztcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzICA+IHVsIGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzID4gYTpob3ZlcntcclxuICBjb2xvcjogI2Y2YzYxNjtcclxufVxyXG5cclxuI2luZGV4TmF2IC5saW5rcyB1bCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5kZXhOYXYgLmxpbmtzIHVsIGxpIGEge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgLyogZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNidG5MaW5re1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gIGltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5tYWluLXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICB9XHJcblxyXG4gICNzZWNvbmQsIC5vbmV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcclxufVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var src_app_dialogs_email_pass_email_pass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/email-pass/email-pass.component */ "./src/app/dialogs/email-pass/email-pass.component.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");















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
    constructor(formBuilder, api, router, dialog) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.dialog = dialog;
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
    sendMail() {
        this.emailDialogRef = this.dialog.open(src_app_dialogs_email_pass_email_pass_component__WEBPACK_IMPORTED_MODULE_2__["EmailPassComponent"], { disableClose: true, hasBackdrop: true });
        this.emailDialogRef.afterClosed().subscribe(result => {
            if (result != "") {
                this.entry = {
                    //"id":this.rateUID,
                    "username": result
                };
                if (this.api.requestPasswordChange(this.entry).subscribe()) {
                    alert("Email will be send to you.");
                    //alert("Rating added");
                }
            }
        });
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 10, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "required", "", "formControlName", "password", 1, "input", 3, "type"], [1, "fa", 3, "ngClass", "click"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btns", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "id", "two", 1, "btns"], [1, "forgot", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_33_listener() { return ctx.sendMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%]{\r\n    color: #7C593A;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color:white;\r\n}\r\n\r\n#one[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n}\r\n\r\n#two[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 300px;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n}\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    padding-left: 78px;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 9.5rem;\r\n}\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmZvcmdvdHtcclxuICAgIGNvbG9yOiAjN0M1OTNBO1xyXG59XHJcbi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jb25le1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuI3R3b3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlZ0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbiNwYXNzRXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucmVnRm9ybUNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3OHB4O1xyXG59XHJcblxyXG4uY2FyZFRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkuNXJlbTtcclxufVxyXG5cclxuI3Bhc3NFcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5saW5re1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var src_app_dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/solve-dialog/solve-dialog.component */ "./src/app/dialogs/solve-dialog/solve-dialog.component.ts");
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialogs/profile-puzzles-dialog/profile-puzzles-dialog.component */ "./src/app/dialogs/profile-puzzles-dialog/profile-puzzles-dialog.component.ts");
/* harmony import */ var src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/js/downloadPuzzle.js */ "./src/assets/js/downloadPuzzle.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");























function ProfilePuzzlesComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.nameAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.nameDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_mat_icon_12_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.dateAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_mat_icon_14_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.dateDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_div_16_mat_card_4_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_16_mat_card_4_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const puzzle_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.share(puzzle_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_div_16_mat_card_4_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_16_mat_card_4_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const puzzle_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.stopShare(puzzle_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Stop Sharing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_div_16_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Created on:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card-actions", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfilePuzzlesComponent_div_16_mat_card_4_button_19_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfilePuzzlesComponent_div_16_mat_card_4_button_20_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_16_mat_card_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const puzzle_r18 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.deletePuzzle(puzzle_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-actions", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_16_mat_card_4_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const puzzle_r18 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.openSolveDialog(puzzle_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Solve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_16_mat_card_4_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const puzzle_r18 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.twoDDownload(puzzle_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePuzzlesComponent_div_16_mat_card_4_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const puzzle_r18 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.threeDDownload(puzzle_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "3D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", puzzle_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", puzzle_r18.createdAt, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", puzzle_r18.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](puzzle_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !puzzle_r18.shared);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", puzzle_r18.shared);
} }
function ProfilePuzzlesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Puzzles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfilePuzzlesComponent_div_16_mat_card_4_Template, 35, 7, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 1, ctx_r4.datasource.filteredData, ctx_r4.startIndex, ctx_r4.endIndex));
} }
function ProfilePuzzlesComponent_mat_paginator_17_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-paginator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ProfilePuzzlesComponent_mat_paginator_17_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.pageEvent = ctx_r32.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r5.totalNumberOfPuzzles)("pageSize", ctx_r5.pageSize);
} }
function ProfilePuzzlesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have not created any puzzles at the moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfilePuzzlesComponent_mat_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 31);
} }
function ProfilePuzzlesComponent_app_footer_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-footer", 32);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
class ProfilePuzzlesComponent {
    constructor(api, router, dialog) {
        this.api = api;
        this.router = router;
        this.dialog = dialog;
        this.temp = false;
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
        this.datasource = "";
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.name.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    nameDescending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "puzzleDesc";
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
            this.sortedBy = "puzzleAsc";
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
    ratingDescending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "ratingDesc";
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
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "ratingAsc";
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
    dateDescending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "dateDesc";
            let paramA = new Date(a.createdAt).getTime();
            let paramB = new Date(b.createdAt).getTime();
            return paramA > paramB ? 1 : -1;
        });
    }
    dateAscending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "dateAsc";
            let paramA = new Date(a.createdAt).getTime();
            let paramB = new Date(b.createdAt).getTime();
            return paramA < paramB ? 1 : -1;
        });
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
    getUserPuzzles() {
        this.userPuzzleList = "";
        this.api.getPuzzlesByUser(this.currentUser).subscribe(data => {
            this.totalNumberOfPuzzles = Object.keys(data).length;
            this.userPuzzleList = data;
            if (data[0] == null) {
                this.text = true;
            }
            this.show = false;
            this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.userPuzzleList);
            this.nameAscending();
        });
    }
    share(data) {
        this.puzzle = {
            "puzzleID": data
        };
        if (this.api.sharePuzzle(this.puzzle).subscribe()) {
            //alert("Puzzle shared");
            this.profileDialog = this.dialog.open(src_app_dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePuzzlesDialogComponent"], {
                disableClose: true, hasBackdrop: true,
                data: { pageValue: "Puzzle shared" }
            });
        }
        //location.reload();
    }
    deletePuzzle(puzzleID) {
        // this.puzzle = {
        //   "puzzleID": puzzleID
        // }
        if (this.api.deletePuzzle(puzzleID).subscribe()) {
            //alert("Puzzle deleted");
            this.profileDialog = this.dialog.open(src_app_dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePuzzlesDialogComponent"], {
                disableClose: true, hasBackdrop: true,
                data: { pageValue: "Puzzle deleted" }
            });
        }
        //location.reload();
    }
    stopShare(data) {
        this.puzzle = {
            "puzzleID": data
        };
        if (this.api.stopSharingPuzzle(this.puzzle).subscribe()) {
            //alert("Stop sharing puzzle");
            this.profileDialog = this.dialog.open(src_app_dialogs_profile_puzzles_dialog_profile_puzzles_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePuzzlesDialogComponent"], {
                disableClose: true, hasBackdrop: true,
                data: { pageValue: "Stopped sharing shared" }
            });
        }
        //location.reload();
    }
    delay(ms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms))
                .then(() => { console.log("fired"); });
        });
    }
    openSolveDialog(puzzleID) {
        localStorage.setItem('solvingPuzzleID', puzzleID);
        this.solveDialog = this.dialog.open(src_app_dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SolveDialogComponent"], { disableClose: true, hasBackdrop: true });
    }
    twoDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_6__["downloadPuzzle2D"])(puzzleID);
    }
    threeDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_6__["downloadPuzzle3D"])(puzzleID);
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            // alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.token = localStorage.getItem('token');
        this.show = true;
        this.text = false;
        this.delay(2000).then(() => {
            this.getUserPuzzles();
        });
    }
}
ProfilePuzzlesComponent.ɵfac = function ProfilePuzzlesComponent_Factory(t) { return new (t || ProfilePuzzlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
ProfilePuzzlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfilePuzzlesComponent, selectors: [["app-profile-puzzles"]], decls: 22, vars: 17, consts: [[1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "container"], ["class", "container-fluid", 4, "ngIf"], ["class", "paginator", 3, "length", "pageSize", "page", 4, "ngIf"], [4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "footer", 4, "ngIf"], [1, "arrow", 3, "click"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], ["hidden", "true", "id", "tokenLabel"], [1, "puzzleActions"], ["mat-button", "", "class", "btns", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btns", 3, "click"], [1, "puzzleActionsA"], ["mat-button", "", "id", "solveButton", 1, "btnsA", 3, "click"], ["mat-button", "", "id", "2dDownload", 1, "btnsA", 3, "click"], ["mat-button", "", "id", "3dDownload", 1, "btnsA", 3, "click"], [1, "paginator", 3, "length", "pageSize", "page"], ["id", "NoneText"], ["id", "spinner"], [1, "footer"]], template: function ProfilePuzzlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ProfilePuzzlesComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfilePuzzlesComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProfilePuzzlesComponent_mat_icon_9_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfilePuzzlesComponent_mat_icon_12_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfilePuzzlesComponent_mat_icon_14_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfilePuzzlesComponent_div_16_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProfilePuzzlesComponent_mat_paginator_17_Template, 1, 2, "mat-paginator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProfilePuzzlesComponent_div_18_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfilePuzzlesComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProfilePuzzlesComponent_app_footer_21_Template, 1, 0, "app-footer", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, ctx.sortedBy == "dateAsc" || ctx.sortedBy == "dateDesc", ctx.sortedBy != "dateAsc" || ctx.sortedBy != "dateDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.text && !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatSpinner"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  margin-left: 1.5%;\r\n  margin-right: 1.5%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n background-color: white;\r\n width: 100%;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 100%;\r\n margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.paginator[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: auto;\r\n margin-top: 2vw;\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n font-family:keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin: 2rem 0 !important;\r\n font-family: keep-calm;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n  line-height: 3rem;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  width: 50%;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-size: 1.7rem;\r\n }\r\n\r\n.btnsA[_ngcontent-%COMP%]{\r\n   background-color: #7C593A;\r\n   color: white;\r\n   margin: 0.5vw;\r\n   width: 30%;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-size: 1.7rem;\r\n  }\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n }\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   color: #7C593A;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   border: 2px solid #7C593A;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n color: #fff;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]:hover, .btnsA[_ngcontent-%COMP%]:hover{\r\n  \r\n  background-color: white;\r\n  color: #7C593A;\r\n  border: #7C593A solid 0.1px;\r\n }\r\n\r\n.example-form-field[_ngcontent-%COMP%]{\r\n margin-left: 2vw;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n margin: auto ;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n position: relative;\r\n width: 100%;\r\n max-width: 370px;\r\n overflow: hidden;\r\n}\r\n\r\n#NoneText[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: justify;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 30%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  font-family: keep-calm;\r\n  font-size:1.8rem;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n}\r\n\r\n@media only screen and (max-width:350px){\r\n  .btns[_ngcontent-%COMP%]{\r\n     background-color: #7C593A;\r\n     color: white;\r\n     margin: 0.5vw;\r\n     width: 50%;\r\n     border: 1px solid white;\r\n     text-align: center;\r\n     font-size: 1rem;\r\n   }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wdXp6bGVzL3Byb2ZpbGUtcHV6emxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLHVFQUF1RTtDQUN2RSxxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjs7QUFFQTtHQUNFLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osYUFBYTtHQUNiLFVBQVU7R0FDVix1QkFBdUI7R0FDdkIsa0JBQWtCO0dBQ2xCLGlCQUFpQjtFQUNsQjs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0NBQ25COztBQUVBO0dBQ0UsdUJBQXVCO0dBQ3ZCLGNBQWM7R0FDZCxtQkFBbUI7R0FDbkIsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2QixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLHlCQUF5QjtDQUMzQjs7QUFFQTtHQUNFLFlBQVk7Q0FDZDs7QUFFRDtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwyQkFBMkI7Q0FDNUI7O0FBRUQ7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFHVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUdWLGdDQUFnQztFQUdoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFHQTtRQUNRLGVBQWU7QUFDdkI7O0FBRUE7RUFDRTtLQUNHLHlCQUF5QjtLQUN6QixZQUFZO0tBQ1osYUFBYTtLQUNiLFVBQVU7S0FDVix1QkFBdUI7S0FDdkIsa0JBQWtCO0tBQ2xCLGVBQWU7R0FDakI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcHV6emxlcy9wcm9maWxlLXB1enpsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtaW1hZ2V7XHJcbiB3aWR0aDogMTAwJTtcclxuIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdG9ye1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiBtYXJnaW46IGF1dG87XHJcbiBtYXJnaW4tdG9wOiAydnc7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuIGZvbnQtZmFtaWx5OmtlZXAtY2FsbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luOiAycmVtIDAgIWltcG9ydGFudDtcclxuIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5idG5ze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMC41dnc7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiB9XHJcblxyXG4gLmJ0bnNBe1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIG1hcmdpbjogMC41dnc7XHJcbiAgIHdpZHRoOiAzMCU7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuXHJcbi5zb3J0QnRuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC5pblVzZXtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIGNvbG9yOiAjN0M1OTNBO1xyXG4gICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAjN0M1OTNBO1xyXG4gfVxyXG5cclxuIC5hcnJvd3tcclxuICAgbWFyZ2luOiAxcmVtO1xyXG4gfVxyXG5cclxuLnB1enpsZUFjdGlvbnN7XHJcbiBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5wdXp6bGVEZXRhaWxze1xyXG4gY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG5zOmhvdmVyLCAuYnRuc0E6aG92ZXJ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpOzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzdDNTkzQTtcclxuICBib3JkZXI6ICM3QzU5M0Egc29saWQgMC4xcHg7XHJcbiB9XHJcblxyXG4uZXhhbXBsZS1mb3JtLWZpZWxke1xyXG4gbWFyZ2luLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuI3NwaW5uZXJ7XHJcbiBtYXJnaW46IGF1dG8gO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB3aWR0aDogMTAwJTtcclxuIG1heC13aWR0aDogMzcwcHg7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jTm9uZVRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5jb250ZW50LWRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxze1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIGgze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZmFkZUluLWJvdHRvbXtcclxuICB0b3A6IDgwJTtcclxufVxyXG5cclxuLnNlYXJjaEFyZWF7XHJcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gIGZvbnQtc2l6ZToxLjhyZW07XHJcbn1cclxuXHJcblxyXG4uc3Bpbm5lciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjN0M1OTNBO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzUwcHgpe1xyXG4gIC5idG5ze1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIG1hcmdpbjogMC41dnc7XHJcbiAgICAgd2lkdGg6IDUwJTtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICB9XHJcbiB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilePuzzlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile-puzzles',
                templateUrl: './profile-puzzles.component.html',
                styleUrls: ['./profile-puzzles.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/js/downloadPuzzle.js */ "./src/assets/js/downloadPuzzle.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");





















function ProfileRatingsComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nameAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.nameDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_mat_icon_12_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.ratingAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_mat_icon_14_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.ratingDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_mat_icon_17_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.dateAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_mat_icon_19_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.dateDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_div_21_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created on:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_21_mat_card_4_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const rating_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.openAndCheck(rating_r24.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Update Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_21_mat_card_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const rating_r24 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.delete(rating_r24.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_21_mat_card_4_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const rating_r24 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.twoDDownload(rating_r24.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRatingsComponent_div_21_mat_card_4_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const rating_r24 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.threeDDownload(rating_r24.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rating_r24.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rating_r24.created, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rating_r24.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r24.puzzleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", rating_r24.rating, "/5");
} }
function ProfileRatingsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileRatingsComponent_div_21_mat_card_4_Template, 33, 5, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 1, ctx_r6.datasource.filteredData, ctx_r6.startIndex, ctx_r6.endIndex));
} }
function ProfileRatingsComponent_mat_paginator_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ProfileRatingsComponent_mat_paginator_22_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.pageEvent = ctx_r30.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r7.totalNumberOfPuzzles)("pageSize", ctx_r7.pageSize);
} }
function ProfileRatingsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have not made any ratings at the moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileRatingsComponent_mat_spinner_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 29);
} }
function ProfileRatingsComponent_app_footer_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 30);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
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
        this.datasource = "";
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
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.puzzleName.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    nameDescending() {
        return this.userRatingsList.sort((a, b) => {
            this.sortedBy = "puzzleDesc";
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
            this.sortedBy = "puzzleAsc";
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
            this.sortedBy = "ratingDesc";
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
        return this.userRatingsList.sort((a, b) => {
            this.sortedBy = "ratingAsc";
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
    dateDescending() {
        return this.userRatingsList.sort((a, b) => {
            this.sortedBy = "dateDesc";
            let paramA = new Date(a.created).getTime();
            let paramB = new Date(b.created).getTime();
            return paramA > paramB ? 1 : -1;
        });
    }
    dateAscending() {
        return this.userRatingsList.sort((a, b) => {
            this.sortedBy = "dateAsc";
            let paramA = new Date(a.created).getTime();
            let paramB = new Date(b.created).getTime();
            return paramA < paramB ? 1 : -1;
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
            this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.userRatingsList);
            this.nameAscending();
        });
    }
    checkData(data) {
        this.ratePID = data;
    }
    openRateDialog() {
        this.rateDialogRef = this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_1__["RateDialogComponent"], { disableClose: true, hasBackdrop: true });
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
    twoDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_4__["downloadPuzzle2D"])(puzzleID);
    }
    threeDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_4__["downloadPuzzle3D"])(puzzleID);
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            // alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.show = true;
        this.text = false;
        this.getUserPuzzleRatings();
    }
}
ProfileRatingsComponent.ɵfac = function ProfileRatingsComponent_Factory(t) { return new (t || ProfileRatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ProfileRatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileRatingsComponent, selectors: [["app-profile-ratings"]], decls: 27, vars: 23, consts: [[1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "container"], ["class", "container-fluid", 4, "ngIf"], [3, "length", "pageSize", "page", 4, "ngIf"], ["id", "NoneText", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "footer", 4, "ngIf"], [1, "arrow", 3, "click"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], [1, "puzzleActions"], ["mat-button", "", 1, "btns", 3, "click"], ["mat-button", "", "id", "delete", 1, "btns", 3, "click"], [1, "puzzleActionsA"], ["mat-button", "", "id", "2dDownload", 1, "btnsA", 3, "click"], ["mat-button", "", "id", "3dDownload", 1, "btnsA", 3, "click"], [3, "length", "pageSize", "page"], ["id", "NoneText"], ["id", "spinner"], [1, "footer"]], template: function ProfileRatingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileRatingsComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileRatingsComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileRatingsComponent_mat_icon_9_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileRatingsComponent_mat_icon_12_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileRatingsComponent_mat_icon_14_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileRatingsComponent_mat_icon_17_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileRatingsComponent_mat_icon_19_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileRatingsComponent_div_21_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileRatingsComponent_mat_paginator_22_Template, 1, 2, "mat-paginator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileRatingsComponent_div_23_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileRatingsComponent_mat_spinner_25_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileRatingsComponent_app_footer_26_Template, 1, 0, "app-footer", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx.sortedBy == "ratingAsc" || ctx.sortedBy == "ratingDesc", ctx.sortedBy != "ratingAsc" || ctx.sortedBy != "ratingDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx.sortedBy == "dateAsc" || ctx.sortedBy == "dateDesc", ctx.sortedBy != "dateAsc" || ctx.sortedBy != "dateDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.text && !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  margin-left: 1.5%;\r\n  margin-right: 1.5%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n background-color: white;\r\n width: 100%;\r\n}\r\n\r\n.infoIcon[_ngcontent-%COMP%]{\r\n float: right;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 100%;\r\n margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: auto;\r\n margin-top: 2vw;\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n font-family:keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin: 2rem 0 !important;\r\n font-family: keep-calm;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n  line-height: 3rem;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n background-color: #7C593A;\r\n color: white;\r\n margin: 0.5vw;\r\n width: 50%;\r\n border: 1px solid white;\r\n text-align: center;\r\n font-size: 1.7rem;\r\n}\r\n\r\n.btnsA[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  width: 30%;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-size: 1.7rem;\r\n }\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n }\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   color: #7C593A;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   border: 2px solid #7C593A;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n display: inline;\r\n}\r\n\r\n.puzzleActionsA[_ngcontent-%COMP%]{\r\n  \r\n }\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n color: #fff;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]:hover, #delete[_ngcontent-%COMP%]:hover, .btnsA[_ngcontent-%COMP%]:hover{\r\n background-color: white;\r\n color: #7C593A;\r\n border: #7C593A solid 0.1px;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n margin: auto ;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n position: relative;\r\n width: 100%;\r\n max-width: 370px;\r\n overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: justify;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 30%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  font-family: keep-calm;\r\n  font-size:1.8rem;\r\n}\r\n\r\n#NoneText[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\r\n\r\n@media only screen and (max-width:350px){\r\n  .btns[_ngcontent-%COMP%]{\r\n   background-color: #7C593A;\r\n   color: white;\r\n   margin: 0.5vw;\r\n   width: 50%;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-size: 1rem;\r\n  }\r\n\r\n  #delete[_ngcontent-%COMP%] {\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin-left: 25%;\r\n    margin-top: 2%;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1yYXRpbmdzL3Byb2ZpbGUtcmF0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLHVFQUF1RTtDQUN2RSxxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osYUFBYTtDQUNiLFVBQVU7Q0FDVix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0NBQ25COztBQUVBO0dBQ0UsdUJBQXVCO0dBQ3ZCLGNBQWM7R0FDZCxtQkFBbUI7R0FDbkIsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2QixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLHlCQUF5QjtDQUMzQjs7QUFHQTtHQUNFLFlBQVk7Q0FDZDs7QUFFRDs7Ozs7Ozs7O0dBU0c7O0FBRUg7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGNBQWM7Q0FDZCwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFHVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUdWLGdDQUFnQztFQUdoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtRQUNRLGVBQWU7TUFDakI7O0FBR047RUFDRTtHQUNDLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osYUFBYTtHQUNiLFVBQVU7R0FDVix1QkFBdUI7R0FDdkIsa0JBQWtCO0dBQ2xCLGVBQWU7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcmF0aW5ncy9wcm9maWxlLXJhdGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb0ljb257XHJcbiBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMXtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiBtYXJnaW46IGF1dG87XHJcbiBtYXJnaW4tdG9wOiAydnc7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuIGZvbnQtZmFtaWx5OmtlZXAtY2FsbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luOiAycmVtIDAgIWltcG9ydGFudDtcclxuIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5idG5ze1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuIGNvbG9yOiB3aGl0ZTtcclxuIG1hcmdpbjogMC41dnc7XHJcbiB3aWR0aDogNTAlO1xyXG4gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG5cclxuLmJ0bnNBe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMC41dnc7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiB9XHJcblxyXG4uc29ydEJ0bnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbiAuaW5Vc2V7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICBjb2xvcjogIzdDNTkzQTtcclxuICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICAgYm9yZGVyOiAycHggc29saWQgIzdDNTkzQTtcclxuIH1cclxuXHJcblxyXG4gLmFycm93e1xyXG4gICBtYXJnaW46IDFyZW07XHJcbiB9XHJcblxyXG4vKiAjZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59ICovXHJcblxyXG4ucHV6emxlQWN0aW9uc3tcclxuIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnB1enpsZUFjdGlvbnNBe1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cclxuIH1cclxuXHJcbi5wdXp6bGVEZXRhaWxze1xyXG4gY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG5zOmhvdmVyLCAjZGVsZXRlOmhvdmVyLCAuYnRuc0E6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIGNvbG9yOiAjN0M1OTNBO1xyXG4gYm9yZGVyOiAjN0M1OTNBIHNvbGlkIDAuMXB4O1xyXG59XHJcblxyXG4jc3Bpbm5lcntcclxuIG1hcmdpbjogYXV0byA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIHdpZHRoOiAxMDAlO1xyXG4gbWF4LXdpZHRoOiAzNzBweDtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250ZW50IC5jb250ZW50LW92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtb3ZlcmxheXtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LWRldGFpbHN7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgaDN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mYWRlSW4tYm90dG9te1xyXG4gIHRvcDogODAlO1xyXG59XHJcblxyXG4uc2VhcmNoQXJlYXtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgZm9udC1zaXplOjEuOHJlbTtcclxufVxyXG5cclxuI05vbmVUZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXIgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgICAgIHN0cm9rZTogIzdDNTkzQTtcclxuICAgICAgfVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNTBweCl7XHJcbiAgLmJ0bnN7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgbWFyZ2luOiAwLjV2dztcclxuICAgd2lkdGg6IDUwJTtcclxuICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2RlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-ratings',
                templateUrl: './profile-ratings.component.html',
                styleUrls: ['./profile-ratings.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile-solved-puzzles/profile-solved-puzzles.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/profile-solved-puzzles/profile-solved-puzzles.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileSolvedPuzzlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSolvedPuzzlesComponent", function() { return ProfileSolvedPuzzlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/solve-dialog/solve-dialog.component */ "./src/app/dialogs/solve-dialog/solve-dialog.component.ts");
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/js/downloadPuzzle.js */ "./src/assets/js/downloadPuzzle.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");





















function ProfileSolvedPuzzlesComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nameAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSolvedPuzzlesComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nameDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSolvedPuzzlesComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_mat_icon_12_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.dateAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSolvedPuzzlesComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_mat_icon_14_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.dateDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSolvedPuzzlesComponent_div_16_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-subtitle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_div_16_mat_card_4_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const puzzle_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.openSolveDialog(puzzle_r18.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Solve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_div_16_mat_card_4_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const puzzle_r18 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.twoDDownload(puzzle_r18.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSolvedPuzzlesComponent_div_16_mat_card_4_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const puzzle_r18 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.threeDDownload(puzzle_r18.puzzleID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", puzzle_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created on: ", puzzle_r18.dateCreated, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", puzzle_r18.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Best time: ", puzzle_r18.bestTime, " seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Solve attempts duration: ", puzzle_r18.attemptDuration, " seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r18.puzzleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.token);
} }
function ProfileSolvedPuzzlesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solved Puzzles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileSolvedPuzzlesComponent_div_16_mat_card_4_Template, 31, 7, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 1, ctx_r4.datasource.filteredData, ctx_r4.startIndex, ctx_r4.endIndex));
} }
function ProfileSolvedPuzzlesComponent_mat_paginator_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ProfileSolvedPuzzlesComponent_mat_paginator_17_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.pageEvent = ctx_r23.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r5.totalNumberOfPuzzles)("pageSize", ctx_r5.pageSize);
} }
function ProfileSolvedPuzzlesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have not solved any puzzles at the moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSolvedPuzzlesComponent_mat_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 29);
} }
function ProfileSolvedPuzzlesComponent_app_footer_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 30);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
class ProfileSolvedPuzzlesComponent {
    constructor(api, router, dialog) {
        this.api = api;
        this.router = router;
        this.dialog = dialog;
        this.temp = false;
        //pagination
        this.pageSize = 6;
        this.startIndex = 0;
        this.endIndex = 6;
        this.datasource = "";
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.puzzleName.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    nameDescending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "puzzleDesc";
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
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "puzzleAsc";
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
    dateDescending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "dateDesc";
            let paramA = new Date(a.dateCreated).getTime();
            let paramB = new Date(b.dateCreated).getTime();
            return paramA > paramB ? 1 : -1;
        });
    }
    dateAscending() {
        return this.userPuzzleList.sort((a, b) => {
            this.sortedBy = "dateAsc";
            let paramA = new Date(a.dateCreated).getTime();
            let paramB = new Date(b.dateCreated).getTime();
            return paramA < paramB ? 1 : -1;
        });
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
    getUserPuzzles() {
        this.api.retrieveAllSolveAttempts(this.currentUser).subscribe(data => {
            this.totalNumberOfPuzzles = Object.keys(data).length;
            this.userPuzzleList = data;
            if (data[0] == null) {
                this.text = true;
            }
            this.show = false;
            this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.userPuzzleList);
            this.nameAscending();
        });
    }
    openSolveDialog(puzzleID) {
        localStorage.setItem('solvingPuzzleID', puzzleID);
        this.solveDialog = this.dialog.open(src_app_dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SolveDialogComponent"], { disableClose: true, hasBackdrop: true });
    }
    twoDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_3__["downloadPuzzle2D"])(puzzleID);
    }
    threeDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_3__["downloadPuzzle3D"])(puzzleID);
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            // alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.token = localStorage.getItem('token');
        this.show = true;
        this.text = false;
        this.getUserPuzzles();
    }
}
ProfileSolvedPuzzlesComponent.ɵfac = function ProfileSolvedPuzzlesComponent_Factory(t) { return new (t || ProfileSolvedPuzzlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ProfileSolvedPuzzlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSolvedPuzzlesComponent, selectors: [["app-profile-solved-puzzles"]], decls: 22, vars: 17, consts: [[1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "container"], ["class", "container-fluid", 4, "ngIf"], ["class", "paginator", 3, "length", "pageSize", "page", 4, "ngIf"], [4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "footer", 4, "ngIf"], [1, "arrow", 3, "click"], [1, "container-fluid"], [1, "main-title"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], ["hidden", "true", "id", "tokenLabel"], [1, "puzzleActions"], ["mat-button", "", "id", "solveButton", 1, "btns", 3, "click"], ["mat-button", "", 1, "btns"], ["mat-button", "", "id", "2dDownload", 1, "btns", 3, "click"], ["mat-button", "", "id", "3dDownload", 1, "btns", 3, "click"], [1, "paginator", 3, "length", "pageSize", "page"], ["id", "NoneText"], ["id", "spinner"], [1, "footer"]], template: function ProfileSolvedPuzzlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileSolvedPuzzlesComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileSolvedPuzzlesComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileSolvedPuzzlesComponent_mat_icon_9_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileSolvedPuzzlesComponent_mat_icon_12_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileSolvedPuzzlesComponent_mat_icon_14_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileSolvedPuzzlesComponent_div_16_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileSolvedPuzzlesComponent_mat_paginator_17_Template, 1, 2, "mat-paginator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileSolvedPuzzlesComponent_div_18_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileSolvedPuzzlesComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileSolvedPuzzlesComponent_app_footer_21_Template, 1, 0, "app-footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.sortedBy == "dateAsc" || ctx.sortedBy == "dateDesc", ctx.sortedBy != "dateAsc" || ctx.sortedBy != "dateDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.text && !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  margin-left: 1.5%;\r\n  margin-right: 1.5%;\r\n  border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n background-color: white;\r\n height: 100%;\r\n width: 100%;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n width: 100%;\r\n margin-bottom: 1rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 1%;\r\n  margin-top: 0.5rem;\r\n  font-family: keep-calm;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n margin: auto;\r\n margin-top: 2vw;\r\n background-color: gainsboro;\r\n color: black;\r\n box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n font-family: keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n  margin: 2rem 0 !important;\r\n font-family: keep-calm;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n background-color: #7C593A;\r\n color: white;\r\n margin: 0.5vw;\r\n \r\n text-align: center;\r\n font-size: 1.7rem;\r\n font-weight: normal;\r\n}\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n background-color: #7C593A;\r\n color: white;\r\n margin-left: 3.5rem;\r\n margin-bottom: 1rem;\r\n border: 1px solid white;\r\n text-align: center;\r\n font-family: keep-calm;\r\n}\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: #7C593A;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-family: keep-calm;\r\n  border: 2px solid #7C593A;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n  margin: 1rem;\r\n}\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n color: #fff;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]:hover, .btns[_ngcontent-%COMP%]:hover{\r\n background-color: white;\r\n color: #7C593A;\r\n}\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n margin-left: 2vw;\r\n font-family: keep-calm;\r\n font-size:1.8rem;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]{\r\n margin-left: 2vw;\r\n background-color: #7C593A;\r\n color: white;\r\n margin: 0.5vw;\r\n text-align: center;\r\n font-weight: normal;\r\n padding: 0.5vw;\r\n border-radius: 0.5vw;\r\n\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n margin: auto ;\r\n color: black;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n position: relative;\r\n width: 100%;\r\n max-width: 370px;\r\n overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n background: rgba(0,0,0,0.7);\r\n position: absolute;\r\n height: 100%;\r\n width: 100%;\r\n left: 0;\r\n top: 0;\r\n bottom: 0;\r\n right: 0;\r\n opacity: 0;\r\n transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n position: absolute;\r\n text-align: justify;\r\n padding-left: 1em;\r\n padding-right: 1em;\r\n width: 100%;\r\n top: 50%;\r\n left: 50%;\r\n opacity: 0;\r\n transform: translate(-50%, -50%);\r\n transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n top: 30%;\r\n left: 50%;\r\n opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n color: #fff;\r\n font-weight: 500;\r\n letter-spacing: 0.15em;\r\n margin-bottom: 0.5em;\r\n text-transform: uppercase;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n top: 80%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n       stroke: #7C593A;\r\n     }\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n      \r\n      background-color: #7C593A;\r\n      line-height: 3rem;\r\n      \r\n}\r\n\r\n@media only screen and (min-width: 435px) and (max-width: 670px){\r\n .sortBtns[_ngcontent-%COMP%]{\r\n   background-color: #7C593A;\r\n   color: white;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   width: 50%;\r\n   margin-left: 25%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zb2x2ZWQtcHV6emxlcy9wcm9maWxlLXNvbHZlZC1wdXp6bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLHVFQUF1RTtDQUN2RSxzQkFBc0I7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsc0JBQXNCO0FBQ3ZCOztBQUdBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsb0JBQW9COztBQUVyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsT0FBTztDQUNQLE1BQU07Q0FDTixTQUFTO0NBQ1QsUUFBUTtDQUNSLFVBQVU7Q0FHVixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBR0E7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFFBQVE7Q0FDUixTQUFTO0NBQ1QsVUFBVTtDQUdWLGdDQUFnQztDQUdoQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxRQUFRO0FBQ1Q7O0FBRUE7T0FDTyxlQUFlO0tBQ2pCOztBQUVMO01BQ00sa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIscUJBQXFCO0FBQzNCOztBQUVBO0NBQ0M7R0FDRSx5QkFBeUI7R0FDekIsWUFBWTtHQUNaLG1CQUFtQjtHQUNuQixtQkFBbUI7R0FDbkIsdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIsVUFBVTtHQUNWLGdCQUFnQjtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zb2x2ZWQtcHV6emxlcy9wcm9maWxlLXNvbHZlZC1wdXp6bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41JTtcclxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBoZWlnaHQ6IDEwMCU7XHJcbiB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1hZ2V7XHJcbiB3aWR0aDogMTAwJTtcclxuIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmgxe1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuIG1hcmdpbjogYXV0bztcclxuIG1hcmdpbi10b3A6IDJ2dztcclxuIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuIGNvbG9yOiBibGFjaztcclxuIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luOiAycmVtIDAgIWltcG9ydGFudDtcclxuIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbn1cclxuXHJcblxyXG4uYnRuc3tcclxuIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiBjb2xvcjogd2hpdGU7XHJcbiBtYXJnaW46IDAuNXZ3O1xyXG4gLyogd2lkdGg6IDUwJTsgKi9cclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNvcnRCdG5ze1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuIGNvbG9yOiB3aGl0ZTtcclxuIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG59XHJcblxyXG4uaW5Vc2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM3QzU5M0E7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3QzU5M0E7XHJcbn1cclxuXHJcbi5hcnJvd3tcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5wdXp6bGVBY3Rpb25ze1xyXG4gZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ucHV6emxlRGV0YWlsc3tcclxuIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jcmVzZXRCdG46aG92ZXIsIC5idG5zOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBjb2xvcjogIzdDNTkzQTtcclxufVxyXG5cclxuLnNlYXJjaEFyZWF7XHJcbiBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuIGZvbnQtc2l6ZToxLjhyZW07XHJcbn1cclxuXHJcbiNyZXNldEJ0bntcclxuIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gbWFyZ2luOiAwLjV2dztcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiBwYWRkaW5nOiAwLjV2dztcclxuIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xyXG5cclxufVxyXG5cclxuI3NwaW5uZXJ7XHJcbiBtYXJnaW46IGF1dG8gO1xyXG4gY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB3aWR0aDogMTAwJTtcclxuIG1heC13aWR0aDogMzcwcHg7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcclxuIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIGhlaWdodDogMTAwJTtcclxuIHdpZHRoOiAxMDAlO1xyXG4gbGVmdDogMDtcclxuIHRvcDogMDtcclxuIGJvdHRvbTogMDtcclxuIHJpZ2h0OiAwO1xyXG4gb3BhY2l0eTogMDtcclxuIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXl7XHJcbiBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyB7XHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gcGFkZGluZy1sZWZ0OiAxZW07XHJcbiBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiB3aWR0aDogMTAwJTtcclxuIHRvcDogNTAlO1xyXG4gbGVmdDogNTAlO1xyXG4gb3BhY2l0eTogMDtcclxuIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxze1xyXG4gdG9wOiAzMCU7XHJcbiBsZWZ0OiA1MCU7XHJcbiBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVudC1kZXRhaWxzIGgze1xyXG4gY29sb3I6ICNmZmY7XHJcbiBmb250LXdlaWdodDogNTAwO1xyXG4gbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcclxuIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZhZGVJbi1ib3R0b217XHJcbiB0b3A6IDgwJTtcclxufVxyXG5cclxuLnNwaW5uZXIgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgICAgc3Ryb2tlOiAjN0M1OTNBO1xyXG4gICAgIH1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgICAvKiBoZWlnaHQ6IDUwcHg7ICovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAvKiBwYWRkaW5nOiAwIDVyZW07ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIGFuZCAobWF4LXdpZHRoOiA2NzBweCl7XHJcbiAuc29ydEJ0bnN7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3QzU5M0E7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSolvedPuzzlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-solved-puzzles',
                templateUrl: './profile-solved-puzzles.component.html',
                styleUrls: ['./profile-solved-puzzles.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var src_app_dialogs_profile_update_dialog_profile_update_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/profile-update-dialog/profile-update-dialog.component */ "./src/app/dialogs/profile-update-dialog/profile-update-dialog.component.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

















function ProfileComponent_div_8_ng_container_7_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r3.message, " ");
} }
function ProfileComponent_div_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_8_ng_container_7_mat_error_1_Template, 2, 1, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.updateNameForm.get("name").hasError(error_r3.type) && (ctx_r1.updateNameForm.get("name").dirty || ctx_r1.updateNameForm.get("name").touched));
} }
function ProfileComponent_div_8_ng_container_16_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r6.message, " ");
} }
function ProfileComponent_div_8_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_8_ng_container_16_mat_error_1_Template, 2, 1, "mat-error", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProfileComponent_div_8_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nameTextboxValue = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_8_ng_container_7_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_8_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateUsername(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProfileComponent_div_8_Template_input_input_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.usernameTextboxValue = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_8_ng_container_16_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
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
    constructor(api, formBuilder, router, dialog) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
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
            this.updatePorfileDialog = this.dialog.open(src_app_dialogs_profile_update_dialog_profile_update_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProfileUpdateDialogComponent"], { disableClose: true, hasBackdrop: true });
            //---------open dialog to say "Profile Updated"
            //alert("Name updated");
        }
        else {
            console.log("No value provided");
        }
        //location.reload();
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
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            //alert("You are not logged in");
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
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 1, consts: [[1, "container-fluid"], ["fxLayout", "row", "fxLayout.xs", "col wrap"], [1, "profileText"], [1, "move"], [4, "ngIf"], [1, "footer"], [3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["for", "name"], ["matInput", "", "formControlName", "name", 3, "value", "input"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 1, "btns", 3, "disabled"], ["for", "username"], ["matInput", "", "formControlName", "username", 3, "value", "input"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserObject);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: ["#image[_ngcontent-%COMP%], #profileImage[_ngcontent-%COMP%]{\r\n    width: 20rem;\r\n    height: 22rem;\r\n}\r\n\r\n#profileImage[_ngcontent-%COMP%]{\r\n    height: 20vw;\r\n    width: 20vw;\r\n    border-radius: 100rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n  line-height: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    color: black;\r\n    margin-left: 5vw;\r\n}\r\n\r\n.abc[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.profileText[_ngcontent-%COMP%], .profileImageCard[_ngcontent-%COMP%]{\r\n  margin-bottom: 2vw;\r\n  margin-top: 2vw;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  width: 30%;\r\n  text-align: center !important;\r\n}\r\n\r\n.userPuzzles[_ngcontent-%COMP%]{\r\n    margin: 0.2rem;\r\n    background-color:  #7C593A;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]:hover{\r\n  \r\n  background-color: white;\r\n  color: #7C593A;\r\n  border: #7C593A solid 0.1px;\r\n }\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n     background-color: white;\r\n     margin-left: 1.5%;\r\n     margin-right: 1.5%;\r\n     border-radius: 0.5%;\r\n  }\r\n\r\n.move[_ngcontent-%COMP%]{\r\n    border: 1px gainsboro solid;\r\n    border-radius: 10px;\r\n    padding: 0.5vw;\r\n    margin-bottom: 1vw;\r\n    background-color: white;\r\n  }\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 570px;\r\n    min-width: 300px;\r\n    margin:auto;\r\n    position: relative;\r\n    overflow: hidden;\r\n    height: 39rem;\r\n    text-align: center !important;\r\n  }\r\n\r\n@media only screen and (max-width:576px){\r\n    .profileImageCard[_ngcontent-%COMP%], .profileText[_ngcontent-%COMP%]{\r\n      margin: auto;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMkJBQTJCO0NBQzVCOztBQUVEO0tBQ0ssdUJBQXVCO0tBQ3ZCLGlCQUFpQjtLQUNqQixrQkFBa0I7S0FDbEIsbUJBQW1CO0VBQ3RCOztBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRTtNQUNFLFlBQVk7SUFDZDs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlLCAjcHJvZmlsZUltYWdle1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgaGVpZ2h0OiAyMnJlbTtcclxufVxyXG5cclxuI3Byb2ZpbGVJbWFnZXtcclxuICAgIGhlaWdodDogMjB2dztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbn1cclxuXHJcblxyXG4uYWJje1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnByb2ZpbGVUZXh0LCAucHJvZmlsZUltYWdlQ2FyZHtcclxuICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXJQdXp6bGVze1xyXG4gICAgbWFyZ2luOiAwLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzdDNTkzQTtcclxufVxyXG5cclxuLmJ0bnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmJ0bnM6aG92ZXJ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpOzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzdDNTkzQTtcclxuICBib3JkZXI6ICM3QzU5M0Egc29saWQgMC4xcHg7XHJcbiB9XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMS41JTtcclxuICAgICBib3JkZXItcmFkaXVzOiAwLjUlO1xyXG4gIH1cclxuXHJcbiAgLm1vdmV7XHJcbiAgICBib3JkZXI6IDFweCBnYWluc2Jvcm8gc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMC41dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1NzBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDM5cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgIC5wcm9maWxlSW1hZ2VDYXJkLCAucHJvZmlsZVRleHR7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


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
    constructor() {
        this.shared = false;
    }
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
/* harmony import */ var src_app_dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialogs/solve-dialog/solve-dialog.component */ "./src/app/dialogs/solve-dialog/solve-dialog.component.ts");
/* harmony import */ var src_app_dialogs_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/menu/menu.component */ "./src/app/dialogs/menu/menu.component.ts");
/* harmony import */ var src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialogs/login-dialog/login-dialog.component */ "./src/app/dialogs/login-dialog/login-dialog.component.ts");
/* harmony import */ var src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/js/downloadPuzzle.js */ "./src/assets/js/downloadPuzzle.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");

























function RatingsComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.puzzleAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.puzzleDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.ratingAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_15_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.ratingDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_18_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.creatorAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_20_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.creatorDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_23_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.dateAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upwardward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_mat_icon_25_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.dateDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_mat_spinner_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
} }
function RatingsComponent_div_28_mat_card_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- Not yet rated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_div_28_mat_card_2_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_div_28_mat_card_2_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const puzzle_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.openAndCheck(puzzle_r29.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingsComponent_div_28_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RatingsComponent_div_28_mat_card_2_span_16_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_div_28_mat_card_2_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const puzzle_r29 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.openSolveDialog(puzzle_r29.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Solve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RatingsComponent_div_28_mat_card_2_button_22_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_div_28_mat_card_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const puzzle_r29 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.twoDDownload(puzzle_r29.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_div_28_mat_card_2_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const puzzle_r29 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.threeDDownload(puzzle_r29.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", puzzle_r29.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by: ", puzzle_r29.creator, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created on: ", puzzle_r29.created, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", puzzle_r29.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", puzzle_r29.rating, "/5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", puzzle_r29.rating == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", puzzle_r29.showRating);
} }
function RatingsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingsComponent_div_28_mat_card_2_Template, 31, 9, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r9.datasource.filteredData, ctx_r9.startIndex, ctx_r9.endIndex));
} }
function RatingsComponent_mat_paginator_29_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function RatingsComponent_mat_paginator_29_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.pageEvent = ctx_r39.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r10.totalNumberOfPuzzles)("pageSize", ctx_r10.pageSize);
} }
function RatingsComponent_app_footer_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 29);
} }
const _c0 = function (a0, a1) { return { inUse: a0, sortBtns: a1 }; };
class RatingsComponent {
    constructor(api, cdr, dialog, router) {
        this.api = api;
        this.cdr = cdr;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["id", "name", "description", "creator", "rating", "created", "showRating", "image"];
        this.puzzles = [];
        this.ratings = [];
        this.datasource = "";
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
            this.sortedBy = "puzzleDesc";
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
            this.sortedBy = "puzzleAsc";
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
            this.sortedBy = "creatorDesc";
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
            this.sortedBy = "creatorAsc";
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
            this.sortedBy = "dateDesc";
            let paramA = new Date(a.created).getTime();
            let paramB = new Date(b.created).getTime();
            return paramA > paramB ? 1 : -1;
        });
    }
    dateAscending() {
        return this.puzzles.sort((a, b) => {
            this.sortedBy = "dateAsc";
            let paramA = new Date(a.created).getTime();
            let paramB = new Date(b.created).getTime();
            return paramA < paramB ? 1 : -1;
        });
    }
    ratingDescending() {
        return this.puzzles.sort((a, b) => {
            this.sortedBy = "ratingDesc";
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
            this.sortedBy = "ratingAsc";
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
                    total = total + this.ratings[k].rating;
                    j = j + 1;
                }
            }
            if (j == 0) {
                puzzleObj.rating = 0;
            }
            else {
                puzzleObj.rating = (total / j);
            }
            this.puzzles.push(puzzleObj);
        }
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.puzzles);
        this.puzzleAscending();
        this.dataAvailable = true;
        this.show = false;
    }
    applyFilter(filterValue) {
        this.datasource.filterPredicate = function (data, filter) {
            return data.name.toLowerCase().includes(filter) || data.creator.toLowerCase().includes(filter);
        };
        this.datasource.filter = filterValue.trim().toLowerCase();
        this.totalNumberOfPuzzles = this.datasource.filteredData.length;
    }
    checkData(data) {
        this.ratePID = data;
    }
    openRateDialog() {
        this.rateDialogRef = this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RateDialogComponent"], { disableClose: true, hasBackdrop: true });
        this.rateDialogRef.afterClosed().subscribe(result => {
            if (result != "") {
                this.ratingEntry = {
                    //"id":this.rateUID,
                    "puzzleID": this.ratePID,
                    "rating": result,
                    "token": localStorage.getItem('token')
                };
                if (this.api.createNewPuzzleRating(this.ratingEntry).subscribe()) {
                    this.ratingSavedDialog = this.dialog.open(src_app_dialogs_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], { disableClose: true, hasBackdrop: true });
                    //alert("Rating added");
                }
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
    //solve dialog
    openSolveDialog(puzzleID) {
        localStorage.setItem('solvingPuzzleID', puzzleID);
        this.solveDialog = this.dialog.open(src_app_dialogs_solve_dialog_solve_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SolveDialogComponent"], { disableClose: true, hasBackdrop: true });
    }
    //end of solve dialog
    //start of download methods
    twoDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_8__["downloadPuzzle2D"])(puzzleID);
    }
    threeDDownload(puzzleID) {
        Object(src_assets_js_downloadPuzzle_js__WEBPACK_IMPORTED_MODULE_8__["downloadPuzzle3D"])(puzzleID);
    }
    //end of download methods
    ngOnInit() {
        this.show = true;
        this.dataAvailable = false;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/index']);
            this.loginDialog = this.dialog.open(src_app_dialogs_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDialogComponent"], { disableClose: true, hasBackdrop: true });
            //this.router.navigate(['/index']);
            //alert("You are not logged in");
        }
        this.currentUser = {
            "token": localStorage.getItem('token')
        };
        this.token = localStorage.getItem('token');
        this.api.getUser(this.currentUser).subscribe(data => {
            console.log(data["name"]);
            this.currentUser = {
                "token": localStorage.getItem('token'),
                "name": data["name"]
            };
        });
        this.sortedBy = "";
        this.populate(null);
    }
}
RatingsComponent.ɵfac = function RatingsComponent_Factory(t) { return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
RatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingsComponent, selectors: [["app-ratings"]], decls: 31, vars: 28, consts: [[1, "container"], [1, "searchArea"], ["matInput", "", 3, "keyup"], ["mat-button", "", 3, "ngClass"], ["class", "arrow", 3, "click", 4, "ngIf"], [1, "spinner"], ["id", "spinner", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["class", "paginator", 3, "length", "pageSize", "page", 4, "ngIf"], ["class", "footer", 4, "ngIf"], [1, "arrow", 3, "click"], ["id", "spinner"], [1, "container-fluid"], ["fxLayout", "row wrap", "fxLayout.xs", "row wrap", "fxLayoutAlign", "space-evenly center", 1, "flex-container"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content-overlay"], [1, "content-image", 3, "src"], [1, "content-details", "fadeIn-bottom"], [1, "puzzleDetails"], [4, "ngIf"], ["hidden", "true", "id", "tokenLabel"], [1, "puzzleActions"], ["mat-button", "", "id", "solveButton", 1, "btns", 3, "click"], ["mat-button", "", "class", "btns", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "2dDownload", 1, "btns", 3, "click"], ["mat-button", "", "id", "3dDownload", 1, "btns", 3, "click"], ["mat-button", "", 1, "btns", 3, "click"], [1, "paginator", 3, "length", "pageSize", "page"], [1, "footer"]], template: function RatingsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RatingsComponent_mat_icon_8_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RatingsComponent_mat_icon_10_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RatingsComponent_mat_icon_13_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RatingsComponent_mat_icon_15_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Creator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RatingsComponent_mat_icon_18_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RatingsComponent_mat_icon_20_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RatingsComponent_mat_icon_23_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RatingsComponent_mat_icon_25_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RatingsComponent_mat_spinner_27_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RatingsComponent_div_28_Template, 4, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RatingsComponent_mat_paginator_29_Template, 1, 2, "mat-paginator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RatingsComponent_app_footer_30_Template, 1, 0, "app-footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx.sortedBy == "puzzleAsc" || ctx.sortedBy == "puzzleDesc", ctx.sortedBy != "puzzleAsc" || ctx.sortedBy != "puzzleDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "puzzleDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.sortedBy == "ratingAsc" || ctx.sortedBy == "ratingDesc", ctx.sortedBy != "ratingAsc" || ctx.sortedBy != "ratingDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "ratingDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx.sortedBy == "creatorAsc" || ctx.sortedBy == "creatorDesc", ctx.sortedBy != "creatorAsc" || ctx.sortedBy != "creatorDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "creatorAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "creatorDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.sortedBy == "dateAsc" || ctx.sortedBy == "dateDesc", ctx.sortedBy != "dateAsc" || ctx.sortedBy != "dateDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateAsc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedBy != "dateDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginator"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   margin-left: 1.5%;\r\n   margin-right: 1.5%;\r\n   border-radius: 0.5%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.content-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 4vw;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: gray;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  margin-top: 2vw;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  font-family: keep-calm;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n   margin: 2rem 0 !important;\r\n  font-family: keep-calm;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: #7C593A;\r\n  line-height: 3rem;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  font-weight: normal;\r\n  font-size: 1.7rem;\r\n  margin: 0.5vw;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.sortBtns[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-family: keep-calm;\r\n }\r\n\r\n.inUse[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n   color: #7C593A;\r\n   margin-left: 3.5rem;\r\n   margin-bottom: 1rem;\r\n   border: 1px solid white;\r\n   text-align: center;\r\n   font-family: keep-calm;\r\n   border: 2px solid #7C593A;\r\n }\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n   margin: 1rem;\r\n }\r\n\r\n.puzzleActions[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.puzzleDetails[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]:hover, .btns[_ngcontent-%COMP%]:hover{\r\n  background-color: white;\r\n  color: #7C593A;\r\n}\r\n\r\n.searchArea[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  font-family: keep-calm;\r\n  font-size:1.8rem;\r\n}\r\n\r\n#resetBtn[_ngcontent-%COMP%]{\r\n  margin-left: 2vw;\r\n  background-color: #7C593A;\r\n  color: white;\r\n  margin: 0.5vw;\r\n  text-align: center;\r\n  font-weight: normal;\r\n  padding: 0.5vw;\r\n  border-radius: 0.5vw;\r\n\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%]{\r\n  margin: auto ;\r\n  color: black;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 370px;\r\n  overflow: hidden;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: justify;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%]{\r\n  top: 30%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.fadeIn-bottom[_ngcontent-%COMP%]{\r\n  top: 80%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n        stroke: #7C593A;\r\n      }\r\n\r\n@media only screen and (min-width: 435px) and (max-width: 670px){\r\n  .sortBtns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n    margin-left: 3.5rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-family: keep-calm;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5ncy9yYXRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx1QkFBdUI7R0FDdkIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxXQUFXO0FBQ2I7O0FBRUM7RUFDQyxZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUVBQXVFO0VBQ3ZFLHNCQUFzQjtBQUN4Qjs7QUFFQztHQUNFLHlCQUF5QjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCOzt3QkFFc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7Q0FDdkI7O0FBRUE7R0FDRSx1QkFBdUI7R0FDdkIsY0FBYztHQUNkLG1CQUFtQjtHQUNuQixtQkFBbUI7R0FDbkIsdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIseUJBQXlCO0NBQzNCOztBQUVBO0dBQ0UsWUFBWTtDQUNkOztBQUVEO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFHVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUdWLGdDQUFnQztFQUdoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7UUFDUSxlQUFlO01BQ2pCOztBQUVOO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtHQUNqQjtBQUNIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmF0aW5ncy9yYXRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgIG1hcmdpbi1yaWdodDogMS41JTtcclxuICAgYm9yZGVyLXJhZGl1czogMC41JTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDR2dztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuIG1hdC1jYXJke1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG59XHJcblxyXG4gbWF0LWNhcmQtdGl0bGV7XHJcbiAgIG1hcmdpbjogMnJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxufVxyXG5cclxuLmJ0bnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBtYXJnaW46IDAuNXZ3O1xyXG4gIC8qIG1hcmdpbjogMC41dnc7ICovXHJcbiAgLyogd2lkdGg6IDUwJTsgKi9cclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICovXHJcbn1cclxuXHJcbi5zb3J0QnRuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiB9XHJcblxyXG4gLmluVXNle1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgY29sb3I6ICM3QzU5M0E7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkICM3QzU5M0E7XHJcbiB9XHJcblxyXG4gLmFycm93e1xyXG4gICBtYXJnaW46IDFyZW07XHJcbiB9XHJcblxyXG4ucHV6emxlQWN0aW9uc3tcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5wdXp6bGVEZXRhaWxze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jcmVzZXRCdG46aG92ZXIsIC5idG5zOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjN0M1OTNBO1xyXG59XHJcblxyXG4uc2VhcmNoQXJlYXtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgZm9udC1zaXplOjEuOHJlbTtcclxufVxyXG5cclxuI3Jlc2V0QnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nOiAwLjV2dztcclxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbiNzcGlubmVye1xyXG4gIG1hcmdpbjogYXV0byA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlsc3tcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBoM3tcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZhZGVJbi1ib3R0b217XHJcbiAgdG9wOiA4MCU7XHJcbn1cclxuXHJcbi5zcGlubmVyIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgICAgICBzdHJva2U6ICM3QzU5M0E7XHJcbiAgICAgIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIGFuZCAobWF4LXdpZHRoOiA2NzBweCl7XHJcbiAgLnNvcnRCdG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ratings',
                templateUrl: './ratings.component.html',
                styleUrls: ['./ratings.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__["APIService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, null); })();


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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    margin-left: 30px;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n}\r\n\r\n#two[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n#one[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n}\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 300px;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n}\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 9.5rem;\r\n}\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n#resetDone[_ngcontent-%COMP%]{\r\n    color: #7C593A;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5KTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3R3b3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI29uZXtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5yZWdGb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ucmVnRm9ybUNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZFRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkuNXJlbTtcclxufVxyXG5cclxuI3Bhc3NFcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNyZXNldERvbmV7XHJcbiAgICBjb2xvcjogIzdDNTkzQTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuIl19 */"] });
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]], styles: [".container[_ngcontent-%COMP%]{\r\n  background-color: #7C593A;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    margin-left: 25px; \r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color: white;\r\n}\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 300px;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n}\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtc3VjY2Vzcy9yZXNldC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXN1Y2Nlc3MvcmVzZXQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1OTNBO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBrZWVwLWNhbG07XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDsgXHJcbn1cclxuXHJcbi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlZ0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5yZWdGb3JtQ29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkVGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbiJdfQ== */"] });
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
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 47, vars: 17, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "flex-container"], [1, "regForm"], ["src", "assets/images/label.png"], [1, "regFormContent"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "John Doe", "formControlName", "name", "required", "", 1, "input"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "john@doe.com", "formControlName", "email", "required", "", 1, "input"], ["matInput", "", "required", "", "formControlName", "password", 1, "input", 3, "type"], [1, "fa", 3, "ngClass", "click"], ["matInput", "", "required", "", "formControlName", "confirmPassword", 1, "input", 3, "type"], ["id", "passError"], ["mat-raised-button", "", "type", "submit", "id", "one", 1, "btns", 3, "disabled"], ["routerLink", "/index", "mat-raised-button", "", "color", "accent", 1, "btns"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".container[_ngcontent-%COMP%]{\r\n    \r\n    background-color: #7C593A;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n}\r\n\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    background-color: #7C593A;\r\n    color:white\r\n}\r\n\r\n\r\n#one[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n}\r\n\r\n\r\n.regForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 300px;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n\r\n.regFormContent[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n#passError[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n    font-family: keep-calm;\r\n    padding-left: 78px;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEZBQThGO0lBQzlGLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrL3Rlby1kdWxkdWxhby00b3A5XzJCdDJFZy11bnNwbGFzaC5qcGcnKTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGtlZXAtY2FsbTtcclxufVxyXG5cclxuXHJcbi5idG5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDNTkzQTtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbiNvbmV7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ucmVnRm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ucmVnRm9ybUNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZFRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbiNwYXNzRXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LWZhbWlseToga2VlcC1jYWxtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3OHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG4iXX0= */"] });
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
                { type: 'pattern', message: 'Must be a number between 1 and 5' }
            ]
        };
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^([1-5])$")]
        });
    }
    submit(form) {
        this.input = form.rating;
        this.dialogRef.close(`${form.rating}`);
    }
}
RateDialogComponent.ɵfac = function RateDialogComponent_Factory(t) { return new (t || RateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
RateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateDialogComponent, selectors: [["app-rate-dialog"]], inputs: { OnlyNumber: "OnlyNumber" }, decls: 13, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["matInput", "", "type", "text", "formControlName", "rating", "placeholder", "Enter Rating", "ngControl", "rating", "OnlyNumber", "true"], [4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button", "mat-dialog-close", ""], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function RateDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGUtZGlhbG9nL3JhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rate-dialog',
                templateUrl: './rate-dialog.component.html',
                styleUrls: ['./rate-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { OnlyNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
    retrieveAllSolveAttempts(currentUser) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getSolvedPuzzles', currentUser, httpOptions);
    }
    /**
    * Puzzle endpoints end here
    */
    /**
    * Admin endpoints start here
    */
    getAllUsers() {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/admin/getAllUsers');
    }
    deleteUser(user) {
        return this.http.delete('https://prometheuspuzzles.herokuapp.com/api/admin/deleteUser/' + user);
    }
    getAllPuzzlesAdmin() {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/admin/getAllPuzzles');
    }
    deletePuzzleAdmin(puzzle) {
        return this.http.delete('https://prometheuspuzzles.herokuapp.com/api/admin/deletePuzzle/' + puzzle);
    }
    getAllRatingsAdmin() {
        return this.http.get('https://prometheuspuzzles.herokuapp.com/api/admin/getAllRatings');
    }
    deleteRatingAdmin(rateID) {
        return this.http.delete('https://prometheuspuzzles.herokuapp.com/api/admin/deleteRatingAdmin/' + rateID);
    }
    /**
    * Admin endpoints end here
    */
    requestPasswordChange(email) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put('https://prometheuspuzzles.herokuapp.com/api/requestPasswordChange', email, httpOptions);
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

/***/ "./src/assets/js/FileSaver.js":
/*!************************************!*\
  !*** ./src/assets/js/FileSaver.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! FileSaver.js
 *  A saveAs() FileSaver implementation.
 *  2014-01-24
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (typeof navigator !== "undefined" &&
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" &&
	    /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, URL = view.URL || view.webkitURL || view
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = !view.externalHost && "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					URL.revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						window.open(object_url, "_blank");
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				// FF for Android has a nasty garbage collection mechanism
				// that turns all objects that are not pure javascript into 'deadObject'
				// this means `doc` and `save_link` are unusable and need to be recreated
				// `view` is usable though:
				doc = view.document;
				save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");
				save_link.href = object_url;
				save_link.download = name;
				var event = doc.createEvent("MouseEvents");
				event.initMouseEvent(
					"click", true, false, view, 0, 0, 0, 0, 0
					, false, false, false, false, 0, null
				);
				save_link.dispatchEvent(event);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	saveAs.unload = function() {
		process_deletion_queue();
		view.removeEventListener("unload", process_deletion_queue, false);
	};
	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (true) module.exports = saveAs;


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
};

let generatePuzzleAIButton, nextPuzzleButton, previousPuzzleButton, progressBar;
let generatedPuzzles;
let renderedPuzzleIndex;
let tempWidth, tempHeight;
let totalSurfaceArea;

//Genetic Algorithm parameters
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
    // return Math.ceil(rand() * max) - 1;
    return Math.floor(Math.random() * max);
}

function expandPuzzle(sites, factor)
{
	let tempSites = [];

	for(let i = 0; i < sites.length; i++)
	{
		tempSites[i] = {
			x: 0,
			y: 0
		}
		tempSites[i].x = sites[i].x * factor;
		tempSites[i].y = sites[i].y * factor;
	}

	return tempSites;
}

function initializeDataAI()
{
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["initializeData"])('AI');
	generatedPuzzles = [];
	renderedPuzzleIndex = 0;
	generatePuzzleAIButton = document.getElementById('generatePuzzleButtonAI');
	generatePuzzleAIButton.addEventListener('mousedown', generatePuzzleAI);
	generatePuzzleAIButton.remove();

	nextPuzzleButton = document.getElementById('nextPuzzleButton');
	previousPuzzleButton = document.getElementById('previousPuzzleButton');
	nextPuzzleButton.remove();
	previousPuzzleButton.remove();

	progressBar = document.getElementById('progressBar');
	progressBar.style.display = 'none';

	document.getElementById('nextButton').addEventListener('mousedown', displaySlidersCard);

	nextPuzzleButton.addEventListener('mousedown', function(){
		renderedPuzzleIndex++;
		if(renderedPuzzleIndex == generatedPuzzles.length)
		{
			let newGeneration = run();
			for(let index = 0; index < newGeneration.length; index++)
			{
				generatedPuzzles.push(newGeneration[index].sites);
			}
			console.log('reached maximum :<');
		}

		renderPuzzle(generatedPuzzles[renderedPuzzleIndex]);
	});

	previousPuzzleButton.addEventListener('mousedown', function(){
		if(renderedPuzzleIndex != 0)
		{
			renderedPuzzleIndex--;
			renderPuzzle(generatedPuzzles[renderedPuzzleIndex]);
		}
	});
}

function displaySlidersCard()
{
	let numberOfPiecesInGroup;
	numberOfSites = 0;

	for(let i = 0; i < 3; i++)
	{
		numberOfPiecesInGroup = parseInt(document.getElementById('numberOfPiecesInputBox' + (i+1)).value);
		groupDistribution.push(numberOfPiecesInGroup);
		numberOfSites += numberOfPiecesInGroup;
	}

	generateSliders(3);

	document.getElementById('inputContainer').appendChild(generatePuzzleAIButton);
}

function generatePuzzleAI()
{
	// document.getElementById('progressBarDiv').appendChild(progressBar);
	// progressBar.style.display = 'block';
	desiredProportions = [];

	for(let i = 0; i < 3; i++)
	{
		let proportion = (sliders[i].value / groupDistribution[i]) / 100;

		for(let counter = 0; counter < groupDistribution[i]; counter++)
			desiredProportions.push(proportion);
	}

	desiredProportions.sort( function(a, b) { return b - a } );

	document.getElementById('inputContainer').innerHTML = '';

	let lastGeneration = run();
	for(let index = 0; index < lastGeneration.length; index++)
	{
		generatedPuzzles.push(lastGeneration[index].sites);
	}

	renderPuzzle(lastGeneration[0].sites);
	// progressBar.remove();
	document.getElementById('puzzleControlsDiv').appendChild(previousPuzzleButton);
	document.getElementById('puzzleControlsDiv').appendChild(nextPuzzleButton);
}

function renderPuzzle(sites)
{
	let expandedSites = expandPuzzle(sites, 10);
	Object(src_assets_js_manualCreation_js__WEBPACK_IMPORTED_MODULE_0__["setSites"])(expandedSites);
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
	return nextGeneration;
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
	let offset = random(5 + 1);
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

/***/ "./src/assets/js/downloadPuzzle.js":
/*!*****************************************!*\
  !*** ./src/assets/js/downloadPuzzle.js ***!
  \*****************************************/
/*! exports provided: downloadPuzzle3D, downloadPuzzle2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPuzzle3D", function() { return downloadPuzzle3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPuzzle2D", function() { return downloadPuzzle2D; });
/* harmony import */ var src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/js/jszip.min.js */ "./src/assets/js/jszip.min.js");
/* harmony import */ var src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/js/FileSaver.js */ "./src/assets/js/FileSaver.js");
/* harmony import */ var src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_1__);




let getPuzzleDataURL = 'https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID/';
let piecesJSONObject, pieces, base64Image;
let desiredFile;

function downloadPuzzle3D(puzzleID)
{
	desiredFile = '3D';
	//puzzleID = localStorage.getItem('solvingPuzzleID');
	getPuzzleData(puzzleID);
}

function downloadPuzzle2D(puzzleID)
{
	desiredFile = '2D';
	//puzzleID = localStorage.getItem('solvingPuzzleID');
	getPuzzleData(puzzleID);
}

function getPuzzleData(puzzleID)
{
	let url = getPuzzleDataURL + puzzleID;
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data, status){
			piecesJSONObject = JSON.parse(data[0].puzzleObject);
			pieces = piecesJSONObject.pieces;

			base64Image = data[0].image;
			base64Image = base64Image.split(",");
			base64Image = base64Image[1];
			if(desiredFile == '3D')
				generateSTLFiles();
			else
				generateImageFile();
		},
		error: function(data, status){
			console.log(status);
			console.log(data);
		}
	});
}

function generateSTLFiles()
{
	let zip = new src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_0___default.a();
	let img = zip.folder("images");
	let currentPiece;
	let topRight, topLeft, bottomRight, bottomLeft;
	let stlFile;
	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		stlFile = 'solid piece_number_' + pieceIndex + '\n';
		currentPiece = pieces[pieceIndex];
		for(let vertexIndex = 0; vertexIndex < currentPiece.length; vertexIndex+=4)
		{
			topLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: 5
			};

			bottomLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: 0
			};

			topRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 5
			};

			bottomRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 0
			};

			stlFile = addVertexToFile(bottomLeft, bottomRight, topRight, stlFile);
			stlFile = addVertexToFile(topRight, topLeft, bottomLeft, stlFile);
		}
		stlFile += "endsolid puzzle";
		zip.file("piece_number_" + pieceIndex + ".stl", stlFile);
	}

	img.file("puzzle.jpeg", base64Image, {base64: true});

	zip.generateAsync({type:"blob"}).then(function(blob){
		src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_1___default()(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
}

function addVertexToFile(vertexA, vertexB, vertexC, stlFile)
{
	stlFile += "facet normal 0 0 0\n";
	stlFile += "outer loop\n";
	stlFile += "vertex " + vertexA.x + " " + vertexA.y + " " + vertexA.z + "\n";
	stlFile += "vertex " + vertexB.x + " " + vertexB.y + " " + vertexB.z + "\n";
	stlFile += "vertex " + vertexC.x + " " + vertexC.y + " " + vertexC.z + "\n";
	stlFile += "endloop\n";
	stlFile += "endfacet\n";

	return stlFile;
}

function generateImageFile()
{
	let zip = new src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_0___default.a();
	let img = zip.folder("images");
	img.file("puzzle.jpeg", base64Image, {base64: true});

	zip.generateAsync({type:"blob"}).then(function(blob){
		src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_1___default()(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
}


/***/ }),

/***/ "./src/assets/js/jszip.min.js":
/*!************************************!*\
  !*** ./src/assets/js/jszip.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!

JSZip v3.5.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(t){if(true)module.exports=t();else {}}(function(){return function s(a,o,h){function u(r,t){if(!o[r]){if(!a[r]){var e="function"==typeof require&&require;if(!t&&e)return require(r,!0);if(l)return l(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var n=o[r]={exports:{}};a[r][0].call(n.exports,function(t){var e=a[r][1][t];return u(e||t)},n,n.exports,s,a,o,h)}return o[r].exports}for(var l="function"==typeof require&&require,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,r){"use strict";var c=t("./utils"),d=t("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(t){for(var e,r,i,n,s,a,o,h=[],u=0,l=t.length,f=l,d="string"!==c.getTypeOf(t);u<t.length;)f=l-u,i=d?(e=t[u++],r=u<l?t[u++]:0,u<l?t[u++]:0):(e=t.charCodeAt(u++),r=u<l?t.charCodeAt(u++):0,u<l?t.charCodeAt(u++):0),n=e>>2,s=(3&e)<<4|r>>4,a=1<f?(15&r)<<2|i>>6:64,o=2<f?63&i:64,h.push(p.charAt(n)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(t){var e,r,i,n,s,a,o=0,h=0,u="data:";if(t.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(t.charAt(t.length-1)===p.charAt(64)&&f--,t.charAt(t.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=d.uint8array?new Uint8Array(0|f):new Array(0|f);o<t.length;)e=p.indexOf(t.charAt(o++))<<2|(n=p.indexOf(t.charAt(o++)))>>4,r=(15&n)<<4|(s=p.indexOf(t.charAt(o++)))>>2,i=(3&s)<<6|(a=p.indexOf(t.charAt(o++))),l[h++]=e,64!==s&&(l[h++]=r),64!==a&&(l[h++]=i);return l}},{"./support":30,"./utils":32}],2:[function(t,e,r){"use strict";var i=t("./external"),n=t("./stream/DataWorker"),s=t("./stream/DataLengthProbe"),a=t("./stream/Crc32Probe");s=t("./stream/DataLengthProbe");function o(t,e,r,i,n){this.compressedSize=t,this.uncompressedSize=e,this.crc32=r,this.compression=i,this.compressedContent=n}o.prototype={getContentWorker:function(){var t=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),e=this;return t.on("end",function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),t},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(t,e,r){return t.pipe(new a).pipe(new s("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new s("compressedSize")).withStreamInfo("compression",e)},e.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,e,r){"use strict";var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(t){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,e,r){"use strict";var i=t("./utils");var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==i.getTypeOf(t)?function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}(0|e,t,t.length,0):function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e.charCodeAt(a))];return-1^t}(0|e,t,t.length,0):0}},{"./utils":32}],5:[function(t,e,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,e,r){"use strict";var i=null;i="undefined"!=typeof Promise?Promise:t("lie"),e.exports={Promise:i}},{lie:37}],7:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=t("pako"),s=t("./utils"),a=t("./stream/GenericWorker"),o=i?"uint8array":"array";function h(t,e){a.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,t.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},r.compressWorker=function(t){return new h("Deflate",t)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){"use strict";function A(t,e){var r,i="";for(r=0;r<e;r++)i+=String.fromCharCode(255&t),t>>>=8;return i}function i(t,e,r,i,n,s){var a,o,h=t.file,u=t.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),d=I.transformTo("string",O.utf8encode(h.name)),c=h.comment,p=I.transformTo("string",s(c)),m=I.transformTo("string",O.utf8encode(c)),_=d.length!==h.name.length,g=m.length!==c.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};e&&!r||(x.crc32=t.crc32,x.compressedSize=t.compressedSize,x.uncompressedSize=t.uncompressedSize);var S=0;e&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===n?(C=798,z|=function(t,e){var r=t;return t||(r=e?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(t){return 63&(t||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+d,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(i,4)+f+b+p}}var I=t("../utils"),n=t("../stream/GenericWorker"),O=t("../utf8"),B=t("../crc32"),R=t("../signature");function s(t,e,r,i){n.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,n),s.prototype.push=function(t){var e=t.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,n.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:r?(e+100*(r-i-1))/r:100}}))},s.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var r=i(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,r=i(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),e)this.push({data:function(t){return R.DATA_DESCRIPTOR+A(t.crc32,4)+A(t.compressedSize,4)+A(t.uncompressedSize,4)}(t),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var r=this.bytesWritten-t,i=function(t,e,r,i,n){var s=I.transformTo("string",n(i));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(t,2)+A(t,2)+A(e,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,t,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()}),t.on("error",function(t){e.error(t)}),this},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(t){var e=this._sources;if(!n.prototype.error.call(this,t))return!1;for(var r=0;r<e.length;r++)try{e[r].error(t)}catch(t){}return!0},s.prototype.lock=function(){n.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,e,r){"use strict";var u=t("../compressions"),i=t("./ZipFileWorker");r.generateWorker=function(t,a,e){var o=new i(a.streamFiles,e,a.platform,a.encodeFileName),h=0;try{t.forEach(function(t,e){h++;var r=function(t,e){var r=t||e,i=u[r];if(!i)throw new Error(r+" is not a valid compression method !");return i}(e.options.compression,a.compression),i=e.options.compressionOptions||a.compressionOptions||{},n=e.dir,s=e.date;e._compressWorker(r,i).withStreamInfo("file",{name:t,dir:n,date:s,comment:e.comment||"",unixPermissions:e.unixPermissions,dosPermissions:e.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(t){o.error(t)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,e,r){"use strict";function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var t=new i;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.5.0",i.loadAsync=function(t,e){return(new i).loadAsync(t,e)},i.external=t("./external"),e.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,e,r){"use strict";var i=t("./utils"),n=t("./external"),o=t("./utf8"),h=(i=t("./utils"),t("./zipEntries")),s=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function l(i){return new n.Promise(function(t,e){var r=i.decompressed.getContentWorker().pipe(new s);r.on("error",function(t){e(t)}).on("end",function(){r.streamInfo.crc32!==i.decompressed.crc32?e(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}e.exports=function(t,s){var a=this;return s=i.extend(s||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(t)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",t,!0,s.optimizedBinaryString,s.base64).then(function(t){var e=new h(s);return e.load(t),e}).then(function(t){var e=[n.Promise.resolve(t)],r=t.files;if(s.checkCRC32)for(var i=0;i<r.length;i++)e.push(l(r[i]));return n.Promise.all(e)}).then(function(t){for(var e=t.shift(),r=e.files,i=0;i<r.length;i++){var n=r[i];a.file(n.fileNameStr,n.decompressed,{binary:!0,optimizedBinaryString:!0,date:n.date,dir:n.dir,comment:n.fileCommentStr.length?n.fileCommentStr:null,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions,createFolders:s.createFolders})}return e.zipComment.length&&(a.comment=e.zipComment),a})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../stream/GenericWorker");function s(t,e){n.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}i.inherits(s,n),s.prototype._bindStream=function(t){var e=this;(this._stream=t).pause(),t.on("data",function(t){e.push({data:t,meta:{percent:0}})}).on("error",function(t){e.isPaused?this.generatedError=t:e.error(t)}).on("end",function(){e.isPaused?e._upstreamEnded=!0:e.end()})},s.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,e,r){"use strict";var n=t("readable-stream").Readable;function i(t,e,r){n.call(this,e),this._helper=t;var i=this;t.on("data",function(t,e){i.push(t)||i._helper.pause(),r&&r(e)}).on("error",function(t){i.emit("error",t)}).on("end",function(){i.push(null)})}t("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},e.exports=i},{"../utils":32,"readable-stream":16}],14:[function(t,e,r){"use strict";e.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(t,e){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(t,e);if("number"==typeof t)throw new Error('The "data" argument must not be a number');return new Buffer(t,e)},allocBuffer:function(t){if(Buffer.alloc)return Buffer.alloc(t);var e=new Buffer(t);return e.fill(0),e},isBuffer:function(t){return Buffer.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){"use strict";function s(t,e,r){var i,n=u.getTypeOf(e),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(t=g(t)),s.createFolders&&(i=_(t))&&b.call(this,i,!0);var a="string"===n&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(e instanceof d&&0===e.uncompressedSize||s.dir||!e||0===e.length)&&(s.base64=!1,s.binary=!0,e="",s.compression="STORE",n="string");var o=null;o=e instanceof d||e instanceof l?e:p.isNode&&p.isStream(e)?new m(t,e):u.prepareContent(t,e,s.binary,s.optimizedBinaryString,s.base64);var h=new c(t,o,s);this.files[t]=h}var n=t("./utf8"),u=t("./utils"),l=t("./stream/GenericWorker"),a=t("./stream/StreamHelper"),f=t("./defaults"),d=t("./compressedObject"),c=t("./zipObject"),o=t("./generate"),p=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),_=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return 0<e?t.substring(0,e):""},g=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},b=function(t,e){return e=void 0!==e?e:f.createFolders,t=g(t),this.files[t]||s.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var i={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,r,i;for(e in this.files)this.files.hasOwnProperty(e)&&(i=this.files[e],(r=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(r,i))},filter:function(r){var i=[];return this.forEach(function(t,e){r(t,e)&&i.push(e)}),i},file:function(t,e,r){if(1!==arguments.length)return t=this.root+t,s.call(this,t,e,r),this;if(h(t)){var i=t;return this.filter(function(t,e){return!e.dir&&i.test(t)})}var n=this.files[this.root+t];return n&&!n.dir?n:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(t,e){return e.dir&&r.test(t)});var t=this.root+r,e=b.call(this,t),i=this.clone();return i.root=e.name,i},remove:function(r){r=this.root+r;var t=this.files[r];if(t||("/"!==r.slice(-1)&&(r+="/"),t=this.files[r]),t&&!t.dir)delete this.files[r];else for(var e=this.filter(function(t,e){return e.name.slice(0,r.length)===r}),i=0;i<e.length;i++)delete this.files[e[i].name];return this},generate:function(t){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,r={};try{if((r=u.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";e=o.generateWorker(this,r,i)}catch(t){(e=new l("error")).error(t)}return new a(e,r.type||"string",r.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=i},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,e,r){e.exports=t("stream")},{stream:void 0}],17:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===e&&this.data[s+1]===r&&this.data[s+2]===i&&this.data[s+3]===n)return s-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.readData(4);return e===s[0]&&r===s[1]&&i===s[2]&&n===s[3]},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],18:[function(t,e,r){"use strict";var i=t("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e);return this.index+=t,r},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readAndCheckSignature:function(t){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=n},{"../utils":32}],19:[function(t,e,r){"use strict";var i=t("./Uint8ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],21:[function(t,e,r){"use strict";var i=t("./ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../support"),s=t("./ArrayReader"),a=t("./StringReader"),o=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");e.exports=function(t){var e=i.getTypeOf(t);return i.checkSupport(e),"string"!==e||n.uint8array?"nodebuffer"===e?new o(t):n.uint8array?new h(i.transformTo("uint8array",t)):new s(i.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,e,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../utils");function s(t){i.call(this,"ConvertWorker to "+t),this.destType=t}n.inherits(s,i),s.prototype.processChunk=function(t){this.push({data:n.transformTo(this.destType,t.data),meta:t.meta})},e.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,i),s.prototype.processChunk=function(t){this.streamInfo.crc32=n(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}i.inherits(s,n),s.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}n.prototype.processChunk.call(this,t)},e.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then(function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=i.getTypeOf(t),e.isPaused||e._tickAndRepeat()},function(t){e.error(t)})}i.inherits(s,n),s.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,e,r){"use strict";function i(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.end()}),t.on("error",function(t){e.error(t)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var t=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=i},{}],29:[function(t,e,r){"use strict";var h=t("../utils"),n=t("./ConvertWorker"),s=t("./GenericWorker"),u=t("../base64"),i=t("../support"),a=t("../external"),o=null;if(i.nodestream)try{o=t("../nodejs/NodejsStreamOutputAdapter")}catch(t){}function l(t,o){return new a.Promise(function(e,r){var i=[],n=t._internalType,s=t._outputType,a=t._mimeType;t.on("data",function(t,e){i.push(t),o&&o(e)}).on("error",function(t){i=[],r(t)}).on("end",function(){try{var t=function(t,e,r){switch(t){case"blob":return h.newBlob(h.transformTo("arraybuffer",e),r);case"base64":return u.encode(e);default:return h.transformTo(t,e)}}(s,function(t,e){var r,i=0,n=null,s=0;for(r=0;r<e.length;r++)s+=e[r].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(n=new Uint8Array(s),r=0;r<e.length;r++)n.set(e[r],i),i+=e[r].length;return n;case"nodebuffer":return Buffer.concat(e);default:throw new Error("concat : unsupported type '"+t+"'")}}(n,i),a);e(t)}catch(t){r(t)}i=[]}).resume()})}function f(t,e,r){var i=e;switch(e){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string"}try{this._internalType=i,this._outputType=e,this._mimeType=r,h.checkSupport(i),this._worker=t.pipe(new n(i)),t.lock()}catch(t){this._worker=new s("error"),this._worker.error(t)}}f.prototype={accumulate:function(t){return l(this,t)},on:function(t,e){var r=this;return"data"===t?this._worker.on(t,function(t){e.call(r,t.data,t.meta)}):this._worker.on(t,function(){h.delay(e,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,e,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=0===new Blob([i],{type:"application/zip"}).size}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch(t){r.nodestream=!1}},{"readable-stream":16}],31:[function(t,e,s){"use strict";for(var o=t("./utils"),h=t("./support"),r=t("./nodejsUtils"),i=t("./stream/GenericWorker"),u=new Array(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;u[254]=u[254]=1;function a(){i.call(this,"utf-8 decode"),this.leftOver=null}function l(){i.call(this,"utf-8 encode")}s.utf8encode=function(t){return h.nodebuffer?r.newBufferFrom(t,"utf-8"):function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=h.uint8array?new Uint8Array(o):new Array(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e}(t)},s.utf8decode=function(t){return h.nodebuffer?o.transformTo("nodebuffer",t).toString("utf-8"):function(t){var e,r,i,n,s=t.length,a=new Array(2*s);for(e=r=0;e<s;)if((i=t[e++])<128)a[r++]=i;else if(4<(n=u[i]))a[r++]=65533,e+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&e<s;)i=i<<6|63&t[e++],n--;1<n?a[r++]=65533:i<65536?a[r++]=i:(i-=65536,a[r++]=55296|i>>10&1023,a[r++]=56320|1023&i)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(t=o.transformTo(h.uint8array?"uint8array":"array",t))},o.inherits(a,i),a.prototype.processChunk=function(t){var e=o.transformTo(h.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=e;(e=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),e.set(r,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var i=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}(e),n=e;i!==e.length&&(h.uint8array?(n=e.subarray(0,i),this.leftOver=e.subarray(i,e.length)):(n=e.slice(0,i),this.leftOver=e.slice(i,e.length))),this.push({data:s.utf8decode(n),meta:t.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,i),l.prototype.processChunk=function(t){this.push({data:s.utf8encode(t.data),meta:t.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,e,a){"use strict";var o=t("./support"),h=t("./base64"),r=t("./nodejsUtils"),i=t("set-immediate-shim"),u=t("./external");function n(t){return t}function l(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r);return e}a.newBlob=function(e,r){a.checkSupport("blob");try{return new Blob([e],{type:r})}catch(t){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(e),i.getBlob(r)}catch(t){throw new Error("Bug : can't construct the Blob.")}}};var s={stringifyByChunk:function(t,e,r){var i=[],n=0,s=t.length;if(s<=r)return String.fromCharCode.apply(null,t);for(;n<s;)"array"===e||"nodebuffer"===e?i.push(String.fromCharCode.apply(null,t.slice(n,Math.min(n+r,s)))):i.push(String.fromCharCode.apply(null,t.subarray(n,Math.min(n+r,s)))),n+=r;return i.join("")},stringifyByChar:function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(t){return!1}}()}};function f(t){var e=65536,r=a.getTypeOf(t),i=!0;if("uint8array"===r?i=s.applyCanBeUsed.uint8array:"nodebuffer"===r&&(i=s.applyCanBeUsed.nodebuffer),i)for(;1<e;)try{return s.stringifyByChunk(t,r,e)}catch(t){e=Math.floor(e/2)}return s.stringifyByChar(t)}function d(t,e){for(var r=0;r<t.length;r++)e[r]=t[r];return e}a.applyFromCharCode=f;var c={};c.string={string:n,array:function(t){return l(t,new Array(t.length))},arraybuffer:function(t){return c.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,r.allocBuffer(t.length))}},c.array={string:f,array:n,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(t)}},c.arraybuffer={string:function(t){return f(new Uint8Array(t))},array:function(t){return d(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:n,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(new Uint8Array(t))}},c.uint8array={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:n,nodebuffer:function(t){return r.newBufferFrom(t)}},c.nodebuffer={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return c.nodebuffer.uint8array(t).buffer},uint8array:function(t){return d(t,new Uint8Array(t.length))},nodebuffer:n},a.transformTo=function(t,e){if(e=e||"",!t)return e;a.checkSupport(t);var r=a.getTypeOf(e);return c[r][t](e)},a.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&r.isBuffer(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(t){var e,r,i="";for(r=0;r<(t||"").length;r++)i+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase();return i},a.delay=function(t,e,r){i(function(){t.apply(r||null,e||[])})},a.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.prototype=new r},a.extend=function(){var t,e,r={};for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e]);return r},a.prepareContent=function(r,t,i,n,s){return u.Promise.resolve(t).then(function(i){return o.blob&&(i instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(i)))&&"undefined"!=typeof FileReader?new u.Promise(function(e,r){var t=new FileReader;t.onload=function(t){e(t.target.result)},t.onerror=function(t){r(t.target.error)},t.readAsArrayBuffer(i)}):i}).then(function(t){var e=a.getTypeOf(t);return e?("arraybuffer"===e?t=a.transformTo("uint8array",t):"string"===e&&(s?t=h.decode(t):i&&!0!==n&&(t=function(t){return l(t,o.uint8array?new Uint8Array(t.length):new Array(t.length))}(t))),t):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),n=t("./utils"),s=t("./signature"),a=t("./zipEntry"),o=(t("./utf8"),t("./support"));function h(t){this.files=[],this.loadOptions=t}h.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(e)+", expected "+n.pretty(t)+")")}},isSignature:function(t,e){var r=this.reader.index;this.reader.setIndex(t);var i=this.reader.readString(4)===e;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=o.uint8array?"uint8array":"array",r=n.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,r,i=this.zip64EndOfCentralSize-44;0<i;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(t=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(t<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(t);var e=t;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=e-r;if(0<i)this.isSignature(e,s.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(t){this.reader=i(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),s=t("./utils"),n=t("./compressedObject"),a=t("./crc32"),o=t("./utf8"),h=t("./compressions"),u=t("./support");function l(t,e){this.options=t,this.loadOptions=e}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(t){var e,r;if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=function(t){for(var e in h)if(h.hasOwnProperty(e)&&h[e].magic===t)return h[e];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==t&&(this.dosPermissions=63&this.externalFileAttributes),3==t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=i(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,i,n=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<n;)e=t.readInt(2),r=t.readInt(2),i=t.readData(r),this.extraFields[e]={id:e,length:r,value:i};t.setIndex(n)},handleUTF8:function(){var t=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var r=s.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var n=s.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,e,r){"use strict";function i(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=e,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=t("./stream/StreamHelper"),n=t("./stream/DataWorker"),a=t("./utf8"),o=t("./compressedObject"),h=t("./stream/GenericWorker");i.prototype={internalStream:function(t){var e=null,r="string";try{if(!t)throw new Error("No output type specified.");var i="string"===(r=t.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),e=this._decompressWorker();var n=!this._dataBinary;n&&!i&&(e=e.pipe(new a.Utf8EncodeWorker)),!n&&i&&(e=e.pipe(new a.Utf8DecodeWorker))}catch(t){(e=new h("error")).error(t)}return new s(e,r,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof o&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,t,e)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new n(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)i.prototype[u[f]]=l;e.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,l,e){(function(e){"use strict";var r,i,t=e.MutationObserver||e.WebKitMutationObserver;if(t){var n=0,s=new t(u),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var o=new e.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var t,e;i=!0;for(var r=h.length;r;){for(e=h,h=[],t=-1;++t<r;)e[t]();r=h.length}i=!1}l.exports=function(t){1!==h.push(t)||i||r()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){"use strict";var n=t("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],i=["PENDING"];function o(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=i,this.queue=[],this.outcome=void 0,t!==u&&c(this,t)}function h(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(e,r,i){n(function(){var t;try{t=r(i)}catch(t){return l.reject(e,t)}t===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,t)})}function d(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function c(e,t){var r=!1;function i(t){r||(r=!0,l.reject(e,t))}function n(t){r||(r=!0,l.resolve(e,t))}var s=p(function(){t(n,i)});"error"===s.status&&i(s.value)}function p(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}(e.exports=o).prototype.finally=function(e){if("function"!=typeof e)return this;var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})},o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){if("function"!=typeof t&&this.state===a||"function"!=typeof e&&this.state===s)return this;var r=new this.constructor(u);this.state!==i?f(r,this.state===a?t:e,this.outcome):this.queue.push(new h(r,t,e));return r},h.prototype.callFulfilled=function(t){l.resolve(this.promise,t)},h.prototype.otherCallFulfilled=function(t){f(this.promise,this.onFulfilled,t)},h.prototype.callRejected=function(t){l.reject(this.promise,t)},h.prototype.otherCallRejected=function(t){f(this.promise,this.onRejected,t)},l.resolve=function(t,e){var r=p(d,e);if("error"===r.status)return l.reject(t,r.value);var i=r.value;if(i)c(t,i);else{t.state=a,t.outcome=e;for(var n=-1,s=t.queue.length;++n<s;)t.queue[n].callFulfilled(e)}return t},l.reject=function(t,e){t.state=s,t.outcome=e;for(var r=-1,i=t.queue.length;++r<i;)t.queue[r].callRejected(e);return t},o.resolve=function(t){if(t instanceof this)return t;return l.resolve(new this(u),t)},o.reject=function(t){var e=new this(u);return l.reject(e,t)},o.all=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var i=t.length,n=!1;if(!i)return this.resolve([]);var s=new Array(i),a=0,e=-1,o=new this(u);for(;++e<i;)h(t[e],e);return o;function h(t,e){r.resolve(t).then(function(t){s[e]=t,++a!==i||n||(n=!0,l.resolve(o,s))},function(t){n||(n=!0,l.reject(o,t))})}},o.race=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,i=!1;if(!r)return this.resolve([]);var n=-1,s=new this(u);for(;++n<r;)a=t[n],e.resolve(a).then(function(t){i||(i=!0,l.resolve(s,t))},function(t){i||(i=!0,l.reject(s,t))});var a;return s}},{immediate:36}],38:[function(t,e,r){"use strict";var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,e,r){"use strict";var a=t("./zlib/deflate"),o=t("./utils/common"),h=t("./utils/strings"),n=t("./zlib/messages"),s=t("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,d=0,c=8;function p(t){if(!(this instanceof p))return new p(t);this.options=o.assign({level:f,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==l)throw new Error(n[r]);if(e.header&&a.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(i="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=a.deflateSetDictionary(this.strm,i))!==l)throw new Error(n[r]);this._dict_set=!0}}function i(t,e){var r=new p(e);if(r.push(t,!0),r.err)throw r.msg||n[r.err];return r.result}p.prototype.push=function(t,e){var r,i,n=this.strm,s=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===u.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new o.Buf8(s),n.next_out=0,n.avail_out=s),1!==(r=a.deflate(n,i))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(n.output,n.next_out))):this.onData(o.shrinkBuf(n.output,n.next_out)))}while((0<n.avail_in||0===n.avail_out)&&1!==r);return 4===i?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==i||(this.onEnd(l),!(n.avail_out=0))},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=p,r.deflate=i,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,i(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,i(t,e)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,e,r){"use strict";var d=t("./zlib/inflate"),c=t("./utils/common"),p=t("./utils/strings"),m=t("./zlib/constants"),i=t("./zlib/messages"),n=t("./zlib/zstream"),s=t("./zlib/gzheader"),_=Object.prototype.toString;function a(t){if(!(this instanceof a))return new a(t);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&0<=e.windowBits&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(0<=e.windowBits&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),15<e.windowBits&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new n,this.strm.avail_out=0;var r=d.inflateInit2(this.strm,e.windowBits);if(r!==m.Z_OK)throw new Error(i[r]);this.header=new s,d.inflateGetHeader(this.strm,this.header)}function o(t,e){var r=new a(e);if(r.push(t,!0),r.err)throw r.msg||i[r.err];return r.result}a.prototype.push=function(t,e){var r,i,n,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof t?h.input=p.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?h.input=new Uint8Array(t):h.input=t,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new c.Buf8(u),h.next_out=0,h.avail_out=u),(r=d.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=d.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||i!==m.Z_FINISH&&i!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(n=p.utf8border(h.output,h.next_out),s=h.next_out-n,a=p.buf2string(h.output,n),h.next_out=s,h.avail_out=u-s,s&&c.arraySet(h.output,h.output,n,s,0),this.onData(a)):this.onData(c.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(i=m.Z_FINISH),i===m.Z_FINISH?(r=d.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):i!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(t){this.chunks.push(t)},a.prototype.onEnd=function(t){t===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,o(t,e)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){var e,r,i,n,s,a;for(e=i=0,r=t.length;e<r;e++)i+=t[e].length;for(a=new Uint8Array(i),e=n=0,r=t.length;e<r;e++)s=t[e],a.set(s,n),n+=s.length;return a}},s={arraySet:function(t,e,r,i,n){for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(i)},{}],42:[function(t,e,r){"use strict";var h=t("./common"),n=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var u=new h.Buf8(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;function l(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&n))return String.fromCharCode.apply(null,h.shrinkBuf(t,e));for(var r="",i=0;i<e;i++)r+=String.fromCharCode(t[i]);return r}u[254]=u[254]=1,r.string2buf=function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=new h.Buf8(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e},r.buf2binstring=function(t){return l(t,t.length)},r.binstring2buf=function(t){for(var e=new h.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r);return e},r.buf2string=function(t,e){var r,i,n,s,a=e||t.length,o=new Array(2*a);for(r=i=0;r<a;)if((n=t[r++])<128)o[i++]=n;else if(4<(s=u[n]))o[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&r<a;)n=n<<6|63&t[r++],s--;1<s?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return l(o,i)},r.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}},{"./common":41}],43:[function(t,e,r){"use strict";e.exports=function(t,e,r,i){for(var n=65535&t|0,s=t>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(n=n+e[i++]|0)|0,--a;);n%=65521,s%=65521}return n|s<<16|0}},{}],44:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,e,r){"use strict";var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}},{}],46:[function(t,e,r){"use strict";var h,d=t("../utils/common"),u=t("./trees"),c=t("./adler32"),p=t("./crc32"),i=t("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,n=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(t,e){return t.msg=i[e],e}function T(t){return(t<<1)-(4<t?9:0)}function D(t){for(var e=t.length;0<=--e;)t[e]=0}function F(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(d.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function N(t,e){u._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,F(t.strm)}function U(t,e){t.pending_buf[t.pending++]=e}function P(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function L(t,e){var r,i,n=t.max_chain_length,s=t.strstart,a=t.prev_length,o=t.nice_match,h=t.strstart>t.w_size-z?t.strstart-(t.w_size-z):0,u=t.window,l=t.w_mask,f=t.prev,d=t.strstart+S,c=u[s+a-1],p=u[s+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(u[(r=e)+a]===p&&u[r+a-1]===c&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<d);if(i=S-(d-s),s=d-S,a<i){if(t.match_start=e,o<=(a=i))break;c=u[s+a-1],p=u[s+a]}}}while((e=f[e&l])>h&&0!=--n);return a<=t.lookahead?a:t.lookahead}function j(t){var e,r,i,n,s,a,o,h,u,l,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-z)){for(d.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=r=t.hash_size;i=t.head[--e],t.head[e]=f<=i?i-f:0,--r;);for(e=r=f;i=t.prev[--e],t.prev[e]=f<=i?i-f:0,--r;);n+=f}if(0===t.strm.avail_in)break;if(a=t.strm,o=t.window,h=t.strstart+t.lookahead,u=n,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,d.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=c(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),t.lookahead+=r,t.lookahead+t.insert>=x)for(s=t.strstart-t.insert,t.ins_h=t.window[s],t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+x-1])&t.hash_mask,t.prev[s&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=s,s++,t.insert--,!(t.lookahead+t.insert<x)););}while(t.lookahead<z&&0!==t.strm.avail_in)}function Z(t,e){for(var r,i;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r)),t.match_length>=x)if(i=u._tr_tally(t,t.strstart-t.match_start,t.match_length-x),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=x){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function W(t,e){for(var r,i,n;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=x-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r),t.match_length<=5&&(1===t.strategy||t.match_length===x&&4096<t.strstart-t.match_start)&&(t.match_length=x-1)),t.prev_length>=x&&t.match_length<=t.prev_length){for(n=t.strstart+t.lookahead-x,i=u._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-x),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=x-1,t.strstart++,i&&(N(t,!1),0===t.strm.avail_out))return A}else if(t.match_available){if((i=u._tr_tally(t,0,t.window[t.strstart-1]))&&N(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return A}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=u._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function M(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*w),this.dyn_dtree=new d.Buf16(2*(2*a+1)),this.bl_tree=new d.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(k+1),this.heap=new d.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=n,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?C:E,t.adler=2===e.wrap?0:1,e.last_flush=l,u._tr_init(e),m):R(t,_)}function K(t){var e=G(t);return e===m&&function(t){t.window_size=2*t.w_size,D(t.head),t.max_lazy_match=h[t.level].max_lazy,t.good_match=h[t.level].good_length,t.nice_match=h[t.level].nice_length,t.max_chain_length=h[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=x-1,t.match_available=0,t.ins_h=0}(t.state),e}function Y(t,e,r,i,n,s){if(!t)return _;var a=1;if(e===g&&(e=6),i<0?(a=0,i=-i):15<i&&(a=2,i-=16),n<1||y<n||r!==v||i<8||15<i||e<0||9<e||s<0||b<s)return R(t,_);8===i&&(i=9);var o=new H;return(t.state=o).strm=t,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new d.Buf8(2*o.w_size),o.head=new d.Buf16(o.hash_size),o.prev=new d.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new d.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=r,K(t)}h=[new M(0,0,0,0,function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(j(t),0===t.lookahead&&e===l)return A;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,N(t,!1),0===t.strm.avail_out))return A;if(t.strstart-t.block_start>=t.w_size-z&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):(t.strstart>t.block_start&&(N(t,!1),t.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(t,e){return Y(t,e,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?_:(t.state.gzhead=e,m):_},r.deflate=function(t,e){var r,i,n,s;if(!t||!t.state||5<e||e<0)return t?R(t,_):_;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||666===i.status&&e!==f)return R(t,0===t.avail_out?-5:_);if(i.strm=t,r=i.last_flush,i.last_flush=e,i.status===C)if(2===i.wrap)t.adler=0,U(i,31),U(i,139),U(i,8),i.gzhead?(U(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),U(i,255&i.gzhead.time),U(i,i.gzhead.time>>8&255),U(i,i.gzhead.time>>16&255),U(i,i.gzhead.time>>24&255),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(U(i,255&i.gzhead.extra.length),U(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=p(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(U(i,0),U(i,0),U(i,0),U(i,0),U(i,0),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,3),i.status=E);else{var a=v+(i.w_bits-8<<4)<<8;a|=(2<=i.strategy||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(a|=32),a+=31-a%31,i.status=E,P(i,a),0!==i.strstart&&(P(i,t.adler>>>16),P(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending!==i.pending_buf_size));)U(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(t),i.pending+2<=i.pending_buf_size&&(U(i,255&t.adler),U(i,t.adler>>8&255),t.adler=0,i.status=E)):i.status=E),0!==i.pending){if(F(t),0===t.avail_out)return i.last_flush=-1,m}else if(0===t.avail_in&&T(e)<=T(r)&&e!==f)return R(t,-5);if(666===i.status&&0!==t.avail_in)return R(t,-5);if(0!==t.avail_in||0!==i.lookahead||e!==l&&666!==i.status){var o=2===i.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(j(t),0===t.lookahead)){if(e===l)return A;break}if(t.match_length=0,r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):3===i.strategy?function(t,e){for(var r,i,n,s,a=t.window;;){if(t.lookahead<=S){if(j(t),t.lookahead<=S&&e===l)return A;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=x&&0<t.strstart&&(i=a[n=t.strstart-1])===a[++n]&&i===a[++n]&&i===a[++n]){s=t.strstart+S;do{}while(i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&n<s);t.match_length=S-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=x?(r=u._tr_tally(t,1,t.match_length-x),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):h[i.level].func(i,e);if(o!==O&&o!==B||(i.status=666),o===A||o===O)return 0===t.avail_out&&(i.last_flush=-1),m;if(o===I&&(1===e?u._tr_align(i):5!==e&&(u._tr_stored_block(i,0,0,!1),3===e&&(D(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),F(t),0===t.avail_out))return i.last_flush=-1,m}return e!==f?m:i.wrap<=0?1:(2===i.wrap?(U(i,255&t.adler),U(i,t.adler>>8&255),U(i,t.adler>>16&255),U(i,t.adler>>24&255),U(i,255&t.total_in),U(i,t.total_in>>8&255),U(i,t.total_in>>16&255),U(i,t.total_in>>24&255)):(P(i,t.adler>>>16),P(i,65535&t.adler)),F(t),0<i.wrap&&(i.wrap=-i.wrap),0!==i.pending?m:1)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==C&&69!==e&&73!==e&&91!==e&&103!==e&&e!==E&&666!==e?R(t,_):(t.state=null,e===E?R(t,-3):m):_},r.deflateSetDictionary=function(t,e){var r,i,n,s,a,o,h,u,l=e.length;if(!t||!t.state)return _;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(t.adler=c(t.adler,e,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new d.Buf8(r.w_size),d.arraySet(u,e,l-r.w_size,r.w_size,0),e=u,l=r.w_size),a=t.avail_in,o=t.next_in,h=t.input,t.avail_in=l,t.next_in=0,t.input=e,j(r);r.lookahead>=x;){for(i=r.strstart,n=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+x-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++,--n;);r.strstart=i,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,t.next_in=o,t.input=h,t.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,e,r){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,e,r){"use strict";e.exports=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C;r=t.state,i=t.next_in,z=t.input,n=i+(t.avail_in-5),s=t.next_out,C=t.output,a=s-(e-t.avail_out),o=s+(t.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,d=r.window,c=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;t:do{p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=m[c&g];e:for(;;){if(c>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(c&(1<<y)-1)];continue e}if(32&y){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}w=65535&v,(y&=15)&&(p<y&&(c+=z[i++]<<p,p+=8),w+=c&(1<<y)-1,c>>>=y,p-=y),p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=_[c&b];r:for(;;){if(c>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(c&(1<<y)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(k=65535&v,p<(y&=15)&&(c+=z[i++]<<p,(p+=8)<y&&(c+=z[i++]<<p,p+=8)),h<(k+=c&(1<<y)-1)){t.msg="invalid distance too far back",r.mode=30;break t}if(c>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(S=d,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=d[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=d[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(i<n&&s<o);i-=w=p>>3,c&=(1<<(p-=w<<3))-1,t.next_in=i,t.next_out=s,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=s<o?o-s+257:257-(s-o),r.hold=c,r.bits=p}},{}],49:[function(t,e,r){"use strict";var I=t("../utils/common"),O=t("./adler32"),B=t("./crc32"),R=t("./inffast"),T=t("./inftrees"),D=1,F=2,N=0,U=-2,P=1,i=852,n=592;function L(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=P,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new I.Buf32(i),e.distcode=e.distdyn=new I.Buf32(n),e.sane=1,e.back=-1,N):U}function o(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,a(t)):U}function h(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||15<e)?U:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,o(t))):U}function u(t,e){var r,i;return t?(i=new s,(t.state=i).window=null,(r=h(t,e))!==N&&(t.state=null),r):U}var l,f,d=!0;function j(t){if(d){var e;for(l=new I.Buf32(512),f=new I.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(T(D,t.lens,0,288,l,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;T(F,t.lens,0,32,f,0,t.work,{bits:5}),d=!1}t.lencode=l,t.lenbits=9,t.distcode=f,t.distbits=5}function Z(t,e,r,i){var n,s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),i>=s.wsize?(I.arraySet(s.window,e,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(i<(n=s.wsize-s.wnext)&&(n=i),I.arraySet(s.window,e,r-i,n,s.wnext),(i-=n)?(I.arraySet(s.window,e,r-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(t){return u(t,15)},r.inflateInit2=u,r.inflate=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return U;12===(r=t.state).mode&&(r.mode=13),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,f=o,d=h,x=N;t:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){t.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){t.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){t.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,t.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(c=r.length)&&(c=o),c&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,i,s,c,k)),512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,r.length-=c),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(65535&r.check)){t.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}t.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,2;t.adler=r.check=1,r.mode=12;case 12:if(5===e||6===e)break t;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==e)break;u>>>=2,l-=2;break t;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){t.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(c=r.length){if(o<c&&(c=o),h<c&&(c=h),0===c)break t;I.arraySet(n,i,s,c,a),o-=c,s+=c,h-=c,a+=c,r.length-=c;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){t.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){t.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],c=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+c>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=30;break}for(;c--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){t.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(6<=o&&258<=h){t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,R(t,d),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){t.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){t.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break t;if(c=d-h,r.offset>c){if((c=r.offset-c)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=30;break}p=c>r.wnext?(c-=r.wnext,r.wsize-c):r.wnext-c,c>r.length&&(c=r.length),m=r.window}else m=n,p=a-r.offset,c=r.length;for(h<c&&(c=h),h-=c,r.length-=c;n[a++]=m[p++],--c;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break t;n[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break t;o--,u|=i[s++]<<l,l+=8}if(d-=h,t.total_out+=d,r.total+=d,d&&(t.adler=r.check=r.flags?B(r.check,n,d,a-d):O(r.check,n,d,a-d)),d=h,(r.flags?u:L(u))!==r.check){t.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break t;case 30:x=-3;break t;case 31:return-4;case 32:default:return U}return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,(r.wsize||d!==t.avail_out&&r.mode<30&&(r.mode<27||4!==e))&&Z(t,t.output,t.next_out,d-t.avail_out)?(r.mode=31,-4):(f-=t.avail_in,d-=t.avail_out,t.total_in+=f,t.total_out+=d,r.total+=d,r.wrap&&d&&(t.adler=r.check=r.flags?B(r.check,n,d,t.next_out-d):O(r.check,n,d,t.next_out-d)),t.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===d||4===e)&&x===N&&(x=-5),x)},r.inflateEnd=function(t){if(!t||!t.state)return U;var e=t.state;return e.window&&(e.window=null),t.state=null,N},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?U:((r.head=e).done=!1,N):U},r.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,e,i,0)!==r.check?-3:Z(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,e,r){"use strict";var D=t("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,i,n,s,a,o){var h,u,l,f,d,c,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<i;v++)O[e[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===t||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<i;v++)0!==e[r+v]&&(a[B[e[r+v]]++]=v);if(c=0===t?(A=R=a,19):1===t?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,d=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===t&&852<C||2===t&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<c?(m=0,a[v]):a[v]>c?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;n[d+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=e[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),d+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===t&&852<C||2===t&&592<C)return 1;n[l=E&f]=k<<24|x<<16|d-s|0}}return 0!==E&&(n[d+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,e,r){"use strict";var n=t("../utils/common"),o=0,h=1;function i(t){for(var e=t.length;0<=--e;)t[e]=0}var s=0,a=29,u=256,l=u+1+a,f=30,d=19,_=2*l+1,g=15,c=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));i(z);var C=new Array(2*f);i(C);var E=new Array(512);i(E);var A=new Array(256);i(A);var I=new Array(a);i(I);var O,B,R,T=new Array(f);function D(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function F(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function N(t){return t<256?E[t]:E[256+(t>>>7)]}function U(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function P(t,e,r){t.bi_valid>c-r?(t.bi_buf|=e<<t.bi_valid&65535,U(t,t.bi_buf),t.bi_buf=e>>c-t.bi_valid,t.bi_valid+=r-c):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function L(t,e,r){P(t,r[2*e],r[2*e+1])}function j(t,e){for(var r=0;r|=1&t,t>>>=1,r<<=1,0<--e;);return r>>>1}function Z(t,e,r){var i,n,s=new Array(g+1),a=0;for(i=1;i<=g;i++)s[i]=a=a+r[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=j(s[o]++,o))}}function W(t){var e;for(e=0;e<l;e++)t.dyn_ltree[2*e]=0;for(e=0;e<f;e++)t.dyn_dtree[2*e]=0;for(e=0;e<d;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*m]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8<t.bi_valid?U(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function H(t,e,r,i){var n=2*e,s=2*r;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[r]}function G(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&H(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!H(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function K(t,e,r){var i,n,s,a,o=0;if(0!==t.last_lit)for(;i=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?L(t,n,e):(L(t,(s=A[n])+u+1,e),0!==(a=w[s])&&P(t,n-=I[s],a),L(t,s=N(--i),r),0!==(a=k[s])&&P(t,i-=T[s],a)),o<t.last_lit;);L(t,m,e)}function Y(t,e){var r,i,n,s=e.dyn_tree,a=e.stat_desc.static_tree,o=e.stat_desc.has_stree,h=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(t.heap[++t.heap_len]=u=r,t.depth[r]=0):s[2*r+1]=0;for(;t.heap_len<2;)s[2*(n=t.heap[++t.heap_len]=u<2?++u:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=a[2*n+1]);for(e.max_code=u,r=t.heap_len>>1;1<=r;r--)G(t,s,r);for(n=h;r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],G(t,s,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,s[2*n]=s[2*r]+s[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,s[2*r+1]=s[2*i+1]=n,t.heap[1]=n++,G(t,s,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,s,a,o,h=e.dyn_tree,u=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,m=0;for(s=0;s<=g;s++)t.bl_count[s]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<_;r++)p<(s=h[2*h[2*(i=t.heap[r])+1]+1]+1)&&(s=p,m++),h[2*i+1]=s,u<i||(t.bl_count[s]++,a=0,c<=i&&(a=d[i-c]),o=h[2*i],t.opt_len+=o*(s+a),f&&(t.static_len+=o*(l[2*i+1]+a)));if(0!==m){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(i=t.bl_count[s];0!==i;)u<(n=t.heap[--r])||(h[2*n+1]!==s&&(t.opt_len+=(s-h[2*n+1])*h[2*n],h[2*n+1]=s),i--)}}(t,e),Z(s,u,t.bl_count)}function X(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=a,a=e[2*(i+1)+1],++o<h&&n===a||(o<u?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[2*b]++):o<=10?t.bl_tree[2*v]++:t.bl_tree[2*y]++,s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4))}function V(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),i=0;i<=r;i++)if(n=a,a=e[2*(i+1)+1],!(++o<h&&n===a)){if(o<u)for(;L(t,n,t.bl_tree),0!=--o;);else 0!==n?(n!==s&&(L(t,n,t.bl_tree),o--),L(t,b,t.bl_tree),P(t,o-3,2)):o<=10?(L(t,v,t.bl_tree),P(t,o-3,3)):(L(t,y,t.bl_tree),P(t,o-11,7));s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4)}}i(T);var q=!1;function J(t,e,r,i){P(t,(s<<1)+(i?1:0),3),function(t,e,r,i){M(t),i&&(U(t,r),U(t,~r)),n.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r,!0)}r._tr_init=function(t){q||(function(){var t,e,r,i,n,s=new Array(g+1);for(i=r=0;i<a-1;i++)for(I[i]=r,t=0;t<1<<w[i];t++)A[r++]=i;for(A[r-1]=i,i=n=0;i<16;i++)for(T[i]=n,t=0;t<1<<k[i];t++)E[n++]=i;for(n>>=7;i<f;i++)for(T[i]=n<<7,t=0;t<1<<k[i]-7;t++)E[256+n++]=i;for(e=0;e<=g;e++)s[e]=0;for(t=0;t<=143;)z[2*t+1]=8,t++,s[8]++;for(;t<=255;)z[2*t+1]=9,t++,s[9]++;for(;t<=279;)z[2*t+1]=7,t++,s[7]++;for(;t<=287;)z[2*t+1]=8,t++,s[8]++;for(Z(z,l+1,s),t=0;t<f;t++)C[2*t+1]=5,C[2*t]=j(t,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,d,p)}(),q=!0),t.l_desc=new F(t.dyn_ltree,O),t.d_desc=new F(t.dyn_dtree,B),t.bl_desc=new F(t.bl_tree,R),t.bi_buf=0,t.bi_valid=0,W(t)},r._tr_stored_block=J,r._tr_flush_block=function(t,e,r,i){var n,s,a=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return o;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return h;for(e=32;e<u;e++)if(0!==t.dyn_ltree[2*e])return h;return o}(t)),Y(t,t.l_desc),Y(t,t.d_desc),a=function(t){var e;for(X(t,t.dyn_ltree,t.l_desc.max_code),X(t,t.dyn_dtree,t.d_desc.max_code),Y(t,t.bl_desc),e=d-1;3<=e&&0===t.bl_tree[2*S[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=n&&(n=s)):n=s=r+5,r+4<=n&&-1!==e?J(t,e,r,i):4===t.strategy||s===n?(P(t,2+(i?1:0),3),K(t,z,C)):(P(t,4+(i?1:0),3),function(t,e,r,i){var n;for(P(t,e-257,5),P(t,r-1,5),P(t,i-4,4),n=0;n<i;n++)P(t,t.bl_tree[2*S[n]+1],3);V(t,t.dyn_ltree,e-1),V(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),K(t,t.dyn_ltree,t.dyn_dtree)),W(t),i&&M(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(A[r]+u+1)]++,t.dyn_dtree[2*N(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){P(t,2,3),L(t,m,z),function(t){16===t.bi_valid?(U(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":41}],53:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,e,r){"use strict";e.exports="function"==typeof setImmediate?setImmediate:function(){var t=[].slice.apply(arguments);t.splice(1,0,0),setTimeout.apply(null,t)}},{}]},{},[10])(10)});

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



let apiURL = "https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzle";
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
let sites;
let siteBoundaries;
let pieces = [];
let precision = 0;

let colorPalettes = [];
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
}

///Changes the displayed color palette used on the puzzle and re-renders it
function changePuzzleColorPalette(colors)
{
	if(pieces.length > 0)
	{
		layer.removeChildren();
		piecesJSONObject = JSON.parse(piecesJSONObject);
		piecesJSONObject.colors = colors;

		for(let i = 0; i < pieces.length; i++)
		{
			pieces[i].attrs.stroke = colors[i % colors.length];
			layer.add(pieces[i]);
		}
		
		piecesJSONObject = JSON.stringify(piecesJSONObject);
		layer.draw();
	}
}

///Randomizes the color palette used on the puzzle
function randomizePuzzleColorPalette()
{
	selectedPalette = [];
	if(pieces.length > 0)
	{
		let rgbColor;
		layer.removeChildren();

		for(let i = 0; i < pieces.length; i++)
		{
			rgbColor = getRandomRGB();
			selectedPalette.push(rgbColor);
			pieces[i].attrs.stroke = rgbColor;
			layer.add(pieces[i]);
		}

		piecesJSONObject = JSON.parse(piecesJSONObject);
		piecesJSONObject.colors = selectedPalette;
		piecesJSONObject = JSON.stringify(piecesJSONObject);
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

///Create a post ajax request and send it to the API in order to save the user's created puzzle
function savePuzzle(appendedString)
{
	token = document.getElementById('tokenLabel').innerHTML;

	let puzzleName = document.getElementById('puzzleNameInputBox'+appendedString).value;
	let puzzleDescription = document.getElementById('puzzleDescriptionInputBox'+appendedString).value;

	let puzzleImage = stage.toDataURL({ pixelRatio: 0.50 });

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
		'pieces' : [],
		'colors' : []
	};

	pieces = [];
	layer.destroyChildren();
}

///Create a visual representation of where the user clicks
function createPoint(x, y)
{
	let point = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Ring({
		x: x,
		y: y,
		innerRadius: 3,
        outerRadius: 15,
		stroke: 'black',
		fill: '#7C593A',
		strokeWidth: 1,
	});

	point.draggable(true);

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

	point.on('mousedown', function(event) {
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
	pointsArray = layer.getChildren(function(node) {
		return node.getClassName() === 'Ring';
	});

	sites = [];
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

	piecesJSONObject.colors = selectedPalette;
	layer.draw();
	piecesJSONObject = JSON.stringify(piecesJSONObject);
	// console.log(piecesJSONObject);
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

	// if(distanceMetric === 'euclidean')
		// minimumDistance = minimumDistance + '';

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
	return result;
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

/***/ "./src/assets/js/solvePuzzle.js":
/*!**************************************!*\
  !*** ./src/assets/js/solvePuzzle.js ***!
  \**************************************/
/*! exports provided: initializeDataSolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDataSolve", function() { return initializeDataSolve; });
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/js/jszip.min.js */ "./src/assets/js/jszip.min.js");
/* harmony import */ var src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/js/FileSaver.js */ "./src/assets/js/FileSaver.js");
/* harmony import */ var src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_2__);





let getPuzzleDataURL = 'https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID/';
let saveSolveAttemptURL = 'https://prometheuspuzzles.herokuapp.com/api/puzzles/newSolveAttempt';
let piecesJSONObject, pieces, colors, base64Image;
let correctPositions, pieceInCorrectPosition;
let defaultPalette = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite', 'Red', 'Green'];
let shadesOfBluePalette = ['DarkBlue', 'DeepSkyBlue', 'MediumBlue', 'DodgerBlue', 'MidnightBlue', 'RoyalBlue', 'DarkSlateBlue', 'CornflowerBlue', 'SkyBlue', 'PowderBlue'];
let canvas, stage, layer, outline, board, puzzleID;
let width = 1000, height = 500;
let startTime, puzzleSolved;
let solvedDiv;
// window.onload = function(){
// 	initializeDataSolve();
// }

function initializeDataSolve()
{
	solvedDiv = document.getElementById('solvedDiv');
	solvedDiv.remove();
	correctPositions = [];
	pieceInCorrectPosition = [];
	puzzleID = localStorage.getItem('solvingPuzzleID');
	puzzleSolved = false;
	getPuzzleData(puzzleID);

	canvas = document.getElementById('solverContainer');
	stage = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Stage({
		container: 'solverContainer',
		width: width,
		height: height
	});

	board = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Rect({
		x: (width/4),
		y: 0,
		width: width/2,
		height: height,
		stroke: 'black',
		fill: 'white',
		strokeWidth: 2
	});

	outline = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Rect({
		x: 0,
		y: 0,
		width: width,
		height: height,
		stroke: 'grey',
		fill: '#fff',
		strokeWidth: 1
	});

	layer = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Layer();
	stage.add(layer);
	layer.add(outline);

	document.getElementById('closeSolverDialogButton').addEventListener('mousedown', function(){
		if(!puzzleSolved)
			saveSolveAttempt(false, puzzleID, startTime);
	});
}

function saveSolveAttempt(solved, solvePuzzleID, solveStartTime)
{
	let token = document.getElementById('tokenLabel').innerHTML;
	let timeTaken = performance.now();
	timeTaken = (timeTaken - solveStartTime).toFixed(0);
	timeTaken = Math.floor(timeTaken / 1000);

	let jsonData = {
		token: token,
		puzzleID: solvePuzzleID,
		attemptDuration: timeTaken,
		solved: solved
	};

	$.ajax({
		type: 'POST',
		url: saveSolveAttemptURL,
		headers: {
			'Access-Control-Allow-Origin' : '*'
		},
		contentType: 'application/json',
		data: JSON.stringify(jsonData),
		dataType: 'json',
		success: function(data, status){
			console.log('success!');
		},
		error: function(data, status){

		}
	});
}

function getPuzzleData(puzzleID)
{
	let url = getPuzzleDataURL + puzzleID;
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data, status){
			piecesJSONObject = JSON.parse(data[0].puzzleObject);
			base64Image = data[0].image;
			pieces = piecesJSONObject.pieces;
			colors = piecesJSONObject.colors;
			if(colors === undefined)
				colors = defaultPalette;
			// generateSTLFiles();
			generatePieces();
		},
		error: function(data, status){
			console.log(status);
			console.log(data);
		}
	});
}

function generatePieces()
{
	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		let selectedPiece = pieces[pieceIndex];
		let offsetX = getRandomOffsetX(selectedPiece, 0);
		// console.log(offsetX);
		let offsetY = getRandomOffset(getMin(selectedPiece, 'y'), ( height/2 ));
		let minY = getMin(selectedPiece, 'y');

		correctPositions.push({x: selectedPiece[0], y: selectedPiece[1]});
		pieceInCorrectPosition.push(false);

		for(let i = 0; i < selectedPiece.length; i+=2)
		{
			if( (pieceIndex+1) % 2 == 0)
				selectedPiece[i] += 800;
			selectedPiece[i] -= offsetX;
			// selectedPiece[i+1] += minY - ((pieceIndex % 5) * 100);
		}

		let group = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Group();

		let hitBox = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Rect({
			x: selectedPiece[0],
			y: selectedPiece[1],
			width: 5,
			height: 5
		});

		let piece = new konva__WEBPACK_IMPORTED_MODULE_0___default.a.Line({
			points: selectedPiece,
			stroke: colors[pieceIndex % colors.length],
			strokeWidth: 2,
			perfectDrawEnabled: false,
		});

		piece.on('mouseover', function (){
			if(!pieceInCorrectPosition[pieceIndex])
				document.body.style.cursor = 'pointer';
			// this.scale({x: 1, y: 1});
			group.moveToTop();
			layer.draw();
		});

		piece.on('mouseout', function() {
			document.body.style.cursor = 'default';
			// this.scale({x: 0.5, y: 0.5});
			// layer.draw();
		});

		group.on('dragend', function(){
			let hitBox = this.getChildren()[1];
			let hitBoxCoordinates = hitBox.absolutePosition();
			hitBoxCoordinates.x -= 250;

			if(checkPosition(hitBoxCoordinates, correctPositions[pieceIndex]))
			{
				snapPieceIntoPlace(hitBoxCoordinates, correctPositions[pieceIndex], this);
				group.draggable(false);
				console.log('nailed it!!');
				pieceInCorrectPosition[pieceIndex] = true;
				checkIfPuzzleSolved();
			}
			else
			{
				console.log('you are off bud!');
				console.log('The correct x: ' + correctPositions[pieceIndex].x + ' - The correct y: ' + correctPositions[pieceIndex].y);
				console.log('The current x: ' + hitBoxCoordinates.x + ' - The current y: ' + hitBoxCoordinates.y);
				pieceInCorrectPosition[pieceIndex] = false;
			}
		});

		// piece.scale({x: 0.75, y: 0.75});
		group.add(piece);
		group.add(hitBox);
		group.draggable(true);
		layer.add(group);
	}

	layer.add(board);
	layer.draw();
	startTime = performance.now();
}

function getMax(pointsArray, coordinate)
{
	let step;
	if(coordinate == 'x')
		step = 0;
	else
		step = 1;

	let max = 0;
	for(let i = 0; i < pointsArray.length; i+=2)
	{
		if(pointsArray[i+step] > max)
			max = pointsArray[i+step];
	}

	return max;
}

function getMin(pointsArray, coordinate)
{
	let step;
	if(coordinate == 'x')
		step = 0;
	else
		step = 1;

	let min = pointsArray[step];
	for(let i = 0; i < pointsArray.length; i+=2)
	{
		if(pointsArray[i+step] < min)
			min = pointsArray[i+step];
	}

	return min;
}

function getRandomOffset(lowerBound, upperBound)
{
	let returnValue = 0;
	// while( returnValue <= lowerBound )
	{
		returnValue = Math.floor((Math.random() * upperBound) + 1);
	}

	return returnValue;
}

function getRandomOffsetX(pixelArray, min)
{
	let minX = getMin(pixelArray, 'x');
	let maxX = getMax(pixelArray, 'x');

	return minX;

}

function checkPosition(coords1, coords2)
{
	let xDifference = coords1.x - coords2.x;
	let yDifference = coords1.y - coords2.y;
	if(xDifference < 0)
		xDifference *= -1;
	if(yDifference < 0)
		yDifference *= -1;

	if(xDifference <= 15 && yDifference <= 15)
		return true;
	else
		return false;
}

function checkIfPuzzleSolved()
{
	for(let pieceIndex = 0; pieceIndex < pieceInCorrectPosition.length; pieceIndex++)
	{
		if(!pieceInCorrectPosition[pieceIndex])
			return false;
	}

	setTimeout(function() {
		document.getElementById('solverDialogDiv').appendChild(solvedDiv);
		solvedDiv.style.display = "block";

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			solvedDiv.style.display = "none";
		}
	}, 500);

	// alert('Puzzle Solved!');
	puzzleSolved = true;
	saveSolveAttempt(puzzleSolved, puzzleID, startTime);
}

function snapPieceIntoPlace(currentCoords, targetCoords, piece)
{
	let xDifference = currentCoords.x - targetCoords.x;
	let yDifference = currentCoords.y - targetCoords.y;
	piece.x(piece.x() - xDifference);
	piece.y(piece.y() - yDifference);
	layer.draw();
}

function generateSTLFiles()
{
	let zip = new src_assets_js_jszip_min_js__WEBPACK_IMPORTED_MODULE_1___default.a();
	let currentPiece;
	let topRight, topLeft, bottomRight, bottomLeft;
	let stlFile;
	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		stlFile = 'solid piece_number_' + pieceIndex + '\n';
		currentPiece = pieces[pieceIndex];
		for(let vertexIndex = 0; vertexIndex < currentPiece.length; vertexIndex+=4)
		{
			topLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: 5
			};

			bottomLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: 0
			};

			topRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 5
			};

			bottomRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 0
			};

			stlFile = addVertexToFile(bottomLeft, bottomRight, topRight, stlFile);
			stlFile = addVertexToFile(topRight, topLeft, bottomLeft, stlFile);
		}
		stlFile += "endsolid puzzle";
		zip.file("piece_number_" + pieceIndex + ".stl", stlFile);
	}
	base64Image = base64Image.split(",");
	base64Image = base64Image[1];
	let img = zip.folder("images");
	img.file("puzzle.jpeg", base64Image, {base64: true});

	zip.generateAsync({type:"blob"}).then(function(blob){
		src_assets_js_FileSaver_js__WEBPACK_IMPORTED_MODULE_2___default()(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
}

function addVertexToFile(vertexA, vertexB, vertexC, stlFile)
{
	stlFile += "facet normal 0 0 0\n";
	stlFile += "outer loop\n";
	stlFile += "vertex " + vertexA.x + " " + vertexA.y + " " + vertexA.z + "\n";
	stlFile += "vertex " + vertexB.x + " " + vertexB.y + " " + vertexB.z + "\n";
	stlFile += "vertex " + vertexC.x + " " + vertexC.y + " " + vertexC.z + "\n";
	stlFile += "endloop\n";
	stlFile += "endfacet\n";

	return stlFile;
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