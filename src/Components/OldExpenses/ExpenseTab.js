import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseTab.module.css"




const ExpenseTab = (props) => {


   const fullexpense = props.newExpensed
    
    
    
    
    
    return (
        <div className={styles.expenseTab}>
            {fullexpense.map((e) => {
                return(
                    <ExpenseItem id = {e.id} item = {e.item} amount = {e.amount} date = {e.date} key = {e.id}/>
                )
            })}
        </div>
    )
}

export default ExpenseTab;