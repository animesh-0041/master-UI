import TextField from "../TextField/TextField";
import type {Meta, StoryObj} from "@storybook/react";

const meta : Meta<typeof TextField> = {
  title: "forms/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["text", "search", "password", "number", "phone"],
    },
    placeholder: { type: "string" },
    width: { type: "string" },
    maxLength: {
      type: "number",
    },
    label: { type: "boolean" },
    labelText: { type: "string" },
    error: { type: "boolean" },
    errorText: { type: "string" },
    disabled: { type: "boolean" },
  },
};

export default meta;


type Story=StoryObj<typeof TextField>;

export const BaseTextField:Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
    width: "100%",
    label: true,
    labelText: "Label",
    error: true,
    errorText: "Value is required/invalid",
    disabled: false
  },
};