import React from 'react'
import { Tag as AntTag } from 'antd'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
import * as FaIcon from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss';


function Tag(props) {
  const {
    type,
    color,
    label,
    textColor,
    icon = null,
    ...rest
  } = props
  const Icon = icon ? <FontAwesomeIcon icon={FaIcon[icon]} /> : <FontAwesomeIcon icon={faCheck} />



  return (
    <AntTag
    className={`tags ${type}`}
    style={{ color: textColor }}
    icon={Icon}
    {...rest}
  >
    {label && label}
  </AntTag>
  )
}

export default Tag
