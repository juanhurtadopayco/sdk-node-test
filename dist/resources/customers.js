"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCustomers = exports.CreateCustomer = undefined;

var _api = require("./api");

var CreateCustomer = exports.CreateCustomer = async function CreateCustomer(customer_info) {
  try {
    var epayco = await (0, _api.Epayco)();
    var customer = epayco.customers.create(customer_info);
    var result = await customer;
    return result;
  } catch (error) {
    console.error("Error: " + err);
  }
}; //CUSTOMER
var GetCustomers = exports.GetCustomers = async function GetCustomers(id) {
  try {

    _api.Epayco.customers.get(id).then(function (customer) {
      console.log(customer.data.cards);
    }).catch(function (err) {
      console.log("err: " + err);
    });

    /* const customers = Epayco.customers.list()
    const result = await customers
    console.info(result) */
  } catch (error) {
    console.error("Error: " + error);
  }
};