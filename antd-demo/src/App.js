import React from 'react';
import { 
  Row ,
  Col 
} from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={5}>left</Col>
        <Col span={19}>right</Col>
      </Row>
    </div>
  );
}

export default App;
