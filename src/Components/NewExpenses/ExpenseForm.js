import React from "react";
import styles from './ExpenseForm.module.css';


const ExpenseForm = () => {
    return (
        <div className={styles.content}>
            <form className={styles.form}>
                <div className={styles.formelements}>
                    <div className={styles.ontope}>
                        <label> Title </label>
                        <input type = 'text' />
                    </div>
                    <div className={styles.ontop}>
                        <label> Amount </label>
                        <input type = 'number' step = '0.01' />
                    </div>
                </div>
                <div>
                    <div className={styles.ontop}>
                        <label> Date </label>
                        <input type = 'date' min = '2020-01-01' max = '2023-12-31'/>
                    </div>
                </div>
                <input className={styles.button} type = 'button' value = 'Add expense' />
            </form>
        </div>
    )
}


export default ExpenseForm;