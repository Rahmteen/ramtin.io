import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button, CardGroup } from "react-bootstrap";
import WorksDisplay from "../../components/WorksDisplay";
import { projects } from "../../data/works.js";
import Technologies from "../../components/Technologies";

const Works = () => {
	const [works, setWorks] = useState(projects);
	const [work, setWork] = useState(null);

	useEffect(() => {
		console.log(work);
	}, [work]);

	return (
		<Fragment>
			<Container className="works-container text-center mx-auto">
				{/* <Row className="mx-auto text-center"> */}
				{/* <CardGroup className="card-group-works"> */}
				{/* {works &&
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
						})} */}
				<small className="text-dgr">
					<i>contributions, products and projects:</i>
				</small>
				<br />
				<small>(hint: click on icons to see more)</small>
				<br />
				<br />
				{works &&
					works.map((proj, i) => {
						return <Image onClick={() => setWork(i)} src={proj.image} width="75px" className="p-1"></Image>;
					})}
				{/* </Row> */}
				{/* </CardGroup> */}
			</Container>
			<Container className="mt-3">
				{typeof work === "number" && (
					<Row className="text-center">
						<Col className="h3 text-white pb-1" md={12}>
							{works[work].title}
						</Col>
						<Col className="mb-2 pb-2" md={12}>
							<Image src={works[work].image} width="200px" height="200px" />
						</Col>
						<Col className="text-white" md={12}>
							<small>{works[work].description}</small>
						</Col>
					<br />
					<br />
						<div className="text-white"><small> Tech: <Technologies technologies={works[work].technologies} /></small></div>
				
						<Col className="mt-4 text-white" md={12}><a href={works[work].github}><i className="fab fa-github-square text-white"></i></a></Col>
						{/* <Col md={12}>{works[work].website}</Col> */}
					</Row>
				)}
			</Container>
		</Fragment>
	);
};

export default Works;
