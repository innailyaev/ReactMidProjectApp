import React, { useState ,useEffect} from 'react';


import fire from '../Fire.js';
import LogIn from './LogIn';
import Hero from './Hero';
import '../Styles/LogInStyle.css';

const MainLogIn =()=>{

    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);

    const clearInputs=()=>{
        setEmail('');
        setPassword('');
    }

    const clearErrors=()=>{
        setEmailError('');
        setPasswordError('');
    } 

    const handelLogIn =() =>{
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch((err)=>{
                // eslint-disable-next-line default-case
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message); 
                        break;            
                }
            });
    };

    const handelSignUp =() =>{
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch((err)=>{
                // eslint-disable-next-line default-case
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/week-password":
                        setPasswordError(err.message); 
                        break;            
                }
            });
    };

    const handelLogOut =()=>{
        fire.auth().signOut();
    }

    const authListener =()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                clearInputs();
                setUser(user);
            }  
            else
                setUser('');
        });
    }

    useEffect(()=>{
        authListener();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            {user ? (
                 <Hero handelLogOut={handelLogOut}/>
            ) : (
               <LogIn email={email} 
                setEmail={setEmail} 
                pass={password} 
                setPass={setPassword} 
                handelLogIn={handelLogIn} 
                handelSignUp={handelSignUp} 
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}/>
            )}    
        </div>
    );
};

export default MainLogIn;