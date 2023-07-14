import React from "react";
import styles from '../styles/LoginScreen.module.css';



function LoginScreen() {
  return (
    <div className = {styles.loginScreenParentContainer}>
      <div className = {styles.loginScreenLeftPart}> 
        <img src = "logo.jpg"/>
      </div>
      <div className = {styles.loginScreenRightPart}> 
        <h1 className={styles.title}>See what's happening</h1>
        <h2> JOIN HACKATWEET TODAY </h2>
        <div className = {styles.signUp}>
            <input type="text" placeholder="Firstname" id="signUpPassword"  />
            <input type="text" placeholder="Username" id="signUpUsername"/>
            <input type="password" placeholder="Password" id="signUpPassword"  />
            <button id="register" >Sign up</button>
        </div>
        <div className = {styles.signUp}>
          <h4> Already have an account ?</h4>
          <input type="text" placeholder="Firstname" id="signUpPassword"  />
          <input type="text" placeholder="Username" id="signUpUsername"/>
          <input type="password" placeholder="Password" id="signUpPassword"  />
					<button id="register" >Sign in</button>
        </div>
      </div>
        
    </div>
  );
}

export default LoginScreen;
