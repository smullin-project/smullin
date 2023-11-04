import React from "react";
import { Link } from "react-router-dom";
import './Main.css';
import logo from '../images/logo.svg';

const Main = () => {
  return (
    <body>
      <img src={logo} />
      <div>
        <Link to="/login">login</Link>
        <Link to="/signin">signin</Link>
      </div>
    </body>
  );
};

export default Main;