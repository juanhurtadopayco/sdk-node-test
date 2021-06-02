//CUSTOMER
import {
  Epayco
} from './api'
export const CreateCustomer = async (customer_info) => {
  try {
    const epayco = await Epayco()
      const customer = epayco.customers.create(customer_info)
      const result = await customer
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}
export  const GetCustomers = async (id) => {
  try {

    Epayco.customers.get(id)
    .then(function(customer) {
        console.log(customer.data.cards);
    })
    .catch(function(err) {
        console.log("err: " + err);
    });

      /* const customers = Epayco.customers.list()
      const result = await customers
      console.info(result) */
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}