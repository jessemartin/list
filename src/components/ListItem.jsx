'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/items.js'

const ListItem = React.createClass({
  getInitialState() {
    return {
      isEditing: false,
      editedText: this.props.text
    }
  },
  render() {
    const { text } = this.props
    const { isEditing } = this.state
    return (
      <li>
        { isEditing ?
          <div>
            <input ref="editInput" onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} />
            <button onClick={this.handleEditSave}>✔</button>
            <button onClick={this.handleEditCancel}>✘</button>
          </div>
          :
          <div>
            <span onClick={this.handleTextClick}>{text}</span>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        }
      </li>
    )
  },
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isEditing && this.state.isEditing) {
      this.initEditInput()
    }
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
  handleTextClick() {
    this.setState({ isEditing: true })
  },
  handleEditSave() {
    const { itemId } = this.props
    const { editedText } = this.state
    this.setState({ isEditing: false })
    this.props.editItem(itemId, editedText)
  },
  handleEditCancel() {
    this.setState({ isEditing: false })
  },
  handleDelete() {
    const { itemId } = this.props
    this.props.deleteItem(itemId)
  },
  initEditInput() {
    const { editInput } = this.refs
    const { text } = this.props
    editInput.value = text
    editInput.focus()
  }
})

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    editItem: bindActionCreators(ItemActions.editItem, dispatch),
    deleteItem: bindActionCreators(ItemActions.deleteItem, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)
