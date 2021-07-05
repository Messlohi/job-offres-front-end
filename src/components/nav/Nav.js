import React, { useContext, useEffect } from "react";
import "./nav.scss";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import { UserContext } from "../../firebase/Provider";

export default function Nav(props) { 
  const { selected } = "/login";
  const history = useHistory(); 
  const user=useContext(UserContext); 
  return (
    <nav className="px-2 text-white" style={{"background":"#c1981b","color":"white"}}>
      <img className="logo" src={logo} alt="dd" />
      <ul className="nav-links">
        <li className="nav-link">
          <Link
            to="/" 
            className={""+selected === "/" ? "selected" : "unselect"}
          >
            Deployements
          </Link>
        </li>
        <li>
          <Link
            to="/login"  
            className={selected === "/login" ? "selected" : "unselect"}
          >
            {  user? "Log out" : "Login" }
          </Link>
        </li>
      </ul>
    </nav>
  );
}
