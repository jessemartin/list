import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/ListActions.js'
import ListItemEditor from './ListItemEditor.jsx'
import IconButton from './IconButton.jsx'

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
          <div className="listItemContent">
            <span className="listItemText" onClick={this.handleStartEditing} title="Click to edit">{text}</span>
            <IconButton icon="trashCan" text="Delete" onClick={this.handleDelete} />
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
