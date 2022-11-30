import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillHome} from 'react-icons/ai';
import { ImAndroid} from 'react-icons/im';




const Header = () => {
  return (
    <> 
        <Navbar bg="dark" variant="dark"  collapseOnSelect>
        <Container>
        <Link to='/' style={{textDecoration:"none"}}>
          <Navbar.Brand >ZEN SHOP</Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
          <Nav.Link  > <Link to='/' className='navlinks'> <AiFillHome /> HOME </Link> </Nav.Link>
            <Nav.Link ><BsFillCartFill /> CART</Nav.Link>
            <Nav.Link ><FaUserCircle /> SIGN IN</Nav.Link>
         
            <Nav.Link > <Link to='/account'  className='navlinks'> <ImAndroid/> ACCOUNT    </Link> </Nav.Link>
         
          </Nav>


   
        </Container>
      </Navbar>
    </>
  )
}

export default Header
