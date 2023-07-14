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
					dispatch(login({ username: signUpUsername, userId: data.result._id, userFirstName: data.result.firstname, token: data.result.token }));
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
					dispatch(login({ username: signInUsername, userId: data.result._id, userFirstName: data.result.firstname, token: data.result.token }));
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
    <div className={styles.loginScreenParentContainer}>
      <div className={styles.loginScreenLeftPart}>
        <img className={styles.twitterLogo} src="logo.png" />
      </div>
      <div className={styles.loginScreenRightPart}>
        <img className={styles.logo2} src="logo.png" />
        <h1 className={styles.texth1}>See what's happening</h1>
        <h3 className={styles.texth3}> Join hackatweet today. </h3>
        <div className={styles.signUp}>
          <input
            className={styles.input}
            type="text"
            placeholder="Firstname"
            onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}
            
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}/>

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>

          <button className={styles.buttonSignUp} onClick = {handleSignUp}>Sign up</button>
        </div>
        <div className={styles.signUp}>
          <h6 className={styles.texth6}> Already have an account ?</h6>

          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}
          />
          <button className={styles.buttonSignIn} onClick = {handleSignIn}>Sign in</button>
          
        </div>
      </div>
    </div>
  );
  }
}

export default LoginScreen;
