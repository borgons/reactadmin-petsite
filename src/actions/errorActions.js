import { GET_STATUS } from './type'

//RETURN ERRORS
export const returnErrors = (msg = null) => {
   return {
      type: GET_STATUS,
      payload:{msg}
   }
}

