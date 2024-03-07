import React from "react";
import TooltipAnt from "./TooltipAnt";

export default {
  title: "Forms/Tooltip",
  component: TooltipAnt,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "color" },
    },
    type: {
      control: { type: "select" },
      options: ["ellipsis", "actions"],
    },
    label: {
      control: { type: "text" },
    },
    direction: {
      control: { type: "select" },
      options: [
        "top",
        "top-left",
        "top-right",
        "right",
        "left",
        "bottom",
        "bottom-left",
        "bottom-right",
      ],
    },
  },
};

const Template = (args) => <TooltipAnt {...args} />;

export const LinkDropdown = Template.bind({});
export const ButtonDropdown = Template.bind({});

LinkDropdown.args = {
  type: "ellipsis",
  direction: "top",
  label: 'Thanks for using antd. Have a nice day!',
};
