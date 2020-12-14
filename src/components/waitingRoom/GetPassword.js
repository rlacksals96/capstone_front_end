import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import url from '../url'
import Header from '../layout/Header';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
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

export default function GetPassword(props){
  const classes = useStyles();

  const [password,setPassword]=useState('');
  const loc=useLocation();
  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };


  const handleClick=()=>{
		// alert(props.location.state.roomName)
    const pw={
    	email:localStorage.getItem('email'),
      name:props.location.state.roomName,
      passcode:password
    }


		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		let raw = JSON.stringify(pw);
		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		let status=''//상태코드 저장위해서 사용
		fetch(url()+"/room/join", requestOptions)
			.then(response => {
				status=response.status;
				//response.json()
			})
			.then(result => {
				console.log("resonse: "+status);
				if(status){
					// window.open("http://www.google.com");
					window.open("https://demos.openvidu.io/openvidu-call/#/"+props.location.state.roomName)
					window.open(url()+":3001/items?email="+localStorage.getItem('email'),'_blank','width=500px,height=700px');
				}
				else{
					console.log("입장실패");
				}

			})
			.catch(error => console.log('error', error));
  }
  
  return (
		<div>
			<Header content={null}/>
			<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
				<Typography component="h1" variant="h5">
					Please Enter Password
				</Typography>
				<form className={classes.form} noValidate>
        <TextField
						variant="outlined"
						margin="normal"
						required
            fullWidth
            autoFocus
						label="Insert Password"
						helperText="비밀번호를 입력하세요."
						type="password"
						id="password"
						autoComplete="current-password"
						name="password"
						value={password}
            onChange={handleChange}
					/>

					<Grid container>
						<Grid item xs>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
                  onClick={handleClick}
								>
									확인
								</Button>
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

      {/* <p>{loc.state.pw}</p> */}
		</div>

    );
    
  //  return(
  //   <div>
  //     <Header content={null}/>
  //     <div>비밀번호 입력</div>
  //     <input type="text" value={password} name="password" onChange={handleChange} />
  //     <button onClick={handleClick}>확인</button>
  //     <Link to='/rooms'><button>취소</button></Link>
	//
  //   </div>
  // )
}