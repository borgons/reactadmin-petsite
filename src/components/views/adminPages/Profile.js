import React, {Fragment} from 'react'
import { Redirect } from  'react-router-dom'
import { useSelector } from 'react-redux'

import FrmProfile from '../../forms/FrmProfile'

function Profile() {

   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmProfile />
      </Fragment>
   )
}



export default Profile
