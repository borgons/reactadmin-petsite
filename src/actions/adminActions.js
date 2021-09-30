import axios from 'axios'

import { ADD_VAC, GET_STATUS } from './type'

export const addVac = (frmVacData, setErrorHandler, type) => async dispatch => {
   
   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   };
   
   
   axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
      axios.post('http://localhost:3000/api/vaccinate', frmVacData, type, config)

      .then(res => {

         dispatch({
            type:ADD_VAC, 
            payload:res.data,
         });

      }).catch(err => {

         if(err.response.status === 422){
            dispatch({
               type: GET_STATUS,
               payload: err.response.data.errors
            });
            setErrorHandler({
               hasError: true,
               msg: err.response.data.errors
            });
         }

      })
   })

};
