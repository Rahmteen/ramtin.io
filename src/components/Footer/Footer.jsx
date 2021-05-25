import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { Nav, Navbar, Container, Col, Row, Image, Button, NavDropdown, FormControl, Alert } from 'react-bootstrap';

const Footer = () => {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<Container className="footer-container">
			<Nav className="justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link onClick={() => openInNewTab('mailto:ramtin.khoee@gmail.com')}><i className="fas fa-envelope-square"></i></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => openInNewTab('https://github.com/Rahmteen')}>
						<i className="fab fa-github-square"></i>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => openInNewTab('https://ramtinkhoee.medium.com/i-dont-like-tdd-5abe09536523')}>
						<i className="fab fa-medium"></i>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => openInNewTab('https://www.linkedin.com/in/ramtinkhoee/')}><i className="fab fa-linkedin"></i></Nav.Link>
				</Nav.Item>
			</Nav>
		</Container>
	);
};

export default Footer;
