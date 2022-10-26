import React from "react";
import styles from './App.module.css'
import ExpenseTab from './Components/ExpenseTab'


const App = () => {
    return (
        <div className= {styles.body}>
            <ExpenseTab />
            <ExpenseTab />
        </div>
    )
}


export default App;
