import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/ListActions.js'
import ListItemEditor from './ListItemEditor.jsx'
import IconButton from './IconButton.jsx'

require('../stylesheets/ListItem.css')

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      hidden: true,
    }
  }
  componentDidMount() {
    setTimeout(() => this.show(), 1)
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
            onDoneEditing={this.onDoneEditing.bind(this)} />
          :
          <div className="listItemContent">
            <span className="listItemText" onClick={this.handleStartEditing.bind(this)} title="Click to edit">{text}</span>
            <IconButton icon="trashCan" text="Delete" onClick={this.handleDelete.bind(this)} />
          </div>
        }
      </li>
    )
  }
  getClassName() {
    const classes = ['listItem']
    if (this.state.hidden) {
      classes.push(' hide')
    }
    return classes.join(' ')
  }
  hide() {
    this.setState({ hidden: true })
  }
  show() {
    this.setState({ hidden: false })
  }
  handleStartEditing() {
    this.setState({ isEditing: true })
  }
  onDoneEditing() {
    this.setState({ isEditing: false })
  }
  handleDelete() {
    const { itemId } = this.props
    this.hide()
    setTimeout(() => {
      this.props.deleteItem(itemId)
    }, 500)
  }
}

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteItem: bindActionCreators(ItemActions.deleteItem, dispatch)
  }
}

export { ListItem }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)
