import React, {Fragment, useEffect, useState} from 'react'

function LoginSuccessMsg(props) {
   const {successHandler} = props;
   const [show, setShow] = useState(false);

   useEffect(() => {
      setShow(false);

      if(successHandler.hasSuccess){
         setShow(true);
      }
   }, [successHandler]);

   return (
      <Fragment>
         { show ? (
            <div className="container">
               <div className="columns">
                  <div className="column is-desktop">
                     <div
                        className="column is-6 is-offset-one-half m-auto">
                           <article className="message is-success">
                           <div className="message-header">
                              <p>Success</p>
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
                              <strong>{successHandler.msg}</strong>
                           </div>
                           </article>
                     </div>
                  </div>
               </div>
            </div>
         ):("") }
      </Fragment>
   )
}

export default LoginSuccessMsg;
