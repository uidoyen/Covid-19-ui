(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");

    let Tab1PageModule = class Tab1PageModule {};
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"]
      }]), _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_10__["OrderModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-card-title {\n  font-size: 1rem;\n}\n\n.ion-icon {\n  font-size: 64px;\n}\n\n.ion-icon--green {\n  color: green;\n}\n\n.ion-icon--orange {\n  color: orange;\n}\n\n.ion-icon--red {\n  color: red;\n}\n\nion-card-header {\n  padding-bottom: 5px;\n}\n\n.mapsvg {\n  fill: transparent !important;\n  stroke: #37383a !important;\n}\n\n.mapsvg__highlight {\n  fill: #fc0 !important;\n}\n\n.info {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 5px;\n  font-size: 12px;\n  font-family: Helvetica, Arial, sans-serif;\n  position: absolute;\n  border: 1px solid #333;\n  color: #333;\n  white-space: nowrap;\n}\n\n.info:first-line {\n  font-weight: bold;\n}\n\n.title__margin {\n  margin-bottom: 30px;\n}\n\nthead th {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\n\nthead th span {\n  visibility: hidden;\n}\n\nthead th.active1 span {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxEYXRhZ3JhenBcXENhcm9uYVxcY29yb25hLXVpL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxZQUFBO0FDRVI7O0FEQUk7RUFDSSxhQUFBO0FDRVI7O0FEQUk7RUFDSSxVQUFBO0FDRVI7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREFJO0VBRUkscUJBQUE7QUNDUjs7QURHQTtFQUNJLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREVRO0VBQ0ksbUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAmLS1ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gICAgJi0tb3JhbmdlIHtcclxuICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG4gICAgJi0tcmVkIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm1hcHN2ZyB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgc3Ryb2tlOiAjMzczODNhICFpbXBvcnRhbnQ7XHJcbiAgICAmX19oaWdobGlnaHQge1xyXG4gICAgICAgIC8vIHN0cm9rZTogIzAwMjg2OCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZpbGw6ICNmYzAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICY6Zmlyc3QtbGluZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZV9fbWFyZ2luIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbnRoZWFkIHRoIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUxIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uaW9uLWljb24ge1xuICBmb250LXNpemU6IDY0cHg7XG59XG4uaW9uLWljb24tLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmlvbi1pY29uLS1vcmFuZ2Uge1xuICBjb2xvcjogb3JhbmdlO1xufVxuLmlvbi1pY29uLS1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ubWFwc3ZnIHtcbiAgZmlsbDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgc3Ryb2tlOiAjMzczODNhICFpbXBvcnRhbnQ7XG59XG4ubWFwc3ZnX19oaWdobGlnaHQge1xuICBmaWxsOiAjZmMwICFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvIHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgY29sb3I6ICMzMzM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaW5mbzpmaXJzdC1saW5lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZV9fbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxudGhlYWQgdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG50aGVhZCB0aCBzcGFuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxudGhlYWQgdGguYWN0aXZlMSBzcGFuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../covid.service */
    "./src/app/covid.service.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    let Tab1Page = class Tab1Page {
      constructor(covidService, spinner) {
        this.covidService = covidService;
        this.spinner = spinner;
        this.info = null;
        this.breakdowns = null;
        this.mapsvg = null;
        this.infopanel = null;
        this.lineChart = null;
        this.barChartAge = null;
        this.countryNameConfirmed = "Global";
        this.dataShow = false;
        this.p = 1;
        this.order = "country";
        this.columns = [{
          prop: 'country',
          name: 'Country'
        }, {
          prop: 'totalConfirmedCases',
          name: 'Total Confirmed'
        }, {
          prop: 'newlyConfirmedCases',
          name: 'Newly Confirmed'
        }, {
          prop: 'totalDeaths',
          name: 'Total Deaths'
        }, // { prop: 'New Deaths', name: 'newDeaths' },
        {
          prop: 'totalRecoveredCases',
          name: 'Total Recovered'
        }];
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // const loading = await this.loadingController.create({
          //   message: 'Please wait...',
          //   duration: 2000
          // });
          // loading.present();
          this.getCovidData();
          this.lineChart = document.getElementById('lineChart');
          this.barChartAge = document.getElementById('barChartAge'); // this.countryNameConfirmed = document.getElementById('countryNameConfirmed');
          // this.totalConfirmedCases = document.getElementById('totalConfirmedCases');
          // this.countryNameDeceased = document.getElementById('countryNameDeceased');
          // this.totalDeaths = document.getElementById('totalDeaths');
          // this.countryNameRecovered = document.getElementById('countryNameRecovered');
          // this.totalRecoveredCases = document.getElementById('totalRecoveredCases');
          // this.recoveredRate = document.getElementById('recoveredRate');
          // this.deathRate = document.getElementById('deathRate');
        });
      }

      pagination(event) {
        this.p = event;
      }

      getCovidData() {
        this.spinner.show();
        let that = this;
        this.covidService.getAll().subscribe(data => {
          this.spinner.hide();

          if (data.result) {
            // console.log(data.result);
            this.info = data.result.stats;
            this.totalConfirmedCases = this.info.totalConfirmedCases;
            this.totalDeaths = this.info.totalDeaths;
            this.totalRecoveredCases = this.info.totalRecoveredCases;
            this.ClosedCases = this.info.totalRecoveredCases + this.info.totalDeaths;
            this.recoveredRate = this.info.totalRecoveredCases / (this.info.totalRecoveredCases + this.info.totalDeaths);
            this.deathRate = this.info.totalDeaths / (this.info.totalRecoveredCases + this.info.totalDeaths);
            this.breakdowns = data.result.stats.breakdowns.map(row => {
              return Object.assign({}, row, {
                country: row['location']['countryOrRegion']
              });
            }); // console.log(this.breakdowns)

            that.addDataToMap();
            that.displayLineChart();
          }
        });
      }

      setOrder(value) {
        if (this.order === value) {
          this.reverse = !this.reverse;
        }

        this.order = value;
      }

      addDataToMap() {
        let breakdowns = this.info.breakdowns; // console.log(breakdowns);

        var temp_array = breakdowns.map(function (item) {
          return item.totalConfirmedCases;
        });
        var highest_value = Math.max.apply(Math, temp_array);

        for (let i = 0; i < breakdowns.length; i++) {
          if (breakdowns[i].location.isoCode === null || breakdowns[i].location.isoCode === undefined) {
            continue;
          } else {
            let elm = document.getElementById(breakdowns[i].location.isoCode);
            let fact = temp_array[i] / 150;
            let r = 255;
            let g = 189 - fact;
            let b = 189 - fact;
            elm.style.fill = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")"); // elm.innerHTML = `
            // <div class="info">
            //   <div>${breakdowns[i].location.countryOrRegion}</div>
            //   <div>Confirmed: ${breakdowns[i].totalConfirmedCases}</div>
            //   <div>Deaths: ${breakdowns[i].totalDeaths}</div>
            //   <div>Recovered: ${breakdowns[i].totalRecoveredCases}</div>
            // </div>
            // `;
          } // if (breakdowns[i].location.isoCode === null) {
          //   continue;
          // } else {
          //   console.log(document.querySelector('RU'));
          //   // document.querySelector(breakdowns[i].location.isoCode).style.fill =
          //   //   'rgba(11, 104, 170,1';
          // }
          // if (breakdowns[i].location.isoCode !== null) {
          //   document
          //     .querySelector(breakdowns[i].location.isoCode)
          //     .style({ fill: 'rgba(11, 104, 170,1' });
          //   console.log(breakdowns[i]);
          // }


          this.highlightonHover();
        }
      }

      addOnFromState(el) {
        console.log(el);
      }

      highlightonHover() {
        let that = this;
        this.mapsvg = document.getElementsByClassName('mapsvg-region');
        this.infopanel = document.getElementById('info');

        for (let i = 0; i < this.mapsvg.length; i++) {
          this.mapsvg[i].addEventListener('mouseover', mouseOverEffect);
          this.mapsvg[i].addEventListener('mouseout', mouseOutEffect);
          this.mapsvg[i].addEventListener('mousemove', mouseMoveEffect);
        }

        function mouseOverEffect() {
          that.dataShow = true;
          let locationId = this.getAttribute('id');
          let currentLocation = that.breakdowns.filter(function (item) {
            if (item.location.isoCode === locationId) {
              return item;
            }
          }); // console.log('currentLocation', currentLocation);

          if (currentLocation.length != 0) {
            that.infopanel.innerHTML = "\n        <div class=\"info__panel\">\n          <div>".concat(currentLocation[0].country, "</div>\n          <div>Confirmed: ").concat(currentLocation[0].totalConfirmedCases, "</div>\n          <div>Recovered: ").concat(currentLocation[0].totalRecoveredCases, "</div>\n          <div>Deaths: ").concat(currentLocation[0].totalDeaths, "</div>\n\n        </div>\n      ");
            that.countryNameConfirmed = currentLocation[0].country;
            that.totalConfirmedCases = currentLocation[0].totalConfirmedCases;
            that.countryNameDeceased = currentLocation[0].country;
            that.totalDeaths = currentLocation[0].totalDeaths;
            that.countryNameRecovered = currentLocation[0].country;
            that.totalRecoveredCases = currentLocation[0].totalRecoveredCases;
            that.ClosedCases = currentLocation[0].totalRecoveredCases + currentLocation[0].totalDeaths;
            that.recoveredRate = currentLocation[0].totalRecoveredCases / (currentLocation[0].totalRecoveredCases + currentLocation[0].totalDeaths);
            that.deathRate = currentLocation[0].totalDeaths / (currentLocation[0].totalRecoveredCases + currentLocation[0].totalDeaths);
            this.classList.add('mapsvg__highlight');
          }
        }

        function mouseOutEffect() {
          // that.infopanel.innerHTML = '';
          that.dataShow = false;
          that.countryNameConfirmed = 'Global';
          that.totalConfirmedCases = that.info.totalConfirmedCases;
          that.countryNameDeceased = 'Global';
          that.totalDeaths = that.info.totalDeaths;
          that.countryNameRecovered = 'Global';
          that.totalRecoveredCases = that.info.totalRecoveredCases;
          that.ClosedCases = that.info.totalRecoveredCases + that.info.totalDeaths;
          that.recoveredRate = that.info.totalRecoveredCases / (that.info.totalRecoveredCases + that.info.totalDeaths);
          that.deathRate = that.info.totalDeaths / (that.info.totalRecoveredCases + that.info.totalDeaths);
          this.classList.remove('mapsvg__highlight');
        }

        function mouseMoveEffect(e) {
          // console.log(e);
          that.dataShow = true;
          var mouseX = e.pageX,
              //X coordinates of mouse
          mouseY = e.pageY; //Y coordinates of mouse

          that.infopanel.style.top = e.offsetY - 50 + 'px';
          that.infopanel.style.left = mouseX - 500 + 'px';
          that.infopanel.style.right = mouseY - that.infopanel.width / 2 + 'px';
        }
      }

      displayLineChart() {
        // console.log(this.info.history)
        // let history=this.info.history;
        let labels = [];
        let Confirmed = [];
        let Recovered = [];
        let Deaths = [];
        this.info.history.forEach(his => {
          labels.push(moment_moment__WEBPACK_IMPORTED_MODULE_4__(his.date).format("MM/DD"));
          Confirmed.push(his.confirmed);
          Recovered.push(his.recovered);
          Deaths.push(his.deaths);
        });
        var data = {
          labels: labels.slice(Confirmed.length - 15),
          datasets: [{
            label: 'Confirmed',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'orange',
            borderCapStyle: 'square',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: Confirmed.slice(Confirmed.length - 15),
            spanGaps: true
          }, {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'green',
            borderCapStyle: 'square',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: Recovered.slice(Confirmed.length - 15),
            spanGaps: true
          }, {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'red',
            borderCapStyle: 'square',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: Deaths.slice(Confirmed.length - 15),
            spanGaps: true
          }]
        };
        var ctx = this.lineChart.getContext('2d'); // console.log(ctx);

        var options = {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }; // var lineChart = new Chart(ctx).Line(data, options);

        var lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](ctx, {
          type: 'line',
          data: data,
          options: options
        });
      }

      displayAgeChart() {
        var densityData = {
          label: 'Density of Planets (kg/m3)',
          data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
          backgroundColor: ['rgba(0, 99, 132, 0.6)', 'rgba(30, 99, 132, 0.6)', 'rgba(60, 99, 132, 0.6)', 'rgba(90, 99, 132, 0.6)', 'rgba(120, 99, 132, 0.6)', 'rgba(150, 99, 132, 0.6)', 'rgba(180, 99, 132, 0.6)', 'rgba(210, 99, 132, 0.6)', 'rgba(240, 99, 132, 0.6)'],
          borderColor: ['rgba(0, 99, 132, 1)', 'rgba(30, 99, 132, 1)', 'rgba(60, 99, 132, 1)', 'rgba(90, 99, 132, 1)', 'rgba(120, 99, 132, 1)', 'rgba(150, 99, 132, 1)', 'rgba(180, 99, 132, 1)', 'rgba(210, 99, 132, 1)', 'rgba(240, 99, 132, 1)'],
          borderWidth: 2,
          hoverBorderWidth: 0
        };
        var chartOptions = {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              barPercentage: 0.5
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: 'left'
            }
          }
        };
        var barChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChartAge, {
          type: 'horizontalBar',
          data: {
            labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80'],
            datasets: [densityData]
          },
          options: chartOptions
        });
      }

    };

    Tab1Page.ctorParameters = () => [{
      type: _covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
    }];

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map