'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

//llaves Juan Pablo H produccion
/* const apiKey = 'b3a73874cf3b69f9c8b80b737ebbaf8c'
const privateKey = '28de99de1a5e6f8633d8de40f5a3c54a' */

//llaves Juan Pablo H testing
/* const apiKey = 'af53f761453860472c77f85b59fccc9a'
const privateKey = 'd2d0a2dd307c44405d8c56355d3d293b' */

//Llaves Daniel testing
var apiKey = '2f48ea347518e2f96a6592f6a07ee4dd';
var privateKey = '1595e2cd4f3e9ee0ec81d5812a45d532';

//Llaves Alejo socio testing
/* const apiKey = '82b9d27c5b8466ec444115e71df6cd91'
const privateKey = '774b1c2d57792ebdb176908828da5028' */

var Epayco = exports.Epayco = require('epayco-node')({ //paquete node_modules
    //export  const Epayco = require('./local/epayco-node/lib/index')({ //paquete para pruebas locales
    //LLaves Daniel Quiroz
    apiKey: apiKey,
    privateKey: privateKey,
    lang: 'ES',
    test: true
});