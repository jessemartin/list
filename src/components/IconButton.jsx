'use strict'

import React from 'react'
import { render } from 'react-dom'
import Icon from './Icon.jsx'

require('../stylesheets/IconButton.css')

const IconButton = React.createClass({
  render() {
    const { icon, text, onClick } = this.props
    return (
      <a className="iconButton" title={text} onClick={onClick}>
        <Icon icon={icon} size="14" />
        <span className="iconButtonText">{text}</span>
      </a>
    )
  }
})

export default IconButton
