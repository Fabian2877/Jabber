import React from 'react';
import {Button} from '@material-ui/core'
import './styles/Login.css';
import { auth, provider } from '../firebase/Firebase';
import {useStateValue} from '../stateProvider/StateProvider';
import {actionTypes} from '../stateProvider/reducer';


function Login() {
    const [state, dispatch] = useStateValue();


 const signIn = () => {
     auth.signInWithPopup(provider)
     .then((result) => {
         console.log(result)
         dispatch({
             type: actionTypes.SET_USER, 
             user: result.user
         })

     })
     .catch((error) => {
         alert(error.message)
     })
 } 





    return (
        <div className='login'>
            <div className='login__welcome'>
                <h2>Build a community around your work</h2>

            </div>




            <div className='login__container'>

                <h1>Sign in to Pulse</h1> 
                <Button variant='contained' onClick={signIn}>Sign in with Google</Button>

            </div>
            
        </div>
    )
}

export default Login
