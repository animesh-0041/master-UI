import { Typography } from "antd";
import "./TextField.scss";
import React from "react";
import { getInputBox } from "../stories_utils/TextField_utils";
import { ConfigProvider } from "antd";
import "../theme.scss";

export type TextFieldProps = {
  placeholder: string;
  type: string;
  label: boolean;
  width: string;
  labelText: string;
  error: boolean;
  errorText: string;
  maxLength?: number;
  disabled: boolean;
};

export default function TextField(props: TextFieldProps): React.ReactNode  {
  return (
    <ConfigProvider theme={{
      components: {
        Input: {
          activeShadow:"0 0 0 black",
        },
      },
    }}>
      <div className="text-field">
        {props.label && (
          <Typography className="text-field__label">
            {props.labelText}
          </Typography>
        )}

        {getInputBox(props)}

        {props.error && (
          <Typography className="text-field__error">
            {props.errorText}
          </Typography>
        )}
      </div>
    </ConfigProvider>
  );
}
