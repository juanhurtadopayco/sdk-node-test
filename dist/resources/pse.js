'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PseGet = exports.PsePayment = undefined;

var _api = require('./api');

var PsePayment = exports.PsePayment = async function PsePayment(payment_info, environment, commerceType) {
    try {
        var epayco = await (0, _api.Epayco)(environment, commerceType);
        var payment = epayco.bank.create(payment_info);
        var result = await payment;

        return result;
    } catch (error) {
        console.error('Error: ' + error);
    }
};

var PseGet = exports.PseGet = async function PseGet(ticketId, environment, commerceType) {
    try {
        var epayco = await (0, _api.Epayco)(environment, commerceType);
        var payment = epayco.bank.get(ticketId);
        var result = await payment;

        return result;
    } catch (error) {
        console.error('Error: ' + error);
    }
};