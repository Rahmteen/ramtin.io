import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import rk_logo from '../../../assets/images/rk-logo.svg';
import Typing from 'react-typing-animation';

const Landing = () => {
	return (
		<Fragment>
			<Container className="landing-container ">
				<Row className="landing-row-main text-center">
					<Col lg={12} md={8} className="text-left">
						<Link to='/works'>
							{' '}
							<Image src={rk_logo} className="brand"></Image>
						</Link>
					</Col>
					<Col lg={12} md={8} className=" my-auto text-mono text-right font-tertiary">
						<Typing speed={50} className="text-mono">
							<span className="text-mono"></span>
							My name is Ramtin Khoee.
							<Typing.Delay ms={500} />
							<br />
							<span className="text-mono">
								I solve problems <br /> and create projects.
							</span>
							<Typing.Delay ms={800} />
							<br />
							<Link to="/works">
								<span className="take-a-look text-mono pt-5">Take a look...</span>
							</Link>
							{/* <Typing.Backspace count={20} /> */}
						</Typing>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Landing;
