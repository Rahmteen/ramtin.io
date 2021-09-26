import Regal from "../../assets/images/works/regal.jpg"
import eeQL from "../../assets/images/works/eeQL.jpg"
import OSCards from "../../assets/images/works/OSCards.jpg"
import EasyMenus from "../../assets/images/works/EasyMenus.jpg"
import YEETH from "../../assets/images/works/YEETH.jpg"
import Colourful from "../../assets/images/works/colourful.jpg"
import MagnaCarta from "../../assets/images/works/MagnaCarta.jpg"
import eeql_web from "../../assets/images/works/eeql-web.jpg"
import Responder from "../../assets/images/works/responder.jpg"



export const projects = [
	{
		title: 'Regal',
		description: 'An e-commerce application built to function on the ethereum blockchain.',
		technologies: [
			'react',
			'mobx',
			'node.js',
			'mongoose',
			'sass',
			'typescript',
			'html',
			'solidity',
			'truffle',
			'web3',
			'javascript',
			'webpack',
			'ipfs',
		],
		github: null,
		website: null,
		tool: false,
		image: Regal,
        current: true,
	},
	{
		title: 'eeQL',
		description: "A standalone tool created to automate endpoint test creation for GraphQL and Rest API's.",
		technologies: [
			'react',
			'electron',
			'node.js',
			'jest',
			'supertest',
			'graphql',
			'rest api',
			'context',
			'css',
			'sass',
			'three.js',
			'typescript',
			'html',
			'javascript',
		],
		github: 'https://github.com/oslabs-beta/eeQL',
		website: 'https://www.eeql.io',
		tool: true,
		image: eeQL,
        current: false,
	},
	{
		title: 'Responder',
		description: 'An open source project by SkyCrafters to manage AIM/AWS alerts with webhook intergration',
		technologies: ['aws', 'yaml', 'rest api', 'javascript'],
		github: 'https://github.com/skycrafters/responder',
		website: null,
		tool: false,
		image: Responder,
        current: false,
	},
	{
		title: 'OSCards',
		description:
			'An open source project geared towards developing learning tools for a multitude of learning styles.',
		technologies: ['react', 'rest api', 'node.js', 'css', 'html', 'javascript'],
		github: 'https://github.com/OSAbstract/OSCardsv2',
		website: null,
		tool: false,
		image: OSCards,
        current: false,
	},
	{
		title: 'EasyMenus',
		description:
			'An open source tool that allows users to create/store/edit restuarant menus and provide live QR codes for them',
		technologies: ['react', 'webpack', 'node.js', 'rest api', 'context', 'css', 'html', 'javascript'],
		github: 'https://github.com/EasyMenus/menuCreator',
		website: null,
		tool: true,
		image: EasyMenus,
        current: false,
	},
	{
		title: 'YEETH',
		description: 'A platform for accurately monitoring decentralized markets and user created portfolios.',
		technologies: [
			'react',
			'webpack',
			'node.js',
			'SQL',
			'rest api',
			'css',
			'html',
			'javascript',
		],
		github: 'https://github.com/Rahmteen/YEETH',
		website: null,
		tool: false,
		image: YEETH,
        current: false,
	},
	{
		title: 'Colourful',
		description:
			'A Google Chrome extension built as a tool to allow users to alter browser window stylings preferentially and with ease.',
		technologies: ['node.js', 'css', 'javascript', 'html'],
		github: 'https://github.com/Rahmteen/colourful',
		website: null,
		tool: true,
		image: Colourful,
        current: false,
	},
	{
		title: 'Magna Carta',
		description:
			'A standalone tool used to automate solidity smart contract creation to non-technical user specifications.',
		technologies: [
			'react',
			'electron',
			'node.js',
			'jest',
			'rest api',
			'mobx',
			'sass',
			'typescript',
			'html',
			'javascript',
		],
		github: null,
		website: null,
		tool: true,
		image: MagnaCarta,
        current: true,
	}
];