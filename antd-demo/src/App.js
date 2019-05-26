import React from 'react';
import { 
  Row ,
  Col ,
  Menu
} from 'antd';
import Navleft from './components/Navleft'
import './App.css';
import Cheader from './components/Cheader';
import Home from './page/Home';
import Cfooter from './components/Cfooter';
const {SubMenu} = Menu;
function App(props) {
  return (
    <div className="App">
      <Row >
        <Col className='navleft' span={4}>
          <Navleft></Navleft>
        </Col>
        <Col span={20}>
          <Cheader></Cheader>
          {props.children}
          <Cfooter></Cfooter>
        </Col>
      </Row>
    </div>
  );
}

export default App;
