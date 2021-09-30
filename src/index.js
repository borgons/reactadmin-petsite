import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import '../node_modules/bulma/css/bulma.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, 
  faEdit, 
  faTrash,
  faLaptop,
  faSyringe,
  faList } from '@fortawesome/free-solid-svg-icons'



import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
const middleware = [thunk];

const initialState = {};

  library.add( 
    faSearch, 
    faEdit, 
    faTrash, 
    faLaptop,
    faSyringe,
    faList )
  
    const store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
  
  ReactDOM.render(
    <React.StrictMode>
    <Provider store = {store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
