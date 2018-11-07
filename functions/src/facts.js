"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFacts;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//"babel-core": "^6.26.3"
function getFacts() {
  return (0, _isomorphicFetch.default)('https://ssr-react.firebaseio.com/facts.json').then(function (res) {
    return res.json();
  });
}