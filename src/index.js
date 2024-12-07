import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aya from './Aya'
import { sendToVercelAnalytics } from './vitals';
import jQuery from "jquery";
const aya = new Aya();
document.aya = aya;
console.log(Aya);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
jQuery(document).ready(function ($) {

  aya.getAya();

  document.querySelector('#sb-footer-year').innerHTML = (new Date()).getFullYear();

  $('#new-quote').on('click', aya.getAya.bind(aya));
  $('#chage-color').on('click', aya.colorize.bind(aya));
});

reportWebVitals(sendToVercelAnalytics);
