import React from "react";
import styles from './ChartBar.module.css'



const ChartBar = (props) => {

        
    let barFill = '0%'

    if (props.max > 0) {
        barFill = Math.round((props.value/props.max) * 100) + '%'
    }
   

    

    
    




    return (
        <div className={styles.ChartBarOver}>
            <div className={styles.ChartBar}>
                <div className={styles.inner} style = {{height: barFill}} ></div>
            </div>
            <div className={styles.month}> {props.month} </div>
        </div>
    )
}

export default ChartBar;