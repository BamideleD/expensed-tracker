import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseTab.module.css"
import Chart from './Chart'




const ExpenseTab = (props) => {


   const fullexpense = props.newExpensed


   const dataPoints = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    
    
    
    
    return (
        <div className={styles.expenseTab}>

            <Chart dataPoints = {dataPoints}/>

            {fullexpense.map((e) => {
                return(
                    <div>
                        <ExpenseItem id = {e.id} item = {e.item} amount = {e.amount} date = {e.date} key = {e.id}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ExpenseTab;