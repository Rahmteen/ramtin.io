import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Card, ListGroupItem, ListGroup, CardDeck } from 'react-bootstrap';
import Technologies from '../Technologies';

const WorksDisplay = ({ title, image, description, technologies, github, website, tool, current }) => {
	
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<Fragment>
			<Card className="mb-3 mt-3">
				<Card.Img as={Image} variant="top" src={image} />
				<Card.Body>
					<Card.Title className="text-tertiary">{title}</Card.Title>
					<Card.Text className="">{description}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						<div className="text-tertiary">Technologies:</div>
					</ListGroupItem>
					<ListGroupItem>
						<Technologies technologies={technologies} />
					</ListGroupItem>
					{github ? (
						<ListGroupItem onClick={() => openInNewTab(`${github}`)}>
							<i className="fab fa-github-square"></i>
							<span>{`${' '} github`}</span>
						</ListGroupItem>
					) : (
						<ListGroupItem>
							<i className="fas fa-eye-slash"></i>
							<span>{`${' '} private`}</span>
						</ListGroupItem>
					)}
					{website ? (
						<ListGroupItem onClick={() => openInNewTab(`${website}`)}>
							<i className="fad fa-wifi"></i>
							<span>{`${' '} website`}</span>
						</ListGroupItem>
					) : (
						<ListGroupItem>
							<i className="fas fa-wifi-slash"></i>
							<span>{`${' '}`}</span>
						</ListGroupItem>
					)}
				</ListGroup>
			</Card>
		</Fragment>
	);
};

export default WorksDisplay;
