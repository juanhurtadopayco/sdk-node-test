"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//CUSTOMER
var CreateCustomer = exports.CreateCustomer = async function CreateCustomer(customer_info) {
    try {
        var customer = epayco.customers.create(customer_info);
        var result = await customer;
        return result;
    } catch (error) {
        console.error("Error: " + err);
    }
};
var GetCustomers = exports.GetCustomers = async function GetCustomers() {
    try {
        var customers = epayco.customers.list();
        var result = await customers;
        console.info(result);
    } catch (error) {
        console.error("Error: " + err);
    }
};