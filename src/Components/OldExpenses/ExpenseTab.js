import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseTab.module.css"
import Chart from './Chart'




const ExpenseTab = (props) => {


   const fullexpense = props.newExpensed


   const dataPoints = [ {month: 'Jan', key: 1},
                        {month: 'Feb', key: 2},
                        {month: 'Mar', key: 3},
                        {month: 'Apr', key: 4},
                        {month: 'May', key: 5},
                        {month: 'Jun', key: 6},
                        {month: 'Jul', key: 7},
                        {month: 'Aug', key: 8},
                        {month: 'Sep', key: 9},
                        {month: 'Oct', key: 10},
                        {month: 'Nov', key: 11},
                        {month: 'Dec', key: 12},
                           ]
                           
                           
                           
                           
    

    const [year, setYear] =useState(2021)

    const yearChange = (event) => {
        setYear(event.target.value)
        setFiltered(fullexpense.filter(e => e.date.getFullYear() === year))
    }
    
    const [filteredExpense, setFiltered] = useState(fullexpense.filter(e => e.date.getFullYear() === year))
    
    

    
    
    

    



    

    
    
    
    

    
    return (
        <div className={styles.expenseTab}>

            <Chart dataPoints = {dataPoints} yearChange = {yearChange}/>

            {filteredExpense.map((e) => {
                return(
                
                        <ExpenseItem id = {e.id} item = {e.item} amount = {e.amount} date = {e.date} key = {e.id}/>
                    
                )
            })}
        </div>
    )
}

export default ExpenseTab;