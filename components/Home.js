import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  
  function userWindow(){
    if(user.token){
    return(
      <div classeName= {styles.userwindow}>
        <div className = {styles.userInfoContainer}> 
          <img className = {styles.userimg} src="egg.png"/>
          <div className = {styles.usernamesContainer}>
            <p className = {styles.userfirstname}>
            {user.firstname}
            </p>
            <p className = {styles.username}>
            {user.username}
            </p>
          </div>
        </div>
      
        <btn className = {styles.logoutBtn}>Logout</btn>    
      </div>
    )
  }
}

  return (
    <div className={styles.container}>
      
        <div className={styles.user}> <img className={styles.logo} src="logo.png" alt="Logo" /> 
        {userWindow()}
        </div>
        <div className={styles.home}> Home
        <div classeName={styles.tweet}>
         <input type="text" id="name" placeholder="What's up ?"/>
         <button type="submit">Tweet</button>
        </div>
         </div>
        <div className={styles.trends}> Trends </div>
        {/* <div>
        <input type="text" id="name" placeholder="What's up ?"/>
        <button type="submit">Tweet</button>
        </div> */}
      
    </div>
  );
}

export default Home;
