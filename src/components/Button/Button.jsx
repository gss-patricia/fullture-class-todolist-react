import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = (props) => {
  const isDisabled = props.disabled ? styles.disabled : styles.active;

  return (
    <button
      className={isDisabled}
      disabled={props.disabled}
      onClick={props.onclick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

Button.protoType = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
