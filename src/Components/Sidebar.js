import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../Container/Home/Logo/logo-2.png'
import './sidebar.scss'



const Sidebar = () => {
  return (
    <div>
        <header>
      <Navbar bg="transparent" data-bs-theme="dark" className='navbar-dark fixed-top'>
      <Container>
        <Navbar.Brand href="#home"><NavLink to="/" style={{textDecoration:"none", color:'white'}}><Link
        to="/"> <img src={logo} style={{height: "50px"}} alt='logo' className='logo' /></Link></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className='container-fluid' id="basic-navbar-nav" >
          <Nav >
            <NavDropdown title="Subjects" id="basic-nav-dropdown"  style={{ backgroundColor: 'transparent' }}  className="transparent-dropdown">
              <NavDropdown.Item href="#reading" style={{ backgroundColor: 'transparent' }} ><NavLink to="reading" style={{textDecoration:"none", color:'white'}} >Reading</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#writing" style={{ backgroundColor: 'transparent' }}>
              <NavLink to="writing" style={{textDecoration:"none", color:'white'}}>Writing</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#math" style={{ backgroundColor: 'transparent' }}><NavLink to="math" style={{textDecoration:"none", color:'white'}}>Math</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#science" style={{ backgroundColor: 'transparent' }}><NavLink to="science" style={{textDecoration:"none", color:'white'}}>Science</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#sel" style={{ backgroundColor: 'transparent' }}><NavLink to="sel" style={{textDecoration:"none", color:'white'}}>SEL</NavLink></NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="https://social-dojo.netlify.app" target='_blank' style={{ backgroundColor: 'transparent' }}>
              <NavLink to ="https://social-dojo.netlify.app" target='_blank' style={{textDecoration:"none", color:'white'}}>Community</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#teacher"><NavLink to="teacher" style={{textDecoration:"none", color:'white'}}>Teacher</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </div>
  )
}

export default Sidebar