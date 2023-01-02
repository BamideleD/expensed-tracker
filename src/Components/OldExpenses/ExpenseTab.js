import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseTab.module.css"
import Chart from './Chart'




const ExpenseTab = (props) => {


   const fullexpense = props.newExpensed


   const dataPoints = [ {month: 'Jan', key: 0},
                        {month: 'Feb', key: 0},
                        {month: 'Mar', key: 0},
                        {month: 'Apr', key: 0},
                        {month: 'May', key: 0},
                        {month: 'Jun', key: 0},
                        {month: 'Jul', key: 0},
                        {month: 'Aug', key: 0},
                        {month: 'Sep', key: 0},
                        {month: 'Oct', key: 0},
                        {month: 'Nov', key: 0},
                        {month: 'Dec', key: 0},
                           ]
                           
                           
                           
                           
    

    const [year, setYear] =useState(2021)

    const yearChange = (event) => {
        setYear(event.target.value)
    }


    const filteredExpense = fullexpense.filter(e => e.date.getFullYear() === (year/1))

    console.log(filteredExpense);


    for ( const expense of filteredExpense) {
        const expenseMonth = expense.date.getMonth()
        dataPoints[expenseMonth].key += expense.amount
    }
    
    

    
    
    

    



    

    
    
    
    

    
    return (
        <div className={styles.expenseTab}>

            <Chart dataPoints = {dataPoints} yearChange = {yearChange} expense = {filteredExpense}/>

            {filteredExpense.map((e) => {
                return(
                
                        <ExpenseItem id = {e.id} item = {e.item} amount = {e.amount} date = {e.date} key = {e.id}/>
                    
                )
            })}
        </div>
    )
}

export default ExpenseTab;