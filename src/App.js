import React, { useEffect } from 'react'
import { BrowserRouter 
  as Router, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Navbar from './components/layouts/Navbar'
//ADMIN PAGES 
import Login from './components/views/adminPages/Login'
import Register from './components/views/adminPages/Register'
import Appointment from './components/views/adminPages/Appointments'
import Vaccination from './components/views/adminPages/Vaccinations'
import Profile from './components/views/adminPages/Profile'

import { loadUser } from  './actions/authActions'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className="router">
          <Navbar />
            <Route path="/" exact render={(props) =>(
              <>
              <Login />
            </>
          )} />
            <Route path="/register" component={Register}/>
            <Route path="/appoint" component={Appointment} />
            <Route path="/vaccine" component={Vaccination}/>
            <Route path="/profile" component={Profile}/>
          
        </div>
      </Router>
    </>

    
    
  );
}




export default App;
