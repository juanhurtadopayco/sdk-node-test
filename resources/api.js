const apiKey = '2f48ea347518e2f96a6592f6a07ee4dd'
const privateKey = '1595e2cd4f3e9ee0ec81d5812a45d532'
export const Epayco = require('epayco-node')({ //paquete node_modules
//export  const Epayco = require('./local/epayco-node/lib/index')({ //paquete para pruebas locales
    //LLaves Daniel Quiroz
    apiKey,
    privateKey,
    lang: 'ES',
    test: true
})