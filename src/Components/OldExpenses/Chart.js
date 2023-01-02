import React from "react";
import ChartBar from "./ChartBar";
import styles from './Chart.module.css';





const Chart = (props) => {

    const dataValue = props.dataPoints.map((v) => v.key)

    const max = Math.max(...dataValue)

    console.log(max);
    


    
    
    

    return(
     
        <div>
            <div className= {styles.filter}>
                <b className= {styles.text}> Filter by Year </b>

                <select defaultValue={2021} onChange = {props.yearChange} className={styles.option}>
                    <option> 2020 </option>
                    <option> 2021 </option>
                    <option> 2022 </option>
                    <option> 2023 </option>
                </select>

            </div>
            <div className= {styles.chart}>
                {props.dataPoints.map (dataPoint => <ChartBar max = {max} value = {dataPoint.key} expense = {props.expense} month = {dataPoint.month} key = {dataPoint.month}/>)}
            </div>
            
        </div>

    )
}


export default Chart;