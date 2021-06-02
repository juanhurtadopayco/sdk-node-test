'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTokenNoCvc = exports.CreateToken = undefined;

var _api = require('./api');

var CreateToken = exports.CreateToken = async function CreateToken(credit_card) {
  try {
    var epayco = await (0, _api.Epayco)();
    var token = epayco.token.create(credit_card);
    var result = await token;
    return result;
  } catch (error) {
    console.error('Error: ' + err);
  }
};

var CreateTokenNoCvc = exports.CreateTokenNoCvc = async function CreateTokenNoCvc(credit_card) {
  try {
    var token = _api.Epayco.token.createNoCvc(credit_card);
    var result = await token;
    return result;
  } catch (error) {
    console.error('Error: ' + err);
  }
};