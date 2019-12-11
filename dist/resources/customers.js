'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetCustomers = exports.CreateCustomer = undefined;

var _api = require('./api');

var CreateCustomer = exports.CreateCustomer = async function CreateCustomer(customer_info) {
    try {
        var customer = _api.Epayco.customers.create(customer_info);
        var result = await customer;
        return result;
    } catch (error) {
        console.error('Error: ' + err);
    }
}; //CUSTOMER
var GetCustomers = exports.GetCustomers = async function GetCustomers() {
    try {
        var customers = _api.Epayco.customers.list();
        var result = await customers;
        console.info(result);
    } catch (error) {
        console.error('Error: ' + err);
    }
};