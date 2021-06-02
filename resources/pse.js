import {
  Epayco
} from './api'
export const PsePayment = async (payment_info, environment, commerceType) => {
  try {
      const epayco = await Epayco(environment, commerceType)
      const payment = epayco.bank.create(payment_info)
      const result = await payment
      
      return result
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}

export const PseGet = async (ticketId, environment, commerceType) => {
  try {
      const epayco = await Epayco(environment, commerceType)
      const payment = epayco.bank.get(ticketId)
      const result = await payment
      
      return result
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}