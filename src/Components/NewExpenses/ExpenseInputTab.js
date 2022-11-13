import React from "react";
import styles from './ExpenseInputTab.module.css';
import ExpenseForm from './ExpenseForm';
import { useState } from "react";
import AddExpense from "./AddExpense";


const ExpenseInputTab = (props) => {

    

    const buttonPress = (props) => {
        setButtonClick(<ExpenseForm  
                                        newExpense = {props.newExpense}
                                        title = {props.title}
                                        amount = {props.amount}
                                        date = {props.date}
                                        submitTitle = {props.submitTitle} 
                                        submitAmount = {props.submitAmount} 
                                        submitDate ={props.submitDate} />)
    }


    const [buttonClick, setButtonClick]= useState(<AddExpense selectButton = {buttonPress}/>)

    

    
    return (
        <div className={styles.expenseInputTab}> {buttonClick} </div>
    )
}


export default ExpenseInputTab


//    <ExpenseForm 
//                         newExpense = {props.newExpense}
//                         title = {props.title}
//                         amount = {props.amount}
//                         date = {props.date}
//                         submitTitle = {props.submitTitle} 
//                         submitAmount = {props.submitAmount} 
//                         submitDate ={props.submitDate} /> 