import expect, { createSpy } from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { ListItem } from '../../src/components/ListItem.jsx'

const setup = () => {
  const props = { text: 'An item', itemId: 1, deleteItem: createSpy() }
  const renderer = TestUtils.createRenderer()
  renderer.render(<ListItem {...props} />)
  return {
    props,
    output: renderer.getRenderOutput()
  }
}

describe('ListItem', () => {
  it('should render correctly', () => {
    const { output } = setup()

    expect(output.type).toBe('li')
    expect(output.props.className).toBe('listItem')
  })
})
