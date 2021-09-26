import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { Nav, Navbar, Container, Col, Row, Image, Button, NavDropdown, FormControl, Alert } from 'react-bootstrap';
import rk_logo from '../../../assets/images/portfolio.png';

const NavBar = () => {
	const [copied, setCopied] = useState(false);

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<Container className="navbar-container text-white">
			<Navbar className="nav-bar text-white" bg="dark" expand="lg" variant="dark">
				<Navbar.Brand as={Link} to="/">
					<Image src={rk_logo} className="brand"></Image>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav " className="text-white">
					<Nav className="mr-auto text-white">
						<Nav.Link className="text-white" as={Link} to="/works">
							works
						</Nav.Link>
						<Nav.Link className="text-white"  href="#link"></Nav.Link>
						<NavDropdown className="text-white" title="contact" id="nav-dropdown">
								<NavDropdown.Item href="mailto:ramtin.khoee@gmail.com">Email</NavDropdown.Item>
								<NavDropdown.Item onClick={() => openInNewTab('https://www.linkedin.com/in/ramtinkhoee/')}>
							LinkedIn <span className='ml-2'><i className="fas fa-external-link-alt"></i></span>
							</NavDropdown.Item>
							</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default NavBar;
