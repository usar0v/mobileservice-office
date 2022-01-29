import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './styles.less';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

