"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  splashCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fefeff'
  },
  splashImg: {
    margin: 0,
    height: '40%',
    width: '100%'
  },
  logBody: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 30,
    paddingTop: 60,
    backgroundColor: '#fefeff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logLogo: {
    flex: 0.8,
    resizeMode: 'contain',
    height: '85%',
    width: '85%'
  },
  logWel: {
    letterSpacing: 7,
    fontSize: 20,
    paddingTop: 70
  },
  logImg: {},
  logFot: {
    flex: 0.3,
    alignItems: 'center',
    paddingTop: 50
  },
  butCus: {
    backgroundColor: '#242424',
    color: '#fefeff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 370,
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 5
  },
  butShop: {
    MarginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 370,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#242424'
  },
  textCus: {
    color: '#fefeff',
    fontSize: 18,
    fontWeight: '400'
  },
  textShop: {
    color: '#242424',
    fontSize: 18,
    fontWeight: 'bold'
  },
  logCon: {
    fontSize: 15,
    paddingBottom: 5
  },
  cusLoginBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cusLoginBox: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
    width: 300,
    elevation: 10,
    borderRadius: 30
  },
  cusLoginHeader: {
    flexDirection: 'row'
  },
  cusLogin: {
    marginTop: 15,
    marginRight: 20,
    borderWidth: 1,
    height: 45,
    width: 90,
    borderColor: '#fefeff',
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  cusSignup: {
    marginTop: 15,
    marginLeft: 20,
    borderWidth: 1,
    height: 45,
    width: 90,
    backgroundColor: '#fefeff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  cusInputField: {
    height: 130,
    width: 230,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cusEmail: {
    borderWidth: 2,
    height: 45,
    width: 240,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#fefeff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#242424'
  },
  cusPassword: {
    borderWidth: 2,
    height: 45,
    width: 240,
    backgroundColor: '#fefeff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#242424'
  },
  cusLogText: {
    color: '#fefeff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  cusSignText: {
    color: '#242424',
    fontSize: 17,
    fontWeight: 'bold'
  },
  cusLoginBut: {
    marginBottom: 20,
    borderWidth: 1,
    height: 45,
    width: 90,
    backgroundColor: '#fefeff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 10
  },
  cusLoginText: {
    color: '#242424',
    fontSize: 17,
    fontWeight: 'bold'
  },
  sellerLoginHeader: {
    marginTop: 20,
    color: '#000000',
    fontSize: 30,
    fontWeight: '600'
  },
  sellerLoginFooter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sellerFooterText: {
    flexDirection: 'row',
    marginBottom: 15
  },
  DHA: {
    fontSize: 15
  },
  C1T: {
    fontSize: 15,
    color: '#242424',
    fontWeight: '700'
  },
  SSBody: {
    flex: 1,
    backgroundColor: '#242424',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  SSBox: {
    height: 670,
    width: 390,
    backgroundColor: '#fefeff',
    borderTopLeftRadius: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10
  },
  SSHeader: {
    marginTop: 90,
    marginBottom: 40
  },
  SSHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  SSEmail: {
    borderWidth: 2,
    height: 45,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    marginVertical: 9,
    textAlign: 'center',
    marginTop: 20
  },
  SSPassword: {
    borderWidth: 2,
    height: 45,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    marginVertical: 9,
    textAlign: 'center',
    marginBottom: 10
  },
  SSShopCom: {
    marginVertical: 30
  },
  SSShopText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600'
  },
  SSShop: {
    borderWidth: 2,
    height: 45,
    width: 300,
    paddingHorizontal: 20,
    fontSize: 17,
    marginVertical: 9,
    textAlign: 'center',
    marginTop: 15,
    borderRadius: 10
  },
  SSFooter: {
    marginTop: 0
  },
  SSFooterText: {
    fontSize: 17,
    fontWeight: 600,
    color: '#000000'
  },
  SSFooterLink: {
    borderWidth: 2,
    height: 45,
    width: 300,
    paddingHorizontal: 20,
    fontSize: 17,
    marginVertical: 9,
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  SSRegister: {
    marginTop: 20,
    borderWidth: 1,
    height: 45,
    width: 90,
    borderColor: '#fefeff',
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 10
  },
  SSRegisterText: {
    color: '#fefeff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  Icon: {
    height: 200,
    width: 200
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#eeeeee'
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    width: 350,
    height: 50,
    backgroundColor: '#fefeff',
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 1,
    borderRadius: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingLeft: 20,
    elevation: 10,
    borderColor: '#242424'
  },
  searchInput: {
    flex: 0.98,
    backgroundColor: '#fefeff',
    paddingRight: 10,
    fontSize: 18
  },
  searchIcon: {
    color: '#242424'
  },
  itemsArea: {
    flex: 1,
    marginTop: 100,
    marginVertical: 10,
    marginHorizontal: 14,
    justifyContent: 'space-between'
  },
  itemContainer: {
    height: 180,
    width: 375,
    backgroundColor: '#ffffff',
    marginVertical: 7,
    borderWidth: 0,
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row'
  },
  shopImageContainer: {
    height: 180,
    width: 130,
    borderRadius: 15
  },
  shopImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  productDetails: {
    flex: 1,
    margin: 7,
    marginLeft: 10,
    marginRight: 15
  },
  HShopName: {},
  HHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  HPrice: {
    fontSize: 23,
    color: '#000000'
  },
  HProduct: {
    fontSize: 23,
    color: '#000000'
  },
  shopNameContainer: {
    marginTop: 5,
    flexDirection: 'row'
  },
  shopLabel: {
    color: '#000000',
    fontSize: 15,
    marginRight: 4
  },
  shopName: {
    fontSize: 15,
    fontWeight: '400',
    color: '#777777'
  },
  HFooter: {
    paddingTop: 17,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  CPBody: {
    backgroundColor: '	#999999',
    flex: 1,
    alignItems: 'center'
  },
  CPImageContainer: {
    height: 235,
    width: 280,
    marginTop: 20,
    marginHorizontal: 40,
    borderColor: '#fff',
    borderWidth: 7,
    elevation: 120,
    borderBottomWidth: 0
  },
  CPImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  CPLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginRight: 10
  },
  CPUserDetailContainer: {
    backgroundColor: '#fff',
    marginTop: 0,
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#fff',
    width: 280,
    elevation: 20,
    borderTopWidth: 5
  },
  CPUserName: {
    fontSize: 23,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Roboto'
  },
  CPLocationIcon: {
    color: '#000'
  },
  CPLocation: {
    fontFamily: 'sans-serif-thin',
    color: '#777777',
    fontWeight: 'bold'
  },
  CPIconContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  CPIcons: {
    backgroundColor: '#000',
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70 / 2,
    borderWidth: 0,
    elevation: 10,
    marginHorizontal: 20
  },
  CPIcon: {
    color: '#fff',
    marginBottom: 4
  },
  CPIconText: {
    // fontFamily: 'sans-serif-thin',
    // fontWeight: 'bold',
    color: '#fff',
    fontSize: 11,
    textAlign: 'center'
  },
  CPOptionsContainer: {
    marginTop: 40
  },
  CPOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 55,
    width: 300,
    marginVertical: 5,
    elevation: 10
  },
  CPOptionsText: {
    fontSize: 20,
    color: '#000'
  },
  CPOptionsIcon: {
    color: '#000',
    marginRight: 10
  }
});

exports.styles = styles;