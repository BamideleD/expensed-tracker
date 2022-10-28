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


const ExpenseTab = () => {
    return (
        <div className={styles.expenseTab}>
            <ExpenseItem id = {expense[0].id} item = {expense[0].item} amount = {expense[0].amount} date = {expense[0].date} />
            <ExpenseItem id = {expense[1].id} item = {expense[1].item} amount = {expense[1].amount} date = {expense[1].date} />
            <ExpenseItem id = {expense[2].id} item = {expense[2].item} amount = {expense[2].amount} date = {expense[2].date} />
        </div>
    )
}

export default ExpenseTab;