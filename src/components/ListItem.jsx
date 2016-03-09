'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/items.js'
import ListItemEditor from './ListItemEditor.jsx'

const ListItem = React.createClass({
  getInitialState() {
    return {
      isEditing: false
    }
  },
  render() {
    const { text, itemId } = this.props
    const { isEditing } = this.state
    return (
      <li>
        { isEditing ?
          <ListItemEditor itemId={itemId} text={text} onDoneEditing={this.onDoneEditing} />
          :
          <span>
            <span onClick={this.handleStartEditing}>{text}</span>
            <button onClick={this.handleDelete}>Delete</button>
          </span>
        }
      </li>
    )
  },
  handleStartEditing() {
    this.setState({ isEditing: true })
  },
  onDoneEditing() {
    this.setState({ isEditing: false })
  },
  handleDelete() {
    const { itemId } = this.props
    this.props.deleteItem(itemId)
  }
})

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteItem: bindActionCreators(ItemActions.deleteItem, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)
