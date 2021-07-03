import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import './signin_signup.scss'

class SingInSingUp extends React.Component {


    render(){

        return(
            <div className="sign-in-and-sign-up"> 
                <SignIn/>
            </div>
        )
    }
}

export default SingInSingUp;