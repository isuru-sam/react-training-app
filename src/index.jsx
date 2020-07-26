import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store.js'


import theme from "./styles/theme";
import { MuiThemeProvider } from "@material-ui/core";

import App  from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
  
     <MuiThemeProvider theme={theme}>
       <Provider store={store}>
       <BrowserRouter>
                      
                        <App/>
                     
                     </BrowserRouter>
                     </Provider>
                    </MuiThemeProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
