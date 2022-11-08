import React from "react";
import styles from './ExpenseForm.module.css';


const ExpenseForm = (props) => {

    

    
    

    return (
        <div className={styles.content}>
            <form className={styles.form}>
                <div className={styles.formelements}>
                    <div className={styles.ontope}>
                        <label> Title </label>
                        <input type = 'text' value = {props.title} onChange = {props.submitTitle}/>
                    </div>
                    <div className={styles.ontop}>
                        <label> Amount </label>
                        <input type = 'number' step = '0.01' value = {props.amount} onChange = {props.submitAmount} />
                    </div>
                </div>
                <div>
                    <div className={styles.ontop}>
                        <label> Date </label>
                        <input type = 'date' min = '2020-01-01' max = '2023-12-31' value={props.date} onChange = {props.submitDate} />
                    </div>
                </div>
                <button className={styles.button} type = 'submit' onClick={props.newExpense}> Add Expense </button> 
            </form>
        </div>
    )
}


export default ExpenseForm;