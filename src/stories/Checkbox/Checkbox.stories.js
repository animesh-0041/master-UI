import React from 'react'
import CheckboxAnt from './CheckboxAnt'

export default {
  title: 'Forms/Checkbox',
  component: CheckboxAnt,
  tags: ["autodocs"],  argTypes: {
    disabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
  }
}

const Template = args => <CheckboxAnt {...args} />

export const BasicCheckbox = Template.bind({})
export const GroupCheckbox = Template.bind({})
export const WithoutWrapperCheckbox = Template.bind({})

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
BasicCheckbox.args = {
  label: 'Checkbox Label',
  defaultChecked: false,
  selected: true,
}
GroupCheckbox.args = {
  type: 'group',
  options: options,
  selected: true,
}

WithoutWrapperCheckbox.args = {
  label: 'Without Wrapper Checkbox Label',
  defaultChecked: false,
  selected: true,
  type: 'noWrapper',
}
