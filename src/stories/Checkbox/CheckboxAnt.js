import React from "react";
import { Checkbox, ConfigProvider } from "antd";
import './style.scss'

function CheckboxAnt(props) {
  const CheckboxGroup = Checkbox.Group;
  const { selected, label, options, type, ...rest } = props;

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#3C418C",
      },
    }}
    >
      <Checkbox
        colorBgContainer={"red"}
        className={`checkbox`}
        {...rest}
      >
        {label ? label : null}
      </Checkbox>
    </ConfigProvider>
  );
}

export default CheckboxAnt;
