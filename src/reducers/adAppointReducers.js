import { ADD_VAC } from '../actions/type';

const initialState= {
   vaccines:[],
   loading:false
   
};

export default function adAppoint(state = initialState, action){

   switch (action.type) {
      case ADD_VAC:
         return{
            ...state,
            vaccines:action.payload,
            loading:false
         };
      default:
         return state;
   }


}
