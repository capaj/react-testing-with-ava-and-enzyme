import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      val: 0
    }
  }
  render () {
    return <div onClick={() => {
        console.log('click was called')
      this.setState({val: this.state.val + 1})
    }}>{this.state.val}</div>
  }
}

export default Counter
