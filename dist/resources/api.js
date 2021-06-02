'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//Llaves Daniel testing
//const apiKey = '2f48ea347518e2f96a6592f6a07ee4dd' 
//const privateKey = '1595e2cd4f3e9ee0ec81d5812a45d532'


//Llaves Alejo socio testing
/* const apiKey = '82b9d27c5b8466ec444115e71df6cd91'
const privateKey = '774b1c2d57792ebdb176908828da5028' */

//llaves Juan Pablo H produccion
//const apiKey = 'b3a73874cf3b69f9c8b80b737ebbaf8c'
//const privateKey = '28de99de1a5e6f8633d8de40f5a3c54a'

//Preproduccion
//const apiKey = 'a9cad5b6911b2406e84d49a239b93d0d'
//const privateKey = '13880e0dd3d9e5a52aaa621b7b795b14'


//Llaves Sergio Rios produccion
/* const apiKey = '2736a0238ec1884b77f19619e2d6268b'
const privateKey = '041dcd5580c5e14ca73d9ab3b82abea1' */

var Epayco = exports.Epayco = async function Epayco(environment, commerceType) {
    try {
        var apiKey = '';
        var privateKey = '';

        switch (environment) {
            case "testing":

                if (commerceType === "gateway") {
                    //Llaves Colombia redes Testing
                    apiKey = '08d5f52606fafda0e1dd0a64147e90ca';
                    privateKey = 'd91338e0117867787faf76b37ab3566a';
                } else {
                    //llaves Juan Pablo H testing
                    apiKey = 'af53f761453860472c77f85b59fccc9a';
                    privateKey = 'd2d0a2dd307c44405d8c56355d3d293b';
                }

                break;

            case "preprod":

                if (commerceType === "gateway") {
                    //Llaves Colombia redes preprod
                    // apiKey = '08d5f52606fafda0e1dd0a64147e90ca'
                    // privateKey = 'd91338e0117867787faf76b37ab3566a'

                    //Movistar
                    apiKey = '479f29cc87cb26bdea89e873b5287784';
                    privateKey = 'abb4162a24c107b30fa8d21d331838c3';
                } else {
                    //llaves Juan Pablo H prepod
                    apiKey = 'e9ce4315e9d36cba7a45aee9d35a06a0';
                    privateKey = '13f43c32a177485ac0e089897477b198';
                }

                break;
            case "production":

                if (commerceType === "gateway") {
                    //Llaves Colombia redes preprod
                    //apiKey = '08d5f52606fafda0e1dd0a64147e90ca'
                    //privateKey = 'd91338e0117867787faf76b37ab3566a'

                    apiKey = '479f29cc87cb26bdea89e873b5287784';
                    privateKey = 'abb4162a24c107b30fa8d21d331838c3';
                } else {
                    //llaves Juan Pablo H prepod
                    apiKey = 'b3a73874cf3b69f9c8b80b737ebbaf8c';
                    privateKey = '28de99de1a5e6f8633d8de40f5a3c54a';
                }

                break;

            default:
                break;
        }

        return require('epayco-node')({ //paquete node_modules
            //export  const Epayco = require('./local/epayco-node/lib/index')({ //paquete para pruebas locales
            apiKey: apiKey,
            privateKey: privateKey,
            lang: 'ES',
            test: false
        });
    } catch (error) {
        console.error('Error: ' + error);
    }
};