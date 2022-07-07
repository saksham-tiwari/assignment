import { Button } from 'antd'
import React from 'react'

const Nav = () => {
  return (
    <div className='navbar'>
        <span style={{fontSize:"20px"}}>ATools.</span>
        <div>
            <Button type="primary" className='primary'>Start Free Trial</Button>
            <Button>Login</Button>
        </div>
        
    </div>
  )
}

export default Nav