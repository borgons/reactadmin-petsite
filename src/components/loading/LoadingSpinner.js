import React, {Fragment} from 'react'
import Spinner from '../../assets/img/loading.gif'


function LoadingSpinner() {
   return (
      <Fragment>
         <div className="container">
            <img src={Spinner} alt="loading" />
         </div>
      </Fragment>
   )
}

export default LoadingSpinner
