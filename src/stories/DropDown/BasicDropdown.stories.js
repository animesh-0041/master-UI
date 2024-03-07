import React from "react";
import BasicDropdown from "./BasicDropdown";
import { Menu } from "antd";

export default {
  title: "Forms/Dropdown",
  component: BasicDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["ellipsis", "actions"],
    },
    name: {
      control: {
        type: "radio",
        options: ["link", "button"],
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["link-dropdown", "button-dropdown"],
      },
    },
  },
};

const Template = (args) => <BasicDropdown {...args} />;

export const LinkDropdown = Template.bind({});
export const ButtonDropdown = Template.bind({});
const menu = (
  <Menu>
    <Menu.Item key="0">1st menu item</Menu.Item>
    <Menu.Item key="1">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
LinkDropdown.args = {
  type: 'ellipsis',
  variant: "link-dropdown",
  name: "Dropdown",
  menus: menu,
};

ButtonDropdown.args = {
  variant: "button-dropdown",
  menus: menu,
};
