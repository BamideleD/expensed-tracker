import React from "react";
import styles from './App.module.css';
import ExpenseTab from './Components/OldExpenses/ExpenseTab';
import ExpenseInputTab from "./Components/NewExpenses/ExpenseInputTab";



const App = () => {
    return (
        <div className= {styles.body}>
            <ExpenseInputTab />
            <ExpenseTab />
        </div>
    )
}


export default App;
