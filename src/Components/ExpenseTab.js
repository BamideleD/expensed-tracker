import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseTab.module.css"


const ExpenseTab = () => {
    return (
        <div className={styles.expenseTab}>
            <ExpenseItem />
            <ExpenseItem />
            <ExpenseItem />
        </div>
    )
}

export default ExpenseTab;