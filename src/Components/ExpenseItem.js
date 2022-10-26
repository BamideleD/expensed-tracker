import React from "react";
import Dated from "./Dated";
import styles from './ExpenseItem.module.css';


const ExpenseItem = () => {
    const date = new Date()
    // function month() {
    //     return (
    //         date.toLocaleDateString('en-us', {month: 'short'})
    //     )
    // }
    // function year() {
    //     return (
    //         date.toLocaleDateString('en-us', {year: 'numeric'})
    //     )
    // }
    // function day() {
    //     return (
    //         date.toLocaleDateString('en-us', {day: 'numeric'})
    //     )
    // }

    let month = date.toLocaleDateString('en-us', {month: 'short'})
    let year = date.toLocaleDateString('en-us', {year: 'numeric'})
    let day = date.toLocaleDateString('en-us', {day: 'numeric'})

    
    return(
        <div className={styles.expenseItem}>
            <Dated month ={month} year = {year} day = {day}/>
            <div className={styles[`expenseItem-Item`]}> Item </div>
            <div className={styles[`expenseItem-Amount`]}> Amount </div>
        </div>
    )
}



export default ExpenseItem;