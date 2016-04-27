import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Hello from '../components/hello-world'

test('title', t => {
  const wrapper = shallow(<Hello/>)
  console.log(wrapper)
  t.deepEqual(wrapper.node.props, { childrn: 'Hello world' })
})
