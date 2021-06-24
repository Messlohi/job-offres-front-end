import {React} from 'react'

import  Logo  from '../../assets/logo.png'
import MainButton from '../buttons/main_button/main_button.component'

import './header.styles.scss'


const Header = () => {
    return(
        <div className="header">
            <div className="head-header">
                <ul className="ul_signIn container"> 
                    <li>Se Connecter</li>
                    <li>s'inscrire</li>
                </ul>
            </div>
            <div className="bottom-header container">
                <img src ={Logo} alt="Logo" />
                <MainButton text="+ Déposer Votre Anonce"/>
            </div>
        </div>
    )
  
}

export default Header;
