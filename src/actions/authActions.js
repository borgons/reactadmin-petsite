import {
   USER_LOADED, USER_LOADING, AUTH_ERROR,
   REGISTER_SUCCESS, REGISTER_FAIL,
   LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS 
} from './type'

import axios from 'axios'

axios.defaults.withCredentials = true



//Check token and load user
export const loadUser = () => (dispatch, getState) => {
   
   // USER LOADING
   dispatch ({ type: USER_LOADING });

   axios.get('http://localhost:8000/sanctum/csrf-cookie', tokenConfig(getState))
      .then(res =>
         dispatch({
            type: USER_LOADED, 
            payload: res.data
         })
      )
      .catch(() => {
         dispatch({
            type:AUTH_ERROR
         })
      })
}

//REGISTER USER
export const register = (frmRegData, 
   setErrorHandler, setSuccessHandler) => async dispatch => {
      //User Loading
      const config = {
         headers:{
            'Content-Type': 'application/json'
         }
      };

      try {
         const res = await axios.post('http://localhost:3000/api/register', frmRegData, config);
            
            dispatch({
               type: REGISTER_SUCCESS,
               payload: res.data
            });
            setSuccessHandler({
               hasSuccess: true,
               msg: 'Your are now already registered......'
            }); 
            
         } catch (err) {

            if(err.response.status === 422){
               dispatch({
                  type:REGISTER_FAIL,
                  payload: err.response.data.errors
               });
               setErrorHandler({
                  hasError: true,
                  msg: err.response.data.errors
               })
            } 
         }

   }

export const login = (frmLogInData, setErrorHandler, setLoginCred) => async dispatch => {
      //User Loading
      const config = {
         headers:{
            'Content-Type': 'application/json'
         }
      };

      axios.get('http://localhost:8000/sanctum/csrf-cookie').then((response) => {
         axios.post('http://localhost:3000/api/login', frmLogInData, config)
         .then(res => { 
               dispatch({
                  type:LOGIN_SUCCESS,
                  payload: res.data
               }); 
               setTimeout(() => {
                  window.location.href="/appoint"
               }, 3000);
            
         }).catch(err => {

            if(err.response.status === 422){
               dispatch({
                  type:LOGIN_FAIL,
                  payload: err.response.data.errors
               });
               setErrorHandler({
                  hasError: true,
                  msg: err.response.data.errors 
               })
               setTimeout(() => {
                  window.location.href="/"
               }, 3000);
            } 
            if(err.response.status === 401){
               dispatch({
                  type:LOGIN_FAIL,
                  payload: err.response.data
               });
               setLoginCred({
                  hasError: true,
                  loginMsg: err.response.data 
               })
            } 
         })
      })  
}
      

export const logout = async dispatch => {

   axios.get('http://localhost:8000/sanctum/csrf-cookie').then((response) => {
      axios.post('http://localhost:3000/api/logout')
      .then(res =>
         dispatch({
            type: LOGOUT_SUCCESS,
         })   
      )   
   })
   
}

   // 
//====SETUP CONFIG/ HEADERS AND TOKEN 
export const tokenConfig = getState => {

   //GET TOKEN FROM LOCALSTORAGE
   const token = getState().auth.token;

   //HEADERS
   const config = {
      headers:{
         'Content-Type': 'application/json'
      }
   }

   //If token, and to headers
   if(token){
      config.headers['x-auth-token'] = token;
   }

   return config
}

