//CUSTOMER
import {
  Epayco
} from './api'
export const CreatePlan = async (urlApi,payment_info) => {
  try {
    const epayco = await Epayco(urlApi)
      const plan = epayco.plans.create(payment_info)
      const result = await plan
      return result  
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}

