import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch,Redirect,Prompt,NavLink} from 'react-router-dom'
import A from './components/A.js'
import B from './components/B.js'
import C from './components/C.js'
import Home from './components/Home.js'
import F from './components/F.js'
import './App.css'
import store from './store'
import Children from './components/Children.js';
function App() {
  return (
    <div className="App">
      <div></div>
      <button onClick={()=>{
        console.log('我要修改num值')//通过触发action用来修改num值
      }}>add</button>
      <hr></hr>
      <Router>
        <NavLink exact to='/'>首页</NavLink>------
        <NavLink to='/a/666'>A页面</NavLink>-----
        <NavLink to='/b'>B页面</NavLink>-----
        <NavLink to='/c/555'>C页面</NavLink>----
        <NavLink to='/d'>D页面</NavLink>-----
        <NavLink to='/children'>children</NavLink>-----
        <NavLink to='/redirect'>redirect</NavLink>
        {/* <Route exact path='/' component={Home}></Route>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route> */}
        {/* <Switch> 
          <Route path='/a' component={A}></Route>
          <Route path='/b' component={B}></Route>
          <Route path='/' component={Home}></Route>
          children 一直被渲染 exact严格匹配 switch只是匹配一个
        </Switch> */}
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/a/:num' component={A}></Route>
          <Route exact path='/b' component={B}></Route>
          <Route exact path='/c/:id' component={C}></Route>
          <Route exact path='/d' render={()=>{
            return <h1>render component</h1>
          }}></Route>
          <Route exact path='/children' children={(props)=>{
            let child = props.match?'000':'111';
            // console.log(child)
            return <Children child={child}></Children>
          }}></Route>
          <Route exact path='/redirect' render={()=>{
            return <Redirect to='/'></Redirect>
          }}></Route>
          <hr></hr>
          <F></F>
      </Router>
    </div>
  );
}

export default App;
