'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = document.getElementById('test');
var p = new _app2.default();
p.grow();
test.innerHTML = p.getAge();