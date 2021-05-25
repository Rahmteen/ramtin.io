import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, CardGroup } from 'react-bootstrap';
import WorksDisplay from '../../components/WorksDisplay';
import { projects } from '../../data/works.js';

const Works = () => {
	const [works, setWorks] = useState(projects);
	
	return (
		<Fragment>
			<Container className="works-container" fluid>
				<CardGroup className="card-group-works">
					{works &&
						works.map((proj, i) => {
							return (
								<WorksDisplay
									key={i}
									image={proj.image}
									title={proj.title}
									description={proj.description}
									technologies={proj.technologies}
									github={proj.github}
									website={proj.website}
									tool={proj.tool}
									current={proj.current}
								/>
							);
						})}
				</CardGroup>
			</Container>
		</Fragment>
	);
};

export default Works;
