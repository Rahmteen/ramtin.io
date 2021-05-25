import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import rk_logo from '../../../assets/images/RKlogo.png';

const Landing = () => {
	return (
		<Fragment>
			<Container className="landing-container " fluid>
				<Row className="landing-row-main text-center">
					<Col lg={12} md={8} className="text-left">
						<Link to='/works'>
							{' '}
							<Image src={rk_logo} className="brand"></Image>
						</Link>
					</Col>
					<Col lg={12} md={8} className=" my-auto text-mono text-right font-tertiary">
						
							<span className="text-mono"></span>
							My name is Ramtin Khoee.
						
							<br />
							<span className="text-mono">
								I solve problems <br /> and create projects.
							</span>
					
							<br />
							<Link to="/works">
								<span className="take-a-look text-mono pt-5">Take a look...</span>
							</Link>
							{/* <Typing.Backspace count={20} /> */}
						
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Landing;
