import expect, { createSpy } from 'expect'
import * as actions from '../src/actions/ListActions'
import * as types from '../src/constants/ActionTypes'

describe('actions', () => {
  let dispatch
  beforeEach(() => {
    dispatch = createSpy()
  })

  describe('addItem', () => {
    it('should dispatch an add action', () => {
      const text = 'Something'
      actions.addItem(text)(dispatch)
      expect(dispatch).toHaveBeenCalledWith({ type: types.ADD_ITEM, text })
    })
  })

  describe('editItem', () => {
    it('should dispatch an edit action', () => {
      const id = 1
      const updatedText = 'Something else'
      actions.editItem(id, updatedText)(dispatch)
      expect(dispatch).toHaveBeenCalledWith(
        { type: types.EDIT_ITEM, id, updatedText }
      )
    })
  })

  describe('deleteItem', () => {
    it('should dispatch a delete action', () => {
      const id = 1
      actions.deleteItem(id)(dispatch)
      expect(dispatch).toHaveBeenCalledWith({ type: types.DELETE_ITEM, id })
    })
  })
})
