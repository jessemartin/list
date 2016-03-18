import * as types from '../constants/ActionTypes'

function addItemOptimistic (text) {
  return { type: types.ADD_ITEM, text }
}

function editItemOptimistic (id, updatedText) {
  return { type: types.EDIT_ITEM, id, updatedText }
}

function deleteItemOptimistic (id) {
  return { type: types.DELETE_ITEM, id }
}

export function addItem (text) {
  return dispatch => {
    dispatch(addItemOptimistic(text))
    // api.addItem(text)
    //  .catch(
    //    /*
    //     *  PROJECT IDEA
    //     *  if the request failed due to server being unreachable,
    //     *  we can cache this action in localStorage to be called later
    //     *
    //     */
    //  )
  }
}

export function editItem (id, updatedText) {
  return dispatch => {
    dispatch(editItemOptimistic(id, updatedText))
  }
}

export function deleteItem (id) {
  return dispatch => {
    dispatch(deleteItemOptimistic(id))
  }
}
