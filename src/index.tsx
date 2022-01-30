import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './styles.less';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'moment/locale/ru';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

