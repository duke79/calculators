import React from "react";
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";
import AutosizeInput from "react-input-autosize";
import styled from "styled-components";
import Input from "./input";

const SliderWithTooltip = createSliderWithTooltip(Slider);

let S = {};

S.Grid = styled.div`
  display: grid;
`;

class StockAnalysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 10,
      initial_value: 10,
      final_value: 100
    };
  }

  render() {
    return (
      <S.Grid>
        <SliderWithTooltip
          value={this.state.duration}
          onChange={function(value) {
            this.setState({ duration: value });
            console.log(this.state);
          }.bind(this)}
        />
        <S.Grid>
          {"Initial value: "}
          <AutosizeInput
            type="number"
            defaultValue={this.state.initial_value}
            onChange={function(e) {
              this.setState({
                initial_value: e.target.value
              });
              console.log(this.state);
            }.bind(this)}
          />
          <Input parent={this} state_key={"duration"} />
        </S.Grid>
      </S.Grid>
    );
  }
}

export default StockAnalysis;
