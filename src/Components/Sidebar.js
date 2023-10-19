import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../Logo/logo-2.png'


const Sidebar = () => {
  return (
    <div>
        <header>
      <Navbar bg="dark" data-bs-theme="dark" className='navbar-dark fixed-top'>
      <Container className="container justify-content-left">
        <Navbar.Brand href="#home"><NavLink to="/" style={{textDecoration:"none", color:'white'}}><Link
        to="/"> <img src={logo} style={{height: "40px"}} alt='logo' className='logo' /></Link></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className='flex-grow-0' id="basic-navbar-nav" >
          
          <Nav>
            
            <Nav.Link href="#link"><NavLink to="teacher" style={{textDecoration:"none", color:'white'}}>Teacher</NavLink></Nav.Link>
            <NavDropdown title="Subjects" id="basic-nav-dropdown" >
              <NavDropdown.Item ><NavLink to="reading" style={{textDecoration:"none", color:'white'}} >Reading</NavLink></NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink to="writing" style={{textDecoration:"none", color:'white'}}>Writing</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item><NavLink to="math" style={{textDecoration:"none", color:'white'}}>Math</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="science" style={{textDecoration:"none", color:'white'}}>Science</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="sel" style={{textDecoration:"none", color:'white'}}>SEL</NavLink></NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item >
              <NavLink to ="https://social-dojo.netlify.app" target='_blank' style={{textDecoration:"none", color:'white'}}>Community</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </div>
  )
}

export default Sidebar