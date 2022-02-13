import React from "react";
import Display2 from "../Display2";
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetCard from "../BudgetCard";
// import DisplayProgressBar from "../DisplayProgressBar";
import ProgressBars from "../ProgressBars";

// import Display3 from "../Display3";



export default function Display() {
    return (
    <>
    <Display2/>
    <BudgetCard/>
    <br></br>
    <ProgressBars/>

    </>
    )
};