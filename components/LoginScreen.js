import { useRouter } from 'next/router'
import React from "react";
import styles from '../styles/LoginScreen.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import Link from 'next/link';






function LoginScreen() {


  
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpFirstname, setSignUpFirstname] = useState('');

	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const handleSignUp = () => {
		fetch('https://hackatweet-backend-tan.vercel.app/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
          console.log("Signup OK => redirect to home")
				}
			});
	};


	const handleSignIn = () => {
		fetch('https://hackatweet-backend-tan.vercel.app/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
          console.log("Signup OK => redirect to home")

				}
			});
	};

if(user.token){

  return(

    <div>
      <Link href="/home"> You are logged In </Link>
    </div>

  )
  }

  else{
    return (
    
      <div className = {styles.loginScreenParentContainer}>
        <div className = {styles.loginScreenLeftPart}> 
          <img className = {styles.twitterLogo} src = "logo.png"/>
        </div>
        <div className = {styles.loginScreenRightPart}> 
          <h1 className={styles.title}>See what's happening</h1>
          <h2> JOIN HACKATWEET TODAY </h2>
          <div className = {styles.signUp}>
              <input type="text" placeholder="Firstname" id="signUpfirstName" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}/>
              <input type="text" placeholder="Username" id="signUpUsername"  onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}/>
              <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
              <button id="register" onClick = {handleSignUp} >Sign up</button>
          </div>
          <div className = {styles.signIn}>
            <h4> Already have an account ?</h4>
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}/>
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
            <button id="register" onClick = {handleSignIn}>Sign in</button>
          </div>
        </div>
          
      </div>
    )
  }




}

export default LoginScreen;
