import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      
        <div className={styles.user}> <img className={styles.logo} src="logo.png" alt="Logo" /> </div>
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
