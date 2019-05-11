import React from "react";
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";
import AutosizeInput from "react-input-autosize";
import styled from "styled-components";
import Input from "./input";
import clone from "../lib/clone";
import Finance from "financejs";
var finance = new Finance();

const SliderWithTooltip = createSliderWithTooltip(Slider);

let S = {};

S.Grid = styled.div`
  display: grid;
  grid-row-gap: 4px;
`;

class StockAnalysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 10,
      initial_value: 10,
      final_value: 100,
      returns: 10
    };

    this.last_state = {};
  }

  sync_values() {
    if (this.last_state.final_value === this.state.final_value) {
      var new_final_value = this.state.initial_value;
      for (var i = 0; i < this.state.duration; i++) {
        new_final_value = new_final_value * (1 + this.state.returns / 100);
      }
      this.state.final_value = new_final_value;
    } else if (this.last_state.returns === this.state.returns) {
      var new_returns = finance.CAGR(
        this.state.initial_value,
        this.state.final_value,
        this.state.duration
      );
      this.state.returns = new_returns;
    }

    this.last_state = clone(this.state);
  }

  render() {
    this.sync_values();

    return (
      <S.Grid>
        <div>
          {"Duration: " + this.state.duration}
          <SliderWithTooltip
            value={this.state.duration}
            onChange={function(value) {
              this.setState({ duration: value });
            }.bind(this)}
          />
        </div>
        <S.Grid>
          <div>
            {"Initial value: "}
            <Input parent={this} state_key={"initial_value"} />
          </div>
          <div>
            {"Final value: "}
            <Input parent={this} state_key={"final_value"} />
          </div>
          <div>
            {"Returns per annum: "}
            <Input parent={this} state_key={"returns"} />
            {" %"}
          </div>
        </S.Grid>
      </S.Grid>
    );
  }
}

export default StockAnalysis;
