//CUSTOMER
import {
  Epayco
} from './api'
export const CreateCustomer = async (customer_info) => {
  try {
      const customer = Epayco.customers.create(customer_info)
      const result = await customer
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}
export  const GetCustomers = async () => {
  try {
      const customers = Epayco.customers.list()
      const result = await customers
      console.info(result)
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}