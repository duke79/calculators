import React from "react";
import ReactDOM from "react-dom";
// import RetirementPlan from "./components/retirement_plan";
import StockAnalysis from "./components/stock_analysis";

class App extends React.Component {
  render() {
    return <StockAnalysis />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
