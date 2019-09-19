import {
  Epayco
} from './api'
export const CreateToken = async (credit_card) => {
  try {
      const token = Epayco.token.create(credit_card)
      const result = await token
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}