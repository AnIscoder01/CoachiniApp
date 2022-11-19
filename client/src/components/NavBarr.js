import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/action/authAction'

const NavBarr = () => {
 const auth=useSelector(state=>state.authReducer.auth)
 const user=useSelector(state=>state.authReducer.user)
 const users=useSelector(state=>state.authReducer.users)
const dispatch=useDispatch()
 ///logout
const handleLogout=()=>{
dispatch(logout())
}
 return (
    <div>  
      

    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to="/" style={{paddingLeft: 13, textDecoration: 'none',color:"green"}}>    Coachini </Link></Navbar.Brand>
  <Nav className='me-left'><Link to="/"  style={{paddingLeft: 13, textDecoration: 'none',color:"grey"}}>    Home Page </Link></Nav>


    <Nav className="me-auto">
    
      {auth&&(user.role==="client")?<Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none',color:"grey"}} to ="/coachlist">Meet our coaches</Link> </Nav.Link>:<Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none',color:"grey"}} to ="/clientlist">Meet our clients</Link> </Nav.Link>}
      
      <Nav.Link href="#pricing">Conctact</Nav.Link>
    </Nav>
    
    <Nav className='me-left'><Link to="/"  style={{paddingLeft: 13, textDecoration: 'none',color:"grey"}}>    Home Page </Link></Nav>

    <Nav className='me-right'>
    {
      auth&&(user.role==="client") ?<Link to="/profile" style={{paddingLeft: 13, textDecoration: 'none',color:"grey"}}>  Profile  <Button variant="light" onClick={handleLogout}>Logout</Button> </Link>
      :auth&&(user.role==="coach")?<Link to="/profile" style={{paddingLeft: 13, textDecoration: 'none',color:"grey"}}> Profile   <Button variant="light" onClick={handleLogout}>Logout</Button> </Link>:<> 
        
    <Link to="/login">    <Button variant="light">Login</Button> </Link>
    <Link to="/register">     <Button variant="primary">Register </Button></Link>

      </>
    }

    </Nav>


    </Container>
  </Navbar>
  </div>
  )
}

export default NavBarr