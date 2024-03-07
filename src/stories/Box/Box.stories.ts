import React from "react";
import Box from "./Box";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Box> = {
  title: "basic/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    margin: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" }, // assuming color input
    },
    border: {
      control: { type: "text" },
    },
    padding: {
      control: { type: "text" },
    },
    boxSizing: {
      control: { type: "text" },
    },
    overflow: {
      control: { type: "text" },
    },
    clip: {
      control: { type: "text" },
    },
    position: {
      control: { type: "text" },
    },
    zIndex: {
      control: { type: "number" }, // assuming numeric input
    },
    font: {
      control: { type: "text" },
    },
    fontSize: {
      control: { type: "text" },
    },
    fontFamily: {
      control: { type: "text" },
    },
    fontVariant: {
      control: { type: "text" },
    },
    fontWeight: {
      control: { type: "text" },
    },
    lineHeight: {
      control: { type: "text" },
    },
    textAlign: {
      control: { type: "text" },
    },
    textDecoration: {
      control: { type: "text" },
    },
    textIndent: {
      control: { type: "text" },
    },
    textTransform: {
      control: { type: "text" },
    },
    letterSpacing: {
      control: { type: "text" },
    },
    wordSpacing: {
      control: { type: "text" },
    },
    whiteSpace: {
      control: { type: "text" },
    },
    background: {
      control: { type: "color" }, // assuming color input
    },
    backgroundImage: {
      control: { type: "text" },
    },
    backgroundRepeat: {
      control: { type: "text" },
    },
    bgPosition: {
      control: { type: "text" },
    },
    backgroundPosition: {
      control: { type: "text" },
    },
    lsImage: {
      control: { type: "text" },
    },
    listStyleImage: {
      control: { type: "text" },
    },
    display: {
      control: { type: "text" },
    },
    visibility: {
      control: { type: "text" },
    },
    float: {
      control: { type: "text" },
    },
    clear: {
      control: { type: "text" },
    },
    flex: {
      control: { type: "text" },
    },
    fGrow: {
      control: { type: "number" }, // assuming numeric input
    },
    fDirection: {
      control: { type: "text" },
    },
    fWrap: {
      control: { type: "text" },
    },
    justifyContent: {
      control: { type: "text" },
    },
    alignItems: {
      control: { type: "text" },
    },
    alignContent: {
      control: { type: "text" },
    },
    alignSelf: {
      control: { type: "text" },
    },
    order: {
      control: { type: "number" }, // assuming numeric input
    },
    grid: {
      control: { type: "text" },
    },
    gridArea: {
      control: { type: "text" },
    },
    gridTemplate: {
      control: { type: "text" },
    },
    templateColumns: {
      control: { type: "text" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Box>;

export const BaseBox: Story = {
  args: {
    children: 'hello',
    width: "100px",
    height: "auto",
    border: '1px solid red',
    },
};
