import React, { Component } from 'react'
import {
    Row,
    Col
} from 'antd'
import './index.css'
import formatDate from './../../utils/formatDate'
export default class Cheader extends Component {
    constructor(params) {
        super(params);
        this.state = {
            timer:''
        }
    }
    componentWillMount(){
        setInterval(() => {
            let now = new Date();
            let timer = formatDate(now);
            console.log(timer)
            this.setState({
                timer
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <Row className='header-top'>
                    <span className='header-text'>欢迎，xxx</span>
                    <a href='#'>退出</a>
                </Row>
                <Row className="header-date">
                    {this.state.timer}
                </Row>
            </div>
        )
    }
}
