'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/items.js'

const AddItem = React.createClass({
  getInitialState() {
    return {
      itemText: ''
    }
  },
  render() {
    return (
      <div>
        <input ref="itemInput" onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} value={this.state.itemText} />
        <button onClick={this.handleAddItem}>+</button>
      </div>
    )
  },
  handleInputKeyUp(evt) {
    switch (evt.key) {
      case 'Enter':
        return this.handleAddItem()
      case 'Escape':
        return this.resetItemInput()
    }
  },
  handleInputChange(evt) {
    const itemText = evt.target.value
    this.setState({ itemText: itemText })
  },
  handleAddItem() {
    const { itemText } = this.state
    if (itemText) {
      this.props.addItem(itemText)
      this.resetItemInput()
    }
  },
  resetItemInput() {
    const { itemInput } = this.refs
    this.setState({ itemText: '' })
    itemInput.focus()
  }
})

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    addItem: bindActionCreators(ItemActions.addItem, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)
