'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreatePayment = undefined;

var _api = require('./api');

var CreatePayment = exports.CreatePayment = async function CreatePayment(payment_info) {
    try {
        var payment = _api.Epayco.charge.create(payment_info);
        var result = await payment;
        return result;
    } catch (error) {
        console.error('Error: ' + err);
    }
}; //CUSTOMER