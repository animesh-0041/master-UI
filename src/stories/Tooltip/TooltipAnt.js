import React, { useReducer, useEffect } from "react";
import { Button, Tooltip, ConfigProvider } from "antd";
import "./style.scss";

function TooltipAnt(props) {
  const { label, type, color = "#292B37", ...rest } = props;

  return (
    <ConfigProvider
    theme={{
      token: {
        paddingSM: 12,
      },
    }}>
      <Tooltip
        title={label}
        trigger="click"
        color={color}
        // defaultOpen
      >
        <Button>Click</Button>
      </Tooltip>
    </ConfigProvider>
  );
}

export default TooltipAnt;
