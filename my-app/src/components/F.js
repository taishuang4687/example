import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class F extends Component {
  render() {
    //   console.log(this.props);
    return (
      <div>
        FFFF
        <button onClick={()=>{
            this.props.history.push('/');
        }}>回到首页</button>
      </div>
    )
  }
}
export default withRouter(F)
