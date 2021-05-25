import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Carousel } from 'react-bootstrap';
import rk_logo from '../../../assets/images/RKlogo.png';

const Landing = () => {
	return (
		<Fragment>
			<Container className="landing-container " fluid>
				<Row className="landing-row-main text-center">
					<Col lg={12} md={8} className="text-left animate__animated animate__fadeInDown animate__delay-0.5s">
						<Link to="/works">
							{' '}
							<Image src={rk_logo} className="brand"></Image>
						</Link>
					</Col>
					<Col
						lg={12}
						md={8}
						className="animate__animated animate__fadeInDown animate__delay-1s my-auto text-mono text-right font-tertiary">
						<span className="text-mono"></span>
						My name is Ramtin Khoee.
					</Col>
					<Col
						lg={12}
						md={8}
						className="animate__animated animate__fadeInDown animate__delay-1s my-auto text-mono text-right font-tertiary">
						<span className="text-mono">
							I solve problems <br /> and create projects.
						</span>
						<br />
					</Col>
					<Col className="animate__animated animate__fadeInDown animate__delay-2s">
						<Link to="/works">
							<div className="take-a-look text-mono pt-5">
								<Button size={'lg'} variant="outline-success">
									Take A Look
								</Button>
							</div>
						</Link>
					</Col>
				</Row>
			</Container>

		</Fragment>
	);
};

export default Landing;
