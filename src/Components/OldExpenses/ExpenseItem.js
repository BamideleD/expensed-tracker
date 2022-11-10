import React from "react";
import Dated from "./Dated";
import styles from './ExpenseItem.module.css';
import { useState } from "react";


const ExpenseItem = (props) => {
    const date = props.date

    let month = date?.toLocaleString('en-us', {month: 'short'}) || '';
    let year = date?.toLocaleString('en-us', {year: 'numeric'}) || '';
    let day = date?.toLocaleString('en-us', {day: 'numeric'}) || '';

    
    const [visible, setVisible] = useState(true);

    const deleteHandler = () => {
        setVisible (false)
    }
    
    if (visible === true){


        return(
            <div className={styles.expenseItem} onClick={deleteHandler} >
                <Dated month ={month} year = {year} day = {day}/>
                <div className={styles[`expenseItem-Item`]}> {props.item} </div>
                <div className={styles[`expenseItem-Amount`]}> $ {props.amount} </div>
            </div> 
        )


    }
    

    
    
}



export default ExpenseItem;