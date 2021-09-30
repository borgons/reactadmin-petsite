import React, {useState} from 'react'

import Loading from '../loading/LoadingSpinner'

const LoadingSpinner = () => {

// LOADING STATE
   const [loading, setLoading ] = useState(false);

   return [
      loading ? <Loading /> : null,
      () => setLoading(true), // SHOW LOADER
      () => setLoading(false) // HIDE LOADING
   ];

};

export default LoadingSpinner