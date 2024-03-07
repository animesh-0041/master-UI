import React, { useReducer, useEffect } from "react";
import { Button, Tooltip, ConfigProvider } from "antd";
import {
  faArrowDown,
  faArrowUp,
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export type ButtonBaseProps = {
  Icon?: string;
  type?: string;
  width?: string;
  height?: string;
  disable?: boolean;
  size?: string;
  label?: string;
  tooltipText?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  marketSite?: boolean;
  float?: boolean;
  padding?: string;
  state?: string;
}

function reducer(action:String|undefined) {
  switch (action) {
    case "arrow_down":
      return <FontAwesomeIcon icon={faArrowDown} />;
    case "arrow_up":
      return <FontAwesomeIcon icon={faArrowUp} />;
    case "arrow_left":
      return <FontAwesomeIcon icon={faArrowLeft} />;
    case "arrow_right":
      return <FontAwesomeIcon icon={faArrowRight} />;
    case "check_circle":
      return <FontAwesomeIcon icon={faCheckCircle} />;
  }
}

export default function ButtonBase(props: ButtonBaseProps): any {
  let icon = reducer(props.Icon);

  const {
    type,
    width,
    height,
    disable,
    size,
    label,
    tooltipText,
    backgroundColor,
    color,
    border,
    marketSite,
    float,
    padding,
    ...rest
  } = props;

  return (
    <ConfigProvider>
      {marketSite?
      <Button
        disabled={disable}
        icon={icon}
        style={{
          width: width ? width : "auto",
          height: height ? height : "auto",
          backgroundColor: backgroundColor && backgroundColor,
          color: color && color,
          border: border && border,
          padding: padding && padding,
        }}
        className={`marketSitebutton ${type} ${size} ${marketSite && "marketSite"} ${
          float && "float"
        }`}
        {...rest}
      >
        {label && label}
      </Button>
      :
      <Button
        disabled={disable}
        icon={icon}
        style={{
          width: width ? width : "auto",
          height: height ? height : "auto",
          backgroundColor: backgroundColor && backgroundColor,
          color: color && color,
          border: border && border,
          padding: padding && padding,
        }}
        className={`button ${type} ${size} ${marketSite && "marketSite"} ${
          float && "float"
        }`}
        {...rest}
      >
        {label && label}
      </Button>
      }
    </ConfigProvider>
  );
}
