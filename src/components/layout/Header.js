import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

const Header = ({ onLogout }) => (
	<div className="header">
		<Link to={"/"}>
			<div className="logo">LOGO</div>
		</Link>
		<Link to={"/"}>
			<button className="logoutBtn" onClick={handleLogout}>
				logout
			</button>
		</Link>
	</div>
);

const handleLogout = () => {
	localStorage.clear();
	alert("Logout 되었습니다");
};

export default Header;
