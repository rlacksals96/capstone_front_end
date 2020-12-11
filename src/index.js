import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// axios.defaults.baseURL='http://localhost:8000';
//서버 주소 등록해놔.
ReactDOM.render(
	<BrowserRouter>
	<ThemeProvider theme={theme}>
    	<CssBaseline />
		<App />
	</ThemeProvider>
	</BrowserRouter>
	,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
