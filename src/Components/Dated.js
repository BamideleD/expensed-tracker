import React from "react";
import styles from './Dated.module.css'



const Dated = (props) => {
    
    
    return (
        <div className={styles.time}>
             <div className={styles.month}> {props.month} </div>
             <div className={styles.year}> {props.year} </div>
             <div className={styles.day}> {props.day} </div>
        </div>
    )

}   

export default Dated;