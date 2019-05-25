import React, { Component } from 'react'
import {
    Row,
    Col
} from 'antd'
import './index.css'
export default class Cheader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className='header-top'>
                        <span className='header-text'>欢迎，xxx</span>
                        <a href='#'>退出</a>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
