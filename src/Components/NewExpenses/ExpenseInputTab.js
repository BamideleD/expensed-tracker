import React from "react";
import styles from './ExpenseInputTab.module.css';
import ExpenseForm from './ExpenseForm';
import { useState } from "react";
import AddExpense from "./AddExpense";


const ExpenseInputTab = (props) => {


    
    const [buttonClick, setButtonClick]= useState(true)
    

    const buttonPress = () => {
        

        setButtonClick(false)

    
    }
    

    

    
   if (buttonClick === true) {
    
    
    return (
        <div className={styles.expenseInputTab}>
            
            
            <div>
                <AddExpense selectButton = {buttonPress}/>
            </div>
            
        </div>
    )
   }
    


    if (buttonClick === false){

        return(
            <div className={styles.expenseInputTab}>
            <ExpenseForm  
                        newExpense = {props.newExpense}
                        title = {props.title}
                        amount = {props.amount}
                        date = {props.date}
                        submitTitle = {props.submitTitle} 
                        submitAmount = {props.submitAmount} 
                        submitDate ={props.submitDate} />
            </div>
        )
                
    }
    
        
    
}


export default ExpenseInputTab