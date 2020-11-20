import React from "react";
import Header from '../components/layout/Header';
import {Link} from 'react-router-dom';
import imgA from '../images/study_with_me.jpg';

import "../styles/Main.css";



const Main = () => {
    return (
        <div>
            <Header/>
            <img src={imgA} />  
            <h1 className="desc">welcome to study with me</h1>
            <div className="button-container">
                <Link to="./auth/login"><button className="loginButton">login page</button></Link>
                <Link to="./auth/signup"><button className="singUpButton">sign up page</button></Link>
            </div>
            



        </div>
    );
};

export default Main;