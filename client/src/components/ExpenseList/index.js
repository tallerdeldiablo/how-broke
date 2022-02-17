import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ExpenseList = ({ expenses, title }) => {
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }
  var number = 0

  return (
    <div id="expense-list">
      <h3>{title}</h3>
      {expenses &&
        expenses.map((expense) => (


          
          <div className="card">
            
            <h4 className="card-header">
              <span style={{ fontSize: '1rem' }}>
                       </span>
            </h4>
            <div className="card-b">
              <p></p>
            </div>
        
            <table key={expense._id}  class="table table-striped">
  <thead>
    <tr> <th scope="col">Date</th>
      <th scope="col"></th>
      <th scope="col">Expense</th>
      <th scope="col">edit</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{expense.createdAt}</th>
      <td>{expense.expensevalue}</td>
      <td>{expense.expenseValue}</td>
      <td>    <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/expenses/${expense._id}`}
            >
              <img src="https://img.icons8.com/color-glass/25/000000/enter-2.png"/>
            </Link></td>
    </tr>
  
  </tbody>
</table>
          </div>
          
        ))}
    </div>
  );
};

export default ExpenseList;
