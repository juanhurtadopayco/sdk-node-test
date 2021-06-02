import {
    Aceptada,
    FondosInsuficientes,
    Fallida,
    Pendiente,
    AceptadaNoCvc,
    PendienteNoCvc
} from './resources/cards'
import {
    CreateToken,
    CreateTokenNoCvc
} from './resources/token'
import {
    CreateCustomer,
    GetCustomers
} from './resources/customers'
import {
    CreatePlan
} from './resources/plans'
import {
    CreateSubscription,
    GetSubscription,
    PaySubscription
} from './resources/subscriptions'
import {CreatePayment} from './resources/payment'
import {PsePayment} from './resources/pse'

import {prompt}  from 'enquirer'


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

const env = process.argv.slice(2)[0];


/*
let pse_info = {
    bank: "1077",
    description: "PSE Validacion Item 1",
    value: "6000",
    tax: "0",
    tax_base: "0",
    currency: "COP",
    type_person: "0",
    doc_type: "CC",
    doc_number: "1026153220",
    name: "Manuela",
    last_name: "Mesa Arroyave",
    email: "juanhurtado.codigoatomico@gmail.com",
    country: "CO",
    cell_phone: "3195339990",
    ip:"192.168.1.8", 
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
    
}

PsePayment(pse_info, "testing", "agregador").then((r) => {
    console.log(r);
})
*/


//CREACION DE TOKEN Y CUSTOMER
/*
const timeStamp = Math.floor(Date.now() / 1000);
let customerData = {
    name: `Epayco test Customer ${timeStamp.toString()}`,
    email: `juanchito01${timeStamp.toString()}@yopmail.com`,
    city: "Medellin",
    address: "Cr 4 # 55 36",
    phone: timeStamp.toString(),
    cell_phone: timeStamp.toString()
}
let tokenCard = CreateToken(Aceptada)
tokenCard.then(async (result) => {
    let customer_info = {
        token_card : result.id,
        name: customerData.name,
        email: customerData.email,
        default: true,
        //Optional parameters: These parameters are important when validating the credit card transaction
        city: customerData.city,
        address: customerData.address,
        phone: customerData.phone,
        cell_phone: customerData.cell_phone
    }
    let customer = await CreateCustomer(customer_info)
    console.log(customer)
})

*/

/*
const payment_info = {
    token_card: "AeDrbjhjKovkLG9Mt",
    customer_id: "T2amsSFukgok95Nx6",
    // token_card: "fY5Y4bJED4akLCDkR", //produccion sergio
    // customer_id: "yji6WwoTtfr4SwEXf",
    doc_type: "CC",
    doc_number: "1026150111",
    name: "Epayco",
    last_name: "test",
    email: "daniel.quiroz@payco.co",
    bill: "OR-12344454xxxtest",
    description: "Test Payment",
    value: "116000",
    currency: "COP",
    dues: "12",
    extras: {
        extra4: "aaa",
        extra5: "ccc",
        extra6: "vvv"
    }
    //Extra params: These params are optional and can be used by the commerce
}
const createPayment = CreatePayment(payment_info)
createPayment.then((result) => {
    console.log("|LOG:CreatePayment| ",result)
}).catch((err) => {

});*/

/*switch (env) {
    case 'dev':
        //CREACION DE TOKEN Y CUSTOMER
        const timeStamp = Math.floor(Date.now() / 1000);
        let customerData = {
            name: `Epayco test Customer ${timeStamp.toString()}`,
            email: `userpagodefault@epaycotest.co`,
            city: "Medellin",
            address: "Cr 4 # 55 36",
            phone: timeStamp.toString(),
            cell_phone: timeStamp.toString()
        }
        let tokenCard = CreateToken(devEnpoint,Pendiente)
        tokenCard.then(async (result) => {
            let customer_info = {
                token_card : result.id,
                name: customerData.name,
                email: customerData.email,
                default: true,
                //Optional parameters: These parameters are important when validating the credit card transaction
                city: customerData.city,
                address: customerData.address,
                phone: customerData.phone,
                cell_phone: customerData.cell_phone
            }        
            let customer = await CreateCustomer(devEnpoint,customer_info)
            console.log(customer)    
        })

        //CREACION DE PLAN
        // const plan_info = {
        //     id_plan: "nourlconfirmacionplan0",
        //     name: "No url de confirmacion",
        //     description: "Plan sin url de confirmacion",
        //     amount: 30000,
        //     currency: "cop",
        //     interval: "month",
        //     interval_count: 1,
        //     trial_days: 0
        // }

        // const plan_info2 = {
        //     id_plan: "siurlconfirmacionplan0",
        //     name: "Si url de confirmacion",
        //     description: "Plan con url de confirmacion",
        //     amount: 30000,
        //     currency: "cop",
        //     interval: "month",
        //     interval_count: 1,
        //     trial_days: 0
        // }
                
        // const createdPlan = CreatePlan(devEnpoint,plan_info)
        // createdPlan.then((result) => {
        //     console.log("|LOG:Plan| ",result)
        // }).catch((err) => {});

        // const createdPlan2 = CreatePlan(devEnpoint,plan_info2)
        // createdPlan2.then((result) => {
        //     console.log("|LOG:Plan| ",result)
        // }).catch((err) => { });

        //CREAR SUSCRIPCION
       /!*  const subscription_info = {
            id_plan: "nourlconfirmacionplan0",
            customer:"WTcGkjfDqi75PKiSo",
            token_card: "FHZGp5zF26froFuyR",
           /!*  customer:"yji6WwoTtfr4SwEXf", //produccion sergio
            token_card: "fY5Y4bJED4akLCDkR",
            doc_type: "CC",
            doc_number: "1026154883",
            //url_confirmation: "https://ev1host.net/confirmation/conection.php"
        } *!/
        
        // const createdSubscription = CreateSubscription(devEnpoint,subscription_info)
        // createdSubscription.then((result) => {
        //     console.log("|LOG:createdSubscription| ",result)
        // }).catch((err) => {});

        //PAGAR SUSCRIPCION        
        /!* const paySubscription = PaySubscription(devEnpoint , subscription_info)
        paySubscription.then((result) => {
            console.log("|LOG:paySubscription| ",result)
        }).catch((err) => {}); 

        const subscription_info2 = {
            id_plan: "siurlconfirmacionplan0",
            customer:"WTcGkjfDqi75PKiSo",
            token_card: "FHZGp5zF26froFuyR",
           /!*  customer:"yji6WwoTtfr4SwEXf", //produccion sergio
            token_card: "fY5Y4bJED4akLCDkR",
            doc_type: "CC",
            doc_number: "1026154883",
            url_confirmation: "https://ev1host.net/confirmation/conection.php"
        } *!/
        
        // const createdSubscription2 = CreateSubscription(devEnpoint,subscription_info2)
        // createdSubscription2.then((result) => {
        //     console.log("|LOG:createdSubscription| ",result)
        // }).catch((err) => {});

        //PAGAR SUSCRIPCION        
        // const paySubscription2 = PaySubscription(devEnpoint , subscription_info2)  
        // paySubscription2.then((result) => {
        //     console.log("|LOG:paySubscription| ",result)
        // }).catch((err) => {}); 

        


        break;
    case 'pre':
    
        break;
    case 'prod':

        break;
}*/

//CREAR - CUSTOMER

//GetCustomers("Y8gj6bwGkuLXoByHh")

/* const timeStamp = Math.floor(Date.now() / 1000);
console.log('timeStamp::: ',  timeStamp.toString());


let customerData = {
    name: `Epayco test Customer ${timeStamp.toString()}`,
    email: `userepayco${timeStamp.toString()}@epaycotest.co`,
    city: "Medellin",
    address: "Cr 4 # 55 36",
    phone: timeStamp.toString(),
    cell_phone: timeStamp.toString()
}
let tokenCard = CreateToken(Aceptada)
tokenCard.then(async (result) => {
    let customer_info = {
        token_card : result.id,
        name: customerData.name,
        email: customerData.email,
        default: true,
        //Optional parameters: These parameters are important when validating the credit card transaction
        city: customerData.city,
        address: customerData.address,
        phone: customerData.phone,
        cell_phone: customerData.cell_phone
    }        
    let customer = await CreateCustomer(customer_info)
    console.log(customer)    
 }) */
//CREAR - PAGAR Suscripcion

/*  */



/* const subscription_info = {
    id_plan: "Plan_de_prueba3",
    customer: "ucF3evegKi8uvp38a",
    token_card: "tQ2nbCwcoeodmBY5y",
    doc_type: "CC",
    doc_number: "5234567"
}

const paySubscription = PaySubscription(subscription_info) 
paySubscription.then((result) => {
    console.log("|LOG:paySubscription| ",result)
}).catch((err) => {
    
}); */


/*const payment_info = {
    token_card: "XQDYax6C66kWaxoF9", 
    customer_id: "qKkaJ3oXEv4L4S5cD",
    // token_card: "fY5Y4bJED4akLCDkR", //produccion sergio
    // customer_id: "yji6WwoTtfr4SwEXf",
    doc_type: "CC",
    doc_number: "1035851980",
    name: "Epayco",
    last_name: "test",
    email: "userepayco1580422291@epaycotest.co",
    bill: "OR-12344454",
    description: "Test Payment",
    value: "116000",
    currency: "COP",
    dues: "12",
    extras: {
        extra4: "aaa",
        extra5: "ccc",
        extra6: "vvv"
    }
    //Extra params: These params are optional and can be used by the commerce
}*/

/* 
const createPayment = CreatePayment(payment_info) 
createPayment.then((result) => {
    console.log("|LOG:CreatePayment| ",result)
}).catch((err) => {
    
}); */
