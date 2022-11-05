import React from "react";
import { useState } from "react";
import styles from './ExpenseForm.module.css';


const ExpenseForm = () => {

    const [title, setTitle]= useState("")
    const [amount, setAmount]= useState("")
    const [date, setDate]= useState("")



    

    const submitTitle = (event) => {
        
        setTitle(event.target.value);
        
    }

    const submitAmount = (event) => {

        setAmount(event.target.value)
    }

    const submitDate = (event) => {

        setDate(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        return ({
            key: Math.random().toString(),
            item: title,
            amount: amount,
            date: date
        })
        
    }
    

    return (
        <div className={styles.content}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formelements}>
                    <div className={styles.ontope}>
                        <label> Title </label>
                        <input type = 'text' value = {title} onChange = {submitTitle}/>
                    </div>
                    <div className={styles.ontop}>
                        <label> Amount </label>
                        <input type = 'number' step = '0.01' value = {amount} onChange = {submitAmount} />
                    </div>
                </div>
                <div>
                    <div className={styles.ontop}>
                        <label> Date </label>
                        <input type = 'date' min = '2020-01-01' max = '2023-12-31' value={date} onChange = {submitDate} />
                    </div>
                </div>
                <input className={styles.button} type = 'submit' value = 'Add expense' />
            </form>
        </div>
    )
}


export default ExpenseForm;