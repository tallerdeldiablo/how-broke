import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import BillsInput from "../components/BillsInput";
import BillsList from "../components/BillsList";
import BudgetInput from "../components/BudgetInput";
import Display from "../components/Display";

// const Home = () => {
//   return (
//     <div className="container">
//       <CategoryMenu />
//       <ProductList />
//       <Cart />
//       <BudgetInput />
//       <BillsInput />
//       <BillsList />
//       <Display />
//     </div>
//   );
// };

const Home = () => {
  return (
    <main>
    <BudgetInput />
    <BillsInput />
    <BillsList />
    <Display />
    </main>
  )
}

export default Home;
