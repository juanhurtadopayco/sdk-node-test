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
    CreateSubscription,
    GetSubscription,
    PaySubscription
} from './resources/subscriptions'
import {CreatePayment} from './resources/payment'


let number = [
    true,
    true,
    true,
    1,
    "a",
/*     "", */
    [],
    {}
]


let value = number.every((n) => {
    return n
})

console.log(value)

//Valores de prueba

//CREAR - CUSTOMER

let customerData = {
    name: "Alexander Payment Test",
    email: "userpaymentest04@paycotest.co",
    city: "Manizales",
    address: "Cr 4 # 55 36",
    phone: "3005234321",
    cell_phone: "3010000001"
}

let tokenCard = CreateToken(Aceptada)
tokenCard.then(async (result) => {
    console.log(result)
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
    /* var payment_info = {
        token_card: result.id,
        customer_id: customer.data.customerId,
        doc_type: "CC",
        doc_number: "1035851980",
        name: customerData.name,
        last_name: "Doe",
        email: customerData.email,
        bill: "OR-12345",
        description: "Test Payment",
        value: "1000",
        currency: "COP",
        dues: "12",
        //Extra params: These params are optional and can be used by the commerce
    }
    
    
    const createPayment = CreatePayment(payment_info) 
    createPayment.then((resultPayment) => {
        console.log("REF_PAYCO ",resultPayment.data.ref_payco)
        console.log("TOKEN:::" ,result.id)
        console.log("EMAIL:::" ,customerData.email)
    }).catch((err) => {
        
    }); */
})

//CREAR PLAN
//CREAR - PAGAR Suscripcion
/* const subscription_info = {
    id_plan: "30_Creditos",
    customer: "uGuZLNjRdu4s7B7bo",
    token_card: "wgsu8qcuy7yYW7yLj",
    doc_type: "CC",
    doc_number: "5234567"
}

const createdSubscription = CreateSubscription(subscription_info)
createdSubscription.then((result) => {
    console.log("|LOG:createdSubscription| ",result)
}).catch((err) => {
    
}); */
/* const paySubscription = PaySubscription(subscription_info) 
paySubscription.then((result) => {
    console.log("|LOG:paySubscription| ",result)
}).catch((err) => {
    
}); */


/* var payment_info = {
    token_card: "tbbbfGJ9wQNTE3YH3",
    customer_id: "xFvEe2kXffqxKZcCo",
    doc_type: "CC",
    doc_number: "1035851980",
    name: "John",
    last_name: "Doe",
    email: "example@email.com",
    bill: "OR-12344454",
    description: "Test Payment",
    value: "116000",
    currency: "COP",
    dues: "12",
    //Extra params: These params are optional and can be used by the commerce
}


const createPayment = CreatePayment(payment_info) 
createPayment.then((result) => {
    console.log("|LOG:CreatePayment| ",result)
}).catch((err) => {
    
}); */
