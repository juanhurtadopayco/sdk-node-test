import {
  Epayco
} from './api'
export const CreateToken = async (credit_card) => {
  try {
    const epayco = await Epayco()
      const token = epayco.token.create(credit_card)
      const result = await token
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}

export const CreateTokenNoCvc = async (credit_card) => {
  try {
      const token = Epayco.token.createNoCvc(credit_card)
      const result = await token
      return result
  } catch (error) {
      console.error(`Error: ${err}`);
  }
}