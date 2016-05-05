import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { List } from '../../src/components/List.jsx'

const setup = (props={ items: [] }) => {
  const renderer = TestUtils.createRenderer()
  renderer.render(<List {...props} />)
  return {
    output: renderer.getRenderOutput()
  }
}

describe('List', () => {
  it('should render correctly', () => {
    const { output } = setup()

    expect(output.type).toBe('ul')
    expect(output.props.className).toBe('list')
  })

  describe('when passed items', () => {
    it('should render the items as child components', () => {
      const items = [
        { id: 0, text: 'first' },
        { id: 1, text: 'second' }
      ]
      const { output } = setup({ items: items })
      expect(output.props.children.length).toBe(items.length)
    })
  })
})