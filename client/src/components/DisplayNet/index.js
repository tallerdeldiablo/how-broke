import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_BUDGETS } from '../../utils/queries';
import './style.css';

export default function Display2() {

    const { loading, data } = useQuery(QUERY_ALL_BUDGETS);

    // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
    const buds = data?.budgets || [];

    return (
      <>
<h1 id="titlenet" className="fontcourier"> NETBUDGET<br/> $50<br/></h1>


      
      </>
        // <section id="finances-display">
        
      
         
        // </section>
    )
};