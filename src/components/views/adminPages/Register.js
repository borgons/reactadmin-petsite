import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmRegister from '../../forms/FrmRegister'

function Register() {

   const auth = useSelector((state) => state.auth.token);


   if(auth) return <Redirect to ="/appoint" />

   return (
      <div>
         <FrmRegister />      
      </div>
   )
}


export default Register
