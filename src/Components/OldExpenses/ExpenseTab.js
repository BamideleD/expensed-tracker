import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseTab.module.css"

const expense = [
    {
        id: 1,
        item: "Phone",
        amount: 1000,
        date: new Date(2021, 6, 31)
    
    },
    {
        id: 2,
        item: "Car",
        amount: 9000,
        date: new Date(2021, 11, 20)
    
    },
    {
        id: 3,
        item: "Clothes",
        amount: 800,
        date: new Date(2020, 1, 14)
    
    }
]

// const mapExpense = expense.map((obj) => {
//     return (
//         {
//             obj
//         }
//     )
// })

const ExpenseTab = () => {
    return (
        <div className={styles.expenseTab}>
            {expense.map((e) => {
                return(
                    <ExpenseItem id = {e.id} item = {e.item} amount = {e.amount} date = {e.date} key = {e.id}/>
                )
            })}
        </div>
    )
}

export default ExpenseTab;