import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';



import theme from "./styles/theme";
import { MuiThemeProvider } from "@material-ui/core";
import TopNavBar from "./components/common/topMenuBar/topMenuBar";
import Footer from "./components/common/footer/footerBar";
import { Routes } from "./routes.jsx";
ReactDOM.render(
  <React.StrictMode>
     <MuiThemeProvider theme={theme}>
                        <TopNavBar />
                        <Routes/>
                     <Footer/>
                    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
