import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Icon from '../../src/components/Icon.jsx'

const setup = (props) => {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Icon {...props} />)
  return {
    output: renderer.getRenderOutput()
  }
}

describe('Icon', () => {
  const props = {
    icon: 'check',
    paths: { 'check': ['M864 128l-480 480-224-224-160 160 384 384 640-640z'] }
  }
  const { output } = setup(props)

  it('should render correctly', () => {
    expect(output.type).toBe('svg')
    expect(output.props.className).toBe(`icon ${props.icon}`)
  })
  it('should create svg path children', () => {
    const { children } = output.props
    expect(React.Children.only(children).type).toBe('g')
  })
})
