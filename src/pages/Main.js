import React from "react";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import imgA from "../images/study_with_me.jpg";
import { Button } from "reactstrap";

import "../styles/Main.css";

const Main = () => {
	return (
		<div>
			<Header />
			<img src={imgA} />
			<h1 className="desc">welcome to study with me</h1>
			<div className="button-container">
				<Link to="./auth/login">
					<Button className="loginButton">login page</Button>
				</Link>
				<Link to="./auth/signup">
					<Button className="signUpButton">sign up page</Button>
				</Link>
			</div>
		</div>
	);
};

export default Main;

{
	/* <Link to="./auth/login"><Button className="loginButton" color="primary" size="lg" block>login page</Button></Link> */
}
// <Link to="./auth/signup"><Button className="singUpButton" color="secondary" size="lg" block>sign up page</Button></Link>
