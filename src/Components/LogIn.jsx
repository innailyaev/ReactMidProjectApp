import React from 'react';

const LogIn =(props)=>{

    const {email,
        setEmail,
        pass,
        setPass,
        handelLogIn,
        handelSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError}=props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username (Email)</label>
                <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={pass} onChange={(e)=>setPass(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {
                        (hasAccount) ? (
                        <><button onClick={handelLogIn}>Sign In</button>
                        <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p></>)
                        :(
                            <><button onClick={handelSignUp}>Sign Up</button>
                            <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p></>
                        ) 
                    }
                </div>
            </div>
        </section>
    )
}

export default LogIn;