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
import "./styles.scss";

export type BoxProps = {
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
  value?: string;
}

export default function Box() {

  const {
    w,
    width,
    h,
    height,
    m,
    margin,
    p,
    padding,
    b,
    border,
    boxSizing,
    overflow,
    clip,
    position,
    zIndex,
    font,
    fontFamily,
    fontSize,
    fontVariant,
    fontWeight,
    lineHeight,
    textAlign,
    textDecoration,
    textIndent,
    textTransform,
    letterSpacing,
    wordSpacing,
    whiteSpace,
    c,
    color,
    bg,
    background,
    bgColor,
    backgroundColor,
    bgImage,
    backgroundImage,
    bgRepeat,
    backgroundRepeat,
    bgPosition,
    backgroundPosition,
    bgAttachment,
    backgroundAttachment,
    op,
    opacity,
    ls,
    listStyle,
    lsType,
    listStyleType,
    lsPosition,
    listStylePosition,
    lsImage,
    listStyleImage,
    d,
    display,
    v,
    visibility,
    float,
    clear,
    f,
    flex,
    fGrow,
    fShirink,
    fbasis,
    fDirection,
    fWrap,
    jc,
    justifyContent,
    ai,
    alignItems,
    ac,
    alignContent,
    as,
    alignSelf,
    o,
    order,
    g,
    grid,
    gArea,
    gridArea,
    gTemplate,
    gridTemplate,
    gtRows,

    ...rest
  } = props;

  return (
    <div style={{
      width: width||w,

      }}>
        
    </div>
  );
}
