'use strict'

import * as types from '../constants/ActionTypes.js'

const getUniqueId = (state) => {
  return state.reduce((maxId, todo) =>
    Math.max(todo.id, maxId), -1) + 1
}

function addItem (state, action) {
  return [
    { text: action.text, id: getUniqueId(state) },
    ...state
  ]
}

function editItem (state, action) {
  const next = JSON.parse(JSON.stringify(state))
  const index = next.findIndex((item) => {
    return item.id === action.id
  })
  next[index].text = action.updatedText
  return next
}

function deleteItem (state, action) {
  const next = JSON.parse(JSON.stringify(state))
  const index = next.findIndex((item) => {
    return item.id === action.id
  })
  next.splice(index, 1)
  return next
}

export default function (state = [], action) {
  switch (action.type) {
    case types.ADD_ITEM:
      return addItem(state, action)

    case types.EDIT_ITEM:
      return editItem(state, action)

    case types.DELETE_ITEM:
      return deleteItem(state, action)

    default:
      return state
  }
  return state
}
