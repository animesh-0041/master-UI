import React from "react";
import Input from "./Input";

export default {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    showlabel:{
      control: {type: "boolean"}
    },
    disable: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "boolean" },
    },
    labelText: {
      control: { type: "text" },
    },
    error: {
      control: { type: "select" },
      options: [true, false],
    },
    errorText: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["text", "number", "password", "textarea", "search"],
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
export const InputWithIcon = Template.bind({});
export const InputWithPassword = Template.bind({});
export const InputNumbers = Template.bind({});

Default.args = {
  type: 'password',
  disable: false,
  showlabel: true,
  label: true,
  labelText: "Label*",	
  error: false,
  errorText: "Yo this is not correct.",
  placeholder: "Placeholder",
  width: '100%',
};

