import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { faCaretDown, faEllipsisV } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.scss';


function BasicDropdown(props) {
  const { className, type, variant, name, menus = false, ...rest } = props;
  return (
    <Dropdown
      overlay={
        <Menu>
        <Menu.Item key="0">1st menu item</Menu.Item>
        <Menu.Item key="1">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
      }
      trigger={["click"]}
      placement="bottomLeft"
      className={`dropdown`}
      {...rest}
    >
      {type === "actions" ? (
        <a href="#" key="link">
          {name}
          <FontAwesomeIcon icon={faCaretDown} className="dropdown-caret-icon" />
        </a>
      ) : (
        <a href="#" key="button">
          <Button className="button-dropdown">
            <FontAwesomeIcon className="dropdown-caret-icon" icon={faEllipsisV}/>
          </Button>
        </a>
      )}

    </Dropdown>
  );
}

export default BasicDropdown;