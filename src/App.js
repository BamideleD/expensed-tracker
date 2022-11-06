import React from "react";
import { useState } from "react";
import styles from './App.module.css';
import ExpenseTab from './Components/OldExpenses/ExpenseTab';
import ExpenseInputTab from "./Components/NewExpenses/ExpenseInputTab";



const App = () => {

    const [title, setTitle]= useState("")
    const [amount, setAmount]= useState("")
    const [date, setDate]= useState("")



    

    const submitTitle = (event) => {
        
        setTitle(event.target.value);
        
    }

    const submitAmount = (event) => {

        setAmount(event.target.value)
    }

    const submitDate = (event) => {

        setDate(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            key: Math.random().toString(),
            item: title,
            amount: amount,
            date: date
        })
        
    }

    return (
        <div className= {styles.body}>
            <ExpenseInputTab 
                        newExpense = {handleSubmit}
                        title = {title}
                        amount = {amount}
                        date = {date} 
                        submitTitle = {submitTitle} 
                        submitAmount = {submitAmount} 
                        submitDate ={submitDate} />
            <ExpenseTab />
        </div>
    )
}


export default App;
