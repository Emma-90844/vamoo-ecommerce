import React , {useState, useEffect}from 'react'

import styles from "../styles/ProductSlider.module.css";




function Timer({duration}) {


    
const [time, setTime] = useState(duration);


    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        },1000);
        },[time])
        
const getFormattedTime = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const  total_minutes = parseInt(Math.floor(total_seconds / 60));
    const  total_hours = parseInt(Math.floor(total_minutes / 60));
    const days = parseInt(Math.floor(total_hours / 24));

    const  seconds = parseInt(total_seconds % 60);
    const  minutes = parseInt(total_minutes % 60);
    const  hours = parseInt(total_hours % 24);

    return  `
    ${days} : ${hours} : ${minutes} :${seconds}
    
    `
}





  return (

    // <div>
    //     {getFormattedTime(time)}
  
    // </div>


   
    <div className={styles.time_container}>

        <div className={styles.time_inner_container}>
        
        
            <div  className={styles.time_box}>
            <div className={styles.time_box_top}>
                <p className={styles.time_number}>4</p>
            </div>
            <div className={styles.time_box_bottom}>
                <p className={styles.time_text}>Days</p>
            </div>
            </div>


            <div  className={styles.time_box}>
            <div className={styles.time_box_top}>
                <p className={styles.time_number}>10</p>
            </div>
            <div className={styles.time_box_bottom}>
                <p className={styles.time_text}>Hours</p>
            </div>
            </div>

            <div  className={styles.time_box}>
            <div className={styles.time_box_top}>
                <p className={styles.time_number}>5</p>
            </div>
            <div className={styles.time_box_bottom}>
                <p className={styles.time_text}>Minutes</p>
            </div>
            </div>


            <div  className={styles.time_box}>
            <div className={styles.time_box_top}>
                <p className={styles.time_number}>30</p>
            </div>
            <div className={styles.time_box_bottom}>
                <p className={styles.time_text}>Seconds</p>
            </div>
            </div>


        </div>
    
    </div>
  )
}

export default Timer