"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/App"));

var _facts = _interopRequireDefault(require("./src/facts"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var app = (0, _express.default)(); //const index = fs.readFileSync(__dirname + '/index.html', 'utf-8');

app.get('**', function (req, res) {
  (0, _facts.default)().then(function (data) {
    var html = (0, _server.renderToString)(_react.default.createElement(_App.default, {
      facts: data
    })); //const finalHtml = index.replace('<!--APP-->', html);

    res.set('Cache-Control', 'public, max-age=600,s-maxage=1200');
    res.send(html);
  });
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;