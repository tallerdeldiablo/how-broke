import React from "react";
import { useQuery } from '@apollo/client';

import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

// import { QUERY_ALL_BUDGETS } from '../../utils/queries';
import './style.css';

export default function Display2() {

    // const { loading, data } = useQuery(QUERY_ALL_BUDGETS);

    // Use optional chaining to check if data exists and if it has a budgets property. If not, return an empty array to use.
    // const buds = data?.budgets || [];
const dataarray = [20, 10]

    return (
      <>
<ProgressBar now={60} />
      </>
   
    )
};