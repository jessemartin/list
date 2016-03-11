'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/items.js'

const ListItemEditor = React.createClass({
  getInitialState() {
    return {
      editedText: this.props.text
    }
  },
  render() {
    const { itemId } = this.props
    const { editedText } = this.state
    return (
      <span>
        <input ref="editInput"
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyUp}
          value={editedText} />
        <button onClick={this.handleEditSave}>✔ Save</button>
        <button onClick={this.handleEditCancel}>✘ Cancel</button>
      </span>
    )
  },
  componentDidMount() {
    this.refs.editInput.focus()
  },
  handleInputKeyUp(evt) {
    switch (evt.key) {
      case 'Enter':
        return this.handleEditSave()
      case 'Escape':
        return this.handleEditCancel()
    }
  },
  handleInputChange(evt) {
    const editedText = evt.target.value
    this.setState({ editedText: editedText })
  },
  handleEditSave() {
    const { itemId } = this.props
    const { editedText } = this.state
    this.props.editItem(itemId, editedText)
    this.props.onDoneEditing()
  },
  handleEditCancel() {
    this.props.onDoneEditing()
  }
})

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    editItem: bindActionCreators(ItemActions.editItem, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemEditor)
