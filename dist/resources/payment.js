"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreatePayment = undefined;

var _api = require("./api");

var CreatePayment = exports.CreatePayment = async function CreatePayment(payment_info) {
    try {
        console.log("pago", payment_info);
        var epayco = await (0, _api.Epayco)("https://api.secure.payco.co");
        console.log(epayco);
        var payment = epayco.charge.create(payment_info);
        var result = await payment;
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error: " + err);
    }
}; //CUSTOMER