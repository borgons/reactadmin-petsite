import React,{Fragment,useEffect, useState} from 'react'

function LoginBadCreds(props) {
   const { loginCred } = props;
   const [show, setShow ] = useState(false);

   useEffect(() => {
      setShow(false);
      
      if( loginCred.hasError){
         setShow(true);
      }
   }, [loginCred]);
   
   const { message } = loginCred.loginMsg;
   
   return (
      <Fragment>
         { show ? (
            <div className="container">
               <div className="columns">
                  <div className="column is-desktop">
                     <div 
                        className="column is-6 is-offset-one-half m-auto">
                           <article className="message is-danger">
                           <div className="message-header">
                              <p>Danger</p>
                              <button 
                                 className="delete" 
                                 aria-label="delete"
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 >
                              </button>
                           </div>
                           <div className="message-body">
                              <ul>
                                 <li>{message}</li>
                              </ul>
                           </div>
                           </article>
                     </div>
                     
                  </div>
               </div>
            </div>
            
         ):
         ("")}
      </Fragment>
   )
}

export default LoginBadCreds
