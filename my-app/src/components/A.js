import React, { Component } from 'react'

export default class A extends Component {
  render() {
    console.log(this.props.match.params.num)
    return (
      <div>
        AAAA
      </div>
    )
  }
}
