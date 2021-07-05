import {React} from 'react'

import  Logo  from '../../assets/logo.png'
import MainButton from '../buttons/main_button/main_button.component'
import { Link } from 'react-router-dom'
import './header.styles.scss'


const Header = () => {
    return(
        <div className="header" >
            <nav class="navbar  navbar-light   justify-content-between" style={{"background":"#f58936"}}>
                <a href="/" className="navbar-brand text-white"><i className="fas fa-tools"></i> BRICOLE</a>
                <div className="form-inline">
                    <ul className="list-unstyled d-flex navItems" > 
                            <li>  
                                <Link to="/signin" className=" nav-link text-white">Se Connecter</Link>
                            </li> 
                        
                            <li>
                                <Link to="/signout" className=" nav-link text-white">s'inscrire</Link>
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
