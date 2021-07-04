import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import SingUp from '../../components/sign-up/sign-up.component';
import './signin_signup.scss'

class SingInSingUp extends React.Component {


    render(){

        return(
            <div className="sign-in-and-sign-up"> 
                <SignIn/>
                <SingUp/>
            </div>
        )
    }
}

export default SingInSingUp;