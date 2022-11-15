import React from "react";
import ChartBar from "./ChartBar";
import styles from './Chart.module.css';





const Chart = (props) => {
    return(
        <div className= {styles.chart}>
            {props.dataPoints.map (dataPoint => <ChartBar month = {dataPoint}/>)}
        </div>
    )
}


export default Chart;