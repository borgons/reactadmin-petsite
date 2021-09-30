import React,{ Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

import LoginErrMsgs from '../messages/LoginErrMsg'
import LoginCreds from '../messages/LoginBadCreds'

import { Link } from 'react-router-dom'

const FrmLogin = ({ login }) => {

   const [frmLogInData, setFrmLogInData] = useState({
      userID:"",
      userPassword:"",
   },[]
   )


   // ERROR HANDLER
   const [errorHandler, setErrorHandler] = useState ({
      hasError:false, 
      msg:""
   })

   const [loginCred, setLoginCred] = useState ({
      hasError:false, 
      loginMsg:""
   })

   const {userID, userPassword } = frmLogInData;

   const onChange = e => {
      setFrmLogInData({ ...frmLogInData,  [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault();
      login(frmLogInData,setErrorHandler, setLoginCred);

      setFrmLogInData ({
         userID:"",
         userPassword:""
      })
   }

   return (
      <Fragment>
         <LoginErrMsgs errorHandler={errorHandler}/>
         <LoginCreds loginCred = {loginCred} />
         <div className="container">
            <div className="columns">
               <div className="column is-desktop">
                  <div className="column is-5 is-offset-one-half mx-auto mt-6">
                     <div className="box" style={getColorBox}>

                        <div className="content">
                           <div className="has-text-centered">
                              <h5 style={link}>Please Login your Account...</h5>
                           </div>
                        </div>

                        <form onSubmit = {onSubmit}>
                           <div className="field">
                              <label className="label">Email</label>
                              <div className="control">
                                 <input 
                                    className="input" 
                                    name="userID"
                                    value={userID}
                                    type="number" 
                                    onChange={(e) => onChange(e)}
                                    placeholder="Email" />
                              </div>
                           </div>

                           <div className="field">
                              <label className="label">Password</label>
                              <div className="control">
                                 <input 
                                    className="input"
                                    name="userPassword"
                                    value={userPassword}
                                    type="password" 
                                    onChange={(e) => onChange(e)}
                                    placeholder="Address" />
                              </div>
                           </div>

                           <div className="buttons is-centered mt-4 mb-3">
                              <button className="button is-primary is-centered">
                                 <strong>Sign in</strong>
                              </button>
                           </div>
                        </form>

                        <div className="content">
                           <div className="has-text-centered">
                              <Link  to="/register" style={link}>If you dont have an account, Please Register</Link>
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

FrmLogin.propTypes={
   login: PropTypes.func.isRequired
}

export default connect(null, {login})(FrmLogin);
