import React from "react";
import styles from './ExpenseInputTab.module.css';
import ExpenseForm from './ExpenseForm';


const ExpenseInputTab = (props) => {

    
    return (
        <div className={styles.expenseInputTab}>
           <ExpenseForm 
                        newExpense = {props.newExpense}
                        title = {props.title}
                        amount = {props.amount}
                        date = {props.date}
                        submitTitle = {props.submitTitle} 
                        submitAmount = {props.submitAmount} 
                        submitDate ={props.submitDate} />
        </div>
    )
}


export default ExpenseInputTab