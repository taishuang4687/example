import React, { Component } from 'react'

export default class Children extends Component {
  render() {
    return (
      <div>
        i am Children
        {this.props.child}
      </div>
    )
  }
}
