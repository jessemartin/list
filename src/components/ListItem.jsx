'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/items.js'
import ListItemEditor from './ListItemEditor.jsx'
import Icon from './Icon.jsx'

require('../stylesheets/ListItem.css')

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
      <li className="listItem">
        { isEditing ?
          <ListItemEditor
            itemId={itemId}
            text={text}
            onDoneEditing={this.onDoneEditing} />
          :
          <div>
            <span onClick={this.handleStartEditing}>{text}</span>
            <a className="deleteButton button" title="Delete" onClick={this.handleDelete}>
              <Icon icon="trashCan" />
            </a>
          </div>
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
