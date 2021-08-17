import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      props.addTask();
    }
  };

  return (
    <input
      aria-label={props.ariaLabel}
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      onKeyPress={handleOnKeyPress}
    />
  );
};

Input.protoType = {
  ariaLabel: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
