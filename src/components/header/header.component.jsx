import {React} from 'react'

import  Logo  from '../../assets/logo.png'
import MainButton from '../buttons/main_button/main_button.component'
import { Link } from 'react-router-dom'
import './header.styles.scss'


const Header = () => {
    return(
        <div className="header">
            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand">Navbar</a>
                <div class="form-inline">
                    <ul className="list-unstyled d-flex"> 
                            <li>  
                                <Link to="/signin" className=" nav-link">Se Connecter</Link>
                            </li> 
                        
                            <li>
                                <Link to="/signout" className=" nav-link">s'inscrire</Link>
                            </li>
                    
                    </ul>
                </div>
            </nav>
            {/* <div className="head-header">
                <ul className="ul_signIn container"> 
                <Link to="/signin" className="link_sign">
                    <li>Se Connecter</li>
                </Link>
                <Link to="/signout" className="link_sign">
                    <li>s'inscrire</li>
                </Link>
                   
                </ul>
            </div>
            <div className="bottom-header container">
                <img src ={Logo} alt="Logo" />
                <MainButton text="+ Déposer Votre Anonce"/>
            </div> */}
        </div>
    )
  
}

export default Header;
