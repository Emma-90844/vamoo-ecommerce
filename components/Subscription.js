import React from 'react';
import styles from "../styles/Subscription.module.css";

function Subscription() {
  return (
    <div className={styles.container}>
        <p>Delievering he latest proct trends and industry news straight to your inbox</p>
        <div className={styles.input_box}>
        <input type="text" placeholder="Search tools and resources..." className={styles.input}/>
        <button class={styles.button}>Subscribe</button>
        </div> 
    </div>
  )
}
export default Subscription