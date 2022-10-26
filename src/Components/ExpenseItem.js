import React from "react";
import Dated from "./Dated";
import styles from './ExpenseItem.module.css';


const ExpenseItem = () => {
    return(
        <div className={styles.expenseItem}>
            <Dated />
            <div className={styles[`expenseItem-Item`]}> Item </div>
            <div className={styles[`expenseItem-Amount`]}> Amount </div>
        </div>
    )
}



export default ExpenseItem;