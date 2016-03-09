'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import ListItem from './ListItem.jsx'

const List = React.createClass({
  render() {
    return (
      <ul className="list">
        { this.props.items.map(({ id, text }) => <ListItem key={id} itemId={id} text={text} />) }
      </ul>
    )
  }
})

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps (dispatch) {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
