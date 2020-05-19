(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexBarChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexBarChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_apexChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/apexChart */ "./resources/js/data/apexChart.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Bar Charts"
  },
  data: function data() {
    return {
      name: "apexBarChart",
      basicBarChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["basicBarChart"],
      groupedBar: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["groupedBar"],
      stackedbar: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["stackedbar"],
      negativeBar: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["negativeBar"],
      customDataLabelBar: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["customDataLabelBar"],
      patternedBar: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["patternedBar"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexBarChart.vue?vue&type=template&id=cf09bc6a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexBarChart.vue?vue&type=template&id=cf09bc6a& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", { attrs: { page: "Apexbarchart", folder: "Chart" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Basic Bar chart" } },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "350",
                          options: _vm.basicBarChart.chartOptions,
                          series: _vm.basicBarChart.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Grouped Bar" } },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "350",
                          options: _vm.groupedBar.chartOptions,
                          series: _vm.groupedBar.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Stacked Bars(Fiction Books Sales)" }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "350",
                          options: _vm.stackedbar.chartOptions,
                          series: _vm.stackedbar.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: {
                    title:
                      "Bar with Negative Values(Mauritius population pyramid 2011)"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "350",
                          options: _vm.negativeBar.chartOptions,
                          series: _vm.negativeBar.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: {
                    title:
                      "Bar with Negative Values(Mauritius population pyramid 2011)"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "350",
                          options: _vm.customDataLabelBar.chartOptions,
                          series: _vm.customDataLabelBar.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: {
                    title:
                      "Bar with Negative Values(Mauritius population pyramid 2011)"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "350",
                          options: _vm.patternedBar.chartOptions,
                          series: _vm.patternedBar.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/chart/apexBarChart.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/app/chart/apexBarChart.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apexBarChart_vue_vue_type_template_id_cf09bc6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apexBarChart.vue?vue&type=template&id=cf09bc6a& */ "./resources/js/views/app/chart/apexBarChart.vue?vue&type=template&id=cf09bc6a&");
/* harmony import */ var _apexBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexBarChart.vue?vue&type=script&lang=js& */ "./resources/js/views/app/chart/apexBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _apexBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _apexBarChart_vue_vue_type_template_id_cf09bc6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _apexBarChart_vue_vue_type_template_id_cf09bc6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/chart/apexBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/chart/apexBarChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexBarChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/chart/apexBarChart.vue?vue&type=template&id=cf09bc6a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexBarChart.vue?vue&type=template&id=cf09bc6a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexBarChart_vue_vue_type_template_id_cf09bc6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexBarChart.vue?vue&type=template&id=cf09bc6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexBarChart.vue?vue&type=template&id=cf09bc6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexBarChart_vue_vue_type_template_id_cf09bc6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexBarChart_vue_vue_type_template_id_cf09bc6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);