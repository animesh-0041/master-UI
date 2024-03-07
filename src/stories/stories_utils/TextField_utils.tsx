import { Input, InputNumber } from "antd";
import "../TextField/TextField.scss";

export const getInputBox = (props: any): any => {
  switch (props.type) {
    case "search":
      return <Input.Search className="text-field__input" {...props} />;
    case "number":
      return <InputNumber className="text-field__input" {...props} />;
    case "password":
      return <Input.Password className="text-field__input" {...props} />;
    case "phone":
      return <Input {...props} maxLength={props.maxLength} className="text-field__input" />;
    default:
      return <Input {...props}  className="text-field__input"/>;
  }
};
