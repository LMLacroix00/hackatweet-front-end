import React from "react";
import styles from "../styles/LoginScreen.module.css";

function LoginScreen() {
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
            id="signUpPassword"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            id="signUpUsername"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            id="signUpPassword"
          />
          <button className={styles.buttonSignUp}>Sign up</button>
        </div>
        <div className={styles.signUp}>
          <h6 className={styles.texth6}> Already have an account ?</h6>

          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            id="signUpUsername"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            id="signUpPassword"
          />
          <button className={styles.buttonSignIn}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
