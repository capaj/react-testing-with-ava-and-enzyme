import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Counter from '../components/counter'

test('calling text method', t => {
  const wrapper = shallow(<Counter/>)
  wrapper.simulate('click')
  t.is(wrapper.text(), '1')

  wrapper.setState({
    val: 0
  })
  console.log(wrapper.state())
  t.is(wrapper.text(), '0')
})
