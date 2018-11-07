"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  var facts = props.facts.map(function (fact, i) {
    return _react.default.createElement("li", {
      key: i
    }, fact.text);
  });
  return _react.default.createElement("ul", null, facts);
}

var _default = App;
exports.default = _default;