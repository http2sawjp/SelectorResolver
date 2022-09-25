"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectorResolver = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SelectorResolver = /*#__PURE__*/function () {
  function SelectorResolver(intervalRepeatMax, intervalMarginMilSec) {
    _classCallCheck(this, SelectorResolver);

    var _ref = [intervalRepeatMax, intervalMarginMilSec];
    this.intervalRepeatMax = _ref[0];
    this.intervalMarginMilSec = _ref[1];
  }

  _createClass(SelectorResolver, [{
    key: "doResolveByCond",
    value: function doResolveByCond(selector, resolveCond) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (!resolveCond) {
          reject(new Error("resolveCond is undefined."));
        }

        if (!(_typeof(resolveCond) === _typeof(function () {}))) {
          reject(new Error("resolveCond is not a function."));
        }

        var elem = null,
            intervalCnt = 0,
            interval = setInterval(function () {
          intervalCnt++;

          if (intervalCnt > _this.intervalRepeatMax) {
            clearInterval(interval);
            reject(new Error("reached interval max. selector => \"".concat(selector, "\".")));
          }

          elem = document.querySelector(selector);

          if (resolveCond(elem)) {
            clearInterval(interval);
            resolve({
              elem: elem,
              selector: selector,
              intervalCnt: intervalCnt
            });
          }
        }, _this.intervalMarginMilSec);
      });
    }
  }]);

  return SelectorResolver;
}();

exports.SelectorResolver = SelectorResolver;