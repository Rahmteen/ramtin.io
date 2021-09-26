import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button, Carousel } from "react-bootstrap";
import rk_logo from "../../../assets/images/RKlogo.png";
import axios from "axios";

const Landing = () => {
	const [gitHub, setGithub] = useState(null);

	useEffect(() => {
		// if (gitHub === null) {
		// 	axios
		// 		.get("https://api.github.com/users/rahmteen/events")
		// 		.then(function (response) {
		// 			setGithub(response.data);
		// 			console.log(response.data);
		// 		})
		// 		.catch(function (error) {
		// 			console.log(error);
		// 		})
		// 		.then(function () {
		// 			console.log(gitHub);
		// 		});
		// }
	}, []);

	const dateParser = (dateStr) => {
		// 2021-09-25T21:26:18Z
		let year = dateStr.split("-")[0];
		let month = dateStr.split("-")[1];
		let day = dateStr.split("-")[2].slice(0, 2);
		let time = dateStr.split("T")[1].slice(0, 8);
		let hour = time.split(":")[0];
		let min = time.split(":")[1];
		let sec = time.split(":")[2];
		const utcDate1 = new Date(year, month - 1, day, hour, min, sec);
		return utcDate1.toString();
	};
	return (
		<Fragment>
			<Container className="landing-container landing-row-main " fluid>
				<Row className="mx-auto animate__animated animate__fadeInDown animate__delay-0.5s">
					<Col md={12} className="text-white text-center mb-2">
						Recent History
					</Col>
					{gitHub
						? gitHub.slice(0, 4).map((history) => (
								<Col key={history.created_at} md={12} className="text-center p-2">
									<Image src={history.actor.avatar_url} width="30" height="30" rounded className=""></Image>
									{/* <small className="text-white">{history.type === "PushEvent" ? <small>push </small> : <small>create </small>}</small> */}
									<small>{" push "}</small>
									<small className="text-dgr"> {history.repo.name}</small>
									{" on "}

									<small className="text-dgr">{dateParser(history.created_at)}</small>
								</Col>
						  ))
						: null}
				</Row>
				<Row><Col className="text-center mt-2" md={12}><small><i>powered by the Github API</i></small></Col></Row>
				<Row className="text-center">
					{/* <Col lg={12} md={8} className="text-left animate__animated animate__fadeInDown animate__delay-0.5s">
						<Link to="/works">
							{' '}
							<Image src={rk_logo} className="brand"></Image>
						</Link>
					</Col> */}
					{/* <Col
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
					</Col> */}
					<Col className="animate__animated animate__fadeInDown animate__delay-1s">
						<Link to="/works">
							<div className="take-a-look text-mono pt-5">
								<Button size={"lg"} variant="outline-success">
									Enter
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
