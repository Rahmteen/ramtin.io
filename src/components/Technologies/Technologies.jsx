import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';

const Technologies = ({ technologies }) => {
	return (
		<Container className="works-display-container">
			{technologies.map((tech, i) => {
				if (tech === 'react') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-react"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'mobx') {
					return (
						<span key={i + 'tech'}>
							<i className="fak fa-mobx"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'node.js') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-node-js"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'yaml') {
					return (
						<span key={i + 'tech'}>
							<i className="fas fa-brackets-curly"></i>
							{` ${tech}, `}
						</span>
					)
				} else if (tech === 'aws') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-aws"></i>
							{` ${tech}, `}
						</span>
					)
				}
				else if (tech === 'electron') {
					return (
						<span key={i + 'tech'}>
							<i className="fas fa-atom-alt"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'sass') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-sass"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'javascript') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-js"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'html') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-html5"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'solidity') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-ethereum"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'rest api') {
					return (
						<span key={i + 'tech'}>
							<i className="fas fa-wifi-2"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'context') {
					return (
						<span key={i + 'tech'}>
							<i className="fad fa-atom"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'css') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-css3-alt"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'truffle') {
					return (
						<span key={i + 'tech'}>
							<i className="fas fa-box-full"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'web3') {
					return (
						<span key={i + 'tech'}>
							<i className="fak fa-web3"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'react') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-react"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'three.js') {
					return (
						<span key={i + 'tech'}>
							<i className="fas fa-code"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'typescript') {
					return (
						<span key={i + 'tech'}>
							<i className="fak fa-typescript"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'mongoose' || tech === 'SQL') {
					return (
						<span key={i + 'tech'}>
							<i className="far fa-database"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'jest') {
					return (
						<span key={i + 'tech'}>
							<i className="fak fa-jest"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'supertest') {
					return (
						<span key={i + 'tech'}>
							<i className="fad fa-flask"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'webpack') {
					return (
						<span key={i + 'tech'}>
							<i className="fab fa-codepen"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'ipfs') {
					return (
						<span key={i + 'tech'}>
							<i className="fak fa-ipfs"></i>
							{` ${tech}, `}
						</span>
					);
				} else if (tech === 'graphql') {
					return (
						<span key={i + 'tech'}>
							<i className="fak fa-graphql"></i>
							{` ${tech}, `}
						</span>
					);
				} else
					return (
						<span key={i + 'tech'}>
							<pre>{tech}, </pre>
						</span>
					);
			})}
		</Container>
	);
};

export default Technologies;
