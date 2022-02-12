import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_BUDGETS } from '../../utils/queries';
import './style.css';

export default function Display2() {

    const { loading, data } = useQuery(QUERY_ALL_BUDGETS);

    // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
    const buds = data?.budgets || [];

    return (
        <main>
     
            {/* If the data is still loading, render a loading message */}
            {loading ? (
              <div>Loading...</div>
            ) : (

                <>
                <div> 
                                  
                  </div>
                  <table id="customers">
                    <tr>
                      
                        <th>Expenses</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>{data.budgets[1].name}</td>
                        <td>{data.budgets[1].amountofmoney}</td>
               
                    </tr>
                    <tr>
                        <td>{data.budgets[2].name}</td>
                        <td>{data.budgets[2].amountofmoney}</td>
                    </tr>
                    <tr>
                    <td>{data.budgets[3].name}</td>
                        <td>{data.budgets[3].amountofmoney}</td>
               
                    </tr>
           

                    <tr>
                    <td>Total</td>
                        <td>{data.budgets[1].amountofmoney+data.budgets[2].amountofmoney+data.budgets[3].amountofmoney}</td>
               
                    </tr>
                    
                    </table>


            </>
                
            )}
   
      </main>
        // <section id="finances-display">
        
      
         
        // </section>
    )
};