import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
const store=configureStore()
store.subscribe(()=>{
    console.log('store updated',store.getState())
  })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><App /></Provider>
)
