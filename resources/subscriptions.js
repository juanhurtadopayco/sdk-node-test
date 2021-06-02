import {
  Epayco
} from './api'

export const CreateSubscription = async (urlApi,subscription_info) => {
  try {
      const epayco = await Epayco(urlApi)
      const created_subscription = epayco.subscriptions.create(subscription_info)
      const result = await created_subscription
      return result
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}
export const GetSubscriptions = async (urlApi) => {
  try {
      const epayco = await Epayco(urlApi)
      const subscriptions = epayco.subscriptions.list()
      const result = await subscriptions
      console.info(result)
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}

export const PaySubscription = async (urlApi,subscriptionInfo) => {
  try {
      const epayco = await Epayco(urlApi)
      const payment = epayco.subscriptions.charge(subscriptionInfo)
      
      const result = await payment
      console.info(result)
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}