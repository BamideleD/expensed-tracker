import React from "react";
import styles from './ExpenseInputTab.module.css';
import ExpenseForm from './ExpenseForm';


const ExpenseInputTab = () => {
    return (
        <div className={styles.expenseInputTab}>
            <ExpenseForm />
        </div>
    )
}


export default ExpenseInputTab