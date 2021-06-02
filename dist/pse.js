'use strict';

var _pse = require('./resources/pse');

var _enquirer = require('enquirer');

/*const response =  prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?'
    }
]);

response.then(response => console.log(response));*/

var action = process.argv.slice(2)[0];

var pse_info = {
    //bank: "1077", //Banka
    //bank: "1022", //Banco union
    bank: "1007", //Bancolombia
    //bank: "",
    description: "Pago PSE SDK",
    value: "2",
    tax: "0",
    tax_base: "0",
    currency: "COP",
    type_person: "0",
    doc_type: "CC",
    doc_number: "1026150220",
    name: "Juan Pablo",
    last_name: "Hurtado",
    country: "CO",
    cell_phone: "3113627287",
    ip: "192.168.1.8",
    url_response: "http://codigoatomico.com/payments/produccion/estado_pse/response.php",
    url_confirmation: "http://codigoatomico.com/payments/produccion/estado_pse/confirmation.php",
    method_confirmation: "GET",

    //Extra params: These params are optional and can be used by the commerce
    extra1: "",
    extra2: "",
    extra3: "",
    extra4: "",
    extra5: "",
    extra6: ""

};

console.log(action);
if (action === "create") {
    (0, _pse.PsePayment)(pse_info, "production", "gateway").then(function (r) {
        console.log(r);

        if (r.success) {
            console.log(r);
        } else {

            console.log(r.data.errores);
        }
    });
} else {
    (0, _pse.PseGet)("250345801622219927", "preprod", "agregador").then(function (r) {
        console.log(r);
    });
}