import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmAppointments from '../../forms/FrmAppointments.'

function Appointments() {

   const auth = useSelector((state) => state.auth.token);

   if (!auth) return <Redirect to ="/" />
   return (
      <Fragment>
         <FrmAppointments />
      </Fragment>
   )
}

export default Appointments
