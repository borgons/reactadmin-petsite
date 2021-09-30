import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmVaccine from '../../forms/FrmVaccination'

function Vaccinations() {

   const auth = useSelector((state) => state.auth.token);

   if (!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmVaccine />
      </Fragment>
   )
}

export default Vaccinations
