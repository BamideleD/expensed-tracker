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
    
    const eggShell = {
        id: Math.random(),
        item: title,
        amount: amount,
        date: new Date(date)
    }
    
  

    

    


    
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



const [fullexpense, setFullExpense]= useState(expense)

const handleSubmit = (event) => {
    event.preventDefault();

    if (eggShell.item.length === 0){
        return ({})
    }
    
    else setFullExpense([...fullexpense, eggShell])

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
            <ExpenseTab 
                        newExpensed = {fullexpense}
                        />
        </div>
    )
}


export default App;
