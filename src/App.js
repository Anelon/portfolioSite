import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';


//Japan Gallery components (in progress)
//import Japan from './Gallery.js';

//Personal Portfolio components
import Portfolio	from './Portfolio/Anelon.js';
import Videos		from './Portfolio/video.js';
import Code			from './Portfolio/code.js';

//CSUMB School ILP
import CSUMBPort	from './CSUMBPortfolio/Home.js';
import CST300		from './CSUMBPortfolio/CST300.js';
import CST205		from './CSUMBPortfolio/CST205.js';
import CST338		from './CSUMBPortfolio/CST338.js';

import logo			from './img/logo.svg';
import CSUMBLogo	from './img/CSUMBLogo.png';
import keyboard	from './img/Keyboard2.jpeg';
import tori			from './img/WaterTori2.jpg';
import './App.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Kass and Andrew"
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		return (
			<DocumentTitle title={this.state.title}>
				<div className="grid-y full">
					<div className="cell header">
						<h4 className="text-center">
							Sites
						</h4>
					</div>
					<div className="cell expand">
						<div className="grid-x grid-padding-x">
							<div className="medium-4 cell">
								<Link to="/Portfolio">
									<div className="Card small text-center">
										<img src={keyboard}alt="Keyboard" className="CardImg"></img>
										<br/>Portfolio Site
									</div>
								</Link>
							</div>
							<div className="medium-4 cell">
								<Link to="/CSUMBPortfolio">
									<div className="Card small text-center">
										<img src={CSUMBLogo}alt="CSUMB" className="CardImg"></img>
										<br/>CSUMB Portfolio
									</div>
								</Link>
							</div>
							<div className="medium-4 cell">
								<a href="/japan">
									{/*<Link to="/Japan"> change back when galery is working*/}
										<div className="Card small text-center">
											<img src={tori} alt="Japan" className="CardImg"></img>
											<br/>Japan Trip
										</div>
										{/*</Link>*/}
								</a>
							</div>
						</div>
					</div>
				</div>
			</DocumentTitle>
		);
	}
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Home",
			inPortfolio: false,
			inGallery: false,
			inCSUMB: false,
			inHome: true,
		}
		this.handler = this.handler.bind(this);
	}
	handler(newTitle) {
		//console.log(newTitle);
		this.setState(function(prevState, props) {
			return {
				title: newTitle,
				inHome: false,
				inCSUMB: false,
				inGallery: false,
				inPortfolio: false,
			}
		});
		if(newTitle === "Portfolio") {
			this.setState(function(prevState,props) {
				return {inPortfolio: true,}
			});
		} else if(newTitle === "Andrew Bell ILP" || newTitle[0] === "C") {//probably going to regret later
			this.setState(function(prevState,props) {
				return {inCSUMB: true,}
			});
		} else if(newTitle === "Kass and Andrew") {
			this.setState(function(prevState,props) {
				return {inHome: true,}
			});
		} else if(newTitle === "Japan Trip") {
			this.setState(function(prevState,props) {
				return {inGallery: true,}
			});
		}
	}
	render() {
		var Navi;
		const HomeNavi = (//Show Home options
			<Link to="/">
				<img src={logo} className="App-logo2" alt="logo" />
			</Link>
		);
		const PortNavi = (//Show Portfolio options
			<li>
				<li><Link className="NavLink" to="/Portfolio">Home</Link></li>
				<li><Link className="NavLink" to="/Portfolio/Code">Code</Link></li>
				<li><Link className="NavLink" to="/Portfolio/Video">Video</Link></li>
				{/*<li><Link className="NavLink" to="/Portfolio/Graphics">Graphics</Link></li>*/}
			</li>
		);
		const CSUMBNavi = (//Show CSUMB Portfolio options
			<li>
				<li><Link className="NavLink" to="/CSUMBPortfolio">Home</Link></li>
				<li><Link className="NavLink" to="/CSUMBPortfolio/CST338">Recent Class</Link></li>
			</li>
		);
		const GallNavi = (//Show Gallery options
			<div/>
		);

		if (this.state.inHome) Navi = HomeNavi;
		else if (this.state.inPortfolio) Navi = PortNavi;
		else if (this.state.inGallery) Navi = GallNavi;
		else if (this.state.inCSUMB) Navi = CSUMBNavi;

		return (
			<DocumentTitle title={this.state.title}>
				<Router>
					<div className="grid-y medium-grid-frame">
						<div className="cell shrink">
							<header className="App-header">
								<ul className="menu align-center">
									<li>
										<Link to="/">
											<img src={logo} className="App-logo" alt="logo" />
										</Link>
									</li>
									<li><h2 className="App-title">{this.state.title}</h2></li>
									{Navi}
								</ul>
							</header>
						</div>
						<div className="cell auto background">
							<Route 
								exact path="/" 
								render={(props) => <Home {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/Portfolio" 
								render={(props) => <Portfolio {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/CSUMBPortfolio" 
								render={(props) => <CSUMBPort {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/CSUMBPortfolio/CST300"
								render={(props) => <CST300 {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/CSUMBPortfolio/CST205"
								render={(props) => <CST205 {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/CSUMBPortfolio/CST338"
								render={(props) => <CST338 {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/Portfolio/Video" 
								render={(props) => <Videos {...props} handler={this.handler} />}
							/>
							<Route 
								exact path="/Portfolio/Code" 
								render={(props) => <Code {...props} handler={this.handler} />}
							/>
						</div>
					</div>
				</Router>
			</DocumentTitle>
		);
	}
}
export default Page;
