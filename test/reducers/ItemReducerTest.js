import expect from 'expect'
import ItemReducer from '../../src/reducers/ItemReducer'
import * as types from '../../src/constants/ActionTypes'

const ACTIONS = {
  ADD: { type: types.ADD_ITEM, text: 'Added item' },
  EDIT: { type: types.EDIT_ITEM, id: 0, updatedText: 'Updated item' },
  DELETE: { type: types.DELETE_ITEM, id: 0 }
}
const ITEMS = [ { id: 0, text: 'Initial item' } ]

describe('ItemReducer', () => {
  it('should return the initial state', () => {
    expect(
      ItemReducer(undefined, {})
    ).toEqual([])
  })

  describe('when called with an add action', () => {
    it('should return state with the added item', () => {
      expect(
        ItemReducer(undefined, ACTIONS.ADD)
      ).toEqual([
        { id: 0, text: ACTIONS.ADD.text }
      ])
    })
  })

  describe('when called with an add action and state', () => {
    it('should return state with the added item', () => {
      expect(
        ItemReducer(ITEMS, ACTIONS.ADD)
      ).toEqual([
        { id: 1, text: ACTIONS.ADD.text },
        { id: 0, text: 'Initial item' }
      ])
    })
  })

  describe('when called with an edit action', () => {
    it('should return state with the added item', () => {
      expect(
        ItemReducer(ITEMS, ACTIONS.EDIT)
      ).toEqual([
        { id: 0, text: ACTIONS.EDIT.updatedText }
      ])
    })
  })

  describe('when called with a delete action', () => {
    it('should return state without the item', () => {
      expect(
        ItemReducer(ITEMS, ACTIONS.DELETE)
      ).toEqual([])
    })
  })
})
