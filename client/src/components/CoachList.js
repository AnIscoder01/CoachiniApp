import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector}from 'react-redux'
import { get_userslist } from '../redux/action/userActions'
import {getCurrent} from'../redux/action/authAction'
const CoachList =() => {

  const dispatch=useDispatch()
  
  

  useEffect(()=>{
    dispatch(getCurrent())
    },[])

  useEffect(()=>{
    dispatch(get_userslist())
    },[])

    const users = useSelector(state=>state.authReducer.users)
  

    if(users)
    return (
    <div style={{padding:'100px',widhth:'80%',margin:'auto'}}>  
            <h1>Coching list</h1>  
      
            <div style={{display:'flex',flexWrap:'wrap',padding:'100px',justifyContent:'space-evenly',widhth:'80%',margin:'auto'}}>

{ users.filter(coach=>coach.role==="coach").map(users=><Card style={{width: '18rem' }}>
<Card.Body>

<Card.Title>{users.name}</Card.Title>
<Card.Text>
<Table striped bordered hover variant="dark"size="sm">
<thead>
<tr>
<th>#</th>
<th>exercice </th>
<th>Nombre de serie</th>
<th>nombre de repetion</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mark</td>
<td>Otto</td>
<td>nnan</td>
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
</Card.Body>
</Card>
)}

</div>
        
    </div>

    
    )
}

export default CoachList