import React from "react";
import ButtonBase from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonBase> = {
  title: "Forms/Button",
  component: ButtonBase,
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
    size: {
      control: { type: "radio" },
      options: ["spacious", "default", "compact"],
    },
    label: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "shadow",
        "danger",
        "transparent",
        "danger-shadow",
        "danger-secondary",
      ],
    },
    backgroundColor: {
      control: { type: "color" },
    },
    color: {
      control: { type: "color" },
    },
    border: {
      control: { type: "text" },
    },
    marketSite: {
      control: { type: "boolean" },
    },
    state: {
      control: { type: "select" },
      options: ["static", "hover", "pressed", "focused", "disabled"],
    },
    disable: {
      control: { type: "select" },
      options: [true, false],
    },
    float: {
      control: { type: "boolean" },
    },
    Icon: {
      control: { type: "select" },
      options: [
        "arrow_down",
        "arrow_up",
        "arrow_left",
        "arrow_right",
        "check_circle",
        "ellipsis",
        "file",
      ],
    },
    padding: {
      control: { type: "text" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonBase>;

export const BaseButtonBase: Story = {
  args: {
    label: "Click",
    width: "100px",
    height: "auto",
    type: "primary",
    disable: false,
    size: "default",
    marketSite: false,
    float: false,
  },
};
