import {
  Epayco
} from './api'

export const CreateSubscription = async (subscription_info) => {
  try {
      const created_subscription = Epayco.subscriptions.create(subscription_info)
      const result = await created_subscription
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}
export const GetSubscriptions = async () => {
  try {
      const subscriptions = Epayco.subscriptions.list()
      const result = await subscriptions
      console.info(result)
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}

export const PaySubscription = async (subscriptionInfo) => {
  try {
      const payment = Epayco.subscriptions.charge(subscriptionInfo)
      const result = await payment
      console.info(result)
  } catch (error) {
      console.error(`Error: ${error}`);
  }
}