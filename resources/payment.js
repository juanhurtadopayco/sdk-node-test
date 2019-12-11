//CUSTOMER
import {
  Epayco
} from './api'
export const CreatePayment = async (payment_info) => {
  try {
      const payment = Epayco.charge.create(payment_info)
      const result = await payment
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}