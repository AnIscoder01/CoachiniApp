import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { login } from '../redux/action/authAction'
import{useNavigate} from'react-router-dom'
const Login = () => {
  
    const [data, setData] = useState({mail:"",password:""})
  
    const dispatch=useDispatch()
    const navigate=useNavigate()
    //handleChange
  
  
    const handleChange=(e)=>{
  
      setData({...data,[e.target.name]:e.target.value})
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(login(data,navigate))
    }
    
  return (
    <div>
            <Form style={{margin:'200px'}} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='mail' onChange={handleChange}/>
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>
                </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default Login