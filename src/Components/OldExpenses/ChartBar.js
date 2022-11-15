import React from "react";
import styles from './ChartBar.module.css'



const ChartBar = (props) => {
    return (
        <div className={styles.ChartBarOver}>
            <div className={styles.ChartBar}></div>
            <div className={styles.month}> {props.month} </div>
        </div>
    )
}

export default ChartBar;