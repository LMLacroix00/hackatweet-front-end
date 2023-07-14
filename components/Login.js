import Signin from "/components/Signin.js";
import SignUp from "/components/SignUp.js";
import React from "react";

import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <img className={styles.logo} src="logo.jpeg" />
        <img className={styles.background} src="background.png" />
        <h1 className={styles.title}>See what's happening</h1>
        <h3> JOIN HACKATWEET TODAY </h3>
        <button className={styles.buttonUp}> sign up </button>
        <h4> Already have an account ?</h4>
        <button className={styles.buttonIn}> sign in </button>
      </main>
    </div>
  );
}

export default Login;
