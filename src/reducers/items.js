'use strict'

import * as types from '../constants/action_types.js'

const getUniqueId = (function () {
  let id = 0
  return function () {
    return id++
  }
}())

function editItem (state, action) {
  const newState = state.slice()
  const index = newState.findIndex((item) => {
    return item.id === action.id
  })
  newState[index].text = action.updatedText
  return newState
}

function deleteItem (state, action) {
  const newState = state.slice()
  const index = newState.findIndex((item) => {
    return item.id === action.id
  })
  newState.splice(index, 1)
  return newState
}

export default function (state = [], action) {
  switch (action.type) {
    case types.ADD_ITEM:
      return [
        { text: action.text, id: getUniqueId() },
        ...state
      ];

    case types.EDIT_ITEM:
      return editItem(state, action)

    case types.DELETE_ITEM:
      return deleteItem(state, action)

    default:
      return state
  }
  return state
}
