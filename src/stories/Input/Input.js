/* eslint-disable default-case */
import React from "react";
import { Input, InputNumber } from "antd";
import PropTypes from "prop-types";
import * as FaIcons from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const getInput = (props) => {
  const {
    disable = false,
    error,
    label,
    errorText,
    size,
    placeholder = "Enter here",
    prefix,
    width,
    type = "text",
    ...rest
  } = props;
  const Icon = prefix && <FontAwesomeIcon icon={FaIcons[prefix]} />;

  switch (props.type) {
    case "search":
      return (
        <Input.Search
          disabled={disable}
          placeholder={placeholder}
          {...rest}
          className={`input ${error ? "error" : ""} ${type}`}
          style={{ width: width ? width : "100%" }}
        />
      );
    case "textarea":
      return (
        <Input.TextArea
          disabled={disable}
          placeholder={placeholder}
          {...rest}
          className={`input ${error ? "error" : ""} ${type}`}
          style={{ width: width ? width : "100%" }}
        />
      );
    case "password":
      return (
        <Input.Password
          disabled={disable}
          placeholder={placeholder}
          {...rest}
          className={`input ${error ? "error" : ""} ${type}`}
          style={{ width: width ? width : "100%" }}
        />
      );
    case "number":
      return (
        <InputNumber
          disabled={disable}
          className={`input ${error ? "error" : ""}`}
          {...rest}
          placeholder={placeholder}
          prefix={prefix ? Icon : false}
          style={{ width: width ? width : "100%" }}
        />
      );
    default:
      return (
        <Input
          disabled={disable}
          className={`input ${error ? "error" : ""}`}
          {...rest}
          placeholder={placeholder}
          prefix={prefix ? Icon : false}
          style={{ width: width ? width : "100%" }}
        />
      );
  }
};

function InputBase(props) {
  const { error, label,placeholder, labelText, errorText } = props;

  return (
    <React.Fragment>
      <div>
        {label && <div>{labelText}</div>}
        <Input placeholder={placeholder} className="input" />
        {error && <div>{errorText}</div>}
      </div>
    </React.Fragment>
  );
}

export default InputBase;

InputBase.propTypes = {
  onClick: PropTypes.func,
};

InputBase.defaultProps = {
  onClick: undefined,
};
