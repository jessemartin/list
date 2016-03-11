'use strict'

import * as types from '../constants/action_types.js'

const getUniqueId = (function () {
  let id = 0
  return function () {
    return id++
  }
}())

function addItem (state, action) {
  return [
    { text: action.text, id: getUniqueId() },
    ...state
  ]
}

function editItem (state, action) {
  const next = state.slice()
  const index = next.findIndex((item) => {
    return item.id === action.id
  })
  next[index].text = action.updatedText
  return next
}

function deleteItem (state, action) {
  const next = state.slice()
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
