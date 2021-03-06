import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Counter from '../components/counter'

const SubSubComp = (props) => {
  console.log('subsub')
  return <div>subsubcomponent render output</div>
}

const SubComp = (props) => {
  console.log('sub')
  return <div>subcomponent render output<SubSubComp/></div>
}

const Hello = (props) => {
  console.log('hello')
  return <div><Counter/>Hello world<SubComp/></div>
}

test('calling text method', t => {
  const wrapper = shallow(<Hello/>)
  console.log('will call wrapper.text()')
  t.is(wrapper.text(), '<Counter />Hello world<SubComp />')
})

test('calling html method', t => {
  const wrapper = shallow(<Hello/>)
  console.log('will call wrapper.html()')
  t.is(wrapper.html(), '<div><div>0</div>Hello world<div>subcomponent render output<div>subsubcomponent render output</div></div></div>')
})
