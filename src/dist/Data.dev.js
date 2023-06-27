"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Data = [{
  Product: 'pen',
  Price: 15,
  Stock: 10,
  Image: require('./Images/ShopPics/StationeryShop.jpg'),
  ShopName: 'Booker',
  Location: 'Old bus stand,Vellore',
  Contact: '9829393739',
  Update: '10/07/23'
}, {
  Product: 'Pencil',
  Price: 10,
  Stock: 23,
  ShopName: 'AllMart',
  Image: require('./Images/ShopPics/FamilyMart.jpg'),
  Location: 'VIT,Vellore',
  Contact: '9238156932',
  Update: '19/07/23'
}, {
  Product: 'Eraser',
  Price: 5,
  Stock: 15,
  Image: require('./Images/ShopPics/ToyShop.jpg'),
  ShopName: 'Toy Shop',
  Location: 'katpadi,Vellore',
  Contact: '8745726763',
  Update: '15/09/23'
}, {
  Product: 'xxx',
  price: 90,
  Stock: 30,
  ShopName: 'HepMall',
  Image: require('./Images/ShopPics/ToyShop.jpg'),
  Location: 'New bus stand, Vellore',
  Contact: '7894629138',
  Update: '12/03/23'
}];
var _default = Data;
exports["default"] = _default;