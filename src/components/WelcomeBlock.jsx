import React, { useState } from 'react'
import { Button, Input, Checkbox, Form } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import axios from 'axios';

const WelcomeBlock = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };
    const finish = (e)=>{
        axios.post("https://reqres.in/api/login",{email,password})
        .then((res)=>{
            let token = res.data.token
            alert("Login Success. Token:"+token)
        })
        .catch((err)=>{
            alert("Error: "+err.response.data.error)
        })
    }
  return (
    <div>
        <h1>Welcome Back</h1>
        <p>Sub-title text goes here</p>
        <Form onFinish={(e)=>{finish(e)}}>
            <Input placeholder='Email Address *' type={"email"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <Input placeholder='Password *' type={"password"} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button type='primary' className='primary' htmlType='submit'>Login</Button>
            <div className='forgot'>
                <Checkbox onChange={onChange} style={{float:"left"}}>Remember me</Checkbox> 
                <a href="/"  style={{float:"right"}}>Forgot Password?</a>
            </div>
        </Form>
        
    </div>
  )
}

export default WelcomeBlock