import { GET_STATUS } from '../actions/type';

const initialState = {
   msg:{}
}

export default function errRed(state = initialState, action){
   
   switch (action.type) {
      case GET_STATUS:
         return {
            msg: action.payload.errors
         }
      default:
         return state;
   }
}