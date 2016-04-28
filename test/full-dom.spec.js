import React from 'react'
import test from 'ava'
import jsdom from 'jsdom'
import { mount } from 'enzyme'
import Counter from '../components/counter'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView
global.document = doc
global.window = win

const SubSubComp = (props) => {
  console.log('subsub')
  return <div>subsubcomponent render output</div>
}

const SubComp = (props) => {
  console.log('sub')
  return <div>subcomponent render output<SubSubComp/></div>
}

class Hello extends React.Component {
  render () {
    return <div><Counter/>Hello world<SubComp/></div>
  }
}

test('calling text method', t => {
  const wrapper = mount(<Hello/>)
  console.log('will call wrapper.text()')
  t.is(wrapper.text(), '0Hello worldsubcomponent render outputsubsubcomponent render output')
})

test('calling html method', t => {
  const wrapper = mount(<Hello/>)
  console.log('will call wrapper.html()')
  console.log(wrapper.state())
  t.is(wrapper.html(), '<div><div>0</div>Hello world<div>subcomponent render output<div>subsubcomponent render output</div></div></div>')
})
