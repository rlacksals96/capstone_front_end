import React, { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
import url from "../components/url";
// import {useHistory} from 'react-router-dom';
import LoginStatus from "../components/login/LoginStatus";
import axios from "axios";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
	  marginTop: theme.spacing(8),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(1),
	  backgroundColor: theme.palette.secondary.main,
	},
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function Login({history}) {
	const classes = useStyles();

	const [inputs, setInputs] = useState({

		email: "",
		password: "",
	});
	const { email, password } = inputs;


	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};


	const handleSubmit = async (e) => {

		const user = {
			email: email,
			password: password,
		};

		e.preventDefault();


		let myHeaders = new Headers();
		myHeaders.append("Authorization", "");
		myHeaders.append("Content-Type", "application/json");
		let raw = JSON.stringify(user);
		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		let status='';
		fetch(url()+"/account/signin", requestOptions)
			.then(response => {
				status=response.status;
				// console.log(status);
				return response.json()
			})
			.then(data => {//여기 안에 토큰도 들어가 있
				// console.log("token: ",data);
				localStorage.setItem('access-token',data.accessToken);
				if(status===200){
					history.push('/rooms');
				}else{
					alert("이메일 또는 비밀번호가 잘못되었습니다");
				}

			})
			.catch(error => console.log('error', error));



	};
	return (
		<Container component="main" maxWidth="xs">
		  <CssBaseline />
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Sign in
			</Typography>
			<form className={classes.form} noValidate>
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
				value={email} 
				onChange={onChange}
			  />
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				value={password} 
				onChange={onChange}
			  />
			  {/* <FormControlLabel
				control={<Checkbox value="remember" color="primary" />}
				label="Remember me"
			  /> */}
			  <Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
				onClick={handleSubmit}
			  >
				Sign In
			  </Button>
			  <Grid container>
				{/* <Grid item xs>
				  <Link href="#" variant="body2">
					Forgot password?
				  </Link>
				</Grid> */}
				<Grid item>
				  <Link component={RouterLink} to="/auth/signup" variant="body2">
					{"Don't have an account? Sign Up"}
				  </Link>
				</Grid>
			  </Grid>
			</form>
		  </div>
		</Container>
	  );
	/* return (
		<div>
			<Header content={null}/>
			<h3 id="title">Login</h3>
			<form onSubmit={handleSubmit}>
				<LoginForm email={email} password={password} onChange={onChange} />
				<button type="submit" onClick={handleSubmit} >Login</button>
			</form>
			<br />
				
		</div>
	); */
}
export default Login;
