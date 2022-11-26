import React from "react";
import ChartBar from "./ChartBar";
import styles from './Chart.module.css';





const Chart = (props) => {


    

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
                {props.dataPoints.map (dataPoint => <ChartBar month = {dataPoint.month} key = {dataPoint.key}/>)}
            </div>
        </div>

    )
}


export default Chart;