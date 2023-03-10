import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
         <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://s.tmimgcdn.com/scr/800x500/212900/spoon-and-fork-restaurant-logo_212966-original.png"
              width="100"
              height=""
              className="d-inline-block "
            />{' '}
            <span style={{fontSize:'25px'}}>Food Map</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}

export default Header