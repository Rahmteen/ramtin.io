import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { Nav, Navbar, Container, Col, Row, Image, Button, NavDropdown, FormControl, Alert } from 'react-bootstrap';
import rk_logo from '../../../assets/images/RKlogo.png';

const NavBar = () => {
	const [copied, setCopied] = useState(false);

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		// <Navbar className="nav-bar" fixed="top" collapseOnSelect variant="dark">
		<Container className="navbar-container">
			{/* <Alert show={copied} variant={'success'} dismissible onClose={() => setCopied(false)}>
            <Alert.Heading>Email Address Copied to Clipboard</Alert.Heading>
            </Alert> */}
			<Navbar className="nav-bar" bg="light" expand="lg">
				<Navbar.Brand as={Link} to="/">
					<Image src={rk_logo} className="brand"></Image>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav ">
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/works">
							works
						</Nav.Link>
						<Nav.Link href="#link"></Nav.Link>
						<NavDropdown title="contact" id="nav-dropdown">
								<NavDropdown.Item href="mailto:ramtin.khoee@gmail.com">Email</NavDropdown.Item>
								<NavDropdown.Item onClick={() => openInNewTab('https://www.linkedin.com/in/ramtinkhoee/')}>
							LinkedIn <span className='ml-2'><i className="fas fa-external-link-alt"></i></span>
							</NavDropdown.Item>
							</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* <CopyToClipboard text="ramtin.khoee@gmail.com" onCopy={() => setCopied(true)}>
			</CopyToClipboard> */}
			{/* <Navbar.Brand as={Link} className="mt-4" to="/">
					
				</Navbar.Brand>
                <Nav className='mx-auto '>
				<Nav.Link as={Link} className='text-black' to="/works">Works</Nav.Link>
				<Nav.Link as={Link} className='text-black' to="/contact">Inquire</Nav.Link>
                </Nav>  */}
		</Container>
		// </Navbar>
	);
};

export default NavBar;
