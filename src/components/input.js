import React from "react";
import AutosizeInput from "react-input-autosize";

function Input({ type = "number", parent = null, state_key = null }) {
  console.log("here");
  console.log(parent.state[state_key]);
  return (
    <AutosizeInput
      type={type}
      value={parent.state[state_key]}
      onChange={function(e) {
        parent.setState({
          [state_key]: e.target.value
        });
        console.log(parent.state);
      }}
    />
  );
}

export default Input;
