"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CreateToken = exports.CreateToken = async function CreateToken(credit_card) {
    try {
        var token = epayco.token.create(credit_card);
        var result = await token;
        return result;
    } catch (error) {
        console.error("Error: " + err);
    }
};