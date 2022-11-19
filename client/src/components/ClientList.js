import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import {useDispatch, useSelector}from 'react-redux'
import { get_userslist } from '../redux/action/userActions'
import {getCurrent} from'../redux/action/authAction'

const ClientList = () => {


  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getCurrent())
    },[])
    
  useEffect(()=>{
      dispatch(get_userslist())
      },[])
     
  
  const users= useSelector(state=>state.authReducer.users)
  if(users)
  return (
    <div>
    {users.filter(coach=>coach.role==="client").map(users=><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{users&&users.name}</Card.Title>
        <Card.Text>
        
        <Table striped bordered hover variant="dark"size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Client Age </th>
          <th>Client height</th>
          <th>client weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>

        </tr>
      </tbody>
    </Table>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> )}

  </div>
  )
}

export default ClientList
