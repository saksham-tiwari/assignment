import React from 'react'
import { Col, Row } from 'antd';
import img1 from "./assets/img3.png"
import WelcomeBlock from './WelcomeBlock';

const Grid = () => {
  return (
    <>
        <Row className='rowGrid'>
            <Col span={8}>
                <div className='welcome'>
                    <WelcomeBlock/>
                </div>
            </Col>
            <Col span={16}>
                <img src={img1} alt='one'/>
            </Col>
        </Row>
        <div className='welcome hide'>
            <WelcomeBlock/>
        </div>
    </>
  )
}

export default Grid