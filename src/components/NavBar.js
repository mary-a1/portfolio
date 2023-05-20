import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

export const NavBar= () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled]= useState(false);

  useEffect(() => {
    const onScroll = () => {
      if 
    }
  })

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap
          <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className='navbar-toggler-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
              <a href="#"><img src={} alt=""/></a>
              <a href="#"><img src={} alt=""/></a>
              <a href="#"><img src={} alt=""/></a>
            </div>
            <button className="vvd"><span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
