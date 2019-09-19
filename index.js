import {
    Aceptada,
    FondosInsuficientes,
    Fallida,
    Pendiente
} from './resources/cards'
import {
    CreateToken
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

//Valores de prueba

//CREAR - CUSTOMER
let customer_info = {
    name: "Usuario Payco 1",
    last_name: "Payco CO", //This parameter is optional
    email: "user011@paycotest.co",
    default: true,
    //Optional parameters: These parameters are important when validating the credit card transaction
    city: "Bogota",
    address: "Cr 4 # 55 36",
    phone: "3005234321",
    cell_phone: "3010000001"
}
//CREAR PLAN
//CREAR - PAGAR Suscripcion
const subscription_info = {
    id_plan: "20_Creditos",
    customer: "CqweRAeXLYYNesKvD",
    token_card: "AdMyKjNYq2wdCKPWb",
    doc_type: "CC",
    doc_number: "5234567"
}

/* 
const tokenCard = createToken(Aceptada)
tokenCard.then(async (result) => {
    customer_info.token_card = result.id
    const customer = await createCustomer(customer_info)
    console.log(customer);
})
createSubscription(subscription_info)
PaySubscription(subscription_info) */
GetSubscriptions()