import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      val: 0
    }
  }
  render () {
    return <div>{this.state.val}</div>
  }
}

export default Counter
