import { combineReducers } from 'redux'
import authReducers from './authReducers'
import adAppointReducers from './adAppointReducers'
import errorReducers from './errorReducers'

export default combineReducers({
   auth:authReducers,
   appoints:adAppointReducers,
   error:errorReducers
})