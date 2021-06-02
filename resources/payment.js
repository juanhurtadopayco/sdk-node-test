//CUSTOMER
import {
  Epayco
} from './api'
export const CreatePayment = async (payment_info) => {
  try {
      console.log("pago",payment_info)
      const epayco = await Epayco("https://api.secure.payco.co")
      console.log(epayco)
      const payment = epayco.charge.create(payment_info)
      const result = await payment
      console.log(result)
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}