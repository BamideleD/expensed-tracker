import React from "react";
import styles from './AddExpense.module.css'


const AddExpense = (props) => {

  

    return (
        <div className = {styles.addExpense}>
            <button onClick={props.selectButton} className ={styles.button}> Add New Expense </button>
        </div>
    )
}


export default AddExpense;