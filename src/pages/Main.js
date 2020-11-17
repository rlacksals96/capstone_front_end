import React from "react";
import Header from '../components/layout/Header';
import {Link} from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header/>
            <h1>welcome to study with me</h1>
            <Link to="./auth/login"><button>login page</button></Link>
            <Link to="./auth/signup"><button>sign up page</button></Link>





        </div>
    );
};

export default Main;