import React, { useReducer, useEffect } from "react";
import { styleProperty } from "../store";
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
  color?: string;
  border?: string;
  marketSite?: boolean;
  float?: boolean;
  padding?: string;
  state?: string;
  value?: string;
};

export default function Text(props: any) {
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

  return (
    <div
      style={{
        width: width || w,
        height: height || h,
        margin: margin || m,
        color: color || c,
        border: border || b,
        padding: padding || p,
        boxSizing: boxSizing,
        overflow: overflow,
        clip: clip,
        position: position,
        zIndex: zIndex,
        font: font,
        fontSize: fontSize || size,
        fontFamily: fontFamily,
        fontVariant: fontVariant,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        textAlign: textAlign,
        textDecoration: textDecoration,
        textIndent: textIndent,
        textTransform: textTransform,
        letterSpacing: letterSpacing,
        wordSpacing: wordSpacing,
        whiteSpace: whiteSpace,
        background: background || bg,
        backgroundImage: backgroundImage || bgImage,
        backgroundRepeat: backgroundRepeat,
        bgPosition: bgPosition,
        backgroundPosition: backgroundPosition,
        lsImage: lsImage,
        listStyleImage: listStyleImage,
        display: display || d,
        visibility: visibility || v,
        float: float,
        clear: clear,
        flex: flex || f,
        fGrow: fGrow,
        fDirection: fDirection,
        fWrap: fWrap,
        justifyContent: justifyContent || jc,
        alignItems: alignItems || ai,
        alignContent: alignContent || ac,
        alignSelf: alignSelf || as,
        order: order || o,
        grid: grid || g,
        gridArea: gridArea || gArea,
        gridTemplate: gridTemplate || gTemplate,
        templateColumns: templateColumns,
      }}
    >
      {children}
    </div>
  );
}