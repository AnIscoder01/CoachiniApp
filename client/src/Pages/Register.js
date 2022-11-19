import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { useState } from 'react'
import{useNavigate} from'react-router-dom'
import { useDispatch} from 'react-redux'
import { register } from '../redux/action/authAction'



const Register = () => {  

  const [data, setData] = useState({ name:"",mail:"",password:"",phone:0,age:0,height:0,weight:0,role:""})

  const dispatch=useDispatch()
  const navigate=useNavigate()

  //handleChange

  const handleChange=(e)=>{

    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(register(data,navigate))
    
  }
  
    return (
    <div>




<Form  onSubmit={handleSubmit} style={{marginLeft:'500px',marginRight:'500px'}}  >
<Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="mail" onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="number" placeholder="Enter phone number" name="phone" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Age</Form.Label>
    <Form.Control type="number" placeholder="Enter age" name="age" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>height</Form.Label>
    <Form.Control type="number" placeholder="Enter height"name="height" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>weight</Form.Label>
    <Form.Control type="number" placeholder="Enter weight" name="weight" onChange={handleChange} />
  </Form.Group>
 

  <Button variant="primary" type="submit">
    Register 
  </Button>
</Form>
    </div>
  )
}

export default Register