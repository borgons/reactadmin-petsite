import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/img/dogLogo.png'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/authActions'

const Navbar = () => {

   
   const dispatch = useDispatch();
   //const state = useSelector((state) => state);
   const token = useSelector((state) => state.auth.token)

   //LOGOUIT
   const handleLogOut = () => {
      dispatch(logout);
   }
   
   const authNav = (
      <Fragment>
         <nav 
            className="navbar is-info mb-4" 
            role="navigation" 
            aria-label="main navigation">
         <div className="navbar-brand">
               <img src={Logo} width="80" height="28" alt="Dog Logo" /> 
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-start">
                  <Link 
                     className="navbar-item" 
                     to="/appoint">
                     <FontAwesomeIcon 
                     icon="laptop" 
                     className="mr-1"/> Appointments
                  </Link>
                  <Link 
                     className="navbar-item" 
                     to="/vaccine">
                     <FontAwesomeIcon 
                     icon="syringe" 
                     className="mr-1"/>Vaccination
                  </Link>
                  <Link 
                     className="navbar-item" 
                     to="/profile">
                     <FontAwesomeIcon icon="list" className="mr-1"/>Profile
                  </Link>
               </div>
               <div className="navbar-end">
                  <div className="navbar-item">
                     {/* <p>{user.userID}</p> */}
                  <div className="buttons">
                     <button 
                        className="button is-primary" 
                        onClick={() => handleLogOut() }>
                        LogOut
                     </button>
                  </div>
                  </div>
               </div>
            </div>
            </nav>
      </Fragment>
   );

   const guestNav = ('');
   return (
      
      <Fragment>
         {/* //NAVBAR HERE  */}
         
            { token ? authNav : guestNav}
         
      </Fragment>
   )
}


Navbar.propTypes= {
   logout: PropTypes.func.isRequired
}

export default connect(null, {logout})(Navbar);

