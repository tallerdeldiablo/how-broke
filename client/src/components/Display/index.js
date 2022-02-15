import React from "react";
import Display2 from "../Display2";
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayExpense from "../DisplayExpense";
import BudgetCard from "../BudgetCard";
// import DisplayProgressBar from "../DisplayProgressBar";
import ProgressBars from "../ProgressBars";
import ModalT from "../ModalT";

// import Display3 from "../Display3";



export default function Display() {
    return (
    <>
     <DisplayExpense/>
    <Display2/>

     <DisplayExpense/>

     <BudgetCard/>
     <br></br>
     <ProgressBars/>

//     <BudgetCard/>
//     <br></br>
//     <ProgressBars/>



    </>
    )
};