import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
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
import SocialLogin from '../components/login/SocialLogin'
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';



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
				localStorage.setItem('email',email);
				if(status===200){
					history.push('/rooms');
				}else{
					alert("이메일 또는 비밀번호가 잘못되었습니다");
				}

			})
			.catch(error => console.log('error', error));



	};
	// const responseKaKao = (res) => {
	// 	const { data } = this.state;
	//
	// 	this.setState({
	// 		data: res,
	// 	});
	//
	// 	fetch(`${API_URL_LOGIN}/user/signin/kakao`, {
	// 		//백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다.
	// 		method: 'GET',
	// 		headers: {
	// 			Authorization: res.response.access_token,
	// 			//받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다.
	//
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => localStorage.setItem('token', res.token),
	// 			//백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
	// 			//여기서 중요한것은 처음에 console.log(res)해서 들어오는
	// 			//access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는
	// 			//절차가 있으므로 까먹지 말 것!
	// 			alert('로그인 성공하였습니다'));
	// };
	// const responseFail=(res)=>{
	// 	alert("로그인 실패")
	// }
	const [response,setResponse]=useState('')
	// const responseKaKao = (res) => {
	// 	setResponse(res)
	// 	alert(JSON.stringify(response))
	// }

	// const responseFail = (err) => {
	// 	alert(err);
	// }

// 	const KaKaoBtn = styled(KaKaoLogin)`
//   padding: 0;
//   width: 300px;
//   height: 45px;
//   line-height: 44px;
//   color: #783c00;
//   background-color: #ffeb00;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   font-size: 14px;
//   font-weight: bold;
//   text-align: center;
//   cursor: pointer;
//   &:hover {
//     opacity:0.5;
//   }
// `;
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
				{/*<SocialLogin/>*/}
				{/*<KaKaoBtn*/}
				{/*	jsKey={'3c129192c7e23a1f658df8243abf79de'}*/}
				{/*	buttonText='login with KaKao'*/}
				{/*	onSuccess={responseKaKao}*/}
				{/*	onFailure={responseFail}*/}
				{/*	getProfile={true}*/}
				{/*/>*/}
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
