import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import Header from "../components/layout/Header";
import SignUpForm from "../components/signUp/SignUpForm";
import url from '../components/url';
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

// axios.defaults.baseURL = 'https://172.20.10.3:5000';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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
	  marginTop: theme.spacing(3),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function SignUp({history}) {
	const classes = useStyles();

	const [inputs, setInputs] = useState({
		userId: "",
		userPw: "",
		userPwRe: "",
		email: "",
	});
	const { userId, userPw, userPwRe, email } = inputs;

	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const user={
			email:email,
			password:userPw
		}

		// console.log(url()); //넘어가는 값 확인용. 추후 삭제

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
		fetch(url()+"/account/signup", requestOptions)
			.then(response => {
				status=response.status;
				return response.json();
			})
			.then(result => {
				 //console.log(result)
				if(status===200){
					alert("회원가입이 완료 되었습니다")
					history.goBack();
				}
			})
			.catch(error => console.log('error', error));
	 };

	 const hasError = () =>
	 	userPw.length < 5 ? true : false;
		
	 const hasNotSameError = () =>
	 	userPw != userPwRe ? true : false;    

	 return (
		<Container component="main" maxWidth="xs">
		  <CssBaseline />
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Sign up
			</Typography>
			<form className={classes.form} noValidate>
			  <Grid container spacing={2}>
				<Grid item xs={12}>
				  <TextField
					variant="outlined"
					required
					fullWidth
					autoFocus
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					value={email}
					onChange={onChange}
				  />
				</Grid>
				<Grid item xs={12}>
				  <TextField
					variant="outlined"
					required
					fullWidth
					name="userPw"
					label="Password(5글자 이상 필수)"
					type="password"
					id="userPw"
					autoComplete="current-password"
					value={userPw}
					onChange={onChange}
					error={hasError()} // 해당 텍스트필드에 error 핸들러 추가
				  />
				</Grid>
				<Grid item xs={12}>
				  <TextField
					variant="outlined"
					required
					fullWidth
					name="userPwRe"
					label="Confirm Password"
					type="password"
					id="userPwRe"
					autoComplete="current-password"
					value={userPwRe}
					onChange={onChange}
					error={hasNotSameError()} // 해당 텍스트필드에 error 핸들러 추가
					helperText={
						hasNotSameError() ? "입력한 비밀번호와 일치하지 않습니다." : null
					} // 에러일 경우에만 안내 문구 표시
				  />
				</Grid>
			  </Grid>
			  <Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
				onClick={submitHandler}
			  >
				Sign Up
			  </Button>
			  <Grid container justify="flex-end">
				<Grid item>
				  <Link component={RouterLink} to="/auth/login" variant="body2">
					Already have an account? Sign in
				  </Link>
				</Grid>
			  </Grid>
			</form>
		  </div>
		  <Box mt={5}>
		  </Box>
		</Container>
	  );
	/* return (
		<div>
			<Header content={null}/>
			<form onSubmit={submitHandler}>
				<SignUpForm
					userPw={userPw}
					userPwRe={userPwRe}
					email={email}
					onChange={onChange}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	); */
}

export default SignUp;