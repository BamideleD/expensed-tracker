import React from "react";
import styles from "./ExpenseTab.module.css"


const ExpenseTab = () => {
    return (
        <div className={styles.expenseTab}>
            <ul className={styles[`expenseTab-items`]}>
                <div> Date </div>
                <div> Item </div>
                <div> Amount </div>
            </ul>
        </div>
    )
}

export default ExpenseTab;