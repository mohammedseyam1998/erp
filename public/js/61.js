(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatable/table.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/datatable/table.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/axios */ "./resources/js/util/axios.js");
/* harmony import */ var _components_datatable_Datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/datatable/Datatable */ "./resources/js/components/datatable/Datatable.vue");
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
    title: "Countries list"
  },
  components: {
    datatable: _components_datatable_Datatable__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sortKey: '',
      // columns: [
      //     {width: '10%', label: '#', name: 'id'},
      //     {width: '25%', label: 'Name', name: 'name'},
      //     {width: '20%', label: 'Nationality', name: 'nationality'},
      //     {width: '15%', label: 'Currency', name: 'currency'},
      //     {width: '15%', label: 'Mobile Prefix', name: 'mobile_prefix'},
      //     {width: '15%', label: 'Flag', name: 'flag_url'},
      //     {width: '15%', label: 'Status', name: 'is_active', class: 'vgt-left-align text-right'},
      //     {width: '15%', label: 'Actions', name: 'actions', class: 'vgt-left-align text-right'}
      // ],
      source: ''
    };
  },
  created: function created() {
    this.source = _util_axios__WEBPACK_IMPORTED_MODULE_0__["routes"].settings.countries.fetch();
  },
  methods: {
    sortBy: function sortBy(key) {
      this.sortKey = key;
    },
    changeStatus: function changeStatus(item) {
      var self = this;
      Object(_util_axios__WEBPACK_IMPORTED_MODULE_0__["makeRequest"])('PATCH', _util_axios__WEBPACK_IMPORTED_MODULE_0__["routes"].settings.countries.activate(item.id), {
        is_active: !item.is_active
      }, function (response) {
        if (response.data.status === 200) {
          self.$refs.datatable.fetch(self.$refs.datatable.pagination.currentPage);
        }
      }, function (xhr) {});
    },
    deleteCountry: function deleteCountry(item) {
      var self = this;
      Object(_util_axios__WEBPACK_IMPORTED_MODULE_0__["makeRequest"])('DELETE', _util_axios__WEBPACK_IMPORTED_MODULE_0__["routes"].settings.countries["delete"](item.id), {
        is_active: !item.is_active
      }, function (response) {
        if (response.data.status === 200) {
          self.$refs.datatable.fetch(self.$refs.datatable.pagination.currentPage);
          self.$bvToast.toast(self.$t('deleted_successfully'), {
            title: '',
            variant: '',
            solid: true
          });
        }
      }, function (xhr) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatable/table.vue?vue&type=template&id=a3ca4674&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/datatable/table.vue?vue&type=template&id=a3ca4674& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", {
        attrs: { page: _vm.$t("countries"), folder: _vm.$t("settings.show") }
      }),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "wrapper" },
        [
          _c("g-list", {
            attrs: {
              resource: "country",
              endPoint: _vm.route("settings.countries.fetch")
            }
          })
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

/***/ "./resources/js/views/app/datatable/table.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/datatable/table.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_a3ca4674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=a3ca4674& */ "./resources/js/views/app/datatable/table.vue?vue&type=template&id=a3ca4674&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/js/views/app/datatable/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_a3ca4674___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_a3ca4674___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/datatable/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/datatable/table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/datatable/table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatable/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/datatable/table.vue?vue&type=template&id=a3ca4674&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/datatable/table.vue?vue&type=template&id=a3ca4674& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_a3ca4674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=a3ca4674& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatable/table.vue?vue&type=template&id=a3ca4674&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_a3ca4674___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_a3ca4674___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);