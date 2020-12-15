import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Header from '../layout/Header'
import url from '../url';

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
import MenuBookIcon from '@material-ui/icons/MenuBook';

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

export default function MkRoom() {
	const classes = useStyles();

	const [isInvitation,setIsInvitation]=useState(true)
	// useEffect(()=>{
	//
	// },[isInvitation]);
	const [inputs,setInputs]=useState({
		roomName:'',
		password:'',

	});
	const {roomName,password}=inputs;

	const handleChange=()=> {
		setIsInvitation(!isInvitation);
		// if (isInvitation === false) {
		//
		// }
		console.log(isInvitation);
	}


	const handleConfirmClick=()=>{

		const info={
			name:roomName,
			passcode:password,
			is_private:(!isInvitation).toString(),
		}
		// //이유는 모르겠는데 isInvitation 상태의 반대로 해야 올바른 값이 전달됨.
		// console.log(info);
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		let raw = JSON.stringify(info);
		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		fetch(url()+"/room", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
		// let myHeaders = new Headers();
		// myHeaders.append("Authorization", "");
		// myHeaders.append("Content-Type", "application/json");
		// let raw = JSON.stringify(info);
		// let requestOptions = {
		// 	method: 'POST',
		// 	headers: myHeaders,
		// 	body: raw,
		// 	redirect: 'follow'
		// };
		// fetch("https://192.168.0.4:8080/room", requestOptions)
		// 	.then(response => response.json())
		// 	.then(res => {//여기 안에 토큰도 들어가 있
		// 		console.log("response: ",res);
		// 		//추후 링크에서 리스폰 받아오면 거기에 맞게 연결 해주기
		// 		if(res.response===200){
		// 			console.log("i got a response from server");
		// 		}
		// 	})
		// 	.catch(error => console.log('error', error));


		// window.open("http://www.google.com");

		// history.push('/rooms');
	}
	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	return (
		<div>
			<Header content={null}/>
			<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<MenuBookIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Make a StudyRoom
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="roomName"
						label="Insert Title"
						helperText="방제목을 입력하세요."
						autoFocus
						type="text" 
						name="roomName" 
						onChange={handleInput} 
						value={roomName}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" id="invitation" value={isInvitation} onChange={handleChange}/>}
						label="초대방"
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Insert Password"
						helperText="비밀번호를 입력하세요."
						type="password"
						id="password"
						autoComplete="current-password"
						name="password" 
						onChange={handleInput} 
						value={password}
						disabled={isInvitation}
					/>
					
					<Grid container>
						<Grid item xs>
							<Link component={RouterLink} to='/rooms'>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={handleConfirmClick}
								>
									확인
								</Button>
							</Link>
						</Grid>
						<Grid item xs>
							<Link component={RouterLink} to='/rooms'>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									취소
								</Button>
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			</Container>
		</div>
		
	  );

	/* return(
		<div>
			<Header content={null}/>
			<br/>
			<div>방제목</div>
			<input type="text" name="roomName" onChange={handleInput} value={roomName} placeholder="insert title"/><br/>
			<label>초대방:</label>&nbsp;&nbsp;
			<input type="checkBox" id="invitation" value={isInvitation} onChange={handleChange}/><br/>
			<div>비밀번호</div>
			<input type="text" name="password" onChange={handleInput} value={password} placeholder="insert password" disabled={isInvitation}/><br/>
			<Link to='/rooms'><button onClick={handleConfirmClick}>확인</button></Link>
			<Link to='/rooms'><button>취소</button></Link>
		</div>
	) */
}
//room_name not null, passcode,
//초대방이면 passcode 활성화되고, 공개방이면 passcode 비활성화
//TODO: jsx로 컴포넌트 구성하
//TODO: fetch post 구성하기
//확인 누르면 바로 방생성, 취소 누르면 다시 방으로 라우