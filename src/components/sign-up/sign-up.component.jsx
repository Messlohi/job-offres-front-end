import React from 'react'
import { withRouter } from 'react-router'

import FromInput from '../form-input/form-input.component'
import MainButton from '../../components/buttons/main_button/main_button.component'



import {auth ,createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'


class SingUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayName : '', 
            email :'',
            password :'',
            confirmPassword:'',
            addr:'',
            tel :'',
        }
    }

    handelSubmit = async event => {
        event.preventDefault(); 
        const {displayName, email,password,confirmPassword,addr,tel} = this.state
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password).catch(err => {
                alert(err)
            })
            if(user != null){
                await createUserProfileDocument(user,{displayName,addr,tel},this.props.history)
                this.setState({
                    displayName : '', 
                    email :'',
                    password :'',
                    confirmPassword:'',
                    addr:'',
                    tel :''
                })
            }
           
        } catch (error) {
            console.log(error)
            
        }

    }
    handelChange = event => {
        const {name, value } = event.target;
        this.setState({[name]:value})
    }
    
    render() {
        const {displayName, email,password,confirmPassword,tel,addr} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>J'ai pas de compte</h2>
                <span>S'inscrire avec votre email et mot de passe</span>
                <form action="" className='sign-up -form' onSubmit={(e)=> this.handelSubmit(e)}>
                    <FromInput
                    type ='text'
                    name='displayName'
                    onChange={this.handelChange}
                    value={displayName}
                    label='Nom Complet'
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
                    type ='text'
                    name='tel'
                    onChange={this.handelChange}
                    value={tel}
                    label='T??l??phone'
                    required
                    />
                    <FromInput
                    type ='text'
                    name='addr'
                    onChange={this.handelChange}
                    value={addr}
                    label='Adresse'
                    required
                    />
                     <FromInput
                    type ='password'
                    name='password'
                    value={password}
                    label='Mot de passe'
                    onChange={this.handelChange}
                    required
                    />
                     <FromInput
                    type ='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirmer Mot de passe'
                    onChange={this.handelChange}
                    required
                    />
                    <MainButton type="submit"  text="S'inscrire"/>
                </form>
            </div>
        )
    }

}

export default withRouter(SingUp);