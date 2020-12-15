import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';/* 
import "../../styles/Header.css"; */
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

import img from "../../images/study_with_me2.png";
import url from '../url'

const useStyles = makeStyles((theme) => ({
	toolbar: {
	  minHeight: 70.
	},
	brand: {
	  lineHeight: 1,
	  marginRight: 'auto'
	},
	link: {
	  marginRight: theme.spacing(5),
	  [theme.breakpoints.down('sm')]: {
		display: 'none'
	  }
	},
	primaryAction: {
	  marginRight: '15px',
	  [theme.breakpoints.down('sm')]: {
		display: 'none'
	  }
	},
	menuButton: {
	  [theme.breakpoints.up('md')]: {
		/* display: 'none' */
	  }
	},
	iconWrapper: {
	  minWidth: 40,
	},
	icon: {
	  color: theme.palette.text.hint
	},
	drawerContainer: {
	  paddingTop: theme.spacing(2),
	  paddingLeft: theme.spacing(2),
	  paddingRight: theme.spacing(3),
	  width: 300,
	}
  }));
  
  export default function Navigation(props) {
	const classes = useStyles();

	const [coin,setCoin]=useState(0)
	useEffect(()=>{
		fetch(url()+'/getcoin?email='+localStorage.getItem('email'))
			.then(res => res.json())
			.then(
				(result) => {
					setCoin(result.coin)
				})
			.catch(error => console.log('error', error));
	},[coin])
	const content = {
	  'brand': { image: img, width: 220 },
	  'primary-action': "Logout",
	  ...props.content
	};
  
	let brand;
  
	if (content.brand.image) {
	  brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
	} else {
	  brand = content.brand.text || '';
	}
  
	const [state, setState] = React.useState({ open: false });
  
	const toggleDrawer = (open) => (event) => {
	  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		return;
	  }
  
	  setState({ ...state, open });
	};
  
	return (
	  <AppBar position="static" color="primary">

			<Toolbar className={classes.toolbar}>

					<Link component={RouterLink} to="/rooms" color="primary" underline="none" variant="h5" className={classes.brand}>
						{brand}
		  		</Link>


				<h4 style={{"margin-bottom":"0px"}}>coin: {coin}</h4>
				&nbsp;&nbsp;&nbsp;&nbsp;

				<Link component={RouterLink} to="/">
		  	<Button variant="contained" color="secondary" className={classes.primaryAction} onClick={handleLogout}>{content['primary-action']}</Button>
		  </Link>
		  
		  <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
			<MenuIcon /> 
		  </IconButton>
		</Toolbar>
		<Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
		  <div className={classes.drawerContainer}>
			<Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
			  <Link component={RouterLink} to="/" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
				{brand}
			  </Link>
			</Box>
			  
			<Box mt={1} ml={2} pt={3} border={1} borderBottom={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
				<Link component={RouterLink} to="/">
					<Button variant="contained" color="secondary" fullWidth onClick={handleLogout}>{content['primary-action']}</Button>
				</Link>
			</Box>
		  </div>
		</Drawer>
	  </AppBar>
	);
  }

/* const Header = ({ onLogout }) => (
	<div className="header">
		<Link to={"/"}>
			<div className="logo">Study With Me</div>
		</Link>
		<Link to={"/"}>
			<button className="logoutBtn" onClick={handleLogout}>
				logout
			</button>
		</Link>
	</div>
); */

const handleLogout = () => {
	localStorage.clear();
	alert("Logout 되었습니다");
};

/* export default Header; */
