import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'underscore'
import * as ItemActions from '../actions/ListActions.js'
import ListItemEditor from './ListItemEditor.jsx'
import IconButton from './IconButton.jsx'

require('../stylesheets/ListItem.css')

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
    _.bindAll(this,
      'onDoneEditing',
      'handleStartEditing',
      'handleDelete'
    )
  }
  render() {
    const { text, itemId } = this.props
    const { isEditing } = this.state
    const className = this.getClassName()
    return (
      <li className={className}>
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
  }
  getClassName() {
    const classes = ['listItem']
    if (this.props.hidden) {
      classes.push(' hide')
    }
    return classes.join(' ')
  }
  handleStartEditing() {
    this.setState({ isEditing: true })
  }
  onDoneEditing() {
    this.setState({ isEditing: false })
  }
  handleDelete() {
    const { itemId } = this.props
    this.props.deleteItem(itemId)
  }
}

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteItem: bindActionCreators(ItemActions.deleteItem, dispatch),
  }
}

export { ListItem }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)
