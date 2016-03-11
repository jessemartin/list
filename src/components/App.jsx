'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import AddItem from './AddItem.jsx'
import List from './List.jsx'

require('../stylesheets/App.css')

export default React.createClass({
  render() {
    return (
      <div className="app">
        <AddItem />
        <List />
      </div>
    )
  }
})
