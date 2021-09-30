import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { register } from '../../actions/authActions'
import RegisterErrMsgs from '../messages/RegisterErrMsg'
import RegisterSucMsgs from '../messages/RegisterSuccessMsg'

import { Link } from 'react-router-dom'

const FrmRegister = ({ register }) => {

   const [frmRegData, setFrmRegData] = useState(
      {
         userID:"",
         userFirst:"",
         userLast:"",
         userPosition:"",
         userPassword:"",
         userPassword_confirmation:""
      },
      []
   );

   const [errorHandler, setErrorHandler] = useState ({
      hasError:false, 
      msg:""
   })

   const [successHandler, setSuccessHandler] = useState({
      hasSuccess:false, 
      msg:""
   });


   const {
      userID,
      userFirst,
      userLast,
      userPosition,
      userPassword,
      userPassword_confirmation
   } = frmRegData;

   const onChange = e => {
      setFrmRegData({ ...frmRegData, [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault();
      register(frmRegData,setErrorHandler,setSuccessHandler);

      setFrmRegData ({
         userID:"",
         userFirst:"",
         userLast:"",
         userPosition:"",
         userPassword:"",
         userPassword_confirmation:""
      })
   }

   return (
      <Fragment>  
         <RegisterErrMsgs errorHandler={errorHandler}/>
         <RegisterSucMsgs successHandler={successHandler}/>
            <div className="container">
            <div className="columns">
               <div className="column is-desktop">
                  <div className="column is-5 is-offset-one-half mx-auto mt-6">
                     <div className="box" style={getColorBox}>

                        <div className="content">
                           <div className="has-text-centered">
                              <h5 style={link}>Please Register Your Account</h5>
                           </div>
                        </div>


                     <form onSubmit={onSubmit}>
                        <div className="field">
                           <label className="label">ID Number</label>
                           <div className="control">
                              <input 
                                 className="input" 
                                 name="userID"
                                 type="number" 
                                 value={userID}
                                 onChange={(e) => onChange(e)}
                                 placeholder="User ID " />
                           </div>
                        </div>

                        <div className="field">
                           <label className="label">First</label>
                           <div className="control">
                              <input 
                                 className="input" 
                                 name="userFirst"
                                 type="text" 
                                 value={userFirst}
                                 onChange={(e) => onChange(e)}
                                 placeholder="User FirstName" />
                           </div>
                        </div>

                        <div className="field">
                           <label className="label">Last</label>
                           <div className="control">
                              <input 
                                 className="input" 
                                 name="userLast"
                                 type="text" 
                                 value={userLast}
                                 onChange={(e) => onChange(e)}
                                 placeholder="User LastName" />
                           </div>
                        </div>

                        <div className="field">
                           <label className="label">Position</label>
                           <div className="control">
                              <input 
                                 className="input" 
                                 name="userPosition"
                                 type="text" 
                                 value={userPosition}
                                 onChange={(e) => onChange(e)}
                                 placeholder="User Position" />
                           </div>
                        </div>

                        <div className="field">
                           <label className="label">Password</label>
                           <div className="control">
                              <input 
                                 className="input" 
                                 name="userPassword"
                                 type="password" 
                                 value={userPassword}
                                 onChange={(e) => onChange(e)}
                                 placeholder="User Password" />
                           </div>
                        </div>

                        <div className="field">
                           <label className="label">Confirm Password</label>
                           <div className="control">
                              <input 
                                 className="input" 
                                 name="userPassword_confirmation"
                                 type="password" 
                                 value={userPassword_confirmation}
                                 onChange={(e) => onChange(e)}
                                 placeholder="User Confirmation Password" />
                           </div>
                        </div>

                        <div className="buttons is-centered mt-4 mb-2">
                           <button className="button is-primary is-centered">
                              <strong>Register</strong>
                           </button>
                        </div>
                     </form>
                        
                        <div className="content">
                           <div className="has-text-centered">
                              <Link to="/" style={link}>Back to Login...</Link>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

const getColorBox = {
   backgroundColor: '#3e8ed0'
}

const link = {
   color:'#fff',
}

FrmRegister.propTypes = {
   register: PropTypes.func.isRequired
}




export default connect(null, {register}) (FrmRegister);
