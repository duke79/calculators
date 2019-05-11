import "rc-slider/assets/index.css";
import plan from "../lib/plan";
import AutosizeInput from "react-input-autosize";
import "./retirement_plan.css";
import styled from "styled-components";

import React from "react";
import MyChart from "./my_chart";
import Slider, { createSliderWithTooltip } from "rc-slider";
const SliderWithTooltip = createSliderWithTooltip(Slider);

let S = {};

S.container = styled.div`
  /* margin-top: 5vw; */
  margin-bottom: 10vw;
  margin-left: 10vw;
  margin-right: 10vw;
`;

class RetirementPlan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      income: 750000,
      hike: 0.75,
      expense: 30,
      age: 29,
      death: 90,
      retirement: 42,
      out_of_date: false,
      returns: 12,
      inflation: 7,
      assets: 0
    };
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onRetirementAgeChange = this.onRetirementAgeChange.bind(this);
    this.onReturnsChange = this.onReturnsChange.bind(this);
    this.onInflationChange = this.onInflationChange.bind(this);
    this.onIncomeChange = this.onIncomeChange.bind(this);
    this.onHikeChange = this.onHikeChange.bind(this);
    this.onDeathChange = this.onDeathChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onAssetsChange = this.onAssetsChange.bind(this);
    this.onExpenseChange = this.onExpenseChange.bind(this);

    setInterval(
      function() {
        if (this.state.out_of_date) {
          this.forceUpdate();
          this.state.out_of_date = false;
        }
      }.bind(this),
      100
    );
  }

  onAgeChange(value) {
    this.state.age = value;
    this.state.out_of_date = true;
  }

  onRetirementAgeChange(value) {
    this.state.retirement = value;
    this.state.out_of_date = true;
  }

  onReturnsChange(value) {
    this.state.returns = value;
    this.state.out_of_date = true;
  }

  onInflationChange(value) {
    this.state.inflation = value;
    this.state.out_of_date = true;
  }

  onIncomeChange(event) {
    this.state.income = event.target.value * 100000;
    this.state.out_of_date = true;
  }

  onDeathChange(value) {
    this.state.death = value;
    this.state.out_of_date = true;
  }

  onAgeChange(value) {
    this.state.age = value;
    this.state.out_of_date = true;
  }

  onAssetsChange(event) {
    this.state.assets = event.target.value * 100000;
    this.state.out_of_date = true;
  }

  onHikeChange(event) {
    this.state.hike = event.target.value;
    this.state.out_of_date = true;
  }

  onExpenseChange(event) {
    this.state.expense = event.target.value;
    this.state.out_of_date = true;
  }

  render() {
    return (
      <S.container>
        <MyChart data={plan(this.state)} retirement={this.state.retirement} />
        {"Current Income (in hand):  "}
        <AutosizeInput
          name="form-field-name"
          type="number"
          value={this.state.income / 100000}
          onChange={this.onIncomeChange}
        />
        {" lakh"}
        <br />
        <br />
        {"Income Growth per annum::  "}
        <AutosizeInput
          name="form-field-name"
          type="number"
          value={this.state.hike}
          onChange={this.onHikeChange}
        />
        {" lakh"}
        <br />
        <br />
        {"Current Net Worth:  "}
        <AutosizeInput
          name="form-field-name"
          type="number"
          value={this.state.assets / 100000}
          onChange={this.onAssetsChange}
        />
        {" lakh"}
        <br />
        <br />
        {"Expenditure per month:  "}
        <AutosizeInput
          name="form-field-name"
          type="number"
          value={this.state.expense}
          onChange={this.onExpenseChange}
        />
        {" thousand"}
        <br />
        <br />
        <p>Current Age: {this.state.age}</p>
        <SliderWithTooltip
          defaultValue={this.state.age}
          onChange={this.onAgeChange}
        />
        <p>Retirement Age: {this.state.retirement}</p>
        <SliderWithTooltip
          defaultValue={this.state.retirement}
          onChange={this.onRetirementAgeChange}
        />
        <p>Life Expectancy: {this.state.death}</p>
        <SliderWithTooltip
          defaultValue={this.state.death}
          onChange={this.onDeathChange}
        />
        <p>Returns per annum: {this.state.returns}%</p>
        <SliderWithTooltip
          defaultValue={this.state.returns}
          onChange={this.onReturnsChange}
        />
        <p>Inflation: {this.state.inflation}%</p>
        <SliderWithTooltip
          defaultValue={this.state.inflation}
          onChange={this.onInflationChange}
        />
      </S.container>
    );
  }
}

export default RetirementPlan;
