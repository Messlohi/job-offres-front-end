import React from 'react'

import FromInput from '../form-input/form-input.component'
import MainButton from '../../components/buttons/main_button/main_button.component'



import {auth ,createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'


class SingUp extends React.Component {

    constructor(){
        super();
        this.state = {
            displayName : '', 
            email :'',
            password :'',
            confirmPassword:''
        }
    }

    handelSubmit = async event => {
        event.preventDefault(); 
        const {displayName, email,password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password).catch(err => {
                alert(err)
            })
            console.log(user)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName : '', 
                email :'',
                password :'',
                confirmPassword:''
            })
        } catch (error) {
            console.log(error)
            
        }

    }
    handelChange = event => {
        const {name, value } = event.target;
        this.setState({[name]:value})
    }
    
    render() {
        const {displayName, email,password,confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>J'ai pas de compte</h2>
                <span>S'inscrire avec votre email et mot de passe</span>
                <form action="" className='sign-up -form' onSubmit={this.handelSubmit}>
                    <FromInput
                    type ='text'
                    name='displayName'
                    onChange={this.handelChange}
                    value={displayName}
                    label='Display Name'
                    required
                    />
                          <FromInput
                    type ='email'
                    name='email'
                    onChange={this.handelChange}
                    value={email}
                    label='Email'
                    required
                    />
                     <FromInput
                    type ='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={this.handelChange}
                    required
                    />
                     <FromInput
                    type ='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    onChange={this.handelChange}
                    required
                    />
                    <MainButton type="submit"  text="S'inscrire"/>
                </form>
            </div>
        )
    }

}

export default SingUp;