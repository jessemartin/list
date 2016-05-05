import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import IconButton from '../../src/components/IconButton.jsx'

const setup = (props) => {
  const renderer = TestUtils.createRenderer()
  renderer.render(<IconButton {...props} />)
  return {
    output: renderer.getRenderOutput()
  }
}

describe('IconButton', () => {
  const props = {}
  const { output } = setup(props)

  it('should render correctly', () => {
    expect(output.type).toBe('a')
    expect(output.props.className).toBe(`iconButton`)
  })
  it('should create an icon child', () => {
    const { children } = output.props
    expect(typeof children[0].type).toBe('function')
    expect(children[1].type).toBe('span')
  })
})
