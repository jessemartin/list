'use strict'

import expect, { createSpy } from 'expect'
import * as actions from '../src/actions/ListActions'
import * as types from '../src/constants/ActionTypes'

describe('actions', () => {
  describe('addItem', () => {
    it('should dispatch an add action', () => {
      const dispatch = createSpy()
      const text = 'Something'
      const expectedAction = { type: types.ADD_ITEM, text }
      actions.addItem(text)(dispatch)
      expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
  describe('editItem', () => {
    it('should dispatch an edit action', () => {
      const dispatch = createSpy()
      const updatedText = 'Something else'
      const id = 1
      const expectedAction = { type: types.EDIT_ITEM, id, updatedText }
      actions.editItem(id, updatedText)(dispatch)
      expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
  describe('deleteItem', () => {
    it('should dispatch a delete action', () => {
      const dispatch = createSpy()
      const id = 1
      const expectedAction = { type: types.DELETE_ITEM, id }
      actions.deleteItem(id)(dispatch)
      expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
})
