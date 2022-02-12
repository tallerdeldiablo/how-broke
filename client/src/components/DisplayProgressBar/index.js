import './style.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import ProgressBar from 'react-bootstrap/ProgressBar'

    export default function DisplayProgressBar() {
        const MonthlyBudget= 'Rent';
        const Rent= 6666;


        // const { loading, data } = useQuery(QUERY_ALL_BUDGETS);
    
        // Use optional chaining to check if data exists and if it has a budgets property. If not, return an empty array to use.
        // const buds = data?.budgets || [];
    
        return (
          <>
    
    
    <div className="container">
  <h1 className='textBar'>Monthly Budget</h1>
  <br />
  <p className="textBar">{ MonthlyBudget}</p>
  <p className="textBar">{ Rent }</p>
  <div className="progress">
		<div className="progress-bar-red"></div>
	</div>
    <p className="textBar">Progress bar color blue</p>
  <div className="progress">
		<div className="progress-bar-blue"></div>
	</div>
    <p className="textBar">Progress bar color green</p>
  <div className="progress">
		<div className="progress-bar-green"></div>
	</div>
    <p className="textBar">Progress bar color orange</p>
  <div className="progress">
		<div className="progress-bar-orange"></div>
	</div>
</div>	
    
          
          </>
            // <section id="finances-display">
            
          
             
            // </section>
        )
    };