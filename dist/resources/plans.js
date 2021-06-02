'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePlan = undefined;

var _api = require('./api');

var CreatePlan = exports.CreatePlan = async function CreatePlan(urlApi, payment_info) {
  try {
    var epayco = await (0, _api.Epayco)(urlApi);
    var plan = epayco.plans.create(payment_info);
    var result = await plan;
    return result;
  } catch (error) {
    console.error('Error: ' + err);
  }
}; //CUSTOMER