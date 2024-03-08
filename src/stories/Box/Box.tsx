import React, { useReducer, useEffect, useState } from "react";
import Text from "../Text/Text";
// import "./styles.scss";

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
  color?: string|string[];
  border?: string;
  marketSite?: boolean;
  float?: boolean;
  padding?: string;
  state?: string;
  value?: string;
};

export default function Box(props: any) {
  const {
    children,
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
    size,
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
    templateColumns,
    ...rest
  } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const getData = (ele: any) => {
    if (typeof ele === 'string') {
      return ele;

    } else if (Array.isArray(ele) && ele.length > 0) {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        return ele[0]; // Color for small screens
      } else if (windowWidth <= 1024) {
        return ele[1]; // Color for medium screens
      } else {
        return ele[2]; // Color for large screens
      }
    } else {
      // Return default color if color is not provided or invalid
      return 'black';
    }
  };

  useEffect(() => {
    const startTime = performance.now();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    const endTime = performance.now()
    setExecutionTime(endTime-startTime)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


console.log(executionTime);

  return (
    <div
      style={{
        color:getData(color),
        backgroundColor: getData(bgColor)
      }}
    >
      {executionTime && <p>Execution time: {executionTime} milliseconds</p>}
      {children}
    </div>
);
}
