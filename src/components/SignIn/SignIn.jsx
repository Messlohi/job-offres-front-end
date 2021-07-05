import React from 'react'
import { withRouter } from 'react-router'

import FormInput from '../../components/form-input/form-input.component'
import MainButton from '../../components/buttons/main_button/main_button.component'

import {singInWithGoogle, auth} from '../../firebase/firebase.utils'


import './SignIn.scss'


class SignIn extends React.Component
{
    constructor(props){
        super(props); 

        this.state = {
            email :'',
            password :''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            .then(val =>  this.setState({email:'',password:''}))
            .catch(err =>alert(err))
            this.setState({ email :'',
            password :''})
        } catch (error) {
            alert(error)
            
        }
       
    }

    handelSignInWithGoogle = async (event) => {
        singInWithGoogle().then(snap=> {
            this.props.history.push('/')
        })
      
    }

    handelChange = event => {
        const {value ,name} = event.target;
        this.setState({[name]:value})
    }




    render(){
        return(
            <div className='sign-in'>
            <h2 className="title">J'ai déja un compte</h2>
            <span>Se Connecter avec votre email et mot de passe</span>                
                <form action="" onSubmit={this.handelSubmit}>
                    <FormInput type="email" name="email"
                    handelChange={this.handelChange}
                    label="email"
                    value={this.state.email}  required/>

                    <FormInput type="password"
                    name="password"
                    onChange={this.handelChange}
                        label="password"
                    value={this.state.password} 
                    required/>
                
                    <div className="buttons">
                        <MainButton  onClick={()=> auth.signOut()}  text="Se Connecter" ></MainButton>
                        <MainButton onClick={this.handelSignInWithGoogle} text="Se Connecter avec Google" isGoogleSignIn /> 
                    <div/>
            </div>
          
        </form>
        
        </div>
        )
    }
}

export default withRouter(SignIn);