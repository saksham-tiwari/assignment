import React from 'react'
import { Button, Col, Input, Row, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import img1 from "./assets/img3.png"

const Grid = () => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return (
    <>
        <Row className='rowGrid'>
            <Col span={8}>
                <div className='welcome'>
                    <div>
                        <h1>Welcome Back</h1>
                        <p>Sub-title text goes here</p>
                        <Input placeholder='Email Address *' type={"email"}/>
                        <Input placeholder='Password *' type={"password"}/>
                        <Button type='primary' className='primary'>Login</Button>
                        <div><Checkbox onChange={onChange} style={{float:"left", marginLeft:"10%"}}>Remember me</Checkbox> <a href="/"  style={{float:"right", marginRight:"10%"}}>Forgot Password?</a></div>
                    </div>
                </div>
            </Col>
            <Col span={16}>
                <img src={img1} alt='one'/>
            </Col>
        </Row>
        <div className='welcome hide'>
            <div>
                <h1>Welcome Back</h1>
                <p>Sub-title text goes here</p>
                <Input placeholder='Email Address *' type={"email"}/>
                <Input placeholder='Password *' type={"password"}/>
                <Button type='primary' className='primary'>Login</Button>
                <div><Checkbox onChange={onChange} style={{float:"left", marginLeft:"10%"}}>Remember me</Checkbox> <a href="/"  style={{float:"right", marginRight:"10%"}}>Forgot Password?</a></div>
            </div>
        </div>
    </>
  )
}

export default Grid